(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{757:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(165),u=n(95),c=n(632),i=n.n(c),l=n(166);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(c,e);var t,n,r,u=y(c);function c(){var e;s(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return E(h(e=u.call.apply(u,[this].concat(n))),"state",{username:"",password:""}),E(h(e),"handleChange",(function(t){e.setState(E({},t.target.name,t.target.value))})),E(h(e),"handleSubmit",(function(t){t.preventDefault(),e.props.userLoginFetch(e.state)})),e}return t=c,(n=[{key:"render",value:function(){return o.a.createElement(a.m,{fluid:!0},o.a.createElement(a.U,{className:"mt-2 mb-2"},o.a.createElement(a.k,{sm:"8",className:"mx-auto"},o.a.createElement(a.v,{onSubmit:this.handleSubmit},o.a.createElement(i.a,null),o.a.createElement(a.w,null,o.a.createElement(a.K,{htmlFor:"username"},"Name"),o.a.createElement(a.D,{id:"username",name:"username",placeholder:"Enter your name",value:this.state.username,onChange:this.handleChange,required:!0})),o.a.createElement(a.w,null,o.a.createElement(a.K,{htmlFor:"nf-password"},"Password"),o.a.createElement(a.D,{type:"password",id:"password",name:"password",placeholder:"Enter Password..",value:this.state.password,onChange:this.handleChange,required:!0})),o.a.createElement(a.w,null,o.a.createElement(a.D,{type:"submit",value:"Submit",color:"info"})),this.props.loginError?o.a.createElement("p",null,"INVALID CREDENTIALS! PLEASE, CHECK YOUR USERNAME AND PASSWORD!"):null))))}}])&&p(t.prototype,n),r&&p(t,r),c}(r.Component),v=Object(u.b)((function(e){return{currentUser:e.currentUser,loginError:e.loginError}}),(function(e){return{userLoginFetch:function(t){return e(Object(l.m)(t))}}}))(w);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var o=_(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return R(this,n)}}function R(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(c,e);var t,n,r,u=P(c);function c(){return O(this,c),u.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){return o.a.createElement(a.f,null,o.a.createElement(a.i,{color:"dark",textColor:"light"},"Login"),o.a.createElement(v,null))}}])&&S(t.prototype,n),r&&S(t,r),c}(r.Component);t.default=function(){return o.a.createElement("div",{className:"c-app c-default-layout flex-row align-items-center"},o.a.createElement(a.m,null,o.a.createElement(a.U,{className:"justify-content-center"},o.a.createElement(a.k,{md:"6"},o.a.createElement(C,null)))))}}}]);
//# sourceMappingURL=14.main.js.map