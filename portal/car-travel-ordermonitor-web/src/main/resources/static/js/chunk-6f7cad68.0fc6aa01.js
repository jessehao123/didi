(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f7cad68"],{"2e7c":function(t,e,n){},3100:function(t,e,n){"use strict";var i=n("2e7c"),o=n.n(i);o.a},4634:function(t,e,n){for(var i=n("96dd"),o=n("7d56"),r=n("a6d5"),s=n("3f8b"),a=n("b8ea"),l=n("e3b3"),c=n("1277"),u=c("iterator"),f=c("toStringTag"),d=l.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=o(h),g=0;g<p.length;g++){var m,v=p[g],b=h[v],k=s[v],w=k&&k.prototype;if(w&&(w[u]||a(w,u,d),w[f]||a(w,f,v),l[v]=d,b))for(m in i)w[m]||r(w,m,i[m],!0)}},"58c4":function(t,e,n){"use strict";var i=n("d3d8").f,o=n("65c3"),r=n("a17c"),s=n("e85e"),a=n("5e01"),l=n("22ae"),c=n("4aef"),u=n("c8e9"),f=n("e465"),d=n("f9a5"),h=n("b081").fastKey,p=n("8716"),g=d?"_s":"size",m=function(t,e){var n,i=h(e);if("F"!==i)return t._i[i];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,c){var u=t((function(t,i){a(t,u,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[g]=0,void 0!=i&&l(i,n,t[c],t)}));return r(u.prototype,{clear:function(){for(var t=p(this,e),n=t._i,i=t._f;i;i=i.n)i.r=!0,i.p&&(i.p=i.p.n=void 0),delete n[i.i];t._f=t._l=void 0,t[g]=0},delete:function(t){var n=p(this,e),i=m(n,t);if(i){var o=i.n,r=i.p;delete n._i[i.i],i.r=!0,r&&(r.n=o),o&&(o.p=r),n._f==i&&(n._f=o),n._l==i&&(n._l=r),n[g]--}return!!i},forEach:function(t){p(this,e);var n,i=s(t,arguments.length>1?arguments[1]:void 0,3);while(n=n?n.n:this._f){i(n.v,n.k,this);while(n&&n.r)n=n.p}},has:function(t){return!!m(p(this,e),t)}}),d&&i(u.prototype,"size",{get:function(){return p(this,e)[g]}}),u},def:function(t,e,n){var i,o,r=m(t,e);return r?r.v=n:(t._l=r={i:o=h(e,!0),k:e,v:n,p:i=t._l,n:void 0,r:!1},t._f||(t._f=r),i&&(i.n=r),t[g]++,"F"!==o&&(t._i[o]=r)),t},getEntry:m,setStrong:function(t,e,n){c(t,e,(function(t,n){this._t=p(t,e),this._k=n,this._l=void 0}),(function(){var t=this,e=t._k,n=t._l;while(n&&n.r)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?u(0,"keys"==e?n.k:"values"==e?n.v:[n.k,n.v]):(t._t=void 0,u(1))}),n?"entries":"values",!n,!0),f(e)}}},"68e0":function(t,e,n){"use strict";var i=n("58c4"),o=n("8716"),r="Map";t.exports=n("9ffd")(r,(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=i.getEntry(o(this,r),t);return e&&e.v},set:function(t,e){return i.def(o(this,r),0===t?0:t,e)}},i,!0)},8716:function(t,e,n){var i=n("da0b");t.exports=function(t,e){if(!i(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},"91b7":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[n("div",{staticClass:"list"},[n("div",{staticClass:"real_time_order"},[n("h2",[t._v("实时订单列表")]),n("ul",[n("li",[t._v("实时订单号：")]),t._l(t.realOrderList,(function(e){return n("li",{key:e,on:{click:function(n){return t.realtimeTrack(e)}}},[t._v(t._s(e.substring(7,e.length)))])}))],2)]),n("div",{staticClass:"historical_orders"},[n("h2",[t._v("历史订单列表")]),n("ul",[n("li",[t._v("历史订单号： ")]),t._l(t.hisOrderList,(function(e){return n("li",{key:e,on:{click:function(n){t.hisTrack(e.substring(7,e.length))}}},[t._v(t._s(e.substring(7,e.length)))])}))],2)]),n("div",{attrs:{id:"lng_lat"}},[t._v(t._s(t.message))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isControl,expression:"isControl"}],staticClass:"input-card"},[n("h4",[t._v("轨迹回放控制")]),n("div",{staticClass:"input-item"},[n("el-row",[n("el-col",{attrs:{span:12}},[n("div",[n("input",{staticClass:"btn",attrs:{type:"button",value:"开始动画",id:"start"},on:{click:function(e){return t.startAnimation()}}})])]),n("el-col",{attrs:{span:12}},[n("div",{staticStyle:{"margin-left":"5px"}},[n("input",{staticClass:"btn",attrs:{type:"button",value:"暂停动画",id:"pause"},on:{click:function(e){return t.pauseAnimation()}}})])])],1),n("el-row",[n("el-col",{attrs:{span:12}},[n("div",[n("input",{staticClass:"btn",attrs:{type:"button",value:"继续动画",id:"resume"},on:{click:function(e){return t.resumeAnimation()}}})])]),n("el-col",{attrs:{span:12}},[n("div",{staticStyle:{"margin-left":"5px"}},[n("input",{staticClass:"btn",attrs:{type:"button",value:"停止动画",id:"stop"},on:{click:function(e){return t.stopAnimation()}}})])])],1)],1)])])},o=[],r=(n("4634"),n("cc1d"),n("e6d1"),n("63ff"),n("f8f9")),s=n("97a3"),a=(n("fafd"),n("68e0"),new Map);a.set("510100",[104.067923463,30.6799428454]),a.set("460100",[110.330801848,20.022071277]),a.set("610100",[108.953098279,34.2777998978]),a.set("420100",[114.316200103,30.5810841269]);var l=a,c=(n("365c"),{data:function(){var t;return t={orderStatus:!1,websocket:null,wsuri:"ws://10.20.3.179:8080/websocket",realOrderList:[],hisOrderList:[],map:null,cityCode:"075"},Object(s["a"])(t,"websocket",null),Object(s["a"])(t,"lngAndLat",null),Object(s["a"])(t,"lineArr",[]),Object(s["a"])(t,"marker",null),Object(s["a"])(t,"timename",null),Object(s["a"])(t,"isEnd",!1),Object(s["a"])(t,"polyline",null),Object(s["a"])(t,"passedPolyline",null),Object(s["a"])(t,"message",""),Object(s["a"])(t,"history",""),Object(s["a"])(t,"history1",""),Object(s["a"])(t,"isControl",!1),t},computed:{getCitycode:function(){return this.$store.state.citycode}},watch:{getCitycode:{handler:function(t,e){console.log(this.getCitycode)}}},created:function(){this.initWebSocket()},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(this.$store.state.citycode),this.initMap(),this.map.setCenter([104.07513,30.72724]),this.map.on("complete",(function(){console.log("地图准备完成...............")})),console.log("设置正北方向......"),console.log("请求实时订单列表"),console.log("citycode:"+this.getCitycode),this.util.axios({method:"post",url:"http://10.20.3.179:8080/track/realtimeOrder",data:{cityCode:510100}}).then((function(t){console.log(t),e.realOrderList=t.data.data}));case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),destroyed:function(){console.log("+++++++++_______"),this.closeWebSocket(),window.clearInterval(this.timename)},methods:{initMap:function(){var t=this;this.map=new AMap.Map("container",{resizeEnable:!0,rotateEnable:!0,pitchEnable:!1,zoom:25,pitch:65,rotation:45,viewMode:"3D",expandZoomRange:!0,zoomToAccuracy:!0,center:l.get(this.citycode),mapStyle:"amap://styles/34eee3392325080eabb764ca4af5f2ab"}),AMap.plugin(["AMap.ControlBar"],(function(){var e=new AMap.ControlBar;t.map.addControl(e)}))},initWebSocket:function(){"undefined"===typeof WebSocket?alert("您的浏览器不支持socket"):(this.websocket=new WebSocket(this.wsuri),this.websocket.onmessage=this.websocketonmessage,this.websocket.onopen=this.websocketonopen,this.websocket.onerror=this.websocketonerror,this.websocket.onclose=this.closeWebSocket)},setMessage:function(t){this.message=t},websocketonerror:function(t){console.log("cuowu"+t),this.setMessage(t)},websocketonopen:function(){console.log("连接成功！！！"),this.setMessage(open)},websocketonmessage:function(t){console.log("webstock回调"),this.setMessage(t.data),console.log(t.data),-1!=t.data.indexOf(",")?this.lngAndLat=(t.data+"").split(","):-1!=t.data.indexOf("end")&&(console.log("订单结束"),this.orderStatus=!0,this.lngAndLat=t.data)},closeWebSocket:function(){this.websocket.close()},send:function(){console.log("是否调用此方法");var t=document.getElementById("text").value;this.websocket.send(t)},realtimeTrack:function(t){var e=this;this.marker=null,console.log(1!==this.websocket.readyState),1!==this.websocket.readyState&&(this.websocket=new WebSocket(this.wsuri),this.websocket.onmessage=this.websocketonmessage),this.isControl=!1,"undefined"!=typeof this.lngAndLat&&null!=this.lngAndLat||(this.lngAndLat="");var n=this.lngAndLat.toString();console.log(n),this.marker=null,window.clearInterval(this.timename);var i=window.setInterval((function(){if(n=e.lngAndLat.toString(),-1!=n.indexOf("end")){console.log("订单结束"),e.orderStatus=!0,window.clearInterval(i),e.websocket.close();var o=e.realOrderList.indexOf(t);return o>-1&&e.realOrderList.splice(o,1),e.hisOrderList.push(t),e.lngAndLat="",void e.map.setFitView()}if(-1!=n.indexOf(",")){var r=new AMap.LngLat(e.lngAndLat[0],e.lngAndLat[1],!1);null!=e.marker?(console.log(e.marker),console.log("走1"),e.map.animateEnable=!0,e.map.panTo(r),e.marker.moveTo(r,2e4,(function(t){return t}))):(console.log(e.marker),console.log("周二"),e.marker=new AMap.Marker({map:e.map,position:r,icon:"https://webapi.amap.com/images/car.png",offset:new AMap.Pixel(-26,-13),autoRotation:!0,angle:-90}))}console.log("---发送id---:"+t),e.websocket.send(t)}),300);console.log("+++++++"),console.log(this.marker)},startAnimation:function(){null!=this.polyline&&null!=this.passedPolyline&&0!=this.lineArr.length?this.marker.moveAlong(this.lineArr,200):alert("轨迹点不存在!")},pauseAnimation:function(){console.log("this.polyline",this.polyline),console.log("this.passedPolyline",this.passedPolyline),console.log("this.lineArr.length",this.lineArr.length),null!=this.polyline&&null!=this.passedPolyline&&0!=this.lineArr.length?this.marker.pauseMove():alert("轨迹点不存在!")},resumeAnimation:function(){null!=this.polyline&&null!=this.passedPolyline&&0!=this.lineArr.length?this.marker.resumeMove():alert("轨迹点不存在!")},stopAnimation:function(){0!=this.lineArr.length?this.marker.stopMove():alert("轨迹点不存在!")},hisTrack:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var n,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(this.marker),this.map.setFitView(),console.log(this.marker),this.isControl=!0,n=[],this.util.axios({method:"post",url:"http://10.20.3.179:8080/track/historyTrackPoints",data:{orderId:e}}).then((function(t){n=t.data.data,200===t.status&&(i.lineArr=new Array,console.log("操作成功！"),n.forEach((function(t,e){var n=new Array;n[0]=t.lng,n[1]=t.lat,i.lineArr[e]=n})),null!=i.marker&&(console.log("1"),i.map.remove(i.marker),i.marker=null),null!=i.polyline&&(console.log("1"),i.map.remove(i.polyline),i.polyline=null),null!=i.passedPolyline&&(console.log("1"),i.map.remove(i.passedPolyline),i.passedPolyline=null),i.marker=new AMap.Marker({map:i.map,position:i.lineArr[0],icon:"https://webapi.amap.com/images/car.png",offset:new AMap.Pixel(-26,-13),autoRotation:!0,angle:-90}),i.map.setFitView(),console.log(i.marker.getPosition()),i.marker.on("moving",(function(t){console.log(t.passedPath),i.map.panTo(i.marker.getPosition()),console.log("this",i),i.passedPolyline.setPath(t.passedPath)})),i.polyline=new AMap.Polyline({map:i.map,path:i.lineArr,showDir:!0,strokeColor:"#ffed04",strokeWeight:6}),i.passedPolyline=new AMap.Polyline({map:i.map,strokeColor:"#AF5",strokeWeight:6}))}));case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}}),u=c,f=(n("3100"),n("6691")),d=Object(f["a"])(u,i,o,!1,null,"42127859",null);e["default"]=d.exports},"97a3":function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return i}))},"9f7e":function(t,e,n){n("f9a5")&&"g"!=/./g.flags&&n("d3d8").f(RegExp.prototype,"flags",{configurable:!0,get:n("e7a1")})},"9ffd":function(t,e,n){"use strict";var i=n("3f8b"),o=n("2498"),r=n("a6d5"),s=n("a17c"),a=n("b081"),l=n("22ae"),c=n("5e01"),u=n("da0b"),f=n("0cc1"),d=n("b309"),h=n("3d87"),p=n("1e01");t.exports=function(t,e,n,g,m,v){var b=i[t],k=b,w=m?"set":"add",y=k&&k.prototype,_={},A=function(t){var e=y[t];r(y,t,"delete"==t?function(t){return!(v&&!u(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(v&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return v&&!u(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof k&&(v||y.forEach&&!f((function(){(new k).entries().next()})))){var L=new k,S=L[w](v?{}:-0,1)!=L,M=f((function(){L.has(1)})),O=d((function(t){new k(t)})),C=!v&&f((function(){var t=new k,e=5;while(e--)t[w](e,e);return!t.has(-0)}));O||(k=e((function(e,n){c(e,k,t);var i=p(new b,e,k);return void 0!=n&&l(n,m,i[w],i),i})),k.prototype=y,y.constructor=k),(M||C)&&(A("delete"),A("has"),m&&A("get")),(C||S)&&A(w),v&&y.clear&&delete y.clear}else k=g.getConstructor(e,t,m,w),s(k.prototype,n),a.NEED=!0;return h(k,t),_[t]=k,o(o.G+o.W+o.F*(k!=b),_),v||g.setStrong(k,t,m),k}},b081:function(t,e,n){var i=n("4d2c")("meta"),o=n("da0b"),r=n("549d"),s=n("d3d8").f,a=0,l=Object.isExtensible||function(){return!0},c=!n("0cc1")((function(){return l(Object.preventExtensions({}))})),u=function(t){s(t,i,{value:{i:"O"+ ++a,w:{}}})},f=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!r(t,i)){if(!l(t))return"F";if(!e)return"E";u(t)}return t[i].i},d=function(t,e){if(!r(t,i)){if(!l(t))return!0;if(!e)return!1;u(t)}return t[i].w},h=function(t){return c&&p.NEED&&l(t)&&!r(t,i)&&u(t),t},p=t.exports={KEY:i,NEED:!1,fastKey:f,getWeak:d,onFreeze:h}},cc1d:function(t,e,n){"use strict";n("9f7e");var i=n("8cac"),o=n("e7a1"),r=n("f9a5"),s="toString",a=/./[s],l=function(t){n("a6d5")(RegExp.prototype,s,t,!0)};n("0cc1")((function(){return"/a/b"!=a.call({source:"a",flags:"b"})}))?l((function(){var t=i(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?o.call(t):void 0)})):a.name!=s&&l((function(){return a.call(this)}))},fafd:function(t,e,n){"use strict";var i=n("1eb0")(!0);n("4aef")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})}))}}]);
//# sourceMappingURL=chunk-6f7cad68.0fc6aa01.js.map