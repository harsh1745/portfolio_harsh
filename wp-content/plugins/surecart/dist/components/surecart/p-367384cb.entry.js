import{r as o,h as l}from"./p-cc7ce8c7.js";import"./p-5879c946.js";import{s as i}from"./p-a1feb3df.js";import"./p-fbb74dcd.js";import"./p-25433d0f.js";import"./p-72df1f47.js";import"./p-7ef0f71c.js";import"./p-a3a138d6.js";import"./p-f70181c4.js";import"./p-c06b2e12.js";import"./p-09484d0e.js";import"./p-cc11b0a3.js";import"./p-956ea5d8.js";import"./p-18e45a13.js";import"./p-1c2e2695.js";import"./p-05fc1ee0.js";const r=":host{display:block}";const e=class{constructor(l){o(this,l)}renderAmountDue(){var o,r,e;return i.amount_due>0?l("sc-format-number",{type:"currency",value:i.amount_due,currency:((r=(o=i===null||i===void 0?void 0:i.line_item)===null||o===void 0?void 0:o.price)===null||r===void 0?void 0:r.currency)||"usd"}):!!((e=i===null||i===void 0?void 0:i.line_item)===null||e===void 0?void 0:e.trial_amount)?wp.i18n.__("Free Trial","surecart"):wp.i18n.__("Free","surecart")}render(){var o,r,e,s,t,u,d,c,n,p,v,a,m,y,f,j;return l("sc-summary",{"open-text":"Total","closed-text":"Total",collapsible:true,collapsed:true},!!((o=i.line_item)===null||o===void 0?void 0:o.id)&&l("span",{slot:"price"},this.renderAmountDue()),l("sc-divider",null),l("sc-line-item",null,l("span",{slot:"description"},wp.i18n.__("Subtotal","surecart")),l("sc-format-number",{slot:"price",type:"currency",value:(r=i.line_item)===null||r===void 0?void 0:r.subtotal_amount,currency:((s=(e=i===null||i===void 0?void 0:i.line_item)===null||e===void 0?void 0:e.price)===null||s===void 0?void 0:s.currency)||"usd"})),(((u=(t=i===null||i===void 0?void 0:i.line_item)===null||t===void 0?void 0:t.fees)===null||u===void 0?void 0:u.data)||[]).filter((o=>o.fee_type==="upsell")).map((o=>{var r,e;return l("sc-line-item",null,l("span",{slot:"description"},o.description," ",`(${wp.i18n.__("one time","surecart")})`),l("sc-format-number",{slot:"price",type:"currency",value:o.amount,currency:((e=(r=i===null||i===void 0?void 0:i.line_item)===null||r===void 0?void 0:r.price)===null||e===void 0?void 0:e.currency)||"usd"}))})),!!((d=i.line_item)===null||d===void 0?void 0:d.tax_amount)&&l("sc-line-item",null,l("span",{slot:"description"},wp.i18n.__("Tax","surecart")),l("sc-format-number",{slot:"price",type:"currency",value:(c=i.line_item)===null||c===void 0?void 0:c.tax_amount,currency:((p=(n=i===null||i===void 0?void 0:i.line_item)===null||n===void 0?void 0:n.price)===null||p===void 0?void 0:p.currency)||"usd"})),l("sc-divider",null),l("sc-line-item",{style:{"--price-size":"var(--sc-font-size-x-large)"}},l("span",{slot:"title"},wp.i18n.__("Total","surecart")),l("sc-format-number",{slot:"price",type:"currency",value:(v=i.line_item)===null||v===void 0?void 0:v.total_amount,currency:((m=(a=i===null||i===void 0?void 0:i.line_item)===null||a===void 0?void 0:a.price)===null||m===void 0?void 0:m.currency)||"usd"})),i.amount_due!==((y=i.line_item)===null||y===void 0?void 0:y.total_amount)&&l("sc-line-item",{style:{"--price-size":"var(--sc-font-size-x-large)"}},l("span",{slot:"title"},wp.i18n.__("Amount Due","surecart")),l("span",{slot:"price"},l("sc-format-number",{slot:"price",type:"currency",value:i.amount_due,currency:((j=(f=i===null||i===void 0?void 0:i.line_item)===null||f===void 0?void 0:f.price)===null||j===void 0?void 0:j.currency)||"usd"}))))}};e.style=r;export{e as sc_upsell_totals};
//# sourceMappingURL=p-367384cb.entry.js.map