(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{748:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(166),i=n(95),c=n(165),u=n(634),l=n.n(u);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n,r,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){m(o,r,a,i,c,"next",e)}function c(e){m(o,r,a,i,c,"throw",e)}i(void 0)}))}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var a=v(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=new(n(29).a),S=[{id:-1,position:"Choose manager position"},{id:"SafeMan",position:"Safety Manager"},{id:"SecMan",position:"Security Manager"},{id:"SecOff",position:"Security Officer"},{id:"SiteOwn",position:"Site Owner"},{id:"WorkOwn",position:"Owner of Work"},{id:"SecGrd",position:"Security Guards"}],C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(n,e);var t=b(n);function n(){var e;d(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return E(O(e=t.call.apply(t,[this].concat(o))),"state",{username:"",name:"",email:"",position:-1,company:e.props.company,role:"CliMan",department:"",error:!1}),E(O(e),"handleChange",(function(t){e.setState(E({},t.target.name,t.target.value))})),E(O(e),"handleSubmit",function(){var t=h(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!(parseInt(e.state.position)<0)){t.next=5;break}e.setState({error:"Manager Position was not selected! Please, choose position form the list"}),t.next=9;break;case 5:return e.formData=e.state,delete e.formData.error,t.next=9,w.updateEntityOf("client_managers",e.props.match.params.id,e.formData).then((function(){e.props.history.goBack()}),(function(t){console.error(t),e.setState({error:"Manager update failed! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),E(O(e),"componentDidMount",h(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getProfileFetch().then((function(){return w.getDetailsOf("client_managers",e.props.match.params.id)})).then((function(t){return e.setState(f({},t))}));case 2:case"end":return t.stop()}}),t)})))),E(O(e),"render",(function(){return a.a.createElement(c.ab,null,a.a.createElement(c.q,null,a.a.createElement(c.f,null,a.a.createElement(c.i,null,a.a.createElement(c.k,null,"Mananger details")),a.a.createElement(c.g,null,a.a.createElement(c.B,{onSubmit:e.handleSubmit},a.a.createElement(l.a,null),a.a.createElement(c.C,null,a.a.createElement(c.Q,{htmlFor:"username"},"Manager username"),a.a.createElement(c.J,{id:"username",name:"username",placeholder:"Username",value:e.state.username,onChange:e.handleChange,required:!0})),a.a.createElement(c.C,null,a.a.createElement(c.Q,{htmlFor:"name"},"Manager verbose name"),a.a.createElement(c.J,{id:"name",name:"name",placeholder:"Verbose name",value:e.state.name,onChange:e.handleChange,required:!0})),a.a.createElement(c.C,null,a.a.createElement(c.Q,{htmlFor:"email"},"Manager email"),a.a.createElement(c.J,{id:"email",type:"email",name:"email",placeholder:"Email",value:e.state.email,onChange:e.handleChange,required:!0})),a.a.createElement(c.C,null,a.a.createElement(c.Q,{htmlFor:"target_type"},"Manager Position"),a.a.createElement(c.bb,{id:"position",name:"position",placeholder:"Choose position",value:e.state.position,onChange:e.handleChange,required:!0},S.map((function(e){return a.a.createElement("option",{key:e.id,value:e.id},e.position)})))),a.a.createElement(c.C,null,a.a.createElement(c.Q,{htmlFor:"department"},"Manager department"),a.a.createElement(c.J,{id:"department",name:"department",placeholder:"Department",value:e.state.department,onChange:e.handleChange,required:!0})),a.a.createElement(c.C,null,a.a.createElement(c.e,{shape:"pill",type:"submit",color:"dark",variant:"outline",block:!0},"Save changes")),e.state.error?a.a.createElement("p",null,e.state.error):null)))))})),e}return n}(r.Component);t.default=Object(i.b)((function(e){return{company:e.currentUser.company}}),(function(e){return{getProfileFetch:function(){return e(Object(o.g)())}}}))(C)}}]);
//# sourceMappingURL=30.main.js.map