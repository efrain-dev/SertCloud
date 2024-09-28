import{A as S}from"./ApplicationLogo-DmFZXNhY.js";import{s as $,x as H,h as w,A as B,o as g,f as m,b as e,r as c,i as k,y as _,a as l,w as o,n as d,z as j,c as A,u as x,j as y,bX as L,d as u,t as f,ad as v}from"./app-B3IEFwyP.js";const Z={class:"relative"},z={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:String,default:"py-1 bg-white"}},setup(a){const s=a,r=h=>{n.value&&h.key==="Escape"&&(n.value=!1)};$(()=>document.addEventListener("keydown",r)),H(()=>document.removeEventListener("keydown",r));const t=w(()=>({48:"w-48"})[s.width.toString()]),p=w(()=>s.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":s.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top"),n=B(!1);return(h,i)=>(g(),m("div",Z,[e("div",{onClick:i[0]||(i[0]=b=>n.value=!n.value)},[c(h.$slots,"trigger")]),k(e("div",{class:"fixed inset-0 z-40",onClick:i[1]||(i[1]=b=>n.value=!1)},null,512),[[_,n.value]]),l(j,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:o(()=>[k(e("div",{class:d(["absolute z-50 mt-2 rounded-md shadow-lg",[t.value,p.value]]),style:{display:"none"},onClick:i[2]||(i[2]=b=>n.value=!1)},[e("div",{class:d(["rounded-md ring-1 ring-black ring-opacity-5",a.contentClasses])},[c(h.$slots,"content")],2)],2),[[_,n.value]])]),_:3})]))}},C={__name:"DropdownLink",props:{href:{type:String,required:!0}},setup(a){return(s,r)=>(g(),A(x(y),{href:a.href,class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:o(()=>[c(s.$slots,"default")]),_:3},8,["href"]))}},M={__name:"ResponsiveNavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(a){const s=a,r=w(()=>s.active?"block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 text-start text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(t,p)=>(g(),A(x(y),{href:a.href,class:d(r.value)},{default:o(()=>[c(t.$slots,"default")]),_:3},8,["href","class"]))}},E={class:"min-h-screen bg-gray-100"},N={class:"bg-white border-b border-gray-100"},V={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},D={class:"flex justify-between h-16"},T={class:"flex"},O={class:"shrink-0 flex items-center"},P={class:"hidden sm:flex sm:items-center sm:ms-6"},q={class:"ms-3 relative"},F={class:"inline-flex rounded-md"},R={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},U={class:"-me-2 flex items-center sm:hidden"},X={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},G={class:"pt-4 pb-1 border-t border-gray-200"},I={class:"px-4"},J={class:"font-medium text-base text-gray-800"},K={class:"font-medium text-sm text-gray-500"},Q={class:"mt-3 space-y-1"},W={class:"flex"},Y={id:"cta-button-sidebar",class:"fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0","aria-label":"Sidebar"},ee={class:"h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"},te={class:"space-y-2 font-medium"},re={id:"dropdown-example",class:"hidden py-2 space-y-2"},se=["href","active"],oe={id:"dropdown-tareas",class:"hidden py-2 space-y-2"},ae=["href","active"],ne=["href","active"],le={id:"dropdown-empleados",class:"hidden py-2 space-y-2"},ie=["href","active"],de={class:"flex-1 p-6"},ce={__name:"AuthenticatedLayout",setup(a){const s=B(!1);return $(()=>{L()}),(r,t)=>(g(),m("div",null,[e("div",E,[e("nav",N,[e("div",V,[e("div",D,[e("div",T,[e("div",O,[l(x(y),{href:r.route("dashboard")},{default:o(()=>[l(S,{class:"block h-9 w-auto fill-current text-gray-800"})]),_:1},8,["href"]),t[1]||(t[1]=e("button",{"data-drawer-target":"cta-button-sidebar","data-drawer-toggle":"cta-button-sidebar","aria-controls":"cta-button-sidebar",type:"button",class:"inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"},[e("span",{class:"sr-only"},"Menu"),e("svg",{class:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"clip-rule":"evenodd","fill-rule":"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"})])],-1))])]),e("div",P,[e("div",q,[l(z,{align:"right",width:"48"},{trigger:o(()=>[e("span",F,[e("button",R,[u(f(r.$page.props.auth.user.name)+" ",1),t[2]||(t[2]=e("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1))])])]),content:o(()=>[l(C,{href:r.route("profile.edit")},{default:o(()=>t[3]||(t[3]=[u(" Profile ")])),_:1},8,["href"]),l(C,{href:r.route("logout"),method:"post",as:"button"},{default:o(()=>t[4]||(t[4]=[u(" Log Out ")])),_:1},8,["href"])]),_:1})])]),e("div",U,[e("button",{onClick:t[0]||(t[0]=p=>s.value=!s.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(g(),m("svg",X,[e("path",{class:d({hidden:s.value,"inline-flex":!s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:d({hidden:!s.value,"inline-flex":s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:d([{block:s.value,hidden:!s.value},"sm:hidden"])},[e("div",G,[e("div",I,[e("div",J,f(r.$page.props.auth.user.name),1),e("div",K,f(r.$page.props.auth.user.email),1)]),e("div",Q,[l(M,{href:r.route("profile.edit")},{default:o(()=>t[5]||(t[5]=[u(" Profile ")])),_:1},8,["href"]),l(M,{href:r.route("logout"),method:"post",as:"button"},{default:o(()=>t[6]||(t[6]=[u(" Log Out ")])),_:1},8,["href"])])])],2)]),e("div",W,[e("aside",Y,[e("div",ee,[e("ul",te,[e("li",null,[t[7]||(t[7]=v('<button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clip-rule="evenodd"></path></svg><span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Cliente</span><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg></button>',1)),e("ul",re,[e("li",null,[e("a",{href:r.route("clientes.index"),active:r.route().current("clientes.index"),class:"flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"},"Manejo de Clientes",8,se)])])]),e("li",null,[t[8]||(t[8]=v('<button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-tareas" data-collapse-toggle="dropdown-tareas"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z"></path></svg><span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Tareas</span><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg></button>',1)),e("ul",oe,[e("li",null,[e("a",{href:r.route("planner"),active:r.route().current("planner"),class:"flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"},"Planner",8,ae)]),e("li",null,[e("a",{href:r.route("tareas.index"),active:r.route().current("tareas.index"),class:"flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"},"Agregar Tarea",8,ne)])])]),e("li",null,[t[9]||(t[9]=v('<button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-empleados" data-collapse-toggle="dropdown-empleados"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M17 10v1.126c.367.095.714.24 1.032.428l.796-.797 1.415 1.415-.797.796c.188.318.333.665.428 1.032H21v2h-1.126c-.095.367-.24.714-.428 1.032l.797.796-1.415 1.415-.796-.797a3.979 3.979 0 0 1-1.032.428V20h-2v-1.126a3.977 3.977 0 0 1-1.032-.428l-.796.797-1.415-1.415.797-.796A3.975 3.975 0 0 1 12.126 16H11v-2h1.126c.095-.367.24-.714.428-1.032l-.797-.796 1.415-1.415.796.797A3.977 3.977 0 0 1 15 11.126V10h2Zm.406 3.578.016.016c.354.358.574.85.578 1.392v.028a2 2 0 0 1-3.409 1.406l-.01-.012a2 2 0 0 1 2.826-2.83ZM5 8a4 4 0 1 1 7.938.703 7.029 7.029 0 0 0-3.235 3.235A4 4 0 0 1 5 8Zm4.29 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h6.101A6.979 6.979 0 0 1 9 15c0-.695.101-1.366.29-2Z" clip-rule="evenodd"></path></svg><span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Empleados</span><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg></button>',1)),e("ul",le,[e("li",null,[e("a",{href:r.route("empleados.index"),active:r.route().current("empleados.index"),class:"flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"},"Manejo de Empleados",8,ie)])])])])])]),e("main",de,[c(r.$slots,"default")])])])]))}};export{ce as _};