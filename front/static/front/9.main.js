(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{633:function(t,e,n){"use strict";var r=n(1),o=n.n(r),c=n(95),u=n(165);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(n,t);var e=f(n);function n(){var t;a(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return b(s(t=e.call.apply(e,[this].concat(c))),"alertOnClick",(function(e,n){t.props.history.push("".concat(t.props.match.url,"/").concat(e))})),b(s(t),"render",(function(){return o.a.createElement(u.U,null,o.a.createElement(u.k,null,o.a.createElement(u.f,null,o.a.createElement(u.i,{className:"d-flex justify-content-between"},o.a.createElement(u.j,null,t.props.tableName),"Projects"===t.props.tableName&&"Contr"===t.props.role?null:o.a.createElement(u.L,{className:"btn btn-outline-success",to:"".concat(t.props.match.url,"/new")},"Add new")),o.a.createElement(u.g,null,o.a.createElement(u.o,{items:t.props.tableData?t.props.tableData:[],fields:t.props.fields?t.props.fields:[],clickableRows:!0,hover:!0,striped:!0,bordered:!0,sorter:!0,footer:!0,tableFilter:!0,columnFilter:!0,size:"sm",itemsPerPage:10,itemsPerPageSelect:!0,pagination:!0,scopedSlots:{username:function(e){return o.a.createElement("td",null,o.a.createElement(u.e,{color:"link",onClick:function(n){t.alertOnClick(e.id,n)}},e.username))},project_name:function(e){return o.a.createElement("td",null,o.a.createElement(u.e,{color:"link",onClick:function(n){t.alertOnClick(e.id,n)}},e.project_name))}}})))))})),t}return n}(r.Component);e.a=Object(c.b)((function(t){return{role:t.currentUser.role}}),null)(m)},734:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),c=n(633),u=n(166),i=n(95);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function f(t,e,n,r,o,c,u){try{var i=t[c](u),a=i.value}catch(t){return void n(t)}i.done?e(a):Promise.resolve(a).then(r,o)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function u(t){f(c,r,o,u,i,"next",t)}function i(t){f(c,r,o,u,i,"throw",t)}u(void 0)}))}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?h(t):e}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w=function(t){switch(t){case"Pending":return"primary";case"Approved":return"success";case"Rejected":return"danger";default:return"primary"}},g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(n,t);var e=b(n);function n(){var t;s(this,n);for(var r=arguments.length,u=new Array(r),i=0;i<r;i++)u[i]=arguments[i];return v(h(t=e.call.apply(e,[this].concat(u))),"componentDidMount",p(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.props.getProfileFetch().then((function(){return t.props.getApprovalList()}));case 2:case"end":return e.stop()}}),e)})))),v(h(t),"render",(function(){return o.a.createElement(c.a,l({},t.props,{tableName:"Approvals",fields:t.props.projectTable.fields,getBadge:w,tableData:t.props.projectTable.tableData}))})),t}return n}(r.Component);e.default=Object(i.b)((function(t){return{projectTable:t.entityListTable}}),(function(t){return{getProfileFetch:function(){return t(Object(u.g)())},getApprovalList:function(){return t(Object(u.b)())},setApprovalId:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){return t(setApprovalId())}))}}))(g)}}]);
//# sourceMappingURL=9.main.js.map