import{u as c,o as f,e as _,b as o,g as e,w as l,F as w,H as g,a as t,n as V,m as b,i as k}from"./app.824ad3af.js";import{A as v}from"./AuthenticationCard.7556b739.js";import{_ as x}from"./AuthenticationCardLogo.3eff4d03.js";import{_ as i}from"./InputError.f7b85e45.js";import{_ as m}from"./InputLabel.58cc2b82.js";import{_ as y}from"./PrimaryButton.394dce05.js";import{_ as n}from"./TextInput.27bd834e.js";import"./_plugin-vue_export-helper.cdc0426e.js";const P=["onSubmit"],$={class:"mt-4"},h={class:"mt-4"},C={class:"flex items-center justify-end mt-4"},F=k(" Reset Password "),j={__name:"ResetPassword",props:{email:String,token:String},setup(p){const d=p,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(S,a)=>(f(),_(w,null,[o(e(g),{title:"Reset Password"}),o(v,null,{logo:l(()=>[o(x)]),default:l(()=>[t("form",{onSubmit:b(u,["prevent"])},[t("div",null,[o(m,{for:"email",value:"Email"}),o(n,{id:"email",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>e(s).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),o(i,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",$,[o(m,{for:"password",value:"Password"}),o(n,{id:"password",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>e(s).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(i,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),t("div",h,[o(m,{for:"password_confirmation",value:"Confirm Password"}),o(n,{id:"password_confirmation",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>e(s).password_confirmation=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(i,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),t("div",C,[o(y,{class:V({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:l(()=>[F]),_:1},8,["class","disabled"])])],40,P)]),_:1})],64))}};export{j as default};
