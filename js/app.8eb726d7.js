(function(e){function t(t){for(var c,n,o=t[0],i=t[1],l=t[2],b=0,d=[];b<o.length;b++)n=o[b],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],c=!0,n=1;n<a.length;n++){var i=a[n];0!==s[i]&&(c=!1)}c&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var c={},s={app:0},r=[];function n(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7656c2d5"}[e]+".js"}function o(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=s[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,c){a=s[e]=[t,c]}));t.push(a[2]=c);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=n(e);var l=new Error;r=function(t){i.onerror=i.onload=null,clearTimeout(b);var a=s[e];if(0!==a){if(a){var c=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",l.name="ChunkLoadError",l.type=c,l.request=r,a[1](l)}s[e]=void 0}};var b=setTimeout((function(){r({type:"timeout",target:i})}),12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=c,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(a,c,function(t){return e[t]}.bind(null,c));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue/",o.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var b=0;b<i.length;b++)t(i[b]);var f=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"337f":function(e,t,a){"use strict";a("71c0")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("fb6a"),a("d81d");var c=a("7a23"),s={id:"nav"};function r(e,t){var a=Object(c["u"])("router-link"),r=Object(c["u"])("router-view");return Object(c["o"])(),Object(c["d"])(c["a"],null,[Object(c["f"])("div",s,[Object(c["f"])(a,{to:"/"}),Object(c["f"])(a,{to:"/about"})]),Object(c["f"])(r)],64)}a("337f");const n={};n.render=r;var o=n,i=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),l={class:"home"};function b(e,t,a,s,r,n){var o=Object(c["u"])("HelloWorld");return Object(c["o"])(),Object(c["d"])("div",l,[Object(c["f"])(o,{msg:""})])}var f=a("dfb1"),d=a.n(f),u=a("5afa"),m=a.n(u),p=a("b92f"),j=a.n(p),O=a("5a22"),v=a.n(O),g=Object(c["z"])("data-v-2fb5bcea");Object(c["r"])("data-v-2fb5bcea");var h=Object(c["f"])("nav",{class:"navbar navbar-expand-lg navbar-light fixed-top",id:"mainNav"},[Object(c["f"])("div",{class:"container px-4 px-lg-5"},[Object(c["f"])("a",{class:"navbar-brand",href:"#page-top"}),Object(c["f"])("button",{class:"navbar-toggler navbar-toggler-right",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["e"])(" Menu "),Object(c["f"])("i",{class:"fas fa-bars"})]),Object(c["f"])("div",{class:"collapse navbar-collapse",id:"navbarResponsive"},[Object(c["f"])("ul",{class:"navbar-nav ms-auto"},[Object(c["f"])("li",{class:"nav-item"},[Object(c["f"])("a",{class:"nav-link",href:"#about"},"About")]),Object(c["f"])("li",{class:"nav-item"},[Object(c["f"])("a",{class:"nav-link",href:"#projects"},"Projects")]),Object(c["f"])("li",{class:"nav-item"},[Object(c["f"])("a",{class:"nav-link",href:"#signup"},"Contact")])])])])],-1),x={class:"masthead"},y={class:"container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center"},w={class:"d-flex justify-content-center"},k={class:"text-center"},S={class:"mx-auto my-0 text-uppercase"},A={class:"text-white-50 mx-auto mt-2 mb-5"},E=Object(c["f"])("a",{class:"btn btn-primary",href:"#about"},"Get Started",-1),M={class:"about-section text-center",id:"about"},P={class:"container px-4 px-lg-5"},T={class:"row gx-4 gx-lg-5 justify-content-center"},N={class:"col-lg-8"},L={class:"text-white mb-4"},_={class:"text-white-50"},q=Object(c["f"])("a",{href:"https://startbootstrap.com/theme/grayscale/"},null,-1),C=Object(c["f"])("img",{class:"img-fluid",src:d.a,alt:"..."},null,-1),R=Object(c["f"])("section",{class:"projects-section bg-light",id:"projects"},[Object(c["f"])("div",{class:"container px-4 px-lg-5"},[Object(c["f"])("div",{class:"row gx-0 mb-4 mb-lg-5 align-items-center"},[Object(c["f"])("div",{class:"col-xl-8 col-lg-7"},[Object(c["f"])("img",{class:"img-fluid mb-3 mb-lg-0",src:m.a,alt:"..."})]),Object(c["f"])("div",{class:"col-xl-4 col-lg-5"},[Object(c["f"])("div",{class:"featured-text text-center text-lg-left"},[Object(c["f"])("h4",null,"Shoreline"),Object(c["f"])("p",{class:"text-black-50 mb-0"},"Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!")])])]),Object(c["f"])("div",{class:"row gx-0 mb-5 mb-lg-0 justify-content-center"},[Object(c["f"])("div",{class:"col-lg-6"},[Object(c["f"])("img",{class:"img-fluid",src:j.a,alt:"..."})]),Object(c["f"])("div",{class:"col-lg-6"},[Object(c["f"])("div",{class:"bg-black text-center h-100 project"},[Object(c["f"])("div",{class:"d-flex h-100"},[Object(c["f"])("div",{class:"project-text w-100 my-auto text-center text-lg-left"},[Object(c["f"])("h4",{class:"text-white"},"Misty"),Object(c["f"])("p",{class:"mb-0 text-white-50"},"An example of where you can put an image of a project, or anything else, along with a description."),Object(c["f"])("hr",{class:"d-none d-lg-block mb-0 ms-0"})])])])])]),Object(c["f"])("div",{class:"row gx-0 justify-content-center"},[Object(c["f"])("div",{class:"col-lg-6"},[Object(c["f"])("img",{class:"img-fluid",src:v.a,alt:"..."})]),Object(c["f"])("div",{class:"col-lg-6 order-lg-first"},[Object(c["f"])("div",{class:"bg-black text-center h-100 project"},[Object(c["f"])("div",{class:"d-flex h-100"},[Object(c["f"])("div",{class:"project-text w-100 my-auto text-center text-lg-right"},[Object(c["f"])("h4",{class:"text-white"},"Mountains"),Object(c["f"])("p",{class:"mb-0 text-white-50"},"Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!"),Object(c["f"])("hr",{class:"d-none d-lg-block mb-0 me-0"})])])])])])])],-1),F=Object(c["f"])("section",{class:"signup-section",id:"signup"},[Object(c["f"])("div",{class:"container px-4 px-lg-5"},[Object(c["f"])("div",{class:"row gx-4 gx-lg-5"},[Object(c["f"])("div",{class:"col-md-10 col-lg-8 mx-auto text-center"},[Object(c["f"])("i",{class:"far fa-paper-plane fa-2x mb-2 text-white"}),Object(c["f"])("h2",{class:"text-white mb-5"},"Subscribe to receive updates!"),Object(c["f"])("form",{class:"form-signup",id:"contactForm","data-sb-form-api-token":"API_TOKEN"},[Object(c["f"])("div",{class:"row input-group-newsletter"},[Object(c["f"])("div",{class:"col"},[Object(c["f"])("input",{class:"form-control",id:"emailAddress",type:"email",placeholder:"Enter email address...","aria-label":"Enter email address...","data-sb-validations":"required,email"})]),Object(c["f"])("div",{class:"col-auto"},[Object(c["f"])("button",{class:"btn btn-primary disabled",id:"submitButton",type:"submit"},"Notify Me!")])]),Object(c["f"])("div",{class:"invalid-feedback mt-2","data-sb-feedback":"emailAddress:required"},"An email is required."),Object(c["f"])("div",{class:"invalid-feedback mt-2","data-sb-feedback":"emailAddress:email"},"Email is not valid."),Object(c["f"])("div",{class:"d-none",id:"submitSuccessMessage"},[Object(c["f"])("div",{class:"text-center mb-3 mt-2 text-white"},[Object(c["f"])("div",{class:"fw-bolder"},"Form submission successful!"),Object(c["e"])(" To activate this form, sign up at "),Object(c["f"])("br"),Object(c["f"])("a",{href:"https://startbootstrap.com/solution/contact-forms"},"https://startbootstrap.com/solution/contact-forms")])]),Object(c["f"])("div",{class:"d-none",id:"submitErrorMessage"},[Object(c["f"])("div",{class:"text-center text-danger mb-3 mt-2"},"Error sending message!")])])])])])],-1),H=Object(c["f"])("section",{class:"contact-section bg-black"},[Object(c["f"])("div",{class:"container px-4 px-lg-5"},[Object(c["f"])("div",{class:"row gx-4 gx-lg-5"},[Object(c["f"])("div",{class:"col-md-4 mb-3 mb-md-0"},[Object(c["f"])("div",{class:"card py-4 h-100"},[Object(c["f"])("div",{class:"card-body text-center"},[Object(c["f"])("i",{class:"fas fa-map-marked-alt text-primary mb-2"}),Object(c["f"])("h4",{class:"text-uppercase m-0"},"Address"),Object(c["f"])("hr",{class:"my-4 mx-auto"}),Object(c["f"])("div",{class:"small text-black-50"},"4923 Market Street, Orlando FL")])])]),Object(c["f"])("div",{class:"col-md-4 mb-3 mb-md-0"},[Object(c["f"])("div",{class:"card py-4 h-100"},[Object(c["f"])("div",{class:"card-body text-center"},[Object(c["f"])("i",{class:"fas fa-envelope text-primary mb-2"}),Object(c["f"])("h4",{class:"text-uppercase m-0"},"Email"),Object(c["f"])("hr",{class:"my-4 mx-auto"}),Object(c["f"])("div",{class:"small text-black-50"},[Object(c["f"])("a",{href:"#!"},"hello@yourdomain.com")])])])]),Object(c["f"])("div",{class:"col-md-4 mb-3 mb-md-0"},[Object(c["f"])("div",{class:"card py-4 h-100"},[Object(c["f"])("div",{class:"card-body text-center"},[Object(c["f"])("i",{class:"fas fa-mobile-alt text-primary mb-2"}),Object(c["f"])("h4",{class:"text-uppercase m-0"},"Phone"),Object(c["f"])("hr",{class:"my-4 mx-auto"}),Object(c["f"])("div",{class:"small text-black-50"},"+1 (555) 902-8832")])])])]),Object(c["f"])("div",{class:"social d-flex justify-content-center"},[Object(c["f"])("a",{class:"mx-2",href:"#!"},[Object(c["f"])("i",{class:"fab fa-twitter"})]),Object(c["f"])("a",{class:"mx-2",href:"#!"},[Object(c["f"])("i",{class:"fab fa-facebook-f"})]),Object(c["f"])("a",{class:"mx-2",href:"#!"},[Object(c["f"])("i",{class:"fab fa-github"})])])])],-1),I=Object(c["f"])("footer",{class:"footer bg-black small text-center text-white-50"},[Object(c["f"])("div",{class:"container px-4 px-lg-5"},"Copyright © Your Website 2021")],-1);Object(c["p"])();var W=g((function(e,t,a,s,r,n){return Object(c["o"])(),Object(c["d"])(c["a"],null,[Object(c["e"])(Object(c["w"])(a.msg),1),h,Object(c["f"])("header",x,[Object(c["f"])("div",y,[Object(c["f"])("div",w,[Object(c["f"])("div",k,[Object(c["f"])("h1",S,Object(c["w"])(r.attractions.activityTitle),1),Object(c["f"])("h2",A,Object(c["w"])(r.attractions.organizer),1),E])])])]),Object(c["f"])("section",M,[Object(c["f"])("div",P,[Object(c["f"])("div",T,[Object(c["f"])("div",N,[Object(c["f"])("h2",L,"關於"+Object(c["w"])(r.attractions.attractionName),1),Object(c["f"])("p",_,[Object(c["e"])(Object(c["w"])(r.attractions.activityIntro)+" ",1),q])])]),C])]),R,F,H,I],64)})),z=a("1da1"),D=(a("96cf"),a("bc3a")),G=a.n(D),J={name:"HelloWorld",props:{msg:String},data:function(){return{attractions:{},attractionName:""}},created:function(){var e=this;return Object(z["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G()({method:"get",url:"https://cors-anywhere.herokuapp.com/http://18.191.222.23/api/Attraction/activity/a000001",headers:{"Access-Control-Allow-Origin":"*"},data:{firstName:"Fred",lastName:"Flintstone"}});case 3:a=t.sent,e.attractions=a.data,console.log(a.data);case 6:return t.prev=6,t.finish(6);case 8:case"end":return t.stop()}}),t,null,[[0,,6,8]])})))()}};a("6a36");J.render=W,J.__scopeId="data-v-2fb5bcea";var Y=J,B={name:"Home",components:{HelloWorld:Y}};B.render=b;var K=B,Q=[{path:"/",name:"Home",component:K},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],U=Object(i["a"])({history:Object(i["b"])("/vue/"),routes:Q}),V=U;Object(c["c"])(o).use(V).mount("#app"),window.addEventListener("DOMContentLoaded",(function(e){var t=function(){var e=document.body.querySelector("#mainNav");e&&(0===window.scrollY?e.classList.remove("navbar-shrink"):e.classList.add("navbar-shrink"))};t(),document.addEventListener("scroll",t);var a=document.body.querySelector("#mainNav");a&&new bootstrap.ScrollSpy(document.body,{target:"#mainNav",offset:74});var c=document.body.querySelector(".navbar-toggler"),s=[].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));s.map((function(e){e.addEventListener("click",(function(){"none"!==window.getComputedStyle(c).display&&c.click()}))}))}))},"5a22":function(e,t,a){e.exports=a.p+"img/demo-image-02.d2e55529.jpg"},"5afa":function(e,t,a){e.exports=a.p+"img/bg-masthead.d3b4a514.jpg"},"6a36":function(e,t,a){"use strict";a("b545")},"71c0":function(e,t,a){},b545:function(e,t,a){},b92f:function(e,t,a){e.exports=a.p+"img/demo-image-01.2cf5985b.jpg"},dfb1:function(e,t,a){e.exports=a.p+"img/ipad.daeab9d1.png"}});
//# sourceMappingURL=app.8eb726d7.js.map