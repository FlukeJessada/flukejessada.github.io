(function(e){function t(t){for(var r,a,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==s[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},s={app:0},o=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f88d9773","chunk-edeabcda":"1a0598bc"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"888324b8","chunk-edeabcda":"31d6cfe0"}[e]+".css",s=c.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===s))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===r||u===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=s[e]=[t,n]}));t.push(r[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}s[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"153e":function(e,t,n){},"21bb":function(e,t,n){"use strict";n("2dad")},"2dad":function(e,t,n){},"39e8":function(e,t,n){"use strict";n("153e")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],o=(n("034f"),n("5c64"),n("2877")),i={},c=Object(o["a"])(i,a,s,!1,null,null,null),l=c.exports,u=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("side-slider-nav"),e._m(0),n("div",{staticClass:"page-content"},[n("section",{staticClass:"content-section",attrs:{id:"projects"}},[e._m(1),n("div",{staticClass:"section-content"},[n("div",{staticClass:"masonry"},[n("div",{staticClass:"row"},e._l(e.githubRepos,(function(t){return n("div",{key:t,staticClass:"col-md-6"},[n("project-card",e._b({},"project-card",t,!1))],1)})),0)])])]),e._m(2),e._m(3)])],1)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-hero content-section",attrs:{id:"top"}},[n("div",{staticClass:"text-des"},[e._v("Hi, my name is")]),n("div",{staticClass:"text-hero"},[e._v("Fluke Jessada")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section-heading"},[n("h1",[e._v("Recent"),n("br"),n("em",[e._v("Projects")])]),n("p",[e._v("All of my work on Github "),n("br"),e._v("Check it out.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content-section",attrs:{id:"contact"}},[n("div",{attrs:{id:"contact-content"}},[n("div",{staticClass:"section-heading"},[n("h1",[e._v("About"),n("br"),n("em",[e._v("Me")])]),n("p",[e._v(" My name is Jessada Supapsuntorn. Front-End Developer "),n("br"),n("em",[e._v("Email")]),e._v(" fluke.jessada.s@gmail.com ")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"footer"},[n("p",[e._v("Copyright © 2021 LzyDev . Design: TemplateMo")])])}],p=n("8f44"),m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"SliderNavbar"},[n("div",{staticClass:"sidebar-navigation hidde-sm hidden-xs"},[n("nav",[n("ul",[n("li",[n("a",{attrs:{href:"#top"}},[n("span",{staticClass:"rect"}),n("span",{staticClass:"circle"}),e._v(" Home ")])]),n("li",[n("a",{attrs:{href:"#projects"}},[n("span",{staticClass:"rect"}),n("span",{staticClass:"circle"}),e._v(" Projects ")])]),n("li",[n("a",{attrs:{href:"#contact"}},[n("span",{staticClass:"rect"}),n("span",{staticClass:"circle"}),e._v(" About Me ")])])])]),n("ul",{staticClass:"social-icons"},[n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-line"})])]),n("li",[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-linkedin"})])])])])])}],h={name:"SideSliderNav"},b=h,g=Object(o["a"])(b,m,v,!1,null,null,null),_=g.exports,y={components:{SideSliderNav:_,ProjectCard:p["a"]},name:"Home",mounted:function(){window.addEventListener("scroll",(function(){console.log("scrolled")}))},data:function(){return{githubRepos:[{name:"Testing 01",language:"JavaScript",description:"Bra Bra Bra",html_url:"https://lzy3me.github.io/",homepage:""},{name:"Testing 02",language:"Java",description:"Bra Bra Bra",html_url:"https://lzy3me.github.io/",homepage:""}]}}},C=y,j=(n("21bb"),Object(o["a"])(C,d,f,!1,null,null,null)),w=j.exports;r["default"].use(u["a"]);var E=[{path:"/",name:"Home",component:w},{path:"/projects",name:"Projects",component:function(){return n.e("chunk-edeabcda").then(n.bind(null,"acca"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],S=new u["a"]({mode:"history",base:"/",routes:E}),k=S,O=n("5f5b"),x=n("b1e0");n("f9e3"),n("2dd8");r["default"].config.productionTip=!1,r["default"].use(O["a"]),r["default"].use(x["a"]),new r["default"]({router:k,render:function(e){return e(l)}}).$mount("#app")},"5c64":function(e,t,n){"use strict";n("d32a")},"85ec":function(e,t,n){},"8f44":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"project-card"},[n("h3",{staticClass:"title"},[e._v(" "+e._s(e.name)+" "),n("small",[e._v(e._s(e.language))])]),n("p",{staticClass:"description"},[e._v(e._s(e.description))]),n("a",{attrs:{href:e.html_url,target:"_blank",rel:"noopener noreferrer"}},[e._v("more info")]),""!==e.homepage?n("span",[e._v(" | "),n("a",{attrs:{href:e.homepage,target:"_blank",rel:"noopener noreferrer"}},[e._v("live demo")])]):e._e()])},a=[],s={name:"project-card",props:{name:String,language:String,description:String,html_url:String,homepage:String}},o=s,i=(n("39e8"),n("2877")),c=Object(i["a"])(o,r,a,!1,null,null,null);t["a"]=c.exports},d32a:function(e,t,n){}});
//# sourceMappingURL=app.87709bcb.js.map