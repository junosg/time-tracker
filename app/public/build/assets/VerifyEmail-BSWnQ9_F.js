import{d as l,T as m,s as _,Z as g,j as p,c as y,w as o,o as u,a as r,g as h,h as v,b as s,e as f,n as b,f as k}from"./app-0iQL9H34.js";import{G as x}from"./GuestLayout-CLATVpDD.js";import{P as w}from"./PrimaryButton-pnDQcblr.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ApplicationLogo-SJrFJ6aF.js";import"./AppCard-s9N-J5gg.js";const B=l({__name:"VerifyEmail",props:{status:{type:String,required:!1}},setup(t,{expose:n}){n();const i=t,e=m({}),a=()=>{e.post(route("verification.send"))},c=_(()=>i.status==="verification-link-sent"),d={props:i,form:e,submit:a,verificationLinkSent:c,GuestLayout:x,PrimaryButton:w,get Head(){return g},get Link(){return p}};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}}),L=s("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),E={key:0,class:"mb-4 font-medium text-sm text-green-600"},S={class:"mt-4 flex items-center justify-between"};function j(t,n,i,e,a,c){return u(),y(e.GuestLayout,null,{default:o(()=>[r(e.Head,{title:"Email Verification"}),L,e.verificationLinkSent?(u(),h("div",E," A new verification link has been sent to the email address you provided during registration. ")):v("v-if",!0),s("form",{onSubmit:k(e.submit,["prevent"])},[s("div",S,[r(e.PrimaryButton,{class:b({"opacity-25":e.form.processing}),disabled:e.form.processing},{default:o(()=>[f(" Resend Verification Email ")]),_:1},8,["class","disabled"]),r(e.Link,{href:t.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:o(()=>[f("Log Out")]),_:1},8,["href"])])],32)]),_:1})}const H=V(B,[["render",j],["__file","/var/www/html/resources/js/Pages/Auth/VerifyEmail.vue"]]);export{H as default};