import{r as o,h as t,H as i,a as s}from"./p-cc7ce8c7.js";import{s as n}from"./p-c36c6e8b.js";import"./p-25433d0f.js";import"./p-f70181c4.js";import"./p-0858b7fc.js";import"./p-3388a9ef.js";import"./p-4d73f82a.js";import"./p-1c2e2695.js";import"./p-09484d0e.js";import"./p-a3a138d6.js";import"./p-7ef0f71c.js";import"./p-50da3ba3.js";import"./p-e64f9fcd.js";import"./p-c06b2e12.js";import"./p-12c5cc53.js";import"./p-f47b68d0.js";import"./p-c27fae79.js";import"./p-05fc1ee0.js";import"./p-b3ca5a88.js";import"./p-18e45a13.js";const c="sc-product-donation-custom-amount sc-price-input sc-button{margin-right:-10px !important}.sc-product-donation-custom-amount sc-button{opacity:0;visibility:hidden;transition:opacity var(--sc-transition-fast) ease-in-out, visibility var(--sc-transition-fast) ease-in-out}.sc-product-donation-custom-amount--has-value sc-button{opacity:1;visibility:visible}";const r=class{constructor(t){o(this,t);this.productId=undefined;this.value=undefined}state(){return n[this.productId]}updateState(o){n[this.productId]={...n[this.productId],...o}}render(){var o,s,n,c,r,a,u,e,p,d;const l=!!((o=this.state())===null||o===void 0?void 0:o.custom_amount);return t(i,{class:{"sc-product-donation-custom-amount":true,"sc-product-donation-custom-amount--has-value":!!this.value}},t("sc-choice-container",{value:`${(s=this.state())===null||s===void 0?void 0:s.custom_amount}`,"show-control":"false",checked:l,onClick:()=>this.priceInput.triggerFocus(),onKeyDown:()=>{this.priceInput.triggerFocus()},role:"button"},t("sc-visually-hidden",null,wp.i18n.__("Enter a custom amount.","surecart")),t("sc-price-input",{ref:o=>this.priceInput=o,currencyCode:((c=(n=this.state())===null||n===void 0?void 0:n.selectedPrice)===null||c===void 0?void 0:c.currency)||((r=window===null||window===void 0?void 0:window.scData)===null||r===void 0?void 0:r.currency)||"usd",showCode:false,showLabel:false,value:`${((a=this.state())===null||a===void 0?void 0:a.custom_amount)||""}`,onScChange:o=>this.updateState({ad_hoc_amount:null,custom_amount:o.target.value}),min:(e=(u=this.state())===null||u===void 0?void 0:u.selectedPrice)===null||e===void 0?void 0:e.ad_hoc_min_amount,max:(d=(p=this.state())===null||p===void 0?void 0:p.selectedPrice)===null||d===void 0?void 0:d.ad_hoc_max_amount,style:{"--sc-input-border-color-focus":"var(--sc-input-border-color-hover)","--sc-focus-ring-color-primary":"transparent"}})))}get el(){return s(this)}};r.style=c;export{r as sc_product_donation_custom_amount};
//# sourceMappingURL=p-5e0aeafe.entry.js.map