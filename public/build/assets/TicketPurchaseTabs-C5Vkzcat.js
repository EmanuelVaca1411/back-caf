import{a6 as f,T as _,f as b,a as e,w as s,u as t,b as g,e as v,o as w,d as m}from"./app-BiM-RHlu.js";import k from"./ParticipantRegister-DUYslBYK.js";import{u as x,s as y,a as n,b as T,c as u,d as $}from"./ParticipantRegisterModal-BrK1EsNn.js";import C from"./PaymentRegister-JcUXoR3x.js";import{s as c}from"./index-NDKNFfl5.js";import"./InputError-BTXFXL48.js";import"./index-xBLPUuwv.js";import"./index-ZH_vi-bW.js";import"./index-am3vmEIi.js";import"./index-BXP7Py52.js";import"./index-COz4i9dO.js";import"./index-BoEeoNdR.js";import"./index-g9yaTnxo.js";import"./index-CAWF2c8B.js";import"./index-BS1IZNak.js";import"./index-BT2H2cMC.js";import"./index-CcGyKJ_W.js";import"./index-UuzLUWes.js";const E={class:"flex justify-between gap-1 w-full md:px-5 mt-5"},K={__name:"TicketPurchaseTabs",setup(S){const o=f(),p=x(),{closeTicketPurchaseModal:i}=p,r=_({participants:[],amount:null,type_payment_id:null,image:null}),d=()=>{r.post(route("admin.tickets.store"),{onSuccess:()=>{o.add({severity:"success",summary:"Éxito",detail:"Ticket registrado exitosamente",life:3e3}),localStorage.removeItem("formData"),r.reset(),i()},onError:()=>{const l=Object.values(r.errors)[0];o.add({severity:"error",summary:"Error",detail:l??"Error al registrar ticket",life:3e3})}})};return(l,a)=>(w(),b("form",{onSubmit:v(d,["prevent"])},[e(t($),{value:"0"},{default:s(()=>[e(t(y),null,{default:s(()=>[e(t(n),{value:"0"},{default:s(()=>a[0]||(a[0]=[m("Campistas")])),_:1}),e(t(n),{value:"1"},{default:s(()=>a[1]||(a[1]=[m("Pago")])),_:1})]),_:1}),e(t(T),null,{default:s(()=>[e(t(u),{value:"0"},{default:s(()=>[e(k,{form:t(r)},null,8,["form"])]),_:1}),e(t(u),{value:"1"},{default:s(()=>[e(C,{form:t(r)},null,8,["form"])]),_:1})]),_:1})]),_:1}),g("div",E,[e(t(c),{label:"Cancelar",size:"small",class:"p-button-danger w-1/2 md:w-1/4 xl:w-1/5",disabled:t(r).processing,onClick:t(i)},null,8,["disabled","onClick"]),e(t(c),{type:"submit",size:"small",label:"Registrar",loading:t(r).processing,class:"w-1/2 md:w-1/4 xl:w-1/5"},null,8,["loading"])])],32))}};export{K as default};
