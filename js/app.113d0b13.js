(function(){"use strict";var e={4667:function(e,t,s){var o=s(9242),i=s(3396);function a(e,t){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}var l=s(89);const n={},c=(0,l.Z)(n,[["render",a]]);var r=c,_=s(2483);function d(e,t,s,o,a,l){const n=(0,i.up)("the-jobs");return(0,i.wg)(),(0,i.j4)(n)}var h=s(7139),m=s.p+"img/loading.d71a9acf.svg",b=s.p+"img/icon-location.5f8f2e7e.svg",u=s.p+"img/icon-check.f2df3e6f.svg",f=s.p+"img/icon-search.75d5d1f6.svg",p=s.p+"img/icon-filter.8cc12f8a.svg",v=s.p+"img/icon-search_dark.d9524a38.svg";const g=e=>((0,i.dD)("data-v-bfc44e9a"),e=e(),(0,i.Cn)(),e),k=g((()=>(0,i._)("div",{class:"loading__text"},"Loading",-1))),w=g((()=>(0,i._)("img",{class:"loading__gif",src:m,alt:""},null,-1))),j=[k,w],y={class:"modal__window"},C=g((()=>(0,i._)("div",{class:"modal__icon"},[(0,i._)("img",{src:b,alt:""})],-1))),J={class:"search__checkbox"},I=g((()=>(0,i._)("div",{class:"search__checkbox-text"},"Full Time Only",-1))),x={class:"search__title"},D=g((()=>(0,i._)("div",{class:"search__icon"},[(0,i._)("img",{src:f,alt:""})],-1))),T={class:"search__mobile"},S=g((()=>(0,i._)("img",{src:p,alt:""},null,-1))),M=[S],W=g((()=>(0,i._)("img",{src:v,alt:""},null,-1))),z=[W],O={class:"search__location"},F=g((()=>(0,i._)("div",{class:"search__icon"},[(0,i._)("img",{src:b,alt:""})],-1))),L={class:"search__time"},q={class:"search__option"},K={class:"search__checkbox"},Z=g((()=>(0,i._)("div",{class:"search__checkbox-text"}," Full Time Only ",-1))),U={key:0,class:"jobs"},$=["onClick"],B=["src"],H={class:"jobs__info"},P={class:"jobs__time"},V=g((()=>(0,i._)("span",null," • ",-1))),Y={class:"jobs__company"},A={class:"jobs__location"};function E(e,t,s,a,l,n){const c=(0,i.up)("the-header");return(0,i.wg)(),(0,i.iD)("div",{class:(0,h.C_)(["wrapper",{wrapper_dark:e.theme}])},[l.loading?((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,h.C_)(["loading",{loading_dark:e.theme}])},j,2)):(0,i.kq)("",!0),l.modal?((0,i.wg)(),(0,i.iD)("div",{key:1,class:(0,h.C_)(["modal",{modal_dark:e.theme}]),onClick:t[5]||(t[5]=e=>l.modal=!1)},[(0,i._)("div",y,[(0,i._)("div",{class:"modal__location",onClick:t[1]||(t[1]=(0,o.iM)((()=>{}),["stop"]))},[C,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.locationSearch=e),placeholder:"Filter by location…",type:"text"},null,512),[[o.nr,l.locationSearch]])]),(0,i._)("label",null,[(0,i._)("div",{class:"search__option",onClick:t[3]||(t[3]=(0,o.iM)((()=>{}),["stop"]))},[(0,i._)("div",J,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>l.fullTimeMark=e),type:"checkbox"},null,512),[[o.e8,l.fullTimeMark]]),(0,i._)("div",{class:(0,h.C_)(["search__box",{search__box_checked:l.fullTimeMark}])},[(0,i._)("img",{class:(0,h.C_)(["search__mark",{search__mark_checked:l.fullTimeMark}]),src:u,alt:""},null,2)],2)]),I])]),(0,i._)("button",{onClick:t[4]||(t[4]=(...e)=>n.jobSearch&&n.jobSearch(...e)),class:"modal__btn"},"Search")])],2)):(0,i.kq)("",!0),(0,i.Wm)(c),(0,i._)("div",{class:(0,h.C_)(["container",{container_dark:e.theme}])},[(0,i._)("div",{class:(0,h.C_)(["search",{search_dark:e.theme}])},[(0,i._)("div",x,[D,(0,i.wy)((0,i._)("input",{ref:"input",class:"search__input",placeholder:"Filter by title, companies, expertise…",type:"text","onUpdate:modelValue":t[6]||(t[6]=e=>l.titleSearch=e)},null,512),[[o.nr,l.titleSearch]]),(0,i._)("div",T,[(0,i._)("div",{onClick:t[7]||(t[7]=e=>l.modal=!0),class:"search__filter"},M),(0,i._)("div",{onClick:t[8]||(t[8]=(...e)=>n.jobSearch&&n.jobSearch(...e)),class:"search__icon_mobile"},z)])]),(0,i._)("div",O,[F,(0,i.wy)((0,i._)("input",{class:"search__input",placeholder:"Filter by location…",type:"text","onUpdate:modelValue":t[9]||(t[9]=e=>l.locationSearch=e)},null,512),[[o.nr,l.locationSearch]])]),(0,i._)("div",L,[(0,i._)("label",null,[(0,i._)("div",q,[(0,i._)("div",K,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[10]||(t[10]=e=>l.fullTimeMark=e),type:"checkbox"},null,512),[[o.e8,l.fullTimeMark]]),(0,i._)("div",{class:(0,h.C_)(["search__box",{search__box_checked:l.fullTimeMark}])},[(0,i._)("img",{class:(0,h.C_)(["search__mark",{search__mark_checked:l.fullTimeMark}]),src:u,alt:""},null,2)],2)]),Z])]),(0,i._)("button",{onClick:t[11]||(t[11]=(...e)=>n.jobSearch&&n.jobSearch(...e)),class:"search__btn"}," Search ")])],2),l.loading?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",U,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.currentJobs,(t=>((0,i.wg)(),(0,i.iD)("div",{class:(0,h.C_)(["jobs__item",{jobs__item_dark:e.theme}]),key:t.id,onClick:e=>n.openJobInfo(t)},[(0,i._)("div",{style:(0,h.j5)({backgroundColor:t.logoBackground}),class:"jobs__logo"},[(0,i._)("img",{src:t.logo,alt:""},null,8,B)],4),(0,i._)("div",H,[(0,i._)("div",P,[(0,i._)("span",null,(0,h.zw)(t.postedAt),1),V,(0,i._)("span",null,(0,h.zw)(t.contract),1)]),(0,i._)("div",{class:(0,h.C_)(["jobs__name",{jobs__name_dark:e.theme}])},(0,h.zw)(t.position),3),(0,i._)("div",Y,(0,h.zw)(t.company),1),(0,i._)("div",A,(0,h.zw)(t.location),1)])],10,$)))),128))])),l.loading?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("button",{key:1,onClick:t[12]||(t[12]=(...e)=>n.loadMore&&n.loadMore(...e)),class:"load"}," Load More "))],2)],2)}s(7658);var N=s.p+"img/bg-pattern-header.008fb8df.svg",X=s.p+"img/bg-pattern-header.76dc358f.svg",Q=s.p+"img/bg-pattern-header.e4dfc76e.svg",R=s.p+"img/logo.fb8baa91.svg",G=s.p+"img/icon-sun.ba4c188a.svg",ee=s.p+"img/icon-moon.096a1ccb.svg";const te=e=>((0,i.dD)("data-v-6154eaac"),e=e(),(0,i.Cn)(),e),se=N,oe=X,ie=Q,ae={class:"header"},le=te((()=>(0,i._)("picture",null,[(0,i._)("source",{srcset:se,media:"(min-width: 992px)",type:"image/svg+xml"}),(0,i._)("source",{srcset:oe,media:"(max-width: 575px)",type:"image/svg+xml"}),(0,i._)("source",{srcset:ie,media:"(max-width: 991px)",type:"image/svg+xml"}),(0,i._)("img",{src:N,alt:""})],-1))),ne={class:"header__title"},ce=te((()=>(0,i._)("div",{class:"header__logo"},[(0,i._)("img",{src:R,alt:""})],-1))),re={class:"switcher"},_e=te((()=>(0,i._)("div",{class:"switcher__light"},[(0,i._)("img",{src:G,alt:""})],-1))),de={class:"switcher__indicator"},he=te((()=>(0,i._)("input",{type:"checkbox"},null,-1))),me=te((()=>(0,i._)("div",{class:"switcher__dark"},[(0,i._)("img",{src:ee,alt:""})],-1)));function be(e,t,s,o,a,l){return(0,i.wg)(),(0,i.iD)("div",ae,[le,(0,i._)("div",ne,[ce,(0,i._)("div",re,[_e,(0,i._)("label",de,[he,(0,i._)("div",{class:"switcher__box",onClick:t[0]||(t[0]=(...t)=>e.setTheme&&e.setTheme(...t))},[(0,i._)("div",{class:(0,h.C_)([{switcher__btn_dark:e.theme},"switcher__btn"])},null,2)])]),me])])])}var ue=s(65),fe={methods:{...(0,ue.OI)({setTheme:"theme/setTheme"})},computed:{...(0,ue.rn)({theme:e=>e.theme.theme})}};const pe=(0,l.Z)(fe,[["render",be],["__scopeId","data-v-6154eaac"]]);var ve=pe,ge={components:{TheHeader:ve},data(){return{currentJobs:null,showJobs:null,filteredJobs:null,fullTimeMark:!1,titleSearch:null,locationSearch:null,modal:!1,loading:!0}},methods:{...(0,ue.nv)({getJobs:"jobs/getJobs"}),...(0,ue.OI)({getClientWidth:"jobs/getClientWidth"}),changePlaceholer(){this.clientWidth<992&&(this.$refs.input.placeholder="Filter by title…")},openJobInfo(e){this.$router.push({name:"jobInfo",params:{id:e.id}})},setJobsShow(){this.showJobs=this.jobsData.filter(((e,t)=>t<12)),this.currentJobs=this.showJobs,this.filteredJobs=null},loadMore(){this.currentJobs=this.jobsData,this.filteredJobs=this.jobsData,this.searchedTitle(this.filteredJobs),this.searchedLocation(this.filteredJobs),this.searchedFulltime(this.filteredJobs),this.currentJobs=this.filteredJobs,this.filteredJobs=this.jobsData},searchedTitle(e){this.titleSearch&&(this.filteredJobs=e.filter((e=>e.position.toLowerCase().includes(this.titleSearch.toLowerCase()))))},searchedLocation(e){this.locationSearch&&(this.filteredJobs=e.filter((e=>e.location.toLowerCase().includes(this.locationSearch.toLowerCase()))))},searchedFulltime(e){this.fullTimeMark&&(this.filteredJobs=e.filter((e=>"Full Time"==e.contract)))},jobSearch(){this.titleSearch||this.locationSearch||this.fullTimeMark?this.filteredJobs==this.jobsData?(this.searchedTitle(this.filteredJobs),this.searchedLocation(this.filteredJobs),this.searchedFulltime(this.filteredJobs),this.currentJobs=this.filteredJobs,this.filteredJobs=this.jobsData):null==this.filteredJobs&&(this.filteredJobs=this.showJobs,this.searchedTitle(this.filteredJobs),this.searchedLocation(this.filteredJobs),this.searchedFulltime(this.filteredJobs),this.currentJobs=this.filteredJobs,this.filteredJobs=null):this.setJobsShow()}},computed:{...(0,ue.rn)({jobsData:e=>e.jobs.jobsData,theme:e=>e.theme.theme,clientWidth:e=>e.jobs.clientWidth})},created(){(async()=>{await this.getJobs(),this.setJobsShow(),this.loading=!1})()},mounted(){this.getClientWidth(),this.changePlaceholer()}};const ke=(0,l.Z)(ge,[["render",E],["__scopeId","data-v-bfc44e9a"]]);var we=ke,je={components:{TheJobs:we}};const ye=(0,l.Z)(je,[["render",d]]);var Ce=ye;function Je(e,t,s,o,a,l){const n=(0,i.up)("job-info");return(0,i.wg)(),(0,i.j4)(n)}const Ie=e=>((0,i.dD)("data-v-77243fc7"),e=e(),(0,i.Cn)(),e),xe=Ie((()=>(0,i._)("div",{class:"loading__text"},"Loading",-1))),De=Ie((()=>(0,i._)("img",{class:"loading__gif",src:m,alt:""},null,-1))),Te=[xe,De],Se={key:0,class:"job"},Me=["src"],We={class:"title__block"},ze={class:""},Oe={class:"title__site"},Fe=["href"],Le={class:"info__title"},qe={class:"info__main"},Ke={class:"info__time"},Ze=Ie((()=>(0,i._)("span",null," • ",-1))),Ue={class:"info__location"},$e=["href"],Be=Ie((()=>(0,i._)("button",{class:"info__apply-btn"},"Apply Now",-1))),He=[Be],Pe={class:"info__text"},Ve=Ie((()=>(0,i._)("div",{class:"info__sub-header"},"Requirements",-1))),Ye={class:"info__text"},Ae={class:"info__list"},Ee=Ie((()=>(0,i._)("div",{class:"info__sub-header"},"What You Will Do",-1))),Ne={class:"info__text"},Xe={class:"info__list"},Qe={class:"info__list-number"},Re={class:"footer__info"},Ge=Ie((()=>(0,i._)("div",{class:"footer__text"},"So Digital Inc.",-1))),et=["href"],tt=Ie((()=>(0,i._)("button",{class:"footer__btn"},"Apply Now",-1))),st=[tt];function ot(e,t,s,o,a,l){const n=(0,i.up)("the-header");return(0,i.wg)(),(0,i.iD)("div",{class:(0,h.C_)(["wrapper",{wrapper_dark:e.theme}])},[a.jobItem?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,h.C_)(["loading",{loading_dark:e.theme}])},Te,2)),(0,i.Wm)(n),(0,i._)("div",{class:(0,h.C_)(["container",{container_dark:e.theme}])},[a.jobItem?((0,i.wg)(),(0,i.iD)("div",Se,[(0,i._)("div",{class:(0,h.C_)(["title",{title_dark:e.theme}])},[(0,i._)("div",{class:"title__logo",style:(0,h.j5)({backgroundColor:a.jobItem.logoBackground})},[(0,i._)("img",{src:"."+a.jobItem.logo,alt:""},null,8,Me)],4),(0,i._)("div",We,[(0,i._)("div",ze,[(0,i._)("div",{class:(0,h.C_)(["title__company",{title__company_dark:e.theme}])},(0,h.zw)(a.jobItem.company),3),(0,i._)("div",Oe,(0,h.zw)(a.jobItem.company.toLowerCase()+".com"),1)]),(0,i._)("a",{target:"_blank",href:a.jobItem.website,class:"title__link"},[(0,i._)("button",{class:(0,h.C_)(["title__site-btn",{title__sitebtn_dark:e.theme}])}," Company Site ",2)],8,Fe)])],2),(0,i._)("div",{class:(0,h.C_)(["info",{info_dark:e.theme}])},[(0,i._)("div",Le,[(0,i._)("div",qe,[(0,i._)("div",Ke,[(0,i._)("span",null,(0,h.zw)(a.jobItem.postedAt),1),Ze,(0,i._)("span",null,(0,h.zw)(a.jobItem.contract),1)]),(0,i._)("div",{class:(0,h.C_)(["info__name",{info__name_dark:e.theme}])},(0,h.zw)(a.jobItem.position),3),(0,i._)("div",Ue,(0,h.zw)(a.jobItem.location),1)]),(0,i._)("a",{href:a.jobItem.apply,target:"_blank",class:"info__link"},He,8,$e)]),(0,i._)("div",Pe,(0,h.zw)(a.jobItem.description),1),Ve,(0,i._)("div",Ye,(0,h.zw)(a.jobItem.requirements.content),1),(0,i._)("ul",Ae,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.jobItem.requirements.items,(e=>((0,i.wg)(),(0,i.iD)("li",{class:"info__list-ul",key:e},(0,h.zw)(e),1)))),128))]),Ee,(0,i._)("div",Ne,(0,h.zw)(a.jobItem.role.content),1),(0,i._)("ul",Xe,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.jobItem.role.items,((e,t)=>((0,i.wg)(),(0,i.iD)("li",{class:"info__list-ol",key:e},[(0,i.Uk)((0,h.zw)(e)+" ",1),(0,i._)("div",Qe,(0,h.zw)(t+1),1)])))),128))])],2)])):(0,i.kq)("",!0)],2),a.jobItem?((0,i.wg)(),(0,i.iD)("div",{key:1,class:(0,h.C_)(["footer",{footer_dark:e.theme}])},[(0,i._)("div",{class:(0,h.C_)(["footer__block",{footer__block_dark:e.theme}])},[(0,i._)("div",Re,[(0,i._)("div",{class:(0,h.C_)([{footer__name_dark:e.theme},"footer__name"])},(0,h.zw)(a.jobItem.position),3),Ge]),(0,i._)("a",{class:"footer__link",href:a.jobItem.apply,target:"_blank"},st,8,et)],2)],2)):(0,i.kq)("",!0)],2)}var it={components:{TheHeader:ve},data(){return{jobItem:null,jobId:this.$route.params.id-1}},methods:{...(0,ue.nv)({getJobs:"jobs/getJobs"}),...(0,ue.OI)({setJobItem:"jobs/setJobItem"})},computed:{...(0,ue.rn)({jobsData:e=>e.jobs.jobsData,theme:e=>e.theme.theme})},mounted(){(async()=>{await this.getJobs(),this.jobItem=this.jobsData[this.jobId]})()}};const at=(0,l.Z)(it,[["render",ot],["__scopeId","data-v-77243fc7"]]);var lt=at,nt={components:{JobInfo:lt}};const ct=(0,l.Z)(nt,[["render",Je]]);var rt=ct;const _t=[{path:"/",name:"home",component:Ce},{path:"/job-info/:id",name:"jobInfo",component:rt}],dt=(0,_.p7)({history:(0,_.PO)("/dev_jobs/"),routes:_t,scrollBehavior(){return{top:0}}});var ht=dt,mt=s(4311);const bt={state:()=>({jobsData:null,clientWidth:null}),getters:{},mutations:{setJobsData(e,t){e.jobsData=t},getClientWidth(e){e.clientWidth=document.documentElement.clientWidth}},actions:{async getJobs({commit:e}){try{let t=await mt.Z.get("https://api.jsonbin.io/v3/b/63970b762d0e0021081ac21e",{headers:{"X-Master-Key":"$2b$10$7CwsFbKb.BLW1kd8jKK7teW5dEX4qa9NxaWIayCWwQWirol8YktBu"}});e("setJobsData",t.data.record)}catch(t){console.log(t),alert("Ошибка")}}},namespaced:!0},ut={state:()=>({theme:!1}),getters:{},mutations:{setTheme(e){e.theme=!e.theme}},actions:{},namespaced:!0};var ft=(0,ue.MT)({modules:{jobs:bt,theme:ut}});(0,o.ri)(r).use(ht).use(ft).mount("#app")}},t={};function s(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(t,o,i,a){if(!o){var l=1/0;for(_=0;_<e.length;_++){o=e[_][0],i=e[_][1],a=e[_][2];for(var n=!0,c=0;c<o.length;c++)(!1&a||l>=a)&&Object.keys(s.O).every((function(e){return s.O[e](o[c])}))?o.splice(c--,1):(n=!1,a<l&&(l=a));if(n){e.splice(_--,1);var r=i();void 0!==r&&(t=r)}}return t}a=a||0;for(var _=e.length;_>0&&e[_-1][2]>a;_--)e[_]=e[_-1];e[_]=[o,i,a]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.p="/dev_jobs/"}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,a,l=o[0],n=o[1],c=o[2],r=0;if(l.some((function(t){return 0!==e[t]}))){for(i in n)s.o(n,i)&&(s.m[i]=n[i]);if(c)var _=c(s)}for(t&&t(o);r<l.length;r++)a=l[r],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(_)},o=self["webpackChunkdev_jobs"]=self["webpackChunkdev_jobs"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(4667)}));o=s.O(o)})();
//# sourceMappingURL=app.113d0b13.js.map