import{B as $e,C as V,D as le,E as ht,G as bt,o as d,f as v,b as r,i as q,H as u,c as A,I as M,g as S,F as vt,J as $t,K as Yt,L as ce,M as Ee,N as Le,O as _e,P as gt,a as h,R as Xt,S as De,w as b,s as Fe,U as Re,V as ze,t as et,u as f,k as Gt,m as Ke,p as He,W as H,_ as Ue,X as Ye,d as dt}from"./app-BqyRcbdb.js";import{s as Xe,_ as Ge,a as Ct,b as kt,c as At,d as qe}from"./Navbar-CUEVCwAF.js";import{_ as Ze}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{s as We,Z as Ot,a as Je}from"./index-DRGauLTE.js";import{F as Qe}from"./index-Br9BGgoM.js";import{s as yt,R as Et}from"./index-BWgNPcvj.js";import{s as ta,U as Pt}from"./index-4c4WoRSC.js";import{s as de}from"./index-4c-MSWla.js";import{s as ue}from"./index-BxVJrwWZ.js";var ea=function(t){var e=t.dt;return`
.p-galleria {
    overflow: hidden;
    border-style: solid;
    border-width: `.concat(e("galleria.border.width"),`;
    border-color: `).concat(e("galleria.border.color"),`;
    border-radius: `).concat(e("galleria.border.radius"),`;
}

.p-galleria-content {
    display: flex;
    flex-direction: column;
}

.p-galleria-items-container {
    display: flex;
    flex-direction: column;
    position: relative;
}

.p-galleria-items {
    position: relative;
    display: flex;
    height: 100%;
}

.p-galleria-nav-button {
    position: absolute !important;
    top: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: `).concat(e("galleria.nav.button.background"),`;
    color: `).concat(e("galleria.nav.button.color"),`;
    width: `).concat(e("galleria.nav.button.size"),`;
    height: `).concat(e("galleria.nav.button.size"),`;
    transition: background `).concat(e("galleria.transition.duration"),", color ").concat(e("galleria.transition.duration"),", outline-color ").concat(e("galleria.transition.duration"),", box-shadow ").concat(e("galleria.transition.duration"),`;
    margin: calc(-1 * calc(`).concat(e("galleria.nav.button.size"),") / 2) ").concat(e("galleria.nav.button.gutter")," 0 ").concat(e("galleria.nav.button.gutter"),`;
    padding: 0;
    user-select: none;
    border: 0 none;
    cursor: pointer;
    outline-color: transparent;
}

.p-galleria-nav-button:not(.p-disabled):hover {
    background: `).concat(e("galleria.nav.button.hover.background"),`;
    color: `).concat(e("galleria.nav.button.hover.color"),`;
}

.p-galleria-nav-button:not(.p-disabled):focus-visible {
    box-shadow: `).concat(e("galleria.nav.button.focus.ring.shadow"),`;
    outline: `).concat(e("galleria.nav.button.focus.ring.width")," ").concat(e("galleria.nav.button.focus.ring.style")," ").concat(e("galleria.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(e("galleria.nav.button.focus.ring.offset"),`;
}

.p-galleria-next-icon,
.p-galleria-prev-icon {
    font-size: `).concat(e("galleria.nav.icon.size"),`;
    width: `).concat(e("galleria.nav.icon.size"),`;
    height: `).concat(e("galleria.nav.icon.size"),`;
}

.p-galleria-prev-button {
    border-radius: `).concat(e("galleria.nav.button.prev.border.radius"),`;
    left: 0;
}

.p-galleria-next-button {
    border-radius: `).concat(e("galleria.nav.button.next.border.radius"),`;
    right: 0;
}

.p-galleria-prev-button:dir(rtl) {
    left: auto;
    right: 0;
    transform: rotate(180deg);
}

.p-galleria-next-button:dir(rtl) {
    right: auto;
    left: 0;
    transform: rotate(180deg);
}

.p-galleria-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.p-galleria-hover-navigators .p-galleria-nav-button {
    pointer-events: none;
    opacity: 0;
    transition: opacity `).concat(e("galleria.transition.duration"),` ease-in-out;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {
    pointer-events: all;
    opacity: 1;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {
    pointer-events: none;
}

.p-galleria-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: `).concat(e("galleria.caption.background"),`;
    color: `).concat(e("galleria.caption.color"),`;
    padding: `).concat(e("galleria.caption.padding"),`;
}

.p-galleria-thumbnails {
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex-shrink: 0;
}

.p-galleria-thumbnail-nav-button {
    align-self: center;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    margin: 0 `).concat(e("galleria.thumbnail.nav.button.gutter"),`;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    background: transparent;
    color: `).concat(e("galleria.thumbnail.nav.button.color"),`;
    width: `).concat(e("galleria.thumbnail.nav.button.size"),`;
    height: `).concat(e("galleria.thumbnail.nav.button.size"),`;
    transition: background `).concat(e("galleria.transition.duration"),", color ").concat(e("galleria.transition.duration"),", outline-color ").concat(e("galleria.transition.duration"),`;
    outline-color: transparent;
    border-radius: `).concat(e("galleria.thumbnail.nav.button.border.radius"),`;
}

.p-galleria-thumbnail-nav-button:hover {
    background: `).concat(e("galleria.thumbnail.nav.button.hover.background"),`;
    color: `).concat(e("galleria.thumbnail.nav.button.hover.color"),`;
}

.p-galleria-thumbnail-nav-button:focus-visible {
    box-shadow: `).concat(e("galleria.thumbnail.nav.button.focus.ring.shadow"),`;
    outline: `).concat(e("galleria.thumbnail.nav.button.focus.ring.width")," ").concat(e("galleria.thumbnail.nav.button.focus.ring.style")," ").concat(e("galleria.thumbnail.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(e("galleria.thumbnail.nav.button.focus.ring.offset"),`;
}

.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,
.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {
    font-size: `).concat(e("galleria.thumbnail.nav.button.icon.size"),`;
    width: `).concat(e("galleria.thumbnail.nav.button.icon.size"),`;
    height: `).concat(e("galleria.thumbnail.nav.button.icon.size"),`;
}

.p-galleria-thumbnails-content {
    display: flex;
    flex-direction: row;
    background: `).concat(e("galleria.thumbnails.content.background"),`;
    padding: `).concat(e("galleria.thumbnails.content.padding"),`;
}

.p-galleria-thumbnails-viewport {
    overflow: hidden;
    width: 100%;
}

.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-prev-button:dir(rtl),
.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-next-button:dir(rtl) {
    transform: rotate(180deg);
}

.p-galleria-thumbnail-items {
    display: flex;
}

.p-galleria-thumbnail-item {
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
}

.p-galleria-thumbnail {
    outline-color: transparent;
}

.p-galleria-thumbnail-item:hover {
    opacity: 1;
    transition: opacity 0.3s;
}

.p-galleria-thumbnail-item-current {
    opacity: 1;
}

.p-galleria-thumbnails-left .p-galleria-content,
.p-galleria-thumbnails-right .p-galleria-content {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-right .p-galleria-items-container {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-top .p-galleria-items-container {
    order: 2;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails,
.p-galleria-thumbnails-top .p-galleria-thumbnails {
    order: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails-content,
.p-galleria-thumbnails-right .p-galleria-thumbnails-content {
    flex-direction: column;
    flex-grow: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-items,
.p-galleria-thumbnails-right .p-galleria-thumbnail-items {
    flex-direction: column;
    height: 100%;
}

.p-galleria-indicator-list {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: `).concat(e("galleria.indicator.list.padding"),`;
    gap: `).concat(e("galleria.indicator.list.gap"),`;
    margin: 0;
    list-style: none;
}

.p-galleria-indicator-button {
    display: inline-flex;
    align-items: center;
    background: `).concat(e("galleria.indicator.button.background"),`;
    width: `).concat(e("galleria.indicator.button.width"),`;
    height: `).concat(e("galleria.indicator.button.height"),`;
    transition: background `).concat(e("galleria.transition.duration"),", color ").concat(e("galleria.transition.duration"),", outline-color ").concat(e("galleria.transition.duration"),", box-shadow ").concat(e("galleria.transition.duration"),`;
    outline-color: transparent;
    border-radius: `).concat(e("galleria.indicator.button.border.radius"),`;
    margin: 0;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
}

.p-galleria-indicator-button:hover {
    background: `).concat(e("galleria.indicator.button.hover.background"),`;
}

.p-galleria-indicator-button:focus-visible {
    box-shadow: `).concat(e("galleria.indicator.button.focus.ring.shadow"),`;
    outline: `).concat(e("galleria.indicator.button.focus.ring.width")," ").concat(e("galleria.indicator.button.focus.ring.style")," ").concat(e("galleria.indicator.button.focus.ring.color"),`;
    outline-offset: `).concat(e("galleria.indicator.button.focus.ring.offset"),`;
}

.p-galleria-indicator-active .p-galleria-indicator-button {
    background: `).concat(e("galleria.indicator.button.active.background"),`;
}

.p-galleria-indicators-left .p-galleria-items-container,
.p-galleria-indicators-right .p-galleria-items-container {
    flex-direction: row;
    align-items: center;
}

.p-galleria-indicators-left .p-galleria-items,
.p-galleria-indicators-top .p-galleria-items {
    order: 2;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-top .p-galleria-indicator-list {
    order: 1;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-right .p-galleria-indicator-list {
    flex-direction: column;
}

.p-galleria-inset-indicators .p-galleria-indicator-list {
    position: absolute;
    display: flex;
    z-index: 1;
    background: `).concat(e("galleria.inset.indicator.list.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-button {
    background: `).concat(e("galleria.inset.indicator.button.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-button:hover {
    background: `).concat(e("galleria.inset.indicator.button.hover.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {
    background: `).concat(e("galleria.inset.indicator.button.active.background"),`;
}

.p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {
    top: 0;
    left: 0;
    width: 100%;
    align-items: flex-start;
}

.p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {
    right: 0;
    top: 0;
    height: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {
    bottom: 0;
    left: 0;
    width: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {
    left: 0;
    top: 0;
    height: 100%;
    align-items: flex-start;
}

.p-galleria-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-galleria-close-button {
    position: absolute !important;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: `).concat(e("galleria.close.button.gutter"),`;
    background: `).concat(e("galleria.close.button.background"),`;
    color: `).concat(e("galleria.close.button.color"),`;
    width: `).concat(e("galleria.close.button.size"),`;
    height: `).concat(e("galleria.close.button.size"),`;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    border-radius: `).concat(e("galleria.close.button.border.radius"),`;
    outline-color: transparent;
    transition: background `).concat(e("galleria.transition.duration"),", color ").concat(e("galleria.transition.duration"),", outline-color ").concat(e("galleria.transition.duration"),`;
}

.p-galleria-close-icon {
    font-size: `).concat(e("galleria.close.button.icon.size"),`;
    width: `).concat(e("galleria.close.button.icon.size"),`;
    height: `).concat(e("galleria.close.button.icon.size"),`;
}

.p-galleria-close-button:hover {
    background: `).concat(e("galleria.close.button.hover.background"),`;
    color: `).concat(e("galleria.close.button.hover.color"),`;
}

.p-galleria-close-button:focus-visible {
    box-shadow: `).concat(e("galleria.close.button.focus.ring.shadow"),`;
    outline: `).concat(e("galleria.close.button.focus.ring.width")," ").concat(e("galleria.close.button.focus.ring.style")," ").concat(e("galleria.close.button.focus.ring.color"),`;
    outline-offset: `).concat(e("galleria.close.button.focus.ring.offset"),`;
}

.p-galleria-mask .p-galleria-nav-button {
    position: fixed;
    top: 50%;
}

.p-galleria-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-galleria-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-galleria-enter-from,
.p-galleria-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-galleria-enter-active .p-galleria-nav-button {
    opacity: 0;
}

.p-items-hidden .p-galleria-thumbnail-item {
    visibility: hidden;
}

.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
    visibility: visible;
}
`)},aa={mask:"p-galleria-mask p-overlay-mask p-overlay-mask-enter",root:function(t){var e=t.instance,n=e.$attrs.showThumbnails&&e.getPositionClass("p-galleria-thumbnails",e.$attrs.thumbnailsPosition),i=e.$attrs.showIndicators&&e.getPositionClass("p-galleria-indicators",e.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":e.$attrs.fullScreen,"p-galleria-inset-indicators":e.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":e.$attrs.showItemNavigatorsOnHover&&!e.$attrs.fullScreen},n,i]},closeButton:"p-galleria-close-button",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemsContainer:"p-galleria-items-container",items:"p-galleria-items",prevButton:function(t){var e=t.instance;return["p-galleria-prev-button p-galleria-nav-button",{"p-disabled":e.isNavBackwardDisabled()}]},prevIcon:"p-galleria-prev-icon",item:"p-galleria-item",nextButton:function(t){var e=t.instance;return["p-galleria-next-button p-galleria-nav-button",{"p-disabled":e.isNavForwardDisabled()}]},nextIcon:"p-galleria-next-icon",caption:"p-galleria-caption",indicatorList:"p-galleria-indicator-list",indicator:function(t){var e=t.instance,n=t.index;return["p-galleria-indicator",{"p-galleria-indicator-active":e.isIndicatorItemActive(n)}]},indicatorButton:"p-galleria-indicator-button",thumbnails:"p-galleria-thumbnails",thumbnailContent:"p-galleria-thumbnails-content",thumbnailPrevButton:function(t){var e=t.instance;return["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button",{"p-disabled":e.isNavBackwardDisabled()}]},thumbnailPrevIcon:"p-galleria-thumbnail-prev-icon",thumbnailsViewport:"p-galleria-thumbnails-viewport",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:function(t){var e=t.instance,n=t.index,i=t.activeIndex;return["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":i===n,"p-galleria-thumbnail-item-active":e.isItemActive(n),"p-galleria-thumbnail-item-start":e.firstItemAciveIndex()===n,"p-galleria-thumbnail-item-end":e.lastItemActiveIndex()===n}]},thumbnail:"p-galleria-thumbnail",thumbnailNextButton:function(t){var e=t.instance;return["p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button",{"p-disabled":e.isNavForwardDisabled()}]},thumbnailNextIcon:"p-galleria-thumbnail-next-icon"},na=$e.extend({name:"galleria",theme:ea,classes:aa}),ia={name:"BaseGalleria",extends:yt,props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:"bottom"},verticalThumbnailViewPortHeight:{type:String,default:"300px"},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:"bottom"},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},ariaLabel:{type:String,default:null},ariaRoledescription:{type:String,default:null}},style:na,provide:function(){return{$pcGalleria:this,$parentInstance:this}}};function tt(a){return la(a)||sa(a)||ra(a)||oa()}function oa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ra(a,t){if(a){if(typeof a=="string")return Mt(a,t);var e={}.toString.call(a).slice(8,-1);return e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set"?Array.from(a):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Mt(a,t):void 0}}function sa(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function la(a){if(Array.isArray(a))return Mt(a)}function Mt(a,t){(t==null||t>a.length)&&(t=a.length);for(var e=0,n=Array(t);e<t;e++)n[e]=a[e];return n}var me={name:"GalleriaItem",hostName:"Galleria",extends:yt,emits:["start-slideshow","stop-slideshow","update:activeIndex"],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted:function(){this.autoPlay&&this.$emit("start-slideshow")},methods:{getIndicatorPTOptions:function(t){return{context:{highlighted:this.activeIndex===t}}},next:function(){var t=this.activeIndex+1,e=this.circular&&this.value.length-1===this.activeIndex?0:t;this.$emit("update:activeIndex",e)},prev:function(){var t=this.activeIndex!==0?this.activeIndex-1:0,e=this.circular&&this.activeIndex===0?this.value.length-1:t;this.$emit("update:activeIndex",e)},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},navBackward:function(t){this.stopSlideShow(),this.prev(),t&&t.cancelable&&t.preventDefault()},navForward:function(t){this.stopSlideShow(),this.next(),t&&t.cancelable&&t.preventDefault()},onIndicatorClick:function(t){this.stopSlideShow(),this.$emit("update:activeIndex",t)},onIndicatorMouseEnter:function(t){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit("update:activeIndex",t))},onIndicatorKeyDown:function(t,e){switch(t.code){case"Enter":case"NumpadEnter":case"Space":this.stopSlideShow(),this.$emit("update:activeIndex",e),t.preventDefault();break;case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"Tab":this.onTabKey();break;case"ArrowDown":case"ArrowUp":case"PageUp":case"PageDown":t.preventDefault();break}},onRightKey:function(){var t=tt(V(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e+1===t.length?t.length-1:e+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=tt(V(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,t.length-1)},onTabKey:function(){var t=tt(V(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),e=t.findIndex(function(o){return le(o,"data-p-active")===!0}),n=ht(this.$refs.indicatorContent,'[data-pc-section="indicator"] > [tabindex="0"]'),i=t.findIndex(function(o){return o===n.parentElement});t[i].children[0].tabIndex="-1",t[e].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=tt(V(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),e=ht(this.$refs.indicatorContent,'[data-pc-section="indicator"] > [tabindex="0"]');return t.findIndex(function(n){return n===e.parentElement})},changedFocusedIndicator:function(t,e){var n=tt(V(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));n[t].children[0].tabIndex="-1",n[e].children[0].tabIndex="0",n[e].children[0].focus()},isIndicatorItemActive:function(t){return this.activeIndex===t},isNavBackwardDisabled:function(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled:function(){return!this.circular&&this.activeIndex===this.value.length-1},ariaSlideNumber:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,t):void 0},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{activeItem:function(){return this.value[this.activeIndex]},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0}},components:{ChevronLeftIcon:de,ChevronRightIcon:ue},directives:{ripple:Et}},ca=["disabled"],da=["id","aria-label","aria-roledescription"],ua=["disabled"],ma=["aria-label","aria-selected","aria-controls","onClick","onMouseenter","onKeydown","data-p-active"],pa=["tabindex"];function fa(a,t,e,n,i,o){var y=bt("ripple");return d(),v("div",u({class:a.cx("itemsContainer")},a.ptm("itemsContainer")),[r("div",u({class:a.cx("items")},a.ptm("items")),[e.showItemNavigators?q((d(),v("button",u({key:0,type:"button",class:a.cx("prevButton"),onClick:t[0]||(t[0]=function(c){return o.navBackward(c)}),disabled:o.isNavBackwardDisabled()},a.ptm("prevButton"),{"data-pc-group-section":"itemnavigator"}),[(d(),A(M(e.templates.previousitemicon||"ChevronLeftIcon"),u({class:a.cx("prevIcon")},a.ptm("prevIcon")),null,16,["class"]))],16,ca)),[[y]]):S("",!0),r("div",u({id:e.id+"_item_"+e.activeIndex,class:a.cx("item"),role:"group","aria-label":o.ariaSlideNumber(e.activeIndex+1),"aria-roledescription":o.ariaSlideLabel},a.ptm("item")),[e.templates.item?(d(),A(M(e.templates.item),{key:0,item:o.activeItem},null,8,["item"])):S("",!0)],16,da),e.showItemNavigators?q((d(),v("button",u({key:1,type:"button",class:a.cx("nextButton"),onClick:t[1]||(t[1]=function(c){return o.navForward(c)}),disabled:o.isNavForwardDisabled()},a.ptm("nextButton"),{"data-pc-group-section":"itemnavigator"}),[(d(),A(M(e.templates.nextitemicon||"ChevronRightIcon"),u({class:a.cx("nextIcon")},a.ptm("nextIcon")),null,16,["class"]))],16,ua)),[[y]]):S("",!0),e.templates.caption?(d(),v("div",u({key:2,class:a.cx("caption")},a.ptm("caption")),[e.templates.caption?(d(),A(M(e.templates.caption),{key:0,item:o.activeItem},null,8,["item"])):S("",!0)],16)):S("",!0)],16),e.showIndicators?(d(),v("ul",u({key:0,ref:"indicatorContent",class:a.cx("indicatorList")},a.ptm("indicatorList")),[(d(!0),v(vt,null,$t(e.value,function(c,s){return d(),v("li",u({key:"p-galleria-indicator-".concat(s),class:a.cx("indicator",{index:s}),"aria-label":o.ariaPageLabel(s+1),"aria-selected":e.activeIndex===s,"aria-controls":e.id+"_item_"+s,onClick:function(C){return o.onIndicatorClick(s)},onMouseenter:function(C){return o.onIndicatorMouseEnter(s)},onKeydown:function(C){return o.onIndicatorKeyDown(C,s)},ref_for:!0},a.ptm("indicator",o.getIndicatorPTOptions(s)),{"data-p-active":o.isIndicatorItemActive(s)}),[e.templates.indicator?S("",!0):(d(),v("button",u({key:0,type:"button",tabindex:e.activeIndex===s?"0":"-1",class:a.cx("indicatorButton"),ref_for:!0},a.ptm("indicatorButton",o.getIndicatorPTOptions(s))),null,16,pa)),e.templates.indicator?(d(),A(M(e.templates.indicator),{key:1,index:s,activeIndex:e.activeIndex,tabindex:e.activeIndex===s?"0":"-1"},null,8,["index","activeIndex","tabindex"])):S("",!0)],16,ma)}),128))],16)):S("",!0)],16)}me.render=fa;function Tt(a){return ba(a)||ga(a)||va(a)||ha()}function ha(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function va(a,t){if(a){if(typeof a=="string")return Bt(a,t);var e={}.toString.call(a).slice(8,-1);return e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set"?Array.from(a):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Bt(a,t):void 0}}function ga(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function ba(a){if(Array.isArray(a))return Bt(a)}function Bt(a,t){(t==null||t>a.length)&&(t=a.length);for(var e=0,n=Array(t);e<t;e++)n[e]=a[e];return n}var pe={name:"GalleriaThumbnails",hostName:"Galleria",extends:yt,emits:["stop-slideshow","update:activeIndex"],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:"300px"},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data:function(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible:function(t,e){this.d_numVisible=t,this.d_oldNumVisible=e},activeIndex:function(t,e){this.d_activeIndex=t,this.d_oldActiveItemIndex=e}},mounted:function(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated:function(){var t=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(this.d_activeIndex<=this.getMedianItemIndex()?t=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?t=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2===0?t=this.d_activeIndex*-1+this.getMedianItemIndex()+1:t=this.d_activeIndex*-1+this.getMedianItemIndex(),t!==this.totalShiftedItems&&(this.totalShiftedItems=t),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(t*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(t*(100/this.d_numVisible),"%, 0, 0)"),this.d_oldActiveItemIndex!==this.d_activeIndex&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&Yt(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step:function(t){var e=this.totalShiftedItems+t;t<0&&-1*e+this.d_numVisible>this.value.length-1?e=this.d_numVisible-this.value.length:t>0&&e>0&&(e=0),this.circular&&(t<0&&this.value.length-1===this.d_activeIndex?e=0:t>0&&this.d_activeIndex===0&&(e=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&Yt(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(e*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(e*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=e},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},getMedianItemIndex:function(){var t=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?t:t-1},navBackward:function(t){this.stopSlideShow();var e=this.d_activeIndex!==0?this.d_activeIndex-1:0,n=e+this.totalShiftedItems;this.d_numVisible-n-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);var i=this.circular&&this.d_activeIndex===0?this.value.length-1:e;this.$emit("update:activeIndex",i),t.cancelable&&t.preventDefault()},navForward:function(t){this.stopSlideShow();var e=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;e+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);var n=this.circular&&this.value.length-1===this.d_activeIndex?0:e;this.$emit("update:activeIndex",n),t.cancelable&&t.preventDefault()},onItemClick:function(t){this.stopSlideShow();var e=t;if(e!==this.d_activeIndex){var n=e+this.totalShiftedItems,i=0;e<this.d_activeIndex?(i=this.d_numVisible-n-1-this.getMedianItemIndex(),i>0&&-1*this.totalShiftedItems!==0&&this.step(i)):(i=this.getMedianItemIndex()-n,i<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(i)),this.$emit("update:activeIndex",e)}},onThumbnailKeydown:function(t,e){switch((t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.onItemClick(e),t.preventDefault()),t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":t.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var t=V(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e+1===t.length?t.length-1:e+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=V(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,t.length-1)},onTabKey:function(){var t=Tt(V(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),e=t.findIndex(function(o){return le(o,"data-p-active")===!0}),n=ht(this.$refs.itemsContainer,'[tabindex="0"]'),i=t.findIndex(function(o){return o===n.parentElement});t[i].children[0].tabIndex="-1",t[e].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=Tt(V(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),e=ht(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return t.findIndex(function(n){return n===e.parentElement})},changedFocusedIndicator:function(t,e){var n=V(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]');n[t].children[0].tabIndex="-1",n[e].children[0].tabIndex="0",n[e].children[0].focus()},onTransitionEnd:function(t){this.$refs.itemsContainer&&t.propertyName==="transform"&&(document.body.setAttribute("data-p-items-hidden","true"),!this.isUnstyled&&ce(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="")},onTouchStart:function(t){var e=t.changedTouches[0];this.startPos={x:e.pageX,y:e.pageY}},onTouchMove:function(t){t.cancelable&&t.preventDefault()},onTouchEnd:function(t){var e=t.changedTouches[0];this.isVertical?this.changePageOnTouch(t,e.pageY-this.startPos.y):this.changePageOnTouch(t,e.pageX-this.startPos.x)},changePageOnTouch:function(t,e){e<0?this.navForward(t):this.navBackward(t)},getTotalPageNumber:function(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle:function(){if(!this.thumbnailsStyle){var t;this.thumbnailsStyle=document.createElement("style"),this.thumbnailsStyle.type="text/css",Ee(this.thumbnailsStyle,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.body.appendChild(this.thumbnailsStyle)}var e=`
                #`.concat(this.containerId,` [data-pc-section="thumbnailitem"] {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){this.sortedResponsiveOptions=Tt(this.responsiveOptions);var n=Le();this.sortedResponsiveOptions.sort(function(y,c){var s=y.breakpoint,p=c.breakpoint;return _e(s,p,-1,n)});for(var i=0;i<this.sortedResponsiveOptions.length;i++){var o=this.sortedResponsiveOptions[i];e+=`
                        @media screen and (max-width: `.concat(o.breakpoint,`) {
                            #`).concat(this.containerId,` .p-galleria-thumbnail-item {
                                flex: 1 0 `).concat(100/o.numVisible,`%
                            }
                        }
                    `)}}this.thumbnailsStyle.innerHTML=e},calculatePosition:function(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){for(var t=window.innerWidth,e={numVisible:this.numVisible},n=0;n<this.sortedResponsiveOptions.length;n++){var i=this.sortedResponsiveOptions[n];parseInt(i.breakpoint,10)>=t&&(e=i)}this.d_numVisible!==e.numVisible&&(this.d_numVisible=e.numVisible)}},bindDocumentListeners:function(){var t=this;this.documentResizeListener||(this.documentResizeListener=function(){t.calculatePosition()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},isNavBackwardDisabled:function(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled:function(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible},firstItemAciveIndex:function(){return this.totalShiftedItems*-1},lastItemActiveIndex:function(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive:function(t){return this.firstItemAciveIndex()<=t&&this.lastItemActiveIndex()>=t},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0}},components:{ChevronLeftIcon:de,ChevronRightIcon:ue,ChevronUpIcon:Xe,ChevronDownIcon:ta},directives:{ripple:Et}};function at(a){"@babel/helpers - typeof";return at=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},at(a)}function qt(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),e.push.apply(e,n)}return e}function ut(a){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?qt(Object(e),!0).forEach(function(n){ya(a,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):qt(Object(e)).forEach(function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))})}return a}function ya(a,t,e){return(t=xa(t))in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function xa(a){var t=Ia(a,"string");return at(t)=="symbol"?t:t+""}function Ia(a,t){if(at(a)!="object"||!a)return a;var e=a[Symbol.toPrimitive];if(e!==void 0){var n=e.call(a,t||"default");if(at(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}var wa=["disabled","aria-label"],Sa=["data-p-active","aria-selected","aria-controls","onKeydown","data-p-galleria-thumbnail-item-current","data-p-galleria-thumbnail-item-active","data-p-galleria-thumbnail-item-start","data-p-galleria-thumbnail-item-end"],Ca=["tabindex","aria-label","aria-current","onClick"],ka=["disabled","aria-label"];function Aa(a,t,e,n,i,o){var y=bt("ripple");return d(),v("div",u({class:a.cx("thumbnails")},a.ptm("thumbnails")),[r("div",u({class:a.cx("thumbnailContent")},a.ptm("thumbnailContent")),[e.showThumbnailNavigators?q((d(),v("button",u({key:0,class:a.cx("thumbnailPrevButton"),disabled:o.isNavBackwardDisabled(),type:"button","aria-label":o.ariaPrevButtonLabel,onClick:t[0]||(t[0]=function(c){return o.navBackward(c)})},ut(ut({},e.prevButtonProps),a.ptm("thumbnailPrevButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(d(),A(M(e.templates.previousthumbnailicon||(e.isVertical?"ChevronUpIcon":"ChevronLeftIcon")),u({class:a.cx("thumbnailPrevIcon")},a.ptm("thumbnailPrevIcon")),null,16,["class"]))],16,wa)),[[y]]):S("",!0),r("div",u({class:a.cx("thumbnailsViewport"),style:{height:e.isVertical?e.contentHeight:""}},a.ptm("thumbnailsViewport")),[r("div",u({ref:"itemsContainer",class:a.cx("thumbnailItems"),role:"tablist",onTransitionend:t[1]||(t[1]=function(c){return o.onTransitionEnd(c)}),onTouchstart:t[2]||(t[2]=function(c){return o.onTouchStart(c)}),onTouchmove:t[3]||(t[3]=function(c){return o.onTouchMove(c)}),onTouchend:t[4]||(t[4]=function(c){return o.onTouchEnd(c)})},a.ptm("thumbnailItems")),[(d(!0),v(vt,null,$t(e.value,function(c,s){return d(),v("div",u({key:"p-galleria-thumbnail-item-".concat(s),class:a.cx("thumbnailItem",{index:s,activeIndex:e.activeIndex}),role:"tab","data-p-active":e.activeIndex===s,"aria-selected":e.activeIndex===s,"aria-controls":e.containerId+"_item_"+s,onKeydown:function(C){return o.onThumbnailKeydown(C,s)},ref_for:!0},a.ptm("thumbnailItem"),{"data-p-galleria-thumbnail-item-current":e.activeIndex===s,"data-p-galleria-thumbnail-item-active":o.isItemActive(s),"data-p-galleria-thumbnail-item-start":o.firstItemAciveIndex()===s,"data-p-galleria-thumbnail-item-end":o.lastItemActiveIndex()===s}),[r("div",u({class:a.cx("thumbnail"),tabindex:e.activeIndex===s?"0":"-1","aria-label":o.ariaPageLabel(s+1),"aria-current":e.activeIndex===s?"page":void 0,onClick:function(C){return o.onItemClick(s)},ref_for:!0},a.ptm("thumbnail")),[e.templates.thumbnail?(d(),A(M(e.templates.thumbnail),{key:0,item:c},null,8,["item"])):S("",!0)],16,Ca)],16,Sa)}),128))],16)],16),e.showThumbnailNavigators?q((d(),v("button",u({key:1,class:a.cx("thumbnailNextButton"),disabled:o.isNavForwardDisabled(),type:"button","aria-label":o.ariaNextButtonLabel,onClick:t[5]||(t[5]=function(c){return o.navForward(c)})},ut(ut({},e.nextButtonProps),a.ptm("thumbnailNextButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(d(),A(M(e.templates.nextthumbnailicon||(e.isVertical?"ChevronDownIcon":"ChevronRightIcon")),u({class:a.cx("thumbnailNextIcon")},a.ptm("thumbnailNextIcon")),null,16,["class"]))],16,ka)),[[y]]):S("",!0)],16)],16)}pe.render=Aa;function nt(a){"@babel/helpers - typeof";return nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nt(a)}function Zt(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),e.push.apply(e,n)}return e}function Wt(a){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Zt(Object(e),!0).forEach(function(n){Oa(a,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):Zt(Object(e)).forEach(function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))})}return a}function Oa(a,t,e){return(t=Pa(t))in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function Pa(a){var t=Ta(a,"string");return nt(t)=="symbol"?t:t+""}function Ta(a,t){if(nt(a)!="object"||!a)return a;var e=a[Symbol.toPrimitive];if(e!==void 0){var n=e.call(a,t||"default");if(nt(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}var fe={name:"GalleriaContent",hostName:"Galleria",extends:yt,inheritAttrs:!1,interval:null,emits:["activeitem-change","mask-hide"],data:function(){return{id:this.$attrs.id||Pt(),activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.id":function(t){this.id=t||Pt()},"$attrs.value":function(t){t&&t.length<this.numVisible&&(this.numVisible=t.length)},"$attrs.activeIndex":function(t){this.activeIndex=t},"$attrs.numVisible":function(t){this.numVisible=t},"$attrs.autoPlay":function(t){t?this.startSlideShow():this.stopSlideShow()}},mounted:function(){this.id=this.id||Pt()},updated:function(){this.$emit("activeitem-change",this.activeIndex)},beforeUnmount:function(){this.slideShowActive&&this.stopSlideShow()},methods:{getPTOptions:function(t){return this.ptm(t,{props:Wt(Wt({},this.$attrs),{},{pt:this.pt,unstyled:this.unstyled})})},isAutoPlayActive:function(){return this.slideShowActive},startSlideShow:function(){var t=this;this.interval=setInterval(function(){var e=t.$attrs.circular&&t.$attrs.value.length-1===t.activeIndex?0:t.activeIndex+1;t.activeIndex=e},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow:function(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass:function(t,e){var n=["top","left","bottom","right"],i=n.find(function(o){return o===e});return i?"".concat(t,"-").concat(i):""},isVertical:function(){return this.$attrs.thumbnailsPosition==="left"||this.$attrs.thumbnailsPosition==="right"}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:me,GalleriaThumbnails:pe,TimesIcon:We},directives:{ripple:Et}};function it(a){"@babel/helpers - typeof";return it=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},it(a)}function Jt(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),e.push.apply(e,n)}return e}function Qt(a){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Jt(Object(e),!0).forEach(function(n){ja(a,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):Jt(Object(e)).forEach(function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))})}return a}function ja(a,t,e){return(t=Ma(t))in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function Ma(a){var t=Ba(a,"string");return it(t)=="symbol"?t:t+""}function Ba(a,t){if(it(a)!="object"||!a)return a;var e=a[Symbol.toPrimitive];if(e!==void 0){var n=e.call(a,t||"default");if(it(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}var Na=["id","aria-label","aria-roledescription"],Va=["aria-label"],$a=["aria-live"];function Ea(a,t,e,n,i,o){var y=gt("GalleriaItem"),c=gt("GalleriaThumbnails"),s=bt("ripple");return a.$attrs.value&&a.$attrs.value.length>0?(d(),v("div",u({key:0,id:i.id,role:"region",class:[a.cx("root"),a.$attrs.containerClass],style:a.$attrs.containerStyle,"aria-label":a.$attrs.ariaLabel,"aria-roledescription":a.$attrs.ariaRoledescription},Qt(Qt({},a.$attrs.containerProps),o.getPTOptions("root"))),[a.$attrs.fullScreen?q((d(),v("button",u({key:0,autofocus:"",type:"button",class:a.cx("closeButton"),"aria-label":o.closeAriaLabel,onClick:t[0]||(t[0]=function(p){return a.$emit("mask-hide")})},o.getPTOptions("closeButton")),[(d(),A(M(a.$attrs.templates.closeicon||"TimesIcon"),u({class:a.cx("closeIcon")},o.getPTOptions("closeIcon")),null,16,["class"]))],16,Va)),[[s]]):S("",!0),a.$attrs.templates&&a.$attrs.templates.header?(d(),v("div",u({key:1,class:a.cx("header")},o.getPTOptions("header")),[(d(),A(M(a.$attrs.templates.header)))],16)):S("",!0),r("div",u({class:a.cx("content"),"aria-live":a.$attrs.autoPlay?"polite":"off"},o.getPTOptions("content")),[h(y,{id:i.id,activeIndex:i.activeIndex,"onUpdate:activeIndex":t[1]||(t[1]=function(p){return i.activeIndex=p}),slideShowActive:i.slideShowActive,"onUpdate:slideShowActive":t[2]||(t[2]=function(p){return i.slideShowActive=p}),value:a.$attrs.value,circular:a.$attrs.circular,templates:a.$attrs.templates,showIndicators:a.$attrs.showIndicators,changeItemOnIndicatorHover:a.$attrs.changeItemOnIndicatorHover,showItemNavigators:a.$attrs.showItemNavigators,autoPlay:a.$attrs.autoPlay,onStartSlideshow:o.startSlideShow,onStopSlideshow:o.stopSlideShow,pt:a.pt,unstyled:a.unstyled},null,8,["id","activeIndex","slideShowActive","value","circular","templates","showIndicators","changeItemOnIndicatorHover","showItemNavigators","autoPlay","onStartSlideshow","onStopSlideshow","pt","unstyled"]),a.$attrs.showThumbnails?(d(),A(c,{key:0,activeIndex:i.activeIndex,"onUpdate:activeIndex":t[3]||(t[3]=function(p){return i.activeIndex=p}),slideShowActive:i.slideShowActive,"onUpdate:slideShowActive":t[4]||(t[4]=function(p){return i.slideShowActive=p}),containerId:i.id,value:a.$attrs.value,templates:a.$attrs.templates,numVisible:i.numVisible,responsiveOptions:a.$attrs.responsiveOptions,circular:a.$attrs.circular,isVertical:o.isVertical(),contentHeight:a.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:a.$attrs.showThumbnailNavigators,prevButtonProps:a.$attrs.prevButtonProps,nextButtonProps:a.$attrs.nextButtonProps,onStopSlideshow:o.stopSlideShow,pt:a.pt,unstyled:a.unstyled},null,8,["activeIndex","slideShowActive","containerId","value","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","prevButtonProps","nextButtonProps","onStopSlideshow","pt","unstyled"])):S("",!0)],16,$a),a.$attrs.templates&&a.$attrs.templates.footer?(d(),v("div",u({key:2,class:a.cx("footer")},o.getPTOptions("footer")),[(d(),A(M(a.$attrs.templates.footer)))],16)):S("",!0)],16,Na)):S("",!0)}fe.render=Ea;var U={name:"Galleria",extends:ia,inheritAttrs:!1,emits:["update:activeIndex","update:visible"],container:null,mask:null,data:function(){return{containerVisible:this.visible}},updated:function(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.fullScreen&&Xt(),this.mask=null,this.container&&(Ot.clear(this.container),this.container=null)},methods:{onBeforeEnter:function(t){Ot.set("modal",t,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter:function(t){this.mask.style.zIndex=String(parseInt(t.style.zIndex,10)-1),De(),this.focus()},onBeforeLeave:function(){!this.isUnstyled&&ce(this.mask,"p-overlay-mask-leave")},onAfterLeave:function(t){Ot.clear(t),this.containerVisible=!1,Xt()},onActiveItemChange:function(t){this.activeIndex!==t&&this.$emit("update:activeIndex",t)},maskHide:function(){this.$emit("update:visible",!1)},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},focus:function(){var t=this.container.$el.querySelector("[autofocus]");t&&t.focus()}},components:{GalleriaContent:fe,Portal:Je},directives:{focustrap:Qe}},La=["aria-modal"];function _a(a,t,e,n,i,o){var y=gt("GalleriaContent"),c=gt("Portal"),s=bt("focustrap");return a.fullScreen?(d(),A(c,{key:0},{default:b(function(){return[i.containerVisible?(d(),v("div",u({key:0,ref:o.maskRef,class:[a.cx("mask"),a.maskClass],role:"dialog","aria-modal":a.fullScreen?"true":void 0},a.ptm("mask")),[h(Fe,u({name:"p-galleria",onBeforeEnter:o.onBeforeEnter,onEnter:o.onEnter,onBeforeLeave:o.onBeforeLeave,onAfterLeave:o.onAfterLeave,appear:""},a.ptm("transition")),{default:b(function(){return[a.visible?q((d(),A(y,u({key:0,ref:o.containerRef,onMaskHide:o.maskHide,templates:a.$slots,onActiveitemChange:o.onActiveItemChange,pt:a.pt,unstyled:a.unstyled},a.$props),null,16,["onMaskHide","templates","onActiveitemChange","pt","unstyled"])),[[s]]):S("",!0)]}),_:1},16,["onBeforeEnter","onEnter","onBeforeLeave","onAfterLeave"])],16,La)):S("",!0)]}),_:1})):(d(),A(y,u({key:1,templates:a.$slots,onActiveitemChange:o.onActiveItemChange,pt:a.pt,unstyled:a.unstyled},a.$props),null,16,["templates","onActiveitemChange","pt","unstyled"]))}U.render=_a;const jt=[{src:"/images/gallery/1.jpg",thumbnail:"/images/gallery/1.jpg",alt:"Campamento CAF 2025"},{src:"/images/gallery/2.jpg",thumbnail:"/images/gallery/2.jpg",alt:"Campamento CAF 2025"},{src:"/images/gallery/3.jpg",thumbnail:"/images/gallery/3.jpg",alt:"Campamento CAF 2025"},{src:"/images/gallery/4.jpg",thumbnail:"/images/gallery/4.jpg",alt:"Campamento CAF 2025"},{src:"/images/gallery/5.jpg",thumbnail:"/images/gallery/5.jpg",alt:"Campamento CAF 2025"},{src:"/images/gallery/6.jpg",thumbnail:"/images/gallery/6.jpg",alt:"Campamento CAF 2025"},{src:"/images/gallery/7.jpg",thumbnail:"/images/gallery/7.jpg",alt:"Campamento CAF 2025"},{src:"/images/gallery/8.jpg",thumbnail:"/images/gallery/8.jpg",alt:"Campamento CAF 2025"},{src:"/images/gallery/9.jpg",thumbnail:"/images/gallery/9.jpg",alt:"Campamento CAF 2025"},{src:"/images/gallery/10.jpg",thumbnail:"/images/gallery/10.jpg",alt:"Campamento CAF 2025"},{src:"/images/gallery/11.jpg",thumbnail:"/images/gallery/11.jpg",alt:"Campamento CAF 2025"},{src:"/images/gallery/12.jpg",thumbnail:"/images/gallery/12.jpg",alt:"Campamento CAF 2025"}],te=[{src:"/images/location/1.jpg",thumbnail:"/images/location/1.jpg",alt:"Campamento CAF 2025"},{src:"/images/location/2.jpg",thumbnail:"/images/location/2.jpg",alt:"Campamento CAF 2025"},{src:"/images/location/3.jpg",thumbnail:"/images/location/3.jpg",alt:"Campamento CAF 2025"},{src:"/images/location/4.jpg",thumbnail:"/images/location/4.jpg",alt:"Campamento CAF 2025"}],G=[{src:"/images/location/1.jpg",thumbnail:"/images/location/1.jpg",alt:"Campamento CAF 2025"},{src:"/images/location/2.jpg",thumbnail:"/images/location/2.jpg",alt:"Campamento CAF 2025"},{src:"/images/location/3.jpg",thumbnail:"/images/location/3.jpg",alt:"Campamento CAF 2025"},{src:"/images/location/4.jpg",thumbnail:"/images/location/4.jpg",alt:"Campamento CAF 2025"}];/*! vue-countdown v2.1.2 | (c) 2018-present Chen Fengyuan | MIT */const mt=1e3,pt=60*mt,ft=60*pt,ee=24*ft,ae="abort",ne="end",ie="progress",oe="start",re="visibilitychange";var Da=Re({name:"VueCountdown",props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:a=>a>=0},now:{type:Function,default:()=>Date.now()},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:a=>a>=0},transform:{type:Function,default:a=>a}},emits:[ae,ne,ie,oe],data(){return{counting:!1,endTime:0,totalMilliseconds:0,requestId:0}},computed:{days(){return Math.floor(this.totalMilliseconds/ee)},hours(){return Math.floor(this.totalMilliseconds%ee/ft)},minutes(){return Math.floor(this.totalMilliseconds%ft/pt)},seconds(){return Math.floor(this.totalMilliseconds%pt/mt)},milliseconds(){return Math.floor(this.totalMilliseconds%mt)},totalDays(){return this.days},totalHours(){return Math.floor(this.totalMilliseconds/ft)},totalMinutes(){return Math.floor(this.totalMilliseconds/pt)},totalSeconds(){return Math.floor(this.totalMilliseconds/mt)}},watch:{$props:{deep:!0,immediate:!0,handler(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},mounted(){document.addEventListener(re,this.handleVisibilityChange)},beforeUnmount(){document.removeEventListener(re,this.handleVisibilityChange),this.pause()},methods:{start(){this.counting||(this.counting=!0,this.autoStart||(this.totalMilliseconds=this.time,this.endTime=this.now()+this.time),this.emitEvents&&this.$emit(oe),document.visibilityState==="visible"&&this.continue())},continue(){if(!this.counting)return;const a=Math.min(this.totalMilliseconds,this.interval);if(a>0){let t,e;const n=i=>{t||(t=i),e||(e=i);const o=i-t;o>=a||o+(i-e)/2>=a?this.progress():this.requestId=requestAnimationFrame(n),e=i};this.requestId=requestAnimationFrame(n)}else this.end()},pause(){cancelAnimationFrame(this.requestId)},progress(){this.counting&&(this.update(),this.emitEvents&&this.totalMilliseconds>0&&this.$emit(ie,{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort(){this.counting&&(this.pause(),this.counting=!1,this.emitEvents&&this.$emit(ae))},end(){this.counting&&(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit(ne))},update(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},restart(){this.pause(),this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.counting=!1,this.start()},handleVisibilityChange(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause();break}}},render(){return ze(this.tag,this.$slots.default?[this.$slots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:void 0)}});const Fa={class:"text-center"},se={__name:"CounterTime",setup(a){const t=new Date("2025-03-01T00:00:00"),e=new Date,n=t.getTime()-e.getTime(),i=n>0?n:0,o=()=>{alert("¡El tiempo ha terminado!")};return(y,c)=>(d(),v("div",Fa,[c[7]||(c[7]=r("h2",{class:"text-xl sm:text-2xl md:text-4xl font-semibold mb-4"},"Solo falta:",-1)),h(f(Da),{time:f(i),onCountdownend:o,class:"flex justify-center flex-wrap space-x-4"},{default:b(({days:s,hours:p,minutes:C,seconds:ot})=>[r("div",null,[r("span",null,et(s),1),c[0]||(c[0]=r("span",{class:"block text-sm"},"DÍAS",-1))]),c[4]||(c[4]=r("span",null,":",-1)),r("div",null,[r("span",null,et(p),1),c[1]||(c[1]=r("span",{class:"block text-sm"},"HORAS",-1))]),c[5]||(c[5]=r("span",null,":",-1)),r("div",null,[r("span",null,et(C),1),c[2]||(c[2]=r("span",{class:"block text-sm"},"MIN",-1))]),c[6]||(c[6]=r("span",null,":",-1)),r("div",null,[r("span",null,et(ot),1),c[3]||(c[3]=r("span",{class:"block text-sm"},"SEG",-1))])]),_:1},8,["time"])]))}};function Nt(){return Nt=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n])}return a},Nt.apply(this,arguments)}var F=function(t,e){return t.querySelector(e)},Ra=function(t,e){return t.querySelectorAll(e)},za=function(t){t===void 0&&(t={});var e={};return Object.keys(t).forEach(function(n){typeof t[n]<"u"&&(e[n]=t[n])}),e},he={alwaysActive:!1,activeOffset:50,shadowOffset:50,shadowScale:1,duration:300,rotate:!0,rotateTouch:!0,rotateXMax:15,rotateYMax:15,rotateXInvert:!1,rotateYInvert:!1,stretchX:0,stretchY:0,stretchZ:0,commonOrigin:!0,shadow:!0,highlight:!0};function Vt(a){a===void 0&&(a={});var t=a,e=t.el,n=t.eventsEl,i=a,o=i.isComponent,y,c={__atropos__:!0,params:Nt({},he,{onEnter:null,onLeave:null,onRotate:null},za(a||{})),destroyed:!1,isActive:!1},s=c.params,p,C,ot,Y,X,j,k,R,Lt,_t,B=[],Dt,ve=function g(){Dt=requestAnimationFrame(function(){B.forEach(function(l){if(typeof l=="function")l();else{var m=l.element,x=l.prop,I=l.value;m.style[x]=I}}),B.splice(0,B.length),g()})};ve();var $=function(l,m){B.push({element:l,prop:"transitionDuration",value:m})},E=function(l,m){B.push({element:l,prop:"transitionTimingFunction",value:m})},N=function(l,m){B.push({element:l,prop:"transform",value:m})},rt=function(l,m){B.push({element:l,prop:"opacity",value:m})},ge=function(l,m){B.push({element:l,prop:"transformOrigin",value:m})},_=function(l,m,x,I){return l.addEventListener(m,x,I)},D=function(l,m,x,I){return l.removeEventListener(m,x,I)},be=function(){var l;j=F(e,".atropos-shadow"),j||(j=document.createElement("span"),j.classList.add("atropos-shadow"),l=!0),N(j,"translate3d(0,0,-"+s.shadowOffset+"px) scale("+s.shadowScale+")"),l&&p.appendChild(j)},ye=function(){var l;k=F(e,".atropos-highlight"),k||(k=document.createElement("span"),k.classList.add("atropos-highlight"),l=!0),N(k,"translate3d(0,0,0)"),l&&ot.appendChild(k)},xt=function(l){var m=l.rotateXPercentage,x=m===void 0?0:m,I=l.rotateYPercentage,w=I===void 0?0:I,O=l.duration,K=l.opacityOnly,Z=l.easeOut,W=function(T){if(T.dataset.atroposOpacity&&typeof T.dataset.atroposOpacity=="string")return T.dataset.atroposOpacity.split(";").map(function(L){return parseFloat(L)})};Ra(y,"[data-atropos-offset], [data-atropos-opacity]").forEach(function(P){$(P,O),E(P,Z?"ease-out":"");var T=W(P);if(x===0&&w===0)K||N(P,"translate3d(0, 0, 0)"),T&&rt(P,T[0]);else{var L=parseFloat(P.dataset.atroposOffset)/100;if(!Number.isNaN(L)&&!K&&N(P,"translate3d("+-w*-L+"%, "+x*-L+"%, 0)"),T){var lt=T[0],wt=T[1],St=Math.max(Math.abs(x),Math.abs(w));rt(P,lt+(wt-lt)*St/100)}}})},It=function(l,m){var x=e!==n;if(Y||(Y=e.getBoundingClientRect()),x&&!X&&(X=n.getBoundingClientRect()),typeof l>"u"&&typeof m>"u"){var I=x?X:Y;l=I.left+I.width/2,m=I.top+I.height/2}var w=0,O=0,K=Y,Z=K.top,W=K.left,P=K.width,T=K.height,L;if(x){var ct=X,Ht=ct.top,Ut=ct.left,Ce=ct.width,ke=ct.height,Ae=W-Ut,Oe=Z-Ht,Pe=P/2+Ae,Te=T/2+Oe,je=l-Ut,Me=m-Ht;O=s.rotateYMax*(je-Pe)/(Ce-P/2)*-1,w=s.rotateXMax*(Me-Te)/(ke-T/2),L=l-W+"px "+(m-Z)+"px"}else{var lt=P/2,wt=T/2,St=l-W,Se=m-Z;O=s.rotateYMax*(St-lt)/(P/2)*-1,w=s.rotateXMax*(Se-wt)/(T/2)}w=Math.min(Math.max(-w,-s.rotateXMax),s.rotateXMax),s.rotateXInvert&&(w=-w),O=Math.min(Math.max(-O,-s.rotateYMax),s.rotateYMax),s.rotateYInvert&&(O=-O);var J=w/s.rotateXMax*100,Q=O/s.rotateYMax*100,Be=(x?Q/100*s.stretchX:0)*(s.rotateYInvert?-1:1),Ne=(x?J/100*s.stretchY:0)*(s.rotateXInvert?-1:1),Ve=x?Math.max(Math.abs(J),Math.abs(Q))/100*s.stretchZ:0;N(p,"translate3d("+Be+"%, "+-Ne+"%, "+-Ve+"px) rotateX("+w+"deg) rotateY("+O+"deg)"),L&&s.commonOrigin&&ge(p,L),k&&($(k,s.duration+"ms"),E(k,"ease-out"),N(k,"translate3d("+-Q*.25+"%, "+J*.25+"%, 0)"),rt(k,Math.max(Math.abs(J),Math.abs(Q))/100)),xt({rotateXPercentage:J,rotateYPercentage:Q,duration:s.duration+"ms",easeOut:!0}),typeof s.onRotate=="function"&&s.onRotate(w,O)},Ft=function(){B.push(function(){return e.classList.add("atropos-active")}),$(p,s.duration+"ms"),E(p,"ease-out"),N(C,"translate3d(0,0, "+s.activeOffset+"px)"),$(C,s.duration+"ms"),E(C,"ease-out"),j&&($(j,s.duration+"ms"),E(j,"ease-out")),c.isActive=!0},st=function(l){if(R=void 0,!(l.type==="pointerdown"&&l.pointerType==="mouse")&&!(l.type==="pointerenter"&&l.pointerType!=="mouse")){if(l.type==="pointerdown"&&l.preventDefault(),Lt=l.clientX,_t=l.clientY,s.alwaysActive){Y=void 0,X=void 0;return}Ft(),typeof s.onEnter=="function"&&s.onEnter()}},Rt=function(l){R===!1&&l.cancelable&&l.preventDefault()},zt=function(l){if(!(!s.rotate||!c.isActive)){if(l.pointerType!=="mouse"){if(!s.rotateTouch)return;l.preventDefault()}var m=l.clientX,x=l.clientY,I=m-Lt,w=x-_t;if(typeof s.rotateTouch=="string"&&(I!==0||w!==0)&&typeof R>"u"){if(I*I+w*w>=25){var O=Math.atan2(Math.abs(w),Math.abs(I))*180/Math.PI;R=s.rotateTouch==="scroll-y"?O>45:90-O>45}R===!1&&(e.classList.add("atropos-rotate-touch"),l.cancelable&&l.preventDefault())}l.pointerType!=="mouse"&&R||It(m,x)}},z=function(l){if(Y=void 0,X=void 0,!!c.isActive&&!(l&&l.type==="pointerup"&&l.pointerType==="mouse")&&!(l&&l.type==="pointerleave"&&l.pointerType!=="mouse")){if(typeof s.rotateTouch=="string"&&R&&e.classList.remove("atropos-rotate-touch"),s.alwaysActive){It(),typeof s.onRotate=="function"&&s.onRotate(0,0),typeof s.onLeave=="function"&&s.onLeave();return}B.push(function(){return e.classList.remove("atropos-active")}),$(C,s.duration+"ms"),E(C,""),N(C,"translate3d(0,0, 0px)"),j&&($(j,s.duration+"ms"),E(j,"")),k&&($(k,s.duration+"ms"),E(k,""),N(k,"translate3d(0, 0, 0)"),rt(k,0)),$(p,s.duration+"ms"),E(p,""),N(p,"translate3d(0,0,0) rotateX(0deg) rotateY(0deg)"),xt({duration:s.duration+"ms"}),c.isActive=!1,typeof s.onRotate=="function"&&s.onRotate(0,0),typeof s.onLeave=="function"&&s.onLeave()}},Kt=function(l){var m=l.target;!n.contains(m)&&m!==n&&c.isActive&&z()},xe=function(){typeof e=="string"&&(e=F(document,e)),e&&(e.__atropos__||(typeof n<"u"?typeof n=="string"&&(n=F(document,n)):n=e,y=o?e.parentNode.host:e,Object.assign(c,{el:e}),p=F(e,".atropos-rotate"),C=F(e,".atropos-scale"),ot=F(e,".atropos-inner"),e.__atropos__=c))},Ie=function(){xe(),!(!e||!n)&&(s.shadow&&be(),s.highlight&&ye(),s.rotateTouch&&(typeof s.rotateTouch=="string"?e.classList.add("atropos-rotate-touch-"+s.rotateTouch):e.classList.add("atropos-rotate-touch")),F(y,"[data-atropos-opacity]")&&xt({opacityOnly:!0}),_(document,"click",Kt),_(n,"pointerdown",st),_(n,"pointerenter",st),_(n,"pointermove",zt),_(n,"touchmove",Rt),_(n,"pointerleave",z),_(n,"pointerup",z),_(n,"lostpointercapture",z),s.alwaysActive&&(Ft(),It()))},we=function(){c.destroyed=!0,cancelAnimationFrame(Dt),D(document,"click",Kt),D(n,"pointerdown",st),D(n,"pointerenter",st),D(n,"pointermove",zt),D(n,"touchmove",Rt),D(n,"pointerleave",z),D(n,"pointerup",z),D(n,"lostpointercapture",z),delete e.__atropos__};return c.destroy=we,Ie(),c}const Ka=Object.freeze(Object.defineProperty({__proto__:null,Atropos:Vt,default:Vt,defaults:he},Symbol.toStringTag,{value:"Module"})),Ha={class:"atropos my-atropos"},Ua={__name:"MainLogo",setup(a){const t=Gt(null);return Gt(null),Ke(async()=>{t.value=Vt({el:".my-atropos",activeOffset:40,shadowScale:1.05,shadow:!0,highlight:!0,rotateXLimit:30,rotateYLimit:30,rotate:!0})}),He(()=>{t.value&&t.value.destroy()}),(e,n)=>(d(),v("div",Ha,n[0]||(n[0]=[H('<div class="atropos-scale"><div class="atropos-rotate"><div class="atropos-inner"><img src="/images/logo_caf.png" alt="Logo" data-atropos-offset="-5"><img src="/images/logo_caf.png" alt="Logo" data-atropos-offset="0"><img src="/images/logo_caf.png" alt="Logo" data-atropos-offset="+5"></div></div></div>',1)])))}},Ya={id:"main",class:"bg-logo-bg font-body"},Xa={class:"flex flex-col items-center justify-center gap-5 text-white min-h-screen"},Ga={class:"flex flex-col sm:flex-row justify-center items-center gap-2"},qa={class:"bg-white/20 backdrop-blur-md rounded-lg p-2 sm:p-6 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-5 text-center text-lg text-gray-300 sm:text-2xl tracking-wider"},Za={class:"font-extrabold"},Wa={class:"mt-2 sm:mt-5 text-gray-300"},Ja={class:"text-white bg-gray-700 py-10 min-h-screen p-4"},Qa={class:"grid grid-cols-1 md:grid-cols-2 gap-6 w-4/5 mx-auto mb-10 content-center items-center mt-5"},tn={class:"relative rounded-lg overflow-hidden shadow-lg"},en=["src","alt"],an={class:"bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-2xl shadow-lg p-6 my-10 relative"},nn={class:"grid grid-cols-1 md:grid-cols-2 gap-6 items-center"},on={class:"relative overflow-hidden rounded-xl shadow-lg"},rn=["src","alt"],sn={id:"activity",class:"py-10 rounded-2xl"},ln={class:"grid grid-cols-1 md:grid-cols-5 gap-10 px-4 md:px-10"},cn={class:"md:col-span-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 rounded-xl shadow-lg relative"},dn={class:"grid grid-cols-1 md:grid-cols-2 gap-6 items-center"},un={class:"relative overflow-hidden"},mn=["src","alt"],pn={class:"md:col-span-2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 rounded-xl shadow-lg relative"},fn={class:"relative overflow-hidden"},hn=["src","alt"],vn={id:"location",class:"text-white bg-gray-800 py-10 min-h-screen flex flex-col justify-center items-center"},gn={class:"grid grid-cols-1 md:grid-cols-2 bg-slate-300 p-2 mx-5 my-2 rounded-2xl"},bn={class:"mx-auto flex flex-col items-center justify-center"},yn={class:"card"},xn=["src","alt"],In=["src","alt"],wn={id:"gallery",class:"min-h-screen bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 text-white py-5 flex flex-col justify-center items-center"},Sn={class:""},Cn=["src","alt"],kn=["src","alt"],An={class:"w-full grid grid-cols-12 gap-5",style:{"max-width":"100rem"}},On=["src","alt","onClick"],Pn={id:"questions",class:"py-10 flex flex-col gap-5 justify-center items-center"},Tn={class:"flex flex-col gap-5 justify-center items-center"},jn={class:"w-full"},Mn={class:"mt-10 text-gray-700 text-2xl sm:text-5xl"},Bn={__name:"Index",props:{ticket:Object},setup(a){Ue(async()=>{const{default:n}=await Promise.resolve().then(()=>Ka);return{default:n}},void 0).then(({default:n})=>{n()});const t=Ye({dinamy:{images:G,activeIndex:0,visible:!1,responsiveOptions:[{breakpoint:"1500px",numVisible:5},{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"560px",numVisible:1}]},talent:{images:G,activeIndex:0,visible:!1,responsiveOptions:[{breakpoint:"1500px",numVisible:5},{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"560px",numVisible:1}]},location:{images:te,activeIndex:0,visible:!1,responsiveOptions:[{breakpoint:"1300px",numVisible:4},{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"400px",numVisible:1}]},general:{images:jt,activeIndex:0,visible:!1,responsiveOptions:[{breakpoint:"1200px",numVisible:4},{breakpoint:"768px",numVisible:3},{breakpoint:"480px",numVisible:2}]}}),e=(n,i)=>{t[n].visible=!0,t[n].activeIndex=i};return(n,i)=>(d(),v(vt,null,[h(Ge),r("div",Ya,[r("main",Xa,[r("div",Ga,[i[7]||(i[7]=r("h1",{class:"font-serif font-extralight text-4xl md:text-6xl uppercase mb-6 text-center"},[dt(" Campamento "),r("strong",{class:"block mt-2 font-extrabold"},"CAF 2025")],-1)),h(Ua)]),r("div",qa,[i[9]||(i[9]=r("div",{class:"my-auto"},[r("p",null,[r("strong",{class:"font-extrabold"},"Retiro de carnaval")])],-1)),i[10]||(i[10]=r("div",{class:"my-auto"},[r("p",null,[r("strong",{class:"font-extrabold"},"1 - 3 Marzo")]),r("p",null,"Cotoca - Santa Cruz")],-1)),r("div",null,[i[8]||(i[8]=r("p",null,"Inscripción",-1)),r("p",null,[r("strong",Za,et(a.ticket.price)+" Bs",1)])])]),r("div",Wa,[h(se,{class:"text-xl sm:text-3xl md:text-7xl font-extrabold"})])])]),r("section",Ja,[r("section",Qa,[i[11]||(i[11]=H('<div class="flex flex-col justify-center space-y-5" data-v-f393ee49><h3 class="text-center text-3xl sm:text-4xl font-bold text-white" data-v-f393ee49> Ven a escuchar la palabra del Señor </h3><p class="text-lg text-gray-300 leading-relaxed" data-v-f393ee49> Durante el campamento, podrás participar en tiempos de <strong data-v-f393ee49>alabanza</strong>, donde la música y el gozo llenarán el ambiente, conectándote con el Señor a través de canciones inspiradoras. También serás parte de <strong data-v-f393ee49>predicaciones</strong> que transformarán tu vida, guiadas por pastores y líderes dedicados a compartir mensajes llenos de sabiduría y amor. </p><ul class="list-disc list-inside text-gray-300" data-v-f393ee49><li data-v-f393ee49>Momentos de alabanza con música en vivo.</li><li data-v-f393ee49>Prédicas poderosas que fortalecerán tu fe.</li><li data-v-f393ee49>Un espacio para reflexionar y crecer espiritualmente.</li><li data-v-f393ee49>Oportunidad de formar lazos con otros campistas en la fe.</li></ul></div>',1)),r("div",tn,[h(f(U),{activeIndex:t.dinamy.activeIndex,"onUpdate:activeIndex":i[0]||(i[0]=o=>t.dinamy.activeIndex=o),value:f(G),circular:!0,showThumbnails:!1,showItemNavigators:!0,class:"rounded-lg"},{item:b(o=>[r("img",{src:o.item.src,alt:o.item.alt,class:"w-full h-80 object-cover"},null,8,en)]),_:1},8,["activeIndex","value"])])]),r("section",an,[i[13]||(i[13]=r("div",{class:"absolute -top-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"},null,-1)),i[14]||(i[14]=r("div",{class:"absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"},null,-1)),r("div",nn,[i[12]||(i[12]=H('<div class="space-y-4 px-5" data-v-f393ee49><h4 class="text-3xl font-extrabold text-gray-100 text-center md:text-left" data-v-f393ee49> Escuela Dominical </h4><p class="text-lg text-gray-400 leading-relaxed" data-v-f393ee49> Los niños disfrutan de un tiempo especial en la <strong data-v-f393ee49>Escuela Dominical</strong>, donde aprenden valores cristianos a través de actividades dinámicas, historias bíblicas y canciones. Bajo la guía de maestras dedicadas, los pequeños pueden descubrir el amor de Dios de una manera creativa y divertida. </p><ul class="list-disc list-inside text-gray-400 space-y-2" data-v-f393ee49><li data-v-f393ee49><strong data-v-f393ee49>Historias Bíblicas:</strong> Con lecciones impactantes y fáciles de entender.</li><li data-v-f393ee49><strong data-v-f393ee49>Juegos Educativos:</strong> Actividades diseñadas para reforzar valores cristianos.</li><li data-v-f393ee49><strong data-v-f393ee49>Maestras Expertas:</strong> Liderazgo amoroso y dedicado para cada niño.</li></ul></div>',1)),r("div",on,[h(f(U),{activeIndex:t.dinamy.activeIndex,"onUpdate:activeIndex":i[1]||(i[1]=o=>t.dinamy.activeIndex=o),value:f(G),circular:!0,showThumbnails:!1,showItemNavigators:!0,class:"rounded-lg border border-gray-600"},{item:b(o=>[r("img",{src:o.item.src,alt:o.item.alt,class:"w-full h-96 object-cover"},null,8,rn)]),_:1},8,["activeIndex","value"])])])]),r("section",sn,[i[20]||(i[20]=r("h3",{class:"text-center text-3xl sm:text-4xl mb-10 font-bold text-white"},"Actividades",-1)),r("div",ln,[r("section",cn,[i[16]||(i[16]=r("div",{class:"absolute -top-8 -left-8 w-16 h-16 bg-gray-600/30 rounded-full blur-3xl"},null,-1)),i[17]||(i[17]=r("h4",{class:"text-2xl font-bold mb-6 text-center text-gray-200"},"Dinámicas",-1)),r("div",dn,[r("div",un,[h(f(U),{activeIndex:t.dinamy.activeIndex,"onUpdate:activeIndex":i[2]||(i[2]=o=>t.dinamy.activeIndex=o),value:f(G),circular:!0,showThumbnails:!1,showItemNavigators:!0,class:"rounded-lg shadow-md"},{item:b(o=>[r("img",{src:o.item.src,alt:o.item.alt,class:"w-full h-80 object-cover"},null,8,mn)]),_:1},8,["activeIndex","value"])]),i[15]||(i[15]=r("div",{class:"space-y-4"},[r("p",{class:"text-lg font-semibold text-gray-300 text-center"}," Vive momentos únicos que combinan diversión y trabajo en equipo. "),r("ul",{class:"list-disc list-inside text-gray-300 space-y-2"},[r("li",null,[r("strong",null,"Circuitos:"),dt(" Desafíos llenos de emoción para escuadrones.")]),r("li",null,[r("strong",null,"Noche de Fogata:"),dt(" Reflexión y cantos bajo las estrellas.")]),r("li",null,[r("strong",null,"Competencias:"),dt(" Actividades llenas de creatividad y energía.")])])],-1))])]),r("section",pn,[i[18]||(i[18]=r("div",{class:"absolute -top-8 -right-8 w-16 h-16 bg-gray-600/30 rounded-full blur-3xl"},null,-1)),i[19]||(i[19]=r("h4",{class:"text-2xl font-bold text-center mb-6 text-gray-200"},"Noche de talentos",-1)),r("div",fn,[h(f(U),{activeIndex:t.dinamy.activeIndex,"onUpdate:activeIndex":i[3]||(i[3]=o=>t.dinamy.activeIndex=o),value:f(G),circular:!0,showThumbnails:!1,showItemNavigators:!0,class:"rounded-lg shadow-md"},{item:b(o=>[r("img",{src:o.item.src,alt:o.item.alt,class:"w-full h-80 object-cover"},null,8,hn)]),_:1},8,["activeIndex","value"])])])])])]),r("section",vn,[i[22]||(i[22]=H('<h2 class="text-center font-extrabold text-4xl" data-v-f393ee49>Lugar del campamento</h2><div class="flex flex-col gap-2 text-slate-500 text-xl my-5" data-v-f393ee49><p class="text-center font-semibold" data-v-f393ee49> 1 - 3 de Marzo, 2025 <i class="pi pi-clock" data-v-f393ee49></i></p><p class="text-center font-semibold" data-v-f393ee49> Cotoca, Santa Cruz - Bolivia <i class="pi pi-map-marker" data-v-f393ee49></i></p></div>',2)),r("div",gn,[i[21]||(i[21]=H('<div class="flex flex-row justify-center items-center" data-v-f393ee49><div class="" data-v-f393ee49><h3 class="text-center font-extrabold underline text-2xl sm:text-3xl text-slate-900" data-v-f393ee49>Alista tus maletas</h3><div class="text-slate-800 max-w-screen-md flex flex-col gap-5 text-lg p-2 sm:p-10 rounded-lg" data-v-f393ee49><p data-v-f393ee49> Imagina un lugar donde las predicaciones inspiradoras transformarán tu corazón, el compañerismo fortalecerá tus lazos con otros campistas y los juegos crearán recuerdos que perdurarán para siempre. </p><p data-v-f393ee49> En el <strong class="font-extrabold" data-v-f393ee49>CAF</strong>, cada momento está diseñado para nutrir tu espíritu, fomentar nuevas amistades y cultivar un sentido de compañerismo. </p><p data-v-f393ee49> ¿Estás listo para vivir una semana de bendición en el <strong data-v-f393ee49>Campamento CAF 2025?</strong><span class="block" data-v-f393ee49> ¡Te esperamos con los brazos abiertos! </span></p><div class="flex flex-col gap-3 text-slate-600 text-lg mt-5" data-v-f393ee49><p class="text-center font-semibold" data-v-f393ee49> 1 - 3 de Marzo, 2025 <i class="pi pi-clock" data-v-f393ee49></i></p><p class="text-center font-semibold" data-v-f393ee49> Cotoca, Santa Cruz - Bolivia </p><div class="" data-v-f393ee49><a href="" class="hover:text-slate-700 block text-center" data-v-f393ee49><i class="pi pi-map-marker text-5xl" style="font-size:5rem;" data-v-f393ee49></i></a><p class="text-sm font-semibold text-center" data-v-f393ee49>Click para abrir ubicación</p></div></div></div></div></div>',1)),r("div",bn,[r("div",yn,[h(f(U),{activeIndex:t.location.activeIndex,"onUpdate:activeIndex":i[4]||(i[4]=o=>t.location.activeIndex=o),value:f(te),responsiveOptions:t.location.responsiveOptions,numVisible:4,circular:!0,autoPlay:!0},{item:b(o=>[r("img",{src:o.item.src,alt:o.item.alt,class:"w-full h-[30rem]"},null,8,xn)]),thumbnail:b(o=>[r("img",{src:o.item.src,alt:o.item.alt},null,8,In)]),_:1},8,["activeIndex","value","responsiveOptions"])])])])]),r("section",wn,[i[23]||(i[23]=r("h3",{class:"text-center font-extrabold text-4xl mb-5"},"Momentos destacado del CAF 2024",-1)),r("div",Sn,[h(f(U),{activeIndex:t.general.activeIndex,"onUpdate:activeIndex":i[5]||(i[5]=o=>t.general.activeIndex=o),visible:t.general.visible,"onUpdate:visible":i[6]||(i[6]=o=>t.general.visible=o),responsiveOptions:t.general.responsiveOptions,value:f(jt),circular:!0,showThumbnails:!1,showItemNavigators:!0,showItemNavigatorsOnHover:!0,numVisible:9,fullScreen:!0,containerStyle:"max-width: 80rem"},{item:b(o=>[r("img",{src:o.item.src,alt:o.item.alt,style:{width:"100%",display:"block"}},null,8,Cn)]),thumbnail:b(o=>[r("img",{src:o.item.src,alt:o.item.alt},null,8,kn)]),_:1},8,["activeIndex","visible","responsiveOptions","value"]),r("div",An,[(d(!0),v(vt,null,$t(f(jt),(o,y)=>(d(),v("div",{key:y,class:"col-span-12 sm:col-span-6 md:col-span-3 relative rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105"},[r("img",{src:o.thumbnail,alt:o.alt,class:"w-72 h-72 object-cover cursor-pointer",onClick:c=>e("general",y)},null,8,On)]))),128))])])]),r("section",Pn,[i[31]||(i[31]=H('<div data-v-f393ee49><h3 class="text-center font-semibold text-2xl sm:text-4xl mt-5 mb-2" data-v-f393ee49>Recomendaciones</h3><p class="text-xl mb-5" data-v-f393ee49>Descarga el siguiente PDF para ver las recomendaciones del CAF 2025</p><div data-v-f393ee49><a href="/pdf/GUIA_Y_RECOMENDACIONES_CAF_2025.pdf" class="block text-center mb-1" download data-v-f393ee49><i class="pi pi-file-pdf hover:text-slate-500" style="font-size:4rem;" data-v-f393ee49></i></a><p class="text-center text-sm" data-v-f393ee49>Click para descargar</p></div></div>',1)),r("div",Tn,[i[30]||(i[30]=r("h3",{class:"text-center font-bold text-2xl sm:text-4xl mt-5"},"Preguntas frecuentes",-1)),r("div",jn,[h(f(qe),{value:["0"],multiple:""},{default:b(()=>[h(f(Ct),{value:"0"},{default:b(()=>[h(f(kt),null,{default:b(()=>i[24]||(i[24]=[r("h4",{class:"text-xl sm:text-2xl font-extrabold"}," 01 Cuál sera el precio de la inscripción? ",-1)])),_:1}),h(f(At),null,{default:b(()=>i[25]||(i[25]=[r("p",{class:"m-0 text-lg sm:text-lg font-semibold"}," El precio de la inscripción sera de 250 Bs. ",-1)])),_:1})]),_:1}),h(f(Ct),{value:"1"},{default:b(()=>[h(f(kt),null,{default:b(()=>i[26]||(i[26]=[r("h4",{class:"text-xl sm:text-2xl font-extrabold"}," 02 Está permitido el uso de celulares o dispositivos electrónicos? ",-1)])),_:1}),h(f(At),null,{default:b(()=>i[27]||(i[27]=[r("p",{class:"m-0 text-lg sm:text-lg font-semibold"}," Se recomienda NO usar dispositivos móviles o electronicos, cualquier daño o perdida corre bajo su responsabilidad. ",-1)])),_:1})]),_:1}),h(f(Ct),{value:"2"},{default:b(()=>[h(f(kt),null,{default:b(()=>i[28]||(i[28]=[r("h4",{class:"text-xl sm:text-2xl font-extrabold"}," 02 Qué debo llevar? ",-1)])),_:1}),h(f(At),null,{default:b(()=>i[29]||(i[29]=[r("p",{class:"m-0 text-lg sm:text-lg font-semibold"}," Debe traer su Biblia, Ropa cómoda y modesta acorde a las diferentes actividades que se realizaran (Predicas, Juegos, Banquete de la Amistad, Dormir), Buena actitud, ganas de aprender y divertirse. ",-1)])),_:1})]),_:1})]),_:1})])]),r("div",Mn,[h(se)])]),i[32]||(i[32]=H('<footer class="h-40 bg-slate-800 text-white flex flex-col justify-center items-center" data-v-f393ee49><h5 class="mb-2" data-v-f393ee49><span class="font-extrabold text-2xl" data-v-f393ee49>CAF 2025</span></h5><div class="flex gap-5 text-center text-2xl" data-v-f393ee49><a href="https://www.facebook.com" target="_blank" data-v-f393ee49><i class="pi pi-facebook" data-v-f393ee49></i></a><a href="https://www.instagram.com" target="_blank" data-v-f393ee49><i class="pi pi-instagram" data-v-f393ee49></i></a></div><div class="p-2 flex flex-col gap-1 text-center text-lg" data-v-f393ee49><p data-v-f393ee49>Contacto Emanuel Vaca: </p><a href="https://wa.me/59162064184" target="_blank" class="text-green-500" data-v-f393ee49><i class="pi pi-whatsapp" data-v-f393ee49></i> 62064184 </a></div></footer>',1))],64))}},zn=Ze(Bn,[["__scopeId","data-v-f393ee49"]]);export{zn as default};
