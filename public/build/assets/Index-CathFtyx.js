import{_ as f}from"./AuthenticatedLayout-B8x30H4z.js";import{L as i,d as b}from"./index-CvcS9a4t.js";import{o as s,c,w as d,b as e,a as m,d as a,u as l,f as u,s as h,F as p,g,t as y}from"./app-DjX-_2kw.js";import"./ApplicationLogo-Dre4iVqx.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const _={class:"py-12"},v={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},w={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},k={class:"p-6 bg-white border-b border-gray-200"},D={class:"flex justify-between"},V={class:"mt-4"},B={class:"table-auto w-full"},C={class:"text-sm divide-y divide-gray-100"},N={class:"border px-4 py-2"},j={class:"border px-4 py-2"},q=["onClick"],E={key:0,class:"text-xs font-semibold uppercase text-gray-400 bg-gray-50"},I={colspan:"3",class:"border px-4 py-4 text-right"},L={name:"DocumentosIndex"},z=Object.assign(L,{props:{documentos:{type:Object,required:!0},cliente:{type:String,required:!0}},setup(o){const x=(r,t)=>{confirm("¿Estás seguro de querer eliminar este documento?")&&b.Inertia.delete(route("documentos.destroy",[r,t]))};return(r,t)=>(s(),c(f,{title:"Documentos"},{header:d(()=>t[0]||(t[0]=[e("h1",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Documentos ",-1)])),default:d(()=>[e("div",_,[e("div",v,[e("div",w,[e("div",k,[e("div",D,[m(l(i),{href:r.route("documentos.create",o.cliente),class:"bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"},{default:d(()=>t[1]||(t[1]=[a(" Ingresar Documento ")])),_:1},8,["href"])]),e("div",V,[e("table",B,[t[5]||(t[5]=e("thead",{class:"text-xs font-semibold uppercase text-gray-400 bg-gray-50"},[e("tr",null,[e("th",{class:"px-4 py-2"},"Descripción"),e("th",{class:"px-4 py-2"},"Acciones")])],-1)),e("tbody",C,[(s(!0),u(p,null,h(o.documentos.data,n=>(s(),u("tr",{key:n.id_documento},[e("td",N,y(n.descripcion),1),e("td",j,[m(l(i),{href:r.route("documentos.show",[o.cliente,n.id_documento]),class:"ml-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"},{default:d(()=>t[2]||(t[2]=[a(" Ver ")])),_:2},1032,["href"]),e("button",{class:"ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",onClick:S=>x(o.cliente,n.id_documento)}," Eliminar ",8,q)])]))),128))]),o.documentos.last_page>1?(s(),u("tfoot",E,[e("tr",null,[e("td",I,[o.documentos.current_page>1?(s(),c(l(i),{key:0,href:o.documentos.prev_page_url,class:"px-3 py-1 bg-indigo-500 hover:bg-gray-600 text-white rounded"},{default:d(()=>t[3]||(t[3]=[a(" Anterior ")])),_:1},8,["href"])):g("",!0),o.documentos.current_page<o.documentos.last_page?(s(),c(l(i),{key:1,href:o.documentos.next_page_url,class:"ml-2 px-3 py-1 bg-indigo-500 hover:bg-gray-600 text-white rounded"},{default:d(()=>t[4]||(t[4]=[a(" Siguiente ")])),_:1},8,["href"])):g("",!0)])])])):g("",!0)])])])])])])]),_:1}))}});export{z as default};