// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({17:[function(require,module,exports) {
module.exports="/dist/94510a854af4984f57086f2372757f31.png";
},{}],25:[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],14:[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":25}],6:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./../assets/bg.png":[["1c5ff217c642d002adeba5f06fc3bdd2.png",15],15],"./../assets/loading-logo.png":[["e80786b199166ffa40aa8323ad925685.png",16],16],"./../assets/bg-rgb.png":17,"./../assets/circle.png":[["f60aacac8749c7de2961b2340d622632.png",18],18],"./../assets/bottle.png":[["d73261259bb5800a223f42663533f558.png",19],19],"./../assets/knock.png":[["2be4fd6bf26cff634aca1b879c4b6c54.png",34],34],"./../assets/end-logo.png":[["aa891502b39bf124280aa9802961298c.png",20],20],"./../assets/share.png":[["31f57a758308f16869341a118718f510.png",21],21],"_css_loader":14}],7:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    // 设置font-size大小
    var innerWidth = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight;
    var size = innerWidth / 3.75;
    document.documentElement.style.fontSize = size + 'px';
}();
},{}],8:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class(config) {
        _classCallCheck(this, _class);

        this.config = config;
        this.container = config.parent;
        this.children = [];
        this.createFont();
        this.configStyle();
    }

    _createClass(_class, [{
        key: 'createFont',
        value: function createFont() {
            var elm = $('<span class="common-font"></span>');
            for (var i = 0; i < this.config.json.length; i++) {
                var e = elm.clone();
                e.css({
                    'background-image': 'url(' + this.config.fontBaseUrl + '/font-' + i + '.png)'
                });
                this.container.append(e);
                this.children.push(e);
            }
        }
    }, {
        key: 'configStyle',
        value: function configStyle() {
            var config = this.config.json;
            for (var i = 0; i < config.length; i++) {
                var c = config[i];
                c = this._trSize(c);
                this.children[i].css({
                    width: c.w,
                    height: c.h,
                    left: c.l,
                    top: c.t
                });
            }
        }
    }, {
        key: 'addAnimation',
        value: function addAnimation() {
            var _this = this;

            setTimeout(function () {
                var children = _this.container.children();

                var _loop = function _loop(i) {
                    $(children[i]).on('webkitTransitionEnd', function () {
                        $(children[i + 1]).addClass('common-font-show');
                    });
                    if (i == _this.config.json.length - 1) {
                        // 说明是最后一个文字的出现
                        $(children[i]).on('webkitTransitionEnd', function () {
                            _this.config.cb && _this.config.cb();
                        });
                    }
                };

                for (var i = 0; i < _this.config.json.length; i++) {
                    _loop(i);
                }
                $(children[0]).addClass('common-font-show');
            }, 0);
        }
    }, {
        key: '_trSize',
        value: function _trSize(config) {
            return {
                w: this._trRem(config.w),
                h: this._trRem(config.h),
                l: this._trRem(config.l),
                t: this._trRem(config.t)
            };
        }
    }, {
        key: '_trRem',
        value: function _trRem(v) {
            return v / 200 + 'rem';
        }
    }, {
        key: '_trVh',
        value: function _trVh() {}
    }]);

    return _class;
}();

exports.default = _class;
},{}],28:[function(require,module,exports) {
/*!
 * vConsole v3.1.0 (https://github.com/Tencent/vConsole)
 * 
 * Tencent is pleased to support the open source community by making vConsole available.
 * Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VConsole=t():e.VConsole=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),o(1);var i=o(2),a=n(i),r=o(18),l=n(r);a["default"].VConsolePlugin=l["default"],t["default"]=a["default"],e.exports=t["default"]},function(e,t){"use strict";if("undefined"==typeof Symbol){window.Symbol=function(){};var o="__symbol_iterator_key";window.Symbol.iterator=o,Array.prototype[o]=function(){var e=this,t=0;return{next:function(){return{done:e.length===t,value:e.length===t?void 0:e[t++]}}}}}},function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o(3),c=i(l),s=o(4),d=n(s),u=o(5),v=i(u);o(7);var f=o(11),p=i(f),h=o(12),b=i(h),g=o(13),m=i(g),y=o(14),_=i(y),w=o(15),x=i(w),k=o(16),C=i(k),T=o(24),O=i(T),E=o(26),S=i(E),L=o(30),j=i(L),N=o(37),P=i(N),M="#__vconsole",A=function(){function e(t){if(a(this,e),v["default"].one(M))return void console.debug("vConsole is already exists.");var o=this;if(this.version=c["default"].version,this.$dom=null,this.isInited=!1,this.option={defaultPlugins:["system","network","element","storage"]},this.activedTab="",this.tabList=[],this.pluginList={},this.switchPos={x:10,y:10,startX:0,startY:0,endX:0,endY:0},this.tool=d,this.$=v["default"],d.isObject(t))for(var n in t)this.option[n]=t[n];this._addBuiltInPlugins();var i=function(){o.isInited||(o._render(),o._mockTap(),o._bindEvent(),o._autoRun())};void 0!==document?"complete"==document.readyState?i():v["default"].bind(window,"load",i):!function(){var e=void 0,t=function o(){document&&"complete"==document.readyState?(e&&clearTimeout(e),i()):e=setTimeout(o,1)};e=setTimeout(t,1)}()}return r(e,[{key:"_addBuiltInPlugins",value:function(){this.addPlugin(new C["default"]("default","Log"));var e=this.option.defaultPlugins,t={system:{proto:O["default"],name:"System"},network:{proto:S["default"],name:"Network"},element:{proto:j["default"],name:"Element"},storage:{proto:P["default"],name:"Storage"}};if(e&&d.isArray(e))for(var o=0;o<e.length;o++){var n=t[e[o]];n?this.addPlugin(new n.proto(e[o],n.name)):console.debug("Unrecognized default plugin ID:",e[o])}}},{key:"_render",value:function(){if(!v["default"].one(M)){var e=document.createElement("div");e.innerHTML=p["default"],document.documentElement.insertAdjacentElement("beforeend",e.children[0])}this.$dom=v["default"].one(M);var t=v["default"].one(".vc-switch",this.$dom),o=1*d.getStorage("switch_x"),n=1*d.getStorage("switch_y");(o||n)&&(o+t.offsetWidth>document.documentElement.offsetWidth&&(o=document.documentElement.offsetWidth-t.offsetWidth),n+t.offsetHeight>document.documentElement.offsetHeight&&(n=document.documentElement.offsetHeight-t.offsetHeight),0>o&&(o=0),0>n&&(n=0),this.switchPos.x=o,this.switchPos.y=n,v["default"].one(".vc-switch").style.right=o+"px",v["default"].one(".vc-switch").style.bottom=n+"px");var i=window.devicePixelRatio||1,a=document.querySelector('[name="viewport"]');if(a&&a.content){var r=a.content.match(/initial\-scale\=\d+(\.\d+)?/),l=r?parseFloat(r[0].split("=")[1]):1;1>l&&(this.$dom.style.fontSize=13*i+"px")}v["default"].one(".vc-mask",this.$dom).style.display="none"}},{key:"_mockTap",value:function(){var e=700,t=10,o=void 0,n=void 0,i=void 0,a=!1,r=null;this.$dom.addEventListener("touchstart",function(e){if(void 0===o){var t=e.targetTouches[0];n=t.pageX,i=t.pageY,o=e.timeStamp,r=e.target.nodeType===Node.TEXT_NODE?e.target.parentNode:e.target}},!1),this.$dom.addEventListener("touchmove",function(e){var o=e.changedTouches[0];(Math.abs(o.pageX-n)>t||Math.abs(o.pageY-i)>t)&&(a=!0)}),this.$dom.addEventListener("touchend",function(t){if(a===!1&&t.timeStamp-o<e&&null!=r){var n=r.tagName.toLowerCase(),i=!1;switch(n){case"textarea":i=!0;break;case"input":switch(r.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":i=!1;break;default:i=!r.disabled&&!r.readOnly}}i?r.focus():t.preventDefault();var l=t.changedTouches[0],c=document.createEvent("MouseEvents");c.initMouseEvent("click",!0,!0,window,1,l.screenX,l.screenY,l.clientX,l.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,c.initEvent("click",!0,!0),r.dispatchEvent(c)}o=void 0,a=!1,r=null},!1)}},{key:"_bindEvent",value:function(){var e=this,t=v["default"].one(".vc-switch",e.$dom);v["default"].bind(t,"touchstart",function(t){e.switchPos.startX=t.touches[0].pageX,e.switchPos.startY=t.touches[0].pageY}),v["default"].bind(t,"touchend",function(t){e.switchPos.x=e.switchPos.endX,e.switchPos.y=e.switchPos.endY,e.switchPos.startX=0,e.switchPos.startY=0,e.switchPos.endX=0,e.switchPos.endY=0,d.setStorage("switch_x",e.switchPos.x),d.setStorage("switch_y",e.switchPos.y)}),v["default"].bind(t,"touchmove",function(o){if(o.touches.length>0){var n=o.touches[0].pageX-e.switchPos.startX,i=o.touches[0].pageY-e.switchPos.startY,a=e.switchPos.x-n,r=e.switchPos.y-i;a+t.offsetWidth>document.documentElement.offsetWidth&&(a=document.documentElement.offsetWidth-t.offsetWidth),r+t.offsetHeight>document.documentElement.offsetHeight&&(r=document.documentElement.offsetHeight-t.offsetHeight),0>a&&(a=0),0>r&&(r=0),t.style.right=a+"px",t.style.bottom=r+"px",e.switchPos.endX=a,e.switchPos.endY=r,o.preventDefault()}}),v["default"].bind(v["default"].one(".vc-switch",e.$dom),"click",function(){e.show()}),v["default"].bind(v["default"].one(".vc-hide",e.$dom),"click",function(){e.hide()}),v["default"].bind(v["default"].one(".vc-mask",e.$dom),"click",function(t){return t.target!=v["default"].one(".vc-mask")?!1:void e.hide()}),v["default"].delegate(v["default"].one(".vc-tabbar",e.$dom),"click",".vc-tab",function(t){var o=this.dataset.tab;o!=e.activedTab&&e.showTab(o)}),v["default"].bind(v["default"].one(".vc-panel",e.$dom),"transitionend webkitTransitionEnd oTransitionEnd otransitionend",function(t){return t.target!=v["default"].one(".vc-panel")?!1:void(v["default"].hasClass(e.$dom,"vc-toggle")||(t.target.style.display="none"))});var o=v["default"].one(".vc-content",e.$dom),n=!1;v["default"].bind(o,"touchstart",function(e){var t=o.scrollTop,i=o.scrollHeight,a=t+o.offsetHeight;0===t?(o.scrollTop=1,0===o.scrollTop&&(v["default"].hasClass(e.target,"vc-cmd-input")||(n=!0))):a===i&&(o.scrollTop=t-1,o.scrollTop===t&&(v["default"].hasClass(e.target,"vc-cmd-input")||(n=!0)))}),v["default"].bind(o,"touchmove",function(e){n&&e.preventDefault()}),v["default"].bind(o,"touchend",function(e){n=!1})}},{key:"_autoRun",value:function(){this.isInited=!0;for(var e in this.pluginList)this._initPlugin(this.pluginList[e]);this.tabList.length>0&&this.showTab(this.tabList[0]),this.triggerEvent("ready")}},{key:"triggerEvent",value:function(e,t){e="on"+e.charAt(0).toUpperCase()+e.slice(1),d.isFunction(this.option[e])&&this.option[e].apply(this,t)}},{key:"_initPlugin",value:function(e){var t=this;e.vConsole=this,e.trigger("init"),e.trigger("renderTab",function(o){t.tabList.push(e.id);var n=v["default"].render(b["default"],{id:e.id,name:e.name});v["default"].one(".vc-tabbar",t.$dom).insertAdjacentElement("beforeend",n);var i=v["default"].render(m["default"],{id:e.id});o&&(d.isString(o)?i.innerHTML+=o:d.isFunction(o.appendTo)?o.appendTo(i):d.isElement(o)&&i.insertAdjacentElement("beforeend",o)),v["default"].one(".vc-content",t.$dom).insertAdjacentElement("beforeend",i)}),e.trigger("addTopBar",function(o){if(o)for(var n=v["default"].one(".vc-topbar",t.$dom),i=function(t){var i=o[t],a=v["default"].render(_["default"],{name:i.name||"Undefined",className:i.className||"",pluginID:e.id});if(i.data)for(var r in i.data)a.dataset[r]=i.data[r];d.isFunction(i.onClick)&&v["default"].bind(a,"click",function(t){var o=i.onClick.call(a);o===!1||(v["default"].removeClass(v["default"].all(".vc-topbar-"+e.id),"vc-actived"),v["default"].addClass(a,"vc-actived"))}),n.insertAdjacentElement("beforeend",a)},a=0;a<o.length;a++)i(a)}),e.trigger("addTool",function(o){if(o)for(var n=v["default"].one(".vc-tool-last",t.$dom),i=function(t){var i=o[t],a=v["default"].render(x["default"],{name:i.name||"Undefined",pluginID:e.id});1==i.global&&v["default"].addClass(a,"vc-global-tool"),d.isFunction(i.onClick)&&v["default"].bind(a,"click",function(e){i.onClick.call(a)}),n.parentNode.insertBefore(a,n)},a=0;a<o.length;a++)i(a)}),e.trigger("ready")}},{key:"_triggerPluginsEvent",value:function(e){for(var t in this.pluginList)this.pluginList[t].trigger(e)}},{key:"_triggerPluginEvent",value:function(e,t){var o=this.pluginList[e];o&&o.trigger(t)}},{key:"addPlugin",value:function(e){return void 0!==this.pluginList[e.id]?(console.debug("Plugin "+e.id+" has already been added."),!1):(this.pluginList[e.id]=e,this.isInited&&(this._initPlugin(e),1==this.tabList.length&&this.showTab(this.tabList[0])),!0)}},{key:"removePlugin",value:function(e){e=(e+"").toLowerCase();var t=this.pluginList[e];if(void 0===t)return console.debug("Plugin "+e+" does not exist."),!1;if(t.trigger("remove"),this.isInited){var o=v["default"].one("#__vc_tab_"+e);o&&o.parentNode.removeChild(o);for(var n=v["default"].all(".vc-topbar-"+e,this.$dom),i=0;i<n.length;i++)n[i].parentNode.removeChild(n[i]);var a=v["default"].one("#__vc_log_"+e);a&&a.parentNode.removeChild(a);for(var r=v["default"].all(".vc-tool-"+e,this.$dom),l=0;l<r.length;l++)r[l].parentNode.removeChild(r[l])}var c=this.tabList.indexOf(e);c>-1&&this.tabList.splice(c,1);try{delete this.pluginList[e]}catch(s){this.pluginList[e]=void 0}return this.activedTab==e&&this.tabList.length>0&&this.showTab(this.tabList[0]),!0}},{key:"show",value:function(){if(this.isInited){var e=this,t=v["default"].one(".vc-panel",this.$dom);t.style.display="block",setTimeout(function(){v["default"].addClass(e.$dom,"vc-toggle"),e._triggerPluginsEvent("showConsole");var t=v["default"].one(".vc-mask",e.$dom);t.style.display="block"},10)}}},{key:"hide",value:function(){if(this.isInited){v["default"].removeClass(this.$dom,"vc-toggle"),this._triggerPluginsEvent("hideConsole");var e=v["default"].one(".vc-mask",this.$dom),t=v["default"].one(".vc-panel",this.$dom);v["default"].bind(e,"transitionend",function(o){e.style.display="none",t.style.display="none"})}}},{key:"showSwitch",value:function(){if(this.isInited){var e=v["default"].one(".vc-switch",this.$dom);e.style.display="block"}}},{key:"hideSwitch",value:function(){if(this.isInited){var e=v["default"].one(".vc-switch",this.$dom);e.style.display="none"}}},{key:"showTab",value:function(e){if(this.isInited){var t=v["default"].one("#__vc_log_"+e);v["default"].removeClass(v["default"].all(".vc-tab",this.$dom),"vc-actived"),v["default"].addClass(v["default"].one("#__vc_tab_"+e),"vc-actived"),v["default"].removeClass(v["default"].all(".vc-logbox",this.$dom),"vc-actived"),v["default"].addClass(t,"vc-actived");var o=v["default"].all(".vc-topbar-"+e,this.$dom);v["default"].removeClass(v["default"].all(".vc-toptab",this.$dom),"vc-toggle"),v["default"].addClass(o,"vc-toggle"),o.length>0?v["default"].addClass(v["default"].one(".vc-content",this.$dom),"vc-has-topbar"):v["default"].removeClass(v["default"].one(".vc-content",this.$dom),"vc-has-topbar"),v["default"].removeClass(v["default"].all(".vc-tool",this.$dom),"vc-toggle"),v["default"].addClass(v["default"].all(".vc-tool-"+e,this.$dom),"vc-toggle"),this._triggerPluginEvent(this.activedTab,"hide"),this.activedTab=e,this._triggerPluginEvent(this.activedTab,"show")}}},{key:"setOption",value:function(e,t){if(d.isString(e))this.option[e]=t,this._triggerPluginsEvent("updateOption");else if(d.isObject(e)){for(var o in e)this.option[o]=e[o];this._triggerPluginsEvent("updateOption")}else console.debug("The first parameter of vConsole.setOption() must be a string or an object.")}},{key:"destroy",value:function(){if(this.isInited){for(var e=Object.keys(this.pluginList),t=e.length-1;t>=0;t--)this.removePlugin(e[t]);this.$dom.parentNode.removeChild(this.$dom)}}}]),e}();t["default"]=A,e.exports=t["default"]},function(e,t){e.exports={name:"vconsole",version:"3.1.0",description:"A lightweight, extendable front-end developer tool for mobile web page.",homepage:"https://github.com/Tencent/vConsole",main:"dist/vconsole.min.js",scripts:{test:"mocha",dist:"webpack"},keywords:["console","debug","mobile"],repository:{type:"git",url:"git+https://github.com/Tencent/vConsole.git"},dependencies:{},devDependencies:{"babel-core":"^6.7.7","babel-loader":"^6.2.4","babel-plugin-add-module-exports":"^0.1.4","babel-preset-es2015":"^6.6.0","babel-preset-stage-3":"^6.5.0",chai:"^3.5.0","css-loader":"^0.23.1","extract-text-webpack-plugin":"^1.0.1","html-loader":"^0.4.3",jsdom:"^9.2.1","json-loader":"^0.5.4",less:"^2.5.3","less-loader":"^2.2.3",mocha:"^2.5.3","style-loader":"^0.13.1",webpack:"~1.12.11"},author:"Tencent",license:"MIT"}},function(e,t){"use strict";function o(e){var t=e>0?new Date(e):new Date,o=t.getDate()<10?"0"+t.getDate():t.getDate(),n=t.getMonth()<9?"0"+(t.getMonth()+1):t.getMonth()+1,i=t.getFullYear(),a=t.getHours()<10?"0"+t.getHours():t.getHours(),r=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),l=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds(),c=t.getMilliseconds()<10?"0"+t.getMilliseconds():t.getMilliseconds();return 100>c&&(c="0"+c),{time:+t,year:i,month:n,day:o,hour:a,minute:r,second:l,millisecond:c}}function n(e){return"[object Number]"==Object.prototype.toString.call(e)}function i(e){return"[object String]"==Object.prototype.toString.call(e)}function a(e){return"[object Array]"==Object.prototype.toString.call(e)}function r(e){return"[object Boolean]"==Object.prototype.toString.call(e)}function l(e){return"[object Undefined]"==Object.prototype.toString.call(e)}function c(e){return"[object Null]"==Object.prototype.toString.call(e)}function s(e){return"[object Symbol]"==Object.prototype.toString.call(e)}function d(e){return!("[object Object]"!=Object.prototype.toString.call(e)&&(n(e)||i(e)||r(e)||a(e)||c(e)||u(e)||l(e)||s(e)))}function u(e){return"[object Function]"==Object.prototype.toString.call(e)}function v(e){return"object"===("undefined"==typeof HTMLElement?"undefined":w(HTMLElement))?e instanceof HTMLElement:e&&"object"===("undefined"==typeof e?"undefined":w(e))&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}function f(e){var t=Object.prototype.toString.call(e);return"[object global]"==t||"[object Window]"==t||"[object DOMWindow]"==t}function p(e){var t=Object.prototype.hasOwnProperty;if(!e||"object"!==("undefined"==typeof e?"undefined":w(e))||e.nodeType||f(e))return!1;try{if(e.constructor&&!t.call(e,"constructor")&&!t.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(o){return!1}var n=void 0;for(n in e);return void 0===n||t.call(e,n)}function h(e){return document.createElement("a").appendChild(document.createTextNode(e)).parentNode.innerHTML}function b(e){var t=arguments.length<=1||void 0===arguments[1]?"	":arguments[1],o=arguments.length<=2||void 0===arguments[2]?"CIRCULAR_DEPENDECY_OBJECT":arguments[2],n=[],i=JSON.stringify(e,function(e,t){if("object"===("undefined"==typeof t?"undefined":w(t))&&null!==t){if(~n.indexOf(t))return o;n.push(t)}return t},t);return n=null,i}function g(e){if(!d(e)&&!a(e))return[];var t=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],o=[];for(var n in e)t.indexOf(n)<0&&o.push(n);return o=o.sort()}function m(e){return Object.prototype.toString.call(e).replace("[object ","").replace("]","")}function y(e,t){window.localStorage&&(e="vConsole_"+e,localStorage.setItem(e,t))}function _(e){return window.localStorage?(e="vConsole_"+e,localStorage.getItem(e)):void 0}Object.defineProperty(t,"__esModule",{value:!0});var w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t.getDate=o,t.isNumber=n,t.isString=i,t.isArray=a,t.isBoolean=r,t.isUndefined=l,t.isNull=c,t.isSymbol=s,t.isObject=d,t.isFunction=u,t.isElement=v,t.isWindow=f,t.isPlainObject=p,t.htmlEncode=h,t.JSONStringify=b,t.getObjAllKeys=g,t.getObjName=m,t.setStorage=y,t.getStorage=_},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(4),a=o(6),r=n(a),l={};l.one=function(e,t){return t?t.querySelector(e):document.querySelector(e)},l.all=function(e,t){var o=void 0,n=[];return o=t?t.querySelectorAll(e):document.querySelectorAll(e),o&&o.length>0&&(n=Array.prototype.slice.call(o)),n},l.addClass=function(e,t){if(e){(0,i.isArray)(e)||(e=[e]);for(var o=0;o<e.length;o++){var n=e[o].className||"",a=n.split(" ");a.indexOf(t)>-1||(a.push(t),e[o].className=a.join(" "))}}},l.removeClass=function(e,t){if(e){(0,i.isArray)(e)||(e=[e]);for(var o=0;o<e.length;o++){for(var n=e[o].className.split(" "),a=0;a<n.length;a++)n[a]==t&&(n[a]="");e[o].className=n.join(" ").trim()}}},l.hasClass=function(e,t){if(!e)return!1;for(var o=e.className.split(" "),n=0;n<o.length;n++)if(o[n]==t)return!0;return!1},l.bind=function(e,t,o,n){if(e){void 0===n&&(n=!1),(0,i.isArray)(e)||(e=[e]);for(var a=0;a<e.length;a++)e[a].addEventListener(t,o,n)}},l.delegate=function(e,t,o,n){e&&e.addEventListener(t,function(t){var i=l.all(o,e);if(i)e:for(var a=0;a<i.length;a++)for(var r=t.target;r;){if(r==i[a]){n.call(r,t);break e}if(r=r.parentNode,r==e)break}},!1)},l.render=r["default"],t["default"]=l,e.exports=t["default"]},function(e,t){"use strict";function o(e,t,o){var n=/\{\{([^\}]+)\}\}/g,i="",a="",r=0,l=[],c=function(e,t){""!==e&&(i+=t?e.match(/^ ?else/g)?"} "+e+" {\n":e.match(/\/(if|for|switch)/g)?"}\n":e.match(/^ ?if|for|switch/g)?e+" {\n":e.match(/^ ?(break|continue) ?$/g)?e+";\n":e.match(/^ ?(case|default)/g)?e+":\n":"arr.push("+e+");\n":'arr.push("'+e.replace(/"/g,'\\"')+'");\n')};for(window.__mito_data=t,window.__mito_code="",window.__mito_result="",e=e.replace(/(\{\{ ?switch(.+?)\}\})[\r\n\t ]+\{\{/g,"$1{{"),e=e.replace(/^[\r\n]/,"").replace(/\n/g,"\\\n").replace(/\r/g,"\\\r"),a="(function(){\n",i="var arr = [];\n";l=n.exec(e);)c(e.slice(r,l.index),!1),c(l[1],!0),r=l.index+l[0].length;c(e.substr(r,e.length-r),!1),i+='__mito_result = arr.join("");',i="with (__mito_data) {\n"+i+"\n}",a+=i,a+="})();";var s=document.getElementsByTagName("script"),d="";s.length>0&&(d=s[0].getAttribute("nonce")||"");var u=document.createElement("SCRIPT");u.innerHTML=a,u.setAttribute("nonce",d),document.documentElement.appendChild(u);var v=__mito_result;if(document.documentElement.removeChild(u),!o){var f=document.createElement("DIV");f.innerHTML=v,v=f.children[0]}return v}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o,e.exports=t["default"]},function(e,t,o){var n=o(8);"string"==typeof n&&(n=[[e.id,n,""]]);o(10)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,o){t=e.exports=o(9)(),t.push([e.id,'#__vconsole{color:#000;font-size:13px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#__vconsole .vc-max-height{max-height:19.23076923em}#__vconsole .vc-max-height-line{max-height:3.38461538em}#__vconsole .vc-min-height{min-height:3.07692308em}#__vconsole dd,#__vconsole dl,#__vconsole pre{margin:0}#__vconsole .vc-switch{display:block;position:fixed;right:.76923077em;bottom:.76923077em;color:#fff;background-color:#04be02;line-height:1;font-size:1.07692308em;padding:.61538462em 1.23076923em;z-index:10000;border-radius:.30769231em;box-shadow:0 0 .61538462em rgba(0,0,0,.4)}#__vconsole .vc-mask{top:0;background:transparent;z-index:10001;transition:background .3s;-webkit-tap-highlight-color:transparent;overflow-y:scroll}#__vconsole .vc-mask,#__vconsole .vc-panel{display:none;position:fixed;left:0;right:0;bottom:0}#__vconsole .vc-panel{min-height:85%;z-index:10002;background-color:#efeff4;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;-webkit-transform:translateY(100%);transform:translateY(100%)}#__vconsole .vc-tabbar{border-bottom:1px solid #d9d9d9;overflow-x:auto;height:3em;width:auto;white-space:nowrap}#__vconsole .vc-tabbar .vc-tab{display:inline-block;line-height:3em;padding:0 1.15384615em;border-right:1px solid #d9d9d9;text-decoration:none;color:#000;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}#__vconsole .vc-tabbar .vc-tab:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-tabbar .vc-tab.vc-actived{background-color:#fff}#__vconsole .vc-content{background-color:#fff;overflow-x:hidden;overflow-y:auto;position:absolute;top:3.07692308em;left:0;right:0;bottom:3.07692308em;-webkit-overflow-scrolling:touch}#__vconsole .vc-content.vc-has-topbar{top:5.46153846em}#__vconsole .vc-topbar{background-color:#fbf9fe;display:flex;display:-webkit-box;flex-direction:row;flex-wrap:wrap;-webkit-box-direction:row;-webkit-flex-wrap:wrap;width:100%}#__vconsole .vc-topbar .vc-toptab{display:none;flex:1;-webkit-box-flex:1;line-height:2.30769231em;padding:0 1.15384615em;border-bottom:1px solid #d9d9d9;text-decoration:none;text-align:center;color:#000;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}#__vconsole .vc-topbar .vc-toptab.vc-toggle{display:block}#__vconsole .vc-topbar .vc-toptab:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-topbar .vc-toptab.vc-actived{border-bottom:1px solid #3e82f7}#__vconsole .vc-logbox{display:none;position:relative;min-height:100%}#__vconsole .vc-logbox i{font-style:normal}#__vconsole .vc-logbox .vc-log{padding-bottom:3em;-webkit-tap-highlight-color:transparent}#__vconsole .vc-logbox .vc-log:empty:before{content:"Empty";color:#999;position:absolute;top:45%;left:0;right:0;bottom:0;font-size:1.15384615em;text-align:center}#__vconsole .vc-logbox .vc-item{margin:0;padding:.46153846em .61538462em;overflow:hidden;line-height:1.3;border-bottom:1px solid #eee;word-break:break-word}#__vconsole .vc-logbox .vc-item-info{color:#6a5acd}#__vconsole .vc-logbox .vc-item-debug{color:#daa520}#__vconsole .vc-logbox .vc-item-warn{color:orange;border-color:#ffb930;background-color:#fffacd}#__vconsole .vc-logbox .vc-item-error{color:#dc143c;border-color:#f4a0ab;background-color:#ffe4e1}#__vconsole .vc-logbox .vc-log.vc-log-partly .vc-item{display:none}#__vconsole .vc-logbox .vc-log.vc-log-partly-error .vc-item-error,#__vconsole .vc-logbox .vc-log.vc-log-partly-info .vc-item-info,#__vconsole .vc-logbox .vc-log.vc-log-partly-log .vc-item-log,#__vconsole .vc-logbox .vc-log.vc-log-partly-warn .vc-item-warn{display:block}#__vconsole .vc-logbox .vc-item .vc-item-content{margin-right:4.61538462em;display:block}#__vconsole .vc-logbox .vc-item .vc-item-meta{color:#888;float:right;width:4.61538462em;text-align:right}#__vconsole .vc-logbox .vc-item.vc-item-nometa .vc-item-content{margin-right:0}#__vconsole .vc-logbox .vc-item.vc-item-nometa .vc-item-meta{display:none}#__vconsole .vc-logbox .vc-item .vc-item-code{display:block;white-space:pre-wrap;overflow:auto;position:relative}#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-input,#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output{padding-left:.92307692em}#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-input:before,#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output:before{content:"\\203A";position:absolute;top:-.23076923em;left:0;font-size:1.23076923em;color:#6a5acd}#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output:before{content:"\\2039"}#__vconsole .vc-logbox .vc-item .vc-fold{display:block;overflow:auto;-webkit-overflow-scrolling:touch}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer{display:block;font-style:italic;padding-left:.76923077em;position:relative}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer:active{background-color:#e6e6e6}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer:before{content:"";position:absolute;top:.30769231em;left:.15384615em;width:0;height:0;border:.30769231em solid transparent;border-left-color:#000}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer.vc-toggle:before{top:.46153846em;left:0;border-top-color:#000;border-left-color:transparent}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner{display:none;margin-left:.76923077em}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner.vc-toggle{display:block}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner .vc-code-key{margin-left:.76923077em}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer .vc-code-key{margin-left:0}#__vconsole .vc-logbox .vc-code-key{color:#905}#__vconsole .vc-logbox .vc-code-private-key{color:#d391b5}#__vconsole .vc-logbox .vc-code-function{color:#905;font-style:italic}#__vconsole .vc-logbox .vc-code-boolean,#__vconsole .vc-logbox .vc-code-number{color:#0086b3}#__vconsole .vc-logbox .vc-code-string{color:#183691}#__vconsole .vc-logbox .vc-code-null,#__vconsole .vc-logbox .vc-code-undefined{color:#666}#__vconsole .vc-logbox .vc-cmd{position:absolute;height:3.07692308em;left:0;right:0;bottom:0;border-top:1px solid #d9d9d9;display:block!important}#__vconsole .vc-logbox .vc-cmd .vc-cmd-input-wrap{display:block;height:2.15384615em;margin-right:3.07692308em;padding:.46153846em .61538462em}#__vconsole .vc-logbox .vc-cmd .vc-cmd-input{width:100%;border:none;resize:none;outline:none;padding:0;font-size:.92307692em}#__vconsole .vc-logbox .vc-cmd .vc-cmd-input::-webkit-input-placeholder{line-height:2.15384615em}#__vconsole .vc-logbox .vc-cmd .vc-cmd-btn{position:absolute;top:0;right:0;bottom:0;width:3.07692308em;border:none;background-color:#efeff4;outline:none;-webkit-touch-callout:none;font-size:1em}#__vconsole .vc-logbox .vc-cmd .vc-cmd-btn:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-logbox .vc-group .vc-group-preview{-webkit-touch-callout:none}#__vconsole .vc-logbox .vc-group .vc-group-preview:active{background-color:#e6e6e6}#__vconsole .vc-logbox .vc-group .vc-group-detail{display:none;padding:0 0 .76923077em 1.53846154em;border-bottom:1px solid #eee}#__vconsole .vc-logbox .vc-group.vc-actived .vc-group-detail{display:block;background-color:#fbf9fe}#__vconsole .vc-logbox .vc-group.vc-actived .vc-table-row{background-color:#fff}#__vconsole .vc-logbox .vc-group.vc-actived .vc-group-preview{background-color:#fbf9fe}#__vconsole .vc-logbox .vc-table .vc-table-row{display:flex;display:-webkit-flex;flex-direction:row;flex-wrap:wrap;-webkit-box-direction:row;-webkit-flex-wrap:wrap;overflow:hidden;border-bottom:1px solid #eee}#__vconsole .vc-logbox .vc-table .vc-table-row.vc-left-border{border-left:1px solid #eee}#__vconsole .vc-logbox .vc-table .vc-table-col{flex:1;-webkit-box-flex:1;padding:.23076923em .30769231em;border-left:1px solid #eee;overflow:auto;white-space:pre-wrap;word-break:break-word;-webkit-overflow-scrolling:touch}#__vconsole .vc-logbox .vc-table .vc-table-col:first-child{border:none}#__vconsole .vc-logbox .vc-table .vc-small .vc-table-col{padding:0 .30769231em;font-size:.92307692em}#__vconsole .vc-logbox .vc-table .vc-table-col-2{flex:2;-webkit-box-flex:2}#__vconsole .vc-logbox .vc-table .vc-table-col-3{flex:3;-webkit-box-flex:3}#__vconsole .vc-logbox .vc-table .vc-table-col-4{flex:4;-webkit-box-flex:4}#__vconsole .vc-logbox .vc-table .vc-table-col-5{flex:5;-webkit-box-flex:5}#__vconsole .vc-logbox .vc-table .vc-table-col-6{flex:6;-webkit-box-flex:6}#__vconsole .vc-logbox .vc-table .vc-table-row-error{border-color:#f4a0ab;background-color:#ffe4e1}#__vconsole .vc-logbox .vc-table .vc-table-row-error .vc-table-col{color:#dc143c;border-color:#f4a0ab}#__vconsole .vc-logbox .vc-table .vc-table-col-title{font-weight:700}#__vconsole .vc-logbox.vc-actived{display:block}#__vconsole .vc-toolbar{border-top:1px solid #d9d9d9;line-height:3em;position:absolute;left:0;right:0;bottom:0;display:flex;display:-webkit-box;flex-direction:row;-webkit-box-direction:row}#__vconsole .vc-toolbar .vc-tool{display:none;text-decoration:none;color:#000;width:50%;flex:1;-webkit-box-flex:1;text-align:center;position:relative;-webkit-touch-callout:none}#__vconsole .vc-toolbar .vc-tool.vc-global-tool,#__vconsole .vc-toolbar .vc-tool.vc-toggle{display:block}#__vconsole .vc-toolbar .vc-tool:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-toolbar .vc-tool:after{content:" ";position:absolute;top:.53846154em;bottom:.53846154em;right:0;border-left:1px solid #d9d9d9}#__vconsole .vc-toolbar .vc-tool-last:after{border:none}#__vconsole.vc-toggle .vc-switch{display:none}#__vconsole.vc-toggle .vc-mask{background:rgba(0,0,0,.6);display:block}#__vconsole.vc-toggle .vc-panel{-webkit-transform:translate(0);transform:translate(0)}',""])},function(e,t){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(n[a]=!0)}for(i=0;i<t.length;i++){var r=t[i];"number"==typeof r[0]&&n[r[0]]||(o&&!r[2]?r[2]=o:o&&(r[2]="("+r[2]+") and ("+o+")"),e.push(r))}},e}},function(e,t,o){function n(e,t){for(var o=0;o<e.length;o++){var n=e[o],i=f[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(s(n.parts[a],t))}else{for(var r=[],a=0;a<n.parts.length;a++)r.push(s(n.parts[a],t));f[n.id]={id:n.id,refs:1,parts:r}}}}function i(e){for(var t=[],o={},n=0;n<e.length;n++){var i=e[n],a=i[0],r=i[1],l=i[2],c=i[3],s={css:r,media:l,sourceMap:c};o[a]?o[a].parts.push(s):t.push(o[a]={id:a,parts:[s]})}return t}function a(e,t){var o=b(),n=y[y.length-1];if("top"===e.insertAt)n?n.nextSibling?o.insertBefore(t,n.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(t)}}function r(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function s(e,t){var o,n,i;if(t.singleton){var a=m++;o=g||(g=l(t)),n=d.bind(null,o,a,!1),i=d.bind(null,o,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=c(t),n=v.bind(null,o),i=function(){r(o),o.href&&URL.revokeObjectURL(o.href)}):(o=l(t),n=u.bind(null,o),i=function(){r(o)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}function d(e,t,o,n){var i=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=_(t,i);else{var a=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function u(e,t){var o=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}function v(e,t){var o=t.css,n=t.sourceMap;n&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var i=new Blob([o],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(i),a&&URL.revokeObjectURL(a);
}var f={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=p(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,m=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=i(e);return n(o,t),function(e){for(var a=[],r=0;r<o.length;r++){var l=o[r],c=f[l.id];c.refs--,a.push(c)}if(e){var s=i(e);n(s,t)}for(var r=0;r<a.length;r++){var c=a[r];if(0===c.refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete f[c.id]}}}};var _=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports='<div id="__vconsole" class="">\n  <div class="vc-switch">vConsole</div>\n  <div class="vc-mask">\n  </div>\n  <div class="vc-panel">\n    <div class="vc-tabbar">\n    </div>\n    <div class="vc-topbar">\n    </div>\n    <div class="vc-content">\n    </div>\n    <div class="vc-toolbar">\n      <a class="vc-tool vc-global-tool vc-tool-last vc-hide">Hide</a>\n    </div>\n  </div>\n</div>'},function(e,t){e.exports='<a class="vc-tab" data-tab="{{id}}" id="__vc_tab_{{id}}">{{name}}</a>'},function(e,t){e.exports='<div class="vc-logbox" id="__vc_log_{{id}}">\n  \n</div>'},function(e,t){e.exports='<a class="vc-toptab vc-topbar-{{pluginID}}{{if (className)}} {{className}}{{/if}}">{{name}}</a>'},function(e,t){e.exports='<a class="vc-tool vc-tool-{{pluginID}}">{{name}}</a>'},function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=function w(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var i=Object.getPrototypeOf(e);return null===i?void 0:w(i,t,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},d=o(5),u=i(d),v=o(4),f=n(v),p=o(17),h=i(p),b=o(22),g=i(b),m=o(23),y=i(m),_=function(e){function t(){var e;a(this,t);for(var o=arguments.length,n=Array(o),i=0;o>i;i++)n[i]=arguments[i];var l=r(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return l.tplTabbox=g["default"],l.windowOnError=null,l}return l(t,e),c(t,[{key:"onReady",value:function(){var e=this;s(Object.getPrototypeOf(t.prototype),"onReady",this).call(this),u["default"].bind(u["default"].one(".vc-cmd",this.$tabbox),"submit",function(t){t.preventDefault();var o=u["default"].one(".vc-cmd-input",t.target),n=o.value;o.value="",""!==n&&e.evalCommand(n)});var o="";o+="if (!!window) {",o+="window.__vConsole_cmd_result = undefined;",o+="window.__vConsole_cmd_error = false;",o+="}";var n=document.getElementsByTagName("script"),i="";n.length>0&&(i=n[0].getAttribute("nonce")||"");var a=document.createElement("SCRIPT");a.innerHTML=o,a.setAttribute("nonce",i),document.documentElement.appendChild(a),document.documentElement.removeChild(a)}},{key:"mockConsole",value:function(){s(Object.getPrototypeOf(t.prototype),"mockConsole",this).call(this);var e=this;f.isFunction(window.onerror)&&(this.windowOnError=window.onerror),window.onerror=function(t,o,n,i,a){var r=t;o&&(r+="\n"+o.replace(location.origin,"")),(n||i)&&(r+=":"+n+":"+i);var l=!!a&&!!a.stack,c=l&&a.stack.toString()||"";e.printLog({logType:"error",logs:[r,c],noOrigin:!0}),f.isFunction(e.windowOnError)&&e.windowOnError.call(window,t,o,n,i,a)}}},{key:"evalCommand",value:function(e){this.printLog({logType:"log",content:u["default"].render(y["default"],{content:e,type:"input"}),noMeta:!0,style:""});var t="";t+="try {\n",t+="window.__vConsole_cmd_result = (function() {\n",t+="return "+e+";\n",t+="})();\n",t+="window.__vConsole_cmd_error = false;\n",t+="} catch (e) {\n",t+="window.__vConsole_cmd_result = e.message;\n",t+="window.__vConsole_cmd_error = true;\n",t+="}";var o=document.getElementsByTagName("script"),n="";o.length>0&&(n=o[0].getAttribute("nonce")||"");var i=document.createElement("SCRIPT");i.innerHTML=t,i.setAttribute("nonce",n),document.documentElement.appendChild(i);var a=window.__vConsole_cmd_result,r=window.__vConsole_cmd_error;if(document.documentElement.removeChild(i),0==r){var l=void 0;f.isArray(a)||f.isObject(a)?l=this.getFoldedLine(a):(f.isNull(a)?a="null":f.isUndefined(a)?a="undefined":f.isFunction(a)?a="function()":f.isString(a)&&(a='"'+a+'"'),l=u["default"].render(y["default"],{content:a,type:"output"})),this.printLog({logType:"log",content:l,noMeta:!0,style:""})}else this.printLog({logType:"error",logs:[a],noMeta:!0,style:""})}}]),t}(h["default"]);t["default"]=_,e.exports=t["default"]},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),d=o(4),u=i(d),v=o(5),f=n(v),p=o(18),h=n(p),b=o(19),g=n(b),m=o(20),y=n(m),_=o(21),w=n(_),x=1e3,k=function(e){function t(){var e;a(this,t);for(var o=arguments.length,n=Array(o),i=0;o>i;i++)n[i]=arguments[i];var l=r(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return l.tplTabbox="",l.allowUnformattedLog=!0,l.isReady=!1,l.isShow=!1,l.$tabbox=null,l.console={},l.logList=[],l.isInBottom=!0,l.maxLogNumber=x,l.logNumber=0,l.mockConsole(),l}return l(t,e),s(t,[{key:"onInit",value:function(){this.$tabbox=f["default"].render(this.tplTabbox,{}),this.updateMaxLogNumber()}},{key:"onRenderTab",value:function(e){e(this.$tabbox)}},{key:"onAddTopBar",value:function(e){for(var t=this,o=["All","Log","Info","Warn","Error"],n=[],i=0;i<o.length;i++)n.push({name:o[i],data:{type:o[i].toLowerCase()},className:"",onClick:function(){return f["default"].hasClass(this,"vc-actived")?!1:void t.showLogType(this.dataset.type||"all")}});n[0].className="vc-actived",e(n)}},{key:"onAddTool",value:function(e){var t=this,o=[{name:"Clear",global:!1,onClick:function(){t.clearLog(),t.vConsole.triggerEvent("clearLog")}}];e(o)}},{key:"onReady",value:function(){var e=this;e.isReady=!0;var t=f["default"].all(".vc-subtab",e.$tabbox);f["default"].bind(t,"click",function(o){if(o.preventDefault(),f["default"].hasClass(this,"vc-actived"))return!1;f["default"].removeClass(t,"vc-actived"),f["default"].addClass(this,"vc-actived");var n=this.dataset.type,i=f["default"].one(".vc-log",e.$tabbox);f["default"].removeClass(i,"vc-log-partly-log"),f["default"].removeClass(i,"vc-log-partly-info"),f["default"].removeClass(i,"vc-log-partly-warn"),f["default"].removeClass(i,"vc-log-partly-error"),"all"==n?f["default"].removeClass(i,"vc-log-partly"):(f["default"].addClass(i,"vc-log-partly"),f["default"].addClass(i,"vc-log-partly-"+n))});var o=f["default"].one(".vc-content");f["default"].bind(o,"scroll",function(t){e.isShow&&(o.scrollTop+o.offsetHeight>=o.scrollHeight?e.isInBottom=!0:e.isInBottom=!1)});for(var n=0;n<e.logList.length;n++)e.printLog(e.logList[n]);e.logList=[]}},{key:"onRemove",value:function(){window.console.log=this.console.log,window.console.info=this.console.info,window.console.warn=this.console.warn,window.console.debug=this.console.debug,window.console.error=this.console.error,window.console.clear=this.console.clear,this.console={}}},{key:"onShow",value:function(){this.isShow=!0,1==this.isInBottom&&this.scrollToBottom()}},{key:"onHide",value:function(){this.isShow=!1}},{key:"onShowConsole",value:function(){1==this.isInBottom&&this.scrollToBottom()}},{key:"onUpdateOption",value:function(){this.vConsole.option.maxLogNumber!=this.maxLogNumber&&(this.updateMaxLogNumber(),this.limitMaxLogs())}},{key:"updateMaxLogNumber",value:function(){this.maxLogNumber=this.vConsole.option.maxLogNumber||x,this.maxLogNumber=Math.max(1,this.maxLogNumber)}},{key:"limitMaxLogs",value:function(){if(this.isReady)for(;this.logNumber>this.maxLogNumber;){var e=f["default"].one(".vc-item",this.$tabbox);if(!e)break;e.parentNode.removeChild(e),this.logNumber--}}},{key:"showLogType",value:function(e){var t=f["default"].one(".vc-log",this.$tabbox);f["default"].removeClass(t,"vc-log-partly-log"),f["default"].removeClass(t,"vc-log-partly-info"),f["default"].removeClass(t,"vc-log-partly-warn"),f["default"].removeClass(t,"vc-log-partly-error"),"all"==e?f["default"].removeClass(t,"vc-log-partly"):(f["default"].addClass(t,"vc-log-partly"),f["default"].addClass(t,"vc-log-partly-"+e))}},{key:"scrollToBottom",value:function(){var e=f["default"].one(".vc-content");e&&(e.scrollTop=e.scrollHeight-e.offsetHeight)}},{key:"mockConsole",value:function(){var e=this,t=this,o=["log","info","warn","debug","error"];window.console?(o.map(function(e){t.console[e]=window.console[e]}),t.console.clear=window.console.clear):window.console={},o.map(function(t){window.console[t]=function(){for(var o=arguments.length,n=Array(o),i=0;o>i;i++)n[i]=arguments[i];e.printLog({logType:t,logs:n})}}),window.console.clear=function(){for(var e=arguments.length,o=Array(e),n=0;e>n;n++)o[n]=arguments[n];t.clearLog(),t.console.clear.apply(window.console,o)}}},{key:"clearLog",value:function(){f["default"].one(".vc-log",this.$tabbox).innerHTML=""}},{key:"printOriginLog",value:function(e){"function"==typeof this.console[e.logType]&&this.console[e.logType].apply(window.console,e.logs)}},{key:"printLog",value:function(e){var t=e.logs||[];if(t.length||e.content){t=[].slice.call(t||[]);var o=!0,n=/^\[(\w+)\]$/i,i="";if(u.isString(t[0])){var a=t[0].match(n);null!==a&&a.length>0&&(i=a[1].toLowerCase())}if(i?o=i==this.id:0==this.allowUnformattedLog&&(o=!1),!o)return void(e.noOrigin||this.printOriginLog(e));if(e.date||(e.date=+new Date),!this.isReady)return void this.logList.push(e);if(u.isString(t[0])&&(t[0]=t[0].replace(n,""),""===t[0]&&t.shift()),!e.meta){var r=u.getDate(e.date);e.meta=r.hour+":"+r.minute+":"+r.second}for(var l=f["default"].render(g["default"],{logType:e.logType,noMeta:!!e.noMeta,meta:e.meta,style:e.style||""}),s=f["default"].one(".vc-item-content",l),d=0;d<t.length;d++){var v=void 0;try{if(""===t[d])continue;v=u.isFunction(t[d])?"<span> "+t[d].toString()+"</span>":u.isObject(t[d])||u.isArray(t[d])?this.getFoldedLine(t[d]):"<span> "+u.htmlEncode(t[d]).replace(/\n/g,"<br/>")+"</span>"}catch(p){v="<span> ["+c(t[d])+"]</span>"}v&&("string"==typeof v?s.insertAdjacentHTML("beforeend",v):s.insertAdjacentElement("beforeend",v))}u.isObject(e.content)&&s.insertAdjacentElement("beforeend",e.content),f["default"].one(".vc-log",this.$tabbox).insertAdjacentElement("beforeend",l),this.logNumber++,this.limitMaxLogs(),this.isInBottom&&this.scrollToBottom(),e.noOrigin||this.printOriginLog(e)}}},{key:"getFoldedLine",value:function(e,t){var o=this;if(!t){var n=u.JSONStringify(e),i=n.substr(0,26);t=u.getObjName(e),n.length>26&&(i+="..."),t+=" "+i}var a=f["default"].render(y["default"],{outer:t,lineType:"obj"});return f["default"].bind(f["default"].one(".vc-fold-outer",a),"click",function(t){t.preventDefault(),t.stopPropagation(),f["default"].hasClass(a,"vc-toggle")?(f["default"].removeClass(a,"vc-toggle"),f["default"].removeClass(f["default"].one(".vc-fold-inner",a),"vc-toggle"),f["default"].removeClass(f["default"].one(".vc-fold-outer",a),"vc-toggle")):(f["default"].addClass(a,"vc-toggle"),f["default"].addClass(f["default"].one(".vc-fold-inner",a),"vc-toggle"),f["default"].addClass(f["default"].one(".vc-fold-outer",a),"vc-toggle"));var n=f["default"].one(".vc-fold-inner",a);if(0==n.children.length&&e){for(var i=u.getObjAllKeys(e),r=0;r<i.length;r++){var l=e[i[r]],c="undefined",s="";u.isString(l)?(c="string",l='"'+l+'"'):u.isNumber(l)?c="number":u.isBoolean(l)?c="boolean":u.isNull(l)?(c="null",l="null"):u.isUndefined(l)?(c="undefined",l="undefined"):u.isFunction(l)?(c="function",l="function()"):u.isSymbol(l)&&(c="symbol");var d=void 0;if(u.isArray(l)){var v=u.getObjName(l)+"["+l.length+"]";d=o.getFoldedLine(l,f["default"].render(w["default"],{key:i[r],keyType:s,value:v,valueType:"array"},!0))}else if(u.isObject(l)){var p=u.getObjName(l);d=o.getFoldedLine(l,f["default"].render(w["default"],{key:u.htmlEncode(i[r]),keyType:s,value:p,valueType:"object"},!0))}else{e.hasOwnProperty&&!e.hasOwnProperty(i[r])&&(s="private");var h={lineType:"kv",key:u.htmlEncode(i[r]),keyType:s,value:u.htmlEncode(l),valueType:c};d=f["default"].render(y["default"],h)}n.insertAdjacentElement("beforeend",d)}if(u.isObject(e)){var b=e.__proto__,g=void 0;g=u.isObject(b)?o.getFoldedLine(b,f["default"].render(w["default"],{key:"__proto__",keyType:"private",value:u.getObjName(b),valueType:"object"},!0)):f["default"].render(w["default"],{key:"__proto__",keyType:"private",value:"null",valueType:"null"}),n.insertAdjacentElement("beforeend",g)}}return!1}),a}}]),t}(h["default"]);t["default"]=k,e.exports=t["default"]},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=function(){function e(t){var n=arguments.length<=1||void 0===arguments[1]?"newPlugin":arguments[1];o(this,e),this.id=t,this.name=n,this.eventList={}}return n(e,[{key:"on",value:function(e,t){return this.eventList[e]=t,this}},{key:"trigger",value:function(e,t){if("function"==typeof this.eventList[e])this.eventList[e].call(this,t);else{var o="on"+e.charAt(0).toUpperCase()+e.slice(1);"function"==typeof this[o]&&this[o].call(this,t)}return this}},{key:"id",get:function(){return this._id},set:function(e){if(!e)throw"Plugin ID cannot be empty";this._id=e.toLowerCase()}},{key:"name",get:function(){return this._name},set:function(e){if(!e)throw"Plugin name cannot be empty";this._name=e}},{key:"vConsole",get:function(){return this._vConsole||void 0},set:function(e){if(!e)throw"vConsole cannot be empty";this._vConsole=e}}]),e}();t["default"]=i,e.exports=t["default"]},function(e,t){e.exports='<div class="vc-item vc-item-{{logType}} {{if (!noMeta)}}vc-item-nometa{{/if}} {{style}}">\n	<span class="vc-item-meta">{{if (!noMeta)}}{{meta}}{{/if}}</span>\n	<div class="vc-item-content"></div>\n</div>'},function(e,t){e.exports='<div class="vc-fold">\n  {{if (lineType == \'obj\')}}\n    <i class="vc-fold-outer">{{outer}}</i>\n    <div class="vc-fold-inner"></div>\n  {{else if (lineType == \'value\')}}\n    <i class="vc-code-{{valueType}}">{{value}}</i>\n  {{else if (lineType == \'kv\')}}\n    <i class="vc-code-key{{if (keyType)}} vc-code-{{keyType}}-key{{/if}}">{{key}}</i>: <i class="vc-code-{{valueType}}">{{value}}</i>\n  {{/if}}\n</div>'},function(e,t){e.exports='<span>\n  <i class="vc-code-key{{if (keyType)}} vc-code-{{keyType}}-key{{/if}}">{{key}}</i>: <i class="vc-code-{{valueType}}">{{value}}</i>\n</span>'},function(e,t){e.exports='<div>\n  <div class="vc-log"></div>\n  <form class="vc-cmd">\n    <button class="vc-cmd-btn" type="submit">OK</button>\n    <div class="vc-cmd-input-wrap">\n      <textarea class="vc-cmd-input" placeholder="command..."></textarea>\n    </div>\n  </form>\n</div>'},function(e,t){e.exports='<pre class="vc-item-code vc-item-code-{{type}}">{{content}}</pre>'},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=function b(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var i=Object.getPrototypeOf(e);return null===i?void 0:b(i,t,o)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(o)},d=o(4),u=(i(d),o(17)),v=n(u),f=o(25),p=n(f),h=function(e){function t(){var e;a(this,t);for(var o=arguments.length,n=Array(o),i=0;o>i;i++)n[i]=arguments[i];var l=r(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return l.tplTabbox=p["default"],l.allowUnformattedLog=!1,l}return l(t,e),c(t,[{key:"onInit",value:function(){s(Object.getPrototypeOf(t.prototype),"onInit",this).call(this),this.printSystemInfo()}},{key:"printSystemInfo",value:function(){var e=navigator.userAgent,t="",o=e.match(/(ipod).*\s([\d_]+)/i),n=e.match(/(ipad).*\s([\d_]+)/i),i=e.match(/(iphone)\sos\s([\d_]+)/i),a=e.match(/(android)\s([\d\.]+)/i);t="Unknown",a?t="Android "+a[2]:i?t="iPhone, iOS "+i[2].replace(/_/g,"."):n?t="iPad, iOS "+n[2].replace(/_/g,"."):o&&(t="iPod, iOS "+o[2].replace(/_/g,"."));var r=t,l=e.match(/MicroMessenger\/([\d\.]+)/i);t="Unknown",l&&l[1]?(t=l[1],r+=", WeChat "+t,console.info("[system]","System:",r)):console.info("[system]","System:",r),t="Unknown",t="https:"==location.protocol?"HTTPS":"http:"==location.protocol?"HTTP":location.protocol.replace(":",""),r=t;var c=e.toLowerCase().match(/ nettype\/([^ ]+)/g);t="Unknown",c&&c[0]?(c=c[0].split("/"),t=c[1],r+=", "+t,console.info("[system]","Network:",r)):console.info("[system]","Protocol:",r),console.info("[system]","UA:",e),setTimeout(function(){var e=window.performance||window.msPerformance||window.webkitPerformance;if(e&&e.timing){var t=e.timing;t.navigationStart&&console.info("[system]","navigationStart:",t.navigationStart),t.navigationStart&&t.domainLookupStart&&console.info("[system]","navigation:",t.domainLookupStart-t.navigationStart+"ms"),t.domainLookupEnd&&t.domainLookupStart&&console.info("[system]","dns:",t.domainLookupEnd-t.domainLookupStart+"ms"),t.connectEnd&&t.connectStart&&(t.connectEnd&&t.secureConnectionStart?console.info("[system]","tcp (ssl):",t.connectEnd-t.connectStart+"ms ("+(t.connectEnd-t.secureConnectionStart)+"ms)"):console.info("[system]","tcp:",t.connectEnd-t.connectStart+"ms")),t.responseStart&&t.requestStart&&console.info("[system]","request:",t.responseStart-t.requestStart+"ms"),t.responseEnd&&t.responseStart&&console.info("[system]","response:",t.responseEnd-t.responseStart+"ms"),t.domComplete&&t.domLoading&&(t.domContentLoadedEventStart&&t.domLoading?console.info("[system]","domComplete (domLoaded):",t.domComplete-t.domLoading+"ms ("+(t.domContentLoadedEventStart-t.domLoading)+"ms)"):console.info("[system]","domComplete:",t.domComplete-t.domLoading+"ms")),t.loadEventEnd&&t.loadEventStart&&console.info("[system]","loadEvent:",t.loadEventEnd-t.loadEventStart+"ms"),t.navigationStart&&t.loadEventEnd&&console.info("[system]","total (DOM):",t.loadEventEnd-t.navigationStart+"ms ("+(t.domComplete-t.navigationStart)+"ms)")}},0)}}]),t}(v["default"]);t["default"]=h,e.exports=t["default"]},function(e,t){e.exports='<div>\n  <div class="vc-log"></div>\n</div>'},function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o(5),d=i(s),u=o(4),v=n(u),f=o(18),p=i(f),h=o(27),b=i(h),g=o(28),m=i(g),y=o(29),_=i(y),w=function(e){function t(){var e;a(this,t);for(var o=arguments.length,n=Array(o),i=0;o>i;i++)n[i]=arguments[i];var l=r(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return l.$tabbox=d["default"].render(b["default"],{}),l.$header=null,l.reqList={},l.domList={},l.isReady=!1,l.isShow=!1,l.isInBottom=!0,l._open=void 0,l._send=void 0,l.mockAjax(),l}return l(t,e),c(t,[{key:"onRenderTab",value:function(e){e(this.$tabbox)}},{key:"onAddTool",value:function(e){var t=this,o=[{name:"Clear",global:!1,onClick:function(e){t.clearLog()}}];e(o)}},{key:"onReady",value:function(){var e=this;e.isReady=!0,this.renderHeader(),d["default"].delegate(d["default"].one(".vc-log",this.$tabbox),"click",".vc-group-preview",function(t){var o=this.dataset.reqid,n=this.parentNode;d["default"].hasClass(n,"vc-actived")?(d["default"].removeClass(n,"vc-actived"),e.updateRequest(o,{actived:!1})):(d["default"].addClass(n,"vc-actived"),e.updateRequest(o,{actived:!0})),t.preventDefault()});var t=d["default"].one(".vc-content");d["default"].bind(t,"scroll",function(o){e.isShow&&(t.scrollTop+t.offsetHeight>=t.scrollHeight?e.isInBottom=!0:e.isInBottom=!1)});for(var o in e.reqList)e.updateRequest(o,{})}},{key:"onRemove",value:function(){window.XMLHttpRequest&&(window.XMLHttpRequest.prototype.open=this._open,window.XMLHttpRequest.prototype.send=this._send,this._open=void 0,this._send=void 0)}},{key:"onShow",value:function(){this.isShow=!0,1==this.isInBottom&&this.scrollToBottom()}},{key:"onHide",value:function(){this.isShow=!1}},{key:"onShowConsole",value:function(){1==this.isInBottom&&this.scrollToBottom()}},{key:"scrollToBottom",value:function(){var e=d["default"].one(".vc-content");e.scrollTop=e.scrollHeight-e.offsetHeight}},{key:"clearLog",value:function(){this.reqList={};for(var e in this.domList)this.domList[e].remove(),this.domList[e]=void 0;this.domList={},this.renderHeader()}},{key:"renderHeader",value:function(){var e=Object.keys(this.reqList).length,t=d["default"].render(m["default"],{count:e}),o=d["default"].one(".vc-log",this.$tabbox);this.$header?this.$header.parentNode.replaceChild(t,this.$header):o.parentNode.insertBefore(t,o),this.$header=t}},{key:"updateRequest",value:function(e,t){var o=Object.keys(this.reqList).length,n=this.reqList[e]||{};for(var i in t)n[i]=t[i];if(this.reqList[e]=n,this.isReady){var a={id:e,url:n.url,status:n.status,method:n.method||"-",costTime:n.costTime>0?n.costTime+"ms":"-",header:n.header||null,getData:n.getData||null,postData:n.postData||null,response:null,actived:!!n.actived};switch(n.responseType){case"":case"text":if(v.isString(n.response))try{a.response=JSON.parse(n.response),a.response=JSON.stringify(a.response,null,1),a.response=v.htmlEncode(a.response)}catch(r){a.response=v.htmlEncode(n.response)}else"undefined"!=typeof n.response&&(a.response=Object.prototype.toString.call(n.response));break;case"json":"undefined"!=typeof n.response&&(a.response=JSON.stringify(n.response,null,1));break;case"blob":case"document":case"arraybuffer":default:"undefined"!=typeof n.response&&(a.response=Object.prototype.toString.call(n.response))}0==n.readyState||1==n.readyState?a.status="Pending":2==n.readyState||3==n.readyState?a.status="Loading":4==n.readyState||(a.status="Unknown");var l=d["default"].render(_["default"],a),c=this.domList[e];n.status>=400&&d["default"].addClass(d["default"].one(".vc-group-preview",l),"vc-table-row-error"),c?c.parentNode.replaceChild(l,c):d["default"].one(".vc-log",this.$tabbox).insertAdjacentElement("beforeend",l),this.domList[e]=l;var s=Object.keys(this.reqList).length;s!=o&&this.renderHeader(),this.isInBottom&&this.scrollToBottom()}}},{key:"mockAjax",value:function(){var e=window.XMLHttpRequest;if(e){var t=this,o=window.XMLHttpRequest.prototype.open,n=window.XMLHttpRequest.prototype.send;t._open=o,t._send=n,window.XMLHttpRequest.prototype.open=function(){var e=this,n=[].slice.call(arguments),i=n[0],a=n[1],r=t.getUniqueID(),l=null;e._requestID=r,e._method=i,e._url=a;var c=e.onreadystatechange||function(){},s=function(){var o=t.reqList[r]||{};if(o.readyState=e.readyState,o.status=e.status,o.responseType=e.responseType,0==e.readyState)o.startTime||(o.startTime=+new Date);else if(1==e.readyState)o.startTime||(o.startTime=+new Date);else if(2==e.readyState){o.header={};for(var n=e.getAllResponseHeaders()||"",i=n.split("\n"),a=0;a<i.length;a++){var s=i[a];if(s){var d=s.split(": "),u=d[0],v=d.slice(1).join(": ");o.header[u]=v}}}else 3==e.readyState||(4==e.readyState?(clearInterval(l),o.endTime=+new Date,o.costTime=o.endTime-(o.startTime||o.endTime),o.response=e.response):clearInterval(l));return e._noVConsole||t.updateRequest(r,o),c.apply(e,arguments)};e.onreadystatechange=s;var d=-1;return l=setInterval(function(){d!=e.readyState&&(d=e.readyState,s.call(e))},10),o.apply(e,n)},window.XMLHttpRequest.prototype.send=function(){var e=this,o=[].slice.call(arguments),i=o[0],a=t.reqList[e._requestID]||{};a.method=e._method.toUpperCase();var r=e._url.split("?");if(a.url=r.shift(),r.length>0){a.getData={},r=r.join("?"),r=r.split("&");var l=!0,c=!1,s=void 0;try{for(var d,u=r[Symbol.iterator]();!(l=(d=u.next()).done);l=!0){var f=d.value;f=f.split("="),a.getData[f[0]]=f[1]}}catch(p){c=!0,s=p}finally{try{!l&&u["return"]&&u["return"]()}finally{if(c)throw s}}}if("POST"==a.method)if(v.isString(i)){var h=i.split("&");a.postData={};var b=!0,g=!1,m=void 0;try{for(var y,_=h[Symbol.iterator]();!(b=(y=_.next()).done);b=!0){var w=y.value;w=w.split("="),a.postData[w[0]]=w[1]}}catch(p){g=!0,m=p}finally{try{!b&&_["return"]&&_["return"]()}finally{if(g)throw m}}}else v.isPlainObject(i)&&(a.postData=i);return e._noVConsole||t.updateRequest(e._requestID,a),n.apply(e,o)}}}},{key:"getUniqueID",value:function(){var e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,o="x"==e?t:3&t|8;return o.toString(16)});return e}}]),t}(p["default"]);t["default"]=w,e.exports=t["default"]},function(e,t){e.exports='<div class="vc-table">\n  <div class="vc-log"></div>\n</div>'},function(e,t){e.exports='<dl class="vc-table-row">\n  <dd class="vc-table-col vc-table-col-4">Name {{if (count > 0)}}({{count}}){{/if}}</dd>\n  <dd class="vc-table-col">Method</dd>\n  <dd class="vc-table-col">Status</dd>\n  <dd class="vc-table-col">Time</dd>\n</dl>'},function(e,t){e.exports='<div class="vc-group {{actived ? \'vc-actived\' : \'\'}}">\n  <dl class="vc-table-row vc-group-preview" data-reqid="{{id}}">\n    <dd class="vc-table-col vc-table-col-4">{{url}}</dd>\n    <dd class="vc-table-col">{{method}}</dd>\n    <dd class="vc-table-col">{{status}}</dd>\n    <dd class="vc-table-col">{{costTime}}</dd>\n  </dl>\n  <div class="vc-group-detail">\n    {{if (header !== null)}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Headers</dt>\n      </dl>\n      {{for (var key in header)}}\n      <div class="vc-table-row vc-left-border vc-small">\n        <div class="vc-table-col vc-table-col-2">{{key}}</div>\n        <div class="vc-table-col vc-table-col-4 vc-max-height-line">{{header[key]}}</div>\n      </div>\n      {{/for}}\n    </div>\n    {{/if}}\n    {{if (getData !== null)}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Query String Parameters</dt>\n      </dl>\n      {{for (var key in getData)}}\n      <div class="vc-table-row vc-left-border vc-small">\n        <div class="vc-table-col vc-table-col-2">{{key}}</div>\n        <div class="vc-table-col vc-table-col-4 vc-max-height-line">{{getData[key]}}</div>\n      </div>\n      {{/for}}\n    </div>\n    {{/if}}\n    {{if (postData !== null)}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Form Data</dt>\n      </dl>\n      {{for (var key in postData)}}\n      <div class="vc-table-row vc-left-border vc-small">\n        <div class="vc-table-col vc-table-col-2">{{key}}</div>\n        <div class="vc-table-col vc-table-col-4 vc-max-height-line">{{postData[key]}}</div>\n      </div>\n      {{/for}}\n    </div>\n    {{/if}}\n    <div>\n      <dl class="vc-table-row vc-left-border">\n        <dt class="vc-table-col vc-table-col-title">Response</dt>\n      </dl>\n      <div class="vc-table-row vc-left-border vc-small">\n        <pre class="vc-table-col vc-max-height vc-min-height">{{response || \'\'}}</pre>\n      </div>\n    </div>\n  </div>\n</div>'},function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){
for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();o(31);var s=o(18),d=i(s),u=o(33),v=i(u),f=o(34),p=i(f),h=o(4),b=(n(h),o(5)),g=i(b),m=function(e){function t(){var e;a(this,t);for(var o=arguments.length,n=Array(o),i=0;o>i;i++)n[i]=arguments[i];var l=r(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(n))),c=l;c.isInited=!1,c.node={},c.$tabbox=g["default"].render(v["default"],{}),c.nodes=[],c.activedElem={};var s=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;return c.observer=new s(function(e){for(var t=0;t<e.length;t++){var o=e[t];c._isInVConsole(o.target)||c.onMutation(o)}}),l}return l(t,e),c(t,[{key:"onRenderTab",value:function(e){e(this.$tabbox)}},{key:"onAddTool",value:function(e){var t=this,o=[{name:"Expend",global:!1,onClick:function(e){if(t.activedElem)if(g["default"].hasClass(t.activedElem,"vc-toggle"))for(var o=0;o<t.activedElem.childNodes.length;o++){var n=t.activedElem.childNodes[o];if(g["default"].hasClass(n,"vcelm-l")&&!g["default"].hasClass(n,"vcelm-noc")&&!g["default"].hasClass(n,"vc-toggle")){g["default"].one(".vcelm-node",n).click();break}}else g["default"].one(".vcelm-node",t.activedElem).click()}},{name:"Collapse",global:!1,onClick:function(e){t.activedElem&&(g["default"].hasClass(t.activedElem,"vc-toggle")?g["default"].one(".vcelm-node",t.activedElem).click():t.activedElem.parentNode&&g["default"].hasClass(t.activedElem.parentNode,"vcelm-l")&&g["default"].one(".vcelm-node",t.activedElem.parentNode).click())}}];e(o)}},{key:"onShow",value:function(){if(!this.isInited){this.isInited=!0,this.node=this.getNode(document.documentElement);var e=this.renderView(this.node,g["default"].one(".vc-log",this.$tabbox)),t=g["default"].one(".vcelm-node",e);t&&t.click();var o={attributes:!0,childList:!0,characterData:!0,subtree:!0};this.observer.observe(document.documentElement,o)}}},{key:"onRemove",value:function(){this.observer.disconnect()}},{key:"onMutation",value:function(e){switch(e.type){case"childList":e.removedNodes.length>0&&this.onChildRemove(e),e.addedNodes.length>0&&this.onChildAdd(e);break;case"attributes":this.onAttributesChange(e);break;case"characterData":this.onCharacterDataChange(e)}}},{key:"onChildRemove",value:function(e){var t=e.target,o=t.__vconsole_node;if(o){for(var n=0;n<e.removedNodes.length;n++){var i=e.removedNodes[n],a=i.__vconsole_node;a&&a.view&&a.view.parentNode.removeChild(a.view)}this.getNode(t)}}},{key:"onChildAdd",value:function(e){var t=e.target,o=t.__vconsole_node;if(o){this.getNode(t),o.view&&g["default"].removeClass(o.view,"vcelm-noc");for(var n=0;n<e.addedNodes.length;n++){var i=e.addedNodes[n],a=i.__vconsole_node;if(a)if(null!==e.nextSibling){var r=e.nextSibling.__vconsole_node;r.view&&this.renderView(a,r.view,"insertBefore")}else o.view&&(o.view.lastChild?this.renderView(a,o.view.lastChild,"insertBefore"):this.renderView(a,o.view))}}}},{key:"onAttributesChange",value:function(e){var t=e.target.__vconsole_node;t&&(t=this.getNode(e.target),t.view&&this.renderView(t,t.view,!0))}},{key:"onCharacterDataChange",value:function(e){var t=e.target.__vconsole_node;t&&(t=this.getNode(e.target),t.view&&this.renderView(t,t.view,!0))}},{key:"renderView",value:function(e,t,o){var n=this,i=new p["default"](e).get();switch(e.view=i,g["default"].delegate(i,"click",".vcelm-node",function(t){t.stopPropagation();var o=this.parentNode;if(!g["default"].hasClass(o,"vcelm-noc")){n.activedElem=o,g["default"].hasClass(o,"vc-toggle")?g["default"].removeClass(o,"vc-toggle"):g["default"].addClass(o,"vc-toggle");for(var i=-1,a=0;a<o.children.length;a++){var r=o.children[a];g["default"].hasClass(r,"vcelm-l")&&(i++,r.children.length>0||(e.childNodes[i]?n.renderView(e.childNodes[i],r,"replace"):r.style.display="none"))}}}),o){case"replace":t.parentNode.replaceChild(i,t);break;case"insertBefore":t.parentNode.insertBefore(i,t);break;default:t.appendChild(i)}return i}},{key:"getNode",value:function(e){if(!this._isIgnoredElement(e)){var t=e.__vconsole_node||{};if(t.nodeType=e.nodeType,t.nodeName=e.nodeName,t.tagName=e.tagName||"",t.textContent="",t.nodeType!=e.TEXT_NODE&&t.nodeType!=e.DOCUMENT_TYPE_NODE||(t.textContent=e.textContent),t.id=e.id||"",t.className=e.className||"",t.attributes=[],e.hasAttributes&&e.hasAttributes())for(var o=0;o<e.attributes.length;o++)t.attributes.push({name:e.attributes[o].name,value:e.attributes[o].value||""});if(t.childNodes=[],e.childNodes.length>0)for(var n=0;n<e.childNodes.length;n++){var i=this.getNode(e.childNodes[n]);i&&t.childNodes.push(i)}return e.__vconsole_node=t,t}}},{key:"_isIgnoredElement",value:function(e){return e.nodeType==e.TEXT_NODE&&""==e.textContent.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$|\n+/g,"")}},{key:"_isInVConsole",value:function(e){for(var t=e;void 0!=t;){if("__vconsole"==t.id)return!0;t=t.parentNode||void 0}return!1}}]),t}(d["default"]);t["default"]=m,e.exports=t["default"]},function(e,t,o){var n=o(32);"string"==typeof n&&(n=[[e.id,n,""]]);o(10)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,o){t=e.exports=o(9)(),t.push([e.id,'.vcelm-node{color:#183691}.vcelm-k{color:#0086b3}.vcelm-v{color:#905}.vcelm-l{padding-left:8px;position:relative;word-wrap:break-word;line-height:1}.vcelm-l.vc-toggle>.vcelm-node{display:block}.vcelm-l .vcelm-node:active{background-color:rgba(0,0,0,.15)}.vcelm-l.vcelm-noc .vcelm-node:active{background-color:transparent}.vcelm-t{white-space:pre-wrap;word-wrap:break-word}.vcelm-l .vcelm-l{display:none}.vcelm-l.vc-toggle>.vcelm-l{margin-left:4px;display:block}.vcelm-l:before{content:"";display:block;position:absolute;top:6px;left:3px;width:0;height:0;border:3px solid transparent;border-left-color:#000}.vcelm-l.vc-toggle:before{display:block;top:6px;left:0;border-top-color:#000;border-left-color:transparent}.vcelm-l.vcelm-noc:before{display:none}',""])},function(e,t){e.exports='<div>\n  <div class="vc-log"></div>\n</div>'},function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e){var t=["br","hr","img","input","link","meta"];return e=e?e.toLowerCase():"",t.indexOf(e)>-1}function l(e){return document.createTextNode(e)}function c(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),d=o(35),u=i(d),v=o(36),f=i(v),p=o(4),h=(n(p),o(5)),b=i(h),g=function(){function e(t){a(this,e),this.node=t,this.view=this._create(this.node)}return s(e,[{key:"get",value:function(){return this.view}},{key:"_create",value:function(e,t){var o=document.createElement("DIV");switch(b["default"].addClass(o,"vcelm-l"),e.nodeType){case o.ELEMENT_NODE:this._createElementNode(e,o);break;case o.TEXT_NODE:this._createTextNode(e,o);break;case o.COMMENT_NODE:case o.DOCUMENT_NODE:case o.DOCUMENT_TYPE_NODE:case o.DOCUMENT_FRAGMENT_NODE:}return o}},{key:"_createTextNode",value:function(e,t){b["default"].addClass(t,"vcelm-t vcelm-noc"),e.textContent&&t.appendChild(l(c(e.textContent)))}},{key:"_createElementNode",value:function(e,t){var o=r(e.tagName),n=o;0==e.childNodes.length&&(n=!0);var i=b["default"].render(u["default"],{node:e}),a=b["default"].render(f["default"],{node:e});if(n)b["default"].addClass(t,"vcelm-noc"),t.appendChild(i),o||t.appendChild(a);else{t.appendChild(i);for(var l=0;l<e.childNodes.length;l++){var c=document.createElement("DIV");b["default"].addClass(c,"vcelm-l"),t.appendChild(c)}o||t.appendChild(a)}}}]),e}();t["default"]=g,e.exports=t["default"]},function(e,t){e.exports='<span class="vcelm-node">&lt;{{node.tagName.toLowerCase()}}{{if (node.className || node.attributes.length)}}\n  <i class="vcelm-k">\n    {{for (var i = 0; i < node.attributes.length; i++)}}\n      {{if (node.attributes[i].value !== \'\')}}\n        {{node.attributes[i].name}}="<i class="vcelm-v">{{node.attributes[i].value}}</i>"{{else}}\n        {{node.attributes[i].name}}{{/if}}{{/for}}</i>{{/if}}&gt;</span>'},function(e,t){e.exports='<span class="vcelm-node">&lt;/{{node.tagName.toLowerCase()}}&gt;</span>'},function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function i(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o(18),d=i(s),u=o(38),v=i(u),f=o(39),p=i(f),h=o(4),b=n(h),g=o(5),m=i(g),y=function(e){function t(){var e;a(this,t);for(var o=arguments.length,n=Array(o),i=0;o>i;i++)n[i]=arguments[i];var l=r(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return l.$tabbox=m["default"].render(v["default"],{}),l.currentType="",l.typeNameMap={cookies:"Cookies",localstorage:"LocalStorage"},l}return l(t,e),c(t,[{key:"onRenderTab",value:function(e){e(this.$tabbox)}},{key:"onAddTopBar",value:function(e){for(var t=this,o=["Cookies","LocalStorage"],n=[],i=0;i<o.length;i++)n.push({name:o[i],data:{type:o[i].toLowerCase()},className:"",onClick:function(){return m["default"].hasClass(this,"vc-actived")?!1:(t.currentType=this.dataset.type,void t.renderStorage())}});n[0].className="vc-actived",e(n)}},{key:"onAddTool",value:function(e){var t=this,o=[{name:"Refresh",global:!1,onClick:function(e){t.renderStorage()}},{name:"Clear",global:!1,onClick:function(e){t.clearLog()}}];e(o)}},{key:"onReady",value:function(){}},{key:"onShow",value:function(){""==this.currentType&&(this.currentType="cookies",this.renderStorage())}},{key:"clearLog",value:function(){if(this.currentType&&window.confirm){var e=window.confirm("Remove all "+this.typeNameMap[this.currentType]+"?");if(!e)return!1}switch(this.currentType){case"cookies":this.clearCookieList();break;case"localstorage":this.clearLocalStorageList();break;default:return!1}this.renderStorage()}},{key:"renderStorage",value:function(){var e=[];switch(this.currentType){case"cookies":e=this.getCookieList();break;case"localstorage":e=this.getLocalStorageList();break;default:return!1}var t=m["default"].one(".vc-log",this.$tabbox);if(0==e.length)t.innerHTML="";else{for(var o=0;o<e.length;o++)e[o].name=b.htmlEncode(e[o].name),e[o].value=b.htmlEncode(e[o].value);t.innerHTML=m["default"].render(p["default"],{list:e},!0)}}},{key:"getCookieList",value:function(){if(!document.cookie||!navigator.cookieEnabled)return[];for(var e=[],t=document.cookie.split(";"),o=0;o<t.length;o++){var n=t[o].split("="),i=n[0].replace(/^ /,""),a=n[1];e.push({name:decodeURIComponent(i),value:decodeURIComponent(a)})}return e}},{key:"getLocalStorageList",value:function(){if(!window.localStorage)return[];try{for(var e=[],t=0;t<localStorage.length;t++){var o=localStorage.key(t),n=localStorage.getItem(o);e.push({name:o,value:n})}return e}catch(i){return[]}}},{key:"clearCookieList",value:function(){if(document.cookie&&navigator.cookieEnabled){for(var e=this.getCookieList(),t=0;t<e.length;t++)document.cookie=e[t].name+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT";this.renderStorage()}}},{key:"clearLocalStorageList",value:function(){if(window.localStorage)try{localStorage.clear(),this.renderStorage()}catch(e){alert("localStorage.clear() fail.")}}}]),t}(d["default"]);t["default"]=y,e.exports=t["default"]},function(e,t){e.exports='<div class="vc-table">\n  <div class="vc-log"></div>\n</div>'},function(e,t){e.exports='<div>\n  <dl class="vc-table-row">\n    <dd class="vc-table-col">Name</dd>\n    <dd class="vc-table-col vc-table-col-2">Value</dd>\n  </dl>\n  {{for (var i = 0; i < list.length; i++)}}\n  <dl class="vc-table-row">\n    <dd class="vc-table-col">{{list[i].name}}</dd>\n    <dd class="vc-table-col vc-table-col-2">{{list[i].value}}</dd>\n  </dl>\n  {{/for}}\n</div>'}])});
},{}],4:[function(require,module,exports) {
var global = (1,eval)("this");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
* @license PreloadJS
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2011-2015 gskinner.com, inc.
*
* Distributed under the terms of the MIT license.
* http://www.opensource.org/licenses/mit-license.html
*
* This notice shall be included in all copies or substantial portions of the Software.
*/
this.createjs = this.createjs || {}, function () {
  "use strict";
  var a = createjs.PreloadJS = createjs.PreloadJS || {};a.version = "1.0.0", a.buildDate = "Thu, 14 Sep 2017 19:47:47 GMT";
}(), this.createjs = this.createjs || {}, createjs.extend = function (a, b) {
  "use strict";
  function c() {
    this.constructor = a;
  }return c.prototype = b.prototype, a.prototype = new c();
}, this.createjs = this.createjs || {}, createjs.promote = function (a, b) {
  "use strict";
  var c = a.prototype,
      d = Object.getPrototypeOf && Object.getPrototypeOf(c) || c.__proto__;if (d) {
    c[(b += "_") + "constructor"] = d.constructor;for (var e in d) {
      c.hasOwnProperty(e) && "function" == typeof d[e] && (c[b + e] = d[e]);
    }
  }return a;
}, this.createjs = this.createjs || {}, createjs.deprecate = function (a, b) {
  "use strict";
  return function () {
    var c = "Deprecated property or method '" + b + "'. See docs for info.";return console && (console.warn ? console.warn(c) : console.log(c)), a && a.apply(this, arguments);
  };
}, this.createjs = this.createjs || {}, function () {
  "use strict";
  createjs.proxy = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 2);return function () {
      return a.apply(b, Array.prototype.slice.call(arguments, 0).concat(c));
    };
  };
}(), this.createjs = this.createjs || {}, createjs.indexOf = function (a, b) {
  "use strict";
  for (var c = 0, d = a.length; d > c; c++) {
    if (b === a[c]) return c;
  }return -1;
}, this.createjs = this.createjs || {}, function () {
  "use strict";
  function Event(a, b, c) {
    this.type = a, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!b, this.cancelable = !!c, this.timeStamp = new Date().getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1;
  }var a = Event.prototype;a.preventDefault = function () {
    this.defaultPrevented = this.cancelable && !0;
  }, a.stopPropagation = function () {
    this.propagationStopped = !0;
  }, a.stopImmediatePropagation = function () {
    this.immediatePropagationStopped = this.propagationStopped = !0;
  }, a.remove = function () {
    this.removed = !0;
  }, a.clone = function () {
    return new Event(this.type, this.bubbles, this.cancelable);
  }, a.set = function (a) {
    for (var b in a) {
      this[b] = a[b];
    }return this;
  }, a.toString = function () {
    return "[Event (type=" + this.type + ")]";
  }, createjs.Event = Event;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function ErrorEvent(a, b, c) {
    this.Event_constructor("error"), this.title = a, this.message = b, this.data = c;
  }var a = createjs.extend(ErrorEvent, createjs.Event);a.clone = function () {
    return new createjs.ErrorEvent(this.title, this.message, this.data);
  }, createjs.ErrorEvent = createjs.promote(ErrorEvent, "Event");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function EventDispatcher() {
    this._listeners = null, this._captureListeners = null;
  }var a = EventDispatcher.prototype;EventDispatcher.initialize = function (b) {
    b.addEventListener = a.addEventListener, b.on = a.on, b.removeEventListener = b.off = a.removeEventListener, b.removeAllEventListeners = a.removeAllEventListeners, b.hasEventListener = a.hasEventListener, b.dispatchEvent = a.dispatchEvent, b._dispatchEvent = a._dispatchEvent, b.willTrigger = a.willTrigger;
  }, a.addEventListener = function (a, b, c) {
    var d;d = c ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};var e = d[a];return e && this.removeEventListener(a, b, c), e = d[a], e ? e.push(b) : d[a] = [b], b;
  }, a.on = function (a, b, c, d, e, f) {
    return b.handleEvent && (c = c || b, b = b.handleEvent), c = c || this, this.addEventListener(a, function (a) {
      b.call(c, a, e), d && a.remove();
    }, f);
  }, a.removeEventListener = function (a, b, c) {
    var d = c ? this._captureListeners : this._listeners;if (d) {
      var e = d[a];if (e) for (var f = 0, g = e.length; g > f; f++) {
        if (e[f] == b) {
          1 == g ? delete d[a] : e.splice(f, 1);break;
        }
      }
    }
  }, a.off = a.removeEventListener, a.removeAllEventListeners = function (a) {
    a ? (this._listeners && delete this._listeners[a], this._captureListeners && delete this._captureListeners[a]) : this._listeners = this._captureListeners = null;
  }, a.dispatchEvent = function (a, b, c) {
    if ("string" == typeof a) {
      var d = this._listeners;if (!(b || d && d[a])) return !0;a = new createjs.Event(a, b, c);
    } else a.target && a.clone && (a = a.clone());try {
      a.target = this;
    } catch (e) {}if (a.bubbles && this.parent) {
      for (var f = this, g = [f]; f.parent;) {
        g.push(f = f.parent);
      }var h,
          i = g.length;for (h = i - 1; h >= 0 && !a.propagationStopped; h--) {
        g[h]._dispatchEvent(a, 1 + (0 == h));
      }for (h = 1; i > h && !a.propagationStopped; h++) {
        g[h]._dispatchEvent(a, 3);
      }
    } else this._dispatchEvent(a, 2);return !a.defaultPrevented;
  }, a.hasEventListener = function (a) {
    var b = this._listeners,
        c = this._captureListeners;return !!(b && b[a] || c && c[a]);
  }, a.willTrigger = function (a) {
    for (var b = this; b;) {
      if (b.hasEventListener(a)) return !0;b = b.parent;
    }return !1;
  }, a.toString = function () {
    return "[EventDispatcher]";
  }, a._dispatchEvent = function (a, b) {
    var c,
        d,
        e = 2 >= b ? this._captureListeners : this._listeners;if (a && e && (d = e[a.type]) && (c = d.length)) {
      try {
        a.currentTarget = this;
      } catch (f) {}try {
        a.eventPhase = 0 | b;
      } catch (f) {}a.removed = !1, d = d.slice();for (var g = 0; c > g && !a.immediatePropagationStopped; g++) {
        var h = d[g];h.handleEvent ? h.handleEvent(a) : h(a), a.removed && (this.off(a.type, h, 1 == b), a.removed = !1);
      }
    }2 === b && this._dispatchEvent(a, 2.1);
  }, createjs.EventDispatcher = EventDispatcher;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function ProgressEvent(a, b) {
    this.Event_constructor("progress"), this.loaded = a, this.total = null == b ? 1 : b, this.progress = 0 == b ? 0 : this.loaded / this.total;
  }var a = createjs.extend(ProgressEvent, createjs.Event);a.clone = function () {
    return new createjs.ProgressEvent(this.loaded, this.total);
  }, createjs.ProgressEvent = createjs.promote(ProgressEvent, "Event");
}(window), function () {
  function a(b, d) {
    function f(a) {
      if (f[a] !== q) return f[a];var b;if ("bug-string-char-index" == a) b = "a" != "a"[0];else if ("json" == a) b = f("json-stringify") && f("json-parse");else {
        var c,
            e = "{\"a\":[1,true,false,null,\"\\u0000\\b\\n\\f\\r\\t\"]}";if ("json-stringify" == a) {
          var i = d.stringify,
              k = "function" == typeof i && t;if (k) {
            (c = function c() {
              return 1;
            }).toJSON = c;try {
              k = "0" === i(0) && "0" === i(new g()) && '""' == i(new h()) && i(s) === q && i(q) === q && i() === q && "1" === i(c) && "[1]" == i([c]) && "[null]" == i([q]) && "null" == i(null) && "[null,null,null]" == i([q, s, null]) && i({ a: [c, !0, !1, null, "\x00\b\n\f\r	"] }) == e && "1" === i(null, c) && "[\n 1,\n 2\n]" == i([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == i(new j(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == i(new j(864e13)) && '"-000001-01-01T00:00:00.000Z"' == i(new j(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == i(new j(-1));
            } catch (l) {
              k = !1;
            }
          }b = k;
        }if ("json-parse" == a) {
          var m = d.parse;if ("function" == typeof m) try {
            if (0 === m("0") && !m(!1)) {
              c = m(e);var n = 5 == c.a.length && 1 === c.a[0];if (n) {
                try {
                  n = !m('"	"');
                } catch (l) {}if (n) try {
                  n = 1 !== m("01");
                } catch (l) {}if (n) try {
                  n = 1 !== m("1.");
                } catch (l) {}
              }
            }
          } catch (l) {
            n = !1;
          }b = n;
        }
      }return f[a] = !!b;
    }b || (b = e.Object()), d || (d = e.Object());var g = b.Number || e.Number,
        h = b.String || e.String,
        i = b.Object || e.Object,
        j = b.Date || e.Date,
        k = b.SyntaxError || e.SyntaxError,
        l = b.TypeError || e.TypeError,
        m = b.Math || e.Math,
        n = b.JSON || e.JSON;"object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n && (d.stringify = n.stringify, d.parse = n.parse);var _o,
        _p,
        q,
        r = i.prototype,
        s = r.toString,
        t = new j(-0xc782b5b800cec);try {
      t = -109252 == t.getUTCFullYear() && 0 === t.getUTCMonth() && 1 === t.getUTCDate() && 10 == t.getUTCHours() && 37 == t.getUTCMinutes() && 6 == t.getUTCSeconds() && 708 == t.getUTCMilliseconds();
    } catch (u) {}if (!f("json")) {
      var v = "[object Function]",
          w = "[object Date]",
          x = "[object Number]",
          y = "[object String]",
          z = "[object Array]",
          A = "[object Boolean]",
          B = f("bug-string-char-index");if (!t) var C = m.floor,
          D = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
          E = function E(a, b) {
        return D[b] + 365 * (a - 1970) + C((a - 1969 + (b = +(b > 1))) / 4) - C((a - 1901 + b) / 100) + C((a - 1601 + b) / 400);
      };if ((_o = r.hasOwnProperty) || (_o = function o(a) {
        var b,
            c = {};return (c.__proto__ = null, c.__proto__ = { toString: 1 }, c).toString != s ? _o = function o(a) {
          var b = this.__proto__,
              c = a in (this.__proto__ = null, this);return this.__proto__ = b, c;
        } : (b = c.constructor, _o = function o(a) {
          var c = (this.constructor || b).prototype;return a in this && !(a in c && this[a] === c[a]);
        }), c = null, _o.call(this, a);
      }), _p = function p(a, b) {
        var d,
            e,
            f,
            g = 0;(d = function d() {
          this.valueOf = 0;
        }).prototype.valueOf = 0, e = new d();for (f in e) {
          _o.call(e, f) && g++;
        }return d = e = null, g ? _p = 2 == g ? function (a, b) {
          var c,
              d = {},
              e = s.call(a) == v;for (c in a) {
            e && "prototype" == c || _o.call(d, c) || !(d[c] = 1) || !_o.call(a, c) || b(c);
          }
        } : function (a, b) {
          var c,
              d,
              e = s.call(a) == v;for (c in a) {
            e && "prototype" == c || !_o.call(a, c) || (d = "constructor" === c) || b(c);
          }(d || _o.call(a, c = "constructor")) && b(c);
        } : (e = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], _p = function p(a, b) {
          var d,
              f,
              g = s.call(a) == v,
              h = !g && "function" != typeof a.constructor && c[_typeof(a.hasOwnProperty)] && a.hasOwnProperty || _o;for (d in a) {
            g && "prototype" == d || !h.call(a, d) || b(d);
          }for (f = e.length; d = e[--f]; h.call(a, d) && b(d)) {}
        }), _p(a, b);
      }, !f("json-stringify")) {
        var F = { 92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t" },
            G = "000000",
            H = function H(a, b) {
          return (G + (b || 0)).slice(-a);
        },
            I = "\\u00",
            J = function J(a) {
          for (var b = '"', c = 0, d = a.length, e = !B || d > 10, f = e && (B ? a.split("") : a); d > c; c++) {
            var g = a.charCodeAt(c);switch (g) {case 8:case 9:case 10:case 12:case 13:case 34:case 92:
                b += F[g];break;default:
                if (32 > g) {
                  b += I + H(2, g.toString(16));break;
                }b += e ? f[c] : a.charAt(c);}
          }return b + '"';
        },
            K = function K(a, b, c, d, e, f, g) {
          var h, i, j, k, m, n, r, t, u, v, B, D, F, G, I, L;try {
            h = b[a];
          } catch (M) {}if ("object" == (typeof h === "undefined" ? "undefined" : _typeof(h)) && h) if (i = s.call(h), i != w || _o.call(h, "toJSON")) "function" == typeof h.toJSON && (i != x && i != y && i != z || _o.call(h, "toJSON")) && (h = h.toJSON(a));else if (h > -1 / 0 && 1 / 0 > h) {
            if (E) {
              for (m = C(h / 864e5), j = C(m / 365.2425) + 1970 - 1; E(j + 1, 0) <= m; j++) {}for (k = C((m - E(j, 0)) / 30.42); E(j, k + 1) <= m; k++) {}m = 1 + m - E(j, k), n = (h % 864e5 + 864e5) % 864e5, r = C(n / 36e5) % 24, t = C(n / 6e4) % 60, u = C(n / 1e3) % 60, v = n % 1e3;
            } else j = h.getUTCFullYear(), k = h.getUTCMonth(), m = h.getUTCDate(), r = h.getUTCHours(), t = h.getUTCMinutes(), u = h.getUTCSeconds(), v = h.getUTCMilliseconds();h = (0 >= j || j >= 1e4 ? (0 > j ? "-" : "+") + H(6, 0 > j ? -j : j) : H(4, j)) + "-" + H(2, k + 1) + "-" + H(2, m) + "T" + H(2, r) + ":" + H(2, t) + ":" + H(2, u) + "." + H(3, v) + "Z";
          } else h = null;if (c && (h = c.call(b, a, h)), null === h) return "null";if (i = s.call(h), i == A) return "" + h;if (i == x) return h > -1 / 0 && 1 / 0 > h ? "" + h : "null";if (i == y) return J("" + h);if ("object" == (typeof h === "undefined" ? "undefined" : _typeof(h))) {
            for (G = g.length; G--;) {
              if (g[G] === h) throw l();
            }if (g.push(h), B = [], I = f, f += e, i == z) {
              for (F = 0, G = h.length; G > F; F++) {
                D = K(F, h, c, d, e, f, g), B.push(D === q ? "null" : D);
              }L = B.length ? e ? "[\n" + f + B.join(",\n" + f) + "\n" + I + "]" : "[" + B.join(",") + "]" : "[]";
            } else _p(d || h, function (a) {
              var b = K(a, h, c, d, e, f, g);b !== q && B.push(J(a) + ":" + (e ? " " : "") + b);
            }), L = B.length ? e ? "{\n" + f + B.join(",\n" + f) + "\n" + I + "}" : "{" + B.join(",") + "}" : "{}";return g.pop(), L;
          }
        };d.stringify = function (a, b, d) {
          var e, f, g, h;if (c[typeof b === "undefined" ? "undefined" : _typeof(b)] && b) if ((h = s.call(b)) == v) f = b;else if (h == z) {
            g = {};for (var i, j = 0, k = b.length; k > j; i = b[j++], h = s.call(i), (h == y || h == x) && (g[i] = 1)) {}
          }if (d) if ((h = s.call(d)) == x) {
            if ((d -= d % 1) > 0) for (e = "", d > 10 && (d = 10); e.length < d; e += " ") {}
          } else h == y && (e = d.length <= 10 ? d : d.slice(0, 10));return K("", (i = {}, i[""] = a, i), f, g, e, "", []);
        };
      }if (!f("json-parse")) {
        var L,
            M,
            N = h.fromCharCode,
            O = { 92: "\\", 34: '"', 47: "/", 98: "\b", 116: "	", 110: "\n", 102: "\f", 114: "\r" },
            P = function P() {
          throw L = M = null, k();
        },
            Q = function Q() {
          for (var a, b, c, d, e, f = M, g = f.length; g > L;) {
            switch (e = f.charCodeAt(L)) {case 9:case 10:case 13:case 32:
                L++;break;case 123:case 125:case 91:case 93:case 58:case 44:
                return a = B ? f.charAt(L) : f[L], L++, a;case 34:
                for (a = "@", L++; g > L;) {
                  if (e = f.charCodeAt(L), 32 > e) P();else if (92 == e) switch (e = f.charCodeAt(++L)) {case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:
                      a += O[e], L++;break;case 117:
                      for (b = ++L, c = L + 4; c > L; L++) {
                        e = f.charCodeAt(L), e >= 48 && 57 >= e || e >= 97 && 102 >= e || e >= 65 && 70 >= e || P();
                      }a += N("0x" + f.slice(b, L));break;default:
                      P();} else {
                    if (34 == e) break;for (e = f.charCodeAt(L), b = L; e >= 32 && 92 != e && 34 != e;) {
                      e = f.charCodeAt(++L);
                    }a += f.slice(b, L);
                  }
                }if (34 == f.charCodeAt(L)) return L++, a;P();default:
                if (b = L, 45 == e && (d = !0, e = f.charCodeAt(++L)), e >= 48 && 57 >= e) {
                  for (48 == e && (e = f.charCodeAt(L + 1), e >= 48 && 57 >= e) && P(), d = !1; g > L && (e = f.charCodeAt(L), e >= 48 && 57 >= e); L++) {}if (46 == f.charCodeAt(L)) {
                    for (c = ++L; g > c && (e = f.charCodeAt(c), e >= 48 && 57 >= e); c++) {}c == L && P(), L = c;
                  }if (e = f.charCodeAt(L), 101 == e || 69 == e) {
                    for (e = f.charCodeAt(++L), (43 == e || 45 == e) && L++, c = L; g > c && (e = f.charCodeAt(c), e >= 48 && 57 >= e); c++) {}c == L && P(), L = c;
                  }return +f.slice(b, L);
                }if (d && P(), "true" == f.slice(L, L + 4)) return L += 4, !0;if ("false" == f.slice(L, L + 5)) return L += 5, !1;if ("null" == f.slice(L, L + 4)) return L += 4, null;P();}
          }return "$";
        },
            R = function R(a) {
          var b, c;if ("$" == a && P(), "string" == typeof a) {
            if ("@" == (B ? a.charAt(0) : a[0])) return a.slice(1);if ("[" == a) {
              for (b = []; a = Q(), "]" != a; c || (c = !0)) {
                c && ("," == a ? (a = Q(), "]" == a && P()) : P()), "," == a && P(), b.push(R(a));
              }return b;
            }if ("{" == a) {
              for (b = {}; a = Q(), "}" != a; c || (c = !0)) {
                c && ("," == a ? (a = Q(), "}" == a && P()) : P()), ("," == a || "string" != typeof a || "@" != (B ? a.charAt(0) : a[0]) || ":" != Q()) && P(), b[a.slice(1)] = R(Q());
              }return b;
            }P();
          }return a;
        },
            S = function S(a, b, c) {
          var d = T(a, b, c);d === q ? delete a[b] : a[b] = d;
        },
            T = function T(a, b, c) {
          var d,
              e = a[b];if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e) if (s.call(e) == z) for (d = e.length; d--;) {
            S(e, d, c);
          } else _p(e, function (a) {
            S(e, a, c);
          });return c.call(a, b, e);
        };d.parse = function (a, b) {
          var c, d;return L = 0, M = "" + a, c = R(Q()), "$" != Q() && P(), L = M = null, b && s.call(b) == v ? T((d = {}, d[""] = c, d), "", b) : c;
        };
      }
    }return d.runInContext = a, d;
  }var b = "function" == typeof define && define.amd,
      c = { "function": !0, object: !0 },
      d = c[typeof exports === "undefined" ? "undefined" : _typeof(exports)] && exports && !exports.nodeType && exports,
      e = c[typeof window === "undefined" ? "undefined" : _typeof(window)] && window || this,
      f = d && c[typeof module === "undefined" ? "undefined" : _typeof(module)] && module && !module.nodeType && "object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) && global;if (!f || f.global !== f && f.window !== f && f.self !== f || (e = f), d && !b) a(e, d);else {
    var g = e.JSON,
        h = e.JSON3,
        i = !1,
        j = a(e, e.JSON3 = { noConflict: function noConflict() {
        return i || (i = !0, e.JSON = g, e.JSON3 = h, g = h = null), j;
      } });e.JSON = { parse: j.parse, stringify: j.stringify };
  }b && define(function () {
    return j;
  });
}.call(this), function () {
  var a = {};a.a = function () {
    return a.el("a");
  }, a.svg = function () {
    return a.el("svg");
  }, a.object = function () {
    return a.el("object");
  }, a.image = function () {
    return a.el("image");
  }, a.img = function () {
    return a.el("img");
  }, a.style = function () {
    return a.el("style");
  }, a.link = function () {
    return a.el("link");
  }, a.script = function () {
    return a.el("script");
  }, a.audio = function () {
    return a.el("audio");
  }, a.video = function () {
    return a.el("video");
  }, a.text = function (a) {
    return document.createTextNode(a);
  }, a.el = function (a) {
    return document.createElement(a);
  }, createjs.Elements = a;
}(), function () {
  var a = {};a.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i, a.RELATIVE_PATT = /^[.\/]*?\//i, a.EXTENSION_PATT = /\/?[^\/]+\.(\w{1,5})$/i, a.parseURI = function (b) {
    var c = { absolute: !1, relative: !1, protocol: null, hostname: null, port: null, pathname: null, search: null, hash: null, host: null };if (null == b) return c;var d = createjs.Elements.a();d.href = b;for (var e in c) {
      e in d && (c[e] = d[e]);
    }var f = b.indexOf("?");f > -1 && (b = b.substr(0, f));var g;return a.ABSOLUTE_PATT.test(b) ? c.absolute = !0 : a.RELATIVE_PATT.test(b) && (c.relative = !0), (g = b.match(a.EXTENSION_PATT)) && (c.extension = g[1].toLowerCase()), c;
  }, a.formatQueryString = function (a, b) {
    if (null == a) throw new Error("You must specify data.");var c = [];for (var d in a) {
      c.push(d + "=" + escape(a[d]));
    }return b && (c = c.concat(b)), c.join("&");
  }, a.buildURI = function (a, b) {
    if (null == b) return a;var c = [],
        d = a.indexOf("?");if (-1 != d) {
      var e = a.slice(d + 1);c = c.concat(e.split("&"));
    }return -1 != d ? a.slice(0, d) + "?" + this.formatQueryString(b, c) : a + "?" + this.formatQueryString(b, c);
  }, a.isCrossDomain = function (a) {
    var b = createjs.Elements.a();b.href = a.src;var c = createjs.Elements.a();c.href = location.href;var d = "" != b.hostname && (b.port != c.port || b.protocol != c.protocol || b.hostname != c.hostname);return d;
  }, a.isLocal = function (a) {
    var b = createjs.Elements.a();return b.href = a.src, "" == b.hostname && "file:" == b.protocol;
  }, createjs.URLUtils = a;
}(), function () {
  var a = { container: null };a.appendToHead = function (b) {
    a.getHead().appendChild(b);
  }, a.appendToBody = function (b) {
    if (null == a.container) {
      a.container = document.createElement("div"), a.container.id = "preloadjs-container";var c = a.container.style;c.visibility = "hidden", c.position = "absolute", c.width = a.container.style.height = "10px", c.overflow = "hidden", c.transform = c.msTransform = c.webkitTransform = c.oTransform = "translate(-10px, -10px)", a.getBody().appendChild(a.container);
    }a.container.appendChild(b);
  }, a.getHead = function () {
    return document.head || document.getElementsByTagName("head")[0];
  }, a.getBody = function () {
    return document.body || document.getElementsByTagName("body")[0];
  }, a.removeChild = function (a) {
    a.parent && a.parent.removeChild(a);
  }, a.isImageTag = function (a) {
    return a instanceof HTMLImageElement;
  }, a.isAudioTag = function (a) {
    return window.HTMLAudioElement ? a instanceof HTMLAudioElement : !1;
  }, a.isVideoTag = function (a) {
    return window.HTMLVideoElement ? a instanceof HTMLVideoElement : !1;
  }, createjs.DomUtils = a;
}(), function () {
  var a = {};a.parseXML = function (a) {
    var b = null;try {
      if (window.DOMParser) {
        var c = new DOMParser();b = c.parseFromString(a, "text/xml");
      }
    } catch (d) {}if (!b) try {
      b = new ActiveXObject("Microsoft.XMLDOM"), b.async = !1, b.loadXML(a);
    } catch (d) {
      b = null;
    }return b;
  }, a.parseJSON = function (a) {
    if (null == a) return null;try {
      return JSON.parse(a);
    } catch (b) {
      throw b;
    }
  }, createjs.DataUtils = a;
}(), this.createjs = this.createjs || {}, function () {
  var a = {};a.BINARY = "binary", a.CSS = "css", a.FONT = "font", a.FONTCSS = "fontcss", a.IMAGE = "image", a.JAVASCRIPT = "javascript", a.JSON = "json", a.JSONP = "jsonp", a.MANIFEST = "manifest", a.SOUND = "sound", a.VIDEO = "video", a.SPRITESHEET = "spritesheet", a.SVG = "svg", a.TEXT = "text", a.XML = "xml", createjs.Types = a;
}(), this.createjs = this.createjs || {}, function () {
  var a = {};a.POST = "POST", a.GET = "GET", createjs.Methods = a;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function LoadItem() {
    this.src = null, this.type = null, this.id = null, this.maintainOrder = !1, this.callback = null, this.data = null, this.method = createjs.Methods.GET, this.values = null, this.headers = null, this.withCredentials = !1, this.mimeType = null, this.crossOrigin = null, this.loadTimeout = b.LOAD_TIMEOUT_DEFAULT;
  }var a = LoadItem.prototype = {},
      b = LoadItem;b.LOAD_TIMEOUT_DEFAULT = 8e3, b.create = function (a) {
    if ("string" == typeof a) {
      var c = new LoadItem();return c.src = a, c;
    }if (a instanceof b) return a;if (a instanceof Object && a.src) return null == a.loadTimeout && (a.loadTimeout = b.LOAD_TIMEOUT_DEFAULT), a;throw new Error("Type not recognized.");
  }, a.set = function (a) {
    for (var b in a) {
      this[b] = a[b];
    }return this;
  }, createjs.LoadItem = b;
}(), function () {
  var a = {};a.isBinary = function (a) {
    switch (a) {case createjs.Types.IMAGE:case createjs.Types.BINARY:
        return !0;default:
        return !1;}
  }, a.isText = function (a) {
    switch (a) {case createjs.Types.TEXT:case createjs.Types.JSON:case createjs.Types.MANIFEST:case createjs.Types.XML:case createjs.Types.CSS:case createjs.Types.SVG:case createjs.Types.JAVASCRIPT:case createjs.Types.SPRITESHEET:
        return !0;default:
        return !1;}
  }, a.getTypeByExtension = function (a) {
    if (null == a) return createjs.Types.TEXT;switch (a.toLowerCase()) {case "jpeg":case "jpg":case "gif":case "png":case "webp":case "bmp":
        return createjs.Types.IMAGE;case "ogg":case "mp3":case "webm":
        return createjs.Types.SOUND;case "mp4":case "webm":case "ts":
        return createjs.Types.VIDEO;case "json":
        return createjs.Types.JSON;case "xml":
        return createjs.Types.XML;case "css":
        return createjs.Types.CSS;case "js":
        return createjs.Types.JAVASCRIPT;case "svg":
        return createjs.Types.SVG;default:
        return createjs.Types.TEXT;}
  }, createjs.RequestUtils = a;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function AbstractLoader(a, b, c) {
    this.EventDispatcher_constructor(), this.loaded = !1, this.canceled = !1, this.progress = 0, this.type = c, this.resultFormatter = null, this._item = a ? createjs.LoadItem.create(a) : null, this._preferXHR = b, this._result = null, this._rawResult = null, this._loadedItems = null, this._tagSrcAttribute = null, this._tag = null;
  }var a = createjs.extend(AbstractLoader, createjs.EventDispatcher),
      b = AbstractLoader;try {
    Object.defineProperties(b, { POST: { get: createjs.deprecate(function () {
          return createjs.Methods.POST;
        }, "AbstractLoader.POST") }, GET: { get: createjs.deprecate(function () {
          return createjs.Methods.GET;
        }, "AbstractLoader.GET") }, BINARY: { get: createjs.deprecate(function () {
          return createjs.Types.BINARY;
        }, "AbstractLoader.BINARY") }, CSS: { get: createjs.deprecate(function () {
          return createjs.Types.CSS;
        }, "AbstractLoader.CSS") }, FONT: { get: createjs.deprecate(function () {
          return createjs.Types.FONT;
        }, "AbstractLoader.FONT") }, FONTCSS: { get: createjs.deprecate(function () {
          return createjs.Types.FONTCSS;
        }, "AbstractLoader.FONTCSS") }, IMAGE: { get: createjs.deprecate(function () {
          return createjs.Types.IMAGE;
        }, "AbstractLoader.IMAGE") }, JAVASCRIPT: { get: createjs.deprecate(function () {
          return createjs.Types.JAVASCRIPT;
        }, "AbstractLoader.JAVASCRIPT") }, JSON: { get: createjs.deprecate(function () {
          return createjs.Types.JSON;
        }, "AbstractLoader.JSON") }, JSONP: { get: createjs.deprecate(function () {
          return createjs.Types.JSONP;
        }, "AbstractLoader.JSONP") }, MANIFEST: { get: createjs.deprecate(function () {
          return createjs.Types.MANIFEST;
        }, "AbstractLoader.MANIFEST") }, SOUND: { get: createjs.deprecate(function () {
          return createjs.Types.SOUND;
        }, "AbstractLoader.SOUND") }, VIDEO: { get: createjs.deprecate(function () {
          return createjs.Types.VIDEO;
        }, "AbstractLoader.VIDEO") }, SPRITESHEET: { get: createjs.deprecate(function () {
          return createjs.Types.SPRITESHEET;
        }, "AbstractLoader.SPRITESHEET") }, SVG: { get: createjs.deprecate(function () {
          return createjs.Types.SVG;
        }, "AbstractLoader.SVG") }, TEXT: { get: createjs.deprecate(function () {
          return createjs.Types.TEXT;
        }, "AbstractLoader.TEXT") }, XML: { get: createjs.deprecate(function () {
          return createjs.Types.XML;
        }, "AbstractLoader.XML") } });
  } catch (c) {}a.getItem = function () {
    return this._item;
  }, a.getResult = function (a) {
    return a ? this._rawResult : this._result;
  }, a.getTag = function () {
    return this._tag;
  }, a.setTag = function (a) {
    this._tag = a;
  }, a.load = function () {
    this._createRequest(), this._request.on("complete", this, this), this._request.on("progress", this, this), this._request.on("loadStart", this, this), this._request.on("abort", this, this), this._request.on("timeout", this, this), this._request.on("error", this, this);var a = new createjs.Event("initialize");a.loader = this._request, this.dispatchEvent(a), this._request.load();
  }, a.cancel = function () {
    this.canceled = !0, this.destroy();
  }, a.destroy = function () {
    this._request && (this._request.removeAllEventListeners(), this._request.destroy()), this._request = null, this._item = null, this._rawResult = null, this._result = null, this._loadItems = null, this.removeAllEventListeners();
  }, a.getLoadedItems = function () {
    return this._loadedItems;
  }, a._createRequest = function () {
    this._request = this._preferXHR ? new createjs.XHRRequest(this._item) : new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute);
  }, a._createTag = function () {
    return null;
  }, a._sendLoadStart = function () {
    this._isCanceled() || this.dispatchEvent("loadstart");
  }, a._sendProgress = function (a) {
    if (!this._isCanceled()) {
      var b = null;"number" == typeof a ? (this.progress = a, b = new createjs.ProgressEvent(this.progress)) : (b = a, this.progress = a.loaded / a.total, b.progress = this.progress, (isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0)), this.hasEventListener("progress") && this.dispatchEvent(b);
    }
  }, a._sendComplete = function () {
    if (!this._isCanceled()) {
      this.loaded = !0;var a = new createjs.Event("complete");a.rawResult = this._rawResult, null != this._result && (a.result = this._result), this.dispatchEvent(a);
    }
  }, a._sendError = function (a) {
    !this._isCanceled() && this.hasEventListener("error") && (null == a && (a = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")), this.dispatchEvent(a));
  }, a._isCanceled = function () {
    return null == window.createjs || this.canceled ? !0 : !1;
  }, a.resultFormatter = null, a.handleEvent = function (a) {
    switch (a.type) {case "complete":
        this._rawResult = a.target._response;var b = this.resultFormatter && this.resultFormatter(this);b instanceof Function ? b.call(this, createjs.proxy(this._resultFormatSuccess, this), createjs.proxy(this._resultFormatFailed, this)) : (this._result = b || this._rawResult, this._sendComplete());break;case "progress":
        this._sendProgress(a);break;case "error":
        this._sendError(a);break;case "loadstart":
        this._sendLoadStart();break;case "abort":case "timeout":
        this._isCanceled() || this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_" + a.type.toUpperCase() + "_ERROR"));}
  }, a._resultFormatSuccess = function (a) {
    this._result = a, this._sendComplete();
  }, a._resultFormatFailed = function (a) {
    this._sendError(a);
  }, a.toString = function () {
    return "[PreloadJS AbstractLoader]";
  }, createjs.AbstractLoader = createjs.promote(AbstractLoader, "EventDispatcher");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function AbstractMediaLoader(a, b, c) {
    this.AbstractLoader_constructor(a, b, c), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.on("initialize", this._updateXHR, this);
  }var a = createjs.extend(AbstractMediaLoader, createjs.AbstractLoader);a.load = function () {
    this._tag || (this._tag = this._createTag(this._item.src)), this._tag.preload = "auto", this._tag.load(), this.AbstractLoader_load();
  }, a._createTag = function () {}, a._createRequest = function () {
    this._request = this._preferXHR ? new createjs.XHRRequest(this._item) : new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute);
  }, a._updateXHR = function (a) {
    a.loader.setResponseType && a.loader.setResponseType("blob");
  }, a._formatResult = function (a) {
    if (this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._preferXHR) {
      var b = window.URL || window.webkitURL,
          c = a.getResult(!0);a.getTag().src = b.createObjectURL(c);
    }return a.getTag();
  }, createjs.AbstractMediaLoader = createjs.promote(AbstractMediaLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  var AbstractRequest = function AbstractRequest(a) {
    this._item = a;
  },
      a = createjs.extend(AbstractRequest, createjs.EventDispatcher);a.load = function () {}, a.destroy = function () {}, a.cancel = function () {}, createjs.AbstractRequest = createjs.promote(AbstractRequest, "EventDispatcher");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function TagRequest(a, b, c) {
    this.AbstractRequest_constructor(a), this._tag = b, this._tagSrcAttribute = c, this._loadedHandler = createjs.proxy(this._handleTagComplete, this), this._addedToDOM = !1;
  }var a = createjs.extend(TagRequest, createjs.AbstractRequest);a.load = function () {
    this._tag.onload = createjs.proxy(this._handleTagComplete, this), this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this), this._tag.onerror = createjs.proxy(this._handleError, this);var a = new createjs.Event("initialize");a.loader = this._tag, this.dispatchEvent(a), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag[this._tagSrcAttribute] = this._item.src, null == this._tag.parentNode && (createjs.DomUtils.appendToBody(this._tag), this._addedToDOM = !0);
  }, a.destroy = function () {
    this._clean(), this._tag = null, this.AbstractRequest_destroy();
  }, a._handleReadyStateChange = function () {
    clearTimeout(this._loadTimeout);var a = this._tag;("loaded" == a.readyState || "complete" == a.readyState) && this._handleTagComplete();
  }, a._handleError = function () {
    this._clean(), this.dispatchEvent("error");
  }, a._handleTagComplete = function () {
    this._rawResult = this._tag, this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult, this._clean(), this.dispatchEvent("complete");
  }, a._handleTimeout = function () {
    this._clean(), this.dispatchEvent(new createjs.Event("timeout"));
  }, a._clean = function () {
    this._tag.onload = null, this._tag.onreadystatechange = null, this._tag.onerror = null, this._addedToDOM && null != this._tag.parentNode && this._tag.parentNode.removeChild(this._tag), clearTimeout(this._loadTimeout);
  }, a._handleStalled = function () {}, createjs.TagRequest = createjs.promote(TagRequest, "AbstractRequest");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function MediaTagRequest(a, b, c) {
    this.AbstractRequest_constructor(a), this._tag = b, this._tagSrcAttribute = c, this._loadedHandler = createjs.proxy(this._handleTagComplete, this);
  }var a = createjs.extend(MediaTagRequest, createjs.TagRequest);a.load = function () {
    var a = createjs.proxy(this._handleStalled, this);this._stalledCallback = a;var b = createjs.proxy(this._handleProgress, this);this._handleProgress = b, this._tag.addEventListener("stalled", a), this._tag.addEventListener("progress", b), this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, !1), this.TagRequest_load();
  }, a._handleReadyStateChange = function () {
    clearTimeout(this._loadTimeout);var a = this._tag;("loaded" == a.readyState || "complete" == a.readyState) && this._handleTagComplete();
  }, a._handleStalled = function () {}, a._handleProgress = function (a) {
    if (a && !(a.loaded > 0 && 0 == a.total)) {
      var b = new createjs.ProgressEvent(a.loaded, a.total);this.dispatchEvent(b);
    }
  }, a._clean = function () {
    this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.removeEventListener("stalled", this._stalledCallback), this._tag.removeEventListener("progress", this._progressCallback), this.TagRequest__clean();
  }, createjs.MediaTagRequest = createjs.promote(MediaTagRequest, "TagRequest");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function XHRRequest(a) {
    this.AbstractRequest_constructor(a), this._request = null, this._loadTimeout = null, this._xhrLevel = 1, this._response = null, this._rawResponse = null, this._canceled = !1, this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this), this._handleProgressProxy = createjs.proxy(this._handleProgress, this), this._handleAbortProxy = createjs.proxy(this._handleAbort, this), this._handleErrorProxy = createjs.proxy(this._handleError, this), this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this), this._handleLoadProxy = createjs.proxy(this._handleLoad, this), this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this), !this._createXHR(a);
  }var a = createjs.extend(XHRRequest, createjs.AbstractRequest);XHRRequest.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], a.getResult = function (a) {
    return a && this._rawResponse ? this._rawResponse : this._response;
  }, a.cancel = function () {
    this.canceled = !0, this._clean(), this._request.abort();
  }, a.load = function () {
    if (null == this._request) return void this._handleError();null != this._request.addEventListener ? (this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1), this._request.addEventListener("progress", this._handleProgressProxy, !1), this._request.addEventListener("abort", this._handleAbortProxy, !1), this._request.addEventListener("error", this._handleErrorProxy, !1), this._request.addEventListener("timeout", this._handleTimeoutProxy, !1), this._request.addEventListener("load", this._handleLoadProxy, !1), this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, !1)) : (this._request.onloadstart = this._handleLoadStartProxy, this._request.onprogress = this._handleProgressProxy, this._request.onabort = this._handleAbortProxy, this._request.onerror = this._handleErrorProxy, this._request.ontimeout = this._handleTimeoutProxy, this._request.onload = this._handleLoadProxy, this._request.onreadystatechange = this._handleReadyStateChangeProxy), 1 == this._xhrLevel && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout));try {
      this._item.values ? this._request.send(createjs.URLUtils.formatQueryString(this._item.values)) : this._request.send();
    } catch (a) {
      this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, a));
    }
  }, a.setResponseType = function (a) {
    "blob" === a && (a = window.URL ? "blob" : "arraybuffer", this._responseType = a), this._request.responseType = a;
  }, a.getAllResponseHeaders = function () {
    return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null;
  }, a.getResponseHeader = function (a) {
    return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(a) : null;
  }, a._handleProgress = function (a) {
    if (a && !(a.loaded > 0 && 0 == a.total)) {
      var b = new createjs.ProgressEvent(a.loaded, a.total);this.dispatchEvent(b);
    }
  }, a._handleLoadStart = function () {
    clearTimeout(this._loadTimeout), this.dispatchEvent("loadstart");
  }, a._handleAbort = function (a) {
    this._clean(), this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, a));
  }, a._handleError = function (a) {
    this._clean(), this.dispatchEvent(new createjs.ErrorEvent(a.message));
  }, a._handleReadyStateChange = function () {
    4 == this._request.readyState && this._handleLoad();
  }, a._handleLoad = function () {
    if (!this.loaded) {
      this.loaded = !0;var a = this._checkError();if (a) return void this._handleError(a);if (this._response = this._getResponse(), "arraybuffer" === this._responseType) try {
        this._response = new Blob([this._response]);
      } catch (b) {
        if (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, "TypeError" === b.name && window.BlobBuilder) {
          var c = new BlobBuilder();c.append(this._response), this._response = c.getBlob();
        }
      }this._clean(), this.dispatchEvent(new createjs.Event("complete"));
    }
  }, a._handleTimeout = function (a) {
    this._clean(), this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, a));
  }, a._checkError = function () {
    var a = parseInt(this._request.status);return a >= 400 && 599 >= a ? new Error(a) : 0 == a && /^https?:/.test(location.protocol) ? new Error(0) : null;
  }, a._getResponse = function () {
    if (null != this._response) return this._response;
    if (null != this._request.response) return this._request.response;try {
      if (null != this._request.responseText) return this._request.responseText;
    } catch (a) {}try {
      if (null != this._request.responseXML) return this._request.responseXML;
    } catch (a) {}return null;
  }, a._createXHR = function (a) {
    var b = createjs.URLUtils.isCrossDomain(a),
        c = {},
        d = null;if (window.XMLHttpRequest) d = new XMLHttpRequest(), b && void 0 === d.withCredentials && window.XDomainRequest && (d = new XDomainRequest());else {
      for (var e = 0, f = s.ACTIVEX_VERSIONS.length; f > e; e++) {
        var g = s.ACTIVEX_VERSIONS[e];try {
          d = new ActiveXObject(g);break;
        } catch (h) {}
      }if (null == d) return !1;
    }null == a.mimeType && createjs.RequestUtils.isText(a.type) && (a.mimeType = "text/plain; charset=utf-8"), a.mimeType && d.overrideMimeType && d.overrideMimeType(a.mimeType), this._xhrLevel = "string" == typeof d.responseType ? 2 : 1;var i = null;if (i = a.method == createjs.Methods.GET ? createjs.URLUtils.buildURI(a.src, a.values) : a.src, d.open(a.method || createjs.Methods.GET, i, !0), b && d instanceof XMLHttpRequest && 1 == this._xhrLevel && (c.Origin = location.origin), a.values && a.method == createjs.Methods.POST && (c["Content-Type"] = "application/x-www-form-urlencoded"), b || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest"), a.headers) for (var j in a.headers) {
      c[j] = a.headers[j];
    }for (j in c) {
      d.setRequestHeader(j, c[j]);
    }return d instanceof XMLHttpRequest && void 0 !== a.withCredentials && (d.withCredentials = a.withCredentials), this._request = d, !0;
  }, a._clean = function () {
    clearTimeout(this._loadTimeout), null != this._request.removeEventListener ? (this._request.removeEventListener("loadstart", this._handleLoadStartProxy), this._request.removeEventListener("progress", this._handleProgressProxy), this._request.removeEventListener("abort", this._handleAbortProxy), this._request.removeEventListener("error", this._handleErrorProxy), this._request.removeEventListener("timeout", this._handleTimeoutProxy), this._request.removeEventListener("load", this._handleLoadProxy), this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)) : (this._request.onloadstart = null, this._request.onprogress = null, this._request.onabort = null, this._request.onerror = null, this._request.ontimeout = null, this._request.onload = null, this._request.onreadystatechange = null);
  }, a.toString = function () {
    return "[PreloadJS XHRRequest]";
  }, createjs.XHRRequest = createjs.promote(XHRRequest, "AbstractRequest");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function LoadQueue(a, b, c) {
    this.AbstractLoader_constructor(), this._plugins = [], this._typeCallbacks = {}, this._extensionCallbacks = {}, this.next = null, this.maintainScriptOrder = !0, this.stopOnError = !1, this._maxConnections = 1, this._availableLoaders = [createjs.FontLoader, createjs.ImageLoader, createjs.JavaScriptLoader, createjs.CSSLoader, createjs.JSONLoader, createjs.JSONPLoader, createjs.SoundLoader, createjs.ManifestLoader, createjs.SpriteSheetLoader, createjs.XMLLoader, createjs.SVGLoader, createjs.BinaryLoader, createjs.VideoLoader, createjs.TextLoader], this._defaultLoaderLength = this._availableLoaders.length, this.init(a, b, c);
  }var a = createjs.extend(LoadQueue, createjs.AbstractLoader),
      b = LoadQueue;try {
    Object.defineProperties(b, { POST: { get: createjs.deprecate(function () {
          return createjs.Methods.POST;
        }, "AbstractLoader.POST") }, GET: { get: createjs.deprecate(function () {
          return createjs.Methods.GET;
        }, "AbstractLoader.GET") }, BINARY: { get: createjs.deprecate(function () {
          return createjs.Types.BINARY;
        }, "AbstractLoader.BINARY") }, CSS: { get: createjs.deprecate(function () {
          return createjs.Types.CSS;
        }, "AbstractLoader.CSS") }, FONT: { get: createjs.deprecate(function () {
          return createjs.Types.FONT;
        }, "AbstractLoader.FONT") }, FONTCSS: { get: createjs.deprecate(function () {
          return createjs.Types.FONTCSS;
        }, "AbstractLoader.FONTCSS") }, IMAGE: { get: createjs.deprecate(function () {
          return createjs.Types.IMAGE;
        }, "AbstractLoader.IMAGE") }, JAVASCRIPT: { get: createjs.deprecate(function () {
          return createjs.Types.JAVASCRIPT;
        }, "AbstractLoader.JAVASCRIPT") }, JSON: { get: createjs.deprecate(function () {
          return createjs.Types.JSON;
        }, "AbstractLoader.JSON") }, JSONP: { get: createjs.deprecate(function () {
          return createjs.Types.JSONP;
        }, "AbstractLoader.JSONP") }, MANIFEST: { get: createjs.deprecate(function () {
          return createjs.Types.MANIFEST;
        }, "AbstractLoader.MANIFEST") }, SOUND: { get: createjs.deprecate(function () {
          return createjs.Types.SOUND;
        }, "AbstractLoader.SOUND") }, VIDEO: { get: createjs.deprecate(function () {
          return createjs.Types.VIDEO;
        }, "AbstractLoader.VIDEO") }, SPRITESHEET: { get: createjs.deprecate(function () {
          return createjs.Types.SPRITESHEET;
        }, "AbstractLoader.SPRITESHEET") }, SVG: { get: createjs.deprecate(function () {
          return createjs.Types.SVG;
        }, "AbstractLoader.SVG") }, TEXT: { get: createjs.deprecate(function () {
          return createjs.Types.TEXT;
        }, "AbstractLoader.TEXT") }, XML: { get: createjs.deprecate(function () {
          return createjs.Types.XML;
        }, "AbstractLoader.XML") } });
  } catch (c) {}a.init = function (a, b, c) {
    this.preferXHR = !0, this._preferXHR = !0, this.setPreferXHR(a), this._paused = !1, this._basePath = b, this._crossOrigin = c, this._loadStartWasDispatched = !1, this._currentlyLoadingScript = null, this._currentLoads = [], this._loadQueue = [], this._loadQueueBackup = [], this._loadItemsById = {}, this._loadItemsBySrc = {}, this._loadedResults = {}, this._loadedRawResults = {}, this._numItems = 0, this._numItemsLoaded = 0, this._scriptOrder = [], this._loadedScripts = [], this._lastProgress = 0 / 0;
  }, a.registerLoader = function (a) {
    if (!a || !a.canLoadItem) throw new Error("loader is of an incorrect type.");if (-1 != this._availableLoaders.indexOf(a)) throw new Error("loader already exists.");this._availableLoaders.unshift(a);
  }, a.unregisterLoader = function (a) {
    var b = this._availableLoaders.indexOf(a);-1 != b && b < this._defaultLoaderLength - 1 && this._availableLoaders.splice(b, 1);
  }, a.setPreferXHR = function (a) {
    return this.preferXHR = 0 != a && null != window.XMLHttpRequest, this.preferXHR;
  }, a.removeAll = function () {
    this.remove();
  }, a.remove = function (a) {
    var b = null;if (a && !Array.isArray(a)) b = [a];else if (a) b = a;else if (arguments.length > 0) return;var c = !1;if (b) {
      for (; b.length;) {
        var d = b.pop(),
            e = this.getResult(d);for (f = this._loadQueue.length - 1; f >= 0; f--) {
          if (g = this._loadQueue[f].getItem(), g.id == d || g.src == d) {
            this._loadQueue.splice(f, 1)[0].cancel();break;
          }
        }for (f = this._loadQueueBackup.length - 1; f >= 0; f--) {
          if (g = this._loadQueueBackup[f].getItem(), g.id == d || g.src == d) {
            this._loadQueueBackup.splice(f, 1)[0].cancel();break;
          }
        }if (e) this._disposeItem(this.getItem(d));else for (var f = this._currentLoads.length - 1; f >= 0; f--) {
          var g = this._currentLoads[f].getItem();if (g.id == d || g.src == d) {
            this._currentLoads.splice(f, 1)[0].cancel(), c = !0;break;
          }
        }
      }c && this._loadNext();
    } else {
      this.close();for (var h in this._loadItemsById) {
        this._disposeItem(this._loadItemsById[h]);
      }this.init(this.preferXHR, this._basePath);
    }
  }, a.reset = function () {
    this.close();for (var a in this._loadItemsById) {
      this._disposeItem(this._loadItemsById[a]);
    }for (var b = [], c = 0, d = this._loadQueueBackup.length; d > c; c++) {
      b.push(this._loadQueueBackup[c].getItem());
    }this.loadManifest(b, !1);
  }, a.installPlugin = function (a) {
    if (null != a && null != a.getPreloadHandlers) {
      this._plugins.push(a);var b = a.getPreloadHandlers();if (b.scope = a, null != b.types) for (var c = 0, d = b.types.length; d > c; c++) {
        this._typeCallbacks[b.types[c]] = b;
      }if (null != b.extensions) for (c = 0, d = b.extensions.length; d > c; c++) {
        this._extensionCallbacks[b.extensions[c]] = b;
      }
    }
  }, a.setMaxConnections = function (a) {
    this._maxConnections = a, !this._paused && this._loadQueue.length > 0 && this._loadNext();
  }, a.loadFile = function (a, b, c) {
    if (null == a) {
      var d = new createjs.ErrorEvent("PRELOAD_NO_FILE");return void this._sendError(d);
    }this._addItem(a, null, c), this.setPaused(b !== !1 ? !1 : !0);
  }, a.loadManifest = function (a, c, d) {
    var e = null,
        f = null;if (Array.isArray(a)) {
      if (0 == a.length) {
        var g = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");return void this._sendError(g);
      }e = a;
    } else if ("string" == typeof a) e = [{ src: a, type: b.MANIFEST }];else {
      if ("object" != (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        var g = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");return void this._sendError(g);
      }if (void 0 !== a.src) {
        if (null == a.type) a.type = b.MANIFEST;else if (a.type != b.MANIFEST) {
          var g = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");this._sendError(g);
        }e = [a];
      } else void 0 !== a.manifest && (e = a.manifest, f = a.path);
    }for (var h = 0, i = e.length; i > h; h++) {
      this._addItem(e[h], f, d);
    }this.setPaused(c !== !1 ? !1 : !0);
  }, a.load = function () {
    this.setPaused(!1);
  }, a.getItem = function (a) {
    return this._loadItemsById[a] || this._loadItemsBySrc[a];
  }, a.getResult = function (a, b) {
    var c = this._loadItemsById[a] || this._loadItemsBySrc[a];if (null == c) return null;var d = c.id;return b && this._loadedRawResults[d] ? this._loadedRawResults[d] : this._loadedResults[d];
  }, a.getItems = function (a) {
    var b = [];for (var c in this._loadItemsById) {
      var d = this._loadItemsById[c],
          e = this.getResult(c);(a !== !0 || null != e) && b.push({ item: d, result: e, rawResult: this.getResult(c, !0) });
    }return b;
  }, a.setPaused = function (a) {
    this._paused = a, this._paused || this._loadNext();
  }, a.close = function () {
    for (; this._currentLoads.length;) {
      this._currentLoads.pop().cancel();
    }this._scriptOrder.length = 0, this._loadedScripts.length = 0, this.loadStartWasDispatched = !1, this._itemCount = 0, this._lastProgress = 0 / 0;
  }, a._addItem = function (a, b, c) {
    var d = this._createLoadItem(a, b, c);if (null != d) {
      var e = this._createLoader(d);null != e && ("plugins" in e && (e.plugins = this._plugins), d._loader = e, this._loadQueue.push(e), this._loadQueueBackup.push(e), this._numItems++, this._updateProgress(), (this.maintainScriptOrder && d.type == createjs.Types.JAVASCRIPT || d.maintainOrder === !0) && (this._scriptOrder.push(d), this._loadedScripts.push(null)));
    }
  }, a._createLoadItem = function (a, b, c) {
    var d = createjs.LoadItem.create(a);if (null == d) return null;var e = "",
        f = c || this._basePath;if (d.src instanceof Object) {
      if (!d.type) return null;if (b) {
        e = b;var g = createjs.URLUtils.parseURI(b);null == f || g.absolute || g.relative || (e = f + e);
      } else null != f && (e = f);
    } else {
      var h = createjs.URLUtils.parseURI(d.src);h.extension && (d.ext = h.extension), null == d.type && (d.type = createjs.RequestUtils.getTypeByExtension(d.ext));var i = d.src;if (!h.absolute && !h.relative) if (b) {
        e = b;var g = createjs.URLUtils.parseURI(b);i = b + i, null == f || g.absolute || g.relative || (e = f + e);
      } else null != f && (e = f);d.src = e + d.src;
    }d.path = e, (void 0 === d.id || null === d.id || "" === d.id) && (d.id = i);var j = this._typeCallbacks[d.type] || this._extensionCallbacks[d.ext];if (j) {
      var k = j.callback.call(j.scope, d, this);if (k === !1) return null;k === !0 || null != k && (d._loader = k), h = createjs.URLUtils.parseURI(d.src), null != h.extension && (d.ext = h.extension);
    }return this._loadItemsById[d.id] = d, this._loadItemsBySrc[d.src] = d, null == d.crossOrigin && (d.crossOrigin = this._crossOrigin), d;
  }, a._createLoader = function (a) {
    if (null != a._loader) return a._loader;for (var b = this.preferXHR, c = 0; c < this._availableLoaders.length; c++) {
      var d = this._availableLoaders[c];if (d && d.canLoadItem(a)) return new d(a, b);
    }return null;
  }, a._loadNext = function () {
    if (!this._paused) {
      this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0), this._numItems == this._numItemsLoaded ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1;for (var a = 0; a < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); a++) {
        var b = this._loadQueue[a];this._canStartLoad(b) && (this._loadQueue.splice(a, 1), a--, this._loadItem(b));
      }
    }
  }, a._loadItem = function (a) {
    a.on("fileload", this._handleFileLoad, this), a.on("progress", this._handleProgress, this), a.on("complete", this._handleFileComplete, this), a.on("error", this._handleError, this), a.on("fileerror", this._handleFileError, this), this._currentLoads.push(a), this._sendFileStart(a.getItem()), a.load();
  }, a._handleFileLoad = function (a) {
    a.target = null, this.dispatchEvent(a);
  }, a._handleFileError = function (a) {
    var b = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, a.item);this._sendError(b);
  }, a._handleError = function (a) {
    var b = a.target;this._numItemsLoaded++, this._finishOrderedItem(b, !0), this._updateProgress();var c = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, b.getItem());this._sendError(c), this.stopOnError ? this.setPaused(!0) : (this._removeLoadItem(b), this._cleanLoadItem(b), this._loadNext());
  }, a._handleFileComplete = function (a) {
    var b = a.target,
        c = b.getItem(),
        d = b.getResult();this._loadedResults[c.id] = d;var e = b.getResult(!0);null != e && e !== d && (this._loadedRawResults[c.id] = e), this._saveLoadedItems(b), this._removeLoadItem(b), this._finishOrderedItem(b) || this._processFinishedLoad(c, b), this._cleanLoadItem(b);
  }, a._saveLoadedItems = function (a) {
    var b = a.getLoadedItems();if (null !== b) for (var c = 0; c < b.length; c++) {
      var d = b[c].item;this._loadItemsBySrc[d.src] = d, this._loadItemsById[d.id] = d, this._loadedResults[d.id] = b[c].result, this._loadedRawResults[d.id] = b[c].rawResult;
    }
  }, a._finishOrderedItem = function (a, b) {
    var c = a.getItem();if (this.maintainScriptOrder && c.type == createjs.Types.JAVASCRIPT || c.maintainOrder) {
      a instanceof createjs.JavaScriptLoader && (this._currentlyLoadingScript = !1);var d = createjs.indexOf(this._scriptOrder, c);return -1 == d ? !1 : (this._loadedScripts[d] = b === !0 ? !0 : c, this._checkScriptLoadOrder(), !0);
    }return !1;
  }, a._checkScriptLoadOrder = function () {
    for (var a = this._loadedScripts.length, b = 0; a > b; b++) {
      var c = this._loadedScripts[b];if (null === c) break;if (c !== !0) {
        var d = this._loadedResults[c.id];c.type == createjs.Types.JAVASCRIPT && createjs.DomUtils.appendToHead(d);var e = c._loader;this._processFinishedLoad(c, e), this._loadedScripts[b] = !0;
      }
    }
  }, a._processFinishedLoad = function (a, b) {
    if (this._numItemsLoaded++, !this.maintainScriptOrder && a.type == createjs.Types.JAVASCRIPT) {
      var c = b.getTag();createjs.DomUtils.appendToHead(c);
    }this._updateProgress(), this._sendFileComplete(a, b), this._loadNext();
  }, a._canStartLoad = function (a) {
    if (!this.maintainScriptOrder || a.preferXHR) return !0;var b = a.getItem();if (b.type != createjs.Types.JAVASCRIPT) return !0;if (this._currentlyLoadingScript) return !1;for (var c = this._scriptOrder.indexOf(b), d = 0; c > d;) {
      var e = this._loadedScripts[d];if (null == e) return !1;d++;
    }return this._currentlyLoadingScript = !0, !0;
  }, a._removeLoadItem = function (a) {
    for (var b = this._currentLoads.length, c = 0; b > c; c++) {
      if (this._currentLoads[c] == a) {
        this._currentLoads.splice(c, 1);break;
      }
    }
  }, a._cleanLoadItem = function (a) {
    var b = a.getItem();b && delete b._loader;
  }, a._handleProgress = function (a) {
    var b = a.target;this._sendFileProgress(b.getItem(), b.progress), this._updateProgress();
  }, a._updateProgress = function () {
    var a = this._numItemsLoaded / this._numItems,
        b = this._numItems - this._numItemsLoaded;if (b > 0) {
      for (var c = 0, d = 0, e = this._currentLoads.length; e > d; d++) {
        c += this._currentLoads[d].progress;
      }a += c / b * (b / this._numItems);
    }this._lastProgress != a && (this._sendProgress(a), this._lastProgress = a);
  }, a._disposeItem = function (a) {
    delete this._loadedResults[a.id], delete this._loadedRawResults[a.id], delete this._loadItemsById[a.id], delete this._loadItemsBySrc[a.src];
  }, a._sendFileProgress = function (a, b) {
    if (!this._isCanceled() && !this._paused && this.hasEventListener("fileprogress")) {
      var c = new createjs.Event("fileprogress");c.progress = b, c.loaded = b, c.total = 1, c.item = a, this.dispatchEvent(c);
    }
  }, a._sendFileComplete = function (a, b) {
    if (!this._isCanceled() && !this._paused) {
      var c = new createjs.Event("fileload");c.loader = b, c.item = a, c.result = this._loadedResults[a.id], c.rawResult = this._loadedRawResults[a.id], a.completeHandler && a.completeHandler(c), this.hasEventListener("fileload") && this.dispatchEvent(c);
    }
  }, a._sendFileStart = function (a) {
    var b = new createjs.Event("filestart");b.item = a, this.hasEventListener("filestart") && this.dispatchEvent(b);
  }, a.toString = function () {
    return "[PreloadJS LoadQueue]";
  }, createjs.LoadQueue = createjs.promote(LoadQueue, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function TextLoader(a) {
    this.AbstractLoader_constructor(a, !0, createjs.Types.TEXT);
  }var a = (createjs.extend(TextLoader, createjs.AbstractLoader), TextLoader);a.canLoadItem = function (a) {
    return a.type == createjs.Types.TEXT;
  }, createjs.TextLoader = createjs.promote(TextLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function BinaryLoader(a) {
    this.AbstractLoader_constructor(a, !0, createjs.Types.BINARY), this.on("initialize", this._updateXHR, this);
  }var a = createjs.extend(BinaryLoader, createjs.AbstractLoader),
      b = BinaryLoader;b.canLoadItem = function (a) {
    return a.type == createjs.Types.BINARY;
  }, a._updateXHR = function (a) {
    a.loader.setResponseType("arraybuffer");
  }, createjs.BinaryLoader = createjs.promote(BinaryLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function CSSLoader(a, b) {
    this.AbstractLoader_constructor(a, b, createjs.Types.CSS), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "href", this._tag = b ? createjs.Elements.style() : createjs.Elements.link(), this._tag.rel = "stylesheet", this._tag.type = "text/css";
  }var a = createjs.extend(CSSLoader, createjs.AbstractLoader),
      b = CSSLoader;b.canLoadItem = function (a) {
    return a.type == createjs.Types.CSS;
  }, a._formatResult = function (a) {
    if (this._preferXHR) {
      var b = a.getTag();if (b.styleSheet) b.styleSheet.cssText = a.getResult(!0);else {
        var c = createjs.Elements.text(a.getResult(!0));b.appendChild(c);
      }
    } else b = this._tag;return createjs.DomUtils.appendToHead(b), b;
  }, createjs.CSSLoader = createjs.promote(CSSLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function FontLoader(a, b) {
    this.AbstractLoader_constructor(a, b, a.type), this._faces = {}, this._watched = [], this._count = 0, this._watchInterval = null, this._loadTimeout = null, this._injectCSS = void 0 === a.injectCSS ? !0 : a.injectCSS, this.dispatchEvent("initialize");
  }var a = createjs.extend(FontLoader, createjs.AbstractLoader);FontLoader.canLoadItem = function (a) {
    return a.type == createjs.Types.FONT || a.type == createjs.Types.FONTCSS;
  }, FontLoader.sampleText = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ", FontLoader._ctx = document.createElement("canvas").getContext("2d"), FontLoader._referenceFonts = ["serif", "monospace"], FontLoader.WEIGHT_REGEX = /[- ._]*(thin|normal|book|regular|medium|black|heavy|[1-9]00|(?:extra|ultra|semi|demi)?[- ._]*(?:light|bold))[- ._]*/gi, FontLoader.STYLE_REGEX = /[- ._]*(italic|oblique)[- ._]*/gi, FontLoader.FONT_FORMAT = { woff2: "woff2", woff: "woff", ttf: "truetype", otf: "truetype" }, FontLoader.FONT_WEIGHT = { thin: 100, extralight: 200, ultralight: 200, light: 300, semilight: 300, demilight: 300, book: "normal", regular: "normal", semibold: 600, demibold: 600, extrabold: 800, ultrabold: 800, black: 900, heavy: 900 }, FontLoader.WATCH_DURATION = 10, a.load = function () {
    if (this.type == createjs.Types.FONTCSS) {
      var a = this._watchCSS();if (!a) return void this.AbstractLoader_load();
    } else if (this._item.src instanceof Array) this._watchFontArray();else {
      var b = this._defFromSrc(this._item.src);this._watchFont(b), this._injectStyleTag(this._cssFromDef(b));
    }this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this.dispatchEvent("loadstart");
  }, a._handleTimeout = function () {
    this._stopWatching(), this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT"));
  }, a._createRequest = function () {
    return this._request;
  }, a.handleEvent = function (a) {
    switch (a.type) {case "complete":
        this._rawResult = a.target._response, this._result = !0, this._parseCSS(this._rawResult);break;case "error":
        this._stopWatching(), this.AbstractLoader_handleEvent(a);}
  }, a._watchCSS = function () {
    var a = this._item.src;return a instanceof HTMLStyleElement && (this._injectCSS && !a.parentNode && (document.head || document.getElementsByTagName("head")[0]).appendChild(a), this._injectCSS = !1, a = "\n" + a.textContent), -1 !== a.search(/\n|\r|@font-face/i) ? (this._parseCSS(a), !0) : (this._request = new createjs.XHRRequest(this._item), !1);
  }, a._parseCSS = function (a) {
    for (var b = /@font-face\s*\{([^}]+)}/g;;) {
      var c = b.exec(a);if (!c) break;this._watchFont(this._parseFontFace(c[1]));
    }this._injectStyleTag(a);
  }, a._watchFontArray = function () {
    for (var a, b = this._item.src, c = "", d = b.length - 1; d >= 0; d--) {
      var e = b[d];a = "string" == typeof e ? this._defFromSrc(e) : this._defFromObj(e), this._watchFont(a), c += this._cssFromDef(a) + "\n";
    }this._injectStyleTag(c);
  }, a._injectStyleTag = function (a) {
    if (this._injectCSS) {
      var b = document.head || document.getElementsByTagName("head")[0],
          c = document.createElement("style");c.type = "text/css", c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(document.createTextNode(a)), b.appendChild(c);
    }
  }, a._parseFontFace = function (a) {
    var b = this._getCSSValue(a, "font-family"),
        c = this._getCSSValue(a, "src");return b && c ? this._defFromObj({ family: b, src: c, style: this._getCSSValue(a, "font-style"), weight: this._getCSSValue(a, "font-weight") }) : null;
  }, a._watchFont = function (a) {
    a && !this._faces[a.id] && (this._faces[a.id] = a, this._watched.push(a), this._count++, this._calculateReferenceSizes(a), this._startWatching());
  }, a._startWatching = function () {
    null == this._watchInterval && (this._watchInterval = setInterval(createjs.proxy(this._watch, this), FontLoader.WATCH_DURATION));
  }, a._stopWatching = function () {
    clearInterval(this._watchInterval), clearTimeout(this._loadTimeout), this._watchInterval = null;
  }, a._watch = function () {
    for (var a = this._watched, b = FontLoader._referenceFonts, c = a.length, d = c - 1; d >= 0; d--) {
      for (var e = a[d], f = e.refs, g = f.length - 1; g >= 0; g--) {
        var h = this._getTextWidth(e.family + "," + b[g], e.weight, e.style);if (h != f[g]) {
          var i = new createjs.Event("fileload");e.type = "font-family", i.item = e, this.dispatchEvent(i), a.splice(d, 1);break;
        }
      }
    }if (c !== a.length) {
      var i = new createjs.ProgressEvent(this._count - a.length, this._count);this.dispatchEvent(i);
    }0 === c && (this._stopWatching(), this._sendComplete());
  }, a._calculateReferenceSizes = function (a) {
    for (var b = FontLoader._referenceFonts, c = a.refs = [], d = 0; d < b.length; d++) {
      c[d] = this._getTextWidth(b[d], a.weight, a.style);
    }
  }, a._defFromSrc = function (a) {
    var b,
        c = /[- ._]+/g,
        d = a,
        e = null;b = d.search(/[?#]/), -1 !== b && (d = d.substr(0, b)), b = d.lastIndexOf("."), -1 !== b && (e = d.substr(b + 1), d = d.substr(0, b)), b = d.lastIndexOf("/"), -1 !== b && (d = d.substr(b + 1));var f = d,
        g = f.match(FontLoader.WEIGHT_REGEX);g && (g = g[0], f = f.replace(g, ""), g = g.replace(c, "").toLowerCase());var h = d.match(FontLoader.STYLE_REGEX);h && (f = f.replace(h[0], ""), h = "italic"), f = f.replace(c, "");var i = "local('" + d.replace(c, " ") + "'), url('" + a + "')",
        j = FontLoader.FONT_FORMAT[e];return j && (i += " format('" + j + "')"), this._defFromObj({ family: f, weight: FontLoader.FONT_WEIGHT[g] || g, style: h, src: i });
  }, a._defFromObj = function (a) {
    var b = { family: a.family, src: a.src, style: a.style || "normal", weight: a.weight || "normal" };return b.id = b.family + ";" + b.style + ";" + b.weight, b;
  }, a._cssFromDef = function (a) {
    return "@font-face {\n	font-family: '" + a.family + "';\n	font-style: " + a.style + ";\n	font-weight: " + a.weight + ";\n	src: " + a.src + ";\n}";
  }, a._getTextWidth = function (a, b, c) {
    var d = FontLoader._ctx;return d.font = c + " " + b + " 72px " + a, d.measureText(FontLoader.sampleText).width;
  }, a._getCSSValue = function (a, b) {
    var c = new RegExp(b + ":s*([^;}]+?)s*[;}]"),
        d = c.exec(a);return d && d[1] ? d[1] : null;
  }, createjs.FontLoader = createjs.promote(FontLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function ImageLoader(a, b) {
    this.AbstractLoader_constructor(a, b, createjs.Types.IMAGE), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", createjs.DomUtils.isImageTag(a) ? this._tag = a : createjs.DomUtils.isImageTag(a.src) ? this._tag = a.src : createjs.DomUtils.isImageTag(a.tag) && (this._tag = a.tag), null != this._tag ? this._preferXHR = !1 : this._tag = createjs.Elements.img(), this.on("initialize", this._updateXHR, this);
  }var a = createjs.extend(ImageLoader, createjs.AbstractLoader),
      b = ImageLoader;b.canLoadItem = function (a) {
    return a.type == createjs.Types.IMAGE;
  }, a.load = function () {
    if ("" != this._tag.src && this._tag.complete) return void this._sendComplete();var a = this._item.crossOrigin;1 == a && (a = "Anonymous"), null == a || createjs.URLUtils.isLocal(this._item) || (this._tag.crossOrigin = a), this.AbstractLoader_load();
  }, a._updateXHR = function (a) {
    a.loader.mimeType = "text/plain; charset=x-user-defined-binary", a.loader.setResponseType && a.loader.setResponseType("blob");
  }, a._formatResult = function () {
    return this._formatImage;
  }, a._formatImage = function (a, b) {
    var c = this._tag,
        d = window.URL || window.webkitURL;if (this._preferXHR) {
      if (d) {
        var e = d.createObjectURL(this.getResult(!0));c.src = e, c.addEventListener("load", this._cleanUpURL, !1), c.addEventListener("error", this._cleanUpURL, !1);
      } else c.src = this._item.src;
    } else ;c.complete ? a(c) : (c.onload = createjs.proxy(function () {
      a(this._tag), c.onload = c.onerror = null;
    }, this), c.onerror = createjs.proxy(function (a) {
      b(new createjs.ErrorEvent("IMAGE_FORMAT", null, a)), c.onload = c.onerror = null;
    }, this));
  }, a._cleanUpURL = function (a) {
    var b = window.URL || window.webkitURL;b.revokeObjectURL(a.target.src);
  }, createjs.ImageLoader = createjs.promote(ImageLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function JavaScriptLoader(a, b) {
    this.AbstractLoader_constructor(a, b, createjs.Types.JAVASCRIPT), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.setTag(createjs.Elements.script());
  }var a = createjs.extend(JavaScriptLoader, createjs.AbstractLoader),
      b = JavaScriptLoader;b.canLoadItem = function (a) {
    return a.type == createjs.Types.JAVASCRIPT;
  }, a._formatResult = function (a) {
    var b = a.getTag();return this._preferXHR && (b.text = a.getResult(!0)), b;
  }, createjs.JavaScriptLoader = createjs.promote(JavaScriptLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function JSONLoader(a) {
    this.AbstractLoader_constructor(a, !0, createjs.Types.JSON), this.resultFormatter = this._formatResult;
  }var a = createjs.extend(JSONLoader, createjs.AbstractLoader),
      b = JSONLoader;b.canLoadItem = function (a) {
    return a.type == createjs.Types.JSON;
  }, a._formatResult = function (a) {
    var b = null;try {
      b = createjs.DataUtils.parseJSON(a.getResult(!0));
    } catch (c) {
      var d = new createjs.ErrorEvent("JSON_FORMAT", null, c);return this._sendError(d), c;
    }return b;
  }, createjs.JSONLoader = createjs.promote(JSONLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function JSONPLoader(a) {
    this.AbstractLoader_constructor(a, !1, createjs.Types.JSONP), this.setTag(createjs.Elements.script()), this.getTag().type = "text/javascript";
  }var a = createjs.extend(JSONPLoader, createjs.AbstractLoader),
      b = JSONPLoader;b.canLoadItem = function (a) {
    return a.type == createjs.Types.JSONP;
  }, a.cancel = function () {
    this.AbstractLoader_cancel(), this._dispose();
  }, a.load = function () {
    if (null == this._item.callback) throw new Error("callback is required for loading JSONP requests.");if (null != window[this._item.callback]) throw new Error("JSONP callback '" + this._item.callback + "' already exists on window. You need to specify a different callback or re-name the current one.");window[this._item.callback] = createjs.proxy(this._handleLoad, this), createjs.DomUtils.appendToBody(this._tag), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag.src = this._item.src;
  }, a._handleLoad = function (a) {
    this._result = this._rawResult = a, this._sendComplete(), this._dispose();
  }, a._handleTimeout = function () {
    this._dispose(), this.dispatchEvent(new createjs.ErrorEvent("timeout"));
  }, a._dispose = function () {
    createjs.DomUtils.removeChild(this._tag), delete window[this._item.callback], clearTimeout(this._loadTimeout);
  }, createjs.JSONPLoader = createjs.promote(JSONPLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function ManifestLoader(a, b) {
    this.AbstractLoader_constructor(a, b, createjs.Types.MANIFEST), this.plugins = null, this._manifestQueue = null;
  }var a = createjs.extend(ManifestLoader, createjs.AbstractLoader),
      b = ManifestLoader;b.MANIFEST_PROGRESS = .25, b.canLoadItem = function (a) {
    return a.type == createjs.Types.MANIFEST;
  }, a.load = function () {
    this.AbstractLoader_load();
  }, a._createRequest = function () {
    var a = this._item.callback;this._request = null != a ? new createjs.JSONPLoader(this._item) : new createjs.JSONLoader(this._item);
  }, a.handleEvent = function (a) {
    switch (a.type) {case "complete":
        return this._rawResult = a.target.getResult(!0), this._result = a.target.getResult(), this._sendProgress(b.MANIFEST_PROGRESS), void this._loadManifest(this._result);case "progress":
        return a.loaded *= b.MANIFEST_PROGRESS, this.progress = a.loaded / a.total, (isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0), void this._sendProgress(a);}this.AbstractLoader_handleEvent(a);
  }, a.destroy = function () {
    this.AbstractLoader_destroy(), this._manifestQueue.close();
  }, a._loadManifest = function (a) {
    if (a && a.manifest) {
      var b = this._manifestQueue = new createjs.LoadQueue(this._preferXHR);b.on("fileload", this._handleManifestFileLoad, this), b.on("progress", this._handleManifestProgress, this), b.on("complete", this._handleManifestComplete, this, !0), b.on("error", this._handleManifestError, this, !0);for (var c = 0, d = this.plugins.length; d > c; c++) {
        b.installPlugin(this.plugins[c]);
      }b.loadManifest(a);
    } else this._sendComplete();
  }, a._handleManifestFileLoad = function (a) {
    a.target = null, this.dispatchEvent(a);
  }, a._handleManifestComplete = function () {
    this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete();
  }, a._handleManifestProgress = function (a) {
    this.progress = a.progress * (1 - b.MANIFEST_PROGRESS) + b.MANIFEST_PROGRESS, this._sendProgress(this.progress);
  }, a._handleManifestError = function (a) {
    var b = new createjs.Event("fileerror");b.item = a.data, this.dispatchEvent(b);
  }, createjs.ManifestLoader = createjs.promote(ManifestLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function SoundLoader(a, b) {
    this.AbstractMediaLoader_constructor(a, b, createjs.Types.SOUND), createjs.DomUtils.isAudioTag(a) ? this._tag = a : createjs.DomUtils.isAudioTag(a.src) ? this._tag = a : createjs.DomUtils.isAudioTag(a.tag) && (this._tag = createjs.DomUtils.isAudioTag(a) ? a : a.src), null != this._tag && (this._preferXHR = !1);
  }var a = createjs.extend(SoundLoader, createjs.AbstractMediaLoader),
      b = SoundLoader;b.canLoadItem = function (a) {
    return a.type == createjs.Types.SOUND;
  }, a._createTag = function (a) {
    var b = createjs.Elements.audio();return b.autoplay = !1, b.preload = "none", b.src = a, b;
  }, createjs.SoundLoader = createjs.promote(SoundLoader, "AbstractMediaLoader");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function VideoLoader(a, b) {
    this.AbstractMediaLoader_constructor(a, b, createjs.Types.VIDEO), createjs.DomUtils.isVideoTag(a) || createjs.DomUtils.isVideoTag(a.src) ? (this.setTag(createjs.DomUtils.isVideoTag(a) ? a : a.src), this._preferXHR = !1) : this.setTag(this._createTag());
  }var a = createjs.extend(VideoLoader, createjs.AbstractMediaLoader),
      b = VideoLoader;a._createTag = function () {
    return createjs.Elements.video();
  }, b.canLoadItem = function (a) {
    return a.type == createjs.Types.VIDEO;
  }, createjs.VideoLoader = createjs.promote(VideoLoader, "AbstractMediaLoader");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function SpriteSheetLoader(a, b) {
    this.AbstractLoader_constructor(a, b, createjs.Types.SPRITESHEET), this._manifestQueue = null;
  }var a = createjs.extend(SpriteSheetLoader, createjs.AbstractLoader),
      b = SpriteSheetLoader;b.SPRITESHEET_PROGRESS = .25, b.canLoadItem = function (a) {
    return a.type == createjs.Types.SPRITESHEET;
  }, a.destroy = function () {
    this.AbstractLoader_destroy(), this._manifestQueue.close();
  }, a._createRequest = function () {
    var a = this._item.callback;this._request = null != a ? new createjs.JSONPLoader(this._item) : new createjs.JSONLoader(this._item);
  }, a.handleEvent = function (a) {
    switch (a.type) {case "complete":
        return this._rawResult = a.target.getResult(!0), this._result = a.target.getResult(), this._sendProgress(b.SPRITESHEET_PROGRESS), void this._loadManifest(this._result);case "progress":
        return a.loaded *= b.SPRITESHEET_PROGRESS, this.progress = a.loaded / a.total, (isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0), void this._sendProgress(a);}this.AbstractLoader_handleEvent(a);
  }, a._loadManifest = function (a) {
    if (a && a.images) {
      var b = this._manifestQueue = new createjs.LoadQueue(this._preferXHR, this._item.path, this._item.crossOrigin);b.on("complete", this._handleManifestComplete, this, !0), b.on("fileload", this._handleManifestFileLoad, this), b.on("progress", this._handleManifestProgress, this), b.on("error", this._handleManifestError, this, !0), b.loadManifest(a.images);
    }
  }, a._handleManifestFileLoad = function (a) {
    var b = a.result;if (null != b) {
      var c = this.getResult().images,
          d = c.indexOf(a.item.src);c[d] = b;
    }
  }, a._handleManifestComplete = function () {
    this._result = new createjs.SpriteSheet(this._result), this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete();
  }, a._handleManifestProgress = function (a) {
    this.progress = a.progress * (1 - b.SPRITESHEET_PROGRESS) + b.SPRITESHEET_PROGRESS, this._sendProgress(this.progress);
  }, a._handleManifestError = function (a) {
    var b = new createjs.Event("fileerror");b.item = a.data, this.dispatchEvent(b);
  }, createjs.SpriteSheetLoader = createjs.promote(SpriteSheetLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function SVGLoader(a, b) {
    this.AbstractLoader_constructor(a, b, createjs.Types.SVG), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "data", b ? this.setTag(createjs.Elements.svg()) : (this.setTag(createjs.Elements.object()), this.getTag().type = "image/svg+xml");
  }var a = createjs.extend(SVGLoader, createjs.AbstractLoader),
      b = SVGLoader;b.canLoadItem = function (a) {
    return a.type == createjs.Types.SVG;
  }, a._formatResult = function (a) {
    var b = createjs.DataUtils.parseXML(a.getResult(!0)),
        c = a.getTag();if (!this._preferXHR && document.body.contains(c) && document.body.removeChild(c), null != b.documentElement) {
      var d = b.documentElement;return document.importNode && (d = document.importNode(d, !0)), c.appendChild(d), c;
    }return b;
  }, createjs.SVGLoader = createjs.promote(SVGLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function XMLLoader(a) {
    this.AbstractLoader_constructor(a, !0, createjs.Types.XML), this.resultFormatter = this._formatResult;
  }var a = createjs.extend(XMLLoader, createjs.AbstractLoader),
      b = XMLLoader;b.canLoadItem = function (a) {
    return a.type == createjs.Types.XML;
  }, a._formatResult = function (a) {
    return createjs.DataUtils.parseXML(a.getResult(!0));
  }, createjs.XMLLoader = createjs.promote(XMLLoader, "AbstractLoader");
}();
},{}],5:[function(require,module,exports) {
/*!
* @license SoundJS
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2011-2015 gskinner.com, inc.
*
* Distributed under the terms of the MIT license.
* http://www.opensource.org/licenses/mit-license.html
*
* This notice shall be included in all copies or substantial portions of the Software.
*/

/**!
 * SoundJS FlashAudioPlugin also includes swfobject (http://code.google.com/p/swfobject/)
 */

this.createjs = this.createjs || {}, function () {
  var a = createjs.SoundJS = createjs.SoundJS || {};a.version = "1.0.0", a.buildDate = "Thu, 12 Oct 2017 16:34:05 GMT";
}(), this.createjs = this.createjs || {}, createjs.extend = function (a, b) {
  "use strict";
  function c() {
    this.constructor = a;
  }return c.prototype = b.prototype, a.prototype = new c();
}, this.createjs = this.createjs || {}, createjs.promote = function (a, b) {
  "use strict";
  var c = a.prototype,
      d = Object.getPrototypeOf && Object.getPrototypeOf(c) || c.__proto__;if (d) {
    c[(b += "_") + "constructor"] = d.constructor;for (var e in d) {
      c.hasOwnProperty(e) && "function" == typeof d[e] && (c[b + e] = d[e]);
    }
  }return a;
}, this.createjs = this.createjs || {}, createjs.deprecate = function (a, b) {
  "use strict";
  return function () {
    var c = "Deprecated property or method '" + b + "'. See docs for info.";return console && (console.warn ? console.warn(c) : console.log(c)), a && a.apply(this, arguments);
  };
}, this.createjs = this.createjs || {}, createjs.indexOf = function (a, b) {
  "use strict";
  for (var c = 0, d = a.length; d > c; c++) {
    if (b === a[c]) return c;
  }return -1;
}, this.createjs = this.createjs || {}, function () {
  "use strict";
  createjs.proxy = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 2);return function () {
      return a.apply(b, Array.prototype.slice.call(arguments, 0).concat(c));
    };
  };
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function BrowserDetect() {
    throw "BrowserDetect cannot be instantiated";
  }var a = BrowserDetect.agent = window.navigator.userAgent;BrowserDetect.isWindowPhone = a.indexOf("IEMobile") > -1 || a.indexOf("Windows Phone") > -1, BrowserDetect.isFirefox = a.indexOf("Firefox") > -1, BrowserDetect.isOpera = null != window.opera, BrowserDetect.isChrome = a.indexOf("Chrome") > -1, BrowserDetect.isIOS = (a.indexOf("iPod") > -1 || a.indexOf("iPhone") > -1 || a.indexOf("iPad") > -1) && !BrowserDetect.isWindowPhone, BrowserDetect.isAndroid = a.indexOf("Android") > -1 && !BrowserDetect.isWindowPhone, BrowserDetect.isBlackberry = a.indexOf("Blackberry") > -1, createjs.BrowserDetect = BrowserDetect;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function EventDispatcher() {
    this._listeners = null, this._captureListeners = null;
  }var a = EventDispatcher.prototype;EventDispatcher.initialize = function (b) {
    b.addEventListener = a.addEventListener, b.on = a.on, b.removeEventListener = b.off = a.removeEventListener, b.removeAllEventListeners = a.removeAllEventListeners, b.hasEventListener = a.hasEventListener, b.dispatchEvent = a.dispatchEvent, b._dispatchEvent = a._dispatchEvent, b.willTrigger = a.willTrigger;
  }, a.addEventListener = function (a, b, c) {
    var d;d = c ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};var e = d[a];return e && this.removeEventListener(a, b, c), e = d[a], e ? e.push(b) : d[a] = [b], b;
  }, a.on = function (a, b, c, d, e, f) {
    return b.handleEvent && (c = c || b, b = b.handleEvent), c = c || this, this.addEventListener(a, function (a) {
      b.call(c, a, e), d && a.remove();
    }, f);
  }, a.removeEventListener = function (a, b, c) {
    var d = c ? this._captureListeners : this._listeners;if (d) {
      var e = d[a];if (e) for (var f = 0, g = e.length; g > f; f++) {
        if (e[f] == b) {
          1 == g ? delete d[a] : e.splice(f, 1);break;
        }
      }
    }
  }, a.off = a.removeEventListener, a.removeAllEventListeners = function (a) {
    a ? (this._listeners && delete this._listeners[a], this._captureListeners && delete this._captureListeners[a]) : this._listeners = this._captureListeners = null;
  }, a.dispatchEvent = function (a, b, c) {
    if ("string" == typeof a) {
      var d = this._listeners;if (!(b || d && d[a])) return !0;a = new createjs.Event(a, b, c);
    } else a.target && a.clone && (a = a.clone());try {
      a.target = this;
    } catch (e) {}if (a.bubbles && this.parent) {
      for (var f = this, g = [f]; f.parent;) {
        g.push(f = f.parent);
      }var h,
          i = g.length;for (h = i - 1; h >= 0 && !a.propagationStopped; h--) {
        g[h]._dispatchEvent(a, 1 + (0 == h));
      }for (h = 1; i > h && !a.propagationStopped; h++) {
        g[h]._dispatchEvent(a, 3);
      }
    } else this._dispatchEvent(a, 2);return !a.defaultPrevented;
  }, a.hasEventListener = function (a) {
    var b = this._listeners,
        c = this._captureListeners;return !!(b && b[a] || c && c[a]);
  }, a.willTrigger = function (a) {
    for (var b = this; b;) {
      if (b.hasEventListener(a)) return !0;b = b.parent;
    }return !1;
  }, a.toString = function () {
    return "[EventDispatcher]";
  }, a._dispatchEvent = function (a, b) {
    var c,
        d,
        e = 2 >= b ? this._captureListeners : this._listeners;if (a && e && (d = e[a.type]) && (c = d.length)) {
      try {
        a.currentTarget = this;
      } catch (f) {}try {
        a.eventPhase = 0 | b;
      } catch (f) {}a.removed = !1, d = d.slice();for (var g = 0; c > g && !a.immediatePropagationStopped; g++) {
        var h = d[g];h.handleEvent ? h.handleEvent(a) : h(a), a.removed && (this.off(a.type, h, 1 == b), a.removed = !1);
      }
    }2 === b && this._dispatchEvent(a, 2.1);
  }, createjs.EventDispatcher = EventDispatcher;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function Event(a, b, c) {
    this.type = a, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!b, this.cancelable = !!c, this.timeStamp = new Date().getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1;
  }var a = Event.prototype;a.preventDefault = function () {
    this.defaultPrevented = this.cancelable && !0;
  }, a.stopPropagation = function () {
    this.propagationStopped = !0;
  }, a.stopImmediatePropagation = function () {
    this.immediatePropagationStopped = this.propagationStopped = !0;
  }, a.remove = function () {
    this.removed = !0;
  }, a.clone = function () {
    return new Event(this.type, this.bubbles, this.cancelable);
  }, a.set = function (a) {
    for (var b in a) {
      this[b] = a[b];
    }return this;
  }, a.toString = function () {
    return "[Event (type=" + this.type + ")]";
  }, createjs.Event = Event;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function ErrorEvent(a, b, c) {
    this.Event_constructor("error"), this.title = a, this.message = b, this.data = c;
  }var a = createjs.extend(ErrorEvent, createjs.Event);a.clone = function () {
    return new createjs.ErrorEvent(this.title, this.message, this.data);
  }, createjs.ErrorEvent = createjs.promote(ErrorEvent, "Event");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function ProgressEvent(a, b) {
    this.Event_constructor("progress"), this.loaded = a, this.total = null == b ? 1 : b, this.progress = 0 == b ? 0 : this.loaded / this.total;
  }var a = createjs.extend(ProgressEvent, createjs.Event);a.clone = function () {
    return new createjs.ProgressEvent(this.loaded, this.total);
  }, createjs.ProgressEvent = createjs.promote(ProgressEvent, "Event");
}(window), this.createjs = this.createjs || {}, function () {
  "use strict";
  function LoadItem() {
    this.src = null, this.type = null, this.id = null, this.maintainOrder = !1, this.callback = null, this.data = null, this.method = createjs.Methods.GET, this.values = null, this.headers = null, this.withCredentials = !1, this.mimeType = null, this.crossOrigin = null, this.loadTimeout = b.LOAD_TIMEOUT_DEFAULT;
  }var a = LoadItem.prototype = {},
      b = LoadItem;b.LOAD_TIMEOUT_DEFAULT = 8e3, b.create = function (a) {
    if ("string" == typeof a) {
      var c = new LoadItem();return c.src = a, c;
    }if (a instanceof b) return a;if (a instanceof Object && a.src) return null == a.loadTimeout && (a.loadTimeout = b.LOAD_TIMEOUT_DEFAULT), a;throw new Error("Type not recognized.");
  }, a.set = function (a) {
    for (var b in a) {
      this[b] = a[b];
    }return this;
  }, createjs.LoadItem = b;
}(), this.createjs = this.createjs || {}, function () {
  var a = {};a.POST = "POST", a.GET = "GET", createjs.Methods = a;
}(), this.createjs = this.createjs || {}, function () {
  var a = {};a.BINARY = "binary", a.CSS = "css", a.FONT = "font", a.FONTCSS = "fontcss", a.IMAGE = "image", a.JAVASCRIPT = "javascript", a.JSON = "json", a.JSONP = "jsonp", a.MANIFEST = "manifest", a.SOUND = "sound", a.VIDEO = "video", a.SPRITESHEET = "spritesheet", a.SVG = "svg", a.TEXT = "text", a.XML = "xml", createjs.Types = a;
}(), function () {
  var a = {};a.a = function () {
    return a.el("a");
  }, a.svg = function () {
    return a.el("svg");
  }, a.object = function () {
    return a.el("object");
  }, a.image = function () {
    return a.el("image");
  }, a.img = function () {
    return a.el("img");
  }, a.style = function () {
    return a.el("style");
  }, a.link = function () {
    return a.el("link");
  }, a.script = function () {
    return a.el("script");
  }, a.audio = function () {
    return a.el("audio");
  }, a.video = function () {
    return a.el("video");
  }, a.text = function (a) {
    return document.createTextNode(a);
  }, a.el = function (a) {
    return document.createElement(a);
  }, createjs.Elements = a;
}(), function () {
  var a = { container: null };a.appendToHead = function (b) {
    a.getHead().appendChild(b);
  }, a.appendToBody = function (b) {
    if (null == a.container) {
      a.container = document.createElement("div"), a.container.id = "preloadjs-container";var c = a.container.style;c.visibility = "hidden", c.position = "absolute", c.width = a.container.style.height = "10px", c.overflow = "hidden", c.transform = c.msTransform = c.webkitTransform = c.oTransform = "translate(-10px, -10px)", a.getBody().appendChild(a.container);
    }a.container.appendChild(b);
  }, a.getHead = function () {
    return document.head || document.getElementsByTagName("head")[0];
  }, a.getBody = function () {
    return document.body || document.getElementsByTagName("body")[0];
  }, a.removeChild = function (a) {
    a.parent && a.parent.removeChild(a);
  }, a.isImageTag = function (a) {
    return a instanceof HTMLImageElement;
  }, a.isAudioTag = function (a) {
    return window.HTMLAudioElement ? a instanceof HTMLAudioElement : !1;
  }, a.isVideoTag = function (a) {
    return window.HTMLVideoElement ? a instanceof HTMLVideoElement : !1;
  }, createjs.DomUtils = a;
}(), function () {
  var a = {};a.isBinary = function (a) {
    switch (a) {case createjs.Types.IMAGE:case createjs.Types.BINARY:
        return !0;default:
        return !1;}
  }, a.isText = function (a) {
    switch (a) {case createjs.Types.TEXT:case createjs.Types.JSON:case createjs.Types.MANIFEST:case createjs.Types.XML:case createjs.Types.CSS:case createjs.Types.SVG:case createjs.Types.JAVASCRIPT:case createjs.Types.SPRITESHEET:
        return !0;default:
        return !1;}
  }, a.getTypeByExtension = function (a) {
    if (null == a) return createjs.Types.TEXT;switch (a.toLowerCase()) {case "jpeg":case "jpg":case "gif":case "png":case "webp":case "bmp":
        return createjs.Types.IMAGE;case "ogg":case "mp3":case "webm":
        return createjs.Types.SOUND;case "mp4":case "webm":case "ts":
        return createjs.Types.VIDEO;case "json":
        return createjs.Types.JSON;case "xml":
        return createjs.Types.XML;case "css":
        return createjs.Types.CSS;case "js":
        return createjs.Types.JAVASCRIPT;case "svg":
        return createjs.Types.SVG;default:
        return createjs.Types.TEXT;}
  }, createjs.RequestUtils = a;
}(), function () {
  var a = {};a.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i, a.RELATIVE_PATT = /^[.\/]*?\//i, a.EXTENSION_PATT = /\/?[^\/]+\.(\w{1,5})$/i, a.parseURI = function (b) {
    var c = { absolute: !1, relative: !1, protocol: null, hostname: null, port: null, pathname: null, search: null, hash: null, host: null };if (null == b) return c;var d = createjs.Elements.a();d.href = b;for (var e in c) {
      e in d && (c[e] = d[e]);
    }var f = b.indexOf("?");f > -1 && (b = b.substr(0, f));var g;return a.ABSOLUTE_PATT.test(b) ? c.absolute = !0 : a.RELATIVE_PATT.test(b) && (c.relative = !0), (g = b.match(a.EXTENSION_PATT)) && (c.extension = g[1].toLowerCase()), c;
  }, a.formatQueryString = function (a, b) {
    if (null == a) throw new Error("You must specify data.");var c = [];for (var d in a) {
      c.push(d + "=" + escape(a[d]));
    }return b && (c = c.concat(b)), c.join("&");
  }, a.buildURI = function (a, b) {
    if (null == b) return a;var c = [],
        d = a.indexOf("?");if (-1 != d) {
      var e = a.slice(d + 1);c = c.concat(e.split("&"));
    }return -1 != d ? a.slice(0, d) + "?" + this.formatQueryString(b, c) : a + "?" + this.formatQueryString(b, c);
  }, a.isCrossDomain = function (a) {
    var b = createjs.Elements.a();b.href = a.src;var c = createjs.Elements.a();c.href = location.href;var d = "" != b.hostname && (b.port != c.port || b.protocol != c.protocol || b.hostname != c.hostname);return d;
  }, a.isLocal = function (a) {
    var b = createjs.Elements.a();return b.href = a.src, "" == b.hostname && "file:" == b.protocol;
  }, createjs.URLUtils = a;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function AbstractLoader(a, b, c) {
    this.EventDispatcher_constructor(), this.loaded = !1, this.canceled = !1, this.progress = 0, this.type = c, this.resultFormatter = null, this._item = a ? createjs.LoadItem.create(a) : null, this._preferXHR = b, this._result = null, this._rawResult = null, this._loadedItems = null, this._tagSrcAttribute = null, this._tag = null;
  }var a = createjs.extend(AbstractLoader, createjs.EventDispatcher),
      b = AbstractLoader;try {
    Object.defineProperties(b, { POST: { get: createjs.deprecate(function () {
          return createjs.Methods.POST;
        }, "AbstractLoader.POST") }, GET: { get: createjs.deprecate(function () {
          return createjs.Methods.GET;
        }, "AbstractLoader.GET") }, BINARY: { get: createjs.deprecate(function () {
          return createjs.Types.BINARY;
        }, "AbstractLoader.BINARY") }, CSS: { get: createjs.deprecate(function () {
          return createjs.Types.CSS;
        }, "AbstractLoader.CSS") }, FONT: { get: createjs.deprecate(function () {
          return createjs.Types.FONT;
        }, "AbstractLoader.FONT") }, FONTCSS: { get: createjs.deprecate(function () {
          return createjs.Types.FONTCSS;
        }, "AbstractLoader.FONTCSS") }, IMAGE: { get: createjs.deprecate(function () {
          return createjs.Types.IMAGE;
        }, "AbstractLoader.IMAGE") }, JAVASCRIPT: { get: createjs.deprecate(function () {
          return createjs.Types.JAVASCRIPT;
        }, "AbstractLoader.JAVASCRIPT") }, JSON: { get: createjs.deprecate(function () {
          return createjs.Types.JSON;
        }, "AbstractLoader.JSON") }, JSONP: { get: createjs.deprecate(function () {
          return createjs.Types.JSONP;
        }, "AbstractLoader.JSONP") }, MANIFEST: { get: createjs.deprecate(function () {
          return createjs.Types.MANIFEST;
        }, "AbstractLoader.MANIFEST") }, SOUND: { get: createjs.deprecate(function () {
          return createjs.Types.SOUND;
        }, "AbstractLoader.SOUND") }, VIDEO: { get: createjs.deprecate(function () {
          return createjs.Types.VIDEO;
        }, "AbstractLoader.VIDEO") }, SPRITESHEET: { get: createjs.deprecate(function () {
          return createjs.Types.SPRITESHEET;
        }, "AbstractLoader.SPRITESHEET") }, SVG: { get: createjs.deprecate(function () {
          return createjs.Types.SVG;
        }, "AbstractLoader.SVG") }, TEXT: { get: createjs.deprecate(function () {
          return createjs.Types.TEXT;
        }, "AbstractLoader.TEXT") }, XML: { get: createjs.deprecate(function () {
          return createjs.Types.XML;
        }, "AbstractLoader.XML") } });
  } catch (c) {}a.getItem = function () {
    return this._item;
  }, a.getResult = function (a) {
    return a ? this._rawResult : this._result;
  }, a.getTag = function () {
    return this._tag;
  }, a.setTag = function (a) {
    this._tag = a;
  }, a.load = function () {
    this._createRequest(), this._request.on("complete", this, this), this._request.on("progress", this, this), this._request.on("loadStart", this, this), this._request.on("abort", this, this), this._request.on("timeout", this, this), this._request.on("error", this, this);var a = new createjs.Event("initialize");a.loader = this._request, this.dispatchEvent(a), this._request.load();
  }, a.cancel = function () {
    this.canceled = !0, this.destroy();
  }, a.destroy = function () {
    this._request && (this._request.removeAllEventListeners(), this._request.destroy()), this._request = null, this._item = null, this._rawResult = null, this._result = null, this._loadItems = null, this.removeAllEventListeners();
  }, a.getLoadedItems = function () {
    return this._loadedItems;
  }, a._createRequest = function () {
    this._request = this._preferXHR ? new createjs.XHRRequest(this._item) : new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute);
  }, a._createTag = function () {
    return null;
  }, a._sendLoadStart = function () {
    this._isCanceled() || this.dispatchEvent("loadstart");
  }, a._sendProgress = function (a) {
    if (!this._isCanceled()) {
      var b = null;"number" == typeof a ? (this.progress = a, b = new createjs.ProgressEvent(this.progress)) : (b = a, this.progress = a.loaded / a.total, b.progress = this.progress, (isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0)), this.hasEventListener("progress") && this.dispatchEvent(b);
    }
  }, a._sendComplete = function () {
    if (!this._isCanceled()) {
      this.loaded = !0;var a = new createjs.Event("complete");a.rawResult = this._rawResult, null != this._result && (a.result = this._result), this.dispatchEvent(a);
    }
  }, a._sendError = function (a) {
    !this._isCanceled() && this.hasEventListener("error") && (null == a && (a = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")), this.dispatchEvent(a));
  }, a._isCanceled = function () {
    return null == window.createjs || this.canceled ? !0 : !1;
  }, a.resultFormatter = null, a.handleEvent = function (a) {
    switch (a.type) {case "complete":
        this._rawResult = a.target._response;var b = this.resultFormatter && this.resultFormatter(this);b instanceof Function ? b.call(this, createjs.proxy(this._resultFormatSuccess, this), createjs.proxy(this._resultFormatFailed, this)) : (this._result = b || this._rawResult, this._sendComplete());break;case "progress":
        this._sendProgress(a);break;case "error":
        this._sendError(a);break;case "loadstart":
        this._sendLoadStart();break;case "abort":case "timeout":
        this._isCanceled() || this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_" + a.type.toUpperCase() + "_ERROR"));}
  }, a._resultFormatSuccess = function (a) {
    this._result = a, this._sendComplete();
  }, a._resultFormatFailed = function (a) {
    this._sendError(a);
  }, a.toString = function () {
    return "[PreloadJS AbstractLoader]";
  }, createjs.AbstractLoader = createjs.promote(AbstractLoader, "EventDispatcher");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function AbstractMediaLoader(a, b, c) {
    this.AbstractLoader_constructor(a, b, c), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.on("initialize", this._updateXHR, this);
  }var a = createjs.extend(AbstractMediaLoader, createjs.AbstractLoader);a.load = function () {
    this._tag || (this._tag = this._createTag(this._item.src)), this._tag.preload = "auto", this._tag.load(), this.AbstractLoader_load();
  }, a._createTag = function () {}, a._createRequest = function () {
    this._request = this._preferXHR ? new createjs.XHRRequest(this._item) : new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute);
  }, a._updateXHR = function (a) {
    a.loader.setResponseType && a.loader.setResponseType("blob");
  }, a._formatResult = function (a) {
    if (this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._preferXHR) {
      var b = window.URL || window.webkitURL,
          c = a.getResult(!0);a.getTag().src = b.createObjectURL(c);
    }return a.getTag();
  }, createjs.AbstractMediaLoader = createjs.promote(AbstractMediaLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  var AbstractRequest = function AbstractRequest(a) {
    this._item = a;
  },
      a = createjs.extend(AbstractRequest, createjs.EventDispatcher);a.load = function () {}, a.destroy = function () {}, a.cancel = function () {}, createjs.AbstractRequest = createjs.promote(AbstractRequest, "EventDispatcher");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function TagRequest(a, b, c) {
    this.AbstractRequest_constructor(a), this._tag = b, this._tagSrcAttribute = c, this._loadedHandler = createjs.proxy(this._handleTagComplete, this), this._addedToDOM = !1;
  }var a = createjs.extend(TagRequest, createjs.AbstractRequest);a.load = function () {
    this._tag.onload = createjs.proxy(this._handleTagComplete, this), this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this), this._tag.onerror = createjs.proxy(this._handleError, this);var a = new createjs.Event("initialize");a.loader = this._tag, this.dispatchEvent(a), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag[this._tagSrcAttribute] = this._item.src, null == this._tag.parentNode && (createjs.DomUtils.appendToBody(this._tag), this._addedToDOM = !0);
  }, a.destroy = function () {
    this._clean(), this._tag = null, this.AbstractRequest_destroy();
  }, a._handleReadyStateChange = function () {
    clearTimeout(this._loadTimeout);var a = this._tag;("loaded" == a.readyState || "complete" == a.readyState) && this._handleTagComplete();
  }, a._handleError = function () {
    this._clean(), this.dispatchEvent("error");
  }, a._handleTagComplete = function () {
    this._rawResult = this._tag, this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult, this._clean(), this.dispatchEvent("complete");
  }, a._handleTimeout = function () {
    this._clean(), this.dispatchEvent(new createjs.Event("timeout"));
  }, a._clean = function () {
    this._tag.onload = null, this._tag.onreadystatechange = null, this._tag.onerror = null, this._addedToDOM && null != this._tag.parentNode && this._tag.parentNode.removeChild(this._tag), clearTimeout(this._loadTimeout);
  }, a._handleStalled = function () {}, createjs.TagRequest = createjs.promote(TagRequest, "AbstractRequest");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function MediaTagRequest(a, b, c) {
    this.AbstractRequest_constructor(a), this._tag = b, this._tagSrcAttribute = c, this._loadedHandler = createjs.proxy(this._handleTagComplete, this);
  }var a = createjs.extend(MediaTagRequest, createjs.TagRequest);a.load = function () {
    var a = createjs.proxy(this._handleStalled, this);this._stalledCallback = a;var b = createjs.proxy(this._handleProgress, this);this._handleProgress = b, this._tag.addEventListener("stalled", a), this._tag.addEventListener("progress", b), this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, !1), this.TagRequest_load();
  }, a._handleReadyStateChange = function () {
    clearTimeout(this._loadTimeout);var a = this._tag;("loaded" == a.readyState || "complete" == a.readyState) && this._handleTagComplete();
  }, a._handleStalled = function () {}, a._handleProgress = function (a) {
    if (a && !(a.loaded > 0 && 0 == a.total)) {
      var b = new createjs.ProgressEvent(a.loaded, a.total);this.dispatchEvent(b);
    }
  }, a._clean = function () {
    this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.removeEventListener("stalled", this._stalledCallback), this._tag.removeEventListener("progress", this._progressCallback), this.TagRequest__clean();
  }, createjs.MediaTagRequest = createjs.promote(MediaTagRequest, "TagRequest");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function XHRRequest(a) {
    this.AbstractRequest_constructor(a), this._request = null, this._loadTimeout = null, this._xhrLevel = 1, this._response = null, this._rawResponse = null, this._canceled = !1, this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this), this._handleProgressProxy = createjs.proxy(this._handleProgress, this), this._handleAbortProxy = createjs.proxy(this._handleAbort, this), this._handleErrorProxy = createjs.proxy(this._handleError, this), this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this), this._handleLoadProxy = createjs.proxy(this._handleLoad, this), this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this), !this._createXHR(a);
  }var a = createjs.extend(XHRRequest, createjs.AbstractRequest);XHRRequest.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], a.getResult = function (a) {
    return a && this._rawResponse ? this._rawResponse : this._response;
  }, a.cancel = function () {
    this.canceled = !0, this._clean(), this._request.abort();
  }, a.load = function () {
    if (null == this._request) return void this._handleError();null != this._request.addEventListener ? (this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1), this._request.addEventListener("progress", this._handleProgressProxy, !1), this._request.addEventListener("abort", this._handleAbortProxy, !1), this._request.addEventListener("error", this._handleErrorProxy, !1), this._request.addEventListener("timeout", this._handleTimeoutProxy, !1), this._request.addEventListener("load", this._handleLoadProxy, !1), this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, !1)) : (this._request.onloadstart = this._handleLoadStartProxy, this._request.onprogress = this._handleProgressProxy, this._request.onabort = this._handleAbortProxy, this._request.onerror = this._handleErrorProxy, this._request.ontimeout = this._handleTimeoutProxy, this._request.onload = this._handleLoadProxy, this._request.onreadystatechange = this._handleReadyStateChangeProxy), 1 == this._xhrLevel && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout));try {
      this._item.values ? this._request.send(createjs.URLUtils.formatQueryString(this._item.values)) : this._request.send();
    } catch (a) {
      this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, a));
    }
  }, a.setResponseType = function (a) {
    "blob" === a && (a = window.URL ? "blob" : "arraybuffer", this._responseType = a), this._request.responseType = a;
  }, a.getAllResponseHeaders = function () {
    return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null;
  }, a.getResponseHeader = function (a) {
    return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(a) : null;
  }, a._handleProgress = function (a) {
    if (a && !(a.loaded > 0 && 0 == a.total)) {
      var b = new createjs.ProgressEvent(a.loaded, a.total);this.dispatchEvent(b);
    }
  }, a._handleLoadStart = function () {
    clearTimeout(this._loadTimeout), this.dispatchEvent("loadstart");
  }, a._handleAbort = function (a) {
    this._clean(), this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, a));
  }, a._handleError = function (a) {
    this._clean(), this.dispatchEvent(new createjs.ErrorEvent(a.message));
  }, a._handleReadyStateChange = function () {
    4 == this._request.readyState && this._handleLoad();
  }, a._handleLoad = function () {
    if (!this.loaded) {
      this.loaded = !0;var a = this._checkError();if (a) return void this._handleError(a);if (this._response = this._getResponse(), "arraybuffer" === this._responseType) try {
        this._response = new Blob([this._response]);
      } catch (b) {
        if (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, "TypeError" === b.name && window.BlobBuilder) {
          var c = new BlobBuilder();c.append(this._response), this._response = c.getBlob();
        }
      }this._clean(), this.dispatchEvent(new createjs.Event("complete"));
    }
  }, a._handleTimeout = function (a) {
    this._clean(), this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, a));
  }, a._checkError = function () {
    var a = parseInt(this._request.status);return a >= 400 && 599 >= a ? new Error(a) : 0 == a && /^https?:/.test(location.protocol) ? new Error(0) : null;
  }, a._getResponse = function () {
    if (null != this._response) return this._response;if (null != this._request.response) return this._request.response;try {
      if (null != this._request.responseText) return this._request.responseText;
    } catch (a) {}try {
      if (null != this._request.responseXML) return this._request.responseXML;
    } catch (a) {}return null;
  }, a._createXHR = function (a) {
    var b = createjs.URLUtils.isCrossDomain(a),
        c = {},
        d = null;if (window.XMLHttpRequest) d = new XMLHttpRequest(), b && void 0 === d.withCredentials && window.XDomainRequest && (d = new XDomainRequest());else {
      for (var e = 0, f = s.ACTIVEX_VERSIONS.length; f > e; e++) {
        var g = s.ACTIVEX_VERSIONS[e];try {
          d = new ActiveXObject(g);break;
        } catch (h) {}
      }if (null == d) return !1;
    }null == a.mimeType && createjs.RequestUtils.isText(a.type) && (a.mimeType = "text/plain; charset=utf-8"), a.mimeType && d.overrideMimeType && d.overrideMimeType(a.mimeType), this._xhrLevel = "string" == typeof d.responseType ? 2 : 1;var i = null;if (i = a.method == createjs.Methods.GET ? createjs.URLUtils.buildURI(a.src, a.values) : a.src, d.open(a.method || createjs.Methods.GET, i, !0), b && d instanceof XMLHttpRequest && 1 == this._xhrLevel && (c.Origin = location.origin), a.values && a.method == createjs.Methods.POST && (c["Content-Type"] = "application/x-www-form-urlencoded"), b || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest"), a.headers) for (var j in a.headers) {
      c[j] = a.headers[j];
    }for (j in c) {
      d.setRequestHeader(j, c[j]);
    }return d instanceof XMLHttpRequest && void 0 !== a.withCredentials && (d.withCredentials = a.withCredentials), this._request = d, !0;
  }, a._clean = function () {
    clearTimeout(this._loadTimeout), null != this._request.removeEventListener ? (this._request.removeEventListener("loadstart", this._handleLoadStartProxy), this._request.removeEventListener("progress", this._handleProgressProxy), this._request.removeEventListener("abort", this._handleAbortProxy), this._request.removeEventListener("error", this._handleErrorProxy), this._request.removeEventListener("timeout", this._handleTimeoutProxy), this._request.removeEventListener("load", this._handleLoadProxy), this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)) : (this._request.onloadstart = null, this._request.onprogress = null, this._request.onabort = null, this._request.onerror = null, this._request.ontimeout = null, this._request.onload = null, this._request.onreadystatechange = null);
  }, a.toString = function () {
    return "[PreloadJS XHRRequest]";
  }, createjs.XHRRequest = createjs.promote(XHRRequest, "AbstractRequest");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function SoundLoader(a, b) {
    this.AbstractMediaLoader_constructor(a, b, createjs.Types.SOUND), createjs.DomUtils.isAudioTag(a) ? this._tag = a : createjs.DomUtils.isAudioTag(a.src) ? this._tag = a : createjs.DomUtils.isAudioTag(a.tag) && (this._tag = createjs.DomUtils.isAudioTag(a) ? a : a.src), null != this._tag && (this._preferXHR = !1);
  }var a = createjs.extend(SoundLoader, createjs.AbstractMediaLoader),
      b = SoundLoader;b.canLoadItem = function (a) {
    return a.type == createjs.Types.SOUND;
  }, a._createTag = function (a) {
    var b = createjs.Elements.audio();return b.autoplay = !1, b.preload = "none", b.src = a, b;
  }, createjs.SoundLoader = createjs.promote(SoundLoader, "AbstractMediaLoader");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  var PlayPropsConfig = function PlayPropsConfig() {
    this.interrupt = null, this.delay = null, this.offset = null, this.loop = null, this.volume = null, this.pan = null, this.startTime = null, this.duration = null;
  },
      a = PlayPropsConfig.prototype = {},
      b = PlayPropsConfig;b.create = function (a) {
    if ("string" == typeof a) return console && (console.warn || console.log)("Deprecated behaviour. Sound.play takes a configuration object instead of individual arguments. See docs for info."), new createjs.PlayPropsConfig().set({ interrupt: a });if (null == a || a instanceof b || a instanceof Object) return new createjs.PlayPropsConfig().set(a);if (null == a) throw new Error("PlayProps configuration not recognized.");
  }, a.set = function (a) {
    if (null != a) for (var b in a) {
      this[b] = a[b];
    }return this;
  }, a.toString = function () {
    return "[PlayPropsConfig]";
  }, createjs.PlayPropsConfig = b;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function Sound() {
    throw "Sound cannot be instantiated";
  }function a(a, b) {
    this.init(a, b);
  }var b = Sound;b.INTERRUPT_ANY = "any", b.INTERRUPT_EARLY = "early", b.INTERRUPT_LATE = "late", b.INTERRUPT_NONE = "none", b.PLAY_INITED = "playInited", b.PLAY_SUCCEEDED = "playSucceeded", b.PLAY_INTERRUPTED = "playInterrupted", b.PLAY_FINISHED = "playFinished", b.PLAY_FAILED = "playFailed", b.SUPPORTED_EXTENSIONS = ["mp3", "ogg", "opus", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"], b.EXTENSION_MAP = { m4a: "mp4" }, b.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([\/.]*?(?:[^?]+)?\/)?((?:[^\/?]+)\.(\w+))(?:\?(\S+)?)?$/, b.defaultInterruptBehavior = b.INTERRUPT_NONE, b.alternateExtensions = [], b.activePlugin = null, b._masterVolume = 1, b._getMasterVolume = function () {
    return this._masterVolume;
  }, b.getVolume = createjs.deprecate(b._getMasterVolume, "Sound.getVolume"), b._setMasterVolume = function (a) {
    if (null != Number(a) && (a = Math.max(0, Math.min(1, a)), b._masterVolume = a, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(a))) for (var c = this._instances, d = 0, e = c.length; e > d; d++) {
      c[d].setMasterVolume(a);
    }
  }, b.setVolume = createjs.deprecate(b._setMasterVolume, "Sound.setVolume"), b._masterMute = !1, b._getMute = function () {
    return this._masterMute;
  }, b.getMute = createjs.deprecate(b._getMute, "Sound.getMute"), b._setMute = function (a) {
    if (null != a && (this._masterMute = a, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(a))) for (var b = this._instances, c = 0, d = b.length; d > c; c++) {
      b[c].setMasterMute(a);
    }
  }, b.setMute = createjs.deprecate(b._setMute, "Sound.setMute"), b._getCapabilities = function () {
    return null == b.activePlugin ? null : b.activePlugin._capabilities;
  }, b.getCapabilities = createjs.deprecate(b._getCapabilities, "Sound.getCapabilities"), Object.defineProperties(b, { volume: { get: b._getMasterVolume, set: b._setMasterVolume }, muted: { get: b._getMute, set: b._setMute }, capabilities: { get: b._getCapabilities } }), b._pluginsRegistered = !1, b._lastID = 0, b._instances = [], b._idHash = {}, b._preloadHash = {}, b._defaultPlayPropsHash = {}, b.addEventListener = null, b.removeEventListener = null, b.removeAllEventListeners = null, b.dispatchEvent = null, b.hasEventListener = null, b._listeners = null, createjs.EventDispatcher.initialize(b), b.getPreloadHandlers = function () {
    return { callback: createjs.proxy(b.initLoad, b), types: ["sound"], extensions: b.SUPPORTED_EXTENSIONS };
  }, b._handleLoadComplete = function (a) {
    var c = a.target.getItem().src;if (b._preloadHash[c]) for (var d = 0, e = b._preloadHash[c].length; e > d; d++) {
      var f = b._preloadHash[c][d];if (b._preloadHash[c][d] = !0, b.hasEventListener("fileload")) {
        var a = new createjs.Event("fileload");a.src = f.src, a.id = f.id, a.data = f.data, a.sprite = f.sprite, b.dispatchEvent(a);
      }
    }
  }, b._handleLoadError = function (a) {
    var c = a.target.getItem().src;if (b._preloadHash[c]) for (var d = 0, e = b._preloadHash[c].length; e > d; d++) {
      var f = b._preloadHash[c][d];if (b._preloadHash[c][d] = !1, b.hasEventListener("fileerror")) {
        var a = new createjs.Event("fileerror");a.src = f.src, a.id = f.id, a.data = f.data, a.sprite = f.sprite, b.dispatchEvent(a);
      }
    }
  }, b._registerPlugin = function (a) {
    return a.isSupported() ? (b.activePlugin = new a(), !0) : !1;
  }, b.registerPlugins = function (a) {
    b._pluginsRegistered = !0;for (var c = 0, d = a.length; d > c; c++) {
      if (b._registerPlugin(a[c])) return !0;
    }return !1;
  }, b.initializeDefaultPlugins = function () {
    return null != b.activePlugin ? !0 : b._pluginsRegistered ? !1 : b.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]) ? !0 : !1;
  }, b.isReady = function () {
    return null != b.activePlugin;
  }, b.initLoad = function (a) {
    return "video" == a.type ? !0 : b._registerSound(a);
  }, b._registerSound = function (c) {
    if (!b.initializeDefaultPlugins()) return !1;var d;if (c.src instanceof Object ? (d = b._parseSrc(c.src), d.src = c.path + d.src) : d = b._parsePath(c.src), null == d) return !1;
    c.src = d.src, c.type = "sound";var e = c.data,
        f = null;if (null != e && (isNaN(e.channels) ? isNaN(e) || (f = parseInt(e)) : f = parseInt(e.channels), e.audioSprite)) for (var g, h = e.audioSprite.length; h--;) {
      g = e.audioSprite[h], b._idHash[g.id] = { src: c.src, startTime: parseInt(g.startTime), duration: parseInt(g.duration) }, g.defaultPlayProps && (b._defaultPlayPropsHash[g.id] = createjs.PlayPropsConfig.create(g.defaultPlayProps));
    }null != c.id && (b._idHash[c.id] = { src: c.src });var i = b.activePlugin.register(c);return a.create(c.src, f), null != e && isNaN(e) ? c.data.channels = f || a.maxPerChannel() : c.data = f || a.maxPerChannel(), i.type && (c.type = i.type), c.defaultPlayProps && (b._defaultPlayPropsHash[c.src] = createjs.PlayPropsConfig.create(c.defaultPlayProps)), i;
  }, b.registerSound = function (a, c, d, e, f) {
    var g = { src: a, id: c, data: d, defaultPlayProps: f };a instanceof Object && a.src && (e = c, g = a), g = createjs.LoadItem.create(g), g.path = e, null == e || g.src instanceof Object || (g.src = e + g.src);var h = b._registerSound(g);if (!h) return !1;if (b._preloadHash[g.src] || (b._preloadHash[g.src] = []), b._preloadHash[g.src].push(g), 1 == b._preloadHash[g.src].length) h.on("complete", this._handleLoadComplete, this), h.on("error", this._handleLoadError, this), b.activePlugin.preload(h);else if (1 == b._preloadHash[g.src][0]) return !0;return g;
  }, b.registerSounds = function (a, b) {
    var c = [];a.path && (b ? b += a.path : b = a.path, a = a.manifest);for (var d = 0, e = a.length; e > d; d++) {
      c[d] = createjs.Sound.registerSound(a[d].src, a[d].id, a[d].data, b, a[d].defaultPlayProps);
    }return c;
  }, b.removeSound = function (c, d) {
    if (null == b.activePlugin) return !1;c instanceof Object && c.src && (c = c.src);var e;if (c instanceof Object ? e = b._parseSrc(c) : (c = b._getSrcById(c).src, e = b._parsePath(c)), null == e) return !1;c = e.src, null != d && (c = d + c);for (var f in b._idHash) {
      b._idHash[f].src == c && delete b._idHash[f];
    }return a.removeSrc(c), delete b._preloadHash[c], b.activePlugin.removeSound(c), !0;
  }, b.removeSounds = function (a, b) {
    var c = [];a.path && (b ? b += a.path : b = a.path, a = a.manifest);for (var d = 0, e = a.length; e > d; d++) {
      c[d] = createjs.Sound.removeSound(a[d].src, b);
    }return c;
  }, b.removeAllSounds = function () {
    b._idHash = {}, b._preloadHash = {}, a.removeAll(), b.activePlugin && b.activePlugin.removeAllSounds();
  }, b.loadComplete = function (a) {
    if (!b.isReady()) return !1;var c = b._parsePath(a);return a = c ? b._getSrcById(c.src).src : b._getSrcById(a).src, void 0 == b._preloadHash[a] ? !1 : 1 == b._preloadHash[a][0];
  }, b._parsePath = function (a) {
    "string" != typeof a && (a = a.toString());var c = a.match(b.FILE_PATTERN);if (null == c) return !1;for (var d = c[4], e = c[5], f = b.capabilities, g = 0; !f[e];) {
      if (e = b.alternateExtensions[g++], g > b.alternateExtensions.length) return null;
    }a = a.replace("." + c[5], "." + e);var h = { name: d, src: a, extension: e };return h;
  }, b._parseSrc = function (a) {
    var c = { name: void 0, src: void 0, extension: void 0 },
        d = b.capabilities;for (var e in a) {
      if (a.hasOwnProperty(e) && d[e]) {
        c.src = a[e], c.extension = e;break;
      }
    }if (!c.src) return !1;var f = c.src.lastIndexOf("/");return c.name = -1 != f ? c.src.slice(f + 1) : c.src, c;
  }, b.play = function (a, c) {
    var d = createjs.PlayPropsConfig.create(c),
        e = b.createInstance(a, d.startTime, d.duration),
        f = b._playInstance(e, d);return f || e._playFailed(), e;
  }, b.createInstance = function (c, d, e) {
    if (!b.initializeDefaultPlugins()) return new createjs.DefaultSoundInstance(c, d, e);var f = b._defaultPlayPropsHash[c];c = b._getSrcById(c);var g = b._parsePath(c.src),
        h = null;return null != g && null != g.src ? (a.create(g.src), null == d && (d = c.startTime), h = b.activePlugin.create(g.src, d, e || c.duration), f = f || b._defaultPlayPropsHash[g.src], f && h.applyPlayProps(f)) : h = new createjs.DefaultSoundInstance(c, d, e), h.uniqueId = b._lastID++, h;
  }, b.stop = function () {
    for (var a = this._instances, b = a.length; b--;) {
      a[b].stop();
    }
  }, b.setDefaultPlayProps = function (a, c) {
    a = b._getSrcById(a), b._defaultPlayPropsHash[b._parsePath(a.src).src] = createjs.PlayPropsConfig.create(c);
  }, b.getDefaultPlayProps = function (a) {
    return a = b._getSrcById(a), b._defaultPlayPropsHash[b._parsePath(a.src).src];
  }, b._playInstance = function (a, c) {
    var d = b._defaultPlayPropsHash[a.src] || {};if (null == c.interrupt && (c.interrupt = d.interrupt || b.defaultInterruptBehavior), null == c.delay && (c.delay = d.delay || 0), null == c.offset && (c.offset = a.position), null == c.loop && (c.loop = a.loop), null == c.volume && (c.volume = a.volume), null == c.pan && (c.pan = a.pan), 0 == c.delay) {
      var e = b._beginPlaying(a, c);if (!e) return !1;
    } else {
      var f = setTimeout(function () {
        b._beginPlaying(a, c);
      }, c.delay);a.delayTimeoutId = f;
    }return this._instances.push(a), !0;
  }, b._beginPlaying = function (b, c) {
    if (!a.add(b, c.interrupt)) return !1;var d = b._beginPlaying(c);if (!d) {
      var e = createjs.indexOf(this._instances, b);return e > -1 && this._instances.splice(e, 1), !1;
    }return !0;
  }, b._getSrcById = function (a) {
    return b._idHash[a] || { src: a };
  }, b._playFinished = function (b) {
    a.remove(b);var c = createjs.indexOf(this._instances, b);c > -1 && this._instances.splice(c, 1);
  }, createjs.Sound = Sound, a.channels = {}, a.create = function (b, c) {
    var d = a.get(b);return null == d ? (a.channels[b] = new a(b, c), !0) : !1;
  }, a.removeSrc = function (b) {
    var c = a.get(b);return null == c ? !1 : (c._removeAll(), delete a.channels[b], !0);
  }, a.removeAll = function () {
    for (var b in a.channels) {
      a.channels[b]._removeAll();
    }a.channels = {};
  }, a.add = function (b, c) {
    var d = a.get(b.src);return null == d ? !1 : d._add(b, c);
  }, a.remove = function (b) {
    var c = a.get(b.src);return null == c ? !1 : (c._remove(b), !0);
  }, a.maxPerChannel = function () {
    return c.maxDefault;
  }, a.get = function (b) {
    return a.channels[b];
  };var c = a.prototype;c.constructor = a, c.src = null, c.max = null, c.maxDefault = 100, c.length = 0, c.init = function (a, b) {
    this.src = a, this.max = b || this.maxDefault, -1 == this.max && (this.max = this.maxDefault), this._instances = [];
  }, c._get = function (a) {
    return this._instances[a];
  }, c._add = function (a, b) {
    return this._getSlot(b, a) ? (this._instances.push(a), this.length++, !0) : !1;
  }, c._remove = function (a) {
    var b = createjs.indexOf(this._instances, a);return -1 == b ? !1 : (this._instances.splice(b, 1), this.length--, !0);
  }, c._removeAll = function () {
    for (var a = this.length - 1; a >= 0; a--) {
      this._instances[a].stop();
    }
  }, c._getSlot = function (a) {
    var b, c;if (a != Sound.INTERRUPT_NONE && (c = this._get(0), null == c)) return !0;for (var d = 0, e = this.max; e > d; d++) {
      if (b = this._get(d), null == b) return !0;if (b.playState == Sound.PLAY_FINISHED || b.playState == Sound.PLAY_INTERRUPTED || b.playState == Sound.PLAY_FAILED) {
        c = b;break;
      }a != Sound.INTERRUPT_NONE && (a == Sound.INTERRUPT_EARLY && b.position < c.position || a == Sound.INTERRUPT_LATE && b.position > c.position) && (c = b);
    }return null != c ? (c._interrupt(), this._remove(c), !0) : !1;
  }, c.toString = function () {
    return "[Sound SoundChannel]";
  };
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  var AbstractSoundInstance = function AbstractSoundInstance(a, b, c, d) {
    this.EventDispatcher_constructor(), this.src = a, this.uniqueId = -1, this.playState = null, this.delayTimeoutId = null, this._volume = 1, Object.defineProperty(this, "volume", { get: this._getVolume, set: this._setVolume }), this.getVolume = createjs.deprecate(this._getVolume, "AbstractSoundInstance.getVolume"), this.setVolume = createjs.deprecate(this._setVolume, "AbstractSoundInstance.setVolume"), this._pan = 0, Object.defineProperty(this, "pan", { get: this._getPan, set: this._setPan }), this.getPan = createjs.deprecate(this._getPan, "AbstractSoundInstance.getPan"), this.setPan = createjs.deprecate(this._setPan, "AbstractSoundInstance.setPan"), this._startTime = Math.max(0, b || 0), Object.defineProperty(this, "startTime", { get: this._getStartTime, set: this._setStartTime }), this.getStartTime = createjs.deprecate(this._getStartTime, "AbstractSoundInstance.getStartTime"), this.setStartTime = createjs.deprecate(this._setStartTime, "AbstractSoundInstance.setStartTime"), this._duration = Math.max(0, c || 0), Object.defineProperty(this, "duration", { get: this._getDuration, set: this._setDuration }), this.getDuration = createjs.deprecate(this._getDuration, "AbstractSoundInstance.getDuration"), this.setDuration = createjs.deprecate(this._setDuration, "AbstractSoundInstance.setDuration"), this._playbackResource = null, Object.defineProperty(this, "playbackResource", { get: this._getPlaybackResource, set: this._setPlaybackResource }), d !== !1 && d !== !0 && this._setPlaybackResource(d), this.getPlaybackResource = createjs.deprecate(this._getPlaybackResource, "AbstractSoundInstance.getPlaybackResource"), this.setPlaybackResource = createjs.deprecate(this._setPlaybackResource, "AbstractSoundInstance.setPlaybackResource"), this._position = 0, Object.defineProperty(this, "position", { get: this._getPosition, set: this._setPosition }), this.getPosition = createjs.deprecate(this._getPosition, "AbstractSoundInstance.getPosition"), this.setPosition = createjs.deprecate(this._setPosition, "AbstractSoundInstance.setPosition"), this._loop = 0, Object.defineProperty(this, "loop", { get: this._getLoop, set: this._setLoop }), this.getLoop = createjs.deprecate(this._getLoop, "AbstractSoundInstance.getLoop"), this.setLoop = createjs.deprecate(this._setLoop, "AbstractSoundInstance.setLoop"), this._muted = !1, Object.defineProperty(this, "muted", { get: this._getMuted, set: this._setMuted }), this.getMuted = createjs.deprecate(this._getMuted, "AbstractSoundInstance.getMuted"), this.setMuted = createjs.deprecate(this._setMuted, "AbstractSoundInstance.setMuted"), this._paused = !1, Object.defineProperty(this, "paused", { get: this._getPaused, set: this._setPaused }), this.getPaused = createjs.deprecate(this._getPaused, "AbstractSoundInstance.getPaused"), this.setPaused = createjs.deprecate(this._setPaused, "AbstractSoundInstance.setPaused");
  },
      a = createjs.extend(AbstractSoundInstance, createjs.EventDispatcher);a.play = function (a) {
    var b = createjs.PlayPropsConfig.create(a);return this.playState == createjs.Sound.PLAY_SUCCEEDED ? (this.applyPlayProps(b), void (this._paused && this._setPaused(!1))) : (this._cleanUp(), createjs.Sound._playInstance(this, b), this);
  }, a.stop = function () {
    return this._position = 0, this._paused = !1, this._handleStop(), this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this;
  }, a.destroy = function () {
    this._cleanUp(), this.src = null, this.playbackResource = null, this.removeAllEventListeners();
  }, a.applyPlayProps = function (a) {
    return null != a.offset && this._setPosition(a.offset), null != a.loop && this._setLoop(a.loop), null != a.volume && this._setVolume(a.volume), null != a.pan && this._setPan(a.pan), null != a.startTime && (this._setStartTime(a.startTime), this._setDuration(a.duration)), this;
  }, a.toString = function () {
    return "[AbstractSoundInstance]";
  }, a._getPaused = function () {
    return this._paused;
  }, a._setPaused = function (a) {
    return a !== !0 && a !== !1 || this._paused == a || 1 == a && this.playState != createjs.Sound.PLAY_SUCCEEDED ? void 0 : (this._paused = a, a ? this._pause() : this._resume(), clearTimeout(this.delayTimeoutId), this);
  }, a._setVolume = function (a) {
    return a == this._volume ? this : (this._volume = Math.max(0, Math.min(1, a)), this._muted || this._updateVolume(), this);
  }, a._getVolume = function () {
    return this._volume;
  }, a._setMuted = function (a) {
    return a === !0 || a === !1 ? (this._muted = a, this._updateVolume(), this) : void 0;
  }, a._getMuted = function () {
    return this._muted;
  }, a._setPan = function (a) {
    return a == this._pan ? this : (this._pan = Math.max(-1, Math.min(1, a)), this._updatePan(), this);
  }, a._getPan = function () {
    return this._pan;
  }, a._getPosition = function () {
    return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED || (this._position = this._calculateCurrentPosition()), this._position;
  }, a._setPosition = function (a) {
    return this._position = Math.max(0, a), this.playState == createjs.Sound.PLAY_SUCCEEDED && this._updatePosition(), this;
  }, a._getStartTime = function () {
    return this._startTime;
  }, a._setStartTime = function (a) {
    return a == this._startTime ? this : (this._startTime = Math.max(0, a || 0), this._updateStartTime(), this);
  }, a._getDuration = function () {
    return this._duration;
  }, a._setDuration = function (a) {
    return a == this._duration ? this : (this._duration = Math.max(0, a || 0), this._updateDuration(), this);
  }, a._setPlaybackResource = function (a) {
    return this._playbackResource = a, 0 == this._duration && this._playbackResource && this._setDurationFromSource(), this;
  }, a._getPlaybackResource = function () {
    return this._playbackResource;
  }, a._getLoop = function () {
    return this._loop;
  }, a._setLoop = function (a) {
    null != this._playbackResource && (0 != this._loop && 0 == a ? this._removeLooping(a) : 0 == this._loop && 0 != a && this._addLooping(a)), this._loop = a;
  }, a._sendEvent = function (a) {
    var b = new createjs.Event(a);this.dispatchEvent(b);
  }, a._cleanUp = function () {
    clearTimeout(this.delayTimeoutId), this._handleCleanUp(), this._paused = !1, createjs.Sound._playFinished(this);
  }, a._interrupt = function () {
    this._cleanUp(), this.playState = createjs.Sound.PLAY_INTERRUPTED, this._sendEvent("interrupted");
  }, a._beginPlaying = function (a) {
    return this._setPosition(a.offset), this._setLoop(a.loop), this._setVolume(a.volume), this._setPan(a.pan), null != a.startTime && (this._setStartTime(a.startTime), this._setDuration(a.duration)), null != this._playbackResource && this._position < this._duration ? (this._paused = !1, this._handleSoundReady(), this.playState = createjs.Sound.PLAY_SUCCEEDED, this._sendEvent("succeeded"), !0) : (this._playFailed(), !1);
  }, a._playFailed = function () {
    this._cleanUp(), this.playState = createjs.Sound.PLAY_FAILED, this._sendEvent("failed");
  }, a._handleSoundComplete = function () {
    return this._position = 0, 0 != this._loop ? (this._loop--, this._handleLoop(), void this._sendEvent("loop")) : (this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, void this._sendEvent("complete"));
  }, a._handleSoundReady = function () {}, a._updateVolume = function () {}, a._updatePan = function () {}, a._updateStartTime = function () {}, a._updateDuration = function () {}, a._setDurationFromSource = function () {}, a._calculateCurrentPosition = function () {}, a._updatePosition = function () {}, a._removeLooping = function () {}, a._addLooping = function () {}, a._pause = function () {}, a._resume = function () {}, a._handleStop = function () {}, a._handleCleanUp = function () {}, a._handleLoop = function () {}, createjs.AbstractSoundInstance = createjs.promote(AbstractSoundInstance, "EventDispatcher"), createjs.DefaultSoundInstance = createjs.AbstractSoundInstance;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  var AbstractPlugin = function AbstractPlugin() {
    this._capabilities = null, this._loaders = {}, this._audioSources = {}, this._soundInstances = {}, this._volume = 1, this._loaderClass, this._soundInstanceClass;
  },
      a = AbstractPlugin.prototype;AbstractPlugin._capabilities = null, AbstractPlugin.isSupported = function () {
    return !0;
  }, a.register = function (a) {
    var b = this._loaders[a.src];return b && !b.canceled ? this._loaders[a.src] : (this._audioSources[a.src] = !0, this._soundInstances[a.src] = [], b = new this._loaderClass(a), b.on("complete", this._handlePreloadComplete, this), this._loaders[a.src] = b, b);
  }, a.preload = function (a) {
    a.on("error", this._handlePreloadError, this), a.load();
  }, a.isPreloadStarted = function (a) {
    return null != this._audioSources[a];
  }, a.isPreloadComplete = function (a) {
    return !(null == this._audioSources[a] || 1 == this._audioSources[a]);
  }, a.removeSound = function (a) {
    if (this._soundInstances[a]) {
      for (var b = this._soundInstances[a].length; b--;) {
        var c = this._soundInstances[a][b];c.destroy();
      }delete this._soundInstances[a], delete this._audioSources[a], this._loaders[a] && this._loaders[a].destroy(), delete this._loaders[a];
    }
  }, a.removeAllSounds = function () {
    for (var a in this._audioSources) {
      this.removeSound(a);
    }
  }, a.create = function (a, b, c) {
    this.isPreloadStarted(a) || this.preload(this.register(a));var d = new this._soundInstanceClass(a, b, c, this._audioSources[a]);return this._soundInstances[a] && this._soundInstances[a].push(d), d.setMasterVolume && d.setMasterVolume(createjs.Sound.volume), d.setMasterMute && d.setMasterMute(createjs.Sound.muted), d;
  }, a.setVolume = function (a) {
    return this._volume = a, this._updateVolume(), !0;
  }, a.getVolume = function () {
    return this._volume;
  }, a.setMute = function () {
    return this._updateVolume(), !0;
  }, a.toString = function () {
    return "[AbstractPlugin]";
  }, a._handlePreloadComplete = function (a) {
    var b = a.target.getItem().src;this._audioSources[b] = a.result;for (var c = 0, d = this._soundInstances[b].length; d > c; c++) {
      var e = this._soundInstances[b][c];e.playbackResource = this._audioSources[b], this._soundInstances[b] = null;
    }
  }, a._handlePreloadError = function () {}, a._updateVolume = function () {}, createjs.AbstractPlugin = AbstractPlugin;
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function a(a) {
    this.AbstractLoader_constructor(a, !0, createjs.Types.SOUND);
  }var b = createjs.extend(a, createjs.AbstractLoader);a.context = null, b.toString = function () {
    return "[WebAudioLoader]";
  }, b._createRequest = function () {
    this._request = new createjs.XHRRequest(this._item, !1), this._request.setResponseType("arraybuffer");
  }, b._sendComplete = function () {
    a.context.decodeAudioData(this._rawResult, createjs.proxy(this._handleAudioDecoded, this), createjs.proxy(this._sendError, this));
  }, b._handleAudioDecoded = function (a) {
    this._result = a, this.AbstractLoader__sendComplete();
  }, createjs.WebAudioLoader = createjs.promote(a, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function WebAudioSoundInstance(a, c, d, e) {
    this.AbstractSoundInstance_constructor(a, c, d, e), this.gainNode = b.context.createGain(), this.panNode = b.context.createPanner(), this.panNode.panningModel = b._panningModel, this.panNode.connect(this.gainNode), this._updatePan(), this.sourceNode = null, this._soundCompleteTimeout = null, this._sourceNodeNext = null, this._playbackStartTime = 0, this._endedHandler = createjs.proxy(this._handleSoundComplete, this);
  }var a = createjs.extend(WebAudioSoundInstance, createjs.AbstractSoundInstance),
      b = WebAudioSoundInstance;b.context = null, b._scratchBuffer = null, b.destinationNode = null, b._panningModel = "equalpower", a.destroy = function () {
    this.AbstractSoundInstance_destroy(), this.panNode.disconnect(0), this.panNode = null, this.gainNode.disconnect(0), this.gainNode = null;
  }, a.toString = function () {
    return "[WebAudioSoundInstance]";
  }, a._updatePan = function () {
    this.panNode.setPosition(this._pan, 0, -.5);
  }, a._removeLooping = function () {
    this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext);
  }, a._addLooping = function () {
    this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0));
  }, a._setDurationFromSource = function () {
    this._duration = 1e3 * this.playbackResource.duration;
  }, a._handleCleanUp = function () {
    this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED && (this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout), this._playbackStartTime = 0;
  }, a._cleanUpAudioNode = function (a) {
    if (a) {
      if (a.stop(0), a.disconnect(0), createjs.BrowserDetect.isIOS) try {
        a.buffer = b._scratchBuffer;
      } catch (c) {}a = null;
    }return a;
  }, a._handleSoundReady = function () {
    this.gainNode.connect(b.destinationNode);var a = .001 * this._duration,
        c = Math.min(.001 * Math.max(0, this._position), a);this.sourceNode = this._createAndPlayAudioNode(b.context.currentTime - a, c), this._playbackStartTime = this.sourceNode.startTime - c, this._soundCompleteTimeout = setTimeout(this._endedHandler, 1e3 * (a - c)), 0 != this._loop && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0));
  }, a._createAndPlayAudioNode = function (a, c) {
    var d = b.context.createBufferSource();d.buffer = this.playbackResource, d.connect(this.panNode);var e = .001 * this._duration;return d.startTime = a + e, d.start(d.startTime, c + .001 * this._startTime, e - c), d;
  }, a._pause = function () {
    this._position = 1e3 * (b.context.currentTime - this._playbackStartTime), this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), 0 != this.gainNode.numberOfOutputs && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout);
  }, a._resume = function () {
    this._handleSoundReady();
  }, a._updateVolume = function () {
    var a = this._muted ? 0 : this._volume;a != this.gainNode.gain.value && (this.gainNode.gain.value = a);
  }, a._calculateCurrentPosition = function () {
    return 1e3 * (b.context.currentTime - this._playbackStartTime);
  }, a._updatePosition = function () {
    this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), clearTimeout(this._soundCompleteTimeout), this._paused || this._handleSoundReady();
  }, a._handleLoop = function () {
    this._cleanUpAudioNode(this.sourceNode), this.sourceNode = this._sourceNodeNext, this._playbackStartTime = this.sourceNode.startTime, this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0), this._soundCompleteTimeout = setTimeout(this._endedHandler, this._duration);
  }, a._updateDuration = function () {
    this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._pause(), this._resume());
  }, createjs.WebAudioSoundInstance = createjs.promote(WebAudioSoundInstance, "AbstractSoundInstance");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function WebAudioPlugin() {
    this.AbstractPlugin_constructor(), this._panningModel = b._panningModel, this.context = b.context, this.dynamicsCompressorNode = this.context.createDynamicsCompressor(), this.dynamicsCompressorNode.connect(this.context.destination), this.gainNode = this.context.createGain(), this.gainNode.connect(this.dynamicsCompressorNode), createjs.WebAudioSoundInstance.destinationNode = this.gainNode, this._capabilities = b._capabilities, this._loaderClass = createjs.WebAudioLoader, this._soundInstanceClass = createjs.WebAudioSoundInstance, this._addPropsToClasses();
  }var a = createjs.extend(WebAudioPlugin, createjs.AbstractPlugin),
      b = WebAudioPlugin;b._capabilities = null, b._panningModel = "equalpower", b.context = null, b._scratchBuffer = null, b._unlocked = !1, b.DEFAULT_SAMPLE_RATE = 44100, b.isSupported = function () {
    var a = createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry;return "file:" != location.protocol || a || this._isFileXHRSupported() ? (b._generateCapabilities(), null == b.context ? !1 : !0) : !1;
  }, b.playEmptySound = function () {
    if (null != b.context) {
      var a = b.context.createBufferSource();a.buffer = b._scratchBuffer, a.connect(b.context.destination), a.start(0, 0, 0);
    }
  }, b._isFileXHRSupported = function () {
    var a = !0,
        b = new XMLHttpRequest();try {
      b.open("GET", "WebAudioPluginTest.fail", !1);
    } catch (c) {
      return a = !1;
    }b.onerror = function () {
      a = !1;
    }, b.onload = function () {
      a = 404 == this.status || 200 == this.status || 0 == this.status && "" != this.response;
    };try {
      b.send();
    } catch (c) {
      a = !1;
    }return a;
  }, b._generateCapabilities = function () {
    if (null == b._capabilities) {
      var a = document.createElement("audio");if (null == a.canPlayType) return null;if (null == b.context && (b.context = b._createAudioContext(), null == b.context)) return null;null == b._scratchBuffer && (b._scratchBuffer = b.context.createBuffer(1, 1, 22050)), b._compatibilitySetUp(), "ontouchstart" in window && "running" != b.context.state && (b._unlock(), document.addEventListener("mousedown", b._unlock, !0), document.addEventListener("touchstart", b._unlock, !0), document.addEventListener("touchend", b._unlock, !0)), b._capabilities = { panning: !0, volume: !0, tracks: -1 };for (var c = createjs.Sound.SUPPORTED_EXTENSIONS, d = createjs.Sound.EXTENSION_MAP, e = 0, f = c.length; f > e; e++) {
        var g = c[e],
            h = d[g] || g;b._capabilities[g] = "no" != a.canPlayType("audio/" + g) && "" != a.canPlayType("audio/" + g) || "no" != a.canPlayType("audio/" + h) && "" != a.canPlayType("audio/" + h);
      }b.context.destination.numberOfChannels < 2 && (b._capabilities.panning = !1);
    }
  }, b._createAudioContext = function () {
    var a = window.AudioContext || window.webkitAudioContext;if (null == a) return null;var c = new a();if (/(iPhone|iPad)/i.test(navigator.userAgent) && c.sampleRate !== b.DEFAULT_SAMPLE_RATE) {
      var d = c.createBuffer(1, 1, b.DEFAULT_SAMPLE_RATE),
          e = c.createBufferSource();e.buffer = d, e.connect(c.destination), e.start(0), e.disconnect(), c.close(), c = new a();
    }return c;
  }, b._compatibilitySetUp = function () {
    if (b._panningModel = "equalpower", !b.context.createGain) {
      b.context.createGain = b.context.createGainNode;var a = b.context.createBufferSource();a.__proto__.start = a.__proto__.noteGrainOn, a.__proto__.stop = a.__proto__.noteOff, b._panningModel = 0;
    }
  }, b._unlock = function () {
    b._unlocked || (b.playEmptySound(), "running" == b.context.state && (document.removeEventListener("mousedown", b._unlock, !0), document.removeEventListener("touchend", b._unlock, !0), document.removeEventListener("touchstart", b._unlock, !0), b._unlocked = !0));
  }, a.toString = function () {
    return "[WebAudioPlugin]";
  }, a._addPropsToClasses = function () {
    var a = this._soundInstanceClass;a.context = this.context, a._scratchBuffer = b._scratchBuffer, a.destinationNode = this.gainNode, a._panningModel = this._panningModel, this._loaderClass.context = this.context;
  }, a._updateVolume = function () {
    var a = createjs.Sound._masterMute ? 0 : this._volume;a != this.gainNode.gain.value && (this.gainNode.gain.value = a);
  }, createjs.WebAudioPlugin = createjs.promote(WebAudioPlugin, "AbstractPlugin");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function HTMLAudioTagPool() {
    throw "HTMLAudioTagPool cannot be instantiated";
  }function a() {
    this._tags = [];
  }var b = HTMLAudioTagPool;b._tags = {}, b._tagPool = new a(), b._tagUsed = {}, b.get = function (a) {
    var c = b._tags[a];return null == c ? (c = b._tags[a] = b._tagPool.get(), c.src = a) : b._tagUsed[a] ? (c = b._tagPool.get(), c.src = a) : b._tagUsed[a] = !0, c;
  }, b.set = function (a, c) {
    c == b._tags[a] ? b._tagUsed[a] = !1 : b._tagPool.set(c);
  }, b.remove = function (a) {
    var c = b._tags[a];return null == c ? !1 : (b._tagPool.set(c), delete b._tags[a], delete b._tagUsed[a], !0);
  }, b.getDuration = function (a) {
    var c = b._tags[a];return null != c && c.duration ? 1e3 * c.duration : 0;
  }, createjs.HTMLAudioTagPool = HTMLAudioTagPool;var c = a.prototype;c.constructor = a, c.get = function () {
    var a;return a = 0 == this._tags.length ? this._createTag() : this._tags.pop(), null == a.parentNode && document.body.appendChild(a), a;
  }, c.set = function (a) {
    var b = createjs.indexOf(this._tags, a);-1 == b && (this._tags.src = null, this._tags.push(a));
  }, c.toString = function () {
    return "[TagPool]";
  }, c._createTag = function () {
    var a = document.createElement("audio");return a.autoplay = !1, a.preload = "none", a;
  };
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function HTMLAudioSoundInstance(a, b, c, d) {
    this.AbstractSoundInstance_constructor(a, b, c, d), this._audioSpriteStopTime = null, this._delayTimeoutId = null, this._endedHandler = createjs.proxy(this._handleSoundComplete, this), this._readyHandler = createjs.proxy(this._handleTagReady, this), this._stalledHandler = createjs.proxy(this._playFailed, this), this._audioSpriteEndHandler = createjs.proxy(this._handleAudioSpriteLoop, this), this._loopHandler = createjs.proxy(this._handleSoundComplete, this), c ? this._audioSpriteStopTime = .001 * (b + c) : this._duration = createjs.HTMLAudioTagPool.getDuration(this.src);
  }var a = createjs.extend(HTMLAudioSoundInstance, createjs.AbstractSoundInstance);a.setMasterVolume = function () {
    this._updateVolume();
  }, a.setMasterMute = function () {
    this._updateVolume();
  }, a.toString = function () {
    return "[HTMLAudioSoundInstance]";
  }, a._removeLooping = function () {
    null != this._playbackResource && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1));
  }, a._addLooping = function () {
    null == this._playbackResource || this._audioSpriteStopTime || (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0);
  }, a._handleCleanUp = function () {
    var a = this._playbackResource;if (null != a) {
      a.pause(), a.loop = !1, a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), a.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1);try {
        a.currentTime = this._startTime;
      } catch (b) {}createjs.HTMLAudioTagPool.set(this.src, a), this._playbackResource = null;
    }
  }, a._beginPlaying = function (a) {
    return this._playbackResource = createjs.HTMLAudioTagPool.get(this.src), this.AbstractSoundInstance__beginPlaying(a);
  }, a._handleSoundReady = function () {
    if (4 !== this._playbackResource.readyState) {
      var a = this._playbackResource;return a.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), a.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), a.preload = "auto", void a.load();
    }this._updateVolume(), this._playbackResource.currentTime = .001 * (this._startTime + this._position), this._audioSpriteStopTime ? this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1) : (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), 0 != this._loop && (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)), this._playbackResource.play();
  }, a._handleTagReady = function () {
    this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), this._handleSoundReady();
  }, a._pause = function () {
    this._playbackResource.pause();
  }, a._resume = function () {
    this._playbackResource.play();
  }, a._updateVolume = function () {
    if (null != this._playbackResource) {
      var a = this._muted || createjs.Sound._masterMute ? 0 : this._volume * createjs.Sound._masterVolume;a != this._playbackResource.volume && (this._playbackResource.volume = a);
    }
  }, a._calculateCurrentPosition = function () {
    return 1e3 * this._playbackResource.currentTime - this._startTime;
  }, a._updatePosition = function () {
    this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1);try {
      this._playbackResource.currentTime = .001 * (this._position + this._startTime);
    } catch (a) {
      this._handleSetPositionSeek(null);
    }
  }, a._handleSetPositionSeek = function () {
    null != this._playbackResource && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1));
  }, a._handleAudioSpriteLoop = function () {
    this._playbackResource.currentTime <= this._audioSpriteStopTime || (this._playbackResource.pause(), 0 == this._loop ? this._handleSoundComplete(null) : (this._position = 0, this._loop--, this._playbackResource.currentTime = .001 * this._startTime, this._paused || this._playbackResource.play(), this._sendEvent("loop")));
  }, a._handleLoop = function () {
    0 == this._loop && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1));
  }, a._updateStartTime = function () {
    this._audioSpriteStopTime = .001 * (this._startTime + this._duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1));
  }, a._updateDuration = function () {
    this._audioSpriteStopTime = .001 * (this._startTime + this._duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1));
  }, a._setDurationFromSource = function () {
    this._duration = createjs.HTMLAudioTagPool.getDuration(this.src), this._playbackResource = null;
  }, createjs.HTMLAudioSoundInstance = createjs.promote(HTMLAudioSoundInstance, "AbstractSoundInstance");
}(), this.createjs = this.createjs || {}, function () {
  "use strict";
  function HTMLAudioPlugin() {
    this.AbstractPlugin_constructor(), this._capabilities = b._capabilities, this._loaderClass = createjs.SoundLoader, this._soundInstanceClass = createjs.HTMLAudioSoundInstance;
  }var a = createjs.extend(HTMLAudioPlugin, createjs.AbstractPlugin),
      b = HTMLAudioPlugin;b.MAX_INSTANCES = 30, b._AUDIO_READY = "canplaythrough", b._AUDIO_ENDED = "ended", b._AUDIO_SEEKED = "seeked", b._AUDIO_STALLED = "stalled", b._TIME_UPDATE = "timeupdate", b._capabilities = null, b.isSupported = function () {
    return b._generateCapabilities(), null != b._capabilities;
  }, b._generateCapabilities = function () {
    if (null == b._capabilities) {
      var a = document.createElement("audio");if (null == a.canPlayType) return null;b._capabilities = { panning: !1, volume: !0, tracks: -1 };for (var c = createjs.Sound.SUPPORTED_EXTENSIONS, d = createjs.Sound.EXTENSION_MAP, e = 0, f = c.length; f > e; e++) {
        var g = c[e],
            h = d[g] || g;b._capabilities[g] = "no" != a.canPlayType("audio/" + g) && "" != a.canPlayType("audio/" + g) || "no" != a.canPlayType("audio/" + h) && "" != a.canPlayType("audio/" + h);
      }
    }
  }, a.register = function (a) {
    var b = createjs.HTMLAudioTagPool.get(a.src),
        c = this.AbstractPlugin_register(a);return c.setTag(b), c;
  }, a.removeSound = function (a) {
    this.AbstractPlugin_removeSound(a), createjs.HTMLAudioTagPool.remove(a);
  }, a.create = function (a, b, c) {
    var d = this.AbstractPlugin_create(a, b, c);return d.playbackResource = null, d;
  }, a.toString = function () {
    return "[HTMLAudioPlugin]";
  }, a.setVolume = a.getVolume = a.setMute = null, createjs.HTMLAudioPlugin = createjs.promote(HTMLAudioPlugin, "AbstractPlugin");
}();
},{}],13:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var fadeIn = function fadeIn(elm, cb) {
	elm.show();
	setTimeout(function () {
		elm.addClass('fadeIn');
		cb && setTimeout(function () {
			cb();
		}, 1000);
	}, 0);
};

var canvasIn = function canvasIn(elm, cb) {
	elm.show();
	setTimeout(function () {
		elm.addClass('canvasIn');
		cb && setTimeout(function () {
			cb();
		}, 1000);
	}, 0);
};

var fadeOut = function fadeOut(elm) {
	setTimeout(function () {
		elm.addClass('fadeOut');
		// 当有多个动画进行时，事件貌似有BUG
		elm.on('webkitTransitionEnd', function () {
			elm.removeClass('fadeOut fadeIn');
			elm.hide();
			elm.off('webkitTransitionEnd');
		});
	}, 0);
};

var canvasOut = function canvasOut(elm) {
	setTimeout(function () {
		elm.addClass('canvasOut');
		// 当有多个动画进行时，事件貌似有BUG
		elm.on('webkitTransitionEnd', function () {
			elm.removeClass('canvasOut canvasIn');
			elm.hide();
			elm.off('webkitTransitionEnd');
		});
	}, 0);
};

exports.fadeIn = fadeIn;
exports.fadeOut = fadeOut;
exports.canvasIn = canvasIn;
exports.canvasOut = canvasOut;
},{}],10:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	status: {
		_first: false,
		_second: false,
		_third: false,
		_ended: false,
		_canSwipe: false
	},
	on: function on(type, fn) {
		$(document).on(type, fn);
	},
	emit: function emit(type) {
		$(document).trigger(type);
	}
};
},{}],26:[function(require,module,exports) {
module.exports="/dist/cb251d45f0f761b68784c932ec7fa007.png";
},{}],30:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {

  if (arguments.length === 2) {
    x = y = 0;
    w = ctx.canvas.width;
    h = ctx.canvas.height;
  }

  // default offset is center
  offsetX = offsetX ? offsetX : 0.5;
  offsetY = offsetY ? offsetY : 0.5;

  // keep bounds [0.0, 1.0]
  if (offsetX < 0) offsetX = 0;
  if (offsetY < 0) offsetY = 0;
  if (offsetX > 1) offsetX = 1;
  if (offsetY > 1) offsetY = 1;

  var iw = img.width,
      ih = img.height,
      r = Math.min(w / iw, h / ih),
      nw = iw * r,
      /// new prop. width
  nh = ih * r,
      /// new prop. height
  cx,
      cy,
      cw,
      ch,
      ar = 1;

  // decide which gap to fill    
  if (nw < w) ar = w / nw;
  if (nh < h) ar = h / nh;
  nw *= ar;
  nh *= ar;

  // calc source rectangle
  cw = iw / (nw / w);
  ch = ih / (nh / h);

  cx = (iw - cw) * offsetX;
  cy = (ih - ch) * offsetY;

  // make sure source rectangle is valid
  if (cx < 0) cx = 0;
  if (cy < 0) cy = 0;
  if (cw > iw) cw = iw;
  if (ch > ih) ch = ih;

  // fill image in dest. rectangle
  ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
}

exports.default = drawImageProp;
},{}],23:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bgBw = require('../assets/bg-bw.png');

var _bgBw2 = _interopRequireDefault(_bgBw);

var _bgRgb = require('../assets/bg-rgb.png');

var _bgRgb2 = _interopRequireDefault(_bgRgb);

var _canvasImageCover = require('./canvas-image-cover.js');

var _canvasImageCover2 = _interopRequireDefault(_canvasImageCover);

var _bus = require('./bus.js');

var _bus2 = _interopRequireDefault(_bus);

var _util = require('./util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.initCanvas();
        this.createTopImage();
        this.bindEvent();
        this.oldX;
        this.oldY;
    }

    _createClass(_class, [{
        key: 'bindEvent',
        value: function bindEvent() {
            var _this = this;

            $(document).on('touchmove', function (e) {
                e.preventDefault();
                if (!_bus2.default.status._canSwipe) return;
                var x = e.targetTouches[0].pageX;
                var y = e.targetTouches[0].pageY;
                _this._drawCircle(x, y, _this.oldX, _this.oldY, 30, 10);
                _this._open(function () {
                    _bus2.default.emit('lockSwipe');
                    _bus2.default.emit('hideSwipe');
                    _bus2.default.emit('videoPlay');
                });
                _this.oldX = x;
                _this.oldY = y;
            });
            $(document).on('touchend', function () {
                _this.oldX = -1;
                _this.oldY = -1;
            });
            _bus2.default.on('openSwipe', function () {
                _bus2.default.status._canSwipe = true;
            });
            _bus2.default.on('lockSwipe', function () {
                _bus2.default.status._canSwipe = false;
            });
            _bus2.default.on('showSwipe', function () {
                (0, _util.canvasIn)($('.page__playing__back'));
                (0, _util.canvasIn)($('.page__playing__canvas'));
                _bus2.default.emit('openSwipe');
            });
            _bus2.default.on('hideSwipe', function () {
                (0, _util.canvasOut)($('.page__playing__back'));
                (0, _util.canvasOut)($('.page__playing__canvas'));
            });
            _bus2.default.on('reRender', function () {
                _this.ctx.globalCompositeOperation = "source-over";
                (0, _canvasImageCover2.default)(_this.ctx, _this.img);
                _this.ctx.globalCompositeOperation = "destination-out";
            });
        }
    }, {
        key: 'initCanvas',
        value: function initCanvas() {
            this.canvas = $('.page__playing__canvas')[0];
            this.ctx = this.canvas.getContext('2d');
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        }
    }, {
        key: 'showBack',
        value: function showBack() {
            $('.page__playing__back').show();
        }
    }, {
        key: 'hideBack',
        value: function hideBack() {
            $('.page__playing__back').hide();
        }
    }, {
        key: 'createBottomImage',
        value: function createBottomImage(cb) {
            var _this2 = this;

            var img = new Image();
            img.src = _bgRgb2.default;
            img.onload = function () {
                _this2._drawFullImage(img);
                cb();
            };
        }
    }, {
        key: 'createTopImage',
        value: function createTopImage(cb) {
            var _this3 = this;

            this.img = new Image();
            this.img.src = _bgBw2.default;
            this.img.onload = function () {
                // this._drawFullImage(img);
                (0, _canvasImageCover2.default)(_this3.ctx, _this3.img);
                _this3.ctx.globalCompositeOperation = "destination-out";
                cb && cb();
            };
        }
    }, {
        key: '_drawFullImage',
        value: function _drawFullImage(img) {
            this.ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, this.canvas.width, this.canvas.height);
        }
    }, {
        key: '_drawCircle',
        value: function _drawCircle(x, y, ox, oy, r, dis) {

            this.ctx.beginPath();
            this.ctx.fillStyle = '#f00';
            this.ctx.arc(x, y, r, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.closePath();

            if (ox >= 0 && oy >= 0) {
                var disX = x - ox;
                var disY = y - oy;
                if (Math.abs(disX) > dis) {
                    var halfX = Math.floor(disX / 2);
                    var halfY = Math.floor(disY / 2);
                    this._drawCircle(x - halfX, y - halfY, ox, oy, r, dis);
                    this._drawCircle(x, y, ox + halfX, oy + halfY, r, dis);
                } else if (Math.abs(disY) > dis) {
                    var halfX = Math.floor(disX / 2);
                    var halfY = Math.floor(disY / 2);
                    this._drawCircle(x - halfX, y - halfY, ox, oy, r, dis);
                    this._drawCircle(x, y, ox + halfX, oy + halfY, r, dis);
                }
            }
        }
    }, {
        key: '_open',
        value: function _open(cb) {
            var imgData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
            var dataLength = imgData.data.length;
            var num = 0;
            for (var i = 0; i < dataLength; i++) {
                if (imgData.data[i] == 0) {
                    num++;
                }
            }
            if (num >= dataLength * 0.8) {
                this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
                cb();
            }
        }
    }]);

    return _class;
}();

exports.default = _class;
},{"../assets/bg-bw.png":26,"../assets/bg-rgb.png":17,"./canvas-image-cover.js":30,"./bus.js":10,"./util.js":13}],22:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bus = require('./bus.js');

var _bus2 = _interopRequireDefault(_bus);

var _util = require('./util.js');

var _canvas = require('./canvas.js');

var _canvas2 = _interopRequireDefault(_canvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.video = $('#video')[0];
        this.render();
        this.play();
        this.jumpTo();
        this.bindEvent();
    }

    _createClass(_class, [{
        key: 'bindEvent',
        value: function bindEvent() {
            var _this = this;

            this.circle = $('.page__playing__circle');
            this.bottle = $('.page__playing__bottle');
            this.knock = $('.page__playing__knock');
            this._addEvent([this.circle, this.bottle, this.knock]);
            _bus2.default.on('replayVideo', this.replayVideo.bind(this));
            _bus2.default.on('videoPlay', function () {
                _this.video.play();
            });
        }
    }, {
        key: '_addEvent',
        value: function _addEvent(elms) {
            var _this2 = this;

            elms.forEach(function (elm) {
                elm.on('tap', function () {
                    _this2.video.play();
                    elm.hide();
                });
            });
        }
    }, {
        key: '_first',
        value: function _first() {
            if (this.video.currentTime >= 58.8 && this.video.currentTime <= 65 && !_bus2.default.status._first) {
                _bus2.default.status._first = true;
                this.video.pause();
                _bus2.default.emit('showSwipe');
            }
        }
    }, {
        key: '_second',
        value: function _second() {
            if (this.video.currentTime >= 70.5 && this.video.currentTime <= 75 && !_bus2.default.status._second) {
                _bus2.default.status._second = true;
                this.video.pause();
                this.bottle.show();
            }
        }
    }, {
        key: '_third',
        value: function _third() {
            if (this.video.currentTime >= 81.6 && this.video.currentTime <= 85 && !_bus2.default.status._third) {
                _bus2.default.status._third = true;
                this.video.pause();
                this.knock.show();
            }
        }
    }, {
        key: 'jumpTo',
        value: function jumpTo() {
            var _this3 = this;

            setTimeout(function () {
                _this3.video.currentTime = 55;
            }, 1000);
        }
    }, {
        key: 'play',
        value: function play() {
            this.video.play();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            setInterval(function () {
                // console.log(this.video.currentTime);
                _this4._first();
                _this4._second();
                _this4._third();
                _this4.videoEnd();
            }, 100);
        }
    }, {
        key: 'videoEnd',
        value: function videoEnd() {
            if (this.video.currentTime > 127 && !_bus2.default.status._ended) {
                _bus2.default.status._ended = true;
                (0, _util.fadeOut)($('.page__playing'));
                _bus2.default.emit('fontEndAnimation');
            }
        }
    }, {
        key: 'replayVideo',
        value: function replayVideo() {
            _bus2.default.status._first = false;
            _bus2.default.status._second = false;
            _bus2.default.status._third = false;
            _bus2.default.status._ended = false;
            this.video.currentTime = 0;
            this.video.play();
            this.showVideo();
            _bus2.default.emit('reRender');
        }
    }, {
        key: 'showVideo',
        value: function showVideo() {
            (0, _util.fadeIn)($('.page__playing'));
        }
    }]);

    return _class;
}();

exports.default = _class;
},{"./bus.js":10,"./util.js":13,"./canvas.js":23}],11:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	baseUrl: '//24haowan-cdn.shanyougame.com/dingzhi/yamibuy/static'
};
},{}],9:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = require('./util.js');

var _font = require('./font.js');

var _font2 = _interopRequireDefault(_font);

var _bus = require('./bus.js');

var _bus2 = _interopRequireDefault(_bus);

var _video = require('./video.js');

var _video2 = _interopRequireDefault(_video);

var _canvas = require('./canvas.js');

var _canvas2 = _interopRequireDefault(_canvas);

var _config = require('./config.js');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.init();
        this.preload();
        setTimeout(function () {
            _bus2.default.emit('fontAnimation');
            var canvas = new _canvas2.default();
        }, 200);
    }

    _createClass(_class, [{
        key: 'init',
        value: function init() {
            this.queue = new createjs.LoadQueue(true);
            createjs.Sound.alternateExtensions = ["mp3"];
            this.queue.installPlugin(createjs.Sound);
        }
    }, {
        key: 'preload',
        value: function preload() {
            var _this = this;

            this.queue.loadManifest([{
                src: _config2.default.baseUrl + '/video/yami.mp4?v=1',
                type: createjs.Types.VIDEO
            }, {
                src: _config2.default.baseUrl + '/audio/BGM.mp3',
                id: 'bgm'
            }]);

            var fileLoadHandle = function fileLoadHandle(e) {
                if (e.item.type == createjs.Types.VIDEO) {
                    // 说明是视频
                    $('#video').attr('src', e.result.src);
                }
            };

            var completeHandle = function completeHandle() {
                _this._button();
            };

            var progressHandle = function progressHandle(e) {
                $('.page__loading__progress').html((e.progress * 100).toFixed(0) + '%');
            };

            this.queue.on('fileload', fileLoadHandle);
            this.queue.on('complete', completeHandle);
            this.queue.on('progress', progressHandle);
        }
    }, {
        key: '_button',
        value: function _button() {
            $('.page__loading__progress').hide();
            (0, _util.fadeIn)($('.page__loading__button'), function () {
                $('.page__loading__button').addClass('page__loading__button--flash');
            });
            $('.page__loading__button').on('tap', function () {
                $('.page__playing').show();
                (0, _util.fadeIn)($('.page__playing'), function () {
                    $('.page__loading').hide();
                    $('.page__ending').show();
                });
                // createjs.Sound.play("bgm");
                var video = new _video2.default();
            });
        }
    }]);

    return _class;
}();

exports.default = _class;
},{"./util.js":13,"./font.js":8,"./bus.js":10,"./video.js":22,"./canvas.js":23,"./config.js":11}],12:[function(require,module,exports) {
module.exports = {
    "loading": [
    {
        "w": "138",
        "h": "138",
        "l": "0",
        "t": "0"
    },
    {
        "w": "86",
        "h": "88",
        "l": "46",
        "t": "146"
    },
    {
        "w": "57",
        "h": "74",
        "l": "88",
        "t": "238"
    },
    {
        "w": "83",
        "h": "131",
        "l": "29",
        "t": "291"
    },
    {
        "w": "37",
        "h": "43",
        "l": "106",
        "t": "441"
    },
    {
        "w": "98",
        "h": "98",
        "l": "192",
        "t": "-80"
    },
    {
        "w": "68",
        "h": "68",
        "l": "232",
        "t": "16"
    },
    {
        "w": "59",
        "h": "69",
        "l": "252",
        "t": "98"
    },
    {
        "w": "89",
        "h": "108",
        "l": "195",
        "t": "154"
    },
    {
        "w": "93",
        "h": "97",
        "l": "203",
        "t": "277"
    },
    {
        "w": "99",
        "h": "96",
        "l": "154",
        "t": "367"
    },
    {
        "w": "67",
        "h": "68",
        "l": "247",
        "t": "454"
    },
    {
        "w": "89",
        "h": "92",
        "l": "180",
        "t": "528"
    },
    {
        "w": "18",
        "h": "18",
        "l": "231",
        "t": "641"
    },
    {
        "w": "18",
        "h": "18",
        "l": "254",
        "t": "676"
    },
    {
        "w": "18",
        "h": "18",
        "l": "227",
        "t": "722"
    }],
    "ending":[{
        "w": "59",
        "h": "61",
        "l": "0",
        "t": "0"
    },
    {
        "w": "40",
        "h": "41",
        "l": "63",
        "t": "25"
    },
    {
        "w": "41",
        "h": "50",
        "l": "104",
        "t": "34"
    },
    {
        "w": "48",
        "h": "50",
        "l": "148",
        "t": "13"
    },
    {
        "w": "63",
        "h": "66",
        "l": "202",
        "t": "-18"
    },
    {
        "w": "76",
        "h": "75",
        "l": "273",
        "t": "-16"
    },
    {
        "w": "51",
        "h": "53",
        "l": "358",
        "t": "32"
    },
    {
        "w": "61",
        "h": "66",
        "l": "410",
        "t": "17"
    },
    {
        "w": "43",
        "h": "45",
        "l": "472",
        "t": "41"
    },
    {
        "w": "50",
        "h": "50",
        "l": "531",
        "t": "37"
    },
    {
        "w": "18",
        "h": "22",
        "l": "586",
        "t": "70"
    },
    {
        "w": "69",
        "h": "69",
        "l": "-40",
        "t": "124"
    },
    {
        "w": "49",
        "h": "48",
        "l": "30",
        "t": "152"
    },
    {
        "w": "54",
        "h": "58",
        "l": "76",
        "t": "120"
    },
    {
        "w": "42",
        "h": "44",
        "l": "134",
        "t": "137"
    },
    {
        "w": "33",
        "h": "48",
        "l": "174",
        "t": "112"
    },
    {
        "w": "39",
        "h": "42",
        "l": "216",
        "t": "117"
    },
    {
        "w": "48",
        "h": "53",
        "l": "259",
        "t": "133"
    },
    {
        "w": "43",
        "h": "14",
        "l": "312",
        "t": "157"
    },
    {
        "w": "54",
        "h": "47",
        "l": "355",
        "t": "115"
    },
    {
        "w": "70",
        "h": "70",
        "l": "409",
        "t": "131"
    },
    {
        "w": "73",
        "h": "70",
        "l": "487",
        "t": "131"
    },
    {
        "w": "41",
        "h": "53",
        "l": "576",
        "t": "124"
    }]
};
},{}],3:[function(require,module,exports) {
'use strict';

require('../css/main.scss');

var _rem = require('./rem.js');

var _rem2 = _interopRequireDefault(_rem);

var _font = require('./font.js');

var _font2 = _interopRequireDefault(_font);

var _vconsole = require('vconsole');

var _vconsole2 = _interopRequireDefault(_vconsole);

var _preloadMin = require('../../lib/preload.min.js');

var _preloadMin2 = _interopRequireDefault(_preloadMin);

var _soundjsMin = require('../../lib/soundjs.min.js');

var _soundjsMin2 = _interopRequireDefault(_soundjsMin);

var _preload = require('./preload.js');

var _preload2 = _interopRequireDefault(_preload);

var _bus = require('./bus.js');

var _bus2 = _interopRequireDefault(_bus);

var _config = require('./config.js');

var _config2 = _interopRequireDefault(_config);

var _font3 = require('../config/font.json');

var _font4 = _interopRequireDefault(_font3);

var _util = require('./util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_bus2.default.font = new _font2.default({
    fontBaseUrl: _config2.default.baseUrl + '/assets/font-loading',
    parent: $('.page__loading__font'),
    json: _font4.default.loading
});
_bus2.default.on('fontAnimation', function () {
    _bus2.default.font.addAnimation();
});

_bus2.default.fontEnd = new _font2.default({
    fontBaseUrl: _config2.default.baseUrl + '/assets/font-ending',
    parent: $('.page__ending__font'),
    json: _font4.default.ending,
    cb: function cb() {
        $('.page__ending__button').show();
        setTimeout(function () {
            (0, _util.fadeIn)($('.page__ending__button'));
        }, 0);
    }
});
_bus2.default.on('fontEndAnimation', function () {
    _bus2.default.fontEnd.addAnimation();
});

$('.page__ending__share').on('tap', function () {
    $('.page__share').addClass('fadeInDown');
});

$('.page__share').on('tap', function () {
    $('.page__share').removeClass('fadeInDown');
});

$('.page__ending__again').on('tap', function () {
    // 重新观看视频
    _bus2.default.emit('replayVideo');
});

// new vconsole();
new _preload2.default();
},{"../css/main.scss":6,"./rem.js":7,"./font.js":8,"vconsole":28,"../../lib/preload.min.js":4,"../../lib/soundjs.min.js":5,"./preload.js":9,"./bus.js":10,"./config.js":11,"../config/font.json":12,"./util.js":13}],35:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '63509' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[35,3])
//# sourceMappingURL=/dist/124b57fa27b5e6a559c32cf2b48491c9.map