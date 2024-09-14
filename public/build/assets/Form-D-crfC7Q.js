import{o as u,f as c,b as l,r as m,h as g,k as $,a as t,w as n,e as b,n as v,g as V,c as y,d as p,t as f}from"./app-C7H81twa.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as r,a as i,b as d}from"./TextInput-vjE5LDJC.js";import{P as _}from"./PrimaryButton-CNayepUy.js";const h={},x={class:"md:col-span-1 flex justify-between"},k={class:"px-4 sm:px-0"},C={class:"text-lg font-medium text-gray-900"},S={class:"mt-1 text-sm text-gray-600"},B={class:"px-4 sm:px-0"};function N(s,a){return u(),c("div",x,[l("div",k,[l("h3",C,[m(s.$slots,"title")]),l("p",S,[m(s.$slots,"description")])]),l("div",B,[m(s.$slots,"aside")])])}const U=w(h,[["render",N]]),j={class:"md:grid md:grid-cols-3 md:gap-6"},E={class:"mt-5 md:mt-0 md:col-span-2"},q={class:"grid grid-cols-6 gap-6"},z={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"},A={__name:"FormSection",emits:["submitted"],setup(s){const a=g(()=>!!$().actions);return(e,o)=>(u(),c("div",j,[t(U,null,{title:n(()=>[m(e.$slots,"title")]),description:n(()=>[m(e.$slots,"description")]),_:3}),l("div",E,[l("form",{onSubmit:o[0]||(o[0]=b(G=>e.$emit("submitted"),["prevent"]))},[l("div",{class:v(["px-4 py-5 bg-white sm:p-6 shadow",a.value?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"])},[l("div",q,[m(e.$slots,"form")])],2),a.value?(u(),c("div",z,[m(e.$slots,"actions")])):V("",!0)],32)])]))}},D={class:"col-span-6 sm:col-span-6"},F={class:"col-span-6 sm:col-span-6"},O={class:"col-span-6 sm:col-span-6"},P={class:"col-span-6 sm:col-span-6"},T={class:"col-span-6 sm:col-span-6"},M={name:"ClientesForm"},L=Object.assign(M,{props:{form:{type:Object,required:!0},updating:{type:Boolean,required:!1,default:!1}},emits:["submit"],setup(s){return(a,e)=>(u(),y(A,{onSubmitted:e[5]||(e[5]=o=>a.$emit("submit"))},{title:n(()=>[p(f(s.updating?"Editar Cliente":"Crear nuevo cliente"),1)]),form:n(()=>[l("div",D,[t(r,{for:"nombre",value:"Nombre"}),t(i,{id:"nombre",modelValue:s.form.nombre,"onUpdate:modelValue":e[0]||(e[0]=o=>s.form.nombre=o),type:"text",class:"mt-1 block w-full",autocomplete:"nombre"},null,8,["modelValue"]),t(d,{message:a.$page.props.errors.nombre,class:"mt-2"},null,8,["message"])]),l("div",F,[t(r,{for:"nit",value:"Nit"}),t(i,{id:"name",modelValue:s.form.nit,"onUpdate:modelValue":e[1]||(e[1]=o=>s.form.nit=o),type:"text",class:"mt-1 block w-full",autocomplete:"nit"},null,8,["modelValue"]),t(d,{message:a.$page.props.errors.nit,class:"mt-2"},null,8,["message"])]),l("div",O,[t(r,{for:"email",value:"Email"}),t(i,{id:"email",modelValue:s.form.email,"onUpdate:modelValue":e[2]||(e[2]=o=>s.form.email=o),type:"text",class:"mt-1 block w-full",autocomplete:"email"},null,8,["modelValue"]),t(d,{message:a.$page.props.errors.email,class:"mt-2"},null,8,["message"])]),l("div",P,[t(r,{for:"celular",value:"Celular"}),t(i,{id:"celular",rows:"5",modelValue:s.form.celular,"onUpdate:modelValue":e[3]||(e[3]=o=>s.form.celular=o),type:"text",class:"mt-1 block w-full",autocomplete:"celular"},null,8,["modelValue"]),t(d,{message:a.$page.props.errors.celular,class:"mt-2"},null,8,["message"])]),l("div",T,[t(r,{for:"celular",value:"Documento"}),t(i,{id:"documento",rows:"5",modelValue:s.form.documento,"onUpdate:modelValue":e[4]||(e[4]=o=>s.form.documento=o),type:"text",class:"mt-1 block w-full",autocomplete:"documento"},null,8,["modelValue"]),t(d,{message:a.$page.props.errors.documento,class:"mt-2"},null,8,["message"])])]),actions:n(()=>[t(_,null,{default:n(()=>[p(f(s.updating?"Actualizar":"Crear"),1)]),_:1})]),_:1}))}});export{L as _};
