import{_ as g}from"./AuthenticatedLayout-CQy3XZwc.js";import{L as r,d as b}from"./index-SwQe68w5.js";import{o as f,c as u,w as o,b as t,t as l,a as i,d as a,u as n}from"./app-BIV_zIbh.js";import"./ApplicationLogo-eayg0G-c.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x={class:"py-12"},h={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},c={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},p={class:"p-6 bg-white border-b border-gray-200"},_={class:"text-2xl font-bold mb-4"},w={class:"text-gray-700 mb-4"},v={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4"},y={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},k={class:"p-6 bg-white border-b border-gray-200"},D={name:"OrdenesDetail"},q=Object.assign(D,{props:{orden:{type:Object,required:!0}},setup(s){const m=d=>{confirm("¿Estás seguro de querer eliminar esta orden?")&&b.Inertia.delete(route("ordenes.destroy",d))};return(d,e)=>(f(),u(g,{title:"Detalle Tarea"},{header:o(()=>e[1]||(e[1]=[t("h1",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Detalle Orden ",-1)])),default:o(()=>[t("div",x,[t("div",h,[t("div",c,[t("div",p,[t("h1",_,l(s.orden.descripcion),1),t("p",w,l(s.orden.fecha),1)])])]),t("div",v,[t("div",y,[t("div",k,[i(n(r),{href:d.route("ordenes.index"),class:"bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"},{default:o(()=>e[2]||(e[2]=[a("Volver")])),_:1},8,["href"]),i(n(r),{href:d.route("ordenes.edit",s.orden.id_orden),class:"ml-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"},{default:o(()=>e[3]||(e[3]=[a("Editar")])),_:1},8,["href"]),i(n(r),{class:"ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",onClick:e[0]||(e[0]=O=>m(s.orden.id_orden))},{default:o(()=>e[4]||(e[4]=[a(" Eliminar ")])),_:1})])])])])]),_:1}))}});export{q as default};