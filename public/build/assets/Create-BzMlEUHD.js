import{_ as m}from"./AuthenticatedLayout-BfPSbqpi.js";import{u as i}from"./index-DCUGlJx-.js";import{_ as d}from"./Form-DKvqXRGr.js";import{o as l,c as n,w as s,b as e,a as p,u as a}from"./app-CKpdEczP.js";import"./ApplicationLogo-lBWMswla.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FormSection-BvFr9iHB.js";import"./TextInput-CIPlZQ62.js";import"./PrimaryButton-DyzoGY1p.js";const _={class:"py-12"},c={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},u={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},f={class:"p-6 bg-white border-b border-gray-200"},x={name:"EmpleadosCreate"},N=Object.assign(x,{setup(b){const t=i({name:"",email:"",password:"",role:"",selectRole:[{value:"empleado",text:"Empleado"},{value:"administrador",text:"Administrador"}]});return(r,o)=>(l(),n(m,{title:"Crear Empleado"},{header:s(()=>o[1]||(o[1]=[e("h1",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Crear Empleado ",-1)])),default:s(()=>[e("div",_,[e("div",c,[e("div",u,[e("div",f,[p(d,{form:a(t),onSubmit:o[0]||(o[0]=g=>a(t).post(r.route("empleados.store")))},null,8,["form"])])])])])]),_:1}))}});export{N as default};
