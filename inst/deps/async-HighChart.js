(self.webpackChunkdash_high_charts=self.webpackChunkdash_high_charts||[]).push([[462],{718:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>j,defaultProps:()=>P,propTypes:()=>S});var n=e(609),o=e.n(n),i=e(316),c=e.n(i),u=e(120),a=e.n(u),s=e(900);function f(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}function p(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?p(Object(e),!0).forEach((function(r){y(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function y(t,r,e){return(r=d(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function b(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,d(n.key),n)}}function d(t){var r=function(t){if("object"!=O(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var e=r.call(t,"string");if("object"!=O(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==O(r)?r:r+""}function h(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(h=function(){return!!t})()}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}function v(t,r){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},v(t,r)}function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}var w={};s.dY.getApi=function(t){var r;return null===(r=w[function(t){if("object"!==O(t))return t;return"{"+Object.keys(t).sort().map((function(r){return JSON.stringify(r)+":"+((e=t[r])&&e.wild||JSON.stringify(e));var e})).join(",")+"}"}(t)])||void 0===r?void 0:r.chart};var g={listeners:{},on:function(t,r,e){t in g.listeners||(g.listeners[t]={}),g.listeners[t][r]=e},dispatch:function(t){for(var r in g.listeners)t in g.listeners[r]&&g.listeners[r][t]()},remove:function(t){delete g.listeners[t]}},j=function(t){function r(t){var e;return function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),(e=function(t,r,e){return r=m(r),function(t,r){if(r&&("object"==O(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,h()?Reflect.construct(r,e||[],m(t).constructor):r.apply(t,e))}(this,r,[t])).state=l(l({},e.props.parentState),{},{chartRef:null}),e.buildArray=e.buildArray.bind(e),e.chartRef=o().createRef(),e}return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&v(t,r)}(r,t),e=r,(n=[{key:"buildArray",value:function(t,r){return t?t.includes(r)?t:[].concat(function(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return f(t,r);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?f(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t),[r]):[JSON.parse(JSON.stringify(r))]}},{key:"componentDidMount",value:function(){var t=this.props.id;t&&(w[t]=this.chartRef.current,g.dispatch(t)),this.chartRef.current.chart.redraw()}},{key:"componentWillUnmount",value:function(){this.props.id&&(delete w[this.props.id],g.remove(this.props.id)),this.chartRef.current.chart.destroy()}},{key:"render",value:function(){var t=this.props,r=t.id,e=t.className,n=t.constructorType,i=t.options;return o().createElement("div",{id:r,className:e},o().createElement(c(),{highcharts:window.Highcharts,options:i,constructorType:n,ref:this.chartRef}))}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,n}(n.Component);j.defaultProps=s.Gs,j.propTypes=l({parentState:a().any},s.tu);var S=j.propTypes,P=j.defaultProps},316:function(t,r,e){var n;"undefined"!=typeof self&&self,t.exports=(n=e(609),function(t){function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var e={};return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},r.p="",r(r.s=0)}([function(t,r,e){"use strict";function n(){return n=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},n.apply(this,arguments)}function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(r,"__esModule",{value:!0}),e.d(r,"HighchartsReact",(function(){return f}));var u=e(1),a=e.n(u),s="undefined"!=typeof window?u.useLayoutEffect:u.useEffect,f=Object(u.memo)(Object(u.forwardRef)((function(t,r){var e=Object(u.useRef)(),i=Object(u.useRef)(),f=Object(u.useRef)(t.constructorType),p=Object(u.useRef)(t.highcharts);return s((function(){function r(){var r=t.highcharts||"object"===("undefined"==typeof window?"undefined":c(window))&&window.Highcharts,n=t.constructorType||"chart";r?r[n]?t.options?i.current=r[n](e.current,t.options,t.callback):console.warn('The "options" property was not passed.'):console.warn('The "constructorType" property is incorrect or some required module is not imported.'):console.warn('The "highcharts" property was not passed.')}if(i.current){if(!1!==t.allowChartUpdate)if(t.constructorType!==f.current||t.highcharts!==p.current)f.current=t.constructorType,p.current=t.highcharts,r();else if(!t.immutable&&i.current){var n;(n=i.current).update.apply(n,[t.options].concat(o(t.updateArgs||[!0,!0])))}else r()}else r()}),[t.options,t.allowChartUpdate,t.updateArgs,t.containerProps,t.highcharts,t.constructorType]),s((function(){return function(){i.current&&(i.current.destroy(),i.current=null)}}),[]),Object(u.useImperativeHandle)(r,(function(){return{get chart(){return i.current},container:e}}),[]),a.a.createElement("div",n({},t.containerProps,{ref:e}))})));r.default=f},function(t,r){t.exports=n}]))}}]);
//# sourceMappingURL=async-HighChart.js.map