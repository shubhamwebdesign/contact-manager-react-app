(this["webpackJsonpcontact-manager"]=this["webpackJsonpcontact-manager"]||[]).push([[0],{66:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),s=a(33),o=a.n(s),i=a(4),l=a(5),u=a(7),h=a(6),j=a(15),b=a(2),d=a(8),p=a.n(d),m=a(13),O=a(36),f=a(17),x=a(14),v=a.n(x),y=c.a.createContext(),g=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"ADD_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{contacts:[t.payload].concat(Object(O.a)(e.contacts))});case"UPDATE_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},C=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],dispatch:function(t){e.setState((function(e){return g(e,t)}))}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsx)(y.Provider,{value:this.state,children:this.props.children})}}]),a}(r.Component),N=y.Consumer,k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showContactInfo:!1},e.onClickDelete=function(){var e=Object(m.a)(p.a.mark((function e(t,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 2:a({type:"DELETE_CONTACT",payload:t});case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.name,r=t.email,c=t.phone,s=t.id,o=this.state.showContactInfo;return Object(n.jsx)(N,{children:function(t){var i=t.dispatch;return Object(n.jsxs)("div",{className:"card card-body mb-3",children:[Object(n.jsxs)("h4",{children:[a,Object(n.jsx)("i",{style:{cursor:"pointer",marginLeft:".5rem"},className:"fas fa-sort-down",onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})}}),Object(n.jsx)(j.b,{to:"contact/edit/".concat(s),children:Object(n.jsx)("i",{style:{cursor:"pointer",color:"green",float:"right",marginLeft:"1.5rem"},className:"fas fa-pencil-alt"})}),Object(n.jsx)("i",{style:{cursor:"pointer",color:"red",float:"right"},onClick:e.onClickDelete.bind(e,s,i),className:"fas fa-times"})]}),o?Object(n.jsxs)("ul",{className:"list-group",children:[Object(n.jsxs)("li",{className:"list-group-item",children:["Email: ",r]}),Object(n.jsxs)("li",{className:"list-group-item",children:["Ph No: ",c]})]}):null]})}})}}]),a}(r.Component),S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)(N,{children:function(e){var t=e.contacts;return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsxs)("h1",{className:"display-4 mt-4 mb-4",style:{textAlign:"center"},children:[Object(n.jsx)("span",{className:"text-danger",children:"Contact"})," List"]}),Object(n.jsx)("hr",{}),t.map((function(e){return Object(n.jsx)(k,{contact:e},e.id)}))]})}})}}]),a}(r.Component),w=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"display-4",children:"About Contact Manager"}),Object(n.jsx)("p",{className:"test-secondary",children:"simple app to manage contacts"})]})},E=function(e){var t=e.branding;return Object(n.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark py-3 bg-danger",children:[Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("a",{href:"/",className:"navbar-brand",style:{fontSize:"1.5rem"},children:t})}),Object(n.jsxs)("ul",{className:"navbar-nav mr-auto",style:{fontSize:"1.3rem"},children:[Object(n.jsx)("li",{className:"navbar-item",children:Object(n.jsxs)(j.b,{to:"/",className:"nav-link",children:[Object(n.jsx)("i",{className:"fas fa-home"}),"Home"]})}),Object(n.jsx)("li",{className:"navbar-item",children:Object(n.jsx)(j.b,{to:"/about",className:"nav-link",children:Object(n.jsx)("i",{className:"fas fa-question",children:"About"})})}),Object(n.jsx)("li",{className:"navbar-item",children:Object(n.jsx)(j.b,{to:"/contact/add",className:"nav-link",children:Object(n.jsx)("i",{class:"far fa-address-book",children:"Add Contact"})})})]})]})};E.defaultProps={brandign:"My React App"};var A=E,T=a(18),D=a(35),P=a.n(D),L=function(e){var t=e.label,a=e.name,r=e.placeholder,c=e.value,s=e.type,o=e.onChange,i=e.error;return Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:a,children:t}),Object(n.jsx)("input",{type:s,name:a,className:P()("form-control form-control-lg",{"is-invalid":i}),placeholder:r,value:c,onChange:o}),i&&Object(n.jsx)("div",{className:"invalid-feedback",children:i})]})};L.defaultProps={type:"text"};var q=L,F=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onChange=function(t){return e.setState(Object(T.a)({},t.target.name,t.target.value))},e.onSubmit=function(){var t=Object(m.a)(p.a.mark((function t(a,n){var r,c,s,o,i,l;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,s=r.email,o=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==s){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==o){t.next=11;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 11:return i={name:c,email:s,phone:o},t.next=14,v.a.post("https://jsonplaceholder.typicode.com/users",i);case 14:l=t.sent,a({type:"ADD_CONTACT",payload:l.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 18:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,r=t.email,c=t.phone,s=t.errors;return Object(n.jsx)(N,{children:function(t){var o=t.dispatch;return Object(n.jsxs)("div",{className:"card mb-3",children:[Object(n.jsx)("div",{className:"card-header",children:"Add Contact"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)("form",{onSubmit:e.onSubmit.bind(e,o),children:[Object(n.jsx)(q,{label:"Name",placeholder:"Enter Name",value:a,name:"name",onChange:e.onChange,error:s.name}),Object(n.jsx)(q,{label:"Email",placeholder:"Enter Email",type:"email",value:r,name:"email",onChange:e.onChange,error:s.email}),Object(n.jsx)(q,{label:"Phone",placeholder:"Enter Phone",value:c,name:"phone",onChange:e.onChange,error:s.phone}),Object(n.jsx)("input",{type:"submit",className:"btn btn-block btn-light"})]})})]})}})}}]),a}(r.Component),M=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onChange=function(t){return e.setState(Object(T.a)({},t.target.name,t.target.value))},e.onSubmit=function(){var t=Object(m.a)(p.a.mark((function t(a,n){var r,c,s,o,i,l,u;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,s=r.email,o=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==s){t.next=8;break}return e.setState({errors:{email:"Email is required"}}),t.abrupt("return");case 8:if(""!==o){t.next=11;break}return e.setState({errors:{phone:"Phone is required"}}),t.abrupt("return");case 11:return i={name:c,email:s,phone:o},l=e.props.match.params.id,t.next=15,v.a.put("https://jsonplaceholder.typicode.com/users/".concat(l),i);case 15:u=t.sent,a({type:"UPDATE_CONTACT",payload:u.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 19:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t,a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,v.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,r=t.email,c=t.phone,s=t.errors;return Object(n.jsx)(N,{children:function(t){var o=t.dispatch;return Object(n.jsxs)("div",{className:"card mb-3",children:[Object(n.jsx)("div",{className:"card-header",children:"Edit Contact"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsxs)("form",{onSubmit:e.onSubmit.bind(e,o),children:[Object(n.jsx)(q,{label:"Name",placeholder:"Enter Name",value:a,name:"name",onChange:e.onChange,error:s.name}),Object(n.jsx)(q,{label:"Email",placeholder:"Enter Email",type:"email",value:r,name:"email",onChange:e.onChange,error:s.email}),Object(n.jsx)(q,{label:"Phone",placeholder:"Enter Phone",value:c,name:"phone",onChange:e.onChange,error:s.phone}),Object(n.jsx)("input",{type:"submit",className:"btn btn-block btn-light",value:"update contact"})]})})]})}})}}]),a}(r.Component),I=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",body:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/posts/1").then((function(e){return e.json()})).then((function(t){return e.setState({title:t.title,body:t.body})}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{children:"Test Component"}),Object(n.jsx)("hr",{}),Object(n.jsx)("h2",{children:t}),Object(n.jsx)("p",{children:a})]})}}]),a}(r.Component);function _(){return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("h1",{className:"display-4",children:["Page ",Object(n.jsx)("span",{className:"text-danger",children:"Not "}),"Found"]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("p",{className:"lead",children:["Looks like you have lost! ",Object(n.jsx)("strong",{children:"Let's Go Home.."})]})]})}a(66),a(67);var z=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)(C,{children:Object(n.jsx)(j.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(A,{branding:"Contact Manager"}),Object(n.jsx)("div",{className:"container mb-5",children:Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{exact:!0,path:"/",component:S}),Object(n.jsx)(b.a,{exact:!0,path:"/contact/add",component:F}),Object(n.jsx)(b.a,{exact:!0,path:"/contact/edit/:id",component:M}),Object(n.jsx)(b.a,{exact:!0,path:"/about",component:w}),Object(n.jsx)(b.a,{exact:!0,path:"/test",component:I}),Object(n.jsx)(b.a,{component:_})]})})]})})})}}]),a}(r.Component),B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,69)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(z,{})}),document.getElementById("root")),B()}},[[68,1,2]]]);
//# sourceMappingURL=main.52294115.chunk.js.map