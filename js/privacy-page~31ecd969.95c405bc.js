(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["privacy-page~31ecd969"],{"01f9":function(t,e,n){"use strict";var r=n("2d00"),o=n("5ca1"),i=n("2aba"),a=n("32e9"),s=n("84f2"),c=n("41a0"),u=n("7f20"),l=n("38fd"),f=n("2b4c")("iterator"),p=!([].keys&&"next"in[].keys()),d="@@iterator",v="keys",h="values",y=function(){return this};t.exports=function(t,e,n,m,g,b,w){c(n,e,m);var _,S,x,k=function(t){if(!p&&t in L)return L[t];switch(t){case v:return function(){return new n(this,t)};case h:return function(){return new n(this,t)}}return function(){return new n(this,t)}},P=e+" Iterator",C=g==h,T=!1,L=t.prototype,O=L[f]||L[d]||g&&L[g],E=O||k(g),j=g?C?k("entries"):E:void 0,I="Array"==e&&L.entries||O;if(I&&(x=l(I.call(new t)),x!==Object.prototype&&x.next&&(u(x,P,!0),r||"function"==typeof x[f]||a(x,f,y))),C&&O&&O.name!==h&&(T=!0,E=function(){return O.call(this)}),r&&!w||!p&&!T&&L[f]||a(L,f,E),s[e]=E,s[P]=y,g)if(_={values:C?E:k(h),keys:b?E:k(v),entries:j},w)for(S in _)S in L||i(L,S,_[S]);else o(o.P+o.F*(p||T),e,_);return _}},"0d58":function(t,e,n){var r=n("ce10"),o=n("e11e");t.exports=Object.keys||function(t){return r(t,o)}},1495:function(t,e,n){var r=n("86cc"),o=n("cb7c"),i=n("0d58");t.exports=n("9e1e")?Object.defineProperties:function(t,e){o(t);var n,a=i(e),s=a.length,c=0;while(s>c)r.f(t,n=a[c++],e[n]);return t}},"230e":function(t,e,n){var r=n("d3f4"),o=n("7726").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},"2aba":function(t,e,n){var r=n("7726"),o=n("32e9"),i=n("69a8"),a=n("ca5a")("src"),s=n("fa5b"),c="toString",u=(""+s).split(c);n("8378").inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,s){var c="function"==typeof n;c&&(i(n,"name")||o(n,"name",e)),t[e]!==n&&(c&&(i(n,a)||o(n,a,t[e]?""+t[e]:u.join(String(e)))),t===r?t[e]=n:s?t[e]?t[e]=n:o(t,e,n):(delete t[e],o(t,e,n)))})(Function.prototype,c,(function(){return"function"==typeof this&&this[a]||s.call(this)}))},"2aeb":function(t,e,n){var r=n("cb7c"),o=n("1495"),i=n("e11e"),a=n("613b")("IE_PROTO"),s=function(){},c="prototype",u=function(){var t,e=n("230e")("iframe"),r=i.length,o="<",a=">";e.style.display="none",n("fab2").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+a+"document.F=Object"+o+"/script"+a),t.close(),u=t.F;while(r--)delete u[c][i[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(s[c]=r(t),n=new s,s[c]=null,n[a]=t):n=u(),void 0===e?n:o(n,e)}},"2b4c":function(t,e,n){var r=n("5537")("wks"),o=n("ca5a"),i=n("7726").Symbol,a="function"==typeof i,s=t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))};s.store=r},"2c95":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",[n("nav",{staticClass:"navbar is-link is-fixed-top",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-brand"},[t._m(0),n("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(e){return t.initToggles()}}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])]),t._m(1)]),t._m(2)])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"navbar-item",attrs:{href:"https://play.google.com/store/apps/details?id=id.go.bandung.disyanjak",target:"_blank"}},[r("img",{attrs:{src:n("9dd5"),width:"32",height:"32"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[n("div",{staticClass:"navbar-start"},[n("a",{staticClass:"navbar-item has-text-weight-medium",attrs:{href:"#"}},[t._v("\n          Privacy Policy for E-Satria Apps\n        ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container is-fluid paddingup"},[n("article",{staticClass:"message"},[n("div",{staticClass:"message-body"},[n("h1",{staticClass:"is-size-4"},[n("strong",[t._v("Privacy Policy")])]),n("p",[t._v("\n          Diskominfo Kota Bandung built the Aplikasi Elektronik Self Assesment Text Reporting Apps or E-Satria  app as a Free app. This SERVICE is provided by Diskominfo\n          Kota Bandung at no cost and is intended for use as is.\n        ")]),n("p",[t._v("\n          This page is used to inform visitors regarding our policies with the\n          collection, use, and disclosure of Personal Information if anyone\n          decided to use our Service.\n        ")]),n("p",[t._v("\n          If you choose to use our Service, then you agree to the collection and\n          use of information in relation to this policy. The Personal\n          Information that we collect is used for providing and improving the\n          Service. We will not use or share your information with anyone except\n          as described in this Privacy Policy.\n        ")])])]),n("article",{staticClass:"message"},[n("div",{staticClass:"message-body"},[n("p",[n("strong",[t._v("Information Collection and Use")])]),n("p",[t._v("\n          For a better experience, while using our Service, we may require you\n          to provide us with certain personally identifiable information,\n          including but not limited to Internet State, Network State, Location\n          GPS, Location User. The information that we request will be retained\n          by us and used as described in this privacy policy.\n        ")]),n("p",[t._v("\n          The app does use third party services that may collect information\n          used to identify you.\n        ")]),n("div",[n("p",[t._v("\n            Link to privacy policy of third party service providers used by the\n            app\n          ")]),n("div",{staticClass:"content"},[n("ul",[n("li",[n("a",{attrs:{href:"https://www.google.com/policies/privacy/",target:"_blank"}},[t._v("Google Play Services")])]),n("li",[n("a",{attrs:{href:"https://firebase.google.com/policies/analytics",target:"_blank"}},[t._v("Firebase Analytics")])]),n("li",[n("a",{attrs:{href:"https://fabric.io/privacy",target:"_blank"}},[t._v("Fabric")])])])])])])]),n("article",{staticClass:"message"},[n("div",{staticClass:"message-body"},[n("p",[n("strong",[t._v("Log Data")])]),n("p",[t._v("\n          We want to inform you that whenever you use our Service, in a case of\n          an error in the app we collect data and information (through third\n          party products) on your phone called Log Data. This Log Data may\n          include information such as your device Internet Protocol (“IP”)\n          address, device name, operating system version, the configuration of\n          the app when utilizing our Service, the time and date of your use of\n          the Service, and other statistics.\n        ")])])]),n("article",{staticClass:"message"},[n("div",{staticClass:"message-body"},[n("p",[n("strong",[t._v("Cookies")])]),n("p",[t._v("\n          Cookies are files with a small amount of data that are commonly used\n          as anonymous unique identifiers. These are sent to your browser from\n          the websites that you visit and are stored on your device's internal\n          memory.\n        ")]),n("p",[t._v("\n          This Service does not use these “cookies” explicitly. However, the app\n          may use third party code and libraries that use “cookies” to collect\n          information and improve their services. You have the option to either\n          accept or refuse these cookies and know when a cookie is being sent to\n          your device. If you choose to refuse our cookies, you may not be able\n          to use some portions of this Service.\n        ")])])]),n("article",{staticClass:"message"},[n("div",{staticClass:"message-body"},[n("p",[n("strong",[t._v("Service Providers")])]),n("p",[t._v("\n          We may employ third-party companies and individuals due to the\n          following reasons:\n        ")]),n("div",{staticClass:"content"},[n("ul",[n("li",[t._v("To facilitate our Service;")]),n("li",[t._v("To provide the Service on our behalf;")]),n("li",[t._v("To perform Service-related services; or")]),n("li",[t._v("To assist us in analyzing how our Service is used.")])])]),n("p",[t._v("\n          We want to inform users of this Service that these third parties have\n          access to your Personal Information. The reason is to perform the\n          tasks assigned to them on our behalf. However, they are obligated not\n          to disclose or use the information for any other purpose.\n        ")])])]),n("article",{staticClass:"message"},[n("div",{staticClass:"message-body"},[n("p",[n("strong",[t._v("Security")])]),n("p",[t._v("\n          We value your trust in providing us your Personal Information, thus we\n          are striving to use commercially acceptable means of protecting it.\n          But remember that no method of transmission over the internet, or\n          method of electronic storage is 100% secure and reliable, and we\n          cannot guarantee its absolute security.\n        ")])])]),n("article",{staticClass:"message"},[n("div",{staticClass:"message-body"},[n("p",[n("strong",[t._v("Links to Other Sites")])]),n("p",[t._v("\n          This Service may contain links to other sites. If you click on a\n          third-party link, you will be directed to that site. Note that these\n          external sites are not operated by us. Therefore, we strongly advise\n          you to review the Privacy Policy of these websites. We have no control\n          over and assume no responsibility for the content, privacy policies,\n          or practices of any third-party sites or services.\n        ")])])]),n("article",{staticClass:"message"},[n("div",{staticClass:"message-body"},[n("p",[n("strong",[t._v("Children’s Privacy")])]),n("p",[t._v("\n          These Services do not address anyone under the age of 13. We do not\n          knowingly collect personally identifiable information from children\n          under 13. In the case we discover that a child under 13 has provided\n          us with personal information, we immediately delete this from our\n          servers. If you are a parent or guardian and you are aware that your\n          child has provided us with personal information, please contact us so\n          that we will be able to do necessary actions.\n        ")])])]),n("article",{staticClass:"message"},[n("div",{staticClass:"message-body"},[n("p",[n("strong",[t._v("Changes to This Privacy Policy")])]),n("p",[t._v("\n          We may update our Privacy Policy from time to time. Thus, you are\n          advised to review this page periodically for any changes. We will\n          notify you of any changes by posting the new Privacy Policy on this\n          page. These changes are effective immediately after they are posted on\n          this page.\n        ")])])]),n("article",{staticClass:"message is-primary"},[n("div",{staticClass:"message-body"},[n("p",[n("strong",[t._v("Contact Us")])]),n("p",[t._v("\n          If you have any questions or suggestions about our Privacy Policy, do\n          not hesitate to contact us at Diskominfo Kota Bandung\n          "),n("a",{attrs:{href:"https://diskominfo.bandung.go.id/hubungi-kami"}},[t._v("Diskominfo Kota Bandung")])]),n("p",[t._v("\n          This privacy policy page was created at\n          "),n("a",{attrs:{href:"https://privacypolicytemplate.net",target:"_blank"}},[t._v("privacypolicytemplate.net")]),t._v("\n          and modified/generated by\n          "),n("a",{attrs:{href:"https://app-privacy-policy-generator.firebaseapp.com/",target:"_blank"}},[t._v("App Privacy Policy Generator")])])])])])}],i=(n("ac6a"),{name:"privacy-home",data(){return{title:"Privacy Policy Kang Pisman"}},methods:{initToggles(){const t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach(t=>{const e=t.dataset.target,n=document.getElementById(e);t.classList.toggle("is-active"),n.classList.toggle("is-active")})}}}),a=i,s=(n("9aa2"),n("2877")),c=Object(s["a"])(a,r,o,!1,null,"09622845",null);e["default"]=c.exports},"2d00":function(t,e){t.exports=!1},"2d95":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"32e9":function(t,e,n){var r=n("86cc"),o=n("4630");t.exports=n("9e1e")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"38fd":function(t,e,n){var r=n("69a8"),o=n("4bf8"),i=n("613b")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},"41a0":function(t,e,n){"use strict";var r=n("2aeb"),o=n("4630"),i=n("7f20"),a={};n("32e9")(a,n("2b4c")("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},4588:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},4630:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"4bf8":function(t,e,n){var r=n("be13");t.exports=function(t){return Object(r(t))}},5537:function(t,e,n){var r=n("8378"),o=n("7726"),i="__core-js_shared__",a=o[i]||(o[i]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("2d00")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"5ca1":function(t,e,n){var r=n("7726"),o=n("8378"),i=n("32e9"),a=n("2aba"),s=n("9b43"),c="prototype",u=function(t,e,n){var l,f,p,d,v=t&u.F,h=t&u.G,y=t&u.S,m=t&u.P,g=t&u.B,b=h?r:y?r[e]||(r[e]={}):(r[e]||{})[c],w=h?o:o[e]||(o[e]={}),_=w[c]||(w[c]={});for(l in h&&(n=e),n)f=!v&&b&&void 0!==b[l],p=(f?b:n)[l],d=g&&f?s(p,r):m&&"function"==typeof p?s(Function.call,p):p,b&&a(b,l,p,t&u.U),w[l]!=p&&i(w,l,d),m&&_[l]!=p&&(_[l]=p)};r.core=o,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},"613b":function(t,e,n){var r=n("5537")("keys"),o=n("ca5a");t.exports=function(t){return r[t]||(r[t]=o(t))}},"626a":function(t,e,n){var r=n("2d95");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},6821:function(t,e,n){var r=n("626a"),o=n("be13");t.exports=function(t){return r(o(t))}},"69a8":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"6a99":function(t,e,n){var r=n("d3f4");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},7726:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"77f1":function(t,e,n){var r=n("4588"),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},"79e5":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"7f20":function(t,e,n){var r=n("86cc").f,o=n("69a8"),i=n("2b4c")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},8378:function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"84f2":function(t,e){t.exports={}},"86cc":function(t,e,n){var r=n("cb7c"),o=n("c69a"),i=n("6a99"),a=Object.defineProperty;e.f=n("9e1e")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"9aa2":function(t,e,n){"use strict";var r=n("c3a5"),o=n.n(r);o.a},"9b43":function(t,e,n){var r=n("d8e8");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"9c6c":function(t,e,n){var r=n("2b4c")("unscopables"),o=Array.prototype;void 0==o[r]&&n("32e9")(o,r,{}),t.exports=function(t){o[r][t]=!0}},"9dd5":function(t,e,n){t.exports=n.p+"img/diskominfo_kota.a373d8cb.png"},"9def":function(t,e,n){var r=n("4588"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},"9e1e":function(t,e,n){t.exports=!n("79e5")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},ac6a:function(t,e,n){for(var r=n("cadf"),o=n("0d58"),i=n("2aba"),a=n("7726"),s=n("32e9"),c=n("84f2"),u=n("2b4c"),l=u("iterator"),f=u("toStringTag"),p=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=o(d),h=0;h<v.length;h++){var y,m=v[h],g=d[m],b=a[m],w=b&&b.prototype;if(w&&(w[l]||s(w,l,p),w[f]||s(w,f,m),c[m]=p,g))for(y in r)w[y]||i(w,y,r[y],!0)}},be13:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},c366:function(t,e,n){var r=n("6821"),o=n("9def"),i=n("77f1");t.exports=function(t){return function(e,n,a){var s,c=r(e),u=o(c.length),l=i(a,u);if(t&&n!=n){while(u>l)if(s=c[l++],s!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},c3a5:function(t,e,n){},c69a:function(t,e,n){t.exports=!n("9e1e")&&!n("79e5")((function(){return 7!=Object.defineProperty(n("230e")("div"),"a",{get:function(){return 7}}).a}))},ca5a:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},cadf:function(t,e,n){"use strict";var r=n("9c6c"),o=n("d53b"),i=n("84f2"),a=n("6821");t.exports=n("01f9")(Array,"Array",(function(t,e){this._t=a(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},cb7c:function(t,e,n){var r=n("d3f4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},ce10:function(t,e,n){var r=n("69a8"),o=n("6821"),i=n("c366")(!1),a=n("613b")("IE_PROTO");t.exports=function(t,e){var n,s=o(t),c=0,u=[];for(n in s)n!=a&&r(s,n)&&u.push(n);while(e.length>c)r(s,n=e[c++])&&(~i(u,n)||u.push(n));return u}},d3f4:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},d53b:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},d8e8:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},e11e:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},fa5b:function(t,e,n){t.exports=n("5537")("native-function-to-string",Function.toString)},fab2:function(t,e,n){var r=n("7726").document;t.exports=r&&r.documentElement}}]);