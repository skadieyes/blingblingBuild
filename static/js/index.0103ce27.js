webpackJsonp([1],{0:function(t,e,n){t.exports=n("msSN")},1:function(t,e){},"5e9e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return i}),n.d(e,"mutations",function(){return a});var i=function(){return{enable:!0,type:"none",effect:"none"}},a={setType:function(t,e){t.type=e},setEffect:function(t,e){t.effect=e}}},"7iRl":function(t,e){},CJsk:function(t,e){},LOWA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SET_PAGE_SCROLL_POSITION",function(){return o}),n.d(e,"state",function(){return c}),n.d(e,"mutations",function(){return u}),n.d(e,"actions",function(){return l});var i=n("bOdI"),a=n.n(i),r=n("Dd8w"),s=n.n(r),o="SET_PAGE_SCROLL_POSITION",c=function(){return{scrollPostionMap:{}}},u=a()({},o,function(t,e){var n=e.pageId,i=e.scrollPosition;t.scrollPostionMap=s()({},t.scrollPostionMap,a()({},n,i))}),l={savePageScrollPosition:function(t,e){var n=t.commit,i=e.pageId,a=e.scrollPosition;n(o,{pageId:i,scrollPosition:a})}}},"M+Zi":function(t,e){},"N0M+":function(t,e){},"O+LY":function(t,e){},Osxi:function(t,e){},Regk:function(t,e){},Uz7q:function(t,e){t.exports={buildVersion:1556527902947,build:{ssr:!1,publicPath:"/",compress:!0,cssExtract:!0},middleware:{all:[],server:[],client:[]},router:{mode:"history",base:"/",pageTransition:{type:"fade",transitionClass:"fade"}},errorHandler:{defaultErrorMessage:"Internal Server Error",showRealErrorMessage:!1,errorPath:"/error"},serviceWorker:{enable:!0,swDest:"/Users/cat.mul/Code/lavas/blingblingaaa/dist//blingblingBuild/service-worker.js"},skeleton:{enable:!0,asyncCSS:!0}}},VfP6:function(t,e,n){var i={"./pageTransition.js":"5e9e","./scrollBehavior.js":"LOWA"};function a(t){return n(r(t))}function r(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(i)},a.resolve=r,t.exports=a,a.id="VfP6"},YX19:function(t,e){},ZES4:function(t,e){},maet:function(t,e){},msSN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("//Fk"),a=n.n(i),r=n("Gu7T"),s=n.n(r),o=n("Xxa5"),c=n.n(o),u=n("exGp"),l=n.n(u),h=n("/5sW"),f=n("1nuA"),d=function(){var t=l()(c.a.mark(function t(e){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();function p(t,e){var n={isClient:!0,app:e,store:t.store,route:t.to,from:t.from},i=t.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(t){var e=t.status,a=void 0===e?302:e,r=t.path,s=void 0===r?"":r,o=t.query,c=void 0===o?{}:o,u=t.external,l=void 0!==u&&u;n._redirected=!0,i({path:s,query:c,status:a,external:l})},n}var v=function(){var t=l()(c.a.mark(function t(e,n){var i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:i=0;case 1:if(!(i<e.length)){t.next=9;break}if(!n._redirected){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,m(e[i],n);case 6:i++,t.next=1;break;case 9:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}();function m(t,e){var n=void 0;return 2===t.length?n=new a.a(function(n,i){t(e,function(t,a){t?(e.error(t),i(t)):n(a)})}):(n=t(e))&&(n instanceof a.a||"function"==typeof n.then)||(n=a.a.resolve(n)),n}var b=n("Uz7q"),y=n.n(b),g=n("Dd8w"),w=n.n(g),x=n("p3jY"),_=n.n(x),C=n("/ocq"),S={name:"appshell",metaInfo:{title:"Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}],bodyAttrs:{"empty-appshell":void 0}}},A=n("XyMi"),M=Object(A.a)(S,function(){var t=this.$createElement;return(this._self._c||t)("div")},[],!1,null,null,null).exports,T=n("bOdI"),P=n.n(T),R={data:function(){return{name:"聊天气泡组件",loadingModel:[0,1,2],activeBub:0,timer:null,bubNumber:0,showLoadding:!1}},props:{direction:""},created:function(){},methods:{bubbling:function(){var t=this,e=this.loadingModel.length-1;this.timer=setInterval(function(){t.activeBub===t.loadingModel[e]?(t.activeBub=0,t.bubNumber=t.bubNumber+1):t.activeBub=t.activeBub+1,t.bubNumber>2&&clearInterval(t.timer)},1e3)},stopBubbling:function(){clearInterval(this.timer)}}};var k=function(t){n("O+LY")},E={name:"audio",components:{ChatBubble:Object(A.a)(R,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"chat-bubble":!0,"chat-bubble-right":"right"===t.direction,"chat-bubble-left":"left"===t.direction}},[t.showLoadding?n("div",{staticClass:"chat-bubble-loading"},t._l(t.loadingModel,function(e){return n("div",{key:e,staticClass:"chat-bubble-loading-item"},[n("font-awesome-icon",{class:{"chat-bubble-loading-item-icon":!0,"chat-bubble-loading-item-icon-active":e===t.activeBub},attrs:{icon:"circle"}})],1)}),0):t._e(),t._v(" "),t.showLoadding?t._e():t._t("default")],2)},[],!1,k,"data-v-41d6bdac",null).exports},computed:{},data:function(){var t;return t={name:"聊天窗",api:[]},P()(t,"name",""),P()(t,"describe",""),P()(t,"action",[]),P()(t,"direction","left"),P()(t,"audioCtx",null),P()(t,"AudioBufferSourceNode",null),P()(t,"document",null),P()(t,"buffer",null),P()(t,"analyserNode",null),P()(t,"analyserData",null),P()(t,"ctx",null),P()(t,"waveCtx",null),P()(t,"ctxWidth",500),P()(t,"ctxHeight",500),P()(t,"size",40),P()(t,"arcX",120),P()(t,"arcY",120),P()(t,"arcR",120),P()(t,"offSet",60),P()(t,"playMusic",!1),P()(t,"labels",null),t},created:function(){var t=this.$router.history.current.query.api;this.api=t,this.creatAudio()},mounted:function(){this.initCanvas(),this.drawLine(),this.drawSmileFace()},methods:{goBack:function(){this.$router.push("/chat-list")},getPoints:function(){for(var t=[],e=0;e<=this.size/2;e+=1){var n=this.arcR-Math.cos(2*Math.PI*e/this.size)*this.arcR,i=(this.arcY-Math.sqrt(Math.pow(this.arcR,2)-Math.pow(n-this.arcX,2))).toFixed(2),a=(Math.sqrt(Math.pow(this.arcR,2)-Math.pow(n-this.arcX,2))+this.arcY).toFixed(2);Math.asin(n*(Math.sin(Math.PI/2)/this.arcR)),Math.asin(n*(Math.sin(Math.PI/2)/this.arcR));t.push({x:n,y:i},{x:n,y:a})}return t},getLineTo:function(t,e){var n=Math.sin(t)*(e/Math.sin(Math.PI/2));return{lineToX:n,lineToY:Math.sqrt(Math.pow(e,2)-Math.pow(n,2))}},openGit:function(){window.open("https://github.com/skadieyes/BlingBlingToMe")},drawSmileFace:function(){this.ctx&&(this.ctx.beginPath(),this.ctx.arc(this.arcX+this.offSet,this.arcY+this.offSet,this.arcR,0,2*Math.PI,!0),this.ctx.moveTo(2*this.arcX+this.offSet-15,this.arcX+this.offSet),this.ctx.arc(this.arcR+this.offSet,this.arcR+this.offSet,this.arcR-15,0,Math.PI,!1),this.ctx.moveTo(this.arcR+this.offSet-5,this.arcR+this.offSet-15),this.ctx.arc(this.arcR+this.offSet-10,this.arcR+this.offSet-15,5,0,Math.PI,!0),this.ctx.moveTo(this.arcR+this.offSet+15,this.arcR+this.offSet-15),this.ctx.arc(this.arcR+this.offSet+10,this.arcR+this.offSet-15,5,0,Math.PI,!0),this.ctx.stroke())},drawLine:function(){this.line=this.ctx.createLinearGradient(0,0,0,this.ctxHeight),this.line.addColorStop(0,"#f5222d"),this.line.addColorStop(.5,"#ffbb96"),this.line.addColorStop(1,"#fff566")},drawAudio:function(t){this.ctx.clearRect(0,0,this.ctxWidth,this.ctxHeight),this.ctx.fillStyle=this.line;this.size;for(var e=this.getPoints(),n=0;n<=this.size;n++){var i=t[n]/256*60;this.ctx.beginPath();var a=e[n].x+this.offSet,r=Number(e[n].y)+this.offSet;this.ctx.moveTo(a,r);var s=void 0,o=void 0,c=this.arcX+this.offSet,u=this.arcY+this.offSet;e[n].x>this.arcR&&(s=(this.arcR+i)/this.arcR*(a-c)+c),Number(e[n].y)>this.arcR&&(o=(this.arcR+i)/this.arcR*(r-u)+u),e[n].x<this.arcR&&(s=c-(this.arcR+i)/this.arcR*(c-a)),Number(e[n].y)<this.arcR&&(o=u-(this.arcR+i)/this.arcR*(u-r)),e[n].x===this.arcR&&(s=c,o=Number(e[n].y)<this.arcR?r-i:u+this.arcR+i),Number(e[n].y)===this.arcR&&(o=u,s=e[n].x<this.arcR?a-i:c+this.arcR+i),this.ctx.lineTo(s,o),this.ctx.lineWidth=5,this.ctx.strokeStyle=this.line,this.ctx.stroke()}},initCanvas:function(){var t=this.$refs.smile_face;t.width=this.ctxWidth,t.height=this.ctxHeight,t.getContext&&(this.ctx=t.getContext("2d"))},initWave:function(){var t=this.$refs.wave;t.width=this.waveCtxWidth,t.height=this.waveCtxHeight,t.getContext&&(this.waveCtx=t.getContext("2d"))},creatAudio:function(){var t=this;return new a.a(function(e){t.audioCtx=new AudioContext,t.buffer=null,t.playMusic&&(t.AudioBufferSourceNode.stop(),t.playMusic=!1),t.AudioBufferSourceNode=t.audioCtx.createBufferSource(),t.audioCtx.resume().then(function(){e()})})},getAudioFile:function(t){var e=this,n=t.target.files[0];if("audio/mp3"===n.type){var i=n.name;this.labels=i,this.creatAudio().then(function(){e.decodeAudioToGetBuffer(n)})}else this.labels="你选的不是mp3诶"},decodeAudioToGetBuffer:function(t){var e=this,n=new FileReader;n.onload=function(t){e.audioCtx.decodeAudioData(t.target.result,function(t){e.buffer=t},function(t){console.log(t)})},n.readAsArrayBuffer(t)},initAnalyserNode:function(){this.analyserNode=this.audioCtx.createAnalyser(),this.analyserData=new Uint8Array(this.analyserNode.frequencyBinCount)},getAnalyser:function(){this.playMusic&&(this.analyserNode.getByteFrequencyData(this.analyserData),this.drawAudio(this.analyserData),this.drawSmileFace(),requestAnimationFrame(this.getAnalyser))},playAudioBuffer:function(){this.playMusic=!0,this.initAnalyserNode(),this.getAnalyser(),this.AudioBufferSourceNode.buffer=this.buffer,this.AudioBufferSourceNode.connect(this.audioCtx.destination),this.AudioBufferSourceNode.connect(this.analyserNode),this.AudioBufferSourceNode.loop=!0,this.AudioBufferSourceNode.start(0)}}};var L=function(t){n("Osxi")},B=Object(A.a)(E,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"audio"},[n("div",{staticClass:"audio-content"},[n("canvas",{ref:"smile_face",attrs:{id:"smile-face"}})]),t._v(" "),n("div",{staticClass:"audio-title"},[t._v("\n    play songs\n    "),n("span",{staticClass:"audio-songs-labels"},[t._v(t._s(t.labels))]),t._v(" "),n("div",{staticClass:"audio-songs"},[n("div",{staticClass:"audio-songs-area"},[n("span",{staticClass:"audio-songs-area-label"},[t._v("select mp3")]),t._v(" "),n("input",{staticClass:"audio-songs-area-input",attrs:{id:"loadfile",type:"file"},on:{change:t.getAudioFile}})]),t._v(" "),n("div",{staticClass:"audio-songs-play"},[t.buffer&&!t.playMusic?n("button",{staticClass:"audio-songs-play-btn",on:{click:function(e){t.playAudioBuffer()}}},[t._v("play")]):t._e()]),t._v(" "),n("div")]),t._v(" "),t._m(0)]),t._v(" "),n("div",{staticClass:"audio-github",on:{click:t.openGit}},[n("img",{attrs:{src:"static/img/github.png"}}),t._v(" "),n("div",{staticClass:"audio-github-name"},[t._v("skadyeyes")])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"audio-name"},[e("div",[this._v("音频可视化/Audio visualization")]),this._v(" "),e("div",[this._v("选择一首mp3, 然后播放它吧")]),this._v(" "),e("div",[this._v("Choosing a songs and playing it, you will see the sunshine")])])}],!1,L,"data-v-0e21f2e0",null).exports;var I=function(t){n("ZES4")},$={name:"chatList",components:{ChatItem:Object(A.a)({data:function(){return{name:"聊天列表卡片组件"}},props:{cardTitle:null,cardLabel:null,cardItem:null},methods:{}},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat-item"},[n("div",{staticClass:"chat-item-photo"}),t._v(" "),n("div",{staticClass:"chat-item-label"},[n("div",{staticClass:"chat-item-name"},[t._v(t._s(t.cardTitle))]),t._v(" "),n("div",{staticClass:"chat-item-describe"},[t._v(t._s(t.cardLabel))])])])},[],!1,I,"data-v-cc6f4c86",null).exports},computed:{},data:function(){return{name:"列表",list:[],action:[]}},created:function(){this.getChatList()},methods:{getChatList:function(){var t=this;this.$http.get("/blingblingBuild/static/db/userList.json").then(function(e){var n=e.body.teacher;t.list=n}).catch(function(t){console.log(t)})},goChat:function(t){var e=t.api;this.$router.push("/chat-window?api="+e)}}};var O=function(t){n("7iRl")},N=Object(A.a)($,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat-list"},[n("div",{staticClass:"chat-list-head"},[t._v("BLing BLing")]),t._v(" "),n("div",{staticClass:"chat-list-content"},t._l(t.list,function(e){return n("div",{key:e.id,staticClass:"chat-list-content-items",on:{click:function(n){t.goChat(e)}}},[n("chat-item",{attrs:{cardTitle:e.name,cardLabel:e.label,action:e.action}})],1)}),0)])},[],!1,O,"data-v-7a2283b0",null).exports,j=n("fZjL"),q=n.n(j),W={name:"error",computed:{message:function(){return this.$route.params.error||"您访问的路径不存在"}},created:function(){var t=this.$route.query;0!==q()(t).length&&this.$router.replace({name:"error",params:t})}};var D=function(t){n("N0M+")},F=Object(A.a)(W,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-error"},[e("p",[this._v(this._s(this.message))])])},[],!1,D,"data-v-b5544618",null).exports;var X={name:"index",metaInfo:{title:"Home",titleTemplate:"%s - Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}]},asyncData:function(){var t=l()(c.a.mark(function t(e){e.store,e.route;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()};var Y=function(t){n("M+Zi")},U=[{path:"/appshell",component:M,meta:{},name:"appshell"},{path:"/audio-view",component:B,meta:{},name:"audioView"},{path:"/chat-list",component:N,meta:{},name:"chatList"},{path:"/",component:Object(A.a)(X,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-index"},[e("h2",[this._v("LAVAS")]),this._v(" "),e("h4",[this._v("[ˈlɑ:vəz]")])])}],!1,Y,"data-v-38d8f96a",null).exports,meta:{},name:"index"},{path:"/error",component:F,meta:{},name:"error",alias:"*"}];h.a.use(C.a);var V=function(t,e,n){if(n)return n;var i={};return t.hash&&(i.selector=t.hash),t.matched.some(function(t){return t.meta.scrollToTop})&&(i.x=0,i.y=0),i},G=U.filter(function(t){return t.keepAlive||t.meta.keepAlive}).map(function(t){return t.name});var z=n("woOf"),H=n.n(z),Z=n("BO1k"),J=n.n(Z),K=n("NYxO");h.a.use(K.a);var Q=n("VfP6"),tt=Q.keys(),et={},nt=!0,it=!1,at=void 0;try{for(var rt,st=J()(tt);!(nt=(rt=st.next()).done);nt=!0){var ot=rt.value;if("./index.js"===ot){et=yt(ot);break}}}catch(t){it=!0,at=t}finally{try{!nt&&st.return&&st.return()}finally{if(it)throw at}}if("function"!=typeof et){et.modules=et.modules||{};var ct=!0,ut=!1,lt=void 0;try{for(var ht,ft=J()(tt);!(ct=(ht=ft.next()).done);ct=!0){var dt=ht.value;if("./index.js"!==dt){var pt=dt.replace(/^\.\//,"").replace(/\.js$/,""),vt=pt.split("/"),mt=gt(et,vt);mt[pt=vt.pop()]=yt(dt),mt[pt].namespaced=!0}}}catch(t){ut=!0,lt=t}finally{try{!ct&&ft.return&&ft.return()}finally{if(ut)throw lt}}}var bt=et instanceof Function?et:function(){return new K.a.Store(H()({},et,{state:et.state instanceof Function?et.state():{}}))};function yt(t){var e=Q(t),n=e.default||e;if(n.commit)throw new Error("[lavas] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[lavas] state should be a function in store/"+t.replace("./",""));return n}function gt(t,e){if(1===e.length)return t.modules;var n=e.shift(),i=t.modules[n]=t.modules[n]||{};return i.namespaced=!0,i.modules=i.modules||{},gt(i,e)}var wt={name:"updateToast",props:{text:{type:String,default:"站点发生更新，请手动刷新"}},data:function(){return{show:!1}},mounted:function(){window.addEventListener("sw.update",this.handleUpdate)},beforeDestroy:function(){window.removeEventListener("sw.update",this.handleUpdate)},methods:{handleUpdate:function(t){this.show=!0},handleRefresh:function(){window.location.reload()}}};var xt=function(t){n("YX19")},_t=Object(A.a)(wt,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"popup"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"update-toast"},[e("span",[this._v(this._s(this.text))]),this._v(" "),e("span",{staticClass:"update-toast-close-btn",on:{click:this.handleRefresh}},[e("i",{staticClass:"iconfont icon-refresh"})])])])},[],!1,xt,"data-v-4364d9fc",null).exports,Ct=n("8+8L");h.a.use(Ct.a);var St={name:"app",components:{UpdateToast:_t},computed:w()({},Object(K.c)("pageTransition",{pageTransitionType:function(t){return t.type},pageTransitionEffect:function(t){return t.effect}}),Object(K.c)("scrollBehavior",{scrollPostionMap:function(t){return t.scrollPostionMap}}),{pageTransitionClass:function(){return"transition-"+this.pageTransitionType},routerViewKey:function(){var t=this.$route,e=t.name,n=t.params,i=q()(n);return i.length?e+i.reduce(function(t,e){return t+n[e]},""):null}}),data:function(){return{keepAlivePages:G}},methods:w()({},Object(K.b)("scrollBehavior",["savePageScrollPosition"]),{restoreContainerScrollPosition:function(t,e){t.classList.add("app-view-scroll-enabled"),t.scrollTop=e},restoreBodyScrollPosition:function(t,e){t.classList.remove("app-view-scroll-enabled"),document.body.scrollTop=document.documentElement.scrollTop=e},handleBeforeEnter:function(t){var e=this,n=t.dataset.pageId,i=(this.scrollPostionMap[n]||{}).y,a=void 0===i?0:i;h.a.nextTick(function(){e.restoreContainerScrollPosition(t,a)})},handleAfterEnter:function(t){var e=t.dataset.pageId,n=(this.scrollPostionMap[e]||{}).y,i=void 0===n?0:n;this.restoreBodyScrollPosition(t,i)},handleBeforeLeave:function(t){var e=t.dataset.pageId,n=document.body.scrollTop||document.documentElement.scrollTop;this.restoreContainerScrollPosition(t,n),this.savePageScrollPosition({pageId:e,scrollPosition:{y:n}})}})};var At=function(t){n("maet")},Mt=Object(A.a)(St,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:t.pageTransitionEffect},on:{"before-enter":t.handleBeforeEnter,"after-enter":t.handleAfterEnter,"before-leave":t.handleBeforeLeave}},[n("keep-alive",{attrs:{include:[].concat(t.keepAlivePages)}},[n("router-view",{key:t.routerViewKey,class:["app-view",t.pageTransitionClass],attrs:{"data-page-id":t.$route.fullPath}})],1)],1),t._v(" "),n("update-toast")],1)},[],!1,At,null,null).exports,Tt=n("C/JF"),Pt=n("fhbW"),Rt=n("1e6/");Tt.c.add(Pt.b,Pt.a),h.a.component("font-awesome-icon",Rt.a),h.a.config.productionTip=!1,h.a.use(_.a),h.a.config.productionTip=!1;var kt={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,t.$nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}};var Et=function(t){n("Regk")},Lt=Object(A.a)(kt,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,Et,"data-v-2e9576fc",null).exports,Bt=n("p5k0"),It=n.n(Bt),$t=n("XGXE"),Ot=n.n($t);n("MU8w"),n("CJsk");It.a.shim(),Ot.a.shim();var Nt=h.a.prototype.$loading=new h.a(Lt).$mount(),jt=function(){var t=function(){var t=new C.a({mode:"history",base:"/",scrollBehavior:V,routes:U});return t.beforeEach(function(e,n,i){t.app.$store&&t.app.$store.state.pageTransition.enable&&(t.app.$store.commit("pageTransition/setType","fade"),t.app.$store.commit("pageTransition/setEffect","fade")),i()}),t}(),e=bt();return{App:h.a.extend(w()({router:t,store:e},Mt)),router:t,store:e}}(),qt=jt.App,Wt=jt.router,Dt=jt.store,Ft=y.a.build,Xt=Ft.ssr,Yt=Ft.cssExtract,Ut=y.a.middleware,Vt=void 0===Ut?{}:Ut,Gt=y.a.skeleton,zt=Gt.enable,Ht=Gt.asyncCSS,Zt=void 0;window.__INITIAL_STATE__&&Dt.replaceState(window.__INITIAL_STATE__),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),document.body.appendChild(Nt.$el),h.a.mixin({beforeRouteUpdate:function(){var t=l()(c.a.mark(function t(e,n,i){var a;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(a=this.$options.asyncData)?(Nt.start(),a.call(this,{store:this.$store,route:e}).then(function(){Nt.finish(),i()}).catch(i)):i();case 2:case"end":return t.stop()}},t,this)}));return function(e,n,i){return t.apply(this,arguments)}}()});var Jt=!0;if(function(){var t=this;Wt.beforeEach(function(){var e=l()(c.a.mark(function e(n,i,a){var r,o,u,l,h,m,b;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(Jt||n.path!==i.path){t.next=2;break}return t.abrupt("return",a());case 2:return Jt=!1,r=Wt.getMatchedComponents(n),o=[].concat(s()(Vt.all||[]),s()(Vt.client||[]),s()(r.filter(function(t){var e=t.middleware;return!!e}).reduce(function(t,e){var n=e.middleware;return t.concat(n)},[]))),t.next=7,d(o);case 7:if(u=t.sent,!(l=o.find(function(t){return"function"!=typeof u[t]}))){t.next=11;break}throw new Error("Unknown middleware "+l);case 11:return h=!1,m=p({to:n,from:i,store:Dt,next:function(t){if(Nt.finish&&Nt.finish(),!h){if(h=!0,t.external)return t.query=Object(f.stringify)(t.query),t.path=t.path+(t.query?"?"+t.query:""),window.location.replace(t.path),a();a(t)}}},Zt),b=o.map(function(t){return u[t]}),t.next=17,v(b,m);case 17:h||a();case 18:case"end":return t.stop()}},e,t)}));return function(t,n,i){return e.apply(this,arguments)}}())}(),!document.body.hasAttribute("empty-appshell")&&Xt)Zt=new qt,Wt.onReady(function(){Qt(),Zt.$mount("#app")});else{var Kt=zt&&Ht&&Yt;window.mountLavas=function(){setTimeout(function(){var t=document.querySelector("#app");t&&(t.innerHTML=""),Zt.$mount("#app")},0)},Qt(),Zt=new qt,(Xt||!Kt||Kt&&window.STYLE_READY)&&window.mountLavas()}function Qt(){var t=this;Wt.beforeResolve(function(e,n,i){var r=Wt.getMatchedComponents(e),s=Wt.getMatchedComponents(n),o=!1,u=r.filter(function(t,e){return o||(o=s[e]!==t)});if(!u.length)return i();Nt.start(),a.a.all(u.filter(function(t){return t.asyncData&&(!t.asyncDataFetched||!e.meta.keepAlive)}).map(function(){var n=l()(c.a.mark(function n(i){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.asyncData({store:Dt,route:e});case 2:i.asyncDataFetched=!0;case 3:case"end":return t.stop()}},n,t)}));return function(t){return n.apply(this,arguments)}}())).then(function(){Nt.finish(),i()}).catch(i)})}}},[0]);
//# sourceMappingURL=index.0103ce27.js.map