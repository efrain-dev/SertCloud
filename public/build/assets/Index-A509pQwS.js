import{k as T,l as K,m as Q,p as Y,o as v,c as $,w as c,b as t,a as x,d as O,u as g,i as ee,q as te,f as C,s as re,F as ne,g as I,t as y}from"./app-BIV_zIbh.js";import{_ as ie}from"./AuthenticatedLayout-CQy3XZwc.js";import{d as L,L as h}from"./index-SwQe68w5.js";import"./ApplicationLogo-eayg0G-c.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";function oe(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}var R=oe,ae=typeof T=="object"&&T&&T.Object===Object&&T,se=ae,le=se,de=typeof self=="object"&&self&&self.Object===Object&&self,ce=le||de||Function("return this")(),W=ce,ue=W,fe=function(){return ue.Date.now()},ge=fe,he=/\s/;function ve(e){for(var n=e.length;n--&&he.test(e.charAt(n)););return n}var be=ve,pe=be,me=/^\s+/;function xe(e){return e&&e.slice(0,pe(e)+1).replace(me,"")}var ye=xe,we=W,_e=we.Symbol,D=_e,Z=D,q=Object.prototype,Te=q.hasOwnProperty,je=q.toString,w=Z?Z.toStringTag:void 0;function Se(e){var n=Te.call(e,w),s=e[w];try{e[w]=void 0;var d=!0}catch{}var o=je.call(e);return d&&(n?e[w]=s:delete e[w]),o}var ke=Se,$e=Object.prototype,Oe=$e.toString;function Ce(e){return Oe.call(e)}var Ie=Ce,V=D,Me=ke,Ee=Ie,Ne="[object Null]",Ae="[object Undefined]",F=V?V.toStringTag:void 0;function Be(e){return e==null?e===void 0?Ae:Ne:F&&F in Object(e)?Me(e):Ee(e)}var Le=Be;function Ze(e){return e!=null&&typeof e=="object"}var Ve=Ze,Fe=Le,Ge=Ve,Pe="[object Symbol]";function He(e){return typeof e=="symbol"||Ge(e)&&Fe(e)==Pe}var Re=He,We=ye,G=R,De=Re,P=NaN,qe=/^[-+]0x[0-9a-f]+$/i,Ue=/^0b[01]+$/i,Xe=/^0o[0-7]+$/i,ze=parseInt;function Je(e){if(typeof e=="number")return e;if(De(e))return P;if(G(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=G(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=We(e);var s=Ue.test(e);return s||Xe.test(e)?ze(e.slice(2),s?2:8):qe.test(e)?P:+e}var Ke=Je,Qe=R,M=ge,H=Ke,Ye="Expected a function",et=Math.max,tt=Math.min;function rt(e,n,s){var d,o,r,a,l,f,b=0,E=!1,p=!1,j=!0;if(typeof e!="function")throw new TypeError(Ye);n=H(n)||0,Qe(s)&&(E=!!s.leading,p="maxWait"in s,r=p?et(H(s.maxWait)||0,n):r,j="trailing"in s?!!s.trailing:j);function S(i){var u=d,m=o;return d=o=void 0,b=i,a=e.apply(m,u),a}function U(i){return b=i,l=setTimeout(_,n),E?S(i):a}function X(i){var u=i-f,m=i-b,B=n-u;return p?tt(B,r-m):B}function N(i){var u=i-f,m=i-b;return f===void 0||u>=n||u<0||p&&m>=r}function _(){var i=M();if(N(i))return A(i);l=setTimeout(_,X(i))}function A(i){return l=void 0,j&&d?S(i):(d=o=void 0,a)}function z(){l!==void 0&&clearTimeout(l),b=0,d=f=o=l=void 0}function J(){return l===void 0?a:A(M())}function k(){var i=M(),u=N(i);if(d=arguments,o=this,f=i,u){if(l===void 0)return U(f);if(p)return clearTimeout(l),l=setTimeout(_,n),S(f)}return l===void 0&&(l=setTimeout(_,n)),a}return k.cancel=z,k.flush=J,k}var nt=rt;const it=K(nt),ot={class:"py-12"},at={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},st={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},lt={class:"p-6 bg-white border-b border-gray-200"},dt={class:"flex justify-between"},ct={class:"mt-4"},ut={class:"mt-4"},ft={class:"table-auto w-full",style:{overflow:"auto"}},gt={class:"text-sm divide-y divide-gray-100"},ht={class:"border px-4"},vt={class:"border px-4"},bt={class:"border px-4"},pt={class:"border px-4"},mt={class:"border px-4"},xt={class:"border px-4 py-4 flex space-x-2",style:{"max-width":"300px"}},yt={key:0,class:"text-xs font-semibold uppercase text-gray-400 bg-gray-50"},wt={colspan:"6",class:"border px-4 py-4 text-right"},_t={name:"ClientesIndex"},Ot=Object.assign(_t,{props:{clientes:{type:Object,required:!0}},setup(e){const n=Q(null),s=o=>{confirm("¿Estás seguro de querer eliminar este proyecto?")&&L.Inertia.delete(route("clientes.destroy",o))};Y(n,o=>{d(o)});const d=it(o=>{L.Inertia.get(route("clientes.index"),{search:o},{preserveState:!0})},1e3);return(o,r)=>(v(),$(ie,{title:"Proyectos"},{header:c(()=>r[1]||(r[1]=[t("h1",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Clientes ",-1)])),default:c(()=>[t("div",ot,[t("div",at,[t("div",st,[t("div",lt,[t("div",dt,[x(g(h),{href:o.route("clientes.create"),class:"bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"},{default:c(()=>r[2]||(r[2]=[O(" Ingresar Cliente ")])),_:1},8,["href"])]),t("div",ct,[ee(t("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=a=>n.value=a),placeholder:"Buscar cliente...",class:"border rounded px-4 py-2 w-full"},null,512),[[te,n.value]])]),t("div",ut,[t("table",ft,[r[9]||(r[9]=t("thead",{class:"text-xs font-semibold uppercase text-gray-400 bg-gray-50"},[t("tr",null,[t("th",{class:"px-4 py-2"},"Nombre"),t("th",{class:"px-4 py-2"},"Nit"),t("th",{class:"px-4 py-2"},"Email"),t("th",{class:"px-4 py-2"},"Celular"),t("th",{class:"px-4 py-2"},"Documento"),t("th",{class:"px-4 py-2"},"Acciones")])],-1)),t("tbody",gt,[(v(!0),C(ne,null,re(e.clientes.data,a=>(v(),C("tr",null,[t("td",ht,y(a.nombre),1),t("td",vt,y(a.nit),1),t("td",bt,y(a.email),1),t("td",pt,y(a.celular),1),t("td",mt,y(a.documento),1),t("td",xt,[x(g(h),{href:o.route("clientes.edit",a.id),class:"flex items-center hover:bg-indigo-700 text-white font-bold py-1 px-2 rounded"},{default:c(()=>r[3]||(r[3]=[t("svg",{class:"w-6 h-6 text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},[t("path",{"fill-rule":"evenodd",d:"M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z","clip-rule":"evenodd"}),t("path",{"fill-rule":"evenodd",d:"M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z","clip-rule":"evenodd"})],-1)])),_:2},1032,["href"]),x(g(h),{href:o.route("clientes.show",a.id),class:"flex items-center hover:bg-indigo-700 text-white font-bold py-1 px-2 rounded"},{default:c(()=>r[4]||(r[4]=[t("svg",{class:"w-6 h-6 text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},[t("path",{"fill-rule":"evenodd",d:"M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z","clip-rule":"evenodd"})],-1)])),_:2},1032,["href"]),x(g(h),{href:o.route("documentos.index",a.id),class:"flex items-center hover:bg-amber-300 text-white font-bold py-1 px-2 rounded"},{default:c(()=>r[5]||(r[5]=[t("svg",{class:"w-6 h-6 text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m14 9.006h-.335a1.647 1.647 0 0 1-1.647-1.647v-1.706a1.647 1.647 0 0 1 1.647-1.647L19 12M5 12v5h1.375A1.626 1.626 0 0 0 8 15.375v-1.75A1.626 1.626 0 0 0 6.375 12H5Zm9 1.5v2a1.5 1.5 0 0 1-1.5 1.5v0a1.5 1.5 0 0 1-1.5-1.5v-2a1.5 1.5 0 0 1 1.5-1.5v0a1.5 1.5 0 0 1 1.5 1.5Z"})],-1)])),_:2},1032,["href"]),x(g(h),{class:"flex items-center hover:bg-red-700 text-white font-bold py-1 px-2 rounded",onClick:l=>s(a.id)},{default:c(()=>r[6]||(r[6]=[t("svg",{class:"w-6 h-6 text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},[t("path",{"fill-rule":"evenodd",d:"M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z","clip-rule":"evenodd"})],-1)])),_:2},1032,["onClick"])])]))),256))]),e.clientes.last_page>1?(v(),C("tfoot",yt,[t("tr",null,[t("td",wt,[e.clientes.current_page>1?(v(),$(g(h),{key:0,href:e.clientes.prev_page_url,class:"px-3 py-1 bg-indigo-500 hover:bg-gray-600 text-white rounded"},{default:c(()=>r[7]||(r[7]=[O(" Anterior ")])),_:1},8,["href"])):I("",!0),e.clientes.current_page<e.clientes.last_page?(v(),$(g(h),{key:1,href:e.clientes.next_page_url,class:"ml-2 px-3 py-1 bg-indigo-500 hover:bg-gray-600 text-white rounded"},{default:c(()=>r[8]||(r[8]=[O(" Siguiente ")])),_:1},8,["href"])):I("",!0)])])])):I("",!0)])])])])])])]),_:1}))}});export{Ot as default};