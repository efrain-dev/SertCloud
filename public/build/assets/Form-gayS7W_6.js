import{_ as u}from"./FormSection-ColSUQ7G.js";import{_ as r,a as d,b as l}from"./TextInput-C3uWDyZB.js";import{P as p}from"./PrimaryButton-5xd8Td02.js";import{o as f,c as g,w as o,d as m,t as c,b as n,a as s}from"./app-BIV_zIbh.js";const b={class:"col-span-6 sm:col-span-6"},_={class:"col-span-6 sm:col-span-6"},$={name:"DocumentosForm"},D=Object.assign($,{props:{form:{type:Object,required:!0},updating:{type:Boolean,required:!1,default:!1}},emits:["submit"],setup(a){return(i,e)=>(f(),g(u,{onSubmitted:e[2]||(e[2]=t=>i.$emit("submit"))},{title:o(()=>[m(c(a.updating?"Editar Documento":"Crear nuevo Documento"),1)]),form:o(()=>[n("div",b,[s(r,{for:"descripcion",value:"Descripción"}),s(d,{id:"descripcion",modelValue:a.form.descripcion,"onUpdate:modelValue":e[0]||(e[0]=t=>a.form.descripcion=t),type:"text",class:"mt-1 block w-full",autocomplete:"descripcion"},null,8,["modelValue"]),s(l,{message:i.$page.props.errors.descripcion,class:"mt-2"},null,8,["message"])]),n("div",_,[s(r,{for:"imagen",value:"Imagen"}),n("input",{id:"imagen",type:"file",class:"mt-1 block w-full",onChange:e[1]||(e[1]=t=>a.form.imagen=t.target.files[0])},null,32),s(l,{message:i.$page.props.errors.imagen,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[s(p,null,{default:o(()=>[m(c(a.updating?"Actualizar":"Crear"),1)]),_:1})]),_:1}))}});export{D as _};