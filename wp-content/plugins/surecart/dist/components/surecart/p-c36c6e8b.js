import{c as o}from"./p-25433d0f.js";import{g as i}from"./p-f70181c4.js";import{g as d}from"./p-0858b7fc.js";import{i as l}from"./p-c06b2e12.js";import{u as n,a as v}from"./p-12c5cc53.js";import{o as t}from"./p-3388a9ef.js";const{productDonation:u}=i(),s=Object.keys(u||{}).reduce(((o,c)=>{var u;const n=d(c);return(null==n?void 0:n.id)&&(o[c]={...o[c],...(null==n?void 0:n.ad_hoc_amount)?{ad_hoc_amount:n.ad_hoc_amount}:{},...(null==n?void 0:n.price)?{selectedPrice:n.price}:{},custom_amount:(null===(u=o[c].amounts||[])||void 0===u?void 0:u.includes(n.ad_hoc_amount))?null:n.ad_hoc_amount}),o}),u),{state:c,onChange:a,on:r,set:e,get:m,dispose:p}=o({...s},((o,c)=>JSON.stringify(o)!==JSON.stringify(c))),f=o=>{const u=c[o],n=(u.amounts||[]).filter((o=>l(o,u.selectedPrice)));return n.includes(null==u?void 0:u.ad_hoc_amount)?null==u?void 0:u.ad_hoc_amount:n[0]},_=o=>{const u=c[o];return(u.amounts||[]).filter((o=>l(o,u.selectedPrice)))},j=(o,u)=>{c[o]={...c[o],...u}},h=(o,c)=>{const u=d(o);return(null==u?void 0:u.id)?n({id:u.id,data:{...{price:u.price.id,...(null==u?void 0:u.ad_hoc_amount)?{ad_hoc_amount:null==u?void 0:u.ad_hoc_amount}:{}},...c}}):v(c)};t("checkout",(()=>{Object.keys(c).forEach((o=>{var u;const n=d(o);if(n)return e(o,{...c[o],selectedPrice:n.price,ad_hoc_amount:n.ad_hoc_amount,custom_amount:(null===(u=c[o].amounts||[])||void 0===u?void 0:u.includes(n.ad_hoc_amount))?null:n.ad_hoc_amount});e(o,{...c[o],selectedPrice:null,ad_hoc_amount:null,custom_amount:null})}))})),Object.keys(c).forEach((o=>{r("set",((c,u,n)=>{var t,d,i,a,e,s;if(c===o&&((null==u?void 0:u.selectedPrice)||(null==u?void 0:u.ad_hoc_amount)||(null==u?void 0:u.custom_amount))&&((null===(t=null==u?void 0:u.selectedPrice)||void 0===t?void 0:t.id)!==(null===(d=null==n?void 0:n.selectedPrice)||void 0===d?void 0:d.id)||(null==u?void 0:u.ad_hoc_amount)!==(null==n?void 0:n.ad_hoc_amount)||(null==u?void 0:u.custom_amount)!==(null==n?void 0:n.custom_amount))){const c=(null==u?void 0:u.custom_amount)&&l(null==u?void 0:u.custom_amount,u.selectedPrice)?null==u?void 0:u.custom_amount:f(o),n=(null===(i=u.selectedPrice)||void 0===i?void 0:i.id)||(null===(s=null===(e=null===(a=u.product)||void 0===a?void 0:a.prices)||void 0===e?void 0:e.data.find((o=>null==o?void 0:o.ad_hoc)))||void 0===s?void 0:s.id);if(!n)return;h(o,{price:n,quantity:1,ad_hoc_amount:c})}}))}));export{r as a,e as b,_ as c,p as d,m as g,a as o,c as s,j as u};