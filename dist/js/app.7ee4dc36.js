(function(t){function e(e){for(var r,s,l=e[0],i=e[1],u=e[2],d=0,p=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,l=1;l<a.length;l++){var i=a[l];0!==n[i]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="https://zachjharris.github.io/masters2021/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=i;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:""}},[a("v-tabs",{attrs:{"show-arrows":"","hide-slider":"",optional:""}},[a("v-tab",{staticStyle:{opacity:"1!important"},attrs:{disabled:""}},[t._v(" Leaders ")]),t._l(t.leaders,(function(e){return[a("v-tab",{key:e.id,staticClass:"px-3 mx-3",staticStyle:{color:"rgba(0, 0, 0, 0.54)!important",opacity:"1!important"},attrs:{disabled:""}},[a("div",{staticClass:"text-center font-weight-bold",staticStyle:{color:"rgba(0, 0, 0, 0.54)!important"}},[t._v(" "+t._s(e.display_name2)+": "+t._s(e.topar)+" ")])])]}))],2),a("v-spacer")],1),a("v-main",[a("v-container",[a("v-tabs",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab",[t._v("Picks")]),a("v-tab",[t._v("Players")])],1),a("v-tabs-items",{attrs:{touchless:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab-item",[a("player-table",{attrs:{users:t.users,pars:t.pars}})],1),a("v-tab-item",[t.picks.length>0&&t.scores.length>0?a("pick-table",{attrs:{picks:t.picks,pars:t.pars}}):t._e()],1)],1)],1)],1)],1)},o=[],s=(a("4de4"),a("7db0"),a("4160"),a("c975"),a("d81d"),a("13d5"),a("b0c0"),a("ac1f"),a("5319"),a("159b"),a("2909")),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",["table"==t.display?a("v-card",{staticClass:"mt-2"},["table"==t.display?a("v-data-table",{attrs:{items:t.users,headers:t.headers,"hide-default-footer":"","disable-pagination":"","sort-by":"topar","mobile-breakpoint":"0"},scopedSlots:t._u([{key:"body",fn:function(e){var r=e.items;return[a("tbody",[t._l(r,(function(e,r){return[null!=e.picks[0]?a("tr",{key:e.name+"-"+r},[a("td",[t._v(t._s(e.name))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.today>0?"+"+e.today:"0"==e.today?"E":e.today))]),t._l(e.picks,(function(n,o){return[a("td",{key:e.name+"-"+r+"-"+o,on:{click:function(e){return t.viewPlayer(n)}}},[null!=n?[a("v-tooltip",{attrs:{top:"",disabled:""==n.pos||""==n.today||""==n.thru},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("span",t._g({class:{"text-decoration-line-through":n.index>500}},r),[t._v(" "+t._s(n.first_name+" "+n.last_name)),a("br"),""!=n.pos&&""!=n.topar?a("v-chip",{attrs:{"x-small":""}},[t._v(t._s(n.pos)+": "+t._s(n.topar))]):t._e()],1)]}}],null,!0)},[a("div",[t._v(" Position: "+t._s(n.pos)),a("br"),t._v(" Today: "+t._s(n.today)),a("br"),t._v(" Thru: "+t._s(n.thru)+" ")])])]:[t._v(" Rickie Fowler ")]],2)]})),a("td",{staticClass:"text-center"},[t._v(t._s(e.topar))])],2):t._e()]}))],2)]}}],null,!1,1848590925)}):t._e()],1):t._e(),"card"==t.display?a("v-data-iterator",{attrs:{items:t.users,"sort-by":"topar","disable-pagination":"","hide-default-footer":""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.items;return[a("v-row",{attrs:{"mx-0":"",wrap:""}},t._l(r,(function(e,r){return a("v-col",{key:"card-"+e.name+"-"+r,attrs:{cols:"12",sm:"6",md:"4"}},[a("v-card",[a("v-card-title",[t._v(t._s(e.name))]),a("v-card-text",[a("v-row",{attrs:{"mx-0":"",wrap:""}},[a("v-chip",{staticClass:"mx-2"},[t._v("Today: "+t._s(e.today))]),a("v-chip",{staticClass:"mx-2"},[t._v("Total: "+t._s(e.topar))])],1)],1)],1)],1)})),1)]}}],null,!1,1910259784)}):t._e(),t.showPlayer?a("v-dialog",{attrs:{"max-width":"600"},model:{value:t.showPlayer,callback:function(e){t.showPlayer=e},expression:"showPlayer"}},[a("player",{attrs:{pars:t.pars,player:t.player},on:{cancel:function(e){t.showPlayer=!1}}})],1):t._e()],1)},i=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[a("span",{staticClass:"title"},[t._v(t._s(t.player.name))]),a("v-spacer"),a("v-btn",{attrs:{icon:"",close:""},on:{click:function(e){return t.$emit("cancel")}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("v-card-text",[a("v-tabs",{attrs:{"show-arrows":""}},[a("v-tab",[t._v("Round 1")]),a("v-tab",[t._v("Round 2")]),a("v-tab",[t._v("Round 3")]),a("v-tab",[t._v("Round 4")]),t._l(t.rounds,(function(e,r){return a("v-tab-item",{key:r},[a("v-simple-table",[[a("thead",[a("tr",[a("th",[t._v("Hole")]),a("th",[t._v("Par")]),a("th",[t._v("Score")])])]),a("tbody",t._l(e.scores,(function(e,n){return a("tr",{key:"hole-"+(n+1)},[a("td",[t._v(t._s(n+1))]),a("td",[t._v(t._s(t.roundPars[r][n]))]),a("td",[t._v(t._s(e))])])})),0)]],2)],1)}))],2)],1)],1)},c=[],d={props:["player","pars"],computed:{rounds:function(){return[this.player.round1,this.player.round2,this.player.round3,this.player.round4]},roundPars:function(){return[this.pars.round1,this.pars.round2,this.pars.round3,this.pars.round4]}}},p=d,f=a("2877"),v=a("6544"),h=a.n(v),m=a("8336"),y=a("b0af"),b=a("99d9"),_=a("132d"),g=a("1f4f"),x=a("2fa4"),k=a("71a3"),w=a("c671"),T=a("fe57"),P=Object(f["a"])(p,u,c,!1,null,null,null),S=P.exports;h()(P,{VBtn:m["a"],VCard:y["a"],VCardText:b["a"],VCardTitle:b["b"],VIcon:_["a"],VSimpleTable:g["a"],VSpacer:x["a"],VTab:k["a"],VTabItem:w["a"],VTabs:T["a"]});var V={props:["users","pars"],components:{Player:S},data:function(){return{display:"table",showPlayer:!1,player:{},search:"",headers:[{text:"Name",value:"name",width:"150"},{text:"Today",value:"today",align:"center"},{text:"Golfer 1",value:"picks[0].name",width:"170"},{text:"Golfer 2",value:"picks[1].name",width:"170"},{text:"Golfer 3",value:"picks[2].name",width:"170"},{text:"Golfer 4",value:"picks[3].name",width:"170"},{text:"Golfer 5",value:"picks[4].name",width:"170"},{text:"Golfer 6",value:"picks[5].name",width:"170"},{text:"Total",value:"topar",align:"center"}]}},methods:{viewPlayer:function(t){this.player=t,this.showPlayer=!0}}},C=V,O=a("cc20"),j=a("62ad"),D=a("a523"),E=a("c377"),R=a("8fea"),I=a("169a"),$=a("0fd9"),J=a("3a2f"),M=Object(f["a"])(C,l,i,!1,null,null,null),G=M.exports;h()(M,{VCard:y["a"],VCardText:b["a"],VCardTitle:b["b"],VChip:O["a"],VCol:j["a"],VContainer:D["a"],VDataIterator:E["a"],VDataTable:R["a"],VDialog:I["a"],VRow:$["a"],VTooltip:J["a"]});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",{staticClass:"mt-2"},[a("v-data-table",{attrs:{items:t.picks,headers:t.headers,"hide-default-footer":"","disable-pagination":"","sort-by":"topar","mobile-breakpoint":"0"},scopedSlots:t._u([{key:"body",fn:function(e){var r=e.items;return[a("tbody",[t._l(r,(function(e){return[null!=e&&null!=e.name?a("tr",{key:""+e.id},[a("td",{on:{click:function(a){return t.viewPlayer(e)}}},[a("span",{class:{"text-decoration-line-through":e.index>500}},[t._v(t._s(e.name))])]),a("td",{staticClass:"text-center"},[t._v(t._s(e.topar))]),a("td",{staticClass:"text-center"},[t._v(t._s(""==e.today?e.teetime:e.today))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.round1Total>0?"+"+e.round1Total:0==e.round1Total?"E":e.round1Total)+" ("+t._s(""!=e.thru&&"Playing"==e.round1.roundStatus?"Thru: "+e.thru:e.round1.roundStatus)+")")]),a("td",{staticClass:"text-center"},[t._v(t._s(e.round2Total>0?"+"+e.round2Total:0==e.round2Total?"E":e.round2Total)+" ("+t._s(""!=e.thru&&"Playing"==e.round2.roundStatus?"Thru: "+e.thru:e.round2.roundStatus)+")")]),a("td",{staticClass:"text-center"},[t._v(t._s(e.round3Total>0?"+"+e.round3Total:0==e.round3Total?"E":e.round3Total)+" ("+t._s(""!=e.thru&&"Playing"==e.round3.roundStatus?"Thru: "+e.thru:e.round3.roundStatus)+")")]),a("td",{staticClass:"text-center"},[t._v(t._s(e.round4Total>0?"+"+e.round4Total:0==e.round4Total?"E":e.round4Total)+" ("+t._s(""!=e.thru&&"Playing"==e.round4.roundStatus?"Thru: "+e.thru:e.round4.roundStatus)+")")])]):t._e()]}))],2)]}}])})],1),t.showPlayer?a("v-dialog",{attrs:{"max-width":"600"},model:{value:t.showPlayer,callback:function(e){t.showPlayer=e},expression:"showPlayer"}},[a("player",{attrs:{pars:t.pars,player:t.player},on:{cancel:function(e){t.showPlayer=!1}}})],1):t._e()],1)},B=[],H={props:["picks","pars"],components:{Player:S},data:function(){return{display:"table",showPlayer:!1,player:{},search:"",headers:[{text:"Name",value:"name",width:"175"},{text:"Total",value:"topar",align:"center"},{text:"Today",value:"today",align:"center",width:"100"},{text:"Round 1",value:"round1Total",align:"center"},{text:"Round 2",value:"round2Total",align:"center"},{text:"Round 3",value:"round3Total",align:"center"},{text:"Round 4",value:"round4Total",align:"center"}]}},methods:{viewPlayer:function(t){this.player=t,this.showPlayer=!0}}},N=H,K=Object(f["a"])(N,A,B,!1,null,null,null),z=K.exports;h()(K,{VCard:y["a"],VContainer:D["a"],VDataTable:R["a"],VDialog:I["a"]});var L=a("2ef0"),U=a.n(L),Y={name:"App",components:{PlayerTable:G,PickTable:z},data:function(){return{showPlayer:!1,tab:0,player:{},isDarkMode:!1}},computed:{pars:function(){var t=this.$store.state.pars;return t},scores:function(){var t=this.$store.state.scores,e=this.pars;return t.map((function(t,a){return t.name=t.first_name+" "+t.last_name,t.index=a,t.round1Total=t.round1.scores.reduce((function(t,a,r){var n=e.round1[r];return null!=n&&null!=a?t+(a-n):t}),0),t.round2Total=t.round2.scores.reduce((function(t,a,r){var n=e.round2[r];return null!=n&&null!=a?t+(a-n):t}),0),t.round3Total=t.round3.scores.reduce((function(t,a,r){var n=e.round3[r];return null!=n&&null!=a?t+(a-n):t}),0),t.round4Total=t.round4.scores.reduce((function(t,a,r){var n=e.round4[r];return null!=n&&null!=a?t+(a-n):t}),0),t}))},usersRaw:function(){return this.$store.state.users},users:function(){var t=this.usersRaw,e=this.scores;return t.map((function(t){return t.picks=t.golfers.map((function(t){return U.a.find(e,(function(e){return parseInt(e.id)==t}))})),t.bestPosition="",t.totalStrokes=t.picks.reduce((function(t,e){return null==e?t:t+parseInt(e.total)}),0),t.today=t.picks.reduce((function(t,e){return null==e?t:e.today.indexOf("+")>-1?t+parseInt(e.today.replace("+","")):e.today.indexOf("-")>-1?t-parseInt(e.today.replace("-","")):"E"==e.today||""==e.today?t:void 0}),0),t.topar=t.picks.reduce((function(t,e){return null==e?t:e.topar.indexOf("+")>-1?t+parseInt(e.topar.replace("+","")):e.topar.indexOf("-")>-1?t-parseInt(e.topar.replace("-","")):"E"==e.topar?t:void 0}),0),t}))},leaders:function(){var t=this.scores;return t.filter((function(t){return"T1"==t.pos||"1"==t.pos}))},picks:function(){var t=this.users,e=[];return t.forEach((function(t){e.push.apply(e,Object(s["a"])(t.picks))})),U.a.orderBy(U.a.uniqBy(e,"id"),["index"],["asc"])}},mounted:function(){var t=this;console.log(this),this.retrieveScores(),setInterval((function(){t.retrieveScores()}),6e4)},methods:{retrieveScores:function(){this.$store.dispatch("getScores")},toggleMode:function(){this.isDarkMode=!this.isDarkMode,this.$vuetify.theme.dark=this.isDarkMode}}},Z=Y,q=a("7496"),F=a("40dc"),W=a("f6c4"),Q=a("aac8"),X=Object(f["a"])(Z,n,o,!1,null,null,null),tt=X.exports;h()(X,{VApp:q["a"],VAppBar:F["a"],VContainer:D["a"],VMain:W["a"],VSpacer:x["a"],VTab:k["a"],VTabItem:w["a"],VTabs:T["a"],VTabsItems:Q["a"]});var et=a("2f62"),at=(a("96cf"),a("1da1")),rt=a("bc3a"),nt=a.n(rt);r["a"].use(et["a"]);var ot=new et["a"].Store({state:{users:[{name:"Casey Golden",golfers:["30925","33448","28237","48081","29725","25364"]},{name:"Bryan Noller",golfers:["35450","48081","34046","33448","30925","39971"]},{name:"Zach Harris",golfers:["30925","47959","33448","34046","50525","46970"]},{name:"Nik Sekoulopoulos",golfers:["30925","46970","34046","35450","50525","29221"]},{name:"Dominic Hohman",golfers:["30925","46970","20396","21209","39977","33448"]},{name:"Zach Domer",golfers:["50525","30925","35891","28237","46970","34360"]},{name:"Austin Korte",golfers:["33448","34046","29725","30925","34360","48081"]},{name:"Josh Anderson",golfers:["30925","47959","46970","33448","34046","34360"]},{name:"Bryan Noller",golfers:["30925","33448","48081","46970","28237","50525"]},{name:"Will Gandert",golfers:["1810","47959","30925","30911","46970","34046"]},{name:"Paul Harris",golfers:["30925","33448","35450","50525","47959","46970"]},{name:"David Kostanich",golfers:["30925","47959","33448","34046","28237","25364"]},{name:"Jake Proakis",golfers:["46970","47959","50525","30925","25364","40026"]},{name:"Graham Johnston",golfers:["30925","46970","33448","21209","31323","47959"]},{name:"Jason Orzel",golfers:["34046","36689","20396","30925","29725","34360"]},{name:"Jason Orzel - 2",golfers:["30925","47959","46970","33448","28237","34046"]},{name:"Lee Unsinger",golfers:["30925","33448","46970","35450","48081","46717"]},{name:"Eric Spracklen",golfers:["48081","32839","33448","36689","47959","29221"]},{name:"Eric Spracklen - 2",golfers:["48081","32839","34046","47959","1810","24502"]},{name:"Jeremy Krystosik",golfers:["30925","46970","33448","28237","34046","25364"]},{name:"Jeremy Krystosik - 2",golfers:["47959","50525","29725","47483","20396","45526"]},{name:"Dylan Dancer",golfers:["32839","30925","39971","48081","33448","30925"]},{name:"Jordan Lane",golfers:["30925","34046","33448","36689","46046","25804"]},{name:"Alex Harris",golfers:["30925","47959","46970","33448","28237","34046"]}],scores:[],yardages:[],pars:[]},mutations:{setScores:function(t,e){t.scores=e},setPars:function(t,e){t.pars=e},setYardages:function(t,e){t.yardages=e}},actions:{getScores:function(t){return Object(at["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,nt.a.get("https://www.masters.com/en_US/scores/feeds/2021/scores.json");case 3:a=e.sent,r=a.data,console.log(r),t.commit("setScores",r.data.player),t.commit("setPars",r.data.pars),t.commit("setYardages",r.data.yardages),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.log("unable to retrieve scores");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}}}),st=ot,lt=a("f309");r["a"].use(lt["a"]);var it=new lt["a"]({});r["a"].use(et["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(tt)},vuetify:it,store:st}).$mount("#app")}});
//# sourceMappingURL=app.7ee4dc36.js.map