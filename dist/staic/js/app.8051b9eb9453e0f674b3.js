webpackJsonp([1],{"Gtk+":function(t,e,i){t.exports=i.p+"staic/media/circulation.897a8f1.wav"},JK24:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),n={name:"Happy",data:function(){return{girlRotate:!1,boyRotate:!1,timer:null}},created:function(){},mounted:function(){},methods:{_random:function(t,e){return Math.floor(Math.random()*(e-t))+t},playAudio1:function(){document.getElementById("audio").play()},playAudio2:function(){var t=this,e=document.getElementById("audio1"),i=this.$refs.end;e.play().then(function(){setTimeout(function(){i.style.opacity=1,t.$anime({targets:i,top:[-300,200],duration:3e3,easing:"easeInOutSine",complete:function(){}})},1e3*e.duration/1.8),setTimeout(function(){clearInterval(t.timer)},1e3*e.duration)})},go:function(){var t=this;this.playAudio1(),this.$anime({targets:this.$refs.boy,left:600,duration:4500,easing:"linear",complete:function(){t.moveBg()}})},go2:function(){this.$anime({targets:this.$refs.boy1,left:162,duration:2e3,easing:"linear",complete:function(){}})},go3:function(){var t=this;this.$anime({targets:this.$refs.boy1,left:300,top:300,duration:2e3,easing:"linear",complete:function(){t.go4()}})},go4:function(){var t=this;this.$anime({targets:this.$refs.boy1,left:406,duration:2e3,easing:"linear",complete:function(){t.$refs.boy1.style.animationPlayState="paused",t.$refs.boy1.style.opacity=0,t.$refs.boy2.style.opacity=1,setTimeout(function(){t.rotate()},2e3)}})},moveBg2:function(){var t=this;this.$anime({targets:this.$refs["bg-warp"],translateX:"-2048px",duration:6e3,easing:"linear",complete:function(){t.go3()}})},closeDoor:function(){this.$anime({targets:this.$refs.leftDoor,left:[-65,0],duration:1e3,easing:"linear",complete:function(){}}),this.$anime({targets:this.$refs.rightDoor,left:[130,65],duration:1e3,easing:"linear",complete:function(){}})},openDoor:function(){var t=this;this.$anime({targets:this.$refs.leftDoor,left:-65,duration:1e3,easing:"linear",complete:function(){}}),this.$anime({targets:this.$refs.rightDoor,left:130,duration:1e3,easing:"linear",complete:function(){t.comeIn()}})},moveBg:function(){var t=this;this.$anime({targets:this.$refs["bg-warp"],translateX:"-926px",duration:6e3,easing:"linear",complete:function(){t.birdFly(),t.openDoor()}})},comeIn:function(){var t=this;this.$anime({targets:this.$refs.boy,top:350,opacity:0,duration:2e3,easing:"linear",complete:function(){setTimeout(function(){t.goOut()},1e3)}})},goOut:function(){var t=this;this.$anime({targets:this.$refs.boy1,top:[350,390],opacity:[0,1],duration:2e3,easing:"linear",complete:function(){t.closeDoor(),t.go2(),t.moveBg2()}})},rotate:function(){var t=this;this.girlRotate=!0,this.boyRotate=!0,this.flowerFly(),setTimeout(function(){t.playAudio2()},2e3)},birdFly:function(){this.$refs.bird.style.opacity=1,this.$anime({targets:this.$refs.bird,left:[1024,290],duration:6e3,easing:"linear",complete:function(){}})},flowerFly:function(){var t=this;this.timer=setInterval(function(){for(var e=0;e<6;e++)t.$refs["flower"+(e+1)].forEach(function(t){t.style.top=parseFloat(t.style.top)+3+"px"})},50)}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"happy"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("div",{ref:"bg-warp",staticClass:"bg-warp"},[i("div",{staticClass:"bg bg_1"},[i("div",{staticClass:"lll"},[t._v("Y J F")]),t._v(" "),i("div",{staticClass:"action",on:{"~click":function(e){return t.go(e)}}},[i("div",{staticClass:"text"},[t._v("开 始")])]),t._v(" "),i("div",{staticClass:"sun"}),t._v(" "),i("div",{staticClass:"cloud1 cloud"}),t._v(" "),i("div",{staticClass:"cloud2 cloud"})]),t._v(" "),i("div",{staticClass:"bg bg_2"},[i("div",{staticClass:"door-warp"},[i("div",{ref:"leftDoor",staticClass:"left-door"}),t._v(" "),i("div",{ref:"rightDoor",staticClass:"right-door"})]),t._v(" "),i("div",{ref:"bird",staticClass:"bird"})]),t._v(" "),i("div",{staticClass:"bg bg_3"},[i("div",{staticClass:"girl",class:{"girl-rotate":t.girlRotate}}),t._v(" "),t._l(4,function(t,e){return i("div",{key:e+"water",class:["water","water"+t]})}),t._v(" "),t._l(16,function(t,e){return i("div",{key:e+"star",class:["star","star"+t]})}),t._v(" "),t._l(6,function(e,a){return i("div",{key:a+"flowerwarp"},t._l(30,function(a,n){return i("div",{key:n+"flower",ref:"flower"+e,refInFor:!0,class:["flower","flower"+e],style:{left:t._random(100,900)+"px",top:t._random(-6e3,-50)+"px",transform:"rotate("+t._random(0,360)+"deg)"}})}),0)})],2)]),t._v(" "),i("div",{ref:"boy",staticClass:"boy"}),t._v(" "),i("div",{ref:"boy1",staticClass:"boy1"}),t._v(" "),i("div",{ref:"boy2",staticClass:"boy2",class:{"boy-rotate":t.boyRotate}}),t._v(" "),i("div",{ref:"end",staticClass:"end"},[t._v("剧 终")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("audio",{attrs:{controls:"controls",muted:"",preload:"auto",id:"audio"}},[e("source",{attrs:{src:i("eZ7L"),type:"audio/ogg"}}),this._v(" "),e("source",{attrs:{src:i("eZ7L"),type:"audio/mpeg"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("audio",{attrs:{controls:"controls",muted:"",preload:"auto",id:"audio1"}},[e("source",{attrs:{src:i("Gtk+"),type:"audio/ogg"}}),this._v(" "),e("source",{attrs:{src:i("Gtk+"),type:"audio/mpeg"}})])}]};var o=i("VU/8")(n,r,!1,function(t){i("PPz9")},"data-v-d6d448ac",null).exports,s=i("BO1k"),l=i.n(s),c=i("GCDA"),u=i.n(c),f=navigator.userAgent;new u.a;var d={name:"App",components:{Happy:o},data:function(){return{scale:1,width:1024,height:768,translateX:0,translateY:0,paddingXRatio:0,paddingYRatio:0}},computed:{appStyle:function(){return{position:"absolute",top:function(){var t=!0,e=!1,i=void 0;try{for(var a,n=l()(["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"]);!(t=(a=n.next()).done);t=!0){var r=a.value;if(-1!==f.indexOf(r))return!1}}catch(t){e=!0,i=t}finally{try{!t&&n.return&&n.return()}finally{if(e)throw i}}return!0}()?"0":"210px",zIndex:"11",width:this.width+"px",height:this.height+"px",transformOrigin:"left top",transform:"scale("+this.scale+")"}}},created:function(){this.resize();var t=null,e=this;window.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(e.resize,50)}),window.addEventListener("pageshow",function(){clearTimeout(t),t=setTimeout(e.resize,50)})},methods:{scaleDOMWrap:function(){var t=window.innerWidth/1024,e=window.innerHeight/768;return{width:1024,height:768,scale:Math.min(t,e)}},resize:function(){var t=this.scaleDOMWrap(),e=t.width,i=t.height,a=t.scale;this.width=e,this.height=i,this.scale=a}}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:this.appStyle,attrs:{id:"app"}},[e("Happy")],1)},staticRenderFns:[]};var v=i("VU/8")(d,h,!1,function(t){i("JK24")},null,null).exports,p=i("/ocq"),m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("h1",[t._v(t._s(t.msg))]),t._v(" "),i("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),i("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),i("br"),t._v(" "),i("li",[i("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var g=i("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},m,!1,function(t){i("OVGu")},"data-v-d8ec41bc",null).exports;a.a.use(p.a);var _=new p.a({routes:[{path:"/",name:"HelloWorld",component:g}]}),y=i("4ywN");[{install:function(t){t.prototype.$anime=y.a}}].forEach(function(t,e){a.a.use(t)}),a.a.config.productionTip=!1,new a.a({el:"#app",router:_,components:{App:v},template:"<App/>"})},OVGu:function(t,e){},PPz9:function(t,e){},eZ7L:function(t,e,i){t.exports=i.p+"staic/media/happy.4936219.wav"}},["NHnr"]);
//# sourceMappingURL=app.8051b9eb9453e0f674b3.js.map