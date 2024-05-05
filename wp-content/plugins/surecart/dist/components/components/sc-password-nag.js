import{proxyCustomElement,HTMLElement,h,Host,Fragment}from"@stencil/core/internal/client";import{a as apiFetch}from"./fetch.js";import{d as defineCustomElement$e}from"./sc-alert2.js";import{d as defineCustomElement$d}from"./sc-block-ui2.js";import{d as defineCustomElement$c}from"./sc-button2.js";import{d as defineCustomElement$b}from"./sc-card2.js";import{d as defineCustomElement$a}from"./sc-dashboard-module2.js";import{d as defineCustomElement$9}from"./sc-flex2.js";import{d as defineCustomElement$8}from"./sc-form2.js";import{d as defineCustomElement$7}from"./sc-form-control2.js";import{d as defineCustomElement$6}from"./sc-icon2.js";import{d as defineCustomElement$5}from"./sc-input2.js";import{d as defineCustomElement$4}from"./sc-password2.js";import{d as defineCustomElement$3}from"./sc-spinner2.js";import{d as defineCustomElement$2}from"./sc-visually-hidden2.js";const scPasswordNagCss=":host{display:block}",ScPasswordNag$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.open=!0,this.type="primary",this.successUrl=void 0,this.set=void 0,this.loading=void 0,this.error=void 0,this.success=void 0,this.enableValidation=!0}handleSetChange(){setTimeout((()=>{this.input&&this.input.triggerFocus()}),50)}async dismiss(){this.loading=!0,this.error="";try{await apiFetch({path:"wp/v2/users/me",method:"PATCH",data:{meta:{default_password_nag:!1}}}),this.open=!1}catch(e){this.error=(null==e?void 0:e.message)||wp.i18n.__("Something went wrong","surecart"),this.loading=!1}}validatePassword(e){return!!new RegExp("^(?=.*?[#?!@$%^&*-]).{6,}$").test(e)}async handleSubmit(e){this.loading=!0,this.error="";try{const{password:s}=await e.target.getFormJson();await apiFetch({path:"wp/v2/users/me",method:"PATCH",data:{password:s,meta:{default_password_nag:!1}}}),this.dismiss(),this.success=!0}catch(e){this.error=(null==e?void 0:e.message)||wp.i18n.__("Something went wrong","surecart"),this.loading=!1}}render(){return this.success?h("sc-alert",{type:"success",open:!0},h("span",{slot:"title"},wp.i18n.__("Success!","surecart")),wp.i18n.__("You have successfully set your password.","surecart")):h(Host,{tabindex:0,"aria-label":wp.i18n.__("You have not yet set a password. Please set a password for your account.","surecart")},h("sc-alert",{type:this.type,open:this.open,exportparts:"base, icon, text, title, message, close-icon",style:{position:"relative"}},!!this.error&&this.error,this.set?h("sc-dashboard-module",{class:"customer-details"},h("span",{slot:"heading"},wp.i18n.__("Set A Password","surecart")," "),h("sc-button",{type:"text",size:"small",slot:"end",onClick:()=>this.set=!1},h("sc-icon",{name:"x",slot:"prefix"}),wp.i18n.__("Cancel","surecart")),h("sc-card",null,h("sc-form",{onScFormSubmit:e=>this.handleSubmit(e)},h("sc-password",{enableValidation:this.enableValidation,label:wp.i18n.__("New Password","surecart"),name:"password",confirmation:!0,ref:e=>this.input=e,required:!0}),h("div",null,h("sc-button",{type:"primary",full:!0,submit:!0,busy:this.loading},wp.i18n.__("Set Password","surecart")))))):h(Fragment,null,h("slot",{name:"title",slot:"title"},wp.i18n.__("Reminder","surecart")),h("slot",null,wp.i18n.__("You have not yet set a password. Please set a password for your account.","surecart")),h("sc-flex",{"justify-content":"flex-start"},h("sc-button",{size:"small",type:"primary",onClick:()=>this.set=!0},wp.i18n.__("Set A Password","surecart")),h("sc-button",{size:"small",type:"text",onClick:()=>this.dismiss()},wp.i18n.__("Dismiss","surecart")))),this.loading&&h("sc-block-ui",{spinner:!0})))}static get watchers(){return{set:["handleSetChange"]}}static get style(){return scPasswordNagCss}},[1,"sc-password-nag",{open:[1028],type:[513],successUrl:[1,"success-url"],enableValidation:[516,"enable-validation"],set:[32],loading:[32],error:[32],success:[32]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-password-nag","sc-alert","sc-block-ui","sc-button","sc-card","sc-dashboard-module","sc-flex","sc-form","sc-form-control","sc-icon","sc-input","sc-password","sc-spinner","sc-visually-hidden"].forEach((e=>{switch(e){case"sc-password-nag":customElements.get(e)||customElements.define(e,ScPasswordNag$1);break;case"sc-alert":customElements.get(e)||defineCustomElement$e();break;case"sc-block-ui":customElements.get(e)||defineCustomElement$d();break;case"sc-button":customElements.get(e)||defineCustomElement$c();break;case"sc-card":customElements.get(e)||defineCustomElement$b();break;case"sc-dashboard-module":customElements.get(e)||defineCustomElement$a();break;case"sc-flex":customElements.get(e)||defineCustomElement$9();break;case"sc-form":customElements.get(e)||defineCustomElement$8();break;case"sc-form-control":customElements.get(e)||defineCustomElement$7();break;case"sc-icon":customElements.get(e)||defineCustomElement$6();break;case"sc-input":customElements.get(e)||defineCustomElement$5();break;case"sc-password":customElements.get(e)||defineCustomElement$4();break;case"sc-spinner":customElements.get(e)||defineCustomElement$3();break;case"sc-visually-hidden":customElements.get(e)||defineCustomElement$2()}}))}const ScPasswordNag=ScPasswordNag$1,defineCustomElement=defineCustomElement$1;export{ScPasswordNag,defineCustomElement};