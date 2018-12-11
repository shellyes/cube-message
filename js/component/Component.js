const ComponentState = {
    NONE: 0,        // 无状态
    ACTIVATE: 1,      // 活动
    DEACTIVATE: 2     // 停用
};

class Component extends HTMLElement {
    constructor(props) {
        super();

        // 组件状态
        this.comstate = ComponentState.NONE;

        this.data = {};
        this.props = props || {};
//      this.style.display = 'block';
        this.unloadTimer = null;

        this.initProps();

        this.vdom = null;
    }

    load(parentDom = document.body) {
        if (this.comstate === ComponentState.NONE) {
            parentDom.appendChild(this);
        }
    }

    unload() {
        if (this.comstate !== ComponentState.NONE) {
            this.parentNode.removeChild(this);
        }
    }

    async(cb) {
        return (...args) => {
            if (this.comstate !== ComponentState.NONE) cb(...args);
        };
    }

    initComData() {
        // 初始化动态属性
        for (let item in this.data) {
            if (this.data.hasOwnProperty(item)) {
                let val = this.data[item];
                delete this.data[item];
                Object.defineProperty(this.data, item, {
                    enumerable: false,
                    configurable: false,
                    set: (value) => {
                        val = value;

                        let task = (els) => {
                            for (let el of els) {
                                if (el instanceof Component) continue;

                                if (el.tagName.toLocaleLowerCase() === 'sp-data' && el.getAttribute('name') === item) {
                                    if (el.getAttribute('type') === 'html') {
                                        el.innerHTML = value;
                                    } else {
                                        el.textContent = value;
                                    }
                                }

                                if (el.children) task(el.children);
                            }
                        };
                        task(this.children);
                    },

                    get: () => {
                        return val;
                    }
                });

                // 首次修改以生效
                this.data[item] = val;
            }
        }

        // 初始化事件
        let task = (els) => {
            for (let el of els) {
                if (el instanceof Component) continue;

                let attributes = el.attributes;
                for (let attr of attributes) {
                    let name = attr.name;
                    if (name.indexOf('sp-') === 0) {
                        el['on' + name.substring(3, name.length)] = (e) => {
                            e.dom = el;
                            this[attr.value](e);
                        };
                    }
                }

                if (el.children) task(el.children);
            }
        };
        task(this.children);

    }

    initProps() {
        let attributes = this.attributes;
        for (let attr of attributes) {
            let name = attr.name;
            if (name !== 'style' && name.indexOf('sp-') === -1) {
                let camelName = name.replace(/-(\w)/g, function(all, letter){
                    return letter.toUpperCase();
                });
                this.props[camelName] = attr.value;
            }
        }
    }

    render() { }

    deactivate() {
        if (this.comstate === ComponentState.ACTIVATE) {
            this.comstate = ComponentState.DEACTIVATE;
            this.vdom = document.createDocumentFragment();
            this.vdom.appendChild(this);
        }
    }

    reactivate(parentDom = document.body) {
        if (this.comstate === ComponentState.DEACTIVATE) {
            this.comstate = ComponentState.ACTIVATE;
            let d = Date.now();
            parentDom.appendChild(this.vdom);
            console.log('Component Reactivate 耗时: ' + (Date.now() - d));
            this.vdom = null;
            this.onReactivated();
        }
    }

    onLoad() { }

    onUnload() { }

    onDeactivated() { }

    onReactivated() { }

    connectedCallback() {
        clearTimeout(this.unloadTimer);

        if (this.comstate === ComponentState.NONE) {
            this.comstate = ComponentState.ACTIVATE;

            //let shadow = this.attachShadow({mode: 'open'});
            let html = this.render();
            if (typeof html === 'string') {
                this.innerHTML = html;
            } else {
                this.appendChild(html);
            }

            this.initComData();
            this.onLoad();
        } else if (this.comstate === ComponentState.DEACTIVATE) {
            this.comstate = ComponentState.ACTIVATE;
            this.onReactivated();
        }
    }

    disconnectedCallback() {
        if (this.comstate === ComponentState.ACTIVATE) {
            if (this.parentElement === null) {
                this.unloadTimer = setTimeout(() => {
                    this.comstate = ComponentState.NONE;
                    this.onUnload();
                });
            } else {
                this.comstate = ComponentState.DEACTIVATE;
                this.onDeactivated();
            }
        } else if (this.comstate === ComponentState.DEACTIVATE) {
            this.onDeactivated();
        }
    }

    adoptedCallback() {
        console.log('adoptedCallback');
    }

    static Register(component) {
        if (!component) component = this;
        let name = ((re, str) => str.replace(re, '$1-$2').replace(re, '$1-$2').toLowerCase())(/([^-])([A-Z])/g, component.name);
        customElements.define(name, component);
    }
}