import{a as o}from"./p-18e45a13.js";import{s as e}from"./p-a1feb3df.js";import{s as i}from"./p-fbb74dcd.js";import{r as l,c as d}from"./p-05fc1ee0.js";import{a as t}from"./p-1c2e2695.js";const u=()=>{var i;return o({path:`surecart/v1/checkouts/${e.checkout_id}/offer_upsell/${null===(i=e.upsell)||void 0===i?void 0:i.id}`,method:"POST",keepalive:!0})},r=async()=>{try{if(!e.checkout_id||"busy"===e.loading)return;e.loading="busy",l();const{checkout:i,...o}=await v({preview:!0});e.checkout=i,e.line_item=o}catch(i){if(console.error(i),((null==i?void 0:i.additional_errors)||[]).find((e=>{var i,o,l;return null===(l=null===(o=null===(i=null==e?void 0:e.data)||void 0===i?void 0:i.options)||void 0===o?void 0:o.purchasable_statuses)||void 0===l?void 0:l.includes("out_of_stock")})))return d({code:"out_of_stock",message:wp.i18n.__("Apologies, this is currently out of stock.","surecart")});if(((null==i?void 0:i.additional_errors)||[]).find((e=>"line_item.upsell.expired"===(null==e?void 0:e.code))))return e.loading="idle",d({code:"expired",message:wp.i18n.__("This offer has expired.","surecart")}),c();d(i)}finally{e.loading="idle"}},s=async()=>{try{if(!e.checkout_id||"busy"===e.loading)return;e.loading="busy",l();const{checkout:i}=await v({preview:!1});n(i)}catch(i){e.loading="idle",d(i)}},c=async()=>{var u,r,c,s,a,v;try{if(!e.checkout_id||"busy"===e.loading)return;e.loading="busy",l();const d=await o({path:t(`surecart/v1/checkouts/${e.checkout_id}/decline_upsell/${null===(u=e.upsell)||void 0===u?void 0:u.id}`,{expand:["checkout","checkout.current_upsell","fees"]}),method:"POST",data:{...null===(c=i[null===(r=e.product)||void 0===r?void 0:r.id])||void 0===c?void 0:c.line_item,price_id:null===(a=null===(s=e.upsell)||void 0===s?void 0:s.price)||void 0===a?void 0:a.id,upsell:null===(v=e.upsell)||void 0===v?void 0:v.id,checkout:e.checkout_id}});n(d)}catch(i){e.loading="idle",d(i)}},v=l=>{var d,u,r,c,n;return o({path:t("surecart/v1/line_items/upsell",{...l,expand:["checkout","checkout.current_upsell","fees","line_item","line_item.price"]}),method:"POST",data:{...null===(u=i[null===(d=e.product)||void 0===d?void 0:d.id])||void 0===u?void 0:u.line_item,price_id:null===(c=null===(r=e.upsell)||void 0===r?void 0:r.price)||void 0===c?void 0:c.id,upsell:null===(n=e.upsell)||void 0===n?void 0:n.id,checkout:e.checkout_id}})},n=i=>{var o,l,d,u,r;if(!(null===(o=i.current_upsell)||void 0===o?void 0:o.permalink)||(null===(l=null==i?void 0:i.current_upsell)||void 0===l?void 0:l.permalink)===(null===(d=e.upsell)||void 0===d?void 0:d.permalink))return e.loading="complete";e.loading="redirecting",window.location.assign(t(null===(u=i.current_upsell)||void 0===u?void 0:u.permalink,{sc_checkout_id:null===(r=e.checkout)||void 0===r?void 0:r.id,sc_form_id:e.form_id}))};export{s as a,c as d,r as p,u as t};