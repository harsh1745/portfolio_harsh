const o=i=>((null==i?void 0:i.data)||[]).map((i=>({...(null==i?void 0:i.id)?{id:i.id}:{},price_id:i.price.id,quantity:i.quantity}))),i=i=>((null==i?void 0:i.data)||[]).map((i=>i.price.id)),v=i=>((null==i?void 0:i.data)||[]).map((i=>{var l;return(null===(l=null==i?void 0:i.bump)||void 0===l?void 0:l.id)||(null==i?void 0:i.bump)})),d=(i,l)=>((null==i?void 0:i.data)||[]).find((i=>i.price.id===l)),l=(l,d)=>!!i(null==d?void 0:d.line_items).find((i=>(null==l?void 0:l.id)===i)),n=(i,l)=>!!v(null==l?void 0:l.line_items).find((l=>(null==i?void 0:i.id)===l)),u=i=>{var l,d,n;return!!(null===(d=null===(l=null==i?void 0:i.line_items)||void 0===l?void 0:l.data)||void 0===d?void 0:d.length)&&(null===(n=null==i?void 0:i.line_items.data)||void 0===n?void 0:n.some((i=>{var l;return null===(l=null==i?void 0:i.price)||void 0===l?void 0:l.recurring_interval_count})))};export{n as a,o as c,d as g,u as h,l as i};