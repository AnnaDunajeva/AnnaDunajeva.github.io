!function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dist",o(o.s=10)}([function(t,e,o){"use strict";var r,n=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}t[e]=o}return t[e]}}(),a=[];function c(t){for(var e=-1,o=0;o<a.length;o++)if(a[o].identifier===t){e=o;break}return e}function p(t,e){for(var o={},r=[],n=0;n<t.length;n++){var i=t[n],p=e.base?i[0]+e.base:i[0],l=o[p]||0,x="".concat(p," ").concat(l);o[p]=l+1;var s=c(x),h={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(a[s].references++,a[s].updater(h)):a.push({identifier:x,updater:v(h,e),references:1}),r.push(x)}return r}function l(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var n=o.nc;n&&(r.nonce=n)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var x,s=(x=[],function(t,e){return x[t]=e,x.filter(Boolean).join("\n")});function h(t,e,o,r){var n=o?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=s(e,n);else{var i=document.createTextNode(n),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e,o){var r=o.css,n=o.media,i=o.sourceMap;if(n?t.setAttribute("media",n):t.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var f=null,u=0;function v(t,e){var o,r,n;if(e.singleton){var i=u++;o=f||(f=l(e)),r=h.bind(null,o,i,!1),n=h.bind(null,o,i,!0)}else o=l(e),r=d.bind(null,o,e),n=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(o)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else n()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=n());var o=p(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<o.length;r++){var n=c(o[r]);a[n].references--}for(var i=p(t,e),l=0;l<o.length;l++){var x=c(o[l]);0===a[x].references&&(a[x].updater(),a.splice(x,1))}o=i}}}},function(t,e,o){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=function(t,e){var o=t[1]||"",r=t[3];if(!r)return o;if(e&&"function"==typeof btoa){var n=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(p," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[o].concat(i).concat([n]).join("\n")}var a,c,p;return[o].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},e.i=function(t,o,r){"string"==typeof t&&(t=[[null,t,""]]);var n={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(n[a]=!0)}for(var c=0;c<t.length;c++){var p=[].concat(t[c]);r&&n[p[0]]||(o&&(p[2]?p[2]="".concat(o," and ").concat(p[2]):p[2]=o),e.push(p))}},e}},function(t,e,o){var r=o(0),n=o(3);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var i={insert:"head",singleton:!1};r(n,i);t.exports=n.locals||{}},function(t,e,o){(e=o(1)(!1)).push([t.i,'*{box-sizing:border-box;margin:0;padding:0;font-family:"Work Sans",sans-serif;--main-dark-color: #2a272e;--main-bg-color: #807b85;--text-hover-color: #ff0080;--text-shadow-color: #3cf2ff;--light-grey-purple: #aeabb3;--text-color-white: #d7d1db;--container-shadow: 11px 17px 49px -4px rgba(0,0,0,0.6)}* ::-webkit-scrollbar{width:14px;height:10px}* ::-webkit-scrollbar-button{width:0px;height:0px}* ::-webkit-scrollbar-thumb{background:#9e99a3;border:0px solid transparent;border-radius:0px}* ::-webkit-scrollbar-thumb:hover,* ::-webkit-scrollbar-thumb:active{background:#aca8b1}* ::-webkit-scrollbar-track{background:#5d5a5e;border:0px none transparent;border-radius:0px}* ::-webkit-scrollbar-corner{background:transparent}body{width:100vw;color:var(--text-color-white);overflow-x:hidden;background:var(--main-dark-color)}.logo{letter-spacing:2px;word-spacing:6px}.logo:hover{color:var(--text-hover-color);text-shadow:3px 3px 0px var(--text-shadow-color)}.flex-row-vertical-center{display:flex;flex-direction:row;align-items:center}.nav{z-index:100;display:flex;height:50px;justify-content:space-between;position:sticky;top:0;background-color:#181518}.nav button,.nav a{border:none;background-color:transparent;text-decoration:none;font-size:17px;padding:0 20px;color:var(--text-color-white);text-transform:uppercase}.nav button:hover,.nav a:hover{color:var(--text-hover-color);text-shadow:3px 3px 0px var(--text-shadow-color)}.nav a.logo{font-size:22px}.nav button:hover,.nav button:focus{cursor:pointer;outline:none}.container-first{height:calc(100vh - 50px);width:100vw}.button-main{border:1px solid var(--text-color-white)}.button-main:hover{background-color:var(--text-color-white);color:var(--main-dark-color) !important}.button-main:focus-within{outline:none;background-color:var(--text-hover-color);color:#fff !important;border:1px solid var(--text-hover-color);box-shadow:0 0 0 .15rem var(--main-dark-color),0 0 0 .25rem var(--text-shadow-color)}@media only screen and (max-width: 501px){* ::-webkit-scrollbar{width:7px;height:10px}.nav{height:16vw}.nav button,.nav a{font-size:3vw;padding:0 2vw}.nav a.logo{font-size:3.7vw}.container-first{height:calc(100vh - 16vw)}}@media only screen and (min-width: 500px)and (max-width: 650px){.nav button,.nav a{font-size:2.5vw}.nav a.logo{font-size:3.4vw}}body,html{overflow:hidden;height:100%;background-color:var(--main-bg-color)}.viewport{height:100%;width:100%;overflow-x:hidden;overflow-y:auto;position:relative;-webkit-overflow-scrolling:touch;perspective:8px}.parallax-container{transform-style:preserve-3d}.container-header{transform:scale(1.6);position:relative;background:radial-gradient(circle, #513052 0%, #4d294b 4%, #382337 12%, #2d222e 27%, var(--main-dark-color) 100%)}.lines-bg{height:100%;width:100vw}.header-main{transform:translateZ(4px) scale(0.5);font-size:100px;position:absolute;top:-1vh;left:0;display:flex;justify-content:center;align-items:center}.header-main h3{position:absolute;transition:font-size .1s linear}.header-main h3:hover{font-size:130px;transition:font-size .1s linear}.about-me-container{transform:translateZ(5px) scale(0.375);margin-top:-30vh;height:100vh;width:100vw;background:var(--main-bg-color)}.parallax-about-me-container{height:100vh;width:100vw;background:transparent;transform:translateZ(6px) scale(0.25);margin-top:-100vh}.about-me-data-container{margin:0 auto;display:flex;width:885px;height:520px;background-color:var(--main-dark-color);color:var(--text-color-white);-webkit-box-shadow:var(--container-shadow);-moz-box-shadow:var(--container-shadow);box-shadow:var(--container-shadow)}.profile-img{object-fit:cover;height:inherit}.about-text{position:relative}.about-text h3{position:absolute;bottom:5px;left:45px;font-size:47px;text-transform:uppercase;transform-origin:left;transform:rotate(-90deg)}.about-text p{font-size:22px;line-height:1.5em;margin:40px 50px 30px 110px}.github-icon{height:40px;width:40px;fill:var(--text-color-white);position:absolute;bottom:30px;left:110px}.github-icon:hover{cursor:pointer;fill:var(--text-hover-color);filter:drop-shadow(3px 3px 0px var(--text-shadow-color))}.glitch{text-transform:uppercase;color:var(--text-color-white)}.glitch::before,.glitch::after{content:attr(data-text);position:absolute;top:0;left:0;right:0;overflow:hidden;color:var(--text-color-white);clip:rect(0, 900px, 0, 0)}.glitch::before{left:2px;text-shadow:3px 0 #105bb1;animation:glitch-effect 4s infinite linear alternate-reverse}.glitch::after{left:1px;text-shadow:-3px 0 var(--text-hover-color);animation:glitch-effect 3s infinite linear alternate-reverse}@keyframes glitch-effect{0%{clip:rect(34px, 9999px, 9px, 0)}4%{clip:rect(87px, 9999px, 68px, 0)}8%{clip:rect(11px, 9999px, 112px, 0)}12%{clip:rect(53px, 9999px, 17px, 0)}16%{clip:rect(115px, 9999px, 45px, 0)}20%{clip:rect(13px, 9999px, 53px, 0)}24%{clip:rect(64px, 9999px, 98px, 0)}28%{clip:rect(84px, 9999px, 11px, 0)}32%{clip:rect(85px, 9999px, 43px, 0)}36%{clip:rect(40px, 9999px, 29px, 0)}40%{clip:rect(56px, 9999px, 51px, 0)}44%{clip:rect(70px, 9999px, 84px, 0)}48%{clip:rect(49px, 9999px, 33px, 0)}52%{clip:rect(66px, 9999px, 62px, 0)}56%{clip:rect(15px, 9999px, 120px, 0)}60%{clip:rect(100px, 9999px, 17px, 0)}64%{clip:rect(59px, 9999px, 52px, 0)}68%{clip:rect(90px, 9999px, 95px, 0)}72%{clip:rect(101px, 9999px, 13px, 0)}76%{clip:rect(114px, 9999px, 103px, 0)}80%{clip:rect(98px, 9999px, 46px, 0)}84%{clip:rect(110px, 9999px, 79px, 0)}88%{clip:rect(87px, 9999px, 23px, 0)}92%{clip:rect(118px, 9999px, 12px, 0)}96%{clip:rect(110px, 9999px, 46px, 0)}100%{clip:rect(6px, 9999px, 3px, 0)}}@keyframes glitch-effect-mobile{0%{clip:rect(106px, 9999px, 64px, 0)}4%{clip:rect(38px, 9999px, 79px, 0)}8%{clip:rect(78px, 9999px, 125px, 0)}12%{clip:rect(55px, 9999px, 81px, 0)}16%{clip:rect(121px, 9999px, 63px, 0)}20%{clip:rect(50px, 9999px, 27px, 0)}24%{clip:rect(116px, 9999px, 99px, 0)}28%{clip:rect(79px, 9999px, 87px, 0)}32%{clip:rect(76px, 9999px, 91px, 0)}36%{clip:rect(57px, 9999px, 121px, 0)}40%{clip:rect(108px, 9999px, 3px, 0)}44%{clip:rect(26px, 9999px, 34px, 0)}48%{clip:rect(118px, 9999px, 37px, 0)}52%{clip:rect(110px, 9999px, 24px, 0)}56%{clip:rect(89px, 9999px, 85px, 0)}60%{clip:rect(9px, 9999px, 88px, 0)}64%{clip:rect(128px, 9999px, 36px, 0)}68%{clip:rect(32px, 9999px, 126px, 0)}72%{clip:rect(55px, 9999px, 86px, 0)}76%{clip:rect(115px, 9999px, 13px, 0)}80%{clip:rect(121px, 9999px, 36px, 0)}84%{clip:rect(86px, 9999px, 121px, 0)}88%{clip:rect(38px, 9999px, 80px, 0)}92%{clip:rect(31px, 9999px, 15px, 0)}96%{clip:rect(79px, 9999px, 21px, 0)}100%{clip:rect(33px, 9999px, 30px, 0)}}.dash-long{stroke-dasharray:122}.dash-medium{stroke-dasharray:90}.dash-medium-long{stroke-dasharray:67}.dash-short{stroke-dasharray:37}.dash-animation{animation:line-move 6s linear;animation-iteration-count:infinite}@keyframes line-move{to{stroke-dashoffset:2000}}@media only screen and (max-width: 500px){.header-main{font-size:13vw;top:-1vh;left:10px}.header-main h3:hover{font-size:15vw}.about-me-container{transform:translateZ(4px) scale(0.5);margin-top:0vh;height:100vh}.parallax-about-me-container{transform:translateZ(5px) scale(0.375);height:100vh;margin-top:-100vh}.about-me-data-container{margin:0 auto;margin-top:-47vw;width:85vw;height:52vh;display:block}.profile-img{object-fit:cover;width:inherit}.about-text{background:var(--main-dark-color);padding:3vh}.about-text h3{position:static;font-size:5.5vw;margin-bottom:2vh;text-transform:uppercase;transform:none}.about-text p{font-size:3.6vw;line-height:1.5em;margin:0 0 2vh 0}.github-icon{height:30px;width:30px;fill:var(--text-color-white);position:static}.glitch::before{left:2px;text-shadow:3px 0 #105bb1;animation:glitch-effect-mobile 4s infinite linear alternate-reverse}.glitch::after{left:1px;text-shadow:-3px 0 var(--text-hover-color);animation:glitch-effect-mobile 3s infinite linear alternate-reverse}}@media only screen and (min-width: 501px)and (max-width: 1000px){.header-main{font-size:9vw}.header-main h3:hover{font-size:11vw}.about-me-data-container{width:80vw;height:50vw}.profile-img{object-fit:cover;width:40%}.about-text{background:var(--main-dark-color);padding:5vw}.about-text h3{position:static;font-size:3.5vw;margin-bottom:2vh;text-transform:uppercase;transform:none}.about-text p{font-size:2vw;line-height:1.5em;margin:0 0 2vh 0}.github-icon{height:40px;width:40px;position:absolute;bottom:30px;left:40px}}@media only screen and (min-width: 1001px)and (max-width: 1200px){.about-me-data-container{width:70vw;height:40vw}.profile-img{object-fit:cover;width:40%}.about-text{padding:50px}.about-text h3{position:static;font-size:3vw;margin-bottom:2vh;text-transform:uppercase;transform:none}.about-text p{font-size:1.7vw;line-height:1.5em;margin:0 0 2vh 0}.github-icon{height:40px;width:40px;position:absolute;bottom:30px;left:40px}}',""]),t.exports=e},,,,,,,function(t,e,o){"use strict";o.r(e);o(2);const r=(t,e)=>{t.scrollTo({top:e,behavior:"smooth"})},n=document.querySelector(".viewport"),i=document.querySelector(".button-about"),a=n.scrollHeight,c=n.clientHeight;let p=n.scrollTop,l=a-n.scrollTop===c,x=!l;const s=t=>{p=t};n.addEventListener("scroll",()=>{console.log("prevScrollY ",p,"scrollY ",n.scrollTop,"onBotton ",l,x,a-n.scrollTop,c),a-n.scrollTop<=c+1&&(l=!0,x=!1,s(n.scrollTop)),0===n.scrollTop&&(l=!1,x=!0,s(0)),n.scrollTop>p+10&&!l?(l=!0,x=!1,r(n,c+100)):n.scrollTop<p-10&&!x&&(x=!0,l=!1,r(n,0))}),i.addEventListener("click",()=>{event.preventDefault(),r(n,c+100)})}]);