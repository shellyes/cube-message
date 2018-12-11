/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module functdion
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/

if (undefined === window.console) {
    window.console = {
        error: function error() {},
        warn: function warn() {},
        info: function info() {},
        log: function log() {}
    };
} else {
    if (undefined === window.console.error) {
        window.console.error = window.console.log;
    }
    if (undefined === window.console.warn) {
        window.console.warn = window.console.log;
    }
    if (undefined === window.console.info) {
        window.console.info = window.console.log;
    }
}

var Logger = {
    // 是否激活
    enabled: true,

    /**
     * 日志管理器是否设置为 DEBUG 等级。
     *
     * @return 如果当前日志等级为 DEBUG 返回 <code>true</code> 。
     */
    isDebugLevel: function isDebugLevel() {
        // return (LogManager.getInstance().getLevel() == LogLevel.DEBUG);
    },

    d: function d(tag, text) {
        if (!Logger.enabled) {
            return;
        }

        window.console.log(Logger._printTime() + " [DEBUG] " + tag + " - " + text);
    },

    i: function i(tag, text) {
        if (!Logger.enabled) {
            return;
        }

        window.console.info(Logger._printTime() + " [INFO]  " + tag + " - " + text);
    },

    w: function w(tag, text) {
        if (!Logger.enabled) {
            return;
        }

        window.console.warn(Logger._printTime() + " [WARN]  " + tag + " - " + text);
    },

    e: function e(tag, text) {
        if (!Logger.enabled) {
            return;
        }

        window.console.error(Logger._printTime() + " [ERROR] " + tag + " - " + text);
    },
    l: function l(tag, text, Level) {
        if (!Logger.enabled) {
            return;
        }

        window.console.info(Logger._printTime() + " [ERROR] " + tag + " - " + text + Level);
    },

    _printTime: function _printTime() {
        var date = new Date();
        var ret = [date.getHours(), ":", date.getMinutes(), ":", date.getSeconds(), ".", date.getMilliseconds()];
        date = null;
        return ret.join('');
    }
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ByteUtils; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/

/**
 * 字节操作辅助函数。
 */
var ByteUtils = {
    toBytes: function toBytes(data) {
        if (data !== undefined) {
            var vt = typeof data === 'undefined' ? 'undefined' : _typeof(data);
            if (vt == 'string') {
                return ByteUtils.stringToBytes(data);
            } else if (vt == 'number') {
                var reg = /^-?\d+$/;
                var doubleReg = /^[-\+]?\d+(\.\d+)?$/;
                if (reg.test(data.toString())) {
                    if (data > -2147483648 && data < 2147483648) {
                        return ByteUtils.intToBytes(data);
                    } else {
                        return ByteUtils.longToBytes(data);
                    }
                } else if (doubleReg.test(data.toString())) {
                    return ByteUtils.doubleToBytes(data);
                } else {
                    return ByteUtils.doubleToBytes(data);
                }
            } else if (vt == 'boolean') {
                return ByteUtils.booleanToBytes(data);
            } else if (vt == 'object') {
                return ByteUtils.stringToBytes(JSON.stringify(data));
            }
        }
    },
    /**
     * int 转字节数组。
     *
     * @param data
     * @return
     */
    intToBytes: function intToBytes(data) {
        var bytes = [];
        bytes[0] = ByteUtils.over127(data & 0xff);
        bytes[1] = ByteUtils.over127((data & 0xff00) >> 8);
        bytes[2] = ByteUtils.over127((data & 0xff0000) >> 16);
        bytes[3] = ByteUtils.over127((data & 0xff000000) >> 24);
        return bytes;
    },

    /**
     * float 转字节数组。
     *
     * @param data
     * @return
     */
    floatToBytes: function floatToBytes(data) {
        // TO do
    },

    /**
     * double 转字节数组。
     *
     * @param data
     * @return
     */
    doubleToBytes: function doubleToBytes(data) {
        // TO do
    },

    /**
     * String 转字节数组。
     *
     * @param data
     * @param charsetName
     * @return
     */
    stringToBytes: function stringToBytes(data) {
        return new TextEncoder('utf-8').encode(data);
    },

    /**
     * long转字节数组。
     *
     * @param bytes
     * @return
     */
    longToBytes: function longToBytes(value) {
        var src = [];
        src[0] = value & 0xff;
        src[1] = ByteUtils.toRight(value, 8) & 0xff;
        src[2] = ByteUtils.toRight(value, 16) & 0xff;
        src[3] = ByteUtils.toRight(value, 24) & 0xff;
        src[4] = ByteUtils.toRight(value, 32) & 0xff;
        src[5] = ByteUtils.toRight(value, 40) & 0xff;
        src[6] = ByteUtils.toRight(value, 48) & 0xff;
        src[7] = ByteUtils.toRight(value, 56) & 0xff;
        return src;
    },

    /**
     * boolean 转字节数组。
     *
     * @param data
     * @return
     */
    booleanToBytes: function booleanToBytes(data) {
        return new data() ? 1 : 0;
    },

    /**
     * 字符串转字节数组。
     */
    toArray: function toArray(str) {
        var ret = new Array();
        for (var i = 0, len = str.length; i < len; ++i) {
            ret.push(str.charAt(i));
        }
        return ret;
    },

    /**
     * 字节数组转long 。
     *
     * @param bytes
     * @return
     */
    toLong: function toLong(bytes) {
        var low = bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24;

        var high = bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24;

        return (high >>> 0) * ((1 << 16) * (1 << 16)) + (low >>> 0);
    },

    /**
     * 字节数组转 int 。
     *
     * @param bytes
     * @return
     */
    toInt: function toInt(bytes) {
        return 0xff & bytes[0] | 0xff00 & bytes[1] << 8 | 0xff0000 & bytes[2] << 16 | 0xff000000 & bytes[3] << 24;
    },

    /**
     * 字节数组转 boolean 。
     *
     * @param bytes
     * @return
     */
    toBoolean: function toBoolean(bytes) {
        return bytes[0] == 1 ? true : false;
    },

    /**
     * 字节数组转 String 。
     *
     * @param bytes
     * @return
     */
    toString: function toString(bytes) {
        return new TextDecoder('utf-8').decode(new Uint8Array((typeof bytes === 'undefined' ? 'undefined' : _typeof(bytes)) == 'object' ? bytes : [bytes]));
    },

    /**
     * 64位-位移运算符(右) 。
     *
     * @param val 十进制
     * @param bit 位移位数
     * @return
     */
    toRight: function toRight(val, bit) {
        try {
            return parseInt(Array(bit + 1).join("0") + (bit > val.toString(2).length ? 0 : val.toString(2).slice(0, val.toString(2).length - bit)), 2);
        } catch (e) {
            console.log(val, bit, e);
        }
    },

    /**
     *  取补码
     *
     * @param v
     * @return
     */
    over127: function over127(v) {
        return v > 127 ? v - 256 : v;
    }
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/

/**
 * 实用函数库。
 */
var Utils = {

    /**
     * SN 魔法数。
     */
    sMagicNum: Math.round(Date.now() * 0.5),

    /**
     * 随机数发生器。
     */
    sRandom: Math.random() * Date.now(),

    ALPHABET: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],

    /**
     * 生成指定长度的随机字符串。
     */
    randomString: function randomString(length) {
        var ret = new Array();
        for (var i = 0; i < length; ++i) {
            var index = Math.floor(Math.random() * Utils.ALPHABET.length);
            ret.push(Utils.ALPHABET[index]);
        }
        return ret.join('');
    },

    /**
     * 生成指定长度的随机内容字节数组。
     */
    randomBytes: function randomBytes(length) {
        var ret = new Array();
        for (var i = 0; i < length; ++i) {
            // 0 - 127 之间随机
            var c = Math.floor(Math.random() * 128);
            ret.push(c);
        }
        return ret;
    },

    generateSerialNumber: function generateSerialNumber() {
        var sn = Date.now();
        sn -= Utils.sMagicNum;
        sn += parseInt(Utils.sRandom);
        return sn;
    },

    /**
     * 简单加密操作。密钥长度为 8 位。
     */
    simpleEncrypt: function simpleEncrypt(aPlaintext, aKey) {
        var plaintext = null;
        if (typeof aPlaintext === 'string') {
            plaintext = [];
            for (var i = 0; i < aPlaintext.length; ++i) {
                plaintext.push(aPlaintext.charCodeAt(i) - 256);
            }
        } else {
            plaintext = aPlaintext;
        }

        var key = null;
        if (typeof aKey === 'string') {
            key = [];
            for (var i = 0; i < aKey.length; ++i) {
                key.push(aKey.charCodeAt(i));
            }
        } else {
            key = aKey;
        }

        if (key.length != 8) return null;

        // 运算密钥
        var keyCode = 11 + key[0];
        keyCode -= key[1];
        keyCode += key[2];
        keyCode -= key[3];
        keyCode += key[4];
        keyCode -= key[5];
        keyCode += key[6];
        keyCode -= key[7];

        // 评价
        var cc = keyCode % 8;
        var parity = keyCode % 2 == 0 ? 2 : 1;

        var length = plaintext.length;
        var out = new Array();

        for (var i = 0; i < length; ++i) {
            var c = plaintext[i] ^ parity;
            var v = c ^ cc;
            if (v < 0) {
                v += 256;
            }
            out[i] = v;
        }

        return out;
    },

    /**
     * 简单解密操作。密钥长度为 8 位。
     */
    simpleDecrypt: function simpleDecrypt(aCiphertext, aKey) {
        var ciphertext = [];

        if (typeof aCiphertext === 'string') {
            ciphertext = [];
            for (var i = 0; i < aCiphertext.length; ++i) {
                ciphertext.push(aCiphertext.charCodeAt(i) - 256);
            }
        } else {
            ciphertext = aCiphertext;
        }
        var key = [];
        if (typeof aKey === 'string') {
            for (var i = 0; i < aKey.length; ++i) {
                key.push(aKey.charCodeAt(i) - 256);
            }
        } else {
            key = aKey;
        }

        if (key.length != 8) return null;

        // 运算密钥
        var keyCode = 11 + key[0];
        keyCode -= key[1];
        keyCode += key[2];
        keyCode -= key[3];
        keyCode += key[4];
        keyCode -= key[5];
        keyCode += key[6];
        keyCode -= key[7];

        // 评价
        var cc = keyCode % 8;
        var parity = keyCode % 2 == 0 ? 2 : 1;

        var length = ciphertext.length;
        var out = new Array();

        for (var i = 0; i < length; ++i) {
            var c = ciphertext[i] ^ cc;
            var v = c ^ parity;
            if (v < 0) {
                v += 256;
            }
            out[i] = v;
        }

        return out;
    },

    chatCode: function chatCode(array) {
        var buffArray = [];
        for (var i = 0; i <= array.length; i++) {
            if (typeof array[i] == 'string') {
                buffArray[i] = array[i].charCodeAt();
            } else {
                buffArray[i] = array[i];
            }
        }
        return buffArray;
    },

    fromCharCode: function fromCharCode(array) {
        var buffArray = [];
        for (var i = 0; i <= array.length; i++) {
            if (array[i] <= 32) {
                buffArray[i] = array[i];
            } else {
                buffArray[i] = String.fromCharCode(array[i]);
            }
        }
        return buffArray;
    }

};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_Utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Logger__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/



/**
 * 消息描述类。
 */
var Message = function () {
    function Message(payload, head, tail) {
        _classCallCheck(this, Message);

        this.payload = payload;

        //校验负载是否是压缩格式。
        this.verifyCompression();
    }

    _createClass(Message, [{
        key: "setPayload",


        /**
         * 设置消息有效负载数据。
         *
         * @param payload 指定新的有效负载数据。
         * @return
         */
        value: function setPayload(payload) {
            this.payload = payload;
        }

        /**
         * 设置消息的自定义上下文对象。
         *
         * @param context 指定上下文对象。
         */

    }, {
        key: "setContext",
        value: function setContext(context) {
            this.context = context;
        }

        /**
         * 获取消息有效负载数据。
         *
         * @return
         */

    }, {
        key: "getPayload",
        value: function getPayload() {
            return this.payload;
        }

        /**
         * 获取消息的自定义上下文对象。
         *
         */

    }, {
        key: "getContext",
        value: function getContext() {
            return this.context;
        }

        /**
         * 校验负载是否是压缩格式。
         *
         * @return 返回是否压缩。
         */

    }, {
        key: "verifyCompression",
        value: function verifyCompression() {
            if (this.payload[0] == 120 && this.payload[1] == -100) {
                this.compressible = true;
            } else {
                this.compressible = false;
            }
            return this.compressible;
        }
    }, {
        key: "needCompressible",
        value: function needCompressible() {
            return this.payload.length >= Message.CompressionThreshold;
        }
    }], [{
        key: "pack",
        value: function pack(data, key) {
            var output = null;

            // 加密
            var buf = null;
            if (null != key) {
                buf = __WEBPACK_IMPORTED_MODULE_0__utils_Utils__["a" /* Utils */].simpleEncrypt(data, key);
            } else {
                buf = data;
            }

            // 压缩
            if (buf.length > Message.CompressionThreshold) {
                output = Message.compress(buf);
            } else {
                output = buf;
            }

            return output;
        }
    }, {
        key: "unpack",
        value: function unpack(data, key) {
            var output = null;

            // 解压
            var buf = null;
            if (data[0] == 120 && data[1] == 156) {
                buf = Message.uncompress(data);
            } else {
                buf = data;
            }

            if (null == buf) {
                // 解压失败
                return null;
            }

            // 解密
            if (null != key) {
                output = __WEBPACK_IMPORTED_MODULE_0__utils_Utils__["a" /* Utils */].simpleDecrypt(buf, key);
            } else {
                output = buf;
            }

            return output;
        }
    }, {
        key: "compress",
        value: function compress(input) {
            return pako.deflate(input);
        }
    }, {
        key: "uncompress",
        value: function uncompress(input) {
            var result = null;
            try {
                result = pako.inflate(input);
            } catch (err) {
                __WEBPACK_IMPORTED_MODULE_1__utils_Logger__["a" /* Logger */].e("Message", "Uncompress error: " + err);
            }
            return result;
        }
    }]);

    return Message;
}();;

Message.compressible = false;
/**
 * 系统默认的消息头格式。
 */
Message.DefaultHead = [0x20, 0x13, 0x09, 0x08];

/**
 * 系统默认的消息尾格式。
 */
Message.DefaultTail = [0x19, 0x78, 0x10, 0x04];

/**
 * 压缩阀值。
 */
Message.CompressionThreshold = 120;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Primitive__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Stuff__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Protocol; });
/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/
/**
 * Talk 协议。
 *
 * 数据包字段，单位 byte：<br>
 * <code>
 * +--|-00-|-01-|-02-|-03-|-04-|-05-|-06-|-07-+<br>
 * |--+---------------------------------------+<br>
 * |01| VER| SN |         RES       |    PN   |<br>
 * |--+---------------------------------------+<br>
 * |02|              DATA BEGIN               |<br>
 * |--+---------------------------------------+<br>
 * |03|                ... ...                |<br>
 * |--+---------------------------------------+<br>
 * |04|               DATA END                |<br>
 * |--+---------------------------------------+<br>
 * </code>
 * DATA 段的数据使用 0x1E 作为数据分隔符。
 */




var Protocol = {

    Handshake: ['H', 'S'], // 握手协议。

    Speak: ['S', 'P'], // 原语会话协议。

    SpeakAck: ['S', 'A'], // 会话应答协议

    BatchSpeak: ['B', 'S'], // 批量传输协议

    Heartbeat: ['H', 'B'], // 心跳协议。

    HeartbeatAck: ['H', 'A'], // 心跳应答协议。

    Goodbye: ['G', 'B'], // 结束会话协议。

    Version: 0x01, // 协议默认版本。

    Reserve: [0x11, 0x24, 0x11, 0x24], // 协议默认保留字。

    SEPARATE_CHAR: 0x1E, // 协议数据分隔符。

    ESCAPE_CHAR: 0x5C, // 协议数据转义符 '\\'。

    sGlobalSN: 0, // 全局 SN 记录。

    /**
     * 识别协议类型。
     *
     * @param data
     * @return
     */
    recognize: function recognize(data) {
        if (data.length < 10) {
            return null;
        }

        var b6 = __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toString(data[6]);
        var b7 = __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toString(data[7]);

        if (b6 == Protocol.Speak[0] && b7 == Protocol.Speak[1]) {
            return Protocol.Speak;
        } else if (b6 == Protocol.SpeakAck[0] && b7 == Protocol.SpeakAck[1]) {
            return Protocol.SpeakAck;
        } else if (b6 == Protocol.BatchSpeak[0] && b7 == Protocol.BatchSpeak[1]) {
            return Protocol.BatchSpeak;
        } else if (b6 == Protocol.Heartbeat[0] && b7 == Protocol.Heartbeat[1]) {
            return Protocol.Heartbeat;
        } else if (b6 == Protocol.HeartbeatAck[0] && b7 == Protocol.HeartbeatAck[1]) {
            return Protocol.HeartbeatAck;
        } else if (b6 == Protocol.Handshake[0] && b7 == Protocol.Handshake[1]) {
            return Protocol.Handshake;
        } else {
            return null;
        }
    },

    /**
     * 序列化握手协议。
     *
     * @param key
     * @param tag
     * @return
     */
    serializeHandshake: function serializeHandshake(key, tag) {
        var buf = new Array();
        // 版本 - 1
        buf.push(Protocol.Version);
        // 序列号 - 1
        buf.push(Protocol.consumeSN());
        // 保留段 - 4
        Array.prototype.push.apply(buf, Protocol.Reserve);
        // 协议名 - 2
        Array.prototype.push.apply(buf, __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toBytes(Protocol.Handshake.join('')));

        Array.prototype.push.apply(buf, key);

        // 标签
        buf.push(Protocol.SEPARATE_CHAR);
        Array.prototype.push.apply(buf, __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toBytes(tag));
        return buf;
    },

    /**
     * 反序列化握手协议。
     *
     * @return
     */
    deserializeHandshake: function deserializeHandshake(data) {
        var prtl = { key: null, tag: null };
        var buf = new Array();
        var index = 0;
        for (var i = 8; i < data.length; ++i) {
            do {
                var b = data[i];
                if (b == Protocol.SEPARATE_CHAR) {
                    break;
                }

                buf.push(__WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toString(b));
                ++i;
            } while (i < data.length);

            if (index == 0) {
                prtl.key = new Array();
                Array.prototype.push.apply(prtl.key, buf);
            } else if (index == 1) {
                prtl.tag = buf.join('');
            }

            buf.splice(0, buf.length);
            ++index;
        }
        return prtl;
    },

    /**
     * 序列化会话协议。
     *
     * 每段数据的格式：
     * 数据字面义(1字节)+数据内容(变长)+数据分隔符(1字节)...(依次循环)
     *
     * @param target
     * @param primitive
     * @return
     */
    serializeSpeak: function serializeSpeak(target, primitive) {
        var buf = new Array();
        // 版本 - 1
        buf.push(Protocol.Version);
        // 序列号 - 1
        buf.push(Protocol.consumeSN());
        // 保留段 - 4，使用 SN 填充
        Array.prototype.push.apply(buf, primitive.getSN());
        // 协议名 - 2
        Array.prototype.push.apply(buf, __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toBytes(Protocol.Speak.join('')));

        // 模块名
        Array.prototype.push.apply(buf, __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toBytes(target));

        // 标签
        buf.push(Protocol.SEPARATE_CHAR);

        // 原语数据
        for (var i = 0, sl = primitive.stuffList; i < sl.length; i++) {
            // 字面义
            Array.prototype.push.apply(buf, __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toBytes(sl[i].literal));

            // 数据
            for (var j = 0, val = sl[i].value; j < val.length; j++) {
                if (val[j] == Protocol.SEPARATE_CHAR) {
                    // 转义
                    buf.push(Protocol.ESCAPE_CHAR);
                } else if (val[j] == Protocol.ESCAPE_CHAR) {
                    // 转义
                    buf.push(Protocol.ESCAPE_CHAR);
                }
                buf.push(val[j]);
            }
            // 分隔数据
            buf.push(Protocol.SEPARATE_CHAR);
        }
        return buf;
    },

    /**
     * 反序列化会话协议。
     *
     * @param bytes
     * @return
     */
    deserializeSpeak: function deserializeSpeak(bytes) {
        if (bytes.length < 10) {
            return null;
        }
        // 提取 SN
        var sn = bytes.slice(2, 6);
        var protocol = { target: null, primitive: null };

        var buf = new Array();
        // 目标
        for (var i = 8; i < bytes.length; ++i) {
            var b = bytes[i];

            if (b == Protocol.SEPARATE_CHAR) {
                break;
            }

            buf.push(__WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toString(b));
        }
        // 赋值
        protocol.target = buf.join('');

        // 调整游标位置
        var start = 8 + buf.length + 1;

        var primitive = new __WEBPACK_IMPORTED_MODULE_1__Primitive__["a" /* Primitive */](sn);

        for (var i = start; i < bytes.length; ++i) {
            // 字面义
            var lb = bytes[i];

            var Buf = [];

            // 定位到数据内容位置
            ++i;

            // 数据内容提取
            while (i < bytes.length) {
                var dc = bytes[i];

                if (dc == Protocol.ESCAPE_CHAR) {
                    ++i;
                    dc = bytes[i];
                    Buf.push(dc);
                    // 下一字节
                    ++i;
                    continue;
                } else if (dc == Protocol.SEPARATE_CHAR) {
                    // 结束
                    break;
                }

                Buf.push(dc);
                // 下一字节
                ++i;
            }

            var stuff = new __WEBPACK_IMPORTED_MODULE_2__Stuff__["a" /* Stuff */](Buf, lb);
            primitive.commit(stuff);
        }

        // 赋值
        protocol.primitive = primitive;

        return protocol;
    },

    /**
     * 序列化会话应答协议。
     *
     * @param target
     * @param primitive
     * @return
     */

    serializeSpeakAck: function serializeSpeakAck(target, primitive) {
        var buf = new Array();
        // 版本 - 1
        buf.push(Protocol.Version);
        // 序列号 - 1
        buf.push(Protocol.consumeSN());
        // 保留段 - 4，使用 SN 填充
        Array.prototype.push.apply(buf, primitive.getSN());
        // 协议名 - 2
        Array.prototype.push.apply(buf, __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toBytes(Protocol.SpeakAck.join('')));

        // 模块名
        Array.prototype.push.apply(buf, __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toBytes(target));
        return buf;
    },

    /**
     * 反序列化会话应答协议。
     *
     * @param bytes
     * @return
     */
    deserializeSpeakAck: function deserializeSpeakAck(bytes) {
        if (bytes.length < 10) {
            return null;
        }
        // 提取 SN
        var sn = bytes.slice(2, 6);

        var protocol = { target: null, primitive: null, sn: sn };

        var buf = new Array();
        // 目标
        for (var i = 8; i < bytes.length; ++i) {
            var b = bytes[i];

            if (b == Protocol.SEPARATE_CHAR) {
                break;
            }

            buf.push(b);
        }
        // 赋值
        protocol.target = __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toString(buf);

        // 调整游标位置
        var start = 8 + buf.length + 1;

        var primitive = new __WEBPACK_IMPORTED_MODULE_1__Primitive__["a" /* Primitive */](sn);

        for (var i = start; i < bytes.length; ++i) {
            // 字面义
            var lb = bytes[i];

            var Buf = [];

            // 定位到数据内容位置
            ++i;

            // 数据内容提取
            while (i < bytes.length) {
                var dc = bytes[i];

                if (dc == Protocol.ESCAPE_CHAR) {
                    ++i;
                    dc = bytes[i];
                    Buf.push(dc);
                    // 下一字节
                    ++i;
                    continue;
                } else if (dc == Protocol.SEPARATE_CHAR) {
                    // 结束
                    break;
                }

                Buf.push(dc);
                // 下一字节
                ++i;
            }

            var stuff = new __WEBPACK_IMPORTED_MODULE_2__Stuff__["a" /* Stuff */](Buf, lb);
            primitive.commit(stuff);
        }

        // 赋值
        protocol.primitive = primitive;

        return protocol;
    },

    /**
     * 序列化心跳协议。
     *
     * @param tag
     * @param timestamp
     * @return
     */
    serializeHeartbeat: function serializeHeartbeat(tag, timestamp) {
        var result = new Array();
        // 版本 - 1
        result.push(Protocol.Version);
        // 序列号 - 1
        result.push(Protocol.consumeSN());
        // 保留段 - 4
        Array.prototype.push.apply(result, Protocol.Reserve);
        // 协议名 - 2
        result.prototype.push.apply(result, __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toBytes(Protocol.Heartbeat.join('')));

        // 标签
        Array.prototype.push.apply(result, __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toBytes(tag));

        // 时间戳
        result.push(Protocol.SEPARATE_CHAR);
        Array.prototype.push.apply(result, __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toBytes(timestamp));

        return result;
    },

    /**
     * 反序列化心跳协议。
     *
     * @param bytes
     * @return
     */

    deserializeHeartbeat: function deserializeHeartbeat(bytes) {
        var prtl = { originateTimestamp: 0, tag: null, receiveTimestamp: 0, transmitTimestamp: 0 };

        var index = 0;
        for (var i = 8; i < bytes.length; ++i) {
            var buf = new Array();
            do {
                var b = bytes[i];
                if (b == Protocol.SEPARATE_CHAR) {
                    break;
                } else if (b == Protocol.ESCAPE_CHAR) {
                    // 解析转义
                    i += 1;
                    b = bytes[i];
                }

                buf.push(b);
                ++i;
            } while (i < bytes.length);

            if (index == 0) {
                prtl.tag = __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toString(buf);
            } else if (index == 1) {
                prtl.originateTimestamp = __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toLong(buf);
            }

            buf.splice(0, buf.length);
            ++index;
        }
        return prtl;
    },

    /**
     * 序列化心跳应答协议。
     *
     * @param tag
     * @param originateTimestamp
     * @param receiveTimestamp
     * @param transmitTimestamp
     * @return
     */
    serializeHeartbeatAck: function serializeHeartbeatAck(tag, originateTimestamp, receiveTimestamp, transmitTimestamp) {
        var result = new Array();
        // 版本 - 1
        result.push(Protocol.Version);
        // 序列号 - 1
        result.push(Protocol.consumeSN());
        // 保留段 - 4
        Array.prototype.push.apply(result, Protocol.Reserve);
        // 协议名 - 2
        Array.prototype.push.apply(result, __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toBytes(Protocol.HeartbeatAck.join('')));

        // 标签
        Array.prototype.push.apply(result, __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toBytes(tag));

        // 时间戳
        result.push(Protocol.SEPARATE_CHAR);
        Array.prototype.push.apply(result, Protocol.escape(__WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toBytes(originateTimestamp)));

        result.push(Protocol.SEPARATE_CHAR);
        Array.prototype.push.apply(result, Protocol.escape(__WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toBytes(receiveTimestamp)));

        result.push(Protocol.SEPARATE_CHAR);
        Array.prototype.push.apply(result, Protocol.escape(__WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toBytes(transmitTimestamp)));

        return result;
    },

    /**
     * 反序列化心跳应答协议。
     *
     * @param data
     * @return
     */
    deserializeHeartbeatAck: function deserializeHeartbeatAck(bytes) {
        var hp = { tag: null, originateTimestamp: 0, receiveTimestamp: 0, transmitTimestamp: 0 };
        var index = 0;
        for (var i = 8; i < bytes.length; ++i) {
            var buf = new Array();
            do {
                var b = bytes[i];
                if (b == Protocol.SEPARATE_CHAR) {
                    break;
                } else if (b == Protocol.ESCAPE_CHAR) {
                    // 解析转义
                    i += 1;
                    b = bytes[i];
                }

                buf.push(b);
                ++i;
            } while (i < bytes.length);

            if (index == 0) {
                hp.tag = __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toString(buf);
            } else if (index == 1) {
                var originateTimestamp = buf.slice(0, 8);
                hp.originateTimestamp = __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toLong(originateTimestamp);
            } else if (index == 2) {
                var receiveTimestamp = buf.slice(0, 8);
                hp.receiveTimestamp = __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toLong(receiveTimestamp);
            } else if (index == 3) {
                var transmitTimestamp = buf.slice(0, 8);
                hp.transmitTimestamp = __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toLong(transmitTimestamp);
            }

            buf.splice(0, buf.length);
            ++index;
        }
        return hp;
    },

    /**
     * 序列化 Goodbye 协议。
     *
     * @return
     */
    serializeGoodbye: function serializeGoodbye() {
        var result = new Array();
        // 版本 - 1
        result.push(Protocol.Version);
        // 序列号 - 1
        result.push(Protocol.consumeSN());
        // 保留段 - 4
        Array.prototype.push.apply(result, Protocol.Reserve);
        // 协议名 - 2
        Array.prototype.push.apply(result, __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toBytes(Protocol.Goodbye.join('')));

        return result;
    },

    /**
     * 返回可用的包序号。
     *
     * @return
     */
    consumeSN: function consumeSN() {
        var sn = Protocol.sGlobalSN;
        Protocol.sGlobalSN += 1;
        if (Protocol.sGlobalSN > 127) {
            Protocol.sGlobalSN = 0;
        }
        return sn;
    },

    escape: function escape(input) {
        var size = 0;
        for (var i = 0; i < input.length; ++i) {
            ++size;
            if (input[i] == Protocol.SEPARATE_CHAR || input[i] == Protocol.ESCAPE_CHAR) {
                // 需要转义
                ++size;
            }
        }

        // 长度相同，没有转义
        if (size == input.length) {
            return input;
        }

        var output = new Array(size);
        for (var i = 0, o = 0; i < input.length; ++i, ++o) {
            var b = input[i];
            if (b == Protocol.SEPARATE_CHAR) {
                output[o] = Protocol.ESCAPE_CHAR;
                ++o;
            } else if (b == Protocol.ESCAPE_CHAR) {
                output[o] = Protocol.ESCAPE_CHAR;
                ++o;
            }
            output[o] = b;
        }

        return output;
    }
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = HashMap;
/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/

/**
 * HashMap 封装。
 */
function HashMap() {
    // 定义长度
    var length = 0;
    // 创建一个对象
    var obj = new Object();

    /**
     * 判断 Map 是否为空
     */
    this.isEmpty = function () {
        return length == 0;
    };

    /**
     * 判断对象中是否包含给定 Key
     */
    this.containsKey = function (key) {
        return key in obj;
    };

    /**
     * 判断对象中是否包含给定的 Value
     */
    this.containsValue = function (value) {
        for (var key in obj) {
            if (obj[key] == value) {
                return true;
            }
        }
        return false;
    };

    /**
     * 向 Map 中添加数据
     */
    this.put = function (key, value) {
        if (!this.containsKey(key)) {
            length++;
        }
        obj[key] = value;
    };

    /**
     * 根据给定的 Key 获得 Value
     */
    this.get = function (key) {
        return this.containsKey(key) ? obj[key] : null;
    };

    /**
     * 根据给定的 Key 删除一个值
     */
    this.remove = function (key) {
        if (this.containsKey(key) && delete obj[key]) {
            length--;
        }
    };

    /**
     * 获得 Map 中的所有 Value
     */
    this.values = function () {
        var _values = new Array();
        for (var key in obj) {
            _values.push(obj[key]);
        }
        return _values;
    };

    /**
     * 获得 Map 中的所有 Key
     */
    this.keySet = function () {
        var _keys = new Array();
        for (var key in obj) {
            _keys.push(key);
        }
        return _keys;
    };

    /**
     * 获得 Map 的长度
     */
    this.size = function () {
        return length;
    };

    /**
     * 清空 Map
     */
    this.clear = function () {
        length = 0;
        obj = new Object();
    };
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_MessageErrorCode__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TalkError; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/


/**
 * 故障描述。
 */
var TalkError = function () {
    /**
     * 错误码。
     */
    function TalkError() {
        var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        _classCallCheck(this, TalkError);

        this.errorCode = error;
        this.description = "Network connecting timeout";
    }

    /**
     * 将消息层错误代码转为故障。
     *
     * @param messageError
     * @return
     */


    _createClass(TalkError, [{
        key: "getErrorCode",


        /**
         * 获取错误码。
         *
         * @return
         */
        value: function getErrorCode() {
            return this.errorCode;
        }
    }, {
        key: "setTalkContext",
        value: function setTalkContext(context) {
            this.talkContext = context;
        }
    }, {
        key: "getDescription",
        value: function getDescription() {
            return this.description;
        }
    }], [{
        key: "transformError",
        value: function transformError(messageError) {
            var error = new TalkError(1000);

            switch (messageError) {
                case __WEBPACK_IMPORTED_MODULE_0__entity_MessageErrorCode__["a" /* MessageErrorCode */].CONNECT_FAILED:
                case __WEBPACK_IMPORTED_MODULE_0__entity_MessageErrorCode__["a" /* MessageErrorCode */].CONNECT_TIMEOUT:
                    error.errorCode = TalkError.NetworkLinkError;
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__entity_MessageErrorCode__["a" /* MessageErrorCode */].SOCKET_FAILED:
                case __WEBPACK_IMPORTED_MODULE_0__entity_MessageErrorCode__["a" /* MessageErrorCode */].BIND_FAILED:
                case __WEBPACK_IMPORTED_MODULE_0__entity_MessageErrorCode__["a" /* MessageErrorCode */].ACCEPT_FAILED:
                    error.errorCode = TalkError.NetworkLinkError;
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__entity_MessageErrorCode__["a" /* MessageErrorCode */].WRITE_TIMEOUT:
                case __WEBPACK_IMPORTED_MODULE_0__entity_MessageErrorCode__["a" /* MessageErrorCode */].READ_TIMEOUT:
                case __WEBPACK_IMPORTED_MODULE_0__entity_MessageErrorCode__["a" /* MessageErrorCode */].WRITE_FAILED:
                case __WEBPACK_IMPORTED_MODULE_0__entity_MessageErrorCode__["a" /* MessageErrorCode */].READ_FAILED:
                case __WEBPACK_IMPORTED_MODULE_0__entity_MessageErrorCode__["a" /* MessageErrorCode */].WRITE_OUTOFBOUNDS:
                    error.errorCode = TalkError.NetworkLinkError;
                    break;
                default:
                    error.description = "Unknown";
                    break;
            }
            return error;
        }
    }]);

    return TalkError;
}();

/** 网络一般错误。 */
TalkError.NetworkError = 1000;
/** 网络链路错误。 */
TalkError.NetworkLinkError = 1010;
/** 网络 Socket 错误。 */
TalkError.NetworkSocketError = 1020;
/** 网络 I/O 错误。 */
TalkError.NetworkIOError = 1030;
/** 握手错误。 */
TalkError.HandshakeError = 2000;
/** 握手超时。 */
TalkError.HandshakeTimeout = 2001;

/** 未找到指定的 Cellet 。 */
TalkError.NOTFOUND_CELLET = 100,

/** Call 一般性失败。 */
TalkError.CALL_FAILED = 200,

/** 连接超时，丢失会话。 */
TalkError.TALK_LOST = 300,

/** 未知故障。 */
TalkError.UNKNOWN = 900;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Primitive__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Stuff__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionDialect; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/
/** 动作方言。
 *
 * @author Jiangwei Xu
 */



var ActionDialect = function (_Primitive) {
    _inherits(ActionDialect, _Primitive);

    function ActionDialect(name, Primitive) {
        _classCallCheck(this, ActionDialect);

        var _this = _possibleConstructorReturn(this, (ActionDialect.__proto__ || Object.getPrototypeOf(ActionDialect)).call(this, name, Primitive));

        _this.stuffList.push(new __WEBPACK_IMPORTED_MODULE_1__Stuff__["a" /* Stuff */](name));
        return _this;
    }

    /**
     * 设置动作名。
     *
     * @param name
     */


    _createClass(ActionDialect, [{
        key: "setName",
        value: function setName(name) {
            this.stuffList[0] = new __WEBPACK_IMPORTED_MODULE_1__Stuff__["a" /* Stuff */](name);
        }

        /**
         * 获取动作名。
         *
         * @return
         */

    }, {
        key: "getName",
        value: function getName() {
            return this.stuffList[0].getValueAsString();
        }

        /**
         * 是否包含指定键的参数。
         *
         * @param key
         * @return
         */

    }, {
        key: "containsParam",
        value: function containsParam(key) {
            for (var i = 1, size = this.stuffList.length; i < size; i += 2) {
                var sk = this.stuffList[i].getValueAsString();
                if (sk == key) {
                    return true;
                }
            }
            return false;
        }

        /**
         * 添加值为字符串类型的键值对参数。
         *
         * @param key
         * @param value
         */

    }, {
        key: "addParam",
        value: function addParam(key, value) {
            var index = this.keyIndex(key);
            if (index > 0) {
                this.stuffList[index + 1] = new __WEBPACK_IMPORTED_MODULE_1__Stuff__["a" /* Stuff */](value);
            } else {
                this.stuffList.push(new __WEBPACK_IMPORTED_MODULE_1__Stuff__["a" /* Stuff */](key));
                this.stuffList.push(new __WEBPACK_IMPORTED_MODULE_1__Stuff__["a" /* Stuff */](value));
            }
        }

        /**
         * 获取指定键的参数值。
         *
         * @param key
         * @return
         */

    }, {
        key: "getParam",
        value: function getParam(key) {
            return this._getParam(key, 'getValue');
        }

        /**
         * 获取指定键的字符串形式的参数值。
         *
         * @param key
         * @return
         */

    }, {
        key: "getParamAsString",
        value: function getParamAsString(key) {
            return this._getParam(key, 'getValueAsString');
        }

        /**
         * 获取指定键的整数形式的参数值。
         *
         * @param key
         * @return
         */

    }, {
        key: "getParamAsInt",
        value: function getParamAsInt(key) {
            return this._getParam(key, 'getValueAsInt');
        }

        /**
         * 获取指定键的长整型形式的参数值。
         *
         * @param key
         * @return
         */

    }, {
        key: "getParamAsLong",
        value: function getParamAsLong(key) {
            return this._getParam(key, 'getValueAsLong');
        }

        /**
         * 获取指定键的布尔型形式的参数值。
         *
         * @param key
         * @return
         */

    }, {
        key: "getParamAsBool",
        value: function getParamAsBool(key) {
            return this._getParam(key, 'getValueAsBool');
        }

        /**
         * 获取指定键的整数形式的参数值。
         *
         * @param key
         * @return
         */

    }, {
        key: "getParamAsDouble",
        value: function getParamAsDouble(key) {
            return this._getParam(key, 'getValueAsInt');
        }

        /**
         * 获取指定键的 JSON 形式的参数值。
         *
         * @param key
         * @return
         */

    }, {
        key: "getParamAsJson",
        value: function getParamAsJson(key) {
            return this._getParam(key, 'getValueAsJson');
        }
    }, {
        key: "_getParam",
        value: function _getParam(key, method) {
            for (var i = 1, size = this.stuffList.length; i < size; i += 2) {
                var sk = this.stuffList[i].getValueAsString();
                if (sk == key) {
                    return this.stuffList[i + 1][method]();
                }
            }
            return null;
        }

        /**
         * 键所在的 Stuff List 索引。
         *
         * @param key
         * @return
         */

    }, {
        key: "keyIndex",
        value: function keyIndex(key) {
            for (var i = 1, size = this.stuffList.length; i < size; i += 2) {
                if (key === this.stuffList[i]) {
                    return i;
                }
            }
            return -1;
        }
    }, {
        key: "translate",
        value: function translate() {
            if (null == this.getName()) {
                return null;
            }

            var primitive = new __WEBPACK_IMPORTED_MODULE_0__Primitive__["a" /* Primitive */](this.sn);
            primitive.stuffList = this.stuffList;

            return primitive;
        }
    }, {
        key: "build",
        value: function build(primitive) {
            this.action = primitive.predicates()[0].getValueAsString();

            var subjects = primitive.subjects();
            if (null != subjects) {
                var names = subjects;
                var values = primitive.objectives();
                for (var i = 0; i < names.length; i++) {
                    this.stuffList.put(names[i].getValueAsString(), values[i].getValue());
                }
            }
        }
    }, {
        key: "act",
        value: function act(delegate) {
            var self = this;
            var tid = setTimeout(function () {
                clearTimeout(tid);
                delegate.call(null, self);
            }, 0);
        }
    }]);

    return ActionDialect;
}(__WEBPACK_IMPORTED_MODULE_0__Primitive__["a" /* Primitive */]);;

ActionDialect.DIALECT_NAME = "ActionDialect"; // 方言名称

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_Utils__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Primitive; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/


/**
 * 原语。
 * @author Jiangwei Xu
 */
var Primitive = function () {
    function Primitive(sn, primtive) {
        _classCallCheck(this, Primitive);

        /** 创建时的时间戳。 */
        this.timestamp = Date.now();

        /** 原语的序号。 */
        this.sn = sn ? sn : __WEBPACK_IMPORTED_MODULE_0__utils_Utils__["a" /* Utils */].randomBytes(4);

        /** 原语包含的素材列表。 */
        this.stuffList = [];

        if (primtive) {
            this.sn = primtive.sn;
            this.stuffList = primtive.stuffList;
        }
    }

    /**
     * 返回序号。
     *
     * @return
     */


    _createClass(Primitive, [{
        key: "getSN",
        value: function getSN() {
            return this.sn;
        }

        /**
         * 提交语素到原语。
         *
         * @param stuff
         * @return
         */

    }, {
        key: "commit",
        value: function commit(stuff) {
            this.stuffList.push(stuff);
            return this.stuffList.length - 1;
        }

        /**
         * 设置指定索引处的语素。
         *
         * @param index
         * @param stuff
         */

    }, {
        key: "setStuff",
        value: function setStuff(index, stuff) {
            this.stuffList[index] = stuff;
        }

        /**
         * 获取指定索引位置的语素。
         *
         * @param index
         * @return
         */

    }, {
        key: "getStuff",
        value: function getStuff(index) {
            return this.stuffList[index];
        }

        /**
         * 删除指定索引位置的语素。
         *
         * @param index
         * @return
         */

    }, {
        key: "removeStuff",
        value: function removeStuff(index) {
            this.stuffList.splice(index, 1);
            return this.stuffList;
        }

        /**
         * 语素数量。
         *
         * @return
         */

    }, {
        key: "numStuff",
        value: function numStuff() {
            return this.stuffList.length;
        }
    }, {
        key: "equals",
        value: function equals(obj) {
            if (null == obj || !(obj instanceof Primitive)) {
                return false;
            }

            var other = Primitive.toJSON();
            if (other.stuffList.length != this.stuffList.length) {
                return false;
            }

            for (var i = 0, size = other.stuffList.length; i < size; ++i) {
                var stuff = other.stuffList[i];
                if (!stuff.equals(this.stuffList[i])) {
                    return false;
                }
            }

            return true;
        }
    }, {
        key: "clone",
        value: function clone() {
            var clone = new Primitive(this.sn);
            clone.timestamp = this.timestamp;

            for (var i = 0; i <= this.stuffList.length; i++) {
                switch (this.stuffList[i].literal) {
                    case LiteralBase.STRING:
                        clone.commit(new Stuff(stuff.getValueAsString()));
                        break;
                    case LiteralBase.INT:
                        clone.commit(new Stuff(stuff.getValueAsInt()));
                        break;
                    case LiteralBase.LONG:
                        clone.commit(new Stuff(stuff.getValueAsLong()));
                        break;
                    case LiteralBase.FLOAT:
                        clone.commit(new Stuff(stuff.getValueAsFloat()));
                        break;
                    case LiteralBase.DOUBLE:
                        clone.commit(new Stuff(stuff.getValueAsDouble()));
                        break;
                    case LiteralBase.BOOL:
                        clone.commit(new Stuff(stuff.getValueAsBool()));
                        break;
                    case LiteralBase.JSON:
                        clone.commit(new Stuff(stuff.getValueAsJson()));
                        break;
                    case LiteralBase.BIN:
                        clone.commit(new Stuff(stuff.getValue()));
                        break;
                    default:
                        clone.commit(new Stuff(stuff.getValue()));
                        break;
                }
            }
            return clone;
        }

        /**
         * 判断序号是否和当前原语的序号相同。
         *
         * @param sn
         * @return
         */

    }, {
        key: "equalsSN",
        value: function equalsSN(sn) {
            if (sn.length != this.sn.length) {
                return false;
            }

            for (var i = 0; i < sn.length; ++i) {
                if (sn[i] != this.sn[i]) {
                    return false;
                }
            }

            return true;
        }
    }, {
        key: "isStuffList",
        value: function isStuffList() {
            return this.stuffList != null;
        }
    }]);

    return Primitive;
}();;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LiteralBase__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_BytesUtils__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stuff; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Cell Cloud.

Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
-----------------------------------------------------------------------------
*/



/**
 * 语素类型。
 * @author Jiangwei Xu
 */
var StuffType = {
    /** 主语 */
    SUBJECT: 1,
    /** 谓语 */
    PREDICATE: 2,
    /** 宾语 */
    OBJECTIVE: 3,
    /** 定语 */
    ATTRIBUTIVE: 4,
    /** 状语 */
    ADVERBIAL: 5,
    /** 补语 */
    COMPLEMENT: 6
};

/**
 */
var Stuff = function () {
    function Stuff(value, literal, offset, length) {
        _classCallCheck(this, Stuff);

        /** 数据。 */
        this.value = null;

        /** 字面义。 */
        if (literal !== undefined && literal !== null) {
            if (value !== undefined) {
                this.value = value;
            }
            this.literal = __WEBPACK_IMPORTED_MODULE_0__LiteralBase__["a" /* LiteralBase */].parseLiteralBase(literal);

            return;
        }

        if (value !== undefined) {
            this.value = __WEBPACK_IMPORTED_MODULE_1__utils_BytesUtils__["a" /* ByteUtils */].toBytes(value);

            if (literal === undefined) {
                var vt = typeof value === "undefined" ? "undefined" : _typeof(value);

                if (vt == 'string') {
                    this.literal = __WEBPACK_IMPORTED_MODULE_0__LiteralBase__["a" /* LiteralBase */].STRING;
                } else if (vt == 'number') {
                    var reg = /^-?\d+$/;
                    var doubleReg = /^[-\+]?\d+(\.\d+)?$/;
                    if (reg.test(value.toString())) {
                        if (value > -2147483648 && value < 2147483648) {
                            this.literal = __WEBPACK_IMPORTED_MODULE_0__LiteralBase__["a" /* LiteralBase */].INT;
                        } else {
                            this.literal = __WEBPACK_IMPORTED_MODULE_0__LiteralBase__["a" /* LiteralBase */].LONG;
                        }
                    } else if (doubleReg.test(value.toString())) {
                        this.literal = __WEBPACK_IMPORTED_MODULE_0__LiteralBase__["a" /* LiteralBase */].DOUBLE;
                    } else {
                        this.literal = __WEBPACK_IMPORTED_MODULE_0__LiteralBase__["a" /* LiteralBase */].FLOAT;
                    }
                } else if (vt == 'boolean') {
                    this.literal = __WEBPACK_IMPORTED_MODULE_0__LiteralBase__["a" /* LiteralBase */].BOOL;
                } else if (vt == 'object') {
                    this.literal = __WEBPACK_IMPORTED_MODULE_0__LiteralBase__["a" /* LiteralBase */].JSON;
                }
            }
        }
    }

    /**
     * 获取语素的字面义。
     *
     * @return
     */


    _createClass(Stuff, [{
        key: "getLiteralBase",
        value: function getLiteralBase() {
            return this.literalBase;
        }

        /**
         * 获取二进制形式的数据值。
         *
         * @return
         */

    }, {
        key: "getValue",
        value: function getValue() {
            return this.value;
        }

        /**
         * 获取字符串形式的数据值。
         *
         * @return
         */

    }, {
        key: "getValueAsString",
        value: function getValueAsString() {
            if (typeof this.value == 'string') {
                return this.value;
            } else {
                return this.toJSON(__WEBPACK_IMPORTED_MODULE_1__utils_BytesUtils__["a" /* ByteUtils */].toString(this.value));
            }
        }

        /**
         * 获取整数形式的数据值。
         *
         * @return
         */

    }, {
        key: "getValueAsInt",
        value: function getValueAsInt() {
            if (typeof this.value == 'number') {
                return this.value;
            } else {
                return Number(this.value);
            }
        }

        /**
         * 获取长整数形式的数据值。
         *
         * @return
         */

    }, {
        key: "getValueAsLong",
        value: function getValueAsLong() {}

        /**
         * 获取浮点数形式的数据值。
         *
         * @return
         */

    }, {
        key: "getValueAsFloat",
        value: function getValueAsFloat() {
            return parseFloat(this.value);
        }

        /**
         * 获取双精浮点形式的数据值。
         *
         * @return
         */

    }, {
        key: "getValueAsDouble",
        value: function getValueAsDouble() {}

        /**
         * 获取布尔型形式的数据值。
         *
         * @return
         */

    }, {
        key: "getValueAsBool",
        value: function getValueAsBool() {
            return Boolean(this.value);
        }

        /**
         * 获取 JSON 形式的数据值。
         *
         * @return
         */

    }, {
        key: "getValueAsJson",
        value: function getValueAsJson() {
            var json = null;
            try {
                if (typeof this.value == 'string') {
                    return this.value;
                } else {
                    return __WEBPACK_IMPORTED_MODULE_1__utils_BytesUtils__["a" /* ByteUtils */].toString(this.value);
                }
            } catch (e) {
                Logger.e('stuff', "JSON format error", e);
            }
            return json;
        }
    }, {
        key: "equals",
        value: function equals(obj) {
            if (null == obj || !(obj instanceof Stuff)) {
                return false;
            }

            var other = obj.toJSON();

            if (other.literal != this.literal || other.value.length != this.value.length) {
                return false;
            }

            for (var i = 0, size = other.value.length; i < size; ++i) {
                if (other.value[i] != this.value[i]) {
                    return false;
                }
            }

            return true;
        }

        // 抽象方法，子类必须覆盖

    }, {
        key: "clone",
        value: function clone(target) {
            // Nothing
        }
    }, {
        key: "setValue",
        value: function setValue(value) {
            this.value = value;
        }
    }, {
        key: "setLiteralBase",
        value: function setLiteralBase(literalBase) {
            this.literalBase = literalBase;
        }
    }, {
        key: "toBytes",
        value: function toBytes() {
            if (this.value !== undefined) {
                return __WEBPACK_IMPORTED_MODULE_1__utils_BytesUtils__["a" /* ByteUtils */].toBytes(this.value);
            }
        }
    }, {
        key: "toStuff",
        value: function toStuff() {}
    }, {
        key: "toJSON",
        value: function toJSON(str) {
            if (typeof str == 'string') {
                try {
                    return JSON.parse(str);
                } catch (e) {
                    return str;
                }
            }
        }
    }]);

    return Stuff;
}();;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageErrorCode; });
/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/

/**
 * 消息错误码。
 */
var MessageErrorCode = {

    /** 未知的错误。 */
    UNKNOWN: 100,

    /** 无效的网络地址。 */
    ADDRESS_INVALID: 101,
    /** 消息处理器状态错误。 */
    STATE_ERROR: 102,

    /** Socket 函数发生错误。 */
    SOCKET_FAILED: 200,
    /** 绑定服务时发生错误。 */
    BIND_FAILED: 201,
    /** 监听连接时发生错误。 */
    LISTEN_FAILED: 202,
    /** Accept 发生错误。 */
    ACCEPT_FAILED: 203,

    /** 连接失败。 */
    CONNECT_FAILED: 300,
    /** 连接超时。 */
    CONNECT_TIMEOUT: 301,

    /** 写数据超时。 */
    WRITE_TIMEOUT: 401,
    /** 读数据超时。 */
    READ_TIMEOUT: 402,
    /** 写入数据时发生错误。 */
    WRITE_FAILED: 403,
    /** 读取数据时发生错误。 */
    READ_FAILED: 404,
    /** 写数据越界。 */
    WRITE_OUTOFBOUNDS: 405
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakState; });
/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/

var SpeakState = {
  /**
   * 连接已断开。
   */
  Disconnected: 1,

  /**
   * 正在连接。
   */
  Connecting: 2,

  /**
   * 连接已建立。
   */
  Connected: 3,

  /**
   * 正在断开连接。
   */
  Disconnecting: 4
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Thread; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/

/**
 * 模拟线程。
 */
var Thread = function () {
    /**
     * 构造函数。
     */
    function Thread(runnable, scope) {
        _classCallCheck(this, Thread);

        this.timer = 0;
        this.runnable = runnable;

        if (undefined === scope) {
            this.scope = null;
        } else {
            this.scope = scope;
        }
    }

    _createClass(Thread, [{
        key: "start",
        value: function start() {
            var self = this;
            this.timer = setTimeout(function (evt) {
                self.runnable.call(self.scope);
                clearTimeout(self.timer);
                self.timer = 0;
            }, 0);
        }
    }, {
        key: "sleep",
        value: function sleep(milliseconds) {
            var self = this;
            setTimeout(function () {
                var start = new Date().getTime();
                while (new Date().getTime() - start < milliseconds) {
                    self.runnable.call(self.scope);
                    clearTimeout(self.timer);
                    self.timer = 0;
                }
            }, 0);
        }
    }]);

    return Thread;
}();;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UUID; });
/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/

;

var UUID = {
    v4: function v4() {
        var chars = '0123456789abcdef'.split('');

        var uuid = [],
            rnd = Math.random,
            r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4'; // version 4

        for (var i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | rnd() * 16;
                uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r & 0xf];
            }
        }

        return uuid.join('');
    },

    fromString: function fromString() {}
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t) {
  if ("object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = t();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).pako = t();
  }
}(function () {
  return function t(e, a, i) {
    function n(s, o) {
      if (!a[s]) {
        if (!e[s]) {
          var l = "function" == typeof require && require;if (!o && l) return require(s, !0);if (r) return require(s, !0);var h = new Error("Cannot find module '" + s + "'");throw h.code = "MODULE_NOT_FOUND", h;
        }var d = a[s] = { exports: {} };e[s][0].call(d.exports, function (t) {
          var a = e[s][1][t];return n(a || t);
        }, d, d.exports, t, e, a, i);
      }return a[s].exports;
    }for (var r = "function" == typeof require && require, s = 0; s < i.length; s++) {
      n(i[s]);
    }return n;
  }({ 1: [function (t, e, a) {
      "use strict";
      function i(t) {
        if (!(this instanceof i)) return new i(t);this.options = s.assign({ level: _, method: c, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: u, to: "" }, t || {});var e = this.options;e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new h(), this.strm.avail_out = 0;var a = r.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);if (a !== f) throw new Error(l[a]);if (e.header && r.deflateSetHeader(this.strm, e.header), e.dictionary) {
          var n;if (n = "string" == typeof e.dictionary ? o.string2buf(e.dictionary) : "[object ArrayBuffer]" === d.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary, (a = r.deflateSetDictionary(this.strm, n)) !== f) throw new Error(l[a]);this._dict_set = !0;
        }
      }function n(t, e) {
        var a = new i(e);if (a.push(t, !0), a.err) throw a.msg || l[a.err];return a.result;
      }var r = t("./zlib/deflate"),
          s = t("./utils/common"),
          o = t("./utils/strings"),
          l = t("./zlib/messages"),
          h = t("./zlib/zstream"),
          d = Object.prototype.toString,
          f = 0,
          _ = -1,
          u = 0,
          c = 8;i.prototype.push = function (t, e) {
        var a,
            i,
            n = this.strm,
            l = this.options.chunkSize;if (this.ended) return !1;i = e === ~~e ? e : !0 === e ? 4 : 0, "string" == typeof t ? n.input = o.string2buf(t) : "[object ArrayBuffer]" === d.call(t) ? n.input = new Uint8Array(t) : n.input = t, n.next_in = 0, n.avail_in = n.input.length;do {
          if (0 === n.avail_out && (n.output = new s.Buf8(l), n.next_out = 0, n.avail_out = l), 1 !== (a = r.deflate(n, i)) && a !== f) return this.onEnd(a), this.ended = !0, !1;0 !== n.avail_out && (0 !== n.avail_in || 4 !== i && 2 !== i) || ("string" === this.options.to ? this.onData(o.buf2binstring(s.shrinkBuf(n.output, n.next_out))) : this.onData(s.shrinkBuf(n.output, n.next_out)));
        } while ((n.avail_in > 0 || 0 === n.avail_out) && 1 !== a);return 4 === i ? (a = r.deflateEnd(this.strm), this.onEnd(a), this.ended = !0, a === f) : 2 !== i || (this.onEnd(f), n.avail_out = 0, !0);
      }, i.prototype.onData = function (t) {
        this.chunks.push(t);
      }, i.prototype.onEnd = function (t) {
        t === f && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg;
      }, a.Deflate = i, a.deflate = n, a.deflateRaw = function (t, e) {
        return e = e || {}, e.raw = !0, n(t, e);
      }, a.gzip = function (t, e) {
        return e = e || {}, e.gzip = !0, n(t, e);
      };
    }, { "./utils/common": 3, "./utils/strings": 4, "./zlib/deflate": 8, "./zlib/messages": 13, "./zlib/zstream": 15 }], 2: [function (t, e, a) {
      "use strict";
      function i(t) {
        if (!(this instanceof i)) return new i(t);this.options = s.assign({ chunkSize: 16384, windowBits: 0, to: "" }, t || {});var e = this.options;e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, 0 === e.windowBits && (e.windowBits = -15)), !(e.windowBits >= 0 && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new d(), this.strm.avail_out = 0;var a = r.inflateInit2(this.strm, e.windowBits);if (a !== l.Z_OK) throw new Error(h[a]);this.header = new f(), r.inflateGetHeader(this.strm, this.header);
      }function n(t, e) {
        var a = new i(e);if (a.push(t, !0), a.err) throw a.msg || h[a.err];return a.result;
      }var r = t("./zlib/inflate"),
          s = t("./utils/common"),
          o = t("./utils/strings"),
          l = t("./zlib/constants"),
          h = t("./zlib/messages"),
          d = t("./zlib/zstream"),
          f = t("./zlib/gzheader"),
          _ = Object.prototype.toString;i.prototype.push = function (t, e) {
        var a,
            i,
            n,
            h,
            d,
            f,
            u = this.strm,
            c = this.options.chunkSize,
            b = this.options.dictionary,
            g = !1;if (this.ended) return !1;i = e === ~~e ? e : !0 === e ? l.Z_FINISH : l.Z_NO_FLUSH, "string" == typeof t ? u.input = o.binstring2buf(t) : "[object ArrayBuffer]" === _.call(t) ? u.input = new Uint8Array(t) : u.input = t, u.next_in = 0, u.avail_in = u.input.length;do {
          if (0 === u.avail_out && (u.output = new s.Buf8(c), u.next_out = 0, u.avail_out = c), (a = r.inflate(u, l.Z_NO_FLUSH)) === l.Z_NEED_DICT && b && (f = "string" == typeof b ? o.string2buf(b) : "[object ArrayBuffer]" === _.call(b) ? new Uint8Array(b) : b, a = r.inflateSetDictionary(this.strm, f)), a === l.Z_BUF_ERROR && !0 === g && (a = l.Z_OK, g = !1), a !== l.Z_STREAM_END && a !== l.Z_OK) return this.onEnd(a), this.ended = !0, !1;u.next_out && (0 !== u.avail_out && a !== l.Z_STREAM_END && (0 !== u.avail_in || i !== l.Z_FINISH && i !== l.Z_SYNC_FLUSH) || ("string" === this.options.to ? (n = o.utf8border(u.output, u.next_out), h = u.next_out - n, d = o.buf2string(u.output, n), u.next_out = h, u.avail_out = c - h, h && s.arraySet(u.output, u.output, n, h, 0), this.onData(d)) : this.onData(s.shrinkBuf(u.output, u.next_out)))), 0 === u.avail_in && 0 === u.avail_out && (g = !0);
        } while ((u.avail_in > 0 || 0 === u.avail_out) && a !== l.Z_STREAM_END);return a === l.Z_STREAM_END && (i = l.Z_FINISH), i === l.Z_FINISH ? (a = r.inflateEnd(this.strm), this.onEnd(a), this.ended = !0, a === l.Z_OK) : i !== l.Z_SYNC_FLUSH || (this.onEnd(l.Z_OK), u.avail_out = 0, !0);
      }, i.prototype.onData = function (t) {
        this.chunks.push(t);
      }, i.prototype.onEnd = function (t) {
        t === l.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg;
      }, a.Inflate = i, a.inflate = n, a.inflateRaw = function (t, e) {
        return e = e || {}, e.raw = !0, n(t, e);
      }, a.ungzip = n;
    }, { "./utils/common": 3, "./utils/strings": 4, "./zlib/constants": 6, "./zlib/gzheader": 9, "./zlib/inflate": 11, "./zlib/messages": 13, "./zlib/zstream": 15 }], 3: [function (t, e, a) {
      "use strict";
      function i(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;a.assign = function (t) {
        for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
          var a = e.shift();if (a) {
            if ("object" != (typeof a === "undefined" ? "undefined" : _typeof(a))) throw new TypeError(a + "must be non-object");for (var n in a) {
              i(a, n) && (t[n] = a[n]);
            }
          }
        }return t;
      }, a.shrinkBuf = function (t, e) {
        return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e, t);
      };var r = { arraySet: function arraySet(t, e, a, i, n) {
          if (e.subarray && t.subarray) t.set(e.subarray(a, a + i), n);else for (var r = 0; r < i; r++) {
            t[n + r] = e[a + r];
          }
        }, flattenChunks: function flattenChunks(t) {
          var e, a, i, n, r, s;for (i = 0, e = 0, a = t.length; e < a; e++) {
            i += t[e].length;
          }for (s = new Uint8Array(i), n = 0, e = 0, a = t.length; e < a; e++) {
            r = t[e], s.set(r, n), n += r.length;
          }return s;
        } },
          s = { arraySet: function arraySet(t, e, a, i, n) {
          for (var r = 0; r < i; r++) {
            t[n + r] = e[a + r];
          }
        }, flattenChunks: function flattenChunks(t) {
          return [].concat.apply([], t);
        } };a.setTyped = function (t) {
        t ? (a.Buf8 = Uint8Array, a.Buf16 = Uint16Array, a.Buf32 = Int32Array, a.assign(a, r)) : (a.Buf8 = Array, a.Buf16 = Array, a.Buf32 = Array, a.assign(a, s));
      }, a.setTyped(n);
    }, {}], 4: [function (t, e, a) {
      "use strict";
      function i(t, e) {
        if (e < 65537 && (t.subarray && s || !t.subarray && r)) return String.fromCharCode.apply(null, n.shrinkBuf(t, e));for (var a = "", i = 0; i < e; i++) {
          a += String.fromCharCode(t[i]);
        }return a;
      }var n = t("./common"),
          r = !0,
          s = !0;try {
        String.fromCharCode.apply(null, [0]);
      } catch (t) {
        r = !1;
      }try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch (t) {
        s = !1;
      }for (var o = new n.Buf8(256), l = 0; l < 256; l++) {
        o[l] = l >= 252 ? 6 : l >= 248 ? 5 : l >= 240 ? 4 : l >= 224 ? 3 : l >= 192 ? 2 : 1;
      }o[254] = o[254] = 1, a.string2buf = function (t) {
        var e,
            a,
            i,
            r,
            s,
            o = t.length,
            l = 0;for (r = 0; r < o; r++) {
          55296 == (64512 & (a = t.charCodeAt(r))) && r + 1 < o && 56320 == (64512 & (i = t.charCodeAt(r + 1))) && (a = 65536 + (a - 55296 << 10) + (i - 56320), r++), l += a < 128 ? 1 : a < 2048 ? 2 : a < 65536 ? 3 : 4;
        }for (e = new n.Buf8(l), s = 0, r = 0; s < l; r++) {
          55296 == (64512 & (a = t.charCodeAt(r))) && r + 1 < o && 56320 == (64512 & (i = t.charCodeAt(r + 1))) && (a = 65536 + (a - 55296 << 10) + (i - 56320), r++), a < 128 ? e[s++] = a : a < 2048 ? (e[s++] = 192 | a >>> 6, e[s++] = 128 | 63 & a) : a < 65536 ? (e[s++] = 224 | a >>> 12, e[s++] = 128 | a >>> 6 & 63, e[s++] = 128 | 63 & a) : (e[s++] = 240 | a >>> 18, e[s++] = 128 | a >>> 12 & 63, e[s++] = 128 | a >>> 6 & 63, e[s++] = 128 | 63 & a);
        }return e;
      }, a.buf2binstring = function (t) {
        return i(t, t.length);
      }, a.binstring2buf = function (t) {
        for (var e = new n.Buf8(t.length), a = 0, i = e.length; a < i; a++) {
          e[a] = t.charCodeAt(a);
        }return e;
      }, a.buf2string = function (t, e) {
        var a,
            n,
            r,
            s,
            l = e || t.length,
            h = new Array(2 * l);for (n = 0, a = 0; a < l;) {
          if ((r = t[a++]) < 128) h[n++] = r;else if ((s = o[r]) > 4) h[n++] = 65533, a += s - 1;else {
            for (r &= 2 === s ? 31 : 3 === s ? 15 : 7; s > 1 && a < l;) {
              r = r << 6 | 63 & t[a++], s--;
            }s > 1 ? h[n++] = 65533 : r < 65536 ? h[n++] = r : (r -= 65536, h[n++] = 55296 | r >> 10 & 1023, h[n++] = 56320 | 1023 & r);
          }
        }return i(h, n);
      }, a.utf8border = function (t, e) {
        var a;for ((e = e || t.length) > t.length && (e = t.length), a = e - 1; a >= 0 && 128 == (192 & t[a]);) {
          a--;
        }return a < 0 ? e : 0 === a ? e : a + o[t[a]] > e ? a : e;
      };
    }, { "./common": 3 }], 5: [function (t, e, a) {
      "use strict";
      e.exports = function (t, e, a, i) {
        for (var n = 65535 & t | 0, r = t >>> 16 & 65535 | 0, s = 0; 0 !== a;) {
          a -= s = a > 2e3 ? 2e3 : a;do {
            r = r + (n = n + e[i++] | 0) | 0;
          } while (--s);n %= 65521, r %= 65521;
        }return n | r << 16 | 0;
      };
    }, {}], 6: [function (t, e, a) {
      "use strict";
      e.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 7: [function (t, e, a) {
      "use strict";
      var i = function () {
        for (var t, e = [], a = 0; a < 256; a++) {
          t = a;for (var i = 0; i < 8; i++) {
            t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
          }e[a] = t;
        }return e;
      }();e.exports = function (t, e, a, n) {
        var r = i,
            s = n + a;t ^= -1;for (var o = n; o < s; o++) {
          t = t >>> 8 ^ r[255 & (t ^ e[o])];
        }return -1 ^ t;
      };
    }, {}], 8: [function (t, e, a) {
      "use strict";
      function i(t, e) {
        return t.msg = A[e], e;
      }function n(t) {
        return (t << 1) - (t > 4 ? 9 : 0);
      }function r(t) {
        for (var e = t.length; --e >= 0;) {
          t[e] = 0;
        }
      }function s(t) {
        var e = t.state,
            a = e.pending;a > t.avail_out && (a = t.avail_out), 0 !== a && (z.arraySet(t.output, e.pending_buf, e.pending_out, a, t.next_out), t.next_out += a, e.pending_out += a, t.total_out += a, t.avail_out -= a, e.pending -= a, 0 === e.pending && (e.pending_out = 0));
      }function o(t, e) {
        B._tr_flush_block(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, s(t.strm);
      }function l(t, e) {
        t.pending_buf[t.pending++] = e;
      }function h(t, e) {
        t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e;
      }function d(t, e, a, i) {
        var n = t.avail_in;return n > i && (n = i), 0 === n ? 0 : (t.avail_in -= n, z.arraySet(e, t.input, t.next_in, n, a), 1 === t.state.wrap ? t.adler = S(t.adler, e, n, a) : 2 === t.state.wrap && (t.adler = E(t.adler, e, n, a)), t.next_in += n, t.total_in += n, n);
      }function f(t, e) {
        var a,
            i,
            n = t.max_chain_length,
            r = t.strstart,
            s = t.prev_length,
            o = t.nice_match,
            l = t.strstart > t.w_size - it ? t.strstart - (t.w_size - it) : 0,
            h = t.window,
            d = t.w_mask,
            f = t.prev,
            _ = t.strstart + at,
            u = h[r + s - 1],
            c = h[r + s];t.prev_length >= t.good_match && (n >>= 2), o > t.lookahead && (o = t.lookahead);do {
          if (a = e, h[a + s] === c && h[a + s - 1] === u && h[a] === h[r] && h[++a] === h[r + 1]) {
            r += 2, a++;do {} while (h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && r < _);if (i = at - (_ - r), r = _ - at, i > s) {
              if (t.match_start = e, s = i, i >= o) break;u = h[r + s - 1], c = h[r + s];
            }
          }
        } while ((e = f[e & d]) > l && 0 != --n);return s <= t.lookahead ? s : t.lookahead;
      }function _(t) {
        var e,
            a,
            i,
            n,
            r,
            s = t.w_size;do {
          if (n = t.window_size - t.lookahead - t.strstart, t.strstart >= s + (s - it)) {
            z.arraySet(t.window, t.window, s, s, 0), t.match_start -= s, t.strstart -= s, t.block_start -= s, e = a = t.hash_size;do {
              i = t.head[--e], t.head[e] = i >= s ? i - s : 0;
            } while (--a);e = a = s;do {
              i = t.prev[--e], t.prev[e] = i >= s ? i - s : 0;
            } while (--a);n += s;
          }if (0 === t.strm.avail_in) break;if (a = d(t.strm, t.window, t.strstart + t.lookahead, n), t.lookahead += a, t.lookahead + t.insert >= et) for (r = t.strstart - t.insert, t.ins_h = t.window[r], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[r + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[r + et - 1]) & t.hash_mask, t.prev[r & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = r, r++, t.insert--, !(t.lookahead + t.insert < et));) {}
        } while (t.lookahead < it && 0 !== t.strm.avail_in);
      }function u(t, e) {
        for (var a, i;;) {
          if (t.lookahead < it) {
            if (_(t), t.lookahead < it && e === Z) return _t;if (0 === t.lookahead) break;
          }if (a = 0, t.lookahead >= et && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + et - 1]) & t.hash_mask, a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== a && t.strstart - a <= t.w_size - it && (t.match_length = f(t, a)), t.match_length >= et) {
            if (i = B._tr_tally(t, t.strstart - t.match_start, t.match_length - et), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= et) {
              t.match_length--;do {
                t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + et - 1]) & t.hash_mask, a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart;
              } while (0 != --t.match_length);t.strstart++;
            } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
          } else i = B._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;if (i && (o(t, !1), 0 === t.strm.avail_out)) return _t;
        }return t.insert = t.strstart < et - 1 ? t.strstart : et - 1, e === N ? (o(t, !0), 0 === t.strm.avail_out ? ct : bt) : t.last_lit && (o(t, !1), 0 === t.strm.avail_out) ? _t : ut;
      }function c(t, e) {
        for (var a, i, n;;) {
          if (t.lookahead < it) {
            if (_(t), t.lookahead < it && e === Z) return _t;if (0 === t.lookahead) break;
          }if (a = 0, t.lookahead >= et && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + et - 1]) & t.hash_mask, a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = et - 1, 0 !== a && t.prev_length < t.max_lazy_match && t.strstart - a <= t.w_size - it && (t.match_length = f(t, a), t.match_length <= 5 && (t.strategy === H || t.match_length === et && t.strstart - t.match_start > 4096) && (t.match_length = et - 1)), t.prev_length >= et && t.match_length <= t.prev_length) {
            n = t.strstart + t.lookahead - et, i = B._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - et), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;do {
              ++t.strstart <= n && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + et - 1]) & t.hash_mask, a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart);
            } while (0 != --t.prev_length);if (t.match_available = 0, t.match_length = et - 1, t.strstart++, i && (o(t, !1), 0 === t.strm.avail_out)) return _t;
          } else if (t.match_available) {
            if ((i = B._tr_tally(t, 0, t.window[t.strstart - 1])) && o(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return _t;
          } else t.match_available = 1, t.strstart++, t.lookahead--;
        }return t.match_available && (i = B._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < et - 1 ? t.strstart : et - 1, e === N ? (o(t, !0), 0 === t.strm.avail_out ? ct : bt) : t.last_lit && (o(t, !1), 0 === t.strm.avail_out) ? _t : ut;
      }function b(t, e) {
        for (var a, i, n, r, s = t.window;;) {
          if (t.lookahead <= at) {
            if (_(t), t.lookahead <= at && e === Z) return _t;if (0 === t.lookahead) break;
          }if (t.match_length = 0, t.lookahead >= et && t.strstart > 0 && (n = t.strstart - 1, (i = s[n]) === s[++n] && i === s[++n] && i === s[++n])) {
            r = t.strstart + at;do {} while (i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && n < r);t.match_length = at - (r - n), t.match_length > t.lookahead && (t.match_length = t.lookahead);
          }if (t.match_length >= et ? (a = B._tr_tally(t, 1, t.match_length - et), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (a = B._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), a && (o(t, !1), 0 === t.strm.avail_out)) return _t;
        }return t.insert = 0, e === N ? (o(t, !0), 0 === t.strm.avail_out ? ct : bt) : t.last_lit && (o(t, !1), 0 === t.strm.avail_out) ? _t : ut;
      }function g(t, e) {
        for (var a;;) {
          if (0 === t.lookahead && (_(t), 0 === t.lookahead)) {
            if (e === Z) return _t;break;
          }if (t.match_length = 0, a = B._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, a && (o(t, !1), 0 === t.strm.avail_out)) return _t;
        }return t.insert = 0, e === N ? (o(t, !0), 0 === t.strm.avail_out ? ct : bt) : t.last_lit && (o(t, !1), 0 === t.strm.avail_out) ? _t : ut;
      }function m(t, e, a, i, n) {
        this.good_length = t, this.max_lazy = e, this.nice_length = a, this.max_chain = i, this.func = n;
      }function w(t) {
        t.window_size = 2 * t.w_size, r(t.head), t.max_lazy_match = x[t.level].max_lazy, t.good_match = x[t.level].good_length, t.nice_match = x[t.level].nice_length, t.max_chain_length = x[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = et - 1, t.match_available = 0, t.ins_h = 0;
      }function p() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = q, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new z.Buf16(2 * $), this.dyn_dtree = new z.Buf16(2 * (2 * Q + 1)), this.bl_tree = new z.Buf16(2 * (2 * V + 1)), r(this.dyn_ltree), r(this.dyn_dtree), r(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new z.Buf16(tt + 1), this.heap = new z.Buf16(2 * J + 1), r(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new z.Buf16(2 * J + 1), r(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }function v(t) {
        var e;return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = Y, e = t.state, e.pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = e.wrap ? rt : dt, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = Z, B._tr_init(e), D) : i(t, U);
      }function k(t) {
        var e = v(t);return e === D && w(t.state), e;
      }function y(t, e, a, n, r, s) {
        if (!t) return U;var o = 1;if (e === L && (e = 6), n < 0 ? (o = 0, n = -n) : n > 15 && (o = 2, n -= 16), r < 1 || r > G || a !== q || n < 8 || n > 15 || e < 0 || e > 9 || s < 0 || s > M) return i(t, U);8 === n && (n = 9);var l = new p();return t.state = l, l.strm = t, l.wrap = o, l.gzhead = null, l.w_bits = n, l.w_size = 1 << l.w_bits, l.w_mask = l.w_size - 1, l.hash_bits = r + 7, l.hash_size = 1 << l.hash_bits, l.hash_mask = l.hash_size - 1, l.hash_shift = ~~((l.hash_bits + et - 1) / et), l.window = new z.Buf8(2 * l.w_size), l.head = new z.Buf16(l.hash_size), l.prev = new z.Buf16(l.w_size), l.lit_bufsize = 1 << r + 6, l.pending_buf_size = 4 * l.lit_bufsize, l.pending_buf = new z.Buf8(l.pending_buf_size), l.d_buf = 1 * l.lit_bufsize, l.l_buf = 3 * l.lit_bufsize, l.level = e, l.strategy = s, l.method = a, k(t);
      }var x,
          z = t("../utils/common"),
          B = t("./trees"),
          S = t("./adler32"),
          E = t("./crc32"),
          A = t("./messages"),
          Z = 0,
          R = 1,
          C = 3,
          N = 4,
          O = 5,
          D = 0,
          I = 1,
          U = -2,
          T = -3,
          F = -5,
          L = -1,
          H = 1,
          j = 2,
          K = 3,
          M = 4,
          P = 0,
          Y = 2,
          q = 8,
          G = 9,
          X = 15,
          W = 8,
          J = 286,
          Q = 30,
          V = 19,
          $ = 2 * J + 1,
          tt = 15,
          et = 3,
          at = 258,
          it = at + et + 1,
          nt = 32,
          rt = 42,
          st = 69,
          ot = 73,
          lt = 91,
          ht = 103,
          dt = 113,
          ft = 666,
          _t = 1,
          ut = 2,
          ct = 3,
          bt = 4,
          gt = 3;x = [new m(0, 0, 0, 0, function (t, e) {
        var a = 65535;for (a > t.pending_buf_size - 5 && (a = t.pending_buf_size - 5);;) {
          if (t.lookahead <= 1) {
            if (_(t), 0 === t.lookahead && e === Z) return _t;if (0 === t.lookahead) break;
          }t.strstart += t.lookahead, t.lookahead = 0;var i = t.block_start + a;if ((0 === t.strstart || t.strstart >= i) && (t.lookahead = t.strstart - i, t.strstart = i, o(t, !1), 0 === t.strm.avail_out)) return _t;if (t.strstart - t.block_start >= t.w_size - it && (o(t, !1), 0 === t.strm.avail_out)) return _t;
        }return t.insert = 0, e === N ? (o(t, !0), 0 === t.strm.avail_out ? ct : bt) : (t.strstart > t.block_start && (o(t, !1), t.strm.avail_out), _t);
      }), new m(4, 4, 8, 4, u), new m(4, 5, 16, 8, u), new m(4, 6, 32, 32, u), new m(4, 4, 16, 16, c), new m(8, 16, 32, 32, c), new m(8, 16, 128, 128, c), new m(8, 32, 128, 256, c), new m(32, 128, 258, 1024, c), new m(32, 258, 258, 4096, c)], a.deflateInit = function (t, e) {
        return y(t, e, q, X, W, P);
      }, a.deflateInit2 = y, a.deflateReset = k, a.deflateResetKeep = v, a.deflateSetHeader = function (t, e) {
        return t && t.state ? 2 !== t.state.wrap ? U : (t.state.gzhead = e, D) : U;
      }, a.deflate = function (t, e) {
        var a, o, d, f;if (!t || !t.state || e > O || e < 0) return t ? i(t, U) : U;if (o = t.state, !t.output || !t.input && 0 !== t.avail_in || o.status === ft && e !== N) return i(t, 0 === t.avail_out ? F : U);if (o.strm = t, a = o.last_flush, o.last_flush = e, o.status === rt) if (2 === o.wrap) t.adler = 0, l(o, 31), l(o, 139), l(o, 8), o.gzhead ? (l(o, (o.gzhead.text ? 1 : 0) + (o.gzhead.hcrc ? 2 : 0) + (o.gzhead.extra ? 4 : 0) + (o.gzhead.name ? 8 : 0) + (o.gzhead.comment ? 16 : 0)), l(o, 255 & o.gzhead.time), l(o, o.gzhead.time >> 8 & 255), l(o, o.gzhead.time >> 16 & 255), l(o, o.gzhead.time >> 24 & 255), l(o, 9 === o.level ? 2 : o.strategy >= j || o.level < 2 ? 4 : 0), l(o, 255 & o.gzhead.os), o.gzhead.extra && o.gzhead.extra.length && (l(o, 255 & o.gzhead.extra.length), l(o, o.gzhead.extra.length >> 8 & 255)), o.gzhead.hcrc && (t.adler = E(t.adler, o.pending_buf, o.pending, 0)), o.gzindex = 0, o.status = st) : (l(o, 0), l(o, 0), l(o, 0), l(o, 0), l(o, 0), l(o, 9 === o.level ? 2 : o.strategy >= j || o.level < 2 ? 4 : 0), l(o, gt), o.status = dt);else {
          var _ = q + (o.w_bits - 8 << 4) << 8;_ |= (o.strategy >= j || o.level < 2 ? 0 : o.level < 6 ? 1 : 6 === o.level ? 2 : 3) << 6, 0 !== o.strstart && (_ |= nt), _ += 31 - _ % 31, o.status = dt, h(o, _), 0 !== o.strstart && (h(o, t.adler >>> 16), h(o, 65535 & t.adler)), t.adler = 1;
        }if (o.status === st) if (o.gzhead.extra) {
          for (d = o.pending; o.gzindex < (65535 & o.gzhead.extra.length) && (o.pending !== o.pending_buf_size || (o.gzhead.hcrc && o.pending > d && (t.adler = E(t.adler, o.pending_buf, o.pending - d, d)), s(t), d = o.pending, o.pending !== o.pending_buf_size));) {
            l(o, 255 & o.gzhead.extra[o.gzindex]), o.gzindex++;
          }o.gzhead.hcrc && o.pending > d && (t.adler = E(t.adler, o.pending_buf, o.pending - d, d)), o.gzindex === o.gzhead.extra.length && (o.gzindex = 0, o.status = ot);
        } else o.status = ot;if (o.status === ot) if (o.gzhead.name) {
          d = o.pending;do {
            if (o.pending === o.pending_buf_size && (o.gzhead.hcrc && o.pending > d && (t.adler = E(t.adler, o.pending_buf, o.pending - d, d)), s(t), d = o.pending, o.pending === o.pending_buf_size)) {
              f = 1;break;
            }f = o.gzindex < o.gzhead.name.length ? 255 & o.gzhead.name.charCodeAt(o.gzindex++) : 0, l(o, f);
          } while (0 !== f);o.gzhead.hcrc && o.pending > d && (t.adler = E(t.adler, o.pending_buf, o.pending - d, d)), 0 === f && (o.gzindex = 0, o.status = lt);
        } else o.status = lt;if (o.status === lt) if (o.gzhead.comment) {
          d = o.pending;do {
            if (o.pending === o.pending_buf_size && (o.gzhead.hcrc && o.pending > d && (t.adler = E(t.adler, o.pending_buf, o.pending - d, d)), s(t), d = o.pending, o.pending === o.pending_buf_size)) {
              f = 1;break;
            }f = o.gzindex < o.gzhead.comment.length ? 255 & o.gzhead.comment.charCodeAt(o.gzindex++) : 0, l(o, f);
          } while (0 !== f);o.gzhead.hcrc && o.pending > d && (t.adler = E(t.adler, o.pending_buf, o.pending - d, d)), 0 === f && (o.status = ht);
        } else o.status = ht;if (o.status === ht && (o.gzhead.hcrc ? (o.pending + 2 > o.pending_buf_size && s(t), o.pending + 2 <= o.pending_buf_size && (l(o, 255 & t.adler), l(o, t.adler >> 8 & 255), t.adler = 0, o.status = dt)) : o.status = dt), 0 !== o.pending) {
          if (s(t), 0 === t.avail_out) return o.last_flush = -1, D;
        } else if (0 === t.avail_in && n(e) <= n(a) && e !== N) return i(t, F);if (o.status === ft && 0 !== t.avail_in) return i(t, F);if (0 !== t.avail_in || 0 !== o.lookahead || e !== Z && o.status !== ft) {
          var u = o.strategy === j ? g(o, e) : o.strategy === K ? b(o, e) : x[o.level].func(o, e);if (u !== ct && u !== bt || (o.status = ft), u === _t || u === ct) return 0 === t.avail_out && (o.last_flush = -1), D;if (u === ut && (e === R ? B._tr_align(o) : e !== O && (B._tr_stored_block(o, 0, 0, !1), e === C && (r(o.head), 0 === o.lookahead && (o.strstart = 0, o.block_start = 0, o.insert = 0))), s(t), 0 === t.avail_out)) return o.last_flush = -1, D;
        }return e !== N ? D : o.wrap <= 0 ? I : (2 === o.wrap ? (l(o, 255 & t.adler), l(o, t.adler >> 8 & 255), l(o, t.adler >> 16 & 255), l(o, t.adler >> 24 & 255), l(o, 255 & t.total_in), l(o, t.total_in >> 8 & 255), l(o, t.total_in >> 16 & 255), l(o, t.total_in >> 24 & 255)) : (h(o, t.adler >>> 16), h(o, 65535 & t.adler)), s(t), o.wrap > 0 && (o.wrap = -o.wrap), 0 !== o.pending ? D : I);
      }, a.deflateEnd = function (t) {
        var e;return t && t.state ? (e = t.state.status) !== rt && e !== st && e !== ot && e !== lt && e !== ht && e !== dt && e !== ft ? i(t, U) : (t.state = null, e === dt ? i(t, T) : D) : U;
      }, a.deflateSetDictionary = function (t, e) {
        var a,
            i,
            n,
            s,
            o,
            l,
            h,
            d,
            f = e.length;if (!t || !t.state) return U;if (a = t.state, 2 === (s = a.wrap) || 1 === s && a.status !== rt || a.lookahead) return U;for (1 === s && (t.adler = S(t.adler, e, f, 0)), a.wrap = 0, f >= a.w_size && (0 === s && (r(a.head), a.strstart = 0, a.block_start = 0, a.insert = 0), d = new z.Buf8(a.w_size), z.arraySet(d, e, f - a.w_size, a.w_size, 0), e = d, f = a.w_size), o = t.avail_in, l = t.next_in, h = t.input, t.avail_in = f, t.next_in = 0, t.input = e, _(a); a.lookahead >= et;) {
          i = a.strstart, n = a.lookahead - (et - 1);do {
            a.ins_h = (a.ins_h << a.hash_shift ^ a.window[i + et - 1]) & a.hash_mask, a.prev[i & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = i, i++;
          } while (--n);a.strstart = i, a.lookahead = et - 1, _(a);
        }return a.strstart += a.lookahead, a.block_start = a.strstart, a.insert = a.lookahead, a.lookahead = 0, a.match_length = a.prev_length = et - 1, a.match_available = 0, t.next_in = l, t.input = h, t.avail_in = o, a.wrap = s, D;
      }, a.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 3, "./adler32": 5, "./crc32": 7, "./messages": 13, "./trees": 14 }], 9: [function (t, e, a) {
      "use strict";
      e.exports = function () {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 10: [function (t, e, a) {
      "use strict";
      e.exports = function (t, e) {
        var a, i, n, r, s, o, l, h, d, f, _, u, c, b, g, m, w, p, v, k, y, x, z, B, S;a = t.state, i = t.next_in, B = t.input, n = i + (t.avail_in - 5), r = t.next_out, S = t.output, s = r - (e - t.avail_out), o = r + (t.avail_out - 257), l = a.dmax, h = a.wsize, d = a.whave, f = a.wnext, _ = a.window, u = a.hold, c = a.bits, b = a.lencode, g = a.distcode, m = (1 << a.lenbits) - 1, w = (1 << a.distbits) - 1;t: do {
          c < 15 && (u += B[i++] << c, c += 8, u += B[i++] << c, c += 8), p = b[u & m];e: for (;;) {
            if (v = p >>> 24, u >>>= v, c -= v, 0 === (v = p >>> 16 & 255)) S[r++] = 65535 & p;else {
              if (!(16 & v)) {
                if (0 == (64 & v)) {
                  p = b[(65535 & p) + (u & (1 << v) - 1)];continue e;
                }if (32 & v) {
                  a.mode = 12;break t;
                }t.msg = "invalid literal/length code", a.mode = 30;break t;
              }k = 65535 & p, (v &= 15) && (c < v && (u += B[i++] << c, c += 8), k += u & (1 << v) - 1, u >>>= v, c -= v), c < 15 && (u += B[i++] << c, c += 8, u += B[i++] << c, c += 8), p = g[u & w];a: for (;;) {
                if (v = p >>> 24, u >>>= v, c -= v, !(16 & (v = p >>> 16 & 255))) {
                  if (0 == (64 & v)) {
                    p = g[(65535 & p) + (u & (1 << v) - 1)];continue a;
                  }t.msg = "invalid distance code", a.mode = 30;break t;
                }if (y = 65535 & p, v &= 15, c < v && (u += B[i++] << c, (c += 8) < v && (u += B[i++] << c, c += 8)), (y += u & (1 << v) - 1) > l) {
                  t.msg = "invalid distance too far back", a.mode = 30;break t;
                }if (u >>>= v, c -= v, v = r - s, y > v) {
                  if ((v = y - v) > d && a.sane) {
                    t.msg = "invalid distance too far back", a.mode = 30;break t;
                  }if (x = 0, z = _, 0 === f) {
                    if (x += h - v, v < k) {
                      k -= v;do {
                        S[r++] = _[x++];
                      } while (--v);x = r - y, z = S;
                    }
                  } else if (f < v) {
                    if (x += h + f - v, (v -= f) < k) {
                      k -= v;do {
                        S[r++] = _[x++];
                      } while (--v);if (x = 0, f < k) {
                        k -= v = f;do {
                          S[r++] = _[x++];
                        } while (--v);x = r - y, z = S;
                      }
                    }
                  } else if (x += f - v, v < k) {
                    k -= v;do {
                      S[r++] = _[x++];
                    } while (--v);x = r - y, z = S;
                  }for (; k > 2;) {
                    S[r++] = z[x++], S[r++] = z[x++], S[r++] = z[x++], k -= 3;
                  }k && (S[r++] = z[x++], k > 1 && (S[r++] = z[x++]));
                } else {
                  x = r - y;do {
                    S[r++] = S[x++], S[r++] = S[x++], S[r++] = S[x++], k -= 3;
                  } while (k > 2);k && (S[r++] = S[x++], k > 1 && (S[r++] = S[x++]));
                }break;
              }
            }break;
          }
        } while (i < n && r < o);i -= k = c >> 3, u &= (1 << (c -= k << 3)) - 1, t.next_in = i, t.next_out = r, t.avail_in = i < n ? n - i + 5 : 5 - (i - n), t.avail_out = r < o ? o - r + 257 : 257 - (r - o), a.hold = u, a.bits = c;
      };
    }, {}], 11: [function (t, e, a) {
      "use strict";
      function i(t) {
        return (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);
      }function n() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new u.Buf16(320), this.work = new u.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }function r(t) {
        var e;return t && t.state ? (e = t.state, t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = N, e.last = 0, e.havedict = 0, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new u.Buf32(dt), e.distcode = e.distdyn = new u.Buf32(ft), e.sane = 1, e.back = -1, z) : E;
      }function s(t) {
        var e;return t && t.state ? (e = t.state, e.wsize = 0, e.whave = 0, e.wnext = 0, r(t)) : E;
      }function o(t, e) {
        var a, i;return t && t.state ? (i = t.state, e < 0 ? (a = 0, e = -e) : (a = 1 + (e >> 4), e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? E : (null !== i.window && i.wbits !== e && (i.window = null), i.wrap = a, i.wbits = e, s(t))) : E;
      }function l(t, e) {
        var a, i;return t ? (i = new n(), t.state = i, i.window = null, (a = o(t, e)) !== z && (t.state = null), a) : E;
      }function h(t) {
        if (ut) {
          var e;for (f = new u.Buf32(512), _ = new u.Buf32(32), e = 0; e < 144;) {
            t.lens[e++] = 8;
          }for (; e < 256;) {
            t.lens[e++] = 9;
          }for (; e < 280;) {
            t.lens[e++] = 7;
          }for (; e < 288;) {
            t.lens[e++] = 8;
          }for (m(p, t.lens, 0, 288, f, 0, t.work, { bits: 9 }), e = 0; e < 32;) {
            t.lens[e++] = 5;
          }m(v, t.lens, 0, 32, _, 0, t.work, { bits: 5 }), ut = !1;
        }t.lencode = f, t.lenbits = 9, t.distcode = _, t.distbits = 5;
      }function d(t, e, a, i) {
        var n,
            r = t.state;return null === r.window && (r.wsize = 1 << r.wbits, r.wnext = 0, r.whave = 0, r.window = new u.Buf8(r.wsize)), i >= r.wsize ? (u.arraySet(r.window, e, a - r.wsize, r.wsize, 0), r.wnext = 0, r.whave = r.wsize) : ((n = r.wsize - r.wnext) > i && (n = i), u.arraySet(r.window, e, a - i, n, r.wnext), (i -= n) ? (u.arraySet(r.window, e, a - i, i, 0), r.wnext = i, r.whave = r.wsize) : (r.wnext += n, r.wnext === r.wsize && (r.wnext = 0), r.whave < r.wsize && (r.whave += n))), 0;
      }var f,
          _,
          u = t("../utils/common"),
          c = t("./adler32"),
          b = t("./crc32"),
          g = t("./inffast"),
          m = t("./inftrees"),
          w = 0,
          p = 1,
          v = 2,
          k = 4,
          y = 5,
          x = 6,
          z = 0,
          B = 1,
          S = 2,
          E = -2,
          A = -3,
          Z = -4,
          R = -5,
          C = 8,
          N = 1,
          O = 2,
          D = 3,
          I = 4,
          U = 5,
          T = 6,
          F = 7,
          L = 8,
          H = 9,
          j = 10,
          K = 11,
          M = 12,
          P = 13,
          Y = 14,
          q = 15,
          G = 16,
          X = 17,
          W = 18,
          J = 19,
          Q = 20,
          V = 21,
          $ = 22,
          tt = 23,
          et = 24,
          at = 25,
          it = 26,
          nt = 27,
          rt = 28,
          st = 29,
          ot = 30,
          lt = 31,
          ht = 32,
          dt = 852,
          ft = 592,
          _t = 15,
          ut = !0;a.inflateReset = s, a.inflateReset2 = o, a.inflateResetKeep = r, a.inflateInit = function (t) {
        return l(t, _t);
      }, a.inflateInit2 = l, a.inflate = function (t, e) {
        var a,
            n,
            r,
            s,
            o,
            l,
            f,
            _,
            dt,
            ft,
            _t,
            ut,
            ct,
            bt,
            gt,
            mt,
            wt,
            pt,
            vt,
            kt,
            yt,
            xt,
            zt,
            Bt,
            St = 0,
            Et = new u.Buf8(4),
            At = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in) return E;(a = t.state).mode === M && (a.mode = P), o = t.next_out, r = t.output, f = t.avail_out, s = t.next_in, n = t.input, l = t.avail_in, _ = a.hold, dt = a.bits, ft = l, _t = f, xt = z;t: for (;;) {
          switch (a.mode) {case N:
              if (0 === a.wrap) {
                a.mode = P;break;
              }for (; dt < 16;) {
                if (0 === l) break t;l--, _ += n[s++] << dt, dt += 8;
              }if (2 & a.wrap && 35615 === _) {
                a.check = 0, Et[0] = 255 & _, Et[1] = _ >>> 8 & 255, a.check = b(a.check, Et, 2, 0), _ = 0, dt = 0, a.mode = O;break;
              }if (a.flags = 0, a.head && (a.head.done = !1), !(1 & a.wrap) || (((255 & _) << 8) + (_ >> 8)) % 31) {
                t.msg = "incorrect header check", a.mode = ot;break;
              }if ((15 & _) !== C) {
                t.msg = "unknown compression method", a.mode = ot;break;
              }if (_ >>>= 4, dt -= 4, yt = 8 + (15 & _), 0 === a.wbits) a.wbits = yt;else if (yt > a.wbits) {
                t.msg = "invalid window size", a.mode = ot;break;
              }a.dmax = 1 << yt, t.adler = a.check = 1, a.mode = 512 & _ ? j : M, _ = 0, dt = 0;break;case O:
              for (; dt < 16;) {
                if (0 === l) break t;l--, _ += n[s++] << dt, dt += 8;
              }if (a.flags = _, (255 & a.flags) !== C) {
                t.msg = "unknown compression method", a.mode = ot;break;
              }if (57344 & a.flags) {
                t.msg = "unknown header flags set", a.mode = ot;break;
              }a.head && (a.head.text = _ >> 8 & 1), 512 & a.flags && (Et[0] = 255 & _, Et[1] = _ >>> 8 & 255, a.check = b(a.check, Et, 2, 0)), _ = 0, dt = 0, a.mode = D;case D:
              for (; dt < 32;) {
                if (0 === l) break t;l--, _ += n[s++] << dt, dt += 8;
              }a.head && (a.head.time = _), 512 & a.flags && (Et[0] = 255 & _, Et[1] = _ >>> 8 & 255, Et[2] = _ >>> 16 & 255, Et[3] = _ >>> 24 & 255, a.check = b(a.check, Et, 4, 0)), _ = 0, dt = 0, a.mode = I;case I:
              for (; dt < 16;) {
                if (0 === l) break t;l--, _ += n[s++] << dt, dt += 8;
              }a.head && (a.head.xflags = 255 & _, a.head.os = _ >> 8), 512 & a.flags && (Et[0] = 255 & _, Et[1] = _ >>> 8 & 255, a.check = b(a.check, Et, 2, 0)), _ = 0, dt = 0, a.mode = U;case U:
              if (1024 & a.flags) {
                for (; dt < 16;) {
                  if (0 === l) break t;l--, _ += n[s++] << dt, dt += 8;
                }a.length = _, a.head && (a.head.extra_len = _), 512 & a.flags && (Et[0] = 255 & _, Et[1] = _ >>> 8 & 255, a.check = b(a.check, Et, 2, 0)), _ = 0, dt = 0;
              } else a.head && (a.head.extra = null);a.mode = T;case T:
              if (1024 & a.flags && ((ut = a.length) > l && (ut = l), ut && (a.head && (yt = a.head.extra_len - a.length, a.head.extra || (a.head.extra = new Array(a.head.extra_len)), u.arraySet(a.head.extra, n, s, ut, yt)), 512 & a.flags && (a.check = b(a.check, n, ut, s)), l -= ut, s += ut, a.length -= ut), a.length)) break t;a.length = 0, a.mode = F;case F:
              if (2048 & a.flags) {
                if (0 === l) break t;ut = 0;do {
                  yt = n[s + ut++], a.head && yt && a.length < 65536 && (a.head.name += String.fromCharCode(yt));
                } while (yt && ut < l);if (512 & a.flags && (a.check = b(a.check, n, ut, s)), l -= ut, s += ut, yt) break t;
              } else a.head && (a.head.name = null);a.length = 0, a.mode = L;case L:
              if (4096 & a.flags) {
                if (0 === l) break t;ut = 0;do {
                  yt = n[s + ut++], a.head && yt && a.length < 65536 && (a.head.comment += String.fromCharCode(yt));
                } while (yt && ut < l);if (512 & a.flags && (a.check = b(a.check, n, ut, s)), l -= ut, s += ut, yt) break t;
              } else a.head && (a.head.comment = null);a.mode = H;case H:
              if (512 & a.flags) {
                for (; dt < 16;) {
                  if (0 === l) break t;l--, _ += n[s++] << dt, dt += 8;
                }if (_ !== (65535 & a.check)) {
                  t.msg = "header crc mismatch", a.mode = ot;break;
                }_ = 0, dt = 0;
              }a.head && (a.head.hcrc = a.flags >> 9 & 1, a.head.done = !0), t.adler = a.check = 0, a.mode = M;break;case j:
              for (; dt < 32;) {
                if (0 === l) break t;l--, _ += n[s++] << dt, dt += 8;
              }t.adler = a.check = i(_), _ = 0, dt = 0, a.mode = K;case K:
              if (0 === a.havedict) return t.next_out = o, t.avail_out = f, t.next_in = s, t.avail_in = l, a.hold = _, a.bits = dt, S;t.adler = a.check = 1, a.mode = M;case M:
              if (e === y || e === x) break t;case P:
              if (a.last) {
                _ >>>= 7 & dt, dt -= 7 & dt, a.mode = nt;break;
              }for (; dt < 3;) {
                if (0 === l) break t;l--, _ += n[s++] << dt, dt += 8;
              }switch (a.last = 1 & _, _ >>>= 1, dt -= 1, 3 & _) {case 0:
                  a.mode = Y;break;case 1:
                  if (h(a), a.mode = Q, e === x) {
                    _ >>>= 2, dt -= 2;break t;
                  }break;case 2:
                  a.mode = X;break;case 3:
                  t.msg = "invalid block type", a.mode = ot;}_ >>>= 2, dt -= 2;break;case Y:
              for (_ >>>= 7 & dt, dt -= 7 & dt; dt < 32;) {
                if (0 === l) break t;l--, _ += n[s++] << dt, dt += 8;
              }if ((65535 & _) != (_ >>> 16 ^ 65535)) {
                t.msg = "invalid stored block lengths", a.mode = ot;break;
              }if (a.length = 65535 & _, _ = 0, dt = 0, a.mode = q, e === x) break t;case q:
              a.mode = G;case G:
              if (ut = a.length) {
                if (ut > l && (ut = l), ut > f && (ut = f), 0 === ut) break t;u.arraySet(r, n, s, ut, o), l -= ut, s += ut, f -= ut, o += ut, a.length -= ut;break;
              }a.mode = M;break;case X:
              for (; dt < 14;) {
                if (0 === l) break t;l--, _ += n[s++] << dt, dt += 8;
              }if (a.nlen = 257 + (31 & _), _ >>>= 5, dt -= 5, a.ndist = 1 + (31 & _), _ >>>= 5, dt -= 5, a.ncode = 4 + (15 & _), _ >>>= 4, dt -= 4, a.nlen > 286 || a.ndist > 30) {
                t.msg = "too many length or distance symbols", a.mode = ot;break;
              }a.have = 0, a.mode = W;case W:
              for (; a.have < a.ncode;) {
                for (; dt < 3;) {
                  if (0 === l) break t;l--, _ += n[s++] << dt, dt += 8;
                }a.lens[At[a.have++]] = 7 & _, _ >>>= 3, dt -= 3;
              }for (; a.have < 19;) {
                a.lens[At[a.have++]] = 0;
              }if (a.lencode = a.lendyn, a.lenbits = 7, zt = { bits: a.lenbits }, xt = m(w, a.lens, 0, 19, a.lencode, 0, a.work, zt), a.lenbits = zt.bits, xt) {
                t.msg = "invalid code lengths set", a.mode = ot;break;
              }a.have = 0, a.mode = J;case J:
              for (; a.have < a.nlen + a.ndist;) {
                for (; St = a.lencode[_ & (1 << a.lenbits) - 1], gt = St >>> 24, mt = St >>> 16 & 255, wt = 65535 & St, !(gt <= dt);) {
                  if (0 === l) break t;l--, _ += n[s++] << dt, dt += 8;
                }if (wt < 16) _ >>>= gt, dt -= gt, a.lens[a.have++] = wt;else {
                  if (16 === wt) {
                    for (Bt = gt + 2; dt < Bt;) {
                      if (0 === l) break t;l--, _ += n[s++] << dt, dt += 8;
                    }if (_ >>>= gt, dt -= gt, 0 === a.have) {
                      t.msg = "invalid bit length repeat", a.mode = ot;break;
                    }yt = a.lens[a.have - 1], ut = 3 + (3 & _), _ >>>= 2, dt -= 2;
                  } else if (17 === wt) {
                    for (Bt = gt + 3; dt < Bt;) {
                      if (0 === l) break t;l--, _ += n[s++] << dt, dt += 8;
                    }dt -= gt, yt = 0, ut = 3 + (7 & (_ >>>= gt)), _ >>>= 3, dt -= 3;
                  } else {
                    for (Bt = gt + 7; dt < Bt;) {
                      if (0 === l) break t;l--, _ += n[s++] << dt, dt += 8;
                    }dt -= gt, yt = 0, ut = 11 + (127 & (_ >>>= gt)), _ >>>= 7, dt -= 7;
                  }if (a.have + ut > a.nlen + a.ndist) {
                    t.msg = "invalid bit length repeat", a.mode = ot;break;
                  }for (; ut--;) {
                    a.lens[a.have++] = yt;
                  }
                }
              }if (a.mode === ot) break;if (0 === a.lens[256]) {
                t.msg = "invalid code -- missing end-of-block", a.mode = ot;break;
              }if (a.lenbits = 9, zt = { bits: a.lenbits }, xt = m(p, a.lens, 0, a.nlen, a.lencode, 0, a.work, zt), a.lenbits = zt.bits, xt) {
                t.msg = "invalid literal/lengths set", a.mode = ot;break;
              }if (a.distbits = 6, a.distcode = a.distdyn, zt = { bits: a.distbits }, xt = m(v, a.lens, a.nlen, a.ndist, a.distcode, 0, a.work, zt), a.distbits = zt.bits, xt) {
                t.msg = "invalid distances set", a.mode = ot;break;
              }if (a.mode = Q, e === x) break t;case Q:
              a.mode = V;case V:
              if (l >= 6 && f >= 258) {
                t.next_out = o, t.avail_out = f, t.next_in = s, t.avail_in = l, a.hold = _, a.bits = dt, g(t, _t), o = t.next_out, r = t.output, f = t.avail_out, s = t.next_in, n = t.input, l = t.avail_in, _ = a.hold, dt = a.bits, a.mode === M && (a.back = -1);break;
              }for (a.back = 0; St = a.lencode[_ & (1 << a.lenbits) - 1], gt = St >>> 24, mt = St >>> 16 & 255, wt = 65535 & St, !(gt <= dt);) {
                if (0 === l) break t;l--, _ += n[s++] << dt, dt += 8;
              }if (mt && 0 == (240 & mt)) {
                for (pt = gt, vt = mt, kt = wt; St = a.lencode[kt + ((_ & (1 << pt + vt) - 1) >> pt)], gt = St >>> 24, mt = St >>> 16 & 255, wt = 65535 & St, !(pt + gt <= dt);) {
                  if (0 === l) break t;l--, _ += n[s++] << dt, dt += 8;
                }_ >>>= pt, dt -= pt, a.back += pt;
              }if (_ >>>= gt, dt -= gt, a.back += gt, a.length = wt, 0 === mt) {
                a.mode = it;break;
              }if (32 & mt) {
                a.back = -1, a.mode = M;break;
              }if (64 & mt) {
                t.msg = "invalid literal/length code", a.mode = ot;break;
              }a.extra = 15 & mt, a.mode = $;case $:
              if (a.extra) {
                for (Bt = a.extra; dt < Bt;) {
                  if (0 === l) break t;l--, _ += n[s++] << dt, dt += 8;
                }a.length += _ & (1 << a.extra) - 1, _ >>>= a.extra, dt -= a.extra, a.back += a.extra;
              }a.was = a.length, a.mode = tt;case tt:
              for (; St = a.distcode[_ & (1 << a.distbits) - 1], gt = St >>> 24, mt = St >>> 16 & 255, wt = 65535 & St, !(gt <= dt);) {
                if (0 === l) break t;l--, _ += n[s++] << dt, dt += 8;
              }if (0 == (240 & mt)) {
                for (pt = gt, vt = mt, kt = wt; St = a.distcode[kt + ((_ & (1 << pt + vt) - 1) >> pt)], gt = St >>> 24, mt = St >>> 16 & 255, wt = 65535 & St, !(pt + gt <= dt);) {
                  if (0 === l) break t;l--, _ += n[s++] << dt, dt += 8;
                }_ >>>= pt, dt -= pt, a.back += pt;
              }if (_ >>>= gt, dt -= gt, a.back += gt, 64 & mt) {
                t.msg = "invalid distance code", a.mode = ot;break;
              }a.offset = wt, a.extra = 15 & mt, a.mode = et;case et:
              if (a.extra) {
                for (Bt = a.extra; dt < Bt;) {
                  if (0 === l) break t;l--, _ += n[s++] << dt, dt += 8;
                }a.offset += _ & (1 << a.extra) - 1, _ >>>= a.extra, dt -= a.extra, a.back += a.extra;
              }if (a.offset > a.dmax) {
                t.msg = "invalid distance too far back", a.mode = ot;break;
              }a.mode = at;case at:
              if (0 === f) break t;if (ut = _t - f, a.offset > ut) {
                if ((ut = a.offset - ut) > a.whave && a.sane) {
                  t.msg = "invalid distance too far back", a.mode = ot;break;
                }ut > a.wnext ? (ut -= a.wnext, ct = a.wsize - ut) : ct = a.wnext - ut, ut > a.length && (ut = a.length), bt = a.window;
              } else bt = r, ct = o - a.offset, ut = a.length;ut > f && (ut = f), f -= ut, a.length -= ut;do {
                r[o++] = bt[ct++];
              } while (--ut);0 === a.length && (a.mode = V);break;case it:
              if (0 === f) break t;r[o++] = a.length, f--, a.mode = V;break;case nt:
              if (a.wrap) {
                for (; dt < 32;) {
                  if (0 === l) break t;l--, _ |= n[s++] << dt, dt += 8;
                }if (_t -= f, t.total_out += _t, a.total += _t, _t && (t.adler = a.check = a.flags ? b(a.check, r, _t, o - _t) : c(a.check, r, _t, o - _t)), _t = f, (a.flags ? _ : i(_)) !== a.check) {
                  t.msg = "incorrect data check", a.mode = ot;break;
                }_ = 0, dt = 0;
              }a.mode = rt;case rt:
              if (a.wrap && a.flags) {
                for (; dt < 32;) {
                  if (0 === l) break t;l--, _ += n[s++] << dt, dt += 8;
                }if (_ !== (4294967295 & a.total)) {
                  t.msg = "incorrect length check", a.mode = ot;break;
                }_ = 0, dt = 0;
              }a.mode = st;case st:
              xt = B;break t;case ot:
              xt = A;break t;case lt:
              return Z;case ht:default:
              return E;}
        }return t.next_out = o, t.avail_out = f, t.next_in = s, t.avail_in = l, a.hold = _, a.bits = dt, (a.wsize || _t !== t.avail_out && a.mode < ot && (a.mode < nt || e !== k)) && d(t, t.output, t.next_out, _t - t.avail_out) ? (a.mode = lt, Z) : (ft -= t.avail_in, _t -= t.avail_out, t.total_in += ft, t.total_out += _t, a.total += _t, a.wrap && _t && (t.adler = a.check = a.flags ? b(a.check, r, _t, t.next_out - _t) : c(a.check, r, _t, t.next_out - _t)), t.data_type = a.bits + (a.last ? 64 : 0) + (a.mode === M ? 128 : 0) + (a.mode === Q || a.mode === q ? 256 : 0), (0 === ft && 0 === _t || e === k) && xt === z && (xt = R), xt);
      }, a.inflateEnd = function (t) {
        if (!t || !t.state) return E;var e = t.state;return e.window && (e.window = null), t.state = null, z;
      }, a.inflateGetHeader = function (t, e) {
        var a;return t && t.state ? 0 == (2 & (a = t.state).wrap) ? E : (a.head = e, e.done = !1, z) : E;
      }, a.inflateSetDictionary = function (t, e) {
        var a,
            i,
            n = e.length;return t && t.state ? 0 !== (a = t.state).wrap && a.mode !== K ? E : a.mode === K && (i = 1, (i = c(i, e, n, 0)) !== a.check) ? A : d(t, e, n, n) ? (a.mode = lt, Z) : (a.havedict = 1, z) : E;
      }, a.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 3, "./adler32": 5, "./crc32": 7, "./inffast": 10, "./inftrees": 12 }], 12: [function (t, e, a) {
      "use strict";
      var i = t("../utils/common"),
          n = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
          r = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
          s = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
          o = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];e.exports = function (t, e, a, l, h, d, f, _) {
        var u,
            c,
            b,
            g,
            m,
            w,
            p,
            v,
            k,
            y = _.bits,
            x = 0,
            z = 0,
            B = 0,
            S = 0,
            E = 0,
            A = 0,
            Z = 0,
            R = 0,
            C = 0,
            N = 0,
            O = null,
            D = 0,
            I = new i.Buf16(16),
            U = new i.Buf16(16),
            T = null,
            F = 0;for (x = 0; x <= 15; x++) {
          I[x] = 0;
        }for (z = 0; z < l; z++) {
          I[e[a + z]]++;
        }for (E = y, S = 15; S >= 1 && 0 === I[S]; S--) {}if (E > S && (E = S), 0 === S) return h[d++] = 20971520, h[d++] = 20971520, _.bits = 1, 0;for (B = 1; B < S && 0 === I[B]; B++) {}for (E < B && (E = B), R = 1, x = 1; x <= 15; x++) {
          if (R <<= 1, (R -= I[x]) < 0) return -1;
        }if (R > 0 && (0 === t || 1 !== S)) return -1;for (U[1] = 0, x = 1; x < 15; x++) {
          U[x + 1] = U[x] + I[x];
        }for (z = 0; z < l; z++) {
          0 !== e[a + z] && (f[U[e[a + z]]++] = z);
        }if (0 === t ? (O = T = f, w = 19) : 1 === t ? (O = n, D -= 257, T = r, F -= 257, w = 256) : (O = s, T = o, w = -1), N = 0, z = 0, x = B, m = d, A = E, Z = 0, b = -1, C = 1 << E, g = C - 1, 1 === t && C > 852 || 2 === t && C > 592) return 1;for (;;) {
          p = x - Z, f[z] < w ? (v = 0, k = f[z]) : f[z] > w ? (v = T[F + f[z]], k = O[D + f[z]]) : (v = 96, k = 0), u = 1 << x - Z, B = c = 1 << A;do {
            h[m + (N >> Z) + (c -= u)] = p << 24 | v << 16 | k | 0;
          } while (0 !== c);for (u = 1 << x - 1; N & u;) {
            u >>= 1;
          }if (0 !== u ? (N &= u - 1, N += u) : N = 0, z++, 0 == --I[x]) {
            if (x === S) break;x = e[a + f[z]];
          }if (x > E && (N & g) !== b) {
            for (0 === Z && (Z = E), m += B, R = 1 << (A = x - Z); A + Z < S && !((R -= I[A + Z]) <= 0);) {
              A++, R <<= 1;
            }if (C += 1 << A, 1 === t && C > 852 || 2 === t && C > 592) return 1;h[b = N & g] = E << 24 | A << 16 | m - d | 0;
          }
        }return 0 !== N && (h[m + N] = x - Z << 24 | 64 << 16 | 0), _.bits = E, 0;
      };
    }, { "../utils/common": 3 }], 13: [function (t, e, a) {
      "use strict";
      e.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 14: [function (t, e, a) {
      "use strict";
      function i(t) {
        for (var e = t.length; --e >= 0;) {
          t[e] = 0;
        }
      }function n(t, e, a, i, n) {
        this.static_tree = t, this.extra_bits = e, this.extra_base = a, this.elems = i, this.max_length = n, this.has_stree = t && t.length;
      }function r(t, e) {
        this.dyn_tree = t, this.max_code = 0, this.stat_desc = e;
      }function s(t) {
        return t < 256 ? et[t] : et[256 + (t >>> 7)];
      }function o(t, e) {
        t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255;
      }function l(t, e, a) {
        t.bi_valid > M - a ? (t.bi_buf |= e << t.bi_valid & 65535, o(t, t.bi_buf), t.bi_buf = e >> M - t.bi_valid, t.bi_valid += a - M) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += a);
      }function h(t, e, a) {
        l(t, a[2 * e], a[2 * e + 1]);
      }function d(t, e) {
        var a = 0;do {
          a |= 1 & t, t >>>= 1, a <<= 1;
        } while (--e > 0);return a >>> 1;
      }function f(t) {
        16 === t.bi_valid ? (o(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8);
      }function _(t, e) {
        var a,
            i,
            n,
            r,
            s,
            o,
            l = e.dyn_tree,
            h = e.max_code,
            d = e.stat_desc.static_tree,
            f = e.stat_desc.has_stree,
            _ = e.stat_desc.extra_bits,
            u = e.stat_desc.extra_base,
            c = e.stat_desc.max_length,
            b = 0;for (r = 0; r <= K; r++) {
          t.bl_count[r] = 0;
        }for (l[2 * t.heap[t.heap_max] + 1] = 0, a = t.heap_max + 1; a < j; a++) {
          (r = l[2 * l[2 * (i = t.heap[a]) + 1] + 1] + 1) > c && (r = c, b++), l[2 * i + 1] = r, i > h || (t.bl_count[r]++, s = 0, i >= u && (s = _[i - u]), o = l[2 * i], t.opt_len += o * (r + s), f && (t.static_len += o * (d[2 * i + 1] + s)));
        }if (0 !== b) {
          do {
            for (r = c - 1; 0 === t.bl_count[r];) {
              r--;
            }t.bl_count[r]--, t.bl_count[r + 1] += 2, t.bl_count[c]--, b -= 2;
          } while (b > 0);for (r = c; 0 !== r; r--) {
            for (i = t.bl_count[r]; 0 !== i;) {
              (n = t.heap[--a]) > h || (l[2 * n + 1] !== r && (t.opt_len += (r - l[2 * n + 1]) * l[2 * n], l[2 * n + 1] = r), i--);
            }
          }
        }
      }function u(t, e, a) {
        var i,
            n,
            r = new Array(K + 1),
            s = 0;for (i = 1; i <= K; i++) {
          r[i] = s = s + a[i - 1] << 1;
        }for (n = 0; n <= e; n++) {
          var o = t[2 * n + 1];0 !== o && (t[2 * n] = d(r[o]++, o));
        }
      }function c() {
        var t,
            e,
            a,
            i,
            r,
            s = new Array(K + 1);for (a = 0, i = 0; i < U - 1; i++) {
          for (it[i] = a, t = 0; t < 1 << W[i]; t++) {
            at[a++] = i;
          }
        }for (at[a - 1] = i, r = 0, i = 0; i < 16; i++) {
          for (nt[i] = r, t = 0; t < 1 << J[i]; t++) {
            et[r++] = i;
          }
        }for (r >>= 7; i < L; i++) {
          for (nt[i] = r << 7, t = 0; t < 1 << J[i] - 7; t++) {
            et[256 + r++] = i;
          }
        }for (e = 0; e <= K; e++) {
          s[e] = 0;
        }for (t = 0; t <= 143;) {
          $[2 * t + 1] = 8, t++, s[8]++;
        }for (; t <= 255;) {
          $[2 * t + 1] = 9, t++, s[9]++;
        }for (; t <= 279;) {
          $[2 * t + 1] = 7, t++, s[7]++;
        }for (; t <= 287;) {
          $[2 * t + 1] = 8, t++, s[8]++;
        }for (u($, F + 1, s), t = 0; t < L; t++) {
          tt[2 * t + 1] = 5, tt[2 * t] = d(t, 5);
        }rt = new n($, W, T + 1, F, K), st = new n(tt, J, 0, L, K), ot = new n(new Array(0), Q, 0, H, P);
      }function b(t) {
        var e;for (e = 0; e < F; e++) {
          t.dyn_ltree[2 * e] = 0;
        }for (e = 0; e < L; e++) {
          t.dyn_dtree[2 * e] = 0;
        }for (e = 0; e < H; e++) {
          t.bl_tree[2 * e] = 0;
        }t.dyn_ltree[2 * Y] = 1, t.opt_len = t.static_len = 0, t.last_lit = t.matches = 0;
      }function g(t) {
        t.bi_valid > 8 ? o(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0;
      }function m(t, e, a, i) {
        g(t), i && (o(t, a), o(t, ~a)), A.arraySet(t.pending_buf, t.window, e, a, t.pending), t.pending += a;
      }function w(t, e, a, i) {
        var n = 2 * e,
            r = 2 * a;return t[n] < t[r] || t[n] === t[r] && i[e] <= i[a];
      }function p(t, e, a) {
        for (var i = t.heap[a], n = a << 1; n <= t.heap_len && (n < t.heap_len && w(e, t.heap[n + 1], t.heap[n], t.depth) && n++, !w(e, i, t.heap[n], t.depth));) {
          t.heap[a] = t.heap[n], a = n, n <<= 1;
        }t.heap[a] = i;
      }function v(t, e, a) {
        var i,
            n,
            r,
            o,
            d = 0;if (0 !== t.last_lit) do {
          i = t.pending_buf[t.d_buf + 2 * d] << 8 | t.pending_buf[t.d_buf + 2 * d + 1], n = t.pending_buf[t.l_buf + d], d++, 0 === i ? h(t, n, e) : (h(t, (r = at[n]) + T + 1, e), 0 !== (o = W[r]) && l(t, n -= it[r], o), h(t, r = s(--i), a), 0 !== (o = J[r]) && l(t, i -= nt[r], o));
        } while (d < t.last_lit);h(t, Y, e);
      }function k(t, e) {
        var a,
            i,
            n,
            r = e.dyn_tree,
            s = e.stat_desc.static_tree,
            o = e.stat_desc.has_stree,
            l = e.stat_desc.elems,
            h = -1;for (t.heap_len = 0, t.heap_max = j, a = 0; a < l; a++) {
          0 !== r[2 * a] ? (t.heap[++t.heap_len] = h = a, t.depth[a] = 0) : r[2 * a + 1] = 0;
        }for (; t.heap_len < 2;) {
          r[2 * (n = t.heap[++t.heap_len] = h < 2 ? ++h : 0)] = 1, t.depth[n] = 0, t.opt_len--, o && (t.static_len -= s[2 * n + 1]);
        }for (e.max_code = h, a = t.heap_len >> 1; a >= 1; a--) {
          p(t, r, a);
        }n = l;do {
          a = t.heap[1], t.heap[1] = t.heap[t.heap_len--], p(t, r, 1), i = t.heap[1], t.heap[--t.heap_max] = a, t.heap[--t.heap_max] = i, r[2 * n] = r[2 * a] + r[2 * i], t.depth[n] = (t.depth[a] >= t.depth[i] ? t.depth[a] : t.depth[i]) + 1, r[2 * a + 1] = r[2 * i + 1] = n, t.heap[1] = n++, p(t, r, 1);
        } while (t.heap_len >= 2);t.heap[--t.heap_max] = t.heap[1], _(t, e), u(r, h, t.bl_count);
      }function y(t, e, a) {
        var i,
            n,
            r = -1,
            s = e[1],
            o = 0,
            l = 7,
            h = 4;for (0 === s && (l = 138, h = 3), e[2 * (a + 1) + 1] = 65535, i = 0; i <= a; i++) {
          n = s, s = e[2 * (i + 1) + 1], ++o < l && n === s || (o < h ? t.bl_tree[2 * n] += o : 0 !== n ? (n !== r && t.bl_tree[2 * n]++, t.bl_tree[2 * q]++) : o <= 10 ? t.bl_tree[2 * G]++ : t.bl_tree[2 * X]++, o = 0, r = n, 0 === s ? (l = 138, h = 3) : n === s ? (l = 6, h = 3) : (l = 7, h = 4));
        }
      }function x(t, e, a) {
        var i,
            n,
            r = -1,
            s = e[1],
            o = 0,
            d = 7,
            f = 4;for (0 === s && (d = 138, f = 3), i = 0; i <= a; i++) {
          if (n = s, s = e[2 * (i + 1) + 1], !(++o < d && n === s)) {
            if (o < f) do {
              h(t, n, t.bl_tree);
            } while (0 != --o);else 0 !== n ? (n !== r && (h(t, n, t.bl_tree), o--), h(t, q, t.bl_tree), l(t, o - 3, 2)) : o <= 10 ? (h(t, G, t.bl_tree), l(t, o - 3, 3)) : (h(t, X, t.bl_tree), l(t, o - 11, 7));o = 0, r = n, 0 === s ? (d = 138, f = 3) : n === s ? (d = 6, f = 3) : (d = 7, f = 4);
          }
        }
      }function z(t) {
        var e;for (y(t, t.dyn_ltree, t.l_desc.max_code), y(t, t.dyn_dtree, t.d_desc.max_code), k(t, t.bl_desc), e = H - 1; e >= 3 && 0 === t.bl_tree[2 * V[e] + 1]; e--) {}return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e;
      }function B(t, e, a, i) {
        var n;for (l(t, e - 257, 5), l(t, a - 1, 5), l(t, i - 4, 4), n = 0; n < i; n++) {
          l(t, t.bl_tree[2 * V[n] + 1], 3);
        }x(t, t.dyn_ltree, e - 1), x(t, t.dyn_dtree, a - 1);
      }function S(t) {
        var e,
            a = 4093624447;for (e = 0; e <= 31; e++, a >>>= 1) {
          if (1 & a && 0 !== t.dyn_ltree[2 * e]) return R;
        }if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return C;for (e = 32; e < T; e++) {
          if (0 !== t.dyn_ltree[2 * e]) return C;
        }return R;
      }function E(t, e, a, i) {
        l(t, (O << 1) + (i ? 1 : 0), 3), m(t, e, a, !0);
      }var A = t("../utils/common"),
          Z = 4,
          R = 0,
          C = 1,
          N = 2,
          O = 0,
          D = 1,
          I = 2,
          U = 29,
          T = 256,
          F = T + 1 + U,
          L = 30,
          H = 19,
          j = 2 * F + 1,
          K = 15,
          M = 16,
          P = 7,
          Y = 256,
          q = 16,
          G = 17,
          X = 18,
          W = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
          J = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
          Q = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
          V = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
          $ = new Array(2 * (F + 2));i($);var tt = new Array(2 * L);i(tt);var et = new Array(512);i(et);var at = new Array(256);i(at);var it = new Array(U);i(it);var nt = new Array(L);i(nt);var rt,
          st,
          ot,
          lt = !1;a._tr_init = function (t) {
        lt || (c(), lt = !0), t.l_desc = new r(t.dyn_ltree, rt), t.d_desc = new r(t.dyn_dtree, st), t.bl_desc = new r(t.bl_tree, ot), t.bi_buf = 0, t.bi_valid = 0, b(t);
      }, a._tr_stored_block = E, a._tr_flush_block = function (t, e, a, i) {
        var n,
            r,
            s = 0;t.level > 0 ? (t.strm.data_type === N && (t.strm.data_type = S(t)), k(t, t.l_desc), k(t, t.d_desc), s = z(t), n = t.opt_len + 3 + 7 >>> 3, (r = t.static_len + 3 + 7 >>> 3) <= n && (n = r)) : n = r = a + 5, a + 4 <= n && -1 !== e ? E(t, e, a, i) : t.strategy === Z || r === n ? (l(t, (D << 1) + (i ? 1 : 0), 3), v(t, $, tt)) : (l(t, (I << 1) + (i ? 1 : 0), 3), B(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, s + 1), v(t, t.dyn_ltree, t.dyn_dtree)), b(t), i && g(t);
      }, a._tr_tally = function (t, e, a) {
        return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & a, t.last_lit++, 0 === e ? t.dyn_ltree[2 * a]++ : (t.matches++, e--, t.dyn_ltree[2 * (at[a] + T + 1)]++, t.dyn_dtree[2 * s(e)]++), t.last_lit === t.lit_bufsize - 1;
      }, a._tr_align = function (t) {
        l(t, D << 1, 3), h(t, Y, $), f(t);
      };
    }, { "../utils/common": 3 }], 15: [function (t, e, a) {
      "use strict";
      e.exports = function () {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], "/": [function (t, e, a) {
      "use strict";
      var i = {};(0, t("./lib/utils/common").assign)(i, t("./lib/deflate"), t("./lib/inflate"), t("./lib/zlib/constants")), e.exports = i;
    }, { "./lib/deflate": 1, "./lib/inflate": 2, "./lib/utils/common": 3, "./lib/zlib/constants": 6 }] }, {}, [])("/");
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_Logger__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_UUID__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__talk_TalkServiceKernel__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nucleus; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/







/**
 * 内核对象。所有 API 对象的根入口。
 */
var Nucleus = function (_Service) {
    _inherits(Nucleus, _Service);

    function Nucleus(config) {
        _classCallCheck(this, Nucleus);

        // 版本信息
        var _this = _possibleConstructorReturn(this, (Nucleus.__proto__ || Object.getPrototypeOf(Nucleus)).call(this));

        _this.version = { major: 2, minor: 0, revision: 4, name: "Genie" };
        /** 内核标签。 */
        _this.tag = __WEBPACK_IMPORTED_MODULE_1__utils_UUID__["a" /* UUID */].v4().toString();
        /** 会话服务核心。 */
        _this.talkService = {
            isCalled: function isCalled() {
                return false;
            }
        };
        _this.ts = _this.talkService;
        return _this;
    }

    /**
     * 重置内核内核标签
     * @private
     */


    _createClass(Nucleus, [{
        key: "_resetTag",
        value: function _resetTag() {
            this.tag = __WEBPACK_IMPORTED_MODULE_1__utils_UUID__["a" /* UUID */].v4().toString();
        }

        /**
         * 根据指定的配置数据创建内核。
         *
         * @param config 指定配置信息。
         * @return 返回创建的 Nucleus 实例。
         */

    }, {
        key: "createNucleus",
        value: function createNucleus(config) {
            __WEBPACK_IMPORTED_MODULE_0__utils_Logger__["a" /* Logger */].i("Nucleus", "Genie " + this.version.major + "." + this.version.minor + "." + this.version.revision + " (Build JavaScript/Web - " + this.version.name + ")");

            __WEBPACK_IMPORTED_MODULE_0__utils_Logger__["a" /* Logger */].i("Nucleus", "Genie Initializing");

            this.talkService = new __WEBPACK_IMPORTED_MODULE_4__talk_TalkServiceKernel__["a" /* TalkServiceKernel */](this.tag, config);
            this.ts = this.talkService;

            this.talkService.startup();
            window.service = this.talkService;

            return true;
        }

        /**
         * 销毁 Nucleus 内容。
         */

    }, {
        key: "destroy",
        value: function destroy() {
            if (null != this.talkService) {
                this.talkService.shutdown();
                this.talkService = null;
                this.ts = null;
            }
        }

        /**
         * 获得内核标签。
         *
         * @return
         */

    }, {
        key: "getTag",
        value: function getTag() {
            return this.tag;
        }

        /**
         * 获得会话服务。
         *
         * @return
         */

    }, {
        key: "getTalkService",
        value: function getTalkService() {
            return this.talkService;
        }
    }, {
        key: "getLogger",
        value: function getLogger() {
            return __WEBPACK_IMPORTED_MODULE_0__utils_Logger__["a" /* Logger */];
        }
    }, {
        key: "getUtils",
        value: function getUtils() {
            return __WEBPACK_IMPORTED_MODULE_3__utils_Utils__["a" /* Utils */];
        }
    }, {
        key: "activateWSPlugin",
        value: function activateWSPlugin(path, callback) {
            var swfjs = document.createElement("script");

            swfjs.onload = function () {
                var wsjs = document.createElement("script");
                wsjs.onload = function () {
                    if (callback) {
                        setTimeout(callback, 30);
                    }
                };
                wsjs.setAttribute("src", path + "/websocket.js");
                document.body.appendChild(wsjs);
            };

            swfjs.setAttribute("src", path + "/swfobject.js");
            document.body.appendChild(swfjs);

            WEB_SOCKET_SWF_LOCATION = path + "/WebSocketMain.swf";
        }
    }]);

    return Nucleus;
}(__WEBPACK_IMPORTED_MODULE_2__Service__["a" /* Service */]);;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NucleusConfig; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/

/**
 * 内核配置。
 */
var NucleusConfig =
/**
 * 心跳间隔，单位：毫秒。
 */
function NucleusConfig() {
  _classCallCheck(this, NucleusConfig);

  this.heartbeat = 60 * 1000;
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_UUID__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NucleusTag; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/



var NucleusTag = function NucleusTag(value) {
    _classCallCheck(this, NucleusTag);

    /** UUID 描述。 */
    this.uuid = __WEBPACK_IMPORTED_MODULE_0__utils_UUID__["a" /* UUID */].v4().toString();
    /** 标签的字符串格式。 */
    this.strFormat = this.uuid.toString();
    /**
     * 根据标签字符串生成。
     *
     * @param value 指定字符串形式的标签。
     */
    if (value) {
        this.uuid = __WEBPACK_IMPORTED_MODULE_0__utils_UUID__["a" /* UUID */].fromString(value);
        this.strFormat = value;
    }
}

/**
 * 获得标签的字符串形式。
 *
 * @return 返回字符串形式的标签。
 */

/**
 * 返回标签的字符串形式。
 */

;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HashMap__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ajax; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/


/**
 * HTTP 方法
 */
var HttpMethod = {
    // GET
    GET: "GET",

    // POST
    POST: "POST"
};

var HttpErrorCode = {
    // 网络错误
    NETWORK_FAILED: 1000,
    // 访问状态错误
    STATUS_ERROR: 1100
};

/**
 * AJAX 响应数据封装。
 * @author Jiangwei Xu
 */

var AjaxResponse = function () {
    function AjaxResponse(status, data) {
        _classCallCheck(this, AjaxResponse);

        this.status = status;
        this.data = data;
    }

    _createClass(AjaxResponse, [{
        key: "getStatus",
        value: function getStatus() {
            return this.status;
        }
    }, {
        key: "getData",
        value: function getData() {
            return this.data;
        }
    }]);

    return AjaxResponse;
}();

;

/**
 * AJAX 请求操作封装。
 * @author Jiangwei Xu
 */

var AjaxRequest = function () {
    function AjaxRequest(xmlhttp, url) {
        _classCallCheck(this, AjaxRequest);

        this._xmlhttp = xmlhttp;
        this._url = url;
        this._method = "GET";
        this._headers = null;
        this._content = null;
    }

    _createClass(AjaxRequest, [{
        key: "method",
        value: function method(value) {
            this._method = value;
            return this;
        }
    }, {
        key: "header",
        value: function header(name, value) {
            if (null == this._headers) this._headers = new __WEBPACK_IMPORTED_MODULE_0__HashMap__["a" /* HashMap */]();

            this._headers.put(name, value);
            return this;
        }
    }, {
        key: "content",
        value: function content(value) {
            this._content = value;
            return this;
        }
    }, {
        key: "send",
        value: function send(responseCallback) {
            // 打开 AJAX 请求
            this._xmlhttp.open(this._method, this._url, true);

            var params;
            //如果content是JSON对象, 即把content转换成表单类型以POST传输
            if (null != this._content && _typeof(this._content) == "object") {
                for (var item in this._content) {
                    if (params == null) {
                        params = item + '=' + encodeURIComponent(this._content[item]);
                    } else {
                        params += '&' + item + '=' + encodeURIComponent(this._content[item]);
                    }
                }
                this._xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            } else {
                params = this._content;
                this._xmlhttp.setRequestHeader("Content-Type", "application/json");
            }

            // 处理请求头数据
            if (null != this._headers) {
                var keySet = this._headers.keySet();
                for (var i = 0; i < keySet.length; ++i) {
                    var key = keySet[i];
                    var value = this._headers.get(key);
                    // 设置请求头
                    this._xmlhttp.setRequestHeader(key, value);
                }
            }

            if (undefined !== responseCallback) {
                var _xh = this._xmlhttp;
                _xh.onreadystatechange = function () {
                    if (_xh.readyState == 4) {
                        var reponse = new AjaxResponse(_xh.status, _xh.responseText);
                        responseCallback.call(null, reponse);
                    }
                };
            }

            // 发送请求
            if (null == params) {
                this._xmlhttp.send();
            } else {
                this._xmlhttp.send(params);
            }
        }
    }]);

    return AjaxRequest;
}();

;

/**
 * AJAX 跨域访问。
 */

var AjaxCrossDomainRequest = function () {
    function AjaxCrossDomainRequest(address, port) {
        _classCallCheck(this, AjaxCrossDomainRequest);

        this._address = address;
        this._port = port;
        this._uri = "";
        this._method = "GET";
        this._cookie = null;
        this._headers = null;
        this._content = null;
        this._error = null;
        this._errorContext = null;

        this._protocol = window.location.protocol.toLowerCase().indexOf("https") >= 0 ? "https://" : "http://";

        // 请求数据是否完成
        this._completed = false;

        // 时间戳
        this._timestamp = new Date();
    }

    _createClass(AjaxCrossDomainRequest, [{
        key: "uri",
        value: function uri(value) {
            this._uri = value;
            return this;
        }
    }, {
        key: "method",
        value: function method(value) {
            this._method = value;
            return this;
        }
    }, {
        key: "content",
        value: function content(value) {
            this._content = value;
            return this;
        }
    }, {
        key: "cookie",
        value: function cookie(value) {
            this._cookie = value;
            return this;
        }
    }, {
        key: "error",
        value: function error(value, ctx) {
            this._error = value;
            this._errorContext = ctx !== undefined ? ctx : null;
            return this;
        }
    }, {
        key: "send",
        value: function send(responseCallback) {
            AjaxController.execute(this, responseCallback);
            return this;
        }
    }, {
        key: "_execute",
        value: function _execute(responseCallback) {
            var time = this._timestamp.getTime();
            var param = ["?u=", this._uri, "&m=", this._method, "&c=_cc_ajax_cb", "&t=", time];

            // 添加 Content
            if (this._content != null) {
                var jsonstr = null;
                if (typeof this._content == "string") {
                    jsonstr = this._content;
                } else {
                    jsonstr = JSON.stringify(this._content);
                }
                // 添加 Body 数据
                param.push("&b=", escape(jsonstr));
            }

            // 添加 Cookie
            if (this._cookie != null) {
                param.push("&_cookie=", escape(this._cookie));
            }
            // URL
            var src = this._protocol + this._address + ":" + this._port + "/cccd.js" + param.join("");

            var self = this;

            if (undefined !== responseCallback) {
                _cc_ajax_map.put(time, { request: self, callback: responseCallback });
            }

            var scriptDom = document.getElementById("cccd");
            if (scriptDom != null) {
                document.body.removeChild(scriptDom);
                scriptDom = null;
            }
            if (null == scriptDom) {
                scriptDom = document.createElement("script");
                scriptDom.setAttribute("type", "text/javascript");
                scriptDom.setAttribute("id", "cccd");

                if (scriptDom.addEventListener) {
                    scriptDom.addEventListener("error", function (e) {
                        self._onError(e);
                    }, false);
                    scriptDom.addEventListener("load", function (e) {
                        self._onLoad(e);
                    }, false);
                } else if (scriptDom.attachEvent) {
                    scriptDom.attachEvent("onerror", function (e) {
                        self._onError(e);
                    });
                    scriptDom.attachEvent("onload", function (e) {
                        self._onLoad(e);
                    });
                }

                scriptDom.src = src;
                document.body.appendChild(scriptDom);
            }

            return this;
        }
    }, {
        key: "_onLoad",
        value: function _onLoad(e) {
            AjaxController.notifyCompleted(this);
        }
    }, {
        key: "_onError",
        value: function _onError(e) {
            if (null != this._error) {
                if (e !== undefined) {
                    this._error.call(this._errorContext, this, HttpErrorCode.NETWORK_FAILED);
                } else {
                    this._error.call(this._errorContext, this, HttpErrorCode.STATUS_ERROR);
                }
            }

            // 标记为完成
            this._completed = true;
            // 清理 Map
            _cc_ajax_map.remove(this._timestamp.getTime());

            AjaxController.notifyCompleted(this);
        }
    }]);

    return AjaxCrossDomainRequest;
}();

;

// Key : timestamp, Value : {request, callback}
var _cc_ajax_map = new __WEBPACK_IMPORTED_MODULE_0__HashMap__["a" /* HashMap */]();
var _cc_ajax_cb = function _cc_ajax_cb(time, response, cookie) {
    if (undefined !== cookie) {
        // 新 Cookie
        Logger.i("Ajax", "default ajax callback, cookie: " + cookie);
    } else {
        // 没有新 Cookie
        //Logger.i("Ajax", "default ajax callback, no cookie");
    }

    var obj = _cc_ajax_map.get(time);
    if (null != obj) {
        var r = obj.request;
        var cb = obj.callback;

        cb.call(null, response, cookie);
        _cc_ajax_map.remove(time);

        // 标记为完成
        r._completed = true;

        AjaxController.notifyCompleted(r);
    }
};

/**
 * 跨域请求数据中心。
 */
var AjaxController = {
    timer: 0,
    lastRequest: null,
    requestQueue: [],
    callbackQueue: [],

    // 浏览器完成事件调用的“完成”通知
    notifyCompleted: function notifyCompleted(request) {
        // TODO
    },

    execute: function execute(request, responseCallback) {
        this.requestQueue.push(request);
        this.callbackQueue.push(responseCallback);
    }
};
// 启动定时器
AjaxController.timer = setInterval(function () {
    var requestQueue = AjaxController.requestQueue;
    if (requestQueue.length > 0) {
        var callbackQueue = AjaxController.callbackQueue;

        // 根据上一次请求判断
        if (null != AjaxController.lastRequest) {
            // 判断是否完成
            if (AjaxController.lastRequest._completed) {
                // 出队
                var r = requestQueue.shift();
                var cb = callbackQueue.shift();

                AjaxController.lastRequest = r;

                // 执行
                r._execute(cb);
            }
        } else {
            // 出队
            var r = requestQueue.shift();
            var cb = callbackQueue.shift();

            AjaxController.lastRequest = r;

            // 执行
            r._execute(cb);
        }
    }
}, 500);

/**
 * AJAX
 */
var Ajax = {
    newRequest: function newRequest(url) {
        var xmlhttp = null;
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        var request = new AjaxRequest(xmlhttp, url);
        return request;
    },

    newCrossDomain: function newCrossDomain(address, port) {
        var request = new AjaxCrossDomainRequest(address, port);
        return request;
    }
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base64; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/

/*
 * $Id: base64.js,v 2.12 2013/05/06 07:54:20 dankogai Exp dankogai $
 *
 *  Licensed under the MIT license.
 *    http://opensource.org/licenses/mit-license
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
var Base64 = function Base64(global) {
    'use strict';
    // existing version for noConflict()

    _classCallCheck(this, Base64);

    var version = "2.1.4";
    // if node.js, we use Buffer
    var buffer;
    if (typeof module !== 'undefined' && module.exports) {
        buffer = __webpack_require__(47).Buffer;
    }
    // constants
    var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = function (bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) {
            t[bin.charAt(i)] = i;
        }return t;
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    // encoder stuff
    var cb_utob = function cb_utob(c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c : cc < 0x800 ? fromCharCode(0xc0 | cc >>> 6) + fromCharCode(0x80 | cc & 0x3f) : fromCharCode(0xe0 | cc >>> 12 & 0x0f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);
        } else {
            var cc = 0x10000 + (c.charCodeAt(0) - 0xD800) * 0x400 + (c.charCodeAt(1) - 0xDC00);
            return fromCharCode(0xf0 | cc >>> 18 & 0x07) + fromCharCode(0x80 | cc >>> 12 & 0x3f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function utob(u) {
        return u.replace(re_utob, cb_utob);
    };
    var cb_encode = function cb_encode(ccc) {
        var padlen = [0, 2, 1][ccc.length % 3],
            ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0),
            chars = [b64chars.charAt(ord >>> 18), b64chars.charAt(ord >>> 12 & 63), padlen >= 2 ? '=' : b64chars.charAt(ord >>> 6 & 63), padlen >= 1 ? '=' : b64chars.charAt(ord & 63)];
        return chars.join('');
    };
    var btoa = global.btoa ? function (b) {
        return global.btoa(b);
    } : function (b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };
    var _encode = buffer ? function (u) {
        return new buffer(u).toString('base64');
    } : function (u) {
        return btoa(utob(u));
    };
    var encode = function encode(u, urisafe) {
        return !urisafe ? _encode(u) : _encode(u).replace(/[+\/]/g, function (m0) {
            return m0 == '+' ? '-' : '_';
        }).replace(/=/g, '');
    };
    var encodeURI = function encodeURI(u) {
        return encode(u, true);
    };
    // decoder stuff
    var re_btou = new RegExp(['[\xC0-\xDF][\x80-\xBF]', '[\xE0-\xEF][\x80-\xBF]{2}', '[\xF0-\xF7][\x80-\xBF]{3}'].join('|'), 'g');
    var cb_btou = function cb_btou(cccc) {
        switch (cccc.length) {
            case 4:
                var cp = (0x07 & cccc.charCodeAt(0)) << 18 | (0x3f & cccc.charCodeAt(1)) << 12 | (0x3f & cccc.charCodeAt(2)) << 6 | 0x3f & cccc.charCodeAt(3),
                    offset = cp - 0x10000;
                return fromCharCode((offset >>> 10) + 0xD800) + fromCharCode((offset & 0x3FF) + 0xDC00);
            case 3:
                return fromCharCode((0x0f & cccc.charCodeAt(0)) << 12 | (0x3f & cccc.charCodeAt(1)) << 6 | 0x3f & cccc.charCodeAt(2));
            default:
                return fromCharCode((0x1f & cccc.charCodeAt(0)) << 6 | 0x3f & cccc.charCodeAt(1));
        }
    };
    var btou = function btou(b) {
        return b.replace(re_btou, cb_btou);
    };
    var cb_decode = function cb_decode(cccc) {
        var len = cccc.length,
            padlen = len % 4,
            n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) | (len > 3 ? b64tab[cccc.charAt(3)] : 0),
            chars = [fromCharCode(n >>> 16), fromCharCode(n >>> 8 & 0xff), fromCharCode(n & 0xff)];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join('');
    };
    var atob = global.atob ? function (a) {
        return global.atob(a);
    } : function (a) {
        return a.replace(/[\s\S]{1,4}/g, cb_decode);
    };
    var _decode = buffer ? function (a) {
        return new buffer(a, 'base64').toString();
    } : function (a) {
        return btou(atob(a));
    };
    var decode = function decode(a) {
        return _decode(a.replace(/[-_]/g, function (m0) {
            return m0 == '-' ? '+' : '/';
        }).replace(/[^A-Za-z0-9\+\/]/g, ''));
    };
    var noConflict = function noConflict() {
        var Base64 = global.Base64;
        global.Base64 = _Base64;
        return Base64;
    };
    // export Base64
    global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict
    };
    var _Base64 = global.Base64;
    // if ES5 is available, make Base64.extendString() available
    if (typeof Object.defineProperty === 'function') {
        var noEnum = function noEnum(v) {
            return { value: v, enumerable: false, writable: true, configurable: true };
        };
        global.Base64.extendString = function () {
            Object.defineProperty(String.prototype, 'fromBase64', noEnum(function () {
                return decode(this);
            }));
            Object.defineProperty(String.prototype, 'toBase64', noEnum(function (urisafe) {
                return encode(this, urisafe);
            }));
            Object.defineProperty(String.prototype, 'toBase64URI', noEnum(function () {
                return encode(this, true);
            }));
        };
    }
    // that's it!
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(51)(module)))

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Class;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/

function argumentNames(fn) {
    var names = fn.toString().match(/^[\s\(]*function[^(]*\(([^\)]*)\)/)[1].replace(/\s+/g, '').split(',');
    return names.length == 1 && !names[0] ? [] : names;
}

/**
 * 对象类实用函数。
 */
function Class(baseClass, prop) {
    // 只接受一个参数的情况 - Class(prop)
    if ((typeof baseClass === 'undefined' ? 'undefined' : _typeof(baseClass)) === "object") {
        prop = baseClass;
        baseClass = null;
    }

    // 本次调用所创建的类（构造函数）
    function F() {
        // 如果父类存在，则实例对象的baseprototype指向父类的原型
        // 这里提供了在实例对象中调用父类方法的途径
        if (baseClass) {
            this.baseprototype = baseClass.prototype;
        }
        this.ctor.apply(this, arguments);
    }

    // 如果此类需要从其它类扩展
    if (baseClass) {
        var middleClass = function middleClass() {};
        middleClass.prototype = baseClass.prototype;
        F.prototype = new middleClass();
        F.prototype.constructor = F;
    }

    // 覆盖父类的同名函数
    for (var name in prop) {
        if (prop.hasOwnProperty(name)) {
            // 如果此类继承自父类baseClass并且父类原型中存在同名函数name
            if (baseClass && typeof prop[name] === "function" && argumentNames(prop[name])[0] === "$super") {
                // 重定义子类的原型方法prop[name]
                // - 比如$super封装了父类方法的调用，但是调用时的上下文指针要指向当前子类的实例对象
                // - 将$super作为方法调用的第一个参数
                F.prototype[name] = function (name, fn) {
                    return function () {
                        var that = this;
                        $super = function $super() {
                            return baseClass.prototype[name].apply(that, arguments);
                        };
                        return fn.apply(this, Array.prototype.concat.apply($super, arguments));
                    };
                }(name, prop[name]);
            } else {
                F.prototype[name] = prop[name];
            }
        }
    }

    return F;
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InetAddress; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/

/**
 * 网络地址描述类。
 *
 * @author Jiangwei Xu
 */
var InetAddress = function () {
    function InetAddress(host, port) {
        _classCallCheck(this, InetAddress);

        this.host = host;
        this.port = port;
    }

    _createClass(InetAddress, [{
        key: "getHost",
        value: function getHost() {
            return this.host;
        }
    }, {
        key: "getPort",
        value: function getPort() {
            return this.port;
        }
    }, {
        key: "toString",
        value: function toString() {
            return this.host + ":" + this.port;
        }
    }]);

    return InetAddress;
}();;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_talk_Protocol__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_utils_Logger__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_utils_Utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_utils_BytesUtils__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseProtocol; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/





var CaseProtocol = function () {
    function CaseProtocol() {
        _classCallCheck(this, CaseProtocol);

        this.sn = __WEBPACK_IMPORTED_MODULE_2__src_utils_Utils__["a" /* Utils */].randomBytes(4);
        this.expectedKey = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this.expectedTag = "921660a9-e336-43f3-a1b8-b9ae8a456bf4", this.expectedHS = [1, 0, 17, 36, 17, 36, 72, 83, 97, 98, 99, 100, 101, 102, 103, 104, 30, 57, 50, 49, 54, 54, 48, 97, 57, 45, 101, 51, 51, 54, 45, 52, 51, 102, 51, 45, 97, 49, 98, 56, 45, 98, 57, 97, 101, 56, 97, 52, 53, 54, 98, 102, 52];
    }

    _createClass(CaseProtocol, [{
        key: "test1",
        value: function test1() {
            var actual = __WEBPACK_IMPORTED_MODULE_0__src_talk_Protocol__["a" /* Protocol */].serializeHandshake(__WEBPACK_IMPORTED_MODULE_3__src_utils_BytesUtils__["a" /* ByteUtils */].toBytes(this.expectedKey.join('')), this.expectedTag);
            for (var i = 0; i < this.expectedHS.length; ++i) {
                var e = this.expectedHS[i];
                var a = actual[i];
                if (e != a) {
                    __WEBPACK_IMPORTED_MODULE_1__src_utils_Logger__["a" /* Logger */].e("CaseProtocol", "Test 1 failed");
                    return;
                }
            }
            __WEBPACK_IMPORTED_MODULE_1__src_utils_Logger__["a" /* Logger */].i("CaseProtocol", "Test 1 OK");
        }
    }, {
        key: "test2",
        value: function test2() {
            var protocol = __WEBPACK_IMPORTED_MODULE_0__src_talk_Protocol__["a" /* Protocol */].deserializeHandshake(this.expectedHS);
            for (var i = 0; i < this.expectedKey.length; ++i) {
                if (protocol.key[i] != this.expectedKey[i]) {
                    __WEBPACK_IMPORTED_MODULE_1__src_utils_Logger__["a" /* Logger */].e("CaseProtocol", "Test 2 failed : key error");
                    return;
                }
            }
            if (protocol.tag != this.expectedTag) {
                __WEBPACK_IMPORTED_MODULE_1__src_utils_Logger__["a" /* Logger */].e("CaseProtocol", "Test 2 failed: tag error");
                return;
            }
            __WEBPACK_IMPORTED_MODULE_1__src_utils_Logger__["a" /* Logger */].i("CaseProtocol", "Test 2 OK");
        }
    }]);

    return CaseProtocol;
}();;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_Logger__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_utils_BytesUtils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_net_Message__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseZip; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/




var CaseZip = function () {
    function CaseZip() {
        _classCallCheck(this, CaseZip);
    }

    _createClass(CaseZip, [{
        key: "run",
        value: function run() {
            var str = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            var result = __WEBPACK_IMPORTED_MODULE_2__src_net_Message__["a" /* Message */].compress(str);
            __WEBPACK_IMPORTED_MODULE_0__src_utils_Logger__["a" /* Logger */].i("CaseZip", result);

            // long test
            var time = Date.now();
            for (var i = 0; i <= 100000; i++) {
                time++;
                if (time != __WEBPACK_IMPORTED_MODULE_1__src_utils_BytesUtils__["a" /* ByteUtils */].toLong(__WEBPACK_IMPORTED_MODULE_1__src_utils_BytesUtils__["a" /* ByteUtils */].toBytes(time))) {
                    console.log(time);
                }
            }
        }
    }]);

    return CaseZip;
}();;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Nucleus__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_HashMap__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_Base64__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entity_NucleusTag__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__talk_dialect_ActionDialect__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_Class__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_InetAddress__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entity_NucleusConfig__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__talk_TalkError__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_Ajax__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_pako_min_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_pako_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__lib_pako_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__test_CaseZip__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__test_CaseProtocol__ = __webpack_require__(22);
/*
 * Boot.js
 * Genie
 *
 * Copyright (c) 2015-2017 Cube Team. All rights reserved.
 */















/**
 * 引导程序, 负责模块的初始化工作。
 *
 * @author Li wenKai
 */
(function (global) {
    // 提供全局的接口类
    global.NucleusConfig = __WEBPACK_IMPORTED_MODULE_7__entity_NucleusConfig__["a" /* NucleusConfig */];
    global.NucleusTag = __WEBPACK_IMPORTED_MODULE_3__entity_NucleusTag__["a" /* NucleusTag */];
    global.NucleusError = __WEBPACK_IMPORTED_MODULE_8__talk_TalkError__["a" /* TalkError */];
    global.NucleusAjax = __WEBPACK_IMPORTED_MODULE_9__utils_Ajax__["a" /* Ajax */];
    global.ActionDialect = __WEBPACK_IMPORTED_MODULE_4__talk_dialect_ActionDialect__["a" /* ActionDialect */];
    global.InetAddress = __WEBPACK_IMPORTED_MODULE_6__utils_InetAddress__["a" /* InetAddress */];
    global.Class = __WEBPACK_IMPORTED_MODULE_5__utils_Class__["a" /* Class */];
    global.HashMap = __WEBPACK_IMPORTED_MODULE_1__utils_HashMap__["a" /* HashMap */];
    global.pako = __WEBPACK_IMPORTED_MODULE_10__lib_pako_min_js__;

    global.nucleus = new __WEBPACK_IMPORTED_MODULE_0__Nucleus__["a" /* Nucleus */]();

    global.Base64 = new __WEBPACK_IMPORTED_MODULE_2__utils_Base64__["a" /* Base64 */](global);

    global.CaseZip = __WEBPACK_IMPORTED_MODULE_11__test_CaseZip__["a" /* CaseZip */];
    global.CaseProtocol = __WEBPACK_IMPORTED_MODULE_12__test_CaseProtocol__["a" /* CaseProtocol */];
})(window);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Cell Cloud.

Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
-----------------------------------------------------------------------------
*/

/**
 * 系统服务定义。
 * @author Jiangwei Xu
 */
var Service = function () {
    function Service() {
        _classCallCheck(this, Service);
    }

    _createClass(Service, [{
        key: "startup",
        value: function startup() {
            return false;
        }
    }, {
        key: "shutdown",
        value: function shutdown() {}
    }]);

    return Service;
}();;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TalkServiceFailure; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Cell Cloud.

Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
-----------------------------------------------------------------------------
*/

/**
 * 会话故障码。
 *
 * @author Jiangwei Xu
 */
var TalkFailureCode = {};

/**
 * 服务故障描述类。
 *
 * @author Jiangwei Xu
 */
var TalkServiceFailure = function () {
    function TalkServiceFailure(code, clazz) {
        _classCallCheck(this, TalkServiceFailure);

        this.code = code;
        this.reason = "Error in " + clazz;

        // 描述错误
        this.description = "Unknown";
        switch (code) {
            case TalkFailureCode.NOTFOUND_CELLET:
                this.description = "Server can not find specified cellet";
                break;
            case TalkFailureCode.CALL_FAILED:
                this.description = "Network connecting timeout";
                break;
            case TalkFailureCode.TALK_LOST:
                this.description = "Lost talk connection";
                break;
            default:
                break;
        }

        this.sourceDescription = "";
        this.sourceCelletIdentifiers = null;
    }

    _createClass(TalkServiceFailure, [{
        key: "getCode",
        value: function getCode() {
            return this.code;
        }
    }, {
        key: "getReason",
        value: function getReason() {
            return this.reason;
        }
    }, {
        key: "getDescription",
        value: function getDescription() {
            return this.description;
        }
    }, {
        key: "getSourceDescription",
        value: function getSourceDescription() {
            return this.sourceDescription;
        }
    }, {
        key: "setSourceDescription",
        value: function setSourceDescription(desc) {
            this.sourceDescription = desc;
        }
    }, {
        key: "getSourceCelletIdentifiers",
        value: function getSourceCelletIdentifiers() {
            return this.sourceCelletIdentifiers;
        }
    }, {
        key: "setSourceCelletIdentifiers",
        value: function setSourceCelletIdentifiers(celletIdentifierList) {
            this.sourceCelletIdentifiers = celletIdentifierList;
        }
    }]);

    return TalkServiceFailure;
}();;

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/

var MessageService = function () {
    function MessageService() {
        _classCallCheck(this, MessageService);

        this.handler = null;
    }

    _createClass(MessageService, [{
        key: "setHandler",
        value: function setHandler(handler) {
            this.handler = handler;
        }
    }, {
        key: "getHandler",
        value: function getHandler() {
            return this.handler;
        }
    }]);

    return MessageService;
}();;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NonblockingConnectorSession__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Message__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__talk_Protocol__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MessageService__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__talk_entity_MessageErrorCode__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_Thread__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_Logger__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_entity_LogLevel__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NonblockingConnector; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/









var NonblockingConnector = function (_MessageService) {
    _inherits(NonblockingConnector, _MessageService);

    function NonblockingConnector() {
        _classCallCheck(this, NonblockingConnector);

        // 缓冲块大小
        var _this = _possibleConstructorReturn(this, (NonblockingConnector.__proto__ || Object.getPrototypeOf(NonblockingConnector)).call(this));

        _this.block = 65536;
        // 单次写数据大小限制
        _this.writeLimit = 32768;
        // 连接器连接的地址
        _this.address = null;
        // 连接超时时间
        _this.connectTimeout = 10000;
        // NIO socket channel
        _this.channel = null;
        // NIO selector
        _this.selector = null;
        // 对应的会话对象
        _this.session = null;
        // 数据处理线程
        _this.handleThread = null;
        // 线程是否自旋
        _this.spinning = false;
        //  线程是否正在运行
        _this.running = false;
        // 线程睡眠间隔
        _this.sleepInterval = 20;
        // 待发送消息列表
        _this.messages = [];
        // 是否关闭连接
        _this.closed = false;
        // 动态缓存对象池
        _this.byteBufferQueue = [];
        // 是否采用安全连接
        _this.secure = window.location.protocol.toLowerCase().indexOf("https") >= 0;
        return _this;
    }

    _createClass(NonblockingConnector, [{
        key: "getAddress",
        value: function getAddress() {
            return this.address;
        }
    }, {
        key: "connect",
        value: function connect(address) {
            if (this.channel != null && this.channel.isConnected()) {
                __WEBPACK_IMPORTED_MODULE_6__utils_Logger__["a" /* Logger */].w(NonblockingConnector, "Connector has connected to " + address.getAddress().getHostAddress());
                return false;
            }
            if (this.running && null != this.channel) {
                this.spinning = false;
                if (null != this.channel) {
                    this.destroyChannelEvent();
                    try {
                        this.channel.close(1000, "Speaker#close");
                    } catch (e) {
                        // Nothing
                    }
                }
            }

            // 状态初始化
            this.messages = [];
            this.address = address;

            var self = this;

            // WebSocket 的端口号是 HTTP 服务端口号 +1， WebSocket Secure 端口号N是 HTTPS 服务端口号 +1
            this.channel = this.createChannel(this.address.getHost(), this.address.getPort() + 1);

            // 创建 Session
            this.session = new __WEBPACK_IMPORTED_MODULE_0__NonblockingConnectorSession__["a" /* NonblockingConnectorSession */](this.address);

            this.handleThread = new __WEBPACK_IMPORTED_MODULE_5__utils_Thread__["a" /* Thread */](function () {
                // 通知 Session 创建。
                self.fireSessionCreated();
            });

            this.handleThread.start();
            return true;
        }
    }, {
        key: "disconnect",
        value: function disconnect() {
            this.spinning = false;

            if (null != this.channel) {
                if (this.channel.isConnected()) {
                    this.fireSessionClosed();
                }

                try {
                    if (null != this.channel) {
                        this.channel.close(1000, "Speaker#close");
                    }
                } catch (e) {
                    __WEBPACK_IMPORTED_MODULE_6__utils_Logger__["a" /* Logger */].e("Speaker", "Close socket has exception.");
                }
                this.channel = null;
                this.messages = [];
            }

            this.channel = null;
        }

        // 用于销毁当前 socket 事件 (避免旧socket影响新的socket)

    }, {
        key: "destroyChannelEvent",
        value: function destroyChannelEvent() {
            this.channel.onopen = null;
            this.channel.onclose = null;
            this.channel.onmessage = null;
            this.channel.onerror = null;
        }
    }, {
        key: "createChannel",
        value: function createChannel(host, port) {
            if (undefined === window.WebSocket) {
                return null;
            }

            var self = this;
            var socket = null;
            if (self.secure) {
                if (port) {
                    socket = new WebSocket("wss://" + host + ":" + port + "/wss/", "cell");
                } else {
                    socket = new WebSocket("wss://" + host + "/wss/", "cell");
                }
            } else {
                if (port) {
                    socket = new WebSocket("ws://" + host + ":" + port + "/ws/", "cell");
                } else {
                    socket = new WebSocket("ws://" + host + "/ws/", "cell");
                }
            }
            socket.onopen = function (event) {
                self.fireSessionOpened(socket, event);
            };
            socket.onclose = function (event) {
                self.fireSessionClosed(socket, event);
            };
            socket.onmessage = function (event) {
                self.receive(socket, event);
            };
            socket.onerror = function (event) {
                self.fireErrorOccurred(__WEBPACK_IMPORTED_MODULE_4__talk_entity_MessageErrorCode__["a" /* MessageErrorCode */].SOCKET_FAILED, event);
            };
            return socket;
        }
    }, {
        key: "process",
        value: function process(data) {
            if (null != this.handler) {
                this.handler.messageReceived(this.session, data);
            }
        }
    }, {
        key: "setConnectTimeout",
        value: function setConnectTimeout(timeout) {
            this.connectTimeout = timeout;
        }
    }, {
        key: "getConnectTimeout",
        value: function getConnectTimeout() {
            return this.connectTimeout;
        }
    }, {
        key: "resetSleepInterval",
        value: function resetSleepInterval(sleepInterval) {
            this.sleepInterval = sleepInterval;
        }
    }, {
        key: "setBlockSize",
        value: function setBlockSize(size) {
            if (size < 2048) {
                return;
            }

            if (this.block == size) {
                return;
            }

            this.block = size;
            this.writeLimit = Math.round(size * 0.5);

            if (null != this.channel) {
                try {
                    this.channel.setReceiveBufferSize(this.block);
                    this.channel.setSendBufferSize(this.block);
                } catch (e) {
                    // ignore
                }
            }
        }
    }, {
        key: "getBlockSize",
        value: function getBlockSize() {
            return this.block;
        }
    }, {
        key: "getSession",
        value: function getSession() {
            return this.session;
        }
    }, {
        key: "write",
        value: function write(message) {
            if (message.length > this.writeLimit) {
                this.fireErrorOccurred(__WEBPACK_IMPORTED_MODULE_4__talk_entity_MessageErrorCode__["a" /* MessageErrorCode */].WRITE_OUTOFBOUNDS);
                return;
            }

            this.messages.push(message);
        }
    }, {
        key: "fireSessionCreated",
        value: function fireSessionCreated() {
            if (null != this.handler) {
                this.handler.sessionCreated(this.session);
            }
        }
    }, {
        key: "fireSessionOpened",
        value: function fireSessionOpened() {
            if (null != this.handler) {
                this.closed = false;
                this.handler.sessionOpened(this.session);
            }
        }
    }, {
        key: "fireSessionClosed",
        value: function fireSessionClosed() {
            if (null != this.handler) {
                if (!this.closed) {
                    this.closed = true;
                    this.handler.sessionClosed(this.session);
                }
            }
        }
    }, {
        key: "fireSessionDestroyed",
        value: function fireSessionDestroyed() {
            if (null != this.handler) {
                this.handler.sessionDestroyed(this.session);
            }
        }
    }, {
        key: "fireErrorOccurred",
        value: function fireErrorOccurred(errorCode) {
            if (null != this.handler) {
                this.handler.errorOccurred(errorCode, this.session);
            }
        }
    }, {
        key: "loopDispatch",
        value: function loopDispatch() {
            // 自旋
            this.spinning = true;
            while (this.spinning) {

                if (!this.spinning) {
                    break;
                }
            }
        }

        // 发送数据包

    }, {
        key: "send",
        value: function send(key) {
            clearTimeout(this.sockTimer);
            this.sockTimer = 0;

            if (this.closed) {
                this.fireSessionClosed();
                return;
            }

            try {
                if (this.messages.length != 0) {
                    while (this.messages.length != 0) {
                        // 取出第一个数据进行发送
                        var message = this.messages.shift();
                        if (null == message) {
                            break;
                        }

                        // 加密 压缩
                        var plaintext = message.payload;
                        var skey = this.session.secretKey;
                        if (null != skey) {
                            message.setPayload(__WEBPACK_IMPORTED_MODULE_1__Message__["a" /* Message */].pack(plaintext, skey));
                        }

                        // 创建数据包
                        var packet = new Uint8Array(message.getPayload());
                        this.channel.send(packet);

                        if (null != this.handler) {
                            message.setPayload(this._parseBuf(packet));
                            this.handler.messageSent(this.session, message);
                        }

                        if (this.messages.length > 0) {
                            var self = this;
                            this.sockTimer = setTimeout(function () {
                                self.send();
                            }, 20);
                        }
                    }
                }
            } catch (e) {
                __WEBPACK_IMPORTED_MODULE_6__utils_Logger__["a" /* Logger */].l('NonblockingConnector', e, __WEBPACK_IMPORTED_MODULE_7__utils_entity_LogLevel__["a" /* LogLevel */].WARNING);
            }
        }

        // 接收数据包

    }, {
        key: "receive",
        value: function receive(socket, event) {
            if (typeof event.data === 'string') {
                __WEBPACK_IMPORTED_MODULE_6__utils_Logger__["a" /* Logger */].w("Speaker", "Not supported string type");
            } else {
                var self = this;
                var reader = new FileReader();
                reader.readAsArrayBuffer(event.data);
                reader.onload = function (e) {
                    var arrayBuf = new Uint8Array(e.target.result, 0, e.target.result.length);
                    // if (self.session) {
                    //     arrayBuf = Message.unpack(arrayBuf, self.session.secretKey);
                    // }
                    self.process(self._parseBuf(arrayBuf));
                };
            }
        }

        // 格式化buf

    }, {
        key: "_parseBuf",
        value: function _parseBuf(data) {
            // 解析VER,SN ,RES,N
            var buf = [];
            buf = buf.concat(Array.from(data.slice(0, 6)));

            // 解析DATA
            var deBuf = data.slice(6);
            for (var i = 0; i < deBuf.length; i++) {
                buf.push(deBuf[i]);
            }

            // 遍历特殊字符
            for (var j = 0; j < data.length; j++) {
                if (data[j] == __WEBPACK_IMPORTED_MODULE_2__talk_Protocol__["a" /* Protocol */].SEPARATE_CHAR) {
                    buf[j] = __WEBPACK_IMPORTED_MODULE_2__talk_Protocol__["a" /* Protocol */].SEPARATE_CHAR;
                }
            }
            return buf;
        }
    }]);

    return NonblockingConnector;
}(__WEBPACK_IMPORTED_MODULE_3__MessageService__["a" /* MessageService */]);;

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Session__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NonblockingConnectorSession; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/


var NonblockingConnectorSession = function (_Session) {
    _inherits(NonblockingConnectorSession, _Session);

    function NonblockingConnectorSession(address) {
        _classCallCheck(this, NonblockingConnectorSession);

        return _possibleConstructorReturn(this, (NonblockingConnectorSession.__proto__ || Object.getPrototypeOf(NonblockingConnectorSession)).call(this));
    }

    return NonblockingConnectorSession;
}(__WEBPACK_IMPORTED_MODULE_0__Session__["a" /* Session */]);;

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_Utils__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Session; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/



/**
 * 消息会话描述。
 */
var Session = function () {
    function Session(address) {
        _classCallCheck(this, Session);

        // 会话的 ID
        this.id = __WEBPACK_IMPORTED_MODULE_0__utils_Utils__["a" /* Utils */].generateSerialNumber();
        // 会话创建时的时间戳
        this.timestamp = Date.now();
        // 会话对应的终端地址
        this.address = address;
        // 会话的密钥
        this.secretKey = null;
    }

    _createClass(Session, [{
        key: "getId",
        value: function getId() {
            return this.id;
        }
    }, {
        key: "getAddress",
        value: function getAddress() {
            return this.handler;
        }
    }, {
        key: "setSecretKey",
        value: function setSecretKey(key) {
            this.secretKey = key;
        }
    }, {
        key: "getSecretKey",
        value: function getSecretKey() {
            return this.secretKey;
        }
    }, {
        key: "toString",
        value: function toString() {
            return this.address.getHostString() + ":" + this.address.getPort();
        }
    }]);

    return Session;
}();;

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpeakerDelegate__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelegateProxy; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** 委派的代理
 */


var DelegateProxy = function (_SpeakerDelegate) {
    _inherits(DelegateProxy, _SpeakerDelegate);

    function DelegateProxy(service) {
        _classCallCheck(this, DelegateProxy);

        var _this = _possibleConstructorReturn(this, (DelegateProxy.__proto__ || Object.getPrototypeOf(DelegateProxy)).call(this));

        _this.service = service;
        return _this;
    }

    /**
     * 当收到对端发送过来的原语时该方法被调用。
     *
     * @param speaker 接收到数据的会话者。
     * @param cellet 发送原语的 Cellet 名。
     * @param primitive 接收到的原语。
     */


    _createClass(DelegateProxy, [{
        key: "onListened",
        value: function onListened(speaker, cellet, primitive) {
            var listeners = this.service.listeners;
            for (var i = 0; i < listeners.length; ++i) {
                listeners[i].onListened(speaker, cellet, primitive);
            }
        }

        /**
         * 当原语发送出去后该方法被调用。
         *
         * @param speaker 发送数据的会话者。
         * @param cellet 接收原语的 Cellet 名。
         * @param primitive 发送的原语。
         */

    }, {
        key: "onSpoke",
        value: function onSpoke(speaker, cellet, primitive) {
            var listeners = this.service.listeners;
            for (var i = 0; i < listeners.length; ++i) {
                listeners[i].onSpoke(speaker, cellet, primitive);
            }
        }

        /**
         * 当原语发送出去后该方法被调用。
         *
         * @param speaker 发送数据的会话者。
         * @param cellet 接收原语的 Cellet 名。
         * @param primitive 发送的原语。
         */

    }, {
        key: "onSpeakAck",
        value: function onSpeakAck(speaker, cellet, primitive) {
            var listeners = this.service.listeners;
            for (var i = 0; i < listeners.length; ++i) {
                listeners[i].onSpeakAck(speaker, cellet, primitive);
            }
        }

        /**
         * 当发送的原语在指定时间内没有应答时该方法被调用。
         *
         * @param speaker 发送数据的会话者。
         * @param cellet 接收原语的 Cellet 名。
         * @param primitive 发送的原语。
         */

    }, {
        key: "onSpeakTimeout",
        value: function onSpeakTimeout(speaker, cellet, primitive) {
            var listeners = this.service.listeners;
            for (var i = 0; i < listeners.length; ++i) {
                listeners[i].onSpeakTimeout(speaker, cellet, primitive);
            }
        }
    }, {
        key: "onDialogue",
        value: function onDialogue(speaker, cellet, primitive) {
            var listeners = this.service.listeners;
            for (var i = 0; i < listeners.length; ++i) {
                listeners[i].onDialogue(speaker, cellet, primitive);
            }
        }

        /**
         * 当会话者连接到服务器完成握手后该方法被调用。
         *
         * @param speaker 发送数据的会话者。
         * @param cellet 握手的 Cellet 。
         */

    }, {
        key: "onContacted",
        value: function onContacted(speaker, cellet) {
            var listeners = this.service.listeners;
            for (var i = 0; i < listeners.length; ++i) {
                listeners[i].onContacted(speaker, cellet);
            }
        }

        /**
         * 当会话者断开与服务器的连接时该方法被调用。
         *
         * @param speaker 发送数据的会话者。
         * @param cellet 握手的 Cellet 。
         */

    }, {
        key: "onQuitted",
        value: function onQuitted(speaker, cellet) {
            var listeners = this.service.listeners;
            for (var i = 0; i < listeners.length; ++i) {
                listeners[i].quitted(speaker, cellet);
            }
        }

        /**
         * 当发生故障时该方法被调用。
         *
         * @param speaker 发送数据的会话者。
         * @param error 故障描述。
         */

    }, {
        key: "onFailed",
        value: function onFailed(speaker, failure) {
            var listeners = this.service.listeners;
            for (var i = 0; i < listeners.length; ++i) {
                listeners[i].failed(speaker, failure);
            }
        }
    }]);

    return DelegateProxy;
}(__WEBPACK_IMPORTED_MODULE_0__SpeakerDelegate__["a" /* SpeakerDelegate */]);;

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeartbeatContext; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 心跳管理用的上下文。
 */
var HeartbeatContext = function HeartbeatContext(session, tag) {
    _classCallCheck(this, HeartbeatContext);

    this.originateTimestamp = 0;
    this.receiveTimestamp = 0;
    this.transmitTimestamp = 0;
    this.localTimestamp = 0;
    this.session = session;
    this.tag = tag;
};;

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HeartbeatContext__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Protocol__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_Logger__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__net_Message__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeartbeatMachine; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/






var HeartbeatMachine = function () {
    function HeartbeatMachine(acceptor) {
        _classCallCheck(this, HeartbeatMachine);

        // 执行心跳任务的时间间隔
        this.hbInterval = null;
        // 每个心跳的有效时长，超过该时长认为对方无应答
        this.hbDuration = 15000;
        // 任务定时器
        this.daemon = null;
        // 消息连接器
        this.connector = null;
        // 消息接收器
        this.acceptor = acceptor;
        // Session ID 上下文
        this.contextMap = new HashMap();
        // 存储当前正在执行心跳的上下文
        this.currentQueue = [];
        // 监听器
        this.listener = null;
    }

    /**
     * 启动。
     */


    _createClass(HeartbeatMachine, [{
        key: "startup",
        value: function startup() {
            if (null == this.daemon) {
                var self = this;
                // this.daemon = setInterval(function () {
                //     self.Daemon();
                // }, 3 * 1000)
            }
        }

        /**
         * 关闭。
         */

    }, {
        key: "shutdown",
        value: function shutdown() {
            if (null != this.daemon) {
                this.daemon.cancel();
                // this.daemon.purge();
                this.daemon = null;
            }

            this.contextMap.clear();
            this.currentQueue.clear();
        }

        /**
         * 设置心跳间隔。
         *
         * @param interval
         */

    }, {
        key: "setInterval",
        value: function setInterval(interval) {
            this.hbInterval = interval;
        }

        /**
         * 设置监听器。
         *
         * @param listener
         */

    }, {
        key: "setListener",
        value: function setListener(listener) {
            this.listener = listener;
        }

        /**
         * 添加会话。
         *
         * @param session
         * @param tag
         */

    }, {
        key: "addSession",
        value: function addSession(session, tag) {
            if (this.contextMap.containsKey(session.getId())) {
                return;
            }

            this.contextMap.put(session.getId(), new __WEBPACK_IMPORTED_MODULE_0__HeartbeatContext__["a" /* HeartbeatContext */](session, tag));
        }

        /**
         * 移除会话。
         *
         * @param session
         */

    }, {
        key: "removeSession",
        value: function removeSession(session) {
            this.contextMap.remove(session.getId());
        }

        /**
         * 获取指定会话的心跳上下文。
         *
         * @param session
         * @return
         */

    }, {
        key: "getContext",
        value: function getContext(session) {
            return this.contextMap.get(session.getId());
        }

        /**
         * 处理来自对端的心跳数据。
         *
         * @param session
         * @param packet
         * @param time 接收到数据包时的时间。
         */

    }, {
        key: "processHeartbeat",
        value: function processHeartbeat(session, packet, time) {
            __WEBPACK_IMPORTED_MODULE_2__utils_Logger__["a" /* Logger */].d("Speaker", "Heartbeat is to live");
            var ctx = this.contextMap.get(session.getId());
            if (null == ctx) {
                // TODO 错误日志
                return;
            }
            // 解析协议
            var protocol = __WEBPACK_IMPORTED_MODULE_1__Protocol__["a" /* Protocol */].deserializeHeartbeat(packet);
            // 进行应答
            var buf = __WEBPACK_IMPORTED_MODULE_1__Protocol__["a" /* Protocol */].serializeHeartbeatAck(protocol.tag, protocol.originateTimestamp, time, Date.now());

            var message = new __WEBPACK_IMPORTED_MODULE_3__net_Message__["a" /* Message */](buf);
            // message.setContext(new MessageContext(cellet, primitive));

            this.acceptor.write(message);
            this.acceptor.send();
        }

        /**
         * 处理对端返回的心跳应答。
         *
         * @param session
         * @param packet
         */

    }, {
        key: "processHeartbeatAck",
        value: function processHeartbeatAck(session, packet) {
            var ctx = this.contextMap.get(session.getId());
            if (null == ctx) {
                // TODO 错误日志
                return;
            }
            var protocol = __WEBPACK_IMPORTED_MODULE_1__Protocol__["a" /* Protocol */].deserializeHeartbeatAck(packet);
            if (protocol.originateTimestamp == ctx.originateTimestamp) {
                // 记录时间
                ctx.receiveTimestamp = protocol.receiveTimestamp;
                ctx.transmitTimestamp = protocol.transmitTimestamp;
                ctx.localTimestamp = Date.now();
            } else {
                // TODO 错误日志
            }
        }
    }, {
        key: "setHandler",
        value: function setHandler(_setHandler) {
            this.handler = handler;
        }
    }, {
        key: "getHandler",
        value: function getHandler() {
            return this.handler;
        }
    }, {
        key: "setListener",
        value: function setListener(listener) {
            this.listener = listener;
        }
    }, {
        key: "addSession",
        value: function addSession(session, tag) {
            if (this.contextMap.containsKey(session.getId())) {
                return;
            }
            this.contextMap.put(session.getId(), new __WEBPACK_IMPORTED_MODULE_0__HeartbeatContext__["a" /* HeartbeatContext */](session, tag));
        }

        /**
         * 检测超时的任务。
         */

    }, {
        key: "CheckTask",
        value: function CheckTask() {}

        /**
         * 定时执行心跳的任务。
         */

    }, {
        key: "Daemon",
        value: function Daemon() {
            var time = Date.now();
            var ctx = this.contextMap.values().shift();
            ctx.originateTimestamp = parseInt(time.toString().substring(0, 8));
            this.contextMap.put(ctx);
            // 设置时间
            var buf = __WEBPACK_IMPORTED_MODULE_1__Protocol__["a" /* Protocol */].serializeHeartbeat(window.nucleus.tag, time);
            var message = new __WEBPACK_IMPORTED_MODULE_3__net_Message__["a" /* Message */](buf);
            this.acceptor.write(message);
            this.acceptor.send();
        }
    }]);

    return HeartbeatMachine;
}();


;

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiteralBase; });
/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/


/**
 * 变量字面意义。
 * @author Wenkai Li
 */
var LiteralBase = {
    /** 字符串型。*/
    STRING: 'S',
    /** 整数型。*/
    INT: 'I',
    /** 长整数型。*/
    LONG: 'L',
    /** 浮点类型。*/
    FLOAT: 'F',
    /** 双精浮点型。*/
    DOUBLE: 'D',
    /** 布尔型。*/
    BOOL: 'B',
    /** JSON 类型。*/
    JSON: 'J',
    /**  二进制类型。*/
    BIN: 'N',

    code: null,
    setCode: function setCode(code) {
        this.code = code;
    },

    /**
     * 返回编码。
     *
     * @return
     */
    getCode: function getCode() {
        return this.code;
    },
    /**
     * 根据给定的编码解析出对应的字面义。
     *
     * @param code
     * @return
     */
    parseLiteralBase: function parseLiteralBase(code) {
        switch (__WEBPACK_IMPORTED_MODULE_0__utils_BytesUtils__["a" /* ByteUtils */].toString(code)) {
            case 'S':
                return LiteralBase.STRING;
            case 'I':
                return LiteralBase.INT;
            case 'L':
                return LiteralBase.LONG;
            case 'F':
                return LiteralBase.FLOAT;
            case 'D':
                return LiteralBase.DOUBLE;
            case 'B':
                return LiteralBase.BOOL;
            case 'J':
                return LiteralBase.JSON;
            default:
                return LiteralBase.BIN;
        }
    }
};

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageContext; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/

/**
 * 用于跟踪消息发送的消息上下文描述。
 */
var MessageContext = function MessageContext(target, primitive) {
    _classCallCheck(this, MessageContext);

    /** 目标 Cellet 名称。 */
    this.target = target;
    /** 发送的原语。 */
    this.primitive = primitive;
};;

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__net_NonblockingConnector__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HeartbeatMachine__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__primitiveCapsule__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Protocol__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listener_TalkServiceFailure__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__net_Message__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__MessageContext__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TalkError__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_Thread__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_Logger__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_BytesUtils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_Utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__entity_SpeakState__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Speaker; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/














var Speaker = function () {
    function Speaker(tag, address, listener) {
        _classCallCheck(this, Speaker);

        // 内核标签
        this.tag = tag;

        // 已连接的服务器的标签
        this.serverTag = null;

        // 连接地址
        this.address = address;

        // 连接状态描述
        this.state = __WEBPACK_IMPORTED_MODULE_12__entity_SpeakState__["a" /* SpeakState */].Disconnected;

        // 连接器
        this.connector = null;

        // 会话
        this.session = null;

        // 秘钥
        this.secretKey = null;

        // 接收队列
        this.receivedQueue = [];

        // 发送队列
        this.sentQueue = [];

        // 资源中心
        this.spkRes = null;

        // 监听器
        this.listener = listener;

        // 已发送的原语列表
        this.spokeList = new HashMap();

        // 重连定时器
        this.reconnectTimer = 0;

        // 握手定时器
        this.handshakeTimer = 0;

        // 心跳控制器
        this.hm = 0;

        // 应答跟踪器
        this.acknowledgement = null;

        this.secure = false;

        // WebSocket 的发送定时器
        this.sockTimer = 0;

        this.cellets = [];
    }

    _createClass(Speaker, [{
        key: "start",
        value: function start(cellets) {
            if (null != this.connector || this.state == __WEBPACK_IMPORTED_MODULE_12__entity_SpeakState__["a" /* SpeakState */].Connecting) {
                return false;
            }

            if (cellets) {
                for (var i = 0; i < cellets.length; ++i) {
                    var cellet = cellets[i];
                    if (this.cellets.indexOf(cellet) >= 0) {
                        continue;
                    }

                    this.cellets.push(cellet);
                }
            }

            this.state = __WEBPACK_IMPORTED_MODULE_12__entity_SpeakState__["a" /* SpeakState */].Connecting;

            if (null != this.reconnectTimer) {
                this.reconnectTimer = null;
            }

            // 启动应答跟踪
            // this.acknowledgement.start();

            // 初始化连接器
            this.connector = new __WEBPACK_IMPORTED_MODULE_0__net_NonblockingConnector__["a" /* NonblockingConnector */]();
            this.connector.setHandler(this);

            // 初始化 HM
            this.hm = new __WEBPACK_IMPORTED_MODULE_1__HeartbeatMachine__["a" /* HeartbeatMachine */](this.connector);
            this.hm.setListener(this);

            // 进行连接
            if (!this.connector.connect(this.address)) {
                this.state = __WEBPACK_IMPORTED_MODULE_12__entity_SpeakState__["a" /* SpeakState */].Disconnected;
                this.connector.setHandler(null);
                this.connector = null;

                this.hm.setListener(null);
                this.hm = null;
                return false;
            }

            return true;
        }
    }, {
        key: "stop",
        value: function stop() {
            if (__WEBPACK_IMPORTED_MODULE_12__entity_SpeakState__["a" /* SpeakState */].Disconnecting == this.state) {
                return;
            }
            this.state = __WEBPACK_IMPORTED_MODULE_12__entity_SpeakState__["a" /* SpeakState */].Disconnecting;
        }

        /**
         *
         * @memberof Speaker
         * @instance
         */

    }, {
        key: "speak",
        value: function speak(cellet, primitive) {
            if (this.state !== __WEBPACK_IMPORTED_MODULE_12__entity_SpeakState__["a" /* SpeakState */].Connected) {
                return false;
            }

            if (this.cellets.indexOf(cellet) < 0) {
                // 没有找到对应请求的 CelletServiceKernel
                return false;
            }

            var self = this;

            this.hbSendTime = 0;
            this.hbReceiveTime = 0;

            // 记录
            var pc = this.spokeList.get(this.session.getId());
            pc.addPrimitive(cellet, primitive);

            if (null != this.connector) {
                // 序列化数据
                var buf = __WEBPACK_IMPORTED_MODULE_3__Protocol__["a" /* Protocol */].serializeSpeak(cellet, primitive);

                var message = new __WEBPACK_IMPORTED_MODULE_5__net_Message__["a" /* Message */](buf);
                message.setContext(new __WEBPACK_IMPORTED_MODULE_6__MessageContext__["a" /* MessageContext */](cellet, primitive));

                // 将数据写入队列
                this.sentQueue.push(message);
                this.connector.write(message);
                // 如果没有发送任务，则packet启动发送任务。
                if (this.sockTimer == 0) {
                    this.sockTimer = setTimeout(function () {
                        self._sockHandleSend();
                    }, 20);
                }

                this.connector.send();

                if (this.ping == 0) {
                    this.ping = Date.now();
                }
            }
            return true;
        }
    }, {
        key: "_sockHandleSend",
        value: function _sockHandleSend() {
            clearTimeout(this.sockTimer);
            this.sockTimer = 0;

            if (this.sentQueue.length === 0 || null === this.connector) {
                return;
            }

            // 取出第一个数据进行发送
            var data = this.sentQueue.shift();
            // 发送
            this.connector.send(data);

            if (this.sentQueue.length > 0) {
                var self = this;
                this.sockTimer = setTimeout(function () {
                    self._sockHandleSend();
                }, 20);
            }
        }
    }, {
        key: "handshake",
        value: function handshake() {
            __WEBPACK_IMPORTED_MODULE_9__utils_Logger__["a" /* Logger */].d("Speaker", "Handshake : " + this.address.toString());
            var self = this;
            // 秘钥
            this.secretKey = __WEBPACK_IMPORTED_MODULE_10__utils_BytesUtils__["a" /* ByteUtils */].toBytes(__WEBPACK_IMPORTED_MODULE_11__utils_Utils__["a" /* Utils */].randomString(8));
            // 序列化
            var buf = __WEBPACK_IMPORTED_MODULE_3__Protocol__["a" /* Protocol */].serializeHandshake(this.secretKey, this.tag);

            var message = new __WEBPACK_IMPORTED_MODULE_5__net_Message__["a" /* Message */](buf);

            try {
                this.connector.write(message);
            } catch (e) {
                __WEBPACK_IMPORTED_MODULE_9__utils_Logger__["a" /* Logger */].e('Speaker', "Handshake failed", e);
            }
            if (this.sockTimer == 0) {
                this.sockTimer = setTimeout(function () {
                    self.connector.send();
                }, 20);
            }
        }
    }, {
        key: "sessionCreated",
        value: function sessionCreated(session) {
            __WEBPACK_IMPORTED_MODULE_9__utils_Logger__["a" /* Logger */].d("Speaker", "Session Created");

            this.session = session;

            // 加入 Session
            this.spokeList.put(session.getId(), new __WEBPACK_IMPORTED_MODULE_2__primitiveCapsule__["a" /* PrimitiveCapsule */](session));

            // 启动 HM
            this.hm.addSession(session, this.tag.toString());
            this.hm.startup();
        }
    }, {
        key: "sessionDestroyed",
        value: function sessionDestroyed() {
            __WEBPACK_IMPORTED_MODULE_9__utils_Logger__["a" /* Logger */].d("Speaker", "Session sessionDestroyed");

            // 如果 connector 不为空，则尝试恢复连接
            if (null != this.connector) {
                // 先关闭
                this.stop(true);

                // 在连接
                __WEBPACK_IMPORTED_MODULE_9__utils_Logger__["a" /* Logger */].i('speaker', "Reconnect to " + this.address.getHost() + ":" + address.getPort());
            }

            // 移除 Session
            var pc = this.spokeList.remove(this.session.getId());
            if (null != pc) {
                pc.clean();
            }

            // 关闭 HM
            if (null != this.hm) {
                this.hm.removeSession(session);
                this.hm.shutdown();
                this.hm = null;
            }
        }
    }, {
        key: "sessionOpened",
        value: function sessionOpened(session) {
            __WEBPACK_IMPORTED_MODULE_9__utils_Logger__["a" /* Logger */].d('Speaker', 'sessionOpened');

            this.state = __WEBPACK_IMPORTED_MODULE_12__entity_SpeakState__["a" /* SpeakState */].Connected;

            var self = this;
            var thread = new __WEBPACK_IMPORTED_MODULE_8__utils_Thread__["a" /* Thread */](function () {
                self.handshake();
            });
            thread.start();
        }
    }, {
        key: "sessionClosed",
        value: function sessionClosed(session) {
            __WEBPACK_IMPORTED_MODULE_9__utils_Logger__["a" /* Logger */].d('Speaker', 'sessionClosed');

            if (this.state === __WEBPACK_IMPORTED_MODULE_12__entity_SpeakState__["a" /* SpeakState */].Connected) {
                for (var i = 0; i < this.cellets.length; ++i) {
                    this._fireQuitted(this.cellets[i]);
                }
            } else {
                this._fireFailed(this.connector, __WEBPACK_IMPORTED_MODULE_7__TalkError__["a" /* TalkError */].NetworkError);
            }

            this.remoteTag = null;
            this.state = __WEBPACK_IMPORTED_MODULE_12__entity_SpeakState__["a" /* SpeakState */].Disconnected;
            this.listener.onQuitted(this, null);
        }
    }, {
        key: "messageReceived",
        value: function messageReceived(session, message) {
            var self = this;
            if (session && message) {
                var protocol = __WEBPACK_IMPORTED_MODULE_3__Protocol__["a" /* Protocol */].recognize(message);
                if (__WEBPACK_IMPORTED_MODULE_3__Protocol__["a" /* Protocol */].Handshake == protocol) {
                    __WEBPACK_IMPORTED_MODULE_9__utils_Logger__["a" /* Logger */].d("Speaker", "Handshake Success");
                    var thread = new __WEBPACK_IMPORTED_MODULE_8__utils_Thread__["a" /* Thread */](function () {
                        self.processHandshake(session, message);
                    });
                    thread.start();
                } else if (__WEBPACK_IMPORTED_MODULE_3__Protocol__["a" /* Protocol */].Speak == protocol) {
                    // 入队
                    this.receivedQueue.push(message);

                    self.processSpeak(message);
                } else if (__WEBPACK_IMPORTED_MODULE_3__Protocol__["a" /* Protocol */].BatchSpeak == protocol) {
                    self.processBatchSpeak(message);
                } else if (__WEBPACK_IMPORTED_MODULE_3__Protocol__["a" /* Protocol */].SpeakAck == protocol) {
                    self.processSpeakAck(session, message);
                } else if (__WEBPACK_IMPORTED_MODULE_3__Protocol__["a" /* Protocol */].Heartbeat == protocol) {
                    self.processHeartHeat(session, message, Date.now());
                } else if (__WEBPACK_IMPORTED_MODULE_3__Protocol__["a" /* Protocol */].HeartbeatAck == protocol) {
                    self.processHeartHeatAck(session, message);
                } else {
                    __WEBPACK_IMPORTED_MODULE_9__utils_Logger__["a" /* Logger */].w("Speaker", "Unknown protocol");
                }
            }
        }
    }, {
        key: "messageSent",
        value: function messageSent(session, message) {
            if (null == session.getSecretKey()) {
                this.session.setSecretKey(this.secretKey);
            }

            var protocol = __WEBPACK_IMPORTED_MODULE_3__Protocol__["a" /* Protocol */].recognize(message.getPayload());
            if (__WEBPACK_IMPORTED_MODULE_3__Protocol__["a" /* Protocol */].Speak == protocol) {
                var ctx = message.getContext();
                this.listener.onSpoke(this, ctx.target, ctx.primitive);
            }
        }
    }, {
        key: "processHandshake",
        value: function processHandshake(session, data) {
            var prtl = __WEBPACK_IMPORTED_MODULE_3__Protocol__["a" /* Protocol */].deserializeHandshake(data);
            if (prtl.key != null && prtl.tag != null) {
                if (this.state === __WEBPACK_IMPORTED_MODULE_12__entity_SpeakState__["a" /* SpeakState */].Disconnected) {
                    // 已经有失败的请求，则不再记录成功的请求
                    return;
                }

                // tag
                var self = this;
                // 判断是否错误
                if (!data.error) {
                    // 记录 tag
                    this.tag = prtl.tag.toString();

                    // 更新状态
                    this.state = __WEBPACK_IMPORTED_MODULE_12__entity_SpeakState__["a" /* SpeakState */].Connected;

                    var t = setTimeout(function () {
                        clearTimeout(t);
                        self.listener.onContacted(self, self.tag);
                    }, 60);
                } else {
                    // 回调失败
                    var failure = new __WEBPACK_IMPORTED_MODULE_4__listener_TalkServiceFailure__["a" /* TalkServiceFailure */](__WEBPACK_IMPORTED_MODULE_7__TalkError__["a" /* TalkError */].NOTFOUND_CELLET, "Speaker");
                    failure.setSourceDescription("Can not find cellet '" + this.cellets.toString() + "'");
                    failure.setSourceCelletIdentifiers(this.cellets);

                    this.state = __WEBPACK_IMPORTED_MODULE_12__entity_SpeakState__["a" /* SpeakState */].Disconnected; // 更新状态

                    // 回调失败
                    this.listener.onFailed(this, failure);
                }
            } else {
                // TODO 错误日志
                __WEBPACK_IMPORTED_MODULE_9__utils_Logger__["a" /* Logger */].e("Speaker", "");
            }
        }

        /**
         * 发送 SpeakAck 应答。
         *
         * @param session
         */

    }, {
        key: "sendSpeakAck",
        value: function sendSpeakAck(cellet, primitive) {
            if (this.state !== __WEBPACK_IMPORTED_MODULE_12__entity_SpeakState__["a" /* SpeakState */].Connected) {
                return false;
            }
            var self = this;

            if (null != this.connector) {
                // 序列化数据
                var buf = __WEBPACK_IMPORTED_MODULE_3__Protocol__["a" /* Protocol */].serializeSpeakAck(cellet, primitive);

                var message = new __WEBPACK_IMPORTED_MODULE_5__net_Message__["a" /* Message */](buf);
                message.setContext(new __WEBPACK_IMPORTED_MODULE_6__MessageContext__["a" /* MessageContext */](cellet, primitive));

                // 将数据写入队列
                this.connector.write(message);
                // 如果没有发送任务，则packet启动发送任务。
                if (this.sockTimer == 0) {
                    this.sockTimer = setTimeout(function () {
                        self._sockHandleSend();
                    }, 20);
                }

                this.connector.send();

                if (this.ping == 0) {
                    this.ping = Date.now();
                }
            }
            return true;
        }
    }, {
        key: "processSpeak",
        value: function processSpeak(message) {
            var self = this;
            var task = function task(cellet, primitiveJson) {
                if (null != message) {
                    // 发送应答
                    self.sendSpeakAck(cellet, primitiveJson);
                    self.listener.onListened(this, protocol.target, protocol.primitive);
                } else {
                    // TODO 错误处理
                }
            };

            var protocol = __WEBPACK_IMPORTED_MODULE_3__Protocol__["a" /* Protocol */].deserializeSpeak(message);
            if (protocol.target != null && protocol.primitive != null) {
                if (this.state === __WEBPACK_IMPORTED_MODULE_12__entity_SpeakState__["a" /* SpeakState */].Disconnected) {
                    // 已经有失败的请求，则不再记录成功的请求
                    return;
                }
                // 记录 pong
                if (this.pong == 0) {
                    this.pong = Date.now();
                    if (this.ping > 0) {
                        this.pingPong = this.pong - this.ping;
                    }
                }

                if (undefined !== protocol.primitive) {
                    task(protocol.target, protocol.primitive);
                } else if (undefined !== protocol.primitives) {
                    // 解析数据
                    for (var i = 0, size = protocol.packet.primitives.length; i < size; ++i) {
                        var item = protocol.packet.primitives[i];
                        task(item.target, item.primitive);
                    }
                }
            }
        }
    }, {
        key: "processBatchSpeak",
        value: function processBatchSpeak(message) {
            var self = this;
            var task = function task(cellet, primitiveJson) {
                if (null != message) {
                    // 发送应答
                    self.listener.onListened(this, protocol.target, protocol.primitive);
                } else {
                    // TODO 错误处理
                }
            };

            var protocol = __WEBPACK_IMPORTED_MODULE_3__Protocol__["a" /* Protocol */].deserializeSpeak(message);
            if (protocol.target != null && protocol.primitive != null) {
                if (this.state === __WEBPACK_IMPORTED_MODULE_12__entity_SpeakState__["a" /* SpeakState */].Disconnected) {
                    // 已经有失败的请求，则不再记录成功的请求
                    return;
                }
                // 记录 pong
                if (this.pong == 0) {
                    this.pong = Date.now();
                    if (this.ping > 0) {
                        this.pingPong = this.pong - this.ping;
                    }
                }

                if (undefined !== protocol.primitive) {
                    task(protocol.target, protocol.primitive);
                } else if (undefined !== protocol.primitives) {
                    // 解析数据
                    for (var i = 0, size = protocol.packet.primitives.length; i < size; ++i) {
                        var item = protocol.packet.primitives[i];
                        task(item.target, item.primitive);
                    }
                }
            }
        }
    }, {
        key: "processSpeakAck",
        value: function processSpeakAck(session, message) {
            var protocol = __WEBPACK_IMPORTED_MODULE_3__Protocol__["a" /* Protocol */].deserializeSpeakAck(message);
            var primitive = null;
            // 从 SpokeList 中移除
            var pc = this.spokeList.get(session.getId());
            if (null != pc) {
                primitive = pc.removePrimitive(protocol.target, protocol.sn);
            }
            this.listener.onSpeakAck(this, protocol.target, primitive);
        }
    }, {
        key: "processHeartHeat",
        value: function processHeartHeat(session, data) {
            this.hm.processHeartbeat(session, data, Date.now());
        }
    }, {
        key: "processHeartHeatAck",
        value: function processHeartHeatAck(session, data) {
            this.hm.processHeartbeatAck(session, data);
        }
    }, {
        key: "destroySocketEvent",
        value: function destroySocketEvent() {
            if (null != this.connector) {
                this.connector.destroyChannelEvent();
            }
        }
    }, {
        key: "hangUp",
        value: function hangUp() {
            // TODO 发送 hang up 到服务器

            if (this.sockTimer > 0) {
                clearTimeout(this.sockTimer);
                this.sockTimer = 0;
            }

            if (null != this.connector) {
                try {
                    this.connector.close(1000, "Speaker#close");
                } catch (e) {
                    __WEBPACK_IMPORTED_MODULE_9__utils_Logger__["a" /* Logger */].e("Speaker", "Close socket has exception.");
                }
                this.connector = null;
                this.sockSendQueue = [];
            }

            this.state = __WEBPACK_IMPORTED_MODULE_12__entity_SpeakState__["a" /* SpeakState */].Disconnected;
            this.tag = null;
            this.hbSendTime = 0;
            this.hbReceiveTime = 0;

            __WEBPACK_IMPORTED_MODULE_9__utils_Logger__["a" /* Logger */].d("Speaker", "Hang up call.");
        }
    }, {
        key: "errorOccurred",
        value: function errorOccurred(errorCode, session) {
            if (__WEBPACK_IMPORTED_MODULE_9__utils_Logger__["a" /* Logger */].isDebugLevel()) {
                __WEBPACK_IMPORTED_MODULE_9__utils_Logger__["a" /* Logger */].d('speack', "Error: " + errorCode);
            }
            var fault = __WEBPACK_IMPORTED_MODULE_7__TalkError__["a" /* TalkError */].transformError(errorCode);
            this.listener.onFailed(this, fault);
        }
    }, {
        key: "_fireDialogue",
        value: function _fireDialogue(cellet, primitive) {
            this.listener.onListened(this, cellet, primitive);
        }
    }, {
        key: "_fireQuitted",
        value: function _fireQuitted(cellet) {
            this.listener.onQuitted(this, cellet);
        }
    }, {
        key: "_fireFailed",
        value: function _fireFailed(handler, code) {
            var failure = null;
            if (code == __WEBPACK_IMPORTED_MODULE_7__TalkError__["a" /* TalkError */].NetworkError) {
                if (this.state === __WEBPACK_IMPORTED_MODULE_12__entity_SpeakState__["a" /* SpeakState */].CALLING) {
                    failure = new __WEBPACK_IMPORTED_MODULE_4__listener_TalkServiceFailure__["a" /* TalkServiceFailure */](__WEBPACK_IMPORTED_MODULE_7__TalkError__["a" /* TalkError */].CALL_FAILED, "Speaker");
                    failure.setSourceDescription("Attempt to connect to host timed out");
                } else {
                    failure = new __WEBPACK_IMPORTED_MODULE_4__listener_TalkServiceFailure__["a" /* TalkServiceFailure */](__WEBPACK_IMPORTED_MODULE_7__TalkError__["a" /* TalkError */].TALK_LOST, "Speaker");
                    failure.setSourceDescription("Attempt to connect to host timed out");
                }

                // 更新状态
                this.state = __WEBPACK_IMPORTED_MODULE_12__entity_SpeakState__["a" /* SpeakState */].Disconnected;
            } else if (code == HttpErrorCode.STATUS_ERROR) {
                if (this.state === __WEBPACK_IMPORTED_MODULE_12__entity_SpeakState__["a" /* SpeakState */].Connecting) {
                    failure = new __WEBPACK_IMPORTED_MODULE_4__listener_TalkServiceFailure__["a" /* TalkServiceFailure */](__WEBPACK_IMPORTED_MODULE_7__TalkError__["a" /* TalkError */].CALL_FAILED, "Speaker");
                    failure.setSourceDescription("Http status error");
                } else {
                    failure = new __WEBPACK_IMPORTED_MODULE_4__listener_TalkServiceFailure__["a" /* TalkServiceFailure */](__WEBPACK_IMPORTED_MODULE_7__TalkError__["a" /* TalkError */].TALK_LOST, "Speaker");
                    failure.setSourceDescription("Http status error");
                }

                // 更新状态
                this.state = __WEBPACK_IMPORTED_MODULE_12__entity_SpeakState__["a" /* SpeakState */].Disconnected;
            } else {
                failure = new __WEBPACK_IMPORTED_MODULE_4__listener_TalkServiceFailure__["a" /* TalkServiceFailure */](__WEBPACK_IMPORTED_MODULE_7__TalkError__["a" /* TalkError */].UNKNOWN, "Speaker");
                failure.setSourceDescription("Unknown");

                // 更新状态
                this.state = __WEBPACK_IMPORTED_MODULE_12__entity_SpeakState__["a" /* SpeakState */].Disconnected;
            }

            // 设置 cellet identifier
            failure.setSourceCelletIdentifiers(this.cellets);

            this.listener.onFailed(this, failure);
        }
    }]);

    return Speaker;
}();;

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerDelegate; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Cell Cloud.

Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
-----------------------------------------------------------------------------
*/

/**
 * Speaker 事件委派。
 *
 * @author Jiangwei Xu
 */
var SpeakerDelegate = function () {
    function SpeakerDelegate() {
        _classCallCheck(this, SpeakerDelegate);
    }

    _createClass(SpeakerDelegate, [{
        key: "onDialogue",
        value: function onDialogue(speaker, cellet, primitive) {
            // Nothing
        }
    }, {
        key: "onContacted",
        value: function onContacted(speaker, cellet) {
            // Nothing
        }
    }, {
        key: "onQuitted",
        value: function onQuitted(speaker, cellet) {
            // Nothing
        }
    }, {
        key: "onFailed",
        value: function onFailed(speaker, failure) {
            // Nothing
        }
    }]);

    return SpeakerDelegate;
}();;

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TalkService; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/

var TalkService = function () {
    function TalkService() {
        _classCallCheck(this, TalkService);
    }

    /**
     * 在指定端口绑定服务器。
     *
     * @param port
     * @return
     */


    _createClass(TalkService, [{
        key: "startServer",
        value: function startServer(port) {}
    }]);

    return TalkService;
}();

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TalkService__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DelegateProxy__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Speaker__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialect_ActionDialectFactory__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialect_DialectEnumerator__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_Logger__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entity_SpeakState__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TalkServiceKernel; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/








/**
 * Talk 服务实现。
 *
 * @author Jiangwei Xu
 */
var TalkServiceKernel = function (_TalkService) {
    _inherits(TalkServiceKernel, _TalkService);

    function TalkServiceKernel(tag, config) {
        _classCallCheck(this, TalkServiceKernel);

        // 内核标签
        var _this = _possibleConstructorReturn(this, (TalkServiceKernel.__proto__ || Object.getPrototypeOf(TalkServiceKernel)).call(this));

        _this.tag = tag;
        // 内核配置
        _this.config = config;

        _this.daemonTimer = 0;
        _this.recallTimer = 0;

        // 地址及端口对应的 Speaker
        _this.speakers = new Array();
        // 请求的 Cellet 对应的 Speaker
        _this.speakerMap = new HashMap();
        // Cellet 对应的 Talk 监听器
        _this.listeners = new Array();

        _this.delegateProxy = new __WEBPACK_IMPORTED_MODULE_1__DelegateProxy__["a" /* DelegateProxy */](_this);

        // 默认 10 秒一次 tick
        _this.tickTime = 10000;
        return _this;
    }

    _createClass(TalkServiceKernel, [{
        key: "startup",
        value: function startup() {
            // 添加方言工厂
            var adf = new __WEBPACK_IMPORTED_MODULE_3__dialect_ActionDialectFactory__["a" /* ActionDialectFactory */]();
            __WEBPACK_IMPORTED_MODULE_4__dialect_DialectEnumerator__["a" /* DialectEnumerator */].getInstance().addFactory(adf);

            // 启动定时任务
            __WEBPACK_IMPORTED_MODULE_5__utils_Logger__["a" /* Logger */].i("TalkService", "Tick period is " + this.tickTime + " ms");
            this._tickFunction();

            return true;
        }
    }, {
        key: "shutdown",
        value: function shutdown() {
            if (this.daemonTimer > 0) {
                clearTimeout(this.daemonTimer);
                this.daemonTimer = 0;
            }

            if (this.recallTimer > 0) {
                clearTimeout(this.recallTimer);
                this.recallTimer = 0;
            }
        }
    }, {
        key: "addListener",
        value: function addListener(listener) {
            var index = this.listeners.indexOf(listener);
            if (index >= 0) return;

            this.listeners.push(listener);
        }
    }, {
        key: "removeListener",
        value: function removeListener(listener) {
            var index = this.listeners.indexOf(listener);
            if (index >= 0) {
                this.listeners.splice(index, 1);
            }
        }
    }, {
        key: "hasListener",
        value: function hasListener(listener) {
            return this.listeners.indexOf(listener) >= 0;
        }
    }, {
        key: "isWebSocketSupported",
        value: function isWebSocketSupported() {
            return undefined !== window.WebSocket;
        }

        /** 重置心跳周期。
         */

    }, {
        key: "resetHeartbeat",
        value: function resetHeartbeat(cellet, heartbeat) {
            if (heartbeat < 2000) {
                __WEBPACK_IMPORTED_MODULE_5__utils_Logger__["a" /* Logger */].w("TalkService", "Reset '" + cellet + "' heartbeat Failed.");
                return false;
            }
            if (this.isWebSocketSupported() && heartbeat < 10000) {
                __WEBPACK_IMPORTED_MODULE_5__utils_Logger__["a" /* Logger */].w("TalkService", "Reset '" + cellet + "' heartbeat Failed.");
                return false;
            }

            // 如果心跳小于 5 秒，则缩短 tick 间隔
            if (heartbeat <= 5000) {
                this.tickTime = 5000;
            } else {
                this.tickTime = 10000;
            }

            clearTimeout(this.daemonTimer);
            this.daemonTimer = 0;

            // 重置 Speaker 心跳
            var speaker = this.speakerMap.get(cellet);
            if (null != speaker) {
                speaker.heartbeat = heartbeat;
            } else {
                __WEBPACK_IMPORTED_MODULE_5__utils_Logger__["a" /* Logger */].e("TalkService", "Reset '" + cellet + "' heartbeat Failed. Retrying after 5 seconds ...");
                var self = this;
                setTimeout(function () {
                    var speaker = self.speakerMap.get(cellet);
                    if (null != speaker) {
                        speaker.heartbeat = heartbeat;
                    }
                }, 5000);
            }

            __WEBPACK_IMPORTED_MODULE_5__utils_Logger__["a" /* Logger */].i("TalkService", "Reset '" + cellet + "' heartbeat period is " + heartbeat + " ms");

            // 启动执行
            this._tickFunction();

            return true;
        }
    }, {
        key: "call",
        value: function call(cellets, address, socketEnabled) {
            for (var j = 0; j < this.speakers.length; j++) {
                if (this.speakers[j].tag == this.tag) {
                    if (this.speakers[j].state == __WEBPACK_IMPORTED_MODULE_6__entity_SpeakState__["a" /* SpeakState */].Connected || this.speakers[j].state == __WEBPACK_IMPORTED_MODULE_6__entity_SpeakState__["a" /* SpeakState */].Connecting) {
                        return;
                    }
                }
            }
            // 创建新的 Speaker
            var speaker = new __WEBPACK_IMPORTED_MODULE_2__Speaker__["a" /* Speaker */](this.tag, address, this.delegateProxy);
            this.speakers.push(speaker);

            for (var i = 0; i < cellets.length; ++i) {
                var cellet = cellets[i];
                // if (this.speakerMap.containsKey(cellet)) {
                //     return false;
                // }
                this.speakerMap.put(cellet, speaker);
            }

            if (!socketEnabled) {
                this.resetHeartbeat(cellets[0], 5000);
            }

            return speaker.start(cellets);
        }
    }, {
        key: "tryRecall",
        value: function tryRecall() {
            if (this.speakers.length == 0) {
                return false;
            }

            // 判断socket连接是否真正的关闭了, 如果未真正关闭, 无须重连
            var relist = [];
            for (var i = 0; i < this.speakers.length; ++i) {
                var speaker = this.speakers[i];
                if (speaker.state != __WEBPACK_IMPORTED_MODULE_6__entity_SpeakState__["a" /* SpeakState */].Disconnected) {
                    continue;
                }

                relist.push(speaker);
            }

            if (relist.length == 0) {
                return false;
            }

            if (this.recallTimer > 0) {
                clearTimeout(this.recallTimer);
                this.recallTimer = 0;
            }

            var self = this;
            this.recallTimer = setTimeout(function () {
                clearTimeout(self.recallTimer);
                self.recallTimer = 0;

                if (relist.length == self.speakers.length) {
                    window.nucleus._resetTag();
                }

                for (var i = 0; i < relist.length; ++i) {
                    var speaker = relist[i];
                    if (speaker.state != __WEBPACK_IMPORTED_MODULE_6__entity_SpeakState__["a" /* SpeakState */].Connected) {
                        // call without ids
                        speaker.start(null);
                    }
                }
            }, 5000);

            return true;
        }
    }, {
        key: "recall",
        value: function recall() {
            if (this.speakers.length == 0) {
                return false;
            }

            if (this.recallTimer > 0) {
                clearTimeout(this.recallTimer);
                this.recallTimer = 0;
            }

            for (var i = 0; i < this.speakers.length; ++i) {
                var speaker = this.speakers[i];
                if (speaker.state != __WEBPACK_IMPORTED_MODULE_6__entity_SpeakState__["a" /* SpeakState */].Connected) {
                    // hang up old speaker
                    speaker.destroySocketEvent();
                    speaker.hangUp();
                }
            }

            var self = this;
            this.recallTimer = setTimeout(function () {
                clearTimeout(self.recallTimer);
                self.recallTimer = 0;

                window.nucleus._resetTag();

                for (var i = 0; i < self.speakers.length; ++i) {
                    var speaker = self.speakers[i];
                    if (speaker.state != __WEBPACK_IMPORTED_MODULE_6__entity_SpeakState__["a" /* SpeakState */].Connected) {
                        // call without ids
                        speaker.tag = UUID.v4().toString();
                        speaker.start(null);
                    }
                }
            }, 5000);

            return true;
        }
    }, {
        key: "hangUp",
        value: function hangUp(cell, force) {
            var speaker = this.speakerMap.get(cell);
            if (null != speaker && speaker.cells) {
                for (var i = 0, size = speaker.cells.length; i < size; ++i) {
                    var id = speaker.cells[i];
                    this.speakerMap.remove(id);
                }

                if (force) {
                    speaker.destroySocketEvent();
                }
                // 执行 hang up
                speaker.hangUp();

                var index = -1;
                if ((index = this.speakers.indexOf(speaker)) >= 0) {
                    this.speakers.splice(index, 1);
                }
            }
        }
    }, {
        key: "talk",
        value: function talk(cellet, mix) {
            var speaker = this.speakerMap.get(cellet);
            if (null != speaker) {
                if (undefined !== mix.translate) {
                    // 方言转原语
                    var primitive = mix.translate();
                    if (null != mix) {
                        return speaker.speak(cellet, primitive);
                    } else {
                        __WEBPACK_IMPORTED_MODULE_5__utils_Logger__["a" /* Logger */].e("TalkService", "Failed translates dialect to primitive.");
                        return false;
                    }
                } else {
                    // 直接操作原语
                    return speaker.speak(cellet, mix);
                }
            } else {
                __WEBPACK_IMPORTED_MODULE_5__utils_Logger__["a" /* Logger */].w("TalkService", "Can not find '" + cellet + "' cellet in speaker.");
            }

            return false;
        }
    }, {
        key: "getTalkState",
        value: function getTalkState(cellet) {
            var speaker = this.speakerMap.get(cellet);
            if (null != speaker) {
                return speaker.state;
            }

            return __WEBPACK_IMPORTED_MODULE_6__entity_SpeakState__["a" /* SpeakState */].Disconnected;
        }
    }, {
        key: "isCalled",
        value: function isCalled(cellet, timeout) {
            var speaker = this.speakerMap.get(cellet);
            if (null != speaker) {
                return speaker.state == __WEBPACK_IMPORTED_MODULE_6__entity_SpeakState__["a" /* SpeakState */].Connected;
            }

            return false;
        }
    }, {
        key: "getPingPongTime",
        value: function getPingPongTime(cellet) {
            var speaker = this.speakerMap.get(cellet);
            if (null != speaker) {
                return speaker.pingPong;
            }
            return -1;
        }
    }, {
        key: "_tickFunction",
        value: function _tickFunction() {
            var self = this;

            if (self.daemonTimer > 0) {
                clearTimeout(self.daemonTimer);
            }

            self.daemonTimer = setTimeout(function () {
                clearTimeout(self.daemonTimer);
                self.daemonTimer = 0;

                // 执行任务
                self._exeDaemonTask();

                // 循环执行
                self._tickFunction();
            }, self.tickTime);
        }
    }, {
        key: "_exeDaemonTask",
        value: function _exeDaemonTask() {
            // 驱动 Speaker 进行心跳
            if (this.speakers.length > 0) {
                for (var i = 0; i < this.speakers.length; ++i) {
                    // this.speakers[i].tick();
                }
            }
        }
    }, {
        key: "isWebSocketSupported",
        value: function isWebSocketSupported() {
            return undefined !== window.WebSocket;
        }
    }]);

    return TalkServiceKernel;
}(__WEBPACK_IMPORTED_MODULE_0__TalkService__["a" /* TalkService */]);;

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DialectFactory__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DialectMetaData__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ActionDialect__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionDialectFactory; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
-----------------------------------------------------------------------------
This source file is part of Cell Cloud.

Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
-----------------------------------------------------------------------------
*/
/**
 * 动作方言工厂。
 *
 * @author Jiangwei Xu
 */




var ActionDialectFactory = function (_DialectFactory) {
    _inherits(ActionDialectFactory, _DialectFactory);

    function ActionDialectFactory() {
        _classCallCheck(this, ActionDialectFactory);

        // DialectFactory.prototype.ctor.call(this);
        var _this = _possibleConstructorReturn(this, (ActionDialectFactory.__proto__ || Object.getPrototypeOf(ActionDialectFactory)).call(this));

        _this.metaData = new __WEBPACK_IMPORTED_MODULE_1__DialectMetaData__["a" /* DialectMetaData */](__WEBPACK_IMPORTED_MODULE_2__ActionDialect__["a" /* ActionDialect */].DIALECT_NAME, "Action Dialect");
        return _this;
    }

    _createClass(ActionDialectFactory, [{
        key: "getMetaData",
        value: function getMetaData() {
            return this.metaData;
        }
    }, {
        key: "create",
        value: function create(tracker) {
            return new __WEBPACK_IMPORTED_MODULE_2__ActionDialect__["a" /* ActionDialect */](tracker);
        }
    }]);

    return ActionDialectFactory;
}(__WEBPACK_IMPORTED_MODULE_0__DialectFactory__["a" /* DialectFactory */]);;

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_HashMap__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialectEnumerator; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Cell Cloud.

Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
-----------------------------------------------------------------------------
*/
/**
 * 方言枚举器。
 *
 * @author Jiangwei Xu
 */


var DialectEnumerator = function () {
    function DialectEnumerator() {
        _classCallCheck(this, DialectEnumerator);

        this.factories = new __WEBPACK_IMPORTED_MODULE_0__utils_HashMap__["a" /* HashMap */]();
    }

    _createClass(DialectEnumerator, [{
        key: "createDialect",
        value: function createDialect(name, tracker) {
            var fact = this.factories.get(name);
            if (null != fact) {
                return fact.create(tracker);
            }
            return null;
        }
    }, {
        key: "addFactory",
        value: function addFactory(fact) {
            this.factories.put(fact.getMetaData().name, fact);
        }
    }, {
        key: "removeFactory",
        value: function removeFactory(fact) {
            this.factories.remove(fact.getMetaData().name);
        }
    }, {
        key: "getFactory",
        value: function getFactory(name) {
            return this.factories.get(name);
        }
    }], [{
        key: "getInstance",
        value: function getInstance() {
            return DialectEnumerator.instance;
        }
    }]);

    return DialectEnumerator;
}();;
DialectEnumerator.instance = new DialectEnumerator();

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialectFactory; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Cell Cloud.

Copyright (c) 2009-2014 Cell Cloud Team (www.cellcloud.net)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
-----------------------------------------------------------------------------
*/

/**
 * 方言工厂。
 *
 * @author Jiangwei Xu
 */
var DialectFactory = function () {
    function DialectFactory() {
        _classCallCheck(this, DialectFactory);
    }

    _createClass(DialectFactory, [{
        key: "getMetaData",
        value: function getMetaData() {
            return null;
        }
    }, {
        key: "create",
        value: function create(tracker) {
            return null;
        }
    }]);

    return DialectFactory;
}();;

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialectMetaData; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 方言元数据。
 *
 * @author Jiangwei Xu
 */
var DialectMetaData = function DialectMetaData(name, description) {
    _classCallCheck(this, DialectMetaData);

    this.name = name;
    this.description = description;
};;

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrimitiveCapsule; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
-----------------------------------------------------------------------------
This source file is part of Genie.

Copyright (c) 2017 Genie Team.
-----------------------------------------------------------------------------
*/

var PrimitiveCapsule = function () {
    function PrimitiveCapsule(session) {
        _classCallCheck(this, PrimitiveCapsule);

        this.session = session;
        this.data = new HashMap();
    }

    /**
     * 添加待管理原语。
     *
     * @param cellet
     * @param primitive
     */


    _createClass(PrimitiveCapsule, [{
        key: "addPrimitive",
        value: function addPrimitive(cellet, primitive) {
            var lists = this.data.get(cellet);
            if (null == lists) {
                return this.data.put(cellet, [primitive]);
            }
            this.data.put(cellet, lists.concat(primitive));
        }

        /**
         * 移除原语。
         *
         * @param cellet
         * @param primitive
         */

    }, {
        key: "removePrimitive",
        value: function removePrimitive(cellet, primitive) {
            var result = null;
            var lists = this.data.get(cellet);
            if (null != lists) {
                for (var i = 0; i < lists.length; i++) {
                    if (Array.isArray(primitive)) {
                        var sn = primitive;
                        if (lists[i].sn[0] == sn[0] && lists[i].sn[1] == sn[1] && lists[i].sn[2] == sn[2] && lists[i].sn[3] == sn[3]) {
                            result = lists[i];
                            lists.splice(i, 1);
                            this.data.put(cellet, lists);
                            break;
                        }
                    } else {
                        if (lists[i].primitive === primitive) {
                            lists.splice(i, 1);
                            result.data.put(cellet, lists);
                        }
                    }
                }
            }

            return result;
        }
    }, {
        key: "getPrimitiveNum",
        value: function getPrimitiveNum() {}
    }, {
        key: "clean",
        value: function clean() {}
    }]);

    return PrimitiveCapsule;
}();;

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogLevel; });
/*
 * Boot.js
 * Genie
 *
 * Copyright (c) 2015-2017 Cube Team. All rights reserved.
 */

var LogLevel = {
  /**
   * Debug 等级。
   */
  DEBUG: 1,

  /**
   * Info 等级。
   */
  INFO: 2,

  /**
   * Warning 等级。
   */
  WARNING: 3,

  /**
   * Error 等级。
   */
  ERROR: 4

};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}

revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function placeHoldersCount(b64) {
    var len = b64.length;
    if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4');
    }

    // the number of equal signs (place holders)
    // if there are two placeholders, than the two characters before it
    // represent one byte
    // if there is only one, then the three characters before it represent 2 bytes
    // this is just a cheap hack to not do indexOf twice
    return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
}

function byteLength(b64) {
    // base64 is 4/3 + up to two characters of the original data
    return b64.length * 3 / 4 - placeHoldersCount(b64);
}

function toByteArray(b64) {
    var i, j, l, tmp, placeHolders, arr;
    var len = b64.length;
    placeHolders = placeHoldersCount(b64);

    arr = new Arr(len * 3 / 4 - placeHolders);

    // if there are placeholders, only get up to the last complete 4 chars
    l = placeHolders > 0 ? len - 4 : len;

    var L = 0;

    for (i = 0, j = 0; i < l; i += 4, j += 3) {
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[L++] = tmp >> 16 & 0xFF;
        arr[L++] = tmp >> 8 & 0xFF;
        arr[L++] = tmp & 0xFF;
    }

    if (placeHolders === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[L++] = tmp & 0xFF;
    } else if (placeHolders === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[L++] = tmp >> 8 & 0xFF;
        arr[L++] = tmp & 0xFF;
    }

    return arr;
}

function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for (var i = start; i < end; i += 3) {
        tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}

function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
    var output = '';
    var parts = [];
    var maxChunkLength = 16383; // must be multiple of 3

    // go through the array every three bytes, we'll deal with trailing stuff later
    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    }

    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        output += lookup[tmp >> 2];
        output += lookup[tmp << 4 & 0x3F];
        output += '==';
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        output += lookup[tmp >> 10];
        output += lookup[tmp >> 4 & 0x3F];
        output += lookup[tmp << 2 & 0x3F];
        output += '=';
    }

    parts.push(output);

    return parts.join('');
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(46);
var ieee754 = __webpack_require__(48);
var isArray = __webpack_require__(49);

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength();

function typedArraySupport() {
    try {
        var arr = new Uint8Array(1);
        arr.__proto__ = {
            __proto__: Uint8Array.prototype, foo: function foo() {
                return 42;
            }
        };
        return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
    } catch (e) {
        return false;
    }
}

function kMaxLength() {
    return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
    if (kMaxLength() < length) {
        throw new RangeError('Invalid typed array length');
    }
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = new Uint8Array(length);
        that.__proto__ = Buffer.prototype;
    } else {
        // Fallback: Return an object instance of the Buffer class
        if (that === null) {
            that = new Buffer(length);
        }
        that.length = length;
    }

    return that;
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer(arg, encodingOrOffset, length) {
    if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
        return new Buffer(arg, encodingOrOffset, length);
    }

    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') {
            throw new Error('If encoding is specified then the first argument must be a string');
        }
        return allocUnsafe(this, arg);
    }
    return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
    arr.__proto__ = Buffer.prototype;
    return arr;
};

function from(that, value, encodingOrOffset, length) {
    if (typeof value === 'number') {
        throw new TypeError('"value" argument must not be a number');
    }

    if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
        return fromArrayBuffer(that, value, encodingOrOffset, length);
    }

    if (typeof value === 'string') {
        return fromString(that, value, encodingOrOffset);
    }

    return fromObject(that, value);
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
    return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
    Buffer.prototype.__proto__ = Uint8Array.prototype;
    Buffer.__proto__ = Uint8Array;
    if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
        // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
        Object.defineProperty(Buffer, Symbol.species, {
            value: null,
            configurable: true
        });
    }
}

function assertSize(size) {
    if (typeof size !== 'number') {
        throw new TypeError('"size" argument must be a number');
    } else if (size < 0) {
        throw new RangeError('"size" argument must not be negative');
    }
}

function alloc(that, size, fill, encoding) {
    assertSize(size);
    if (size <= 0) {
        return createBuffer(that, size);
    }
    if (fill !== undefined) {
        // Only pay attention to encoding if it's a string. This
        // prevents accidentally sending in a number that would
        // be interpretted as a start offset.
        return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
    }
    return createBuffer(that, size);
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
    return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
    assertSize(size);
    that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
        for (var i = 0; i < size; ++i) {
            that[i] = 0;
        }
    }
    return that;
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
    return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
    return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') {
        encoding = 'utf8';
    }

    if (!Buffer.isEncoding(encoding)) {
        throw new TypeError('"encoding" must be a valid string encoding');
    }

    var length = byteLength(string, encoding) | 0;
    that = createBuffer(that, length);

    var actual = that.write(string, encoding);

    if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        that = that.slice(0, actual);
    }

    return that;
}

function fromArrayLike(that, array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    that = createBuffer(that, length);
    for (var i = 0; i < length; i += 1) {
        that[i] = array[i] & 255;
    }
    return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
    array.byteLength; // this throws if `array` is not a valid ArrayBuffer

    if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('\'offset\' is out of bounds');
    }

    if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('\'length\' is out of bounds');
    }

    if (byteOffset === undefined && length === undefined) {
        array = new Uint8Array(array);
    } else if (length === undefined) {
        array = new Uint8Array(array, byteOffset);
    } else {
        array = new Uint8Array(array, byteOffset, length);
    }

    if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = array;
        that.__proto__ = Buffer.prototype;
    } else {
        // Fallback: Return an object instance of the Buffer class
        that = fromArrayLike(that, array);
    }
    return that;
}

function fromObject(that, obj) {
    if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        that = createBuffer(that, len);

        if (that.length === 0) {
            return that;
        }

        obj.copy(that, 0, 0, len);
        return that;
    }

    if (obj) {
        if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
            if (typeof obj.length !== 'number' || isnan(obj.length)) {
                return createBuffer(that, 0);
            }
            return fromArrayLike(that, obj);
        }

        if (obj.type === 'Buffer' && isArray(obj.data)) {
            return fromArrayLike(that, obj.data);
        }
    }

    throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
    // Note: cannot use `length < kMaxLength()` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= kMaxLength()) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
    }
    return length | 0;
}

function SlowBuffer(length) {
    if (+length != length) {
        // eslint-disable-line eqeqeq
        length = 0;
    }
    return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
    return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        throw new TypeError('Arguments must be Buffers');
    }

    if (a === b) return 0;

    var x = a.length;
    var y = b.length;

    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
            x = a[i];
            y = b[i];
            break;
        }
    }

    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};

Buffer.concat = function concat(list, length) {
    if (!isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
    }

    if (list.length === 0) {
        return Buffer.alloc(0);
    }

    var i;
    if (length === undefined) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
            length += list[i].length;
        }
    }

    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!Buffer.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
        }
        buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};

function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) {
        return string.length;
    }
    if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
        return string.byteLength;
    }
    if (typeof string !== 'string') {
        string = '' + string;
    }

    var len = string.length;
    if (len === 0) return 0;

    // Use a for loop to avoid recursion
    var loweredCase = false;
    for (;;) {
        switch (encoding) {
            case 'ascii':
            case 'latin1':
            case 'binary':
                return len;
            case 'utf8':
            case 'utf-8':
            case undefined:
                return utf8ToBytes(string).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return len * 2;
            case 'hex':
                return len >>> 1;
            case 'base64':
                return base64ToBytes(string).length;
            default:
                if (loweredCase) return utf8ToBytes(string).length; // assume utf8
                encoding = ('' + encoding).toLowerCase();
                loweredCase = true;
        }
    }
}

Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
    var loweredCase = false;

    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.

    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) {
        start = 0;
    }
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) {
        return '';
    }

    if (end === undefined || end > this.length) {
        end = this.length;
    }

    if (end <= 0) {
        return '';
    }

    // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;

    if (end <= start) {
        return '';
    }

    if (!encoding) encoding = 'utf8';

    while (true) {
        switch (encoding) {
            case 'hex':
                return hexSlice(this, start, end);

            case 'utf8':
            case 'utf-8':
                return utf8Slice(this, start, end);

            case 'ascii':
                return asciiSlice(this, start, end);

            case 'latin1':
            case 'binary':
                return latin1Slice(this, start, end);

            case 'base64':
                return base64Slice(this, start, end);

            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return utf16leSlice(this, start, end);

            default:
                if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                encoding = (encoding + '').toLowerCase();
                loweredCase = true;
        }
    }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits');
    }
    for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
    }
    return this;
};

Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits');
    }
    for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};

Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits');
    }
    for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};

Buffer.prototype.toString = function toString() {
    var length = this.length | 0;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    if (this.length > 0) {
        str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
        if (this.length > max) str += ' ... ';
    }
    return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (!Buffer.isBuffer(target)) {
        throw new TypeError('Argument must be a Buffer');
    }

    if (start === undefined) {
        start = 0;
    }
    if (end === undefined) {
        end = target ? target.length : 0;
    }
    if (thisStart === undefined) {
        thisStart = 0;
    }
    if (thisEnd === undefined) {
        thisEnd = this.length;
    }

    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError('out of range index');
    }

    if (thisStart >= thisEnd && start >= end) {
        return 0;
    }
    if (thisStart >= thisEnd) {
        return -1;
    }
    if (start >= end) {
        return 1;
    }

    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;

    if (this === target) return 0;

    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);

    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);

    for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i];
            y = targetCopy[i];
            break;
        }
    }

    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;

    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff;
    } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000;
    }
    byteOffset = +byteOffset; // Coerce to Number.
    if (isNaN(byteOffset)) {
        // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
        byteOffset = dir ? 0 : buffer.length - 1;
    }

    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;else return -1;
    }

    // Normalize val
    if (typeof val === 'string') {
        val = Buffer.from(val, encoding);
    }

    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) {
            return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 0xFF; // Search for a byte value [0-255]
        if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) {
                return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            } else {
                return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
            }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
    }

    throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;

    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) {
                return -1;
            }
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }

    function read(buf, i) {
        if (indexSize === 1) {
            return buf[i];
        } else {
            return buf.readUInt16BE(i * indexSize);
        }
    }

    var i;
    if (dir) {
        var foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                if (foundIndex === -1) foundIndex = i;
                if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
            } else {
                if (foundIndex !== -1) i -= i - foundIndex;
                foundIndex = -1;
            }
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
            var found = true;
            for (var j = 0; j < valLength; j++) {
                if (read(arr, i + j) !== read(val, j)) {
                    found = false;
                    break;
                }
            }
            if (found) return i;
        }
    }

    return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) {
        length = remaining;
    } else {
        length = Number(length);
        if (length > remaining) {
            length = remaining;
        }
    }

    // must be an even number of digits
    var strLen = string.length;
    if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

    if (length > strLen / 2) {
        length = strLen / 2;
    }
    for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (isNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}

function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
        // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
        // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset | 0;
        if (isFinite(length)) {
            length = length | 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
        // legacy write(string, encoding, offset, length) - remove in v0.13
    } else {
        throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    }

    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;

    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds');
    }

    if (!encoding) encoding = 'utf8';

    var loweredCase = false;
    for (;;) {
        switch (encoding) {
            case 'hex':
                return hexWrite(this, string, offset, length);

            case 'utf8':
            case 'utf-8':
                return utf8Write(this, string, offset, length);

            case 'ascii':
                return asciiWrite(this, string, offset, length);

            case 'latin1':
            case 'binary':
                return latin1Write(this, string, offset, length);

            case 'base64':
                // Warning: maxLength not taken into account in base64Write
                return base64Write(this, string, offset, length);

            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return ucs2Write(this, string, offset, length);

            default:
                if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                encoding = ('' + encoding).toLowerCase();
                loweredCase = true;
        }
    }
};

Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};

function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
    } else {
        return base64.fromByteArray(buf.slice(start, end));
    }
}

function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];

    var i = start;
    while (i < end) {
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;

            switch (bytesPerSequence) {
                case 1:
                    if (firstByte < 0x80) {
                        codePoint = firstByte;
                    }
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) {
                            codePoint = tempCodePoint;
                        }
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                            codePoint = tempCodePoint;
                        }
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                            codePoint = tempCodePoint;
                        }
                    }
            }
        }

        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }

        res.push(codePoint);
        i += bytesPerSequence;
    }

    return decodeCodePointsArray(res);
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
    }

    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while (i < len) {
        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    }
    return res;
}

function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 0x7F);
    }
    return ret;
}

function latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
    }
    return ret;
}

function hexSlice(buf, start, end) {
    var len = buf.length;

    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;

    var out = '';
    for (var i = start; i < end; ++i) {
        out += toHex(buf[i]);
    }
    return out;
}

function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    for (var i = 0; i < bytes.length; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
}

Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;

    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) {
        start = len;
    }

    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) {
        end = len;
    }

    if (end < start) end = start;

    var newBuf;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        newBuf.__proto__ = Buffer.prototype;
    } else {
        var sliceLen = end - start;
        newBuf = new Buffer(sliceLen, undefined);
        for (var i = 0; i < sliceLen; ++i) {
            newBuf[i] = this[i + start];
        }
    }

    return newBuf;
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
    }

    return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
        checkOffset(offset, byteLength, this.length);
    }

    var val = this[offset + --byteLength];
    var mul = 1;
    while (byteLength > 0 && (mul *= 0x100)) {
        val += this[offset + --byteLength] * mul;
    }

    return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
    }
    mul *= 0x80;

    if (val >= mul) val -= Math.pow(2, 8 * byteLength);

    return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while (i > 0 && (mul *= 0x100)) {
        val += this[offset + --i] * mul;
    }
    mul *= 0x80;

    if (val >= mul) val -= Math.pow(2, 8 * byteLength);

    return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }

    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
        this[offset + i] = value / mul & 0xFF;
    }

    return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }

    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
        this[offset + i] = value / mul & 0xFF;
    }

    return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
    this[offset] = value & 0xff;
    return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffff + value + 1;
    for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
        buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
    }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
    } else {
        objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
    } else {
        objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffffffff + value + 1;
    for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
        buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
    }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 0xff;
    } else {
        objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
    } else {
        objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);

        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
            sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }

    return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);

        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
            sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }

    return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
    } else {
        objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
    } else {
        objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
    } else {
        objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (value < 0) value = 0xffffffff + value + 1;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
    } else {
        objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
    }
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
    }
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;

    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;

    // Fatal error conditions
    if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds');
    }
    if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');

    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
    }

    var len = end - start;
    var i;

    if (this === target && start < targetStart && targetStart < end) {
        // descending copy from end
        for (i = len - 1; i >= 0; --i) {
            target[i + targetStart] = this[i + start];
        }
    } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
        // ascending copy from start
        for (i = 0; i < len; ++i) {
            target[i + targetStart] = this[i + start];
        }
    } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
    }

    return len;
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (code < 256) {
                val = code;
            }
        }
        if (encoding !== undefined && typeof encoding !== 'string') {
            throw new TypeError('encoding must be a string');
        }
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
            throw new TypeError('Unknown encoding: ' + encoding);
        }
    } else if (typeof val === 'number') {
        val = val & 255;
    }

    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index');
    }

    if (end <= start) {
        return this;
    }

    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;

    if (!val) val = 0;

    var i;
    if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
            this[i] = val;
        }
    } else {
        var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
        var len = bytes.length;
        for (i = 0; i < end - start; ++i) {
            this[i + start] = bytes[i % len];
        }
    }

    return this;
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = stringtrim(str).replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while (str.length % 4 !== 0) {
        str = str + '=';
    }
    return str;
}

function stringtrim(str) {
    if (str.trim) return str.trim();
    return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
    if (n < 16) return '0' + n.toString(16);
    return n.toString(16);
}

function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];

    for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);

        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }

                // valid lead
                leadSurrogate = codePoint;

                continue;
            }

            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }

            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) {
            // valid bmp char, but last char was a lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }

        leadSurrogate = null;

        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else {
            throw new Error('Invalid code point');
        }
    }

    return bytes;
}

function asciiToBytes(str) {
    var byteArray = [];
    for (var i = 0; i < str.length; ++i) {
        // Node's code seems to be doing this and not & 0x7F..
        byteArray.push(str.charCodeAt(i) & 0xFF);
    }
    return byteArray;
}

function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break;

        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }

    return byteArray;
}

function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
    for (var i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}

function isnan(val) {
    return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ }),
/* 48 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];

    i += d;

    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    if (e === 0) {
        e = 1 - eBias;
    } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

    value = Math.abs(value);

    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) {
            value += rt / c;
        } else {
            value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
            e++;
            c /= 2;
        }

        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }

    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

    e = e << mLen | m;
    eLen += mLen;
    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

    buffer[offset + i - d] |= s * 128;
};

/***/ }),
/* 49 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
    return toString.call(arr) == '[object Array]';
};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
    return this;
}();

try {
    // This works if eval is allowed (see CSP)
    g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
    // This works if the window reference is available
    if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
    if (!originalModule.webpackPolyfill) {
        var module = Object.create(originalModule);
        // module.parent = undefined by default
        if (!module.children) module.children = [];
        Object.defineProperty(module, "loaded", {
            enumerable: true,
            get: function get() {
                return module.l;
            }
        });
        Object.defineProperty(module, "id", {
            enumerable: true,
            get: function get() {
                return module.i;
            }
        });
        Object.defineProperty(module, "exports", {
            enumerable: true
        });
        module.webpackPolyfill = 1;
    }
    return module;
};

/***/ })
/******/ ]);
//# sourceMappingURL=Genie.js.map