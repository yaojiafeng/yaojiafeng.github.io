webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=["src/assets/music/happy.mp3","src/assets/music/circulation.mp3"],o={name:"Happy",data:function(){return{girlRotate:!1,boyRotate:!1,timer:null}},created:function(){},mounted:function(){this.preloadAudio(i)},methods:{preloadAudio:function(t){(Array.isArray(t)?t:[t]).forEach(function(t){new Audio(t).preload="load"})},_random:function(t,e){return Math.floor(Math.random()*(e-t))+t},playAudio1:function(){document.getElementById("audio").play()},playAudio2:function(){document.getElementById("audio1").play()},go:function(){var t=this;this.playAudio1(),this.$anime({targets:this.$refs.boy,left:600,duration:4500,easing:"linear",complete:function(){t.moveBg()}})},go2:function(){this.$anime({targets:this.$refs.boy1,left:162,duration:2e3,easing:"linear",complete:function(){}})},go3:function(){var t=this;this.$anime({targets:this.$refs.boy1,left:300,top:300,duration:2e3,easing:"linear",complete:function(){t.go4()}})},go4:function(){var t=this;this.$anime({targets:this.$refs.boy1,left:406,duration:2e3,easing:"linear",complete:function(){t.$refs.boy1.style.animationPlayState="paused",t.$refs.boy1.style.opacity=0,t.$refs.boy2.style.opacity=1,setTimeout(function(){t.rotate()},2e3)}})},moveBg2:function(){var t=this;this.$anime({targets:this.$refs["bg-warp"],translateX:"-2048px",duration:6e3,easing:"linear",complete:function(){t.go3()}})},closeDoor:function(){this.$anime({targets:this.$refs.leftDoor,left:[-65,0],duration:1e3,easing:"linear",complete:function(){}}),this.$anime({targets:this.$refs.rightDoor,left:[130,65],duration:1e3,easing:"linear",complete:function(){}})},openDoor:function(){var t=this;this.$anime({targets:this.$refs.leftDoor,left:-65,duration:1e3,easing:"linear",complete:function(){}}),this.$anime({targets:this.$refs.rightDoor,left:130,duration:1e3,easing:"linear",complete:function(){t.comeIn()}})},moveBg:function(){var t=this;this.$anime({targets:this.$refs["bg-warp"],translateX:"-926px",duration:6e3,easing:"linear",complete:function(){t.birdFly(),t.openDoor()}})},comeIn:function(){var t=this;this.$anime({targets:this.$refs.boy,top:350,opacity:0,duration:2e3,easing:"linear",complete:function(){setTimeout(function(){t.goOut()},1e3)}})},goOut:function(){var t=this;this.$anime({targets:this.$refs.boy1,top:[350,390],opacity:[0,1],duration:2e3,easing:"linear",complete:function(){t.closeDoor(),t.go2(),t.moveBg2()}})},rotate:function(){var t=this;this.girlRotate=!0,this.boyRotate=!0,this.flowerFly();var e=this.$refs.end;setTimeout(function(){t.playAudio2(),setTimeout(function(){e.style.opacity=1,t.$anime({targets:e,top:[-300,176],duration:3e3,easing:"easeInOutSine",complete:function(){}})},3e4),setTimeout(function(){clearInterval(t.timer)},57e3)},2e3)},birdFly:function(){this.$refs.bird.style.opacity=1,this.$anime({targets:this.$refs.bird,left:[1024,290],duration:6e3,easing:"linear",complete:function(){}})},flowerFly:function(){var t=this;this.timer=setInterval(function(){for(var e=0;e<6;e++)t.$refs["flower"+(e+1)].forEach(function(e){if(e.dataset.flag){if(e.style.top=parseFloat(e.style.top)+3+"px",parseFloat(e.style.left)>=100&&parseFloat(e.style.left)<=234&&parseFloat(e.style.top)>=568&&(e.style.top="568px",e.dataset.flag=""),parseFloat(e.style.left)>=234&&parseFloat(e.style.left)<=337){var a=100/76,s=parseFloat(e.style.left)-234;parseFloat(e.style.top)>=592-s*a&&(e.style.top=592-s*a+"px",e.dataset.flag="")}if(parseFloat(e.style.left)>=337&&parseFloat(e.style.left)<=656&&(parseFloat(e.style.left)>=345&&parseFloat(e.style.left)<=648&&(0==e.dataset.t&&parseFloat(e.style.top)>=516&&(e.style.zIndex=20,e.style.top="516px",e.dataset.flag=""),1==e.dataset.t&&parseFloat(e.style.top)>=458&&(e.style.top="458px",e.dataset.flag="")),parseFloat(e.style.left)>=337&&parseFloat(e.style.left)<345||parseFloat(e.style.left)>648&&parseFloat(e.style.left)<=656)){var i=t._random(458,517);parseFloat(e.style.top)>=i&&(e.style.top=i+"px",e.dataset.flag="")}if(parseFloat(e.style.left)>=656&&parseFloat(e.style.left)<=772){var o=772-parseFloat(e.style.left);parseFloat(e.style.top)>=592-o*(100/76)&&(e.style.top=592-o*(100/76)+"px",e.dataset.flag="")}parseFloat(e.style.left)>=772&&parseFloat(e.style.left)<=900&&parseFloat(e.style.top)>=568&&(e.style.top="568px",e.dataset.flag="")}})},50)}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"happy"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{ref:"bg-warp",staticClass:"bg-warp"},[a("div",{staticClass:"bg bg_1"},[a("div",{staticClass:"lll"},[t._v("Y J F")]),t._v(" "),a("div",{staticClass:"action",on:{"~click":function(e){return t.go(e)}}},[a("div",{staticClass:"text"},[t._v("开 始")])]),t._v(" "),a("div",{staticClass:"sun"}),t._v(" "),a("div",{staticClass:"cloud1 cloud"}),t._v(" "),a("div",{staticClass:"cloud2 cloud"})]),t._v(" "),a("div",{staticClass:"bg bg_2"},[a("div",{staticClass:"door-warp"},[a("div",{ref:"leftDoor",staticClass:"left-door"}),t._v(" "),a("div",{ref:"rightDoor",staticClass:"right-door"})]),t._v(" "),a("div",{ref:"bird",staticClass:"bird"})]),t._v(" "),a("div",{staticClass:"bg bg_3"},[a("div",{staticClass:"girl",class:{"girl-rotate":t.girlRotate}}),t._v(" "),t._l(4,function(t,e){return a("div",{key:e+"water",class:["water","water"+t]})}),t._v(" "),t._l(16,function(t,e){return a("div",{key:e+"star",class:["star","star"+t]})}),t._v(" "),t._l(6,function(e,s){return a("div",{key:s+"flowerwarp"},t._l(30,function(s,i){return a("div",{key:i+"flower",ref:"flower"+e,refInFor:!0,class:["flower","flower"+e],style:{left:t._random(100,900)+"px",top:t._random(-6e3,-50)+"px",transform:"rotate("+t._random(0,360)+"deg)"},attrs:{"data-flag":!0,"data-t":t._random(0,2)}})}),0)})],2)]),t._v(" "),a("div",{ref:"boy",staticClass:"boy"}),t._v(" "),a("div",{ref:"boy1",staticClass:"boy1"}),t._v(" "),a("div",{ref:"boy2",staticClass:"boy2",class:{"boy-rotate":t.boyRotate}}),t._v(" "),a("div",{ref:"end",staticClass:"end"},[t._v("5 2 0 快乐!")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("audio",{attrs:{controls:"controls",muted:"",preload:"auto",id:"audio"}},[e("source",{attrs:{src:a("OcFC"),type:"audio/ogg"}}),this._v(" "),e("source",{attrs:{src:a("OcFC"),type:"audio/mpeg"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("audio",{attrs:{controls:"controls",muted:"",preload:"auto",id:"audio1"}},[e("source",{attrs:{src:a("s+TB"),type:"audio/ogg"}}),this._v(" "),e("source",{attrs:{src:a("s+TB"),type:"audio/mpeg"}})])}]};var n=a("VU/8")(o,r,!1,function(t){a("jeZc")},"data-v-7bb97eaa",null).exports,l=a("BO1k"),c=a.n(l),u=a("GCDA"),f=a.n(u),p=navigator.userAgent;new f.a;var d={name:"App",components:{Happy:n},data:function(){return{scale:1,width:1024,height:768,translateX:0,translateY:0,paddingXRatio:0,paddingYRatio:"0px"}},computed:{appStyle:function(){return{position:"absolute",top:function(){var t=!0,e=!1,a=void 0;try{for(var s,i=c()(["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"]);!(t=(s=i.next()).done);t=!0){var o=s.value;if(-1!==p.indexOf(o))return!1}}catch(t){e=!0,a=t}finally{try{!t&&i.return&&i.return()}finally{if(e)throw a}}return!0}()?"0px":"210px",zIndex:"11",width:this.width+"px",height:this.height+"px",transformOrigin:"left top",transform:"scale("+this.scale+")"}}},created:function(){this.resize();var t=null,e=this;window.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(e.resize,50)}),window.addEventListener("pageshow",function(){clearTimeout(t),t=setTimeout(e.resize,50)})},methods:{scaleDOMWrap:function(){var t=window.innerWidth/1024,e=window.innerHeight/768;return{width:1024,height:768,scale:Math.min(t,e)}},resize:function(){var t=this.scaleDOMWrap(),e=t.width,a=t.height,s=t.scale;this.width=e,this.height=a,this.scale=s}}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:this.appStyle,attrs:{id:"app"}},[e("Happy")],1)},staticRenderFns:[]};var v=a("VU/8")(d,h,!1,function(t){a("kAV3")},null,null).exports,m=a("/ocq"),g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var y=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},g,!1,function(t){a("OVGu")},"data-v-d8ec41bc",null).exports;s.a.use(m.a);var _=new m.a({routes:[{path:"/",name:"HelloWorld",component:y}]}),b=a("4ywN");[{install:function(t){t.prototype.$anime=b.a}}].forEach(function(t,e){s.a.use(t)}),s.a.config.productionTip=!1,new s.a({el:"#app",router:_,components:{App:v},template:"<App/>"})},OVGu:function(t,e){},OcFC:function(t,e,a){t.exports=a.p+"staic/media/happy.89979f4.mp3"},jeZc:function(t,e){},kAV3:function(t,e){},"s+TB":function(t,e,a){t.exports=a.p+"staic/media/circulation.c7b4f9b.mp3"}},["NHnr"]);
//# sourceMappingURL=app.5d6c8dbe63c73b545145.js.map