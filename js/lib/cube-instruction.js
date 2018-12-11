!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=96)}({35:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.InstructionListener=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"onInstructionRequested",value:function(e,t){}},{key:"onInstructionResponded",value:function(e){}},{key:"onInstructionFailed",value:function(e){}}]),t}(CubeListener)},36:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.Instruction=function(){function e(t){if(r(this,e),this.expires=0,this.instructions=new HashMap,null!=t)for(var n in t)this.addInstruction(n,t[n])}return o(e,[{key:"addInstruction",value:function(e,t){this.instructions.put(e,t)}},{key:"removeInstruction",value:function(e){this.instructions.remove(e)}},{key:"getInstruction",value:function(e){return this.instructions.get(e)}},{key:"getExpires",value:function(){return this.expires}},{key:"setExpires",value:function(e){this.expires=e}},{key:"toJSON",value:function(){for(var e={},t=this.instructions.keySet(),n=0;n<t.length;n++){var r=t[n];e[r]=this.instructions.get(r)}return{instr:e,expires:this.expires}}}]),e}()},65:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.InstructionServiceWorker=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(97),c=n(35),a=n(98),f=n(36);t.InstructionServiceWorker=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,c.InstructionListener,CELLET.Instruction));return n.queryCallbacks=[],n}return i(t,e),u(t,[{key:"exeInstruction",value:function(e,t){if(null==this.session||null==this.session.name)return!1;var n=t.toJSON();return"string"==typeof e?n.names=JSON.parse(e):n.deviceId=e.deviceId,n.reference=Date.now(),this.engine.connect.send(CELLET.Instruction,CubeConst.ActionGo,n)}},{key:"queryLastInstruction",value:function(e,t){if(null==this.session||null==this.session.name)return!1;this.queryCallbacks.push(t);var n={payload:{name:e,reference:Date.now()}};return this.engine.connect.send(CELLET.Signaling,CubeConst.ActionLast,n)}},{key:"onDialogue",value:function(e,t){switch(e){case CubeConst.ActionGo:this._processGo(t);break;case CubeConst.ActionGoAck:this._processGoAck(t);break;case CubeConst.ActionLastAck:this._processLastAck(t)}}},{key:"_processGo",value:function(e){var t=e.getParamAsString("data");if(null!=t){var n=t.from,r=t.instr,o=new f.Instruction(null!=r?r:{});this.delegate.onInstructionRequested(n,o)}}},{key:"_processGoAck",value:function(e){var t=e.getParamAsString("state");if(200==t.code){var n=e.getParamAsString("data"),r=n.names,o=n.instr,i=new f.Instruction(null!=o?o:{}),u=new s.InstructionRequestedResult(r,i);this.delegate.onInstructionResponded(u)}else this.delegate.onInstructionFailed(t.code)}},{key:"_processLastAck",value:function(e){var t=e.getParamAsString("state"),n=this.queryCallbacks.shift();if(200==t.code){var r=e.getParamAsString("data"),o=r.instr;n(!1,new f.Instruction(null!=o?o:{}))}else n(new CubeError(t.code,t.desc))}},{key:"onRegisterStateChanged",value:function(e){this.session=e}}]),t}(a.InstructionService)},96:function(e,t,n){"use strict";var r=n(65),o=n(35),i=n(36);!function(e){e.CubeInstructionServiceWorker=r.InstructionServiceWorker,e.CubeInstructionListener=o.InstructionListener,e.CubeInstruction=i.Instruction}(window)},97:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.InstructionRequestedResult=function(){function e(t,n,o,i){r(this,e),this.targets=t,this.instruction=n,this.succeedDevices=o,this.failedDevices=i}return o(e,[{key:"getInstruction",value:function(){return this.instruction}},{key:"getTargets",value:function(){return this.targets}}]),e}()},98:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.InstructionService=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"exeInstruction",value:function(e,t){}},{key:"queryLastInstruction",value:function(e,t){}}]),t}(CubeService)}});
//# sourceMappingURL=cube-instruction.js.map