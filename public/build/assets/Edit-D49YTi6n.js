import{u as l}from"./index-CvcS9a4t.js";import{_ as m}from"./Form-D_SViMpm.js";import{_ as d}from"./AuthenticatedLayout-B8x30H4z.js";import{o as c,c as u,w as s,b as t,a as p,u as n}from"./app-DjX-_2kw.js";import"./FormSection-Bvog5NCp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./TextInput-VllNJ3re.js";import"./PrimaryButton-CNNagvms.js";import"./ApplicationLogo-Dre4iVqx.js";const f={class:"py-12"},_={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},b={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},x={class:"p-6 bg-white border-b border-gray-200"},g={name:"ClientesEdit"},N=Object.assign(g,{props:{cliente:{type:Object,required:!0}},setup(i){const e=i,r=l({nombre:e.cliente.nombre,nit:e.cliente.nit,email:e.cliente.email,celular:e.cliente.celular,documento:e.cliente.documento});return(a,o)=>(c(),u(d,{title:"Editar Cliente"},{header:s(()=>o[1]||(o[1]=[t("h1",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Editar Cliente ",-1)])),default:s(()=>[t("div",f,[t("div",_,[t("div",b,[t("div",x,[p(m,{updating:!0,form:n(r),onSubmit:o[0]||(o[0]=h=>n(r).put(a.route("clientes.update",i.cliente.id)))},null,8,["form"])])])])])]),_:1}))}});export{N as default};