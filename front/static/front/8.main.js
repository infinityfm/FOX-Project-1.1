(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{632:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(95),c=n(29),i=n(166),l=n(165),u=n(60);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t,n,r,o,a,c){try{var i=e[a](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,o)}var m=new c.a,y=[{Works_started:"Works started"},{Works_finished:"Works finished"},{Extended:"Extended"},{Closed:"Closed"}],d=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.value,o=t.props,e.next=3,m.patchEntityOf("projects",o.item.id,{status:r}).then((function(){o.getProjectList()}));case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){p(a,r,o,c,i,"next",e)}function i(e){p(a,r,o,c,i,"throw",e)}c(void 0)}))});return function(e,n){return t.apply(this,arguments)}}();t.a=Object(a.b)((function(e){return{role:e.currentUser.role}}),(function(e){return{getProjectList:function(){return e(Object(i.h)())}}}))((function(e){return"CliAdm"===e.role&&"Application processing"!==e.item.work_status?o.a.createElement(l.v,null,o.a.createElement(l.y,{className:"project-table-toggle"},o.a.createElement(u.a,{style:{margin:"0"},className:"table-dropdown-icon",name:"cilSettings"})),o.a.createElement(l.x,{className:"p-0 foxtable-dropdown-menu",placement:"bottom-end"},y.map((function(t,n){var r=s(Object.entries(t)[0],2),a=r[0],c=r[1];return o.a.createElement(l.w,{key:n,value:a,onClick:function(t){return d({value:a,props:e},t)}},c)})))):null}))},633:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(95),c=n(165),i=n(632);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(n,e);var t=p(n);function n(){var e;s(this,n);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return b(y(e=t.call.apply(t,[this].concat(a))),"state",{error:"",modal:!1}),b(y(e),"setModalVisibility",(function(){e.setState({modal:!e.state.modal})})),b(y(e),"alertOnClick",(function(t,n){e.props.history.push("".concat(e.props.match.url,"/").concat(t))})),b(y(e),"render",(function(){var t,n=e.props.fields?e.props.fields[0]:"username";return o.a.createElement(c.ab,null,o.a.createElement(c.q,null,o.a.createElement(c.f,null,o.a.createElement(c.i,{className:"d-flex justify-content-between"},o.a.createElement(c.k,null,e.props.tableName),"Projects"===e.props.tableName&&"Contr"===e.props.role?null:o.a.createElement(c.R,{className:"btn btn-pill btn-outline-success",to:"".concat(e.props.match.url,"/new")},"Add new")),o.a.createElement(c.g,null,o.a.createElement(c.u,{items:e.props.tableData?e.props.tableData:[],fields:e.props.fields?e.props.fields:[],clickableRows:!0,hover:!0,striped:!0,bordered:!0,sorter:!0,tableFilter:!0,columnFilter:!0,size:"sm",itemsPerPage:10,itemsPerPageSelect:!0,pagination:!0,scopedSlots:(t={},b(t,n,(function(t){return o.a.createElement("td",null,o.a.createElement(c.R,{to:"".concat(e.props.match.url,"/").concat(t.id)},t[n]))})),b(t,"application_status",(function(t){return o.a.createElement("td",null,o.a.createElement(c.a,{shape:"pill",color:e.props.getBadge(t.application_status)},t.application_status))})),b(t,"work_status",(function(t){return o.a.createElement("td",{className:"d-flex align-items-center"},o.a.createElement(c.a,{shape:"pill",color:e.props.getBadge(t.work_status)},t.work_status),o.a.createElement(i.a,u({key:t.id,item:t},e.props)))})),t)})))))})),e}return n}(r.Component);t.a=Object(a.b)((function(e){return{role:e.currentUser.role}}),null)(h)},636:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(1),o=n.n(r),a=n(165),c=function(e){return o.a.createElement(a.U,{show:e.danger,onClose:e.setModalVisibility,color:"danger"},o.a.createElement(a.X,{closeButton:!0},o.a.createElement(a.Y,null,"Confirm Deletion")),o.a.createElement(a.V,null,"Are you sure you want to delete this ".concat(e.entity,"?")),o.a.createElement(a.W,null,o.a.createElement(a.e,{color:"danger",onClick:e.confirmDelete},"Confirm")," ",o.a.createElement(a.e,{color:"secondary",onClick:e.setModalVisibility},"Cancel")))}},637:function(e,t,n){"use strict";n.d(t,"a",(function(){return r.a})),n.d(t,"b",(function(){return P}));var r=n(633),o=n(1),a=n.n(o),c=n(95),i=n(165),l=n(60),u=n(632),s=n(29),f=n(636);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t,n,r,o,a,c){try{var i=e[a](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,o)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){y(a,r,o,c,i,"next",e)}function i(e){y(a,r,o,c,i,"throw",e)}c(void 0)}))}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=new s.a,_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(n,e);var t=g(n);function n(){var e;b(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return O(w(e=t.call.apply(t,[this].concat(o))),"state",{delete_id:"",error:"",modal:!1}),O(w(e),"getEntityFromTableName",(function(){e.props.tableName.toLowercase()})),O(w(e),"callDeleteModal",(function(t){e.setState({delete_id:t},e.setModalVisibility)})),O(w(e),"setModalVisibility",(function(){e.setState({modal:!e.state.modal})})),O(w(e),"confirmDelete",function(){var t=d(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.props.tableName),r=e.props.tableName.toLowerCase().replace(" ","_"),t.next=4,j.deleteEntityOf(r,n).then((function(){e.props.updateList(e.props.role),e.setModalVisibility()}),(function(t){console.error(t),e.setState({error:"Could not delete entity! Please check your input and try again! In case this problem repeats, please contact your administrator!"})}));case 4:console.log("delete entity [".concat(r,"] ").concat(n));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),O(w(e),"alertOnClick",(function(t,n){e.props.history.push("".concat(e.props.match.url,"/").concat(t))})),O(w(e),"render",(function(){var t,n=e.props.fields?e.props.fields[0]:"username",r=e.state,o=r.delete_id,c=r.modal;return console.log("rendered"),a.a.createElement(i.ab,null,a.a.createElement(i.q,null,a.a.createElement(i.f,null,a.a.createElement(i.i,{className:"d-flex justify-content-between"},a.a.createElement(i.k,null,e.props.tableName),"Projects"===e.props.tableName&&"Contr"===e.props.role?null:a.a.createElement(i.R,{className:"btn btn-pill btn-outline-success",to:"".concat(e.props.match.url,"/new")},"Add new")),a.a.createElement(i.g,null,a.a.createElement(i.u,{items:e.props.tableData?e.props.tableData:[],fields:e.props.fields,clickableRows:!0,hover:!0,striped:!0,bordered:!0,sorter:!0,tableFilter:!0,columnFilter:!0,size:"sm",itemsPerPage:10,itemsPerPageSelect:!0,pagination:!0,scopedSlots:(t={},O(t,n,(function(t){return a.a.createElement("td",null,a.a.createElement(i.R,{to:"".concat(e.props.match.url,"/").concat(t.id)},t[n]))})),O(t,"application_status",(function(t){return a.a.createElement("td",null,a.a.createElement(i.a,{shape:"pill",color:e.props.getBadge(t.application_status)},t.application_status))})),O(t,"work_status",(function(t){return a.a.createElement("td",{className:"d-flex align-items-center"},a.a.createElement(i.a,{shape:"pill",color:e.props.getBadge(t.work_status)},t.work_status),a.a.createElement(u.a,m({key:t.id,item:t},e.props)))})),O(t,"delete_item",(function(t,n){return a.a.createElement("td",null,a.a.createElement(i.e,{color:"danger",variant:"ghost",size:"sm",onClick:function(){return e.callDeleteModal(t.id)},block:!0},a.a.createElement(l.a,{name:"cilTrash"})))})),t)}))),a.a.createElement(f.a,{setModalVisibility:e.setModalVisibility,danger:c,entity:"entity",confirmDelete:function(){return e.confirmDelete(o)}})))})),e}return n}(o.Component),P=Object(c.b)((function(e){return{role:e.currentUser.role}}),null)(_)},743:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(637),c=n(166),i=n(95);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t,n,r,o,a,c){try{var i=e[a](c),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,o)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){s(a,r,o,c,i,"next",e)}function i(e){s(a,r,o,c,i,"throw",e)}c(void 0)}))}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}},w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(n,e);var t=y(n);function n(){var e;p(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return g(b(e=t.call.apply(t,[this].concat(c))),"componentDidMount",f(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.getProfileFetch().then((function(){return e.props.getClientManagerList(e.props.role)}));case 2:case"end":return t.stop()}}),t)})))),g(b(e),"render",(function(){return"CliAdm"==e.props.role?o.a.createElement(a.b,u({},e.props,{tableName:"Managers",fields:e.props.clientManagerTable.fields,getBadge:v,tableData:e.props.clientManagerTable.tableData,updateList:e.props.getClientManagerList})):o.a.createElement(a.a,u({},e.props,{updateList:e.props.getClientManagerList,tableName:"Managers",fields:e.props.clientManagerTable.fields,getBadge:v,tableData:e.props.clientManagerTable.tableData}))})),e}return n}(r.Component);t.default=Object(i.b)((function(e){return{clientManagerTable:e.entityListTable,role:e.currentUser.role}}),(function(e){return{getProfileFetch:function(){return e(Object(c.g)())},getClientManagerList:function(t){return e(Object(c.c)(t))}}}))(w)}}]);
//# sourceMappingURL=8.main.js.map