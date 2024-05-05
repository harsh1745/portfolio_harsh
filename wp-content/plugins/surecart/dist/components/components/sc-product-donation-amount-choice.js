import{proxyCustomElement,HTMLElement,h,Host}from"@stencil/core/internal/client";import{i as isInRange}from"./util.js";import{s as state,c as getInRangeAmounts,u as updateDonationState}from"./watchers3.js";import{d as defineCustomElement$3}from"./sc-choice-container2.js";import{d as defineCustomElement$2}from"./sc-format-number2.js";const scProductDonationAmountChoiceCss="",ScProductDonationAmountChoice$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.productId=void 0,this.value=void 0,this.label=void 0}state(){return state[this.productId]}render(){var t;const e=getInRangeAmounts(this.productId),o=e.indexOf(this.value);return!isInRange(this.value,this.state().selectedPrice)||o<0?h(Host,{style:{display:"none"}}):h("sc-choice-container",{"show-control":"false",checked:this.state().ad_hoc_amount===this.value,onScChange:()=>updateDonationState(this.productId,{ad_hoc_amount:this.value,custom_amount:null}),"aria-label":wp.i18n.sprintf(wp.i18n.__("%s of %s","surecart"),o+1,e.length),role:"button"},this.label?this.label:h("sc-format-number",{type:"currency",currency:null===(t=this.state().selectedPrice)||void 0===t?void 0:t.currency,value:this.value,"minimum-fraction-digits":"0"}))}get el(){return this}static get style(){return""}},[0,"sc-product-donation-amount-choice",{productId:[513,"product-id"],value:[2],label:[1]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-product-donation-amount-choice","sc-choice-container","sc-format-number"].forEach((t=>{switch(t){case"sc-product-donation-amount-choice":customElements.get(t)||customElements.define(t,ScProductDonationAmountChoice$1);break;case"sc-choice-container":customElements.get(t)||defineCustomElement$3();break;case"sc-format-number":customElements.get(t)||defineCustomElement$2()}}))}const ScProductDonationAmountChoice=ScProductDonationAmountChoice$1,defineCustomElement=defineCustomElement$1;export{ScProductDonationAmountChoice,defineCustomElement};