import withMock from"storybook-addon-mock";export default{title:"Components/Dashboard/Upcoming Invoice",decorators:[withMock]};const Template=({quantity_updates_enabled:e})=>`<sc-upcoming-invoice subscription-id='test' price-id="test" quantity-updates-enabled="${e?"true":"false"}"></sc-upcoming-invoice>`;export const Default=Template.bind({});Default.args={quantity_updates_enabled:!0},Default.parameters={mockData:[{url:"/surecart/v1/prices/test?expand%5B0%5D=product&_locale=user",method:"GET",status:200,response:{id:"a6d96db7-a81c-48a3-93fd-34197da78266",object:"price",ad_hoc:!1,ad_hoc_max_amount:null,ad_hoc_min_amount:0,amount:2e3,archived:!1,archived_at:null,currency:"usd",current_version:!0,metadata:[],recurring_interval:"month",recurring_interval_count:1,tax_behavior:"exclusive",trial_duration_days:null,product:{id:"df1e2172-ee6d-4886-95e5-a8ee01ef3173",object:"product",archived:!1,archived_at:null,description:null,image_url:null,metadata:{wp_created_by:"1"},metrics:{currency:"eur",max_price_amount:null,min_price_amount:null,prices_count:3},name:"Standard Membership",recurring:!0,tax_enabled:!0,tax_category:"digital",product_group:"1981b5e3-c3e8-4c3a-b470-be237bdddcd6",created_at:1647724120,updated_at:1647980831},created_at:1647724120,updated_at:1647980831}},{url:"/surecart/v1/subscriptions/test/upcoming_invoice/?expand%5B0%5D=invoice.subscription&expand%5B1%5D=subscription.payment_method&expand%5B2%5D=payment_method.card&expand%5B3%5D=invoice.discount&subscription%5Bprice%5D=test&_locale=user",method:"GET",status:200,response:{id:null,object:"invoice",amount_due:2e3,applied_balance_amount:0,currency:"usd",discount_amount:0,live_mode:!1,metadata:[],next_payment_retry_at:null,number:"099F0CC1",payment_retry_count:0,period_end_at:1653183614,period_start_at:1650591614,processor_data:{stripe:{account_id:"acct_1Kf9MR2H9Da8M4Tl",publishable_key:"pk_test_51KeWoQFugiAKLuJycCZesY1aYEzfauqW2SHSZSUj5xCorx7h7oZd5i6Vz2whx7Y5fMZr6WQQTeOoQEtaEnpk4fkB00dinySlbK"}},proration_amount:0,renewal:!1,status:"draft",subtotal_amount:2e3,tax_amount:0,tax_label:null,tax_status:"tax_zone_not_found",total_amount:2e3,trial_amount:0,url:null,billing_address:null,charge:null,customer:"7ec4178c-8da0-4634-b383-539e41d00d66",discount:null,payment_intent:null,payment_method:"21a282a5-b8e7-4921-9322-64ecf9bbe680",shipping_address:null,subscription:{id:"f2424bf2-2608-478b-8c7c-4fe542040cba",object:"subscription",cancel_at_period_end:!1,currency:"usd",current_period_end_at:1650591614,current_period_start_at:1647913214,ended_at:null,live_mode:!1,metadata:[],pending_update:[],status:"active",trial_end_at:null,trial_start_at:null,quantity:1,order:"5f4810d9-04aa-4bd0-a2be-8c2eb7b3ffd5",customer:"7ec4178c-8da0-4634-b383-539e41d00d66",discount:null,current_period:"15f9cbe9-326a-4394-92ed-8d3237dcf505",payment_method:{id:"f8377938-5a5c-4503-abf5-c03c5d655523",object:"payment_method",external_payment_method_id:"pm_1Kfwhi2H9Da8M4Tll59sfwq7",live_mode:!1,processor_type:"stripe",type:"card",card:{id:"f54e4aac-e4d0-4794-b89e-b63408e29e19",object:"card",brand:"visa",exp_month:4,exp_year:2024,last4:"4242",wallet_type:null,created_at:1647913213,updated_at:1647913213},customer:null,created_at:1647913213,updated_at:1647913214},price:"51f2d5c6-f1c1-48b2-861f-79130d124aca",purchase:"164c83cc-3505-4e7b-82b9-1bfcecbfbea7",created_at:1647913213,updated_at:1647913214},tax_identifier:null,created_at:null,updated_at:null,customer_id:"7ec4178c-8da0-4634-b383-539e41d00d66",order_id:null,price_id:null}}]};