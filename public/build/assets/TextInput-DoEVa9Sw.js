import{i as u,bF as c,o as t,f as s,b as d,t as l,r as m,bw as p,b2 as _,aP as f,bE as b}from"./app-BHl6xBAp.js";const g={class:"text-sm text-red-600"},S={__name:"InputError",props:{message:{type:String}},setup(e){return(a,o)=>u((t(),s("div",null,[d("p",g,l(e.message),1)],512)),[[c,e.message]])}},v={class:"block font-medium text-sm text-gray-700"},x={key:0},h={key:1},V={__name:"InputLabel",props:{value:{type:String}},setup(e){return(a,o)=>(t(),s("label",v,[e.value?(t(),s("span",x,l(e.value),1)):(t(),s("span",h,[m(a.$slots,"default")]))]))}},w={__name:"TextInput",props:{modelValue:{type:String,required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(e,{expose:a}){const o=p(e,"modelValue"),n=_(null);return f(()=>{n.value.hasAttribute("autofocus")&&n.value.focus()}),a({focus:()=>n.value.focus()}),(y,r)=>u((t(),s("input",{class:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm","onUpdate:modelValue":r[0]||(r[0]=i=>o.value=i),ref_key:"input",ref:n},null,512)),[[b,o.value]])}};export{V as _,w as a,S as b};