import{r as s,c as i,h as t}from"./p-cc7ce8c7.js";import{s as o}from"./p-048f799d.js";import{s as e,o as a}from"./p-3388a9ef.js";import{a as h}from"./p-c06b2e12.js";import{c as n}from"./p-b3ca5a88.js";import"./p-25433d0f.js";import"./p-f70181c4.js";import"./p-4d73f82a.js";import"./p-1c2e2695.js";import"./p-09484d0e.js";import"./p-a3a138d6.js";import"./p-7ef0f71c.js";import"./p-50da3ba3.js";import"./p-18e45a13.js";const l=":host{display:block}";const d=class{constructor(t){s(this,t);this.scInput=i(this,"scInput",7);this.scFocus=i(this,"scFocus",7);this.scBlur=i(this,"scBlur",7);this.loggedIn=undefined;this.size="medium";this.value=null;this.pill=false;this.label=undefined;this.showLabel=true;this.help="";this.placeholder=undefined;this.disabled=false;this.readonly=false;this.required=false;this.invalid=false;this.autofocus=undefined;this.hasFocus=undefined}async reportValidity(){return this.input.reportValidity()}async handleChange(){this.value=this.input.value;try{e.checkout=await n({id:e.checkout.id,data:{last_name:this.input.value}})}catch(s){console.error(s)}}handleSessionChange(){var s,i,t,a,n,l;if(this.value)return;const d=h("last_name");if(!o.loggedIn&&!!d){this.value=d;return}if(o.loggedIn){this.value=((i=(s=e===null||e===void 0?void 0:e.checkout)===null||s===void 0?void 0:s.customer)===null||i===void 0?void 0:i.last_name)||((t=e===null||e===void 0?void 0:e.checkout)===null||t===void 0?void 0:t.last_name)}else{this.value=((a=e===null||e===void 0?void 0:e.checkout)===null||a===void 0?void 0:a.last_name)||((l=(n=e===null||e===void 0?void 0:e.checkout)===null||n===void 0?void 0:n.customer)===null||l===void 0?void 0:l.last_name)}}componentWillLoad(){this.handleSessionChange();this.removeCheckoutListener=a("checkout",(()=>this.handleSessionChange()))}disconnectedCallback(){this.removeCheckoutListener()}render(){return t("sc-input",{type:"text",name:"last_name",ref:s=>this.input=s,value:this.value,label:this.label,help:this.help,autocomplete:"last_name",placeholder:this.placeholder,readonly:this.readonly,required:this.required,invalid:this.invalid,autofocus:this.autofocus,hasFocus:this.hasFocus,onScChange:()=>this.handleChange(),onScInput:()=>this.scInput.emit(),onScFocus:()=>this.scFocus.emit(),onScBlur:()=>this.scBlur.emit()})}};d.style=l;export{d as sc_customer_lastname};
//# sourceMappingURL=p-277de3ba.entry.js.map