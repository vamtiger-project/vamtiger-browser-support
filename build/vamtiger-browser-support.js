(function () {
'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator$1;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    __extends = function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator$1 = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function (m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    };

    __values = function (o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result["default"] = mod;
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator$1);
    exporter("__exportStar", __exportStar);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
});

const __assign$1 = Object.assign || function (target) {
    for (var source, i = 1; i < arguments.length; i++) {
        source = arguments[i];
        for (var prop in source) {
            if (Object.prototype.hasOwnProperty.call(source, prop)) {
                target[prop] = source[prop];
            }
        }
    }
    return target;
};

function __awaiter$1(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
}

var StringConstant;
(function (StringConstant) {
    StringConstant["nothing"] = "";
    StringConstant["build"] = "build";
    StringConstant["vamtiger"] = "vamtiger";
    StringConstant["slash"] = "/";
    StringConstant["jsExtension"] = ".js";
    StringConstant["bashAnd"] = "&&";
    StringConstant["arn"] = "arn";
    StringConstant["sns"] = "sns";
    StringConstant["aws"] = "aws";
    StringConstant["colon"] = ":";
    StringConstant["hyphen"] = "-";
    StringConstant["vamtiger-contact"] = "vamtiger-contact";
    StringConstant["5e5164d3"] = "5e5164d3";
    StringConstant["cc71"] = "cc71";
    StringConstant["4e5b"] = "4e5b";
    StringConstant["9c34"] = "9c34";
    StringConstant["042fe735f31c"] = "042fe735f31c";
})(StringConstant || (StringConstant = {}));
var Region;
(function (Region) {
    Region["usWest2"] = "us-west-2";
})(Region || (Region = {}));
var ElmentName;
(function (ElmentName) {
    ElmentName["meta"] = "meta";
    ElmentName["script"] = "script";
})(ElmentName || (ElmentName = {}));
var ElementId;
(function (ElementId) {
    ElementId["vamtigerBrowserSupport"] = "vamtiger-browser-support";
})(ElementId || (ElementId = {}));
var ElementAttribute;
(function (ElementAttribute) {
    ElementAttribute["id"] = "id";
})(ElementAttribute || (ElementAttribute = {}));
var MetaElementAttribute;
(function (MetaElementAttribute) {
    MetaElementAttribute["baseUrl"] = "baseUrl";
    MetaElementAttribute["name"] = "name";
    MetaElementAttribute["url"] = "url";
    MetaElementAttribute["primary"] = "primary";
    MetaElementAttribute["loaded"] = "loaded";
    MetaElementAttribute["supported"] = "supported";
    MetaElementAttribute["unsupported"] = "unsupported";
    MetaElementAttribute["error"] = "error";
    MetaElementAttribute["polyfill"] = "polyfill";
    MetaElementAttribute["loadCritical"] = "loadCritical";
    MetaElementAttribute["load"] = "load";
    MetaElementAttribute["wait"] = "wait";
})(MetaElementAttribute || (MetaElementAttribute = {}));
var MetaElementBrowserSupportAttribute;
(function (MetaElementBrowserSupportAttribute) {
    MetaElementBrowserSupportAttribute["botSupport"] = "data-bot-support";
    MetaElementBrowserSupportAttribute["es2015Support"] = "data-es2015-support";
    MetaElementBrowserSupportAttribute["elementQuerySupport"] = "data-element-query-support";
    MetaElementBrowserSupportAttribute["webComponentSupport"] = "data-web-component-support";
    MetaElementBrowserSupportAttribute["fetchSupport"] = "data-fetch-support";
    MetaElementBrowserSupportAttribute["awsSupport"] = "data-aws-support";
    MetaElementBrowserSupportAttribute["contactSupport"] = "data-contact-support";
})(MetaElementBrowserSupportAttribute || (MetaElementBrowserSupportAttribute = {}));
var Selector;
(function (Selector) {
    Selector["vamtigerBrowserSupportScript"] = "script[src*=\"vamtiger-browser-support\"]";
    Selector["vamtigerBrowserMethodJsonJs"] = "[src$=\"vamtiger-browser-method.js.json.js\"]";
    Selector["vamtigerBrowserMethodJson"] = "[data-name$=\"vamtiger-browser-method.js.json\"]";
})(Selector || (Selector = {}));
var ScriptUrl;
(function (ScriptUrl) {
    ScriptUrl["vamtigerBrowserMethod"] = "https://cdn.jsdelivr.net/npm/vamtiger-browser-method@latest/build/vamtiger-browser-method.js";
    ScriptUrl["vamtigerBrowserMethodJsonJs"] = "https://cdn.jsdelivr.net/npm/vamtiger-browser-method@latest/build/vamtiger-browser-method.js.json.js";
})(ScriptUrl || (ScriptUrl = {}));
var ErrorMessage;
(function (ErrorMessage) {
    ErrorMessage["notBrowser"] = "This is not a web browser";
    ErrorMessage["noFormForSelector"] = "No Form for Selector";
    ErrorMessage["noFieldInFormForSelector"] = "No Field in Form for Selector";
})(ErrorMessage || (ErrorMessage = {}));
var NpmScript;
(function (NpmScript) {
    NpmScript["bundleSource"] = "bundle-source";
})(NpmScript || (NpmScript = {}));
var SupportType;
(function (SupportType) {
    SupportType["primary"] = "primary";
    SupportType["secondary"] = "secondary";
})(SupportType || (SupportType = {}));
var LoadOnComplete;
(function (LoadOnComplete) {
    LoadOnComplete["loadCritical"] = "loadCritical";
    LoadOnComplete["load"] = "load";
})(LoadOnComplete || (LoadOnComplete = {}));
var VamtigerFormDataSupportFormFieldValue;
(function (VamtigerFormDataSupportFormFieldValue) {
    VamtigerFormDataSupportFormFieldValue["innerHTML"] = "innerHTML";
})(VamtigerFormDataSupportFormFieldValue || (VamtigerFormDataSupportFormFieldValue = {}));
var DocumentDataAttribute;
(function (DocumentDataAttribute) {
    DocumentDataAttribute["touchSupport"] = "vamtigerTouchSupport";
})(DocumentDataAttribute || (DocumentDataAttribute = {}));
var SupportFile;
(function (SupportFile) {
    SupportFile["elementQuery"] = "vamtiger-element-query-support";
})(SupportFile || (SupportFile = {}));
var Polyfill;
(function (Polyfill) {
    Polyfill["elementQuery"] = "https://cdn.jsdelivr.net/npm/eqcss@latest/EQCSS.min.js";
})(Polyfill || (Polyfill = {}));
var supportTypes = Object.keys(SupportType);
var regex = {
    leadingData: /^data/,
    trailingSupport: /(.*?Support)(Primary)?$/,
    supportScript: /vamtiger(-\w+)+-(support|polyfill)/,
    distTag: /(\d|latest)$/,
    bot: /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i
};
var stringConstant = __assign$1({}, StringConstant, { 365080655670: 365080655670 });
var selector = {
    vamtigerBrowserMethod: "script[src=\"" + ScriptUrl.vamtigerBrowserMethod + "\"]"
};

var vamtiger = StringConstant.vamtiger, jsExtension = StringConstant.jsExtension;
var leadingData = regex.leadingData;
var supportKeys = Object.keys(MetaElementBrowserSupportAttribute);
var dependencies = [
    'https://cdn.jsdelivr.net/npm/es6-object-assign/dist/object-assign-auto.min.js'
];
var primarySupport = new Set([
    'botSupport',
    'es2015Support'
]);
var supportScript = __assign$1({}, MetaElementBrowserSupportAttribute);
var loadSupport = {
    parallel: new Set([
        SupportType.primary,
        SupportType.secondary
    ]),
    series: new Set([])
};
var supportDone = [
    MetaElementAttribute.supported,
    MetaElementAttribute.unsupported
];
var loadOnComplete = Object.keys(LoadOnComplete);
var vc = gvc();
supportKeys.forEach(function (key) { return supportScript[key] = supportScript[key].replace(leadingData, vamtiger) + jsExtension; });
function gvc() {
    var a = stringConstant.arn, b = stringConstant.aws, c = stringConstant.sns, e = stringConstant["365080655670"], f = stringConstant["vamtiger-contact"], g = stringConstant.colon, h = stringConstant["5e5164d3"], i = stringConstant.cc71, j = stringConstant["4e5b"], k = stringConstant["9c34"], l = stringConstant["042fe735f31c"], m = stringConstant.hyphen;
    var d = Region.usWest2;
    var z = [
        a,
        b,
        c,
        d,
        e,
        f
    ].join(g);
    var x = [
        d,
        [
            h,
            i,
            j,
            k,
            l
        ].join(m)
    ].join(g);
    var y = {
        z: Array.from(z),
        x: Array.from(x),
        y: Array.from(d)
    };
    return y;
}

var vamtigerBrowserSupportId = ElementId.vamtigerBrowserSupport;
function getSupportUrls (_a) {
    var supportType = _a.supportType;
    var _b = vamtigerBrowserSupportId, vamtigerBrowserSupport = window[_b];
    var urls = new Set();
    var elements = Array.from(vamtigerBrowserSupport.children);
    var data;
    elements.forEach(function (element) {
        data = element.dataset;
        if (data.hasOwnProperty(supportType)) {
            urls.add(data.url);
        }
    });
    return Array.from(urls);
}

var vamtigerBrowserSupportId$1 = ElementId.vamtigerBrowserSupport;
function loadScripts () {
    return __awaiter$1(this, void 0, void 0, function () {
        var VamtigerBrowserMethod, loadScript, _a, vamtigerBrowserSupport, scripts, supportUrls, loadScripts;
        return __generator(this, function (_b) {
            VamtigerBrowserMethod = window.VamtigerBrowserMethod;
            loadScript = VamtigerBrowserMethod.loadScript;
            _a = vamtigerBrowserSupportId$1, vamtigerBrowserSupport = window[_a];
            scripts = [];
            supportUrls = loadOnComplete
                .map(function (key) { return vamtigerBrowserSupport.dataset[key]; })
                .filter(function (url) { return url; });
            loadScripts = supportUrls.reduce(function (loadSupport$$1, src) { return loadSupport$$1
                .then(function () { return loadScript({ src: src }); })
                .then(function (script) { return scripts.push(script) && scripts; }); }, Promise.resolve(scripts));
            return [2 /*return*/, loadScripts];
        });
    });
}

var parallel = loadSupport.parallel;
var index = 0;
var done = false;
function loadSupport$1 () {
    return __awaiter$1(this, void 0, void 0, function () {
        var VamtigerBrowserMethod, loadScript, supportType, supportUrls, supportScripts, scripts;
        return __generator(this, function (_a) {
            VamtigerBrowserMethod = window.VamtigerBrowserMethod;
            loadScript = VamtigerBrowserMethod.loadScript;
            supportType = supportTypes[index];
            supportUrls = getSupportUrls({ supportType: supportType });
            supportScripts = [];
            if (parallel.has(supportType)) {
                scripts = Promise.all(supportUrls.map(function (src) { return loadScript({ src: src }); }));
                if (!supportUrls.length) {
                    loadNextSupport({ supportType: supportType });
                }
            }
            else if (supportType) {
                scripts = supportUrls.reduce(function (loadSupport$$1, src) { return loadSupport$$1
                    .then(function () { return loadScript({ src: src }); })
                    .then(function (script) { return supportScripts.push(script) && supportScripts; }); }, Promise.resolve(supportScripts));
            }
            else if (!supportType && !done) {
                done = true;
                scripts = loadScripts();
            }
            index++;
            return [2 /*return*/, scripts];
        });
    });
}

var vamtigerBrowserSupportId$2 = ElementId.vamtigerBrowserSupport;
var wait = MetaElementAttribute.wait;
function loadNextSupport (_a) {
    var supportType = _a.supportType;
    var _b = vamtigerBrowserSupportId$2, vamtigerBrowserSupport = window[_b];
    var supportTypeSelector = "meta[data-" + supportType + "]";
    var supportTypeMetaElements = Array.from(vamtigerBrowserSupport.querySelectorAll(supportTypeSelector));
    var supportTypeMetaElementsDone = supportTypeMetaElements
        .filter(function (element) { return supportDone.some(function (key) { return element.dataset.hasOwnProperty(key); }); })
        .filter(function (element) { return !element.dataset.hasOwnProperty(wait); });
    var loadNextSupport = supportTypeMetaElements && supportTypeMetaElements.length === supportTypeMetaElementsDone.length;
    if (loadNextSupport) {
        loadSupport$1().catch(console.warn);
    }
}

var vamtigerBrowserSupportId$3 = ElementId.vamtigerBrowserSupport;
var nothing = StringConstant.nothing;
var supportTypes$1 = Object.keys(SupportType);
function updateBrowserSupport(_a) {
    var supportFile = _a.supportFile, supported = _a.supported, polyfill = _a.polyfill, polyfills = _a.polyfills, polyfillChain = _a.polyfillChain, error = _a.error, wait = _a.wait;
    return __awaiter$1(this, void 0, void 0, function () {
        var _b, vamtigerBrowserSupport, VamtigerBrowserSupport, VamtigerBrowserMethod, loadScript, loadScripts, loadScriptsSequentially, selector$$1, metaElement, data, supportType;
        return __generator(this, function (_c) {
            _b = vamtigerBrowserSupportId$3, vamtigerBrowserSupport = window[_b], VamtigerBrowserSupport = window.VamtigerBrowserSupport, VamtigerBrowserMethod = window.VamtigerBrowserMethod;
            loadScript = VamtigerBrowserMethod.loadScript, loadScripts = VamtigerBrowserMethod.loadScripts, loadScriptsSequentially = VamtigerBrowserMethod.loadScriptsSequentially;
            selector$$1 = "[data-url*=" + supportFile + "]";
            metaElement = vamtigerBrowserSupport.querySelector(selector$$1);
            data = metaElement.dataset;
            supportType = supportTypes$1.find(function (supportType) { return data.hasOwnProperty(supportType); });
            if (supported) {
                data.supported = nothing;
            }
            else {
                data.unsupported = nothing;
            }
            if (wait) {
                data.wait = nothing;
            }
            else {
                delete data.wait;
            }
            if (error) {
                data.error = error;
            }
            if (polyfill) {
                data.polyfill = polyfill;
                loadScript({ src: polyfill })
                    .then(function () { return loadNextSupport({ supportType: supportType }); });
            }
            else if (polyfillChain) {
                loadScriptsSequentially(polyfillChain.map(function (srcs) { return srcs.map(function (src) { return ({ src: src }); }); }))
                    .then(function (scripts) { return scripts.forEach(function (_a, index) {
                    var polyfill = _a.src;
                    return data["polyfill-" + (index + 1)] = polyfill;
                }); })
                    .then(function () { return loadNextSupport({ supportType: supportType }); });
            }
            else if (polyfills) {
                loadScripts(polyfills.map(function (polyfill) { return ({ src: polyfill }); }))
                    .then(function (scripts) { return scripts.forEach(function (_a, index) {
                    var polyfill = _a.src;
                    return data["polyfill-" + (index + 1)] = polyfill;
                }); })
                    .then(function () { return loadNextSupport({ supportType: supportType }); });
            }
            else {
                loadNextSupport({ supportType: supportType });
            }
            return [2 /*return*/];
        });
    });
}
if (!window.VamtigerBrowserSupport) {
    window.VamtigerBrowserSupport = updateBrowserSupport;
}

var id = ElementAttribute.id;
var vamtigerBrowserSupport = ElementId.vamtigerBrowserSupport;
var baseUrl = MetaElementAttribute.baseUrl;
var es2015Support = MetaElementBrowserSupportAttribute.es2015Support;
var nothing$1 = StringConstant.nothing, slash = StringConstant.slash, build = StringConstant.build;
var selector$1 = Selector.vamtigerBrowserSupportScript;
var distTag = regex.distTag;
function setMetaElement () {
    var head = document.head;
    var firstChild = head.firstChild;
    var metaElement = document.createElement(ElmentName.meta);
    var vamtigerBrowserSupportScript = document.querySelector(selector$1);
    var vamtigerBrowserSupportScriptPaths = vamtigerBrowserSupportScript.src.split(slash);
    var baseUrlPaths = new Set(vamtigerBrowserSupportScriptPaths
        .slice(0, vamtigerBrowserSupportScriptPaths.length - 1));
    var baseUrlPath = vamtigerBrowserSupportScript.src.match(distTag)
        && vamtigerBrowserSupportScript.src + "/build"
        || Array.from(baseUrlPaths).join(slash);
    metaElement.setAttribute(id, vamtigerBrowserSupport);
    vamtigerBrowserSupportScript && Object.keys(vamtigerBrowserSupportScript.dataset).forEach(function (key) {
        if (!metaElement.dataset[key]) {
            metaElement.dataset[key] = vamtigerBrowserSupportScript.dataset[key];
        }
    });
    metaElement.dataset[baseUrl] = baseUrlPath;
    head.insertBefore(metaElement, firstChild);
}

var vamtigerBrowserSupportId$4 = ElementId.vamtigerBrowserSupport;
var slash$1 = StringConstant.slash, nothing$2 = StringConstant.nothing;
var meta = ElmentName.meta;
var trailingSupport = regex.trailingSupport;
function setBrowserSupportMetaElement (_a) {
    var supportDataKey = _a.support;
    var _b = vamtigerBrowserSupportId$4, vamtigerBrowserSupport = window[_b];
    var dataset = vamtigerBrowserSupport.dataset;
    var baseUrl = dataset.baseUrl;
    var _c = supportDataKey.match(trailingSupport) || [], support = _c[1], supportType = _c[2];
    var currentSupportScript = supportScript[support];
    var scriptUrl = [
        baseUrl,
        currentSupportScript
    ].join(slash$1);
    var metaElement = document.createElement(meta);
    metaElement.dataset.name = support;
    metaElement.dataset.url = scriptUrl;
    if (supportType) {
        metaElement.dataset[supportType.toLowerCase()] = nothing$2;
    }
    else {
        metaElement.dataset[SupportType.secondary] = nothing$2;
    }
    vamtigerBrowserSupport.appendChild(metaElement);
}

var vamtigerBrowserSupportId$5 = ElementId.vamtigerBrowserSupport;
var trailingSupport$1 = regex.trailingSupport;
function setBrowserSupportMetaElements () {
    var _a = vamtigerBrowserSupportId$5, vamtigerBrowserSupport = window[_a];
    var dataset = vamtigerBrowserSupport.dataset;
    var supportKey = Object
        .keys(dataset)
        .filter(function (key) { return key.match(trailingSupport$1); })
        .sort();
    supportKey.forEach(function (support) { return setBrowserSupportMetaElement({
        support: support,
        primary: primarySupport.has(support)
    }); });
}

var bot = regex.bot;
function isBot () {
    var userAgent = navigator.userAgent;
    var isBot = navigator && Boolean(userAgent.match(bot));
    return isBot;
}

var parse = JSON.parse;
function loadDependencies () {
    return __awaiter$1(this, void 0, void 0, function () {
        var urls, dependencies$$1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    urls = [isBot() && ScriptUrl.vamtigerBrowserMethod || ScriptUrl.vamtigerBrowserMethodJsonJs]
                        .concat(dependencies)
                        .filter(function (url) { return url; });
                    return [4 /*yield*/, Promise.all(urls.map(loadDependency))];
                case 1:
                    dependencies$$1 = _a.sent();
                    return [4 /*yield*/, loanVamtigerBrowserMethod()];
                case 2:
                    _a.sent();
                    return [2 /*return*/, dependencies$$1];
            }
        });
    });
}
function loadDependency(src) {
    return new Promise(function (resolve, reject) {
        var head = document.head;
        var selector$$1 = "[src=\"" + src + "\"]";
        var existingScript = head.querySelector(selector$$1);
        var script = !existingScript && document.createElement('script');
        if (script) {
            script.addEventListener('load', function (event) { return resolve(script); });
            script.addEventListener('error', reject);
            script.src = src;
            head.appendChild(script);
        }
        else if (existingScript) {
            resolve(existingScript);
        }
        else {
            resolve();
        }
    });
}
function loanVamtigerBrowserMethod() {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter$1(_this, void 0, void 0, function () {
        var head, selector$$1, script, jsonText, data, js, vamtigerBrowserMethodScript;
        return __generator(this, function (_a) {
            head = document.head;
            selector$$1 = Selector.vamtigerBrowserMethodJson;
            script = document.querySelector(selector$$1);
            jsonText = script && script.innerHTML;
            data = jsonText && parse(jsonText);
            js = data && data.text;
            vamtigerBrowserMethodScript = document.createElement('script');
            if (js) {
                vamtigerBrowserMethodScript.dataset.name = ScriptUrl.vamtigerBrowserMethod;
                vamtigerBrowserMethodScript.innerHTML = js;
                head.appendChild(vamtigerBrowserMethodScript);
            }
            resolve();
            return [2 /*return*/];
        });
    }); });
}

var nothing$3 = StringConstant.nothing;
function setBrowserData () {
    return __awaiter$1(this, void 0, void 0, function () {
        var ontouchstart, document, body, dataset, maxTouchPoints, msMaxTouchPoints, touchSupport;
        return __generator(this, function (_a) {
            ontouchstart = window.ontouchstart, document = window.document;
            body = document.body;
            dataset = body.dataset;
            maxTouchPoints = navigator.maxTouchPoints, msMaxTouchPoints = navigator.msMaxTouchPoints;
            touchSupport = (ontouchstart
                || window.hasOwnProperty('DocumentTouch')
                || maxTouchPoints
                || msMaxTouchPoints) ? true : false;
            if (touchSupport) {
                dataset[DocumentDataAttribute.touchSupport] = nothing$3;
            }
            return [2 /*return*/];
        });
    });
}

function handleLoad(event) {
    return __awaiter$1(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    removeEventListener('load', handleLoad);
                    return [4 /*yield*/, loadDependencies()];
                case 1:
                    _a.sent();
                    setMetaElement();
                    setBrowserSupportMetaElements();
                    loadSupport$1().catch(handleError);
                    setBrowserData();
                    return [2 /*return*/];
            }
        });
    });
}
function handleError(error) {
    console.warn(error);
    console.warn(notBrowser);
}
var notBrowser = ErrorMessage.notBrowser;
addEventListener('load', handleLoad);

}());
//# sourceMappingURL=vamtiger-browser-support.js.map
