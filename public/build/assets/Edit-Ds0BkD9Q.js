import{u as l}from"./index-CkxUdRMc.js";import{_ as d}from"./Form-D-crfC7Q.js";import{_ as m}from"./AuthenticatedLayout-CO1-VXw6.js";import{o as c,c as u,w as r,b as t,a as p,u as n}from"./app-C7H81twa.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./TextInput-vjE5LDJC.js";import"./PrimaryButton-CNayepUy.js";import"./ApplicationLogo-C5uyv66j.js";const f={class:"py-12"},_={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},b={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},x={class:"p-6 bg-white border-b border-gray-200"},g={name:"ClientesEdit"},k=Object.assign(g,{props:{cliente:{type:Object,required:!0}},setup(i){const e=i,s=l({nombre:e.cliente.nombre,nit:e.cliente.nit,email:e.cliente.email,celular:e.cliente.celular,documento:e.cliente.documento});return(a,o)=>(c(),u(m,{title:"Editar Cliente"},{header:r(()=>o[1]||(o[1]=[t("h1",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Editar Cliente ",-1)])),default:r(()=>[t("div",f,[t("div",_,[t("div",b,[t("div",x,[p(d,{updating:!0,form:n(s),onSubmit:o[0]||(o[0]=h=>n(s).put(a.route("clientes.update",i.cliente.id)))},null,8,["form"])])])])])]),_:1}))}});export{k as default};
