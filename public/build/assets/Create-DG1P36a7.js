import{_ as i}from"./AuthenticatedLayout-CuUlYLb0.js";import{u as m}from"./index-CZVPIIwf.js";import{_ as d}from"./Form-CX83UVgh.js";import{o as l,c as n,w as s,b as e,a as p,u as r}from"./app-B6jEAgnm.js";import"./ApplicationLogo-DAxj98pA.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FormSection-B_pjaWZj.js";import"./TextInput-DHZAZKS_.js";import"./PrimaryButton-jjTyBfgN.js";import"./InputSelect-DgIMja8x.js";const _={class:"py-12"},u={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},c={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},f={class:"p-6 bg-white border-b border-gray-200"},x={name:"EmpleadosCreate"},N=Object.assign(x,{setup(g){const o=m({name:"",email:"",password:"",role:"",selectRole:[{value:"gestor",text:"Gestor"},{value:"administrador",text:"Administrador"},{value:"admin",text:"Admin"}]});return(a,t)=>(l(),n(i,{title:"Crear Empleado"},{header:s(()=>t[1]||(t[1]=[e("h1",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Crear Empleado ",-1)])),default:s(()=>[e("div",_,[e("div",u,[e("div",c,[e("div",f,[p(d,{form:r(o),onSubmit:t[0]||(t[0]=b=>r(o).post(a.route("empleados.store")))},null,8,["form"])])])])])]),_:1}))}});export{N as default};