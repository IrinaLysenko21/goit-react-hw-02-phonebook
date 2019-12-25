(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{1:function(e,t,a){e.exports={variables:"'../../variables.module.css'","color-dark-grey":"#3b3b42","primary-box-shadow":"1px 1px 5px 1px #D3D3D3",contactForm:"ContactForm_contactForm__2SQNF",label:"ContactForm_label__2gwK3",inputName:"ContactForm_inputName__Fp9BT",input:"ContactForm_input__21PAB",submitBtn:"ContactForm_submitBtn__3wx3a"}},10:function(e,t,a){e.exports={variables:"'../variables.module.css'","primary-font-stack":"Roboto, sans-serif",wrapper:"App_wrapper__1DIf8",heading:"App_heading__1ZBPc"}},14:function(e,t,a){e.exports={contactList:"ContactList_contactList__1Kh6p"}},15:function(e,t,a){e.exports={variables:"'../../variables.module.css'","color-dark-grey":"#3b3b42","color-light-grey":"#8c8c8d",search:"Filter_search__3Spp5"}},18:function(e,t,a){e.exports=a(33)},2:function(e,t,a){e.exports={variables:"'../../variables.module.css'","color-dark-grey":"#3b3b42","primary-box-shadow":"1px 1px 5px 1px #D3D3D3",contactWrap:"Contact_contactWrap__6jiHX",contact:"Contact_contact__3d6mH",name:"Contact_name__fuRis",number:"Contact_number__3Xrg4",deleteBtn:"Contact_deleteBtn__frj6j"}},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),s=a(17),i=a(5),l=a(6),m=a(8),u=a(7),d=a(9),p=a(3),b=a.n(p),h=a(13),f=a(2),_=a.n(f),C=function(e){var t=e.name,a=e.number,n=e.handleDeleteContact;return r.a.createElement("div",{className:_.a.contactWrap},r.a.createElement("p",{className:_.a.contact},r.a.createElement("span",{className:_.a.name},t),":"," ",r.a.createElement("span",{className:_.a.number},a)),r.a.createElement("button",{className:_.a.deleteBtn,type:"button",onClick:n},"Delete"))},v=a(14),g=a.n(v),E=function(e){var t=e.contacts,a=e.handleDeleteContact;return r.a.createElement("ul",{className:g.a.contactList},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(C,{name:e.name,number:e.number,handleDeleteContact:function(){return a(e.id)}}))})))},N=a(15),y=a.n(N),x=function(e){var t=e.value,a=e.handleChangeFilter;return r.a.createElement("input",{className:y.a.search,type:"text",value:t,onChange:a,placeholder:"Find contact..."})},F=a(16),w=a(1),j=a.n(w),D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",number:""},a.inputIds={nameId:b.a.generate(),numberId:b.a.generate()},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(F.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.number;(0,a.props.handleAddContact)(n,r),a.resetForm()},a.resetForm=function(){a.setState({name:"",number:""})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.number,n=this.inputIds,c=n.nameId,o=n.numberId;return r.a.createElement("form",{className:j.a.contactForm,onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:c,className:j.a.label},r.a.createElement("span",{className:j.a.inputName},"Enter name:"),r.a.createElement("input",{id:c,className:j.a.input,type:"text",name:"name",value:t,onChange:this.handleChange})),r.a.createElement("label",{htmlFor:o,className:j.a.label},r.a.createElement("span",{className:j.a.inputName},"Enter number:"),r.a.createElement("input",{id:o,className:j.a.input,type:"text",name:"number",value:a,onChange:this.handleChange})),r.a.createElement("button",{type:"submit",className:j.a.submitBtn},"Save contact"))}}]),t}(n.Component),O=a(10),S=a.n(O),k=(a(31),new h.a),B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},a.addContact=function(e,t){var n=a.state.contacts,r={id:b.a.generate(),name:e,number:t};return""===r.name.trim()||""===r.number.trim()?k.error("Please fill out the form"):a.findMatchingContact(n,r.name)?k.error("".concat(r.name," is already in contacts")):(a.setState((function(e){return{contacts:[].concat(Object(s.a)(e.contacts),[r])}}),(function(){return k.success("New contact saved")})),r)},a.deleteContact=function(e){a.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},a.changeFilter=function(e){a.setState({filter:e.target.value})},a.filterContacts=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},a.findMatchingContact=function(e,t){return e.find((function(e){return e.name===t}))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.contacts,a=e.filter,n=this.filterContacts(t,a);return r.a.createElement("div",{className:S.a.wrapper},r.a.createElement("h1",{className:S.a.heading},"Phonebook"),r.a.createElement(D,{handleAddContact:this.addContact}),r.a.createElement("h2",{className:S.a.heading},"Contacts"),r.a.createElement(x,{value:a,handleChangeFilter:this.changeFilter}),r.a.createElement(E,{contacts:n,handleDeleteContact:this.deleteContact}))}}]),t}(n.Component);a(32);o.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6965de34.chunk.js.map