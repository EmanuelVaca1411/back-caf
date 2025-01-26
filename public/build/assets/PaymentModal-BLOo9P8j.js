import{Y as C,k as M,a5 as O,a6 as R,Q as T,h as x,T as U,c as $,w as _,u as s,a7 as j,o as p,b as t,t as f,a as n,f as b,g as v,e as B}from"./app-BiM-RHlu.js";import{_ as w}from"./InputError-BTXFXL48.js";import{s as E}from"./index-g9yaTnxo.js";import{s as z}from"./index-xBLPUuwv.js";import{s as F}from"./index-UuzLUWes.js";import{s as P}from"./index-NDKNFfl5.js";import{s as I}from"./index-CcGyKJ_W.js";const N=C("payment",()=>{const i=M(!1);return{isOpenPaymentModal:i,openPaymentModal:()=>{console.log("Open payment"),i.value=!0},closePaymentModal:()=>{i.value=!1}}}),D={class:"bg-gray-100 p-4 rounded-md shadow-sm mb-4"},L={class:"grid grid-cols-1 sm:grid-cols-3 gap-2 text-center"},A={class:"text-gray-800 text-xl font-bold"},G={class:"text-green-600 text-xl font-bold"},Q={class:"text-red-600 text-xl font-bold"},Y={class:"flex flex-row flex-wrap items-start sm:items-center gap-2 my-5"},q={class:"flex flex-col gap-2 w-full"},H={class:"flex flex-col gap-2 w-full"},J={key:0,class:"flex flex-col items-center gap-2"},K={class:"card flex flex-col items-center gap-6"},W=["src"],X={class:"flex justify-between gap-5 w-full md:px-5"},Z={__name:"PaymentModal",setup(i){const m=N(),{closePaymentModal:d}=m,{isOpenPaymentModal:u}=O(m),y=R(),g=T(),c=M(null),k=x(()=>{var a;return(a=g.props)==null?void 0:a.type_payments}),r=x(()=>{var a;return(a=g.props)==null?void 0:a.ticket_purchase}),o=U({amount:0,type_payment_id:null,ticket_purchase_id:r.value.id,image:null});function S(a){const e=a.files[0];o.image=e;const l=new FileReader;l.onload=async h=>{c.value=h.target.result},l.readAsDataURL(e)}const V=()=>{o.post(route("admin.ticket-payments.store"),{onFinish:()=>{},onSuccess:()=>{y.add({severity:"success",summary:"Éxito",detail:"Pago registrado exitosamente",life:3e3}),o.reset(),d()},onError:()=>{const a=Object.values(o.errors)[0];y.add({severity:"error",summary:"Error",detail:a??"Error al registrar pago",life:3e3})}})};return(a,e)=>(p(),$(s(I),{visible:s(u),"onUpdate:visible":e[2]||(e[2]=l=>j(u)?u.value=l:null),modal:"",class:"w-full sm:w-4/5 md:w-3/5 lg:w-2/5"},{header:_(()=>e[3]||(e[3]=[t("h3",{class:"text-xl font-bold"},"Registrando pago",-1)])),default:_(()=>[t("form",{onSubmit:B(V,["prevent"])},[t("div",D,[t("div",L,[t("div",null,[e[4]||(e[4]=t("span",{class:"text-gray-600 text-sm font-medium block"},"Total:",-1)),t("span",A,f(r.value.total),1)]),t("div",null,[e[5]||(e[5]=t("span",{class:"text-gray-600 text-sm font-medium block"},"Monto Cancelado:",-1)),t("span",G,f(r.value.paid_amount),1)]),t("div",null,[e[6]||(e[6]=t("span",{class:"text-gray-600 text-sm font-medium block"},"Monto Pendiente:",-1)),t("span",Q,f(r.value.remaining_amount),1)])])]),t("div",Y,[t("div",q,[e[7]||(e[7]=t("label",{class:"text-base font-medium",for:"amount"},"Monto",-1)),n(s(E),{modelValue:s(o).amount,"onUpdate:modelValue":e[0]||(e[0]=l=>s(o).amount=l),placeholder:"Ingrese un monto",min:0,max:r.value.remaining_amount,class:"w-full",mode:"decimal"},null,8,["modelValue","max"]),n(w,{message:s(o).errors.amount},null,8,["message"])]),t("div",H,[e[8]||(e[8]=t("label",{class:"text-base font-medium",for:"payment_method_id"},"Método de Pago",-1)),n(s(z),{modelValue:s(o).type_payment_id,"onUpdate:modelValue":e[1]||(e[1]=l=>s(o).type_payment_id=l),inputId:"payment_method_id",options:k.value,optionLabel:"name",optionValue:"id",placeholder:"Selecciona un método de pago"},null,8,["modelValue","options"]),n(w,{message:s(o).errors.type_payment_id},null,8,["message"])])]),s(o).type_payment_id===2?(p(),b("div",J,[e[9]||(e[9]=t("label",{class:"text-base font-medium",for:"reference"},"Subir comprobante",-1)),t("div",K,[n(s(F),{mode:"basic",onSelect:S,customUpload:"",auto:"",severity:"secondary",class:"p-button-outlined",accept:"image/*"}),c.value?(p(),b("img",{key:0,src:c.value,alt:"Image",class:"shadow-md rounded-xl w-52 h-52",style:{filter:"grayscale(100%)"}},null,8,W)):v("",!0)])])):v("",!0),t("div",X,[n(s(P),{label:"Cancelar",size:"small",class:"p-button-danger w-1/2 md:w-1/4 xl:w-1/5",onClick:s(d)},null,8,["onClick"]),n(s(P),{label:"Guardar",size:"small",type:"submit",class:"p-button-success w-1/2 md:w-1/4 xl:w-1/5"})])],32)]),_:1},8,["visible"]))}},re=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));export{re as P,Z as _,N as u};
