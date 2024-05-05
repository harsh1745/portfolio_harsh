import{r as i,h as e,a as s}from"./p-cc7ce8c7.js";const n=":host {\n  display: block;\n}\n\n.choices {\n  container-type: inline-size;\n}\n.choices ::slotted(div) {\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--sc-choices-gap, 10px);\n}\n\n.choices:not(.choices--auto-width) ::slotted(div) {\n  margin: 0;\n  display: grid;\n  gap: var(--sc-choices-gap, 10px);\n}\n\n.breakpoint-lg ::slotted(div),\n.breakpoint-xl ::slotted(div) {\n  grid-template-columns: repeat(var(--columns, 1), 1fr);\n}\n\n.choices .choices__items {\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--sc-choices-gap, 10px);\n}\n\n.choices:not(.choices--auto-width) .choices__items {\n  display: grid;\n  gap: var(--sc-choices-gap, 10px);\n}\n\n.choices {\n  border: none;\n  padding: 0;\n  margin: 0;\n  min-width: 0;\n  margin: 0;\n}\n.choices .choices__label {\n  font-family: var(--sc-input-font-family);\n  font-size: var(--sc-input-font-size-medium);\n  font-weight: var(--sc-input-font-weight);\n  color: var(--sc-input-color);\n  padding: 0 var(--sc-spacing-xx-small);\n}\n\n.choices__items {\n  display: grid;\n  gap: var(--sc-choices-gap, 10px);\n  grid-auto-rows: 1fr;\n}\n\n.choices__items {\n  grid-template-columns: repeat(var(--columns, 1), 1fr);\n}\n\n@container (max-width: 419px) {\n  .choices__items {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}";let t=0;const c=class{constructor(e){i(this,e);this.inputId=`choices-${++t}`;this.helpId=`choices-help-text-${t}`;this.labelId=`choices-label-${t}`;this.label="";this.size="medium";this.autoWidth=undefined;this.required=false;this.showLabel=true;this.help="";this.hideLabel=false;this.columns=1;this.errorMessage="";this.width=undefined}async triggerFocus(){this.el.focus()}componentDidLoad(){this.handleRequiredChange();this.handleResize()}handleRequiredChange(){const i=[...this.el.querySelectorAll("sc-choice, sc-choice-container")];if(i.length){i.forEach((i=>{i.required=this.required}))}}handleResize(){if("ResizeObserver"in window){var i=new window.ResizeObserver((i=>{i.forEach((i=>{this.width=i.contentRect.width}))}));i.observe(this.el)}}render(){return e("fieldset",{part:"base",class:{choices:true,"choices--hide-label":this.hideLabel,"choices--auto-width":this.autoWidth,"breakpoint-sm":this.width<384,"breakpoint-md":this.width>=384&&this.width<576,"breakpoint-lg":this.width>=576&&this.width<768,"breakpoint-xl":this.width>=768},role:"radiogroup"},e("sc-form-control",{exportparts:"label, help-text, form-control",size:this.size,required:this.required,label:this.label,showLabel:this.showLabel,help:this.help,inputId:this.inputId,helpId:this.helpId,labelId:this.labelId},e("div",{part:"choices",class:"choices__items"},e("slot",null))))}get el(){return s(this)}static get watchers(){return{required:["handleRequiredChange"]}}};c.style=n;export{c as sc_choices};
//# sourceMappingURL=p-e1724681.entry.js.map