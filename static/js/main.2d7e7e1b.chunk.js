(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{38:function(e,n,t){"use strict";t.r(n);var o=t(0),s=t(1),r=t(15),c=t.n(r),a=t(3),l=t(6),i=t(4),u=t.n(i),d="http://localhost:3001//api/persons",f={getAll:function(){return u.a.get(d)},deletePerson:function(e){return u.a.delete("".concat(d,"/").concat(e))},create:function(e){return u.a.post(d,e)},update:function(e,n){return u.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))}},m=function(e){var n=function(){return console.log("newName",e.newName),!e.persons.some((function(n){return n.name===e.newName}))||(console.log("inIF"),function(e){var n=e.persons.find((function(n){return n.name===e.newName})),t=function(){var t=Object(l.a)(Object(l.a)({},n),{},{number:e.newNumber});console.log("person",n),f.update(n.id,t).then((function(t){e.setPersons(e.persons.map((function(e){return e.id!==n.id?e:t}))),e.setNewName(""),e.setNewNumber(""),e.sendMessage("changed ".concat(n.name,"'s number to ").concat(e.newNumber)),e.setMessageColor("green")})).catch((function(t){e.sendMessage("information of ".concat(n.name," has already been deleted from server")),e.setMessageColor("red"),e.setPersons(e.persons.filter((function(e){return e.id!==n.id})))}))};0!==n.number.length?window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?"))&&t():t()}(e),!1)};return Object(o.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),console.log("newName:",e.newName),console.log("newNumber:",e.newNumber),console.log("button clicked",t.target),n()){var o={name:e.newName,number:e.newNumber};f.create(o).then((function(n){e.setPersons(e.persons.concat(n.data)),console.log("CoNpersons:",e.persons),e.sendMessage("Added ".concat(o.name)),e.setNewName(""),e.setNewNumber("")}))}console.log("persons:",e.persons)},children:[Object(o.jsxs)("div",{children:["name: ",Object(o.jsx)("input",{value:e.newName,onChange:function(n){console.log("handleName",n.target.value),e.setNewName(n.target.value)}})]}),Object(o.jsxs)("div",{children:["number: ",Object(o.jsx)("input",{value:e.newNumber,onChange:function(n){console.log("handleNumber",n.target.value),e.setNewNumber(n.target.value)}})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"add"})})]})},b=function(e){return Object(o.jsx)("form",{children:Object(o.jsxs)("div",{children:["filter shown with ",Object(o.jsx)("input",{value:e.filter,onChange:function(n){console.log("handleFilter",n.target.value),e.setFilter(n.target.value),console.log("handleFilter2",e.filter),console.log(e.persons.filter((function(n){return n.name.toLowerCase().includes(e.filter)})))}})]})})},g=function(e){return console.log("filtered",e,e.persons.filter((function(n){return n.name.toLowerCase().includes(e.filter)}))),e.persons.filter((function(n){return n.name.toLowerCase().includes(e.filter)})).map((function(n){return Object(o.jsx)("div",{children:Object(o.jsxs)("p",{children:[n.name," ",n.number,Object(o.jsx)("button",{onClick:function(){return function(e,n,t,o,s){window.confirm("Delete ".concat(e.name," ?"))&&(console.log("clicked delete",e.id,n,t),f.deletePerson(e.id).then((function(r){console.log(n,n.filter((function(n){return!(n.id===e.id)}))),t(n.filter((function(n){return!(n.id===e.id)}))),console.log("persons after delete:",r),o("Deleted ".concat(e.name)),s("green")})))}(n,e.persons,e.setPersons,e.sendMessage,e.setMessageColor)},children:"delete"})]},n.id)})}))},j=function(e){console.log("props",e);var n={color:e.messageColor,background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"};return null===e.message?null:Object(o.jsx)("div",{className:"notification",style:n,children:e.message})},p=function(){var e=Object(s.useState)([]),n=Object(a.a)(e,2),t=n[0],r=n[1],c=Object(s.useState)(""),l=Object(a.a)(c,2),i=l[0],u=l[1],d=Object(s.useState)(""),p=Object(a.a)(d,2),h=p[0],w=p[1],O=Object(s.useState)(""),N=Object(a.a)(O,2),x=N[0],v=N[1],C=Object(s.useState)(null),M=Object(a.a)(C,2),P=M[0],S=M[1],k=Object(s.useState)(""),y=Object(a.a)(k,2),F=y[0],A=y[1];Object(s.useEffect)((function(){console.log("effect"),f.getAll().then((function(e){console.log("promise fulfilled"),r(e.data)}))}),[]);var D=function(e){console.log("message,color",e),S(e),setTimeout((function(){S(null)}),5e3)};return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Phonebook"}),Object(o.jsx)(b,{persons:t,filter:x,setFilter:v}),Object(o.jsx)("h2",{children:"add a new"}),Object(o.jsx)(j,{message:P,messageColor:F}),Object(o.jsx)(m,{persons:t,setPersons:r,newName:i,setNewName:u,newNumber:h,setNewNumber:w,setMessageColor:A,sendMessage:D}),Object(o.jsx)("h2",{children:"Numbers"}),Object(o.jsx)(g,{persons:t,setPersons:r,filter:x,setFilter:v,sendMessage:D,setMessageColor:A})]})};c.a.render(Object(o.jsx)(p,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.2d7e7e1b.chunk.js.map