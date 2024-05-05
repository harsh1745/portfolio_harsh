import{r as t,c as e,h as s,a as i,F as l}from"./p-cc7ce8c7.js";import{c as n,a as r,b as a,h as o}from"./p-e64f9fcd.js";import{r as h}from"./p-8617d8eb.js";import{s as d}from"./p-09484d0e.js";import{z as u}from"./p-15e31471.js";const c=":host{display:block}.sc-address{display:block;position:relative}.sc-address [hidden]{display:none}.sc-address--loading{min-height:230px}.sc-address sc-skeleton{display:block;margin-bottom:1em}.sc-address__control{display:block}.sc-address__control>*{margin-bottom:var(--sc-address-column-spacing, -1px)}.sc-address__columns{display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;justify-content:space-between}.sc-address__columns>*{flex:1;width:50%;margin-right:var(--sc-address-column-spacing, -1px)}.sc-address__columns>*:last-child{margin-right:0}";const p=class{constructor(s){t(this,s);this.scChangeAddress=e(this,"scChangeAddress",7);this.scInputAddress=e(this,"scInputAddress",7);this.address={country:null,city:null,line_1:null,line_2:null,postal_code:null,state:null};this.names={name:"shipping_name",country:"shipping_country",city:"shipping_city",line_1:"shipping_line_1",line_2:"shipping_line_2",postal_code:"shipping_postal_code",state:"shipping_state"};this.placeholders={};this.loading=false;this.disabled=undefined;this.label=undefined;this.showName=undefined;this.showLine2=undefined;this.required=false;this.requireName=false;this.showCity=true;this.showPostal=true;this.regions=undefined;this.countryChoices=n}handleAddressChange(){if(!this.address.country)return;this.setRegions();this.showPostal=r(this.address.country);this.showCity=a(this.address.country);this.scChangeAddress.emit(this.address);this.scInputAddress.emit(this.address)}handleNameChange(){if(this.requireName){this.showName=true}}decodeHtmlEntities(t){var e;return((e=(new DOMParser).parseFromString(t,"text/html"))===null||e===void 0?void 0:e.body.textContent)||t}updateAddress(t){this.address={...this.address,...t}}handleAddressInput(t){this.scInputAddress.emit({...this.address,...t})}clearAddress(){var t;this.address={name:(t=this.address)===null||t===void 0?void 0:t.name,country:null,city:null,line_1:null,line_2:null,postal_code:null,state:null}}setRegions(){if(o(this.address.country)){import("./p-59916e56.js").then((t=>{const e=t===null||t===void 0?void 0:t[this.address.country];this.regions=(e||[]).map((t=>({...t,label:this.decodeHtmlEntities(t.label)})))}))}else{this.regions=[]}}componentWillLoad(){var t;this.handleAddressChange();const e=((t=this.countryChoices.find((t=>t.value===this.address.country)))===null||t===void 0?void 0:t.value)||null;this.updateAddress({country:e});this.handleNameChange()}async reportValidity(){return h(this.el)}render(){var t,e,i,l,n,r,a,o,h,d,u,c,p,v,b,m,_,f,g;return s("div",{class:"sc-address",part:"base"},s("sc-form-control",{label:this.label,exportparts:"label, help-text, form-control",class:"sc-address__control",required:this.required},this.showName&&s("sc-input",{exportparts:"base:input__base, input, form-control, label, help-text",value:(t=this===null||this===void 0?void 0:this.address)===null||t===void 0?void 0:t.name,onScChange:t=>this.updateAddress({name:t.target.value||null}),onScInput:t=>this.handleAddressInput({name:t.target.value||null}),autocomplete:"street-address",placeholder:this.placeholders.name||wp.i18n.__("Name or Company Name","surecart"),name:(e=this.names)===null||e===void 0?void 0:e.name,"squared-bottom":true,disabled:this.disabled,required:this.requireName,"aria-label":this.placeholders.name||wp.i18n.__("Name or Company Name","surecart")}),s("sc-select",{exportparts:"base:select__base, input, form-control, label, help-text, trigger, panel, caret, search__base, search__input, search__form-control, menu__base, spinner__base, empty",part:"name__input",value:(i=this.address)===null||i===void 0?void 0:i.country,onScChange:t=>{this.clearAddress();this.updateAddress({country:t.target.value})},choices:this.countryChoices,autocomplete:"country-name",placeholder:this.placeholders.country||wp.i18n.__("Country","surecart"),name:(l=this.names)===null||l===void 0?void 0:l.country,search:true,unselect:false,"squared-bottom":true,squared:this.showName,disabled:this.disabled,required:this.required,"aria-label":this.placeholders.country||wp.i18n.__("Country","surecart")}),s("sc-input",{exportparts:"base:input__base, input, form-control, label, help-text",value:(n=this===null||this===void 0?void 0:this.address)===null||n===void 0?void 0:n.line_1,onScChange:t=>this.updateAddress({line_1:t.target.value||null}),onScInput:t=>this.handleAddressInput({line_1:t.target.value||null}),autocomplete:"street-address",placeholder:this.placeholders.line_1||wp.i18n.__("Address","surecart"),name:(r=this.names)===null||r===void 0?void 0:r.line_1,squared:true,disabled:this.disabled,required:this.required,"aria-label":this.placeholders.line_1||wp.i18n.__("Address","surecart")}),this.showLine2&&s("sc-input",{exportparts:"base:input__base, input, form-control, label, help-text",value:(a=this===null||this===void 0?void 0:this.address)===null||a===void 0?void 0:a.line_2,onScChange:t=>this.updateAddress({line_2:t.target.value||null}),onScInput:t=>this.handleAddressInput({line_2:t.target.value||null}),autocomplete:"street-address",placeholder:this.placeholders.line_2||wp.i18n.__("Address Line 2","surecart"),name:(o=this.names)===null||o===void 0?void 0:o.line_2,squared:true,disabled:this.disabled,"aria-label":this.placeholders.line_2||wp.i18n.__("Address Line 2","surecart")}),s("div",{class:"sc-address__columns",part:"columns"},this.showCity&&s("sc-input",{exportparts:"base:input__base, input, form-control, label, help-text",placeholder:this.placeholders.city||wp.i18n.__("City","surecart"),name:(h=this.names)===null||h===void 0?void 0:h.city,value:(d=this===null||this===void 0?void 0:this.address)===null||d===void 0?void 0:d.city,onScChange:t=>this.updateAddress({city:t.target.value||null}),onScInput:t=>this.handleAddressInput({city:t.target.value||null}),required:this.required,squared:!!((u=this===null||this===void 0?void 0:this.regions)===null||u===void 0?void 0:u.length),"squared-top":true,disabled:this.disabled,"squared-right":this.showPostal,"aria-label":this.placeholders.city||wp.i18n.__("City","surecart")}),this.showPostal&&s("sc-input",{exportparts:"base:input__base, input, form-control, label, help-text",placeholder:this.placeholders.postal_code||wp.i18n.__("Postal Code/Zip","surecart"),name:(c=this.names)===null||c===void 0?void 0:c.postal_code,onScChange:t=>this.updateAddress({postal_code:t.target.value||null}),onScInput:t=>this.handleAddressInput({postal_code:t.target.value||null}),autocomplete:"postal-code",required:this.required,value:(p=this===null||this===void 0?void 0:this.address)===null||p===void 0?void 0:p.postal_code,squared:!!((v=this===null||this===void 0?void 0:this.regions)===null||v===void 0?void 0:v.length),"squared-top":true,disabled:this.disabled,maxlength:((b=this.address)===null||b===void 0?void 0:b.country)==="US"?5:null,"squared-left":this.showCity,"aria-label":this.placeholders.postal_code||wp.i18n.__("Postal Code/Zip","surecart")})),!!((m=this===null||this===void 0?void 0:this.regions)===null||m===void 0?void 0:m.length)&&!!((_=this===null||this===void 0?void 0:this.address)===null||_===void 0?void 0:_.country)&&s("sc-select",{exportparts:"base:select__base, input, form-control, label, help-text, trigger, panel, caret, search__base, search__input, search__form-control, menu__base, spinner__base, empty",placeholder:this.placeholders.state||wp.i18n.__("State/Province/Region","surecart"),name:(f=this.names)===null||f===void 0?void 0:f.state,autocomplete:"address-level1",value:(g=this===null||this===void 0?void 0:this.address)===null||g===void 0?void 0:g.state,onScChange:t=>{var e;return this.updateAddress({state:t.target.value||((e=t.detail)===null||e===void 0?void 0:e.value)||null})},choices:this.regions,required:this.required,disabled:this.disabled,search:true,"squared-top":true,"aria-label":this.placeholders.state||wp.i18n.__("State/Province/Region","surecart")})),this.loading&&s("sc-block-ui",{exportparts:"base:block-ui, content:block-ui__content"}))}get el(){return i(this)}static get watchers(){return{address:["handleAddressChange"],requireName:["handleNameChange"]}}};p.style=c;const v=":host{display:block;z-index:3;position:relative}";const b=class{constructor(s){t(this,s);this.scChange=e(this,"scChange",7);this.scInput=e(this,"scInput",7);this.scInputType=e(this,"scInputType",7);this.scSetState=e(this,"scSetState",7);this.country=undefined;this.show=false;this.type="other";this.number=null;this.status="unknown";this.loading=undefined;this.help=undefined;this.otherLabel=wp.i18n.__("Tax ID","surecart");this.caGstLabel=wp.i18n.__("GST Number","surecart");this.auAbnLabel=wp.i18n.__("ABN Number","surecart");this.gbVatLabel=wp.i18n.__("UK VAT","surecart");this.euVatLabel=wp.i18n.__("EU VAT","surecart");this.taxIdTypes=[];this.required=false}async reportValidity(){return this.input.reportValidity()}onLabelChange(){u.ca_gst.label=this.caGstLabel||u.ca_gst.label;u.au_abn.label=this.auAbnLabel||u.au_abn.label;u.gb_vat.label=this.gbVatLabel||u.gb_vat.label;u.eu_vat.label=this.euVatLabel||u.eu_vat.label;u.other.label=this.otherLabel||u.other.label}componentWillLoad(){this.onLabelChange()}renderStatus(){if(this.status==="valid"){return s("sc-icon",{name:"check",slot:"prefix",style:{color:"var(--sc-color-success-500)"}})}if(this.status==="invalid"){return s("sc-icon",{name:"x",slot:"prefix",style:{color:"var(--sc-color-danger-500)"}})}}filteredZones(){if(!!this.taxIdTypes.length){return Object.keys(u).filter((t=>this.taxIdTypes.includes(t))).reduce(((t,e)=>{t[e]=u[e];return t}),{})}return u}onTaxIdTypesChange(){if(!!this.taxIdTypes.length){this.type=!this.taxIdTypes.includes("other")?this.taxIdTypes[0]:"other"}}getZoneLabel(){var t,e;const s=this.filteredZones()||{};return((t=s===null||s===void 0?void 0:s[(this===null||this===void 0?void 0:this.type)||"other"])===null||t===void 0?void 0:t.label)||((e=s===null||s===void 0?void 0:s[Object.keys(s)[0]])===null||e===void 0?void 0:e.label)}render(){var t,e,i,n,r;return s(l,null,s("sc-input",{name:"tax_identifier.number_type",required:this.required,value:this.type,style:{display:"none"}}),s("sc-input",{ref:t=>this.input=t,label:this.getZoneLabel(),"aria-label":wp.i18n.__("Tax ID","surecart"),placeholder:wp.i18n.__("Enter Tax ID","surecart"),name:"tax_identifier.number",value:this.number,onScInput:t=>{t.stopImmediatePropagation();this.scInput.emit({number:t.target.value,number_type:this.type||"other"})},onScChange:t=>{t.stopImmediatePropagation();this.scChange.emit({number:t.target.value,number_type:this.type||"other"})},help:this.help,required:this.required},this.loading&&this.type==="eu_vat"?s("sc-spinner",{slot:"prefix",style:{"--spinner-size":"10px"}}):this.renderStatus(),((t=Object.keys(this.filteredZones()||{}))===null||t===void 0?void 0:t.length)===1?s("span",{slot:"suffix"},(i=(e=Object.values(this.filteredZones()||{}))===null||e===void 0?void 0:e[0])===null||i===void 0?void 0:i["label_small"]):s("sc-dropdown",{slot:"suffix",position:"bottom-right",role:"select","aria-multiselectable":"false","aria-label":wp.i18n.__("Select number type","surecart")},s("sc-button",{type:"text",slot:"trigger",caret:true,loading:false,style:{color:"var(--sc-input-label-color)"},tabindex:"0"},(r=(n=this.filteredZones())===null||n===void 0?void 0:n[(this===null||this===void 0?void 0:this.type)||"other"])===null||r===void 0?void 0:r.label_small),s("sc-menu",null,Object.keys(this.filteredZones()||{}).map((t=>s("sc-menu-item",{role:"option",onClick:()=>{this.scInput.emit({number:this.number,number_type:t});this.scChange.emit({number:this.number,number_type:t});this.type=t},onKeyDown:e=>{var s;if(e.key==="Enter"){this.scInput.emit({number:this.number,number_type:t});this.scChange.emit({number:this.number,number_type:t});this.type=t;(s=this.input)===null||s===void 0?void 0:s.triggerFocus();d(wp.i18n.sprintf(wp.i18n.__("%s selected","surecart"),u[t].label_small,"assertive"))}},checked:this.type===t,"aria-selected":this.type===t?"true":"false","aria-label":u[t].label_small},u[t].label_small)))))))}static get watchers(){return{otherLabel:["onLabelChange"],caGstLabel:["onLabelChange"],auAbnLabel:["onLabelChange"],gbVatLabel:["onLabelChange"],euVatLabel:["onLabelChange"],taxIdTypes:["onTaxIdTypesChange"]}}};b.style=v;export{p as sc_address,b as sc_tax_id_input};
//# sourceMappingURL=p-92ce20dd.entry.js.map