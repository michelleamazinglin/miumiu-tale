!function(t){var i={};function e(o){if(i[o])return i[o].exports;var n=i[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}e.m=t,e.c=i,e.d=function(t,i,o){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)e.d(o,n,function(i){return t[i]}.bind(null,n));return o},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="/dist/",e(e.s=0)}([function(t,i,e){"use strict";e.r(i);e(1),e(2)},function(t,i,e){},function(t,i){var e=null,o=[0,0,0,0,0,3,3,3,3,0,3,3,3,3,3,3,0,0,0,0,0,1,1,1,1,3,2,2,3,1,3,2,2,2,2,3,2,2,2,0,0,1,1,1,1,3,2,2,3,1,3,2,2,2,2,3,2,2,2,0,0,1,1,1,1,3,2,2,3,1,3,2,2,2,2,3,2,2,2,0,0,1,1,1,1,3,2,3,3,1,3,3,3,3,2,3,2,2,2,0,0,1,1,1,1,1,2,1,1,1,1,1,2,2,2,2,2,2,2,0,0,1,1,1,1,1,2,1,1,1,1,1,2,2,2,2,2,2,2,0,0,1,1,1,1,1,2,1,1,1,1,1,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,3,3,3,3,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,3,2,2,3,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,3,2,2,3,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,3,2,3,3,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],n=0,s=0,r={37:!1,38:!1,39:!1,40:!1},l=0,a=1,h=2,c=3,p=0,f=1,u={0:{colour:"#793d4c",floor:p,sprite:[{x:0,y:0,w:40,h:40}]},1:{colour:"#6df7b1",floor:f,sprite:[{x:40,y:0,w:40,h:40}]},2:{colour:"#c97461",floor:f,sprite:[{x:80,y:0,w:40,h:40}]},3:{colour:"#d77c4b",floor:p,sprite:[{x:120,y:0,w:40,h:40}]},4:{colour:"#008df0",floor:2,sprite:[{x:160,y:0,w:40,h:40}]},10:{colour:"#ccaa00",floor:p,sprite:[{x:240,y:40,w:40,h:40}]},11:{colour:"#ccaa00",floor:p,sprite:[{x:280,y:40,w:40,h:40}]},12:{colour:"#ccaa00",floor:p,sprite:[{x:320,y:40,w:40,h:40}]},13:{colour:"#ccaa00",floor:p,sprite:[{x:240,y:80,w:40,h:40}]},14:{colour:"#ccaa00",floor:p,sprite:[{x:280,y:80,w:40,h:40}]},15:{colour:"#ccaa00",floor:p,sprite:[{x:320,y:80,w:40,h:40}]},16:{colour:"#ccaa00",floor:p,sprite:[{x:240,y:120,w:40,h:40}]},17:{colour:"#ccaa00",floor:p,sprite:[{x:280,y:120,w:40,h:40}]},18:{colour:"#ccaa00",floor:p,sprite:[{x:320,y:120,w:40,h:40}]}},d=0,m=1,y={1:{name:"Flower",sprite:[{x:40,y:180,w:40,h:20}],offset:[0,0],collision:d,zIndex:1},2:{name:"fence",sprite:[{x:40,y:200,w:40,h:40}],offset:[0,0],collision:m,zIndex:1},3:{name:"Tree",sprite:[{x:80,y:160,w:80,h:80}],offset:[-20,-20],collision:m,zIndex:3},4:{name:"mashrooms",sprite:[{x:40,y:160,w:40,h:20}],offset:[0,0],collision:d,zIndex:1}},w=null,g=!1,v=new b;function b(){this.tileFrom=[1,1],this.tileTo=[6,6],this.timeMoved=0,this.delayMove=700,this.dimensions=[40,40],this.position=[45,45],this.direction=l,this.sprites={},this.sprites[l]=[{x:0,y:120,w:30,h:30}],this.sprites[a]=[{x:0,y:150,w:30,h:30}],this.sprites[h]=[{x:0,y:180,w:30,h:30}],this.sprites[c]=[{x:0,y:210,w:30,h:30}]}b.prototype.location=function(t,i){this.tileFrom=[t,i],this.tileTo=[t,i],this.position=[40*t+(40-this.dimensions[0])/2,40*i+(40-this.dimensions[1])/2]},b.prototype.processMovement=function(t){if(this.tileFrom[0]==this.tileTo[0]&&this.tileFrom[1]==this.tileTo[1])return!1;if(t-this.timeMoved>=this.delayMove)this.location(this.tileTo[0],this.tileTo[1]),null!=T.map[I(this.tileTo[0],this.tileTo[1])].eventEnter&&T.map[I(this.tileTo[0],this.tileTo[1])].eventEnter(this);else{if(this.position[0]=40*this.tileFrom[0]+(40-this.dimensions[0])/2,this.position[1]=40*this.tileFrom[1]+(40-this.dimensions[1])/2,this.tileTo[0]!=this.tileFrom[0]){var i=40/this.delayMove*(t-this.timeMoved);this.position[0]+=this.tileTo[0]<this.tileFrom[0]?0-i:i}if(this.tileTo[1]!=this.tileFrom[1]){var e=40/this.delayMove*(t-this.timeMoved);this.position[1]+=this.tileTo[1]<this.tileFrom[1]?0-e:e}this.position[0]=Math.round(this.position[0]),this.position[1]=Math.round(this.position[1])}return!0},b.prototype.placesCanGo=function(t,i){if(t<0||t>=20||i<0||i>=20)return!1;if(u[o[I(t,i)]].floor!=f)return!1;if(null!=T.map[I(t,i)].object){var e=T.map[I(t,i)].object;if(y[e.type].collision==m)return!1}return!0},b.prototype.canGoUp=function(){return this.placesCanGo(this.tileFrom[0],this.tileFrom[1]-1)},b.prototype.canGoDown=function(){return this.placesCanGo(this.tileFrom[0],this.tileFrom[1]+1)},b.prototype.canGoLeft=function(){return this.placesCanGo(this.tileFrom[0]-1,this.tileFrom[1])},b.prototype.canGoRight=function(){return this.placesCanGo(this.tileFrom[0]+1,this.tileFrom[1])},b.prototype.goLeft=function(t){this.tileTo[0]-=1,this.timeMoved=t,this.direction=c},b.prototype.goRight=function(t){this.tileTo[0]+=1,this.timeMoved=t,this.direction=a},b.prototype.goUp=function(t){this.tileTo[1]-=1,this.timeMoved=t,this.direction=l},b.prototype.goDown=function(t){this.tileTo[1]+=1,this.timeMoved=t,this.direction=h};var M={screen:[0,0],startingPoint:[0,0],endingPoint:[0,0],offset:[0,0],update:function(t,i){this.offset[0]=Math.floor(this.screen[0]/2-t),this.offset[1]=Math.floor(this.screen[1]/2-i);var e=[Math.floor(t/40),Math.floor(i/40)];this.startingPoint[0]=e[0]-Math.ceil(this.screen[0]/2/40)-1,this.startingPoint[1]=e[1]-Math.ceil(this.screen[1]/2/40)-1,this.startingPoint[0]<=-1&&(this.startingPoint[0]=0),this.startingPoint[1]<=-1&&(this.startingPoint[1]=0),this.endingPoint[0]=e[0]+1+Math.ceil(this.screen[0]/2/40),this.endingPoint[1]=e[1]+1+Math.ceil(this.screen[1]/2/40),this.endingPoint[0]>=20&&(this.endingPoint[0]=19),this.endingPoint[1]>=20&&(this.endingPoint[1]=19)}},T=new j,F=[{x:5,y:0,w:4,h:5,data:[10,11,11,12,13,14,14,15,16,18,16,18,16,18,16,18,16,17,16,18]},{x:10,y:0,w:6,h:5,data:[10,11,11,11,11,12,16,18,16,18,17,18,16,18,16,18,17,18,16,18,16,18,17,18,16,18,16,18,17,18]},{x:8,y:8,w:4,h:4,data:[10,11,11,12,13,14,14,15,16,18,16,18,16,17,16,18]}];function P(t,i,e){this.x=t,this.y=i,this.type=e,this.building=null,this.buildingType=0,this.eventEnter=null,this.object=null}function j(){this.map=[],this.w=0,this.h=0,this.levels=4}function A(t){this.x=0,this.y=0,this.type=t}function I(t,i){return t+20*i}function G(t,i,e,o){if(!o)return t[0];for(x in e%=i,t)if(t[x].end>=e)return t[x]}function C(){if(null!=e)if(g){var t=Date.now(),i=Math.floor(Date.now()/1e3);i!=n?(n=i,s,s=1):s++,v.processMovement(t)||(r[38]&&v.canGoUp()?v.goUp(t):r[40]&&v.canGoDown()?v.goDown(t):r[37]&&v.canGoLeft()?v.goLeft(t):r[39]&&v.canGoRight()&&v.goRight(t)),M.update(v.position[0]+v.dimensions[0]/2,v.position[1]+v.dimensions[1]/2);var o=T.map[I(v.tileFrom[0],v.tileFrom[1])].building,l=T.map[I(v.tileTo[0],v.tileTo[1])].building;e.fillStyle="#000000",e.fillRect(0,0,M.screen[0],M.screen[1]);for(var a=0;a<T.levels;a++){for(var h=M.startingPoint[1];h<=M.endingPoint[1];++h)for(var c=M.startingPoint[0];c<=M.endingPoint[0];++c){if(0==a){var p=u[T.map[I(c,h)].type];e.drawImage(w,p.sprite[0].x,p.sprite[0].y,p.sprite[0].w,p.sprite[0].h,M.offset[0]+40*c,M.offset[1]+40*h,40,40)}var f=T.map[I(c,h)].object;if(null!=f&&y[f.type].zIndex==a){var d=y[f.type];e.drawImage(w,d.sprite[0].x,d.sprite[0].y,d.sprite[0].w,d.sprite[0].h,M.offset[0]+40*c+d.offset[0],M.offset[1]+40*h+d.offset[1],d.sprite[0].w,d.sprite[0].h)}2==a&&0!=T.map[I(c,h)].buildingType&&T.map[I(c,h)].building!=o&&T.map[I(c,h)].building!=l&&(tile=u[T.map[I(c,h)].buildingType],x=G(tile.sprite,tile.spritetimeLast,tile.animation),e.drawImage(w,x.x,x.y,x.w,x.h,M.offset[0]+40*c,M.offset[1]+40*h,40,40))}if(1==a){var m=v.sprites[v.direction];e.drawImage(w,m[0].x,m[0].y,m[0].w,m[0].h,M.offset[0]+v.position[0],M.offset[1]+v.position[1],v.dimensions[0],v.dimensions[1])}}var x=v.sprites[v.direction];e.drawImage(w,x[0].x,x[0].y,x[0].w,x[0].h,M.offset[0]+v.position[0],M.offset[1]+v.position[1],v.dimensions[0],v.dimensions[1]),t,requestAnimationFrame(C)}else requestAnimationFrame(C)}j.prototype.buildMapFromData=function(t,i,e){if(this.w=i,this.h=e,t.length!=i*e)return!1;this.map.length=0;for(var o=0;o<e;o++)for(var n=0;n<i;n++)this.map.push(new P(n,o,t[n+i*o]));return!0},j.prototype.addBuildings=function(t){for(var i in t){var e=t[i];if(!(e.x<0||e.y<0||e.x>=this.w||e.y>=this.h||e.x+e.w>this.w||e.y+e.h>this.h||e.data.length!=e.w*e.h))for(var o=0;o<e.h;o++)for(var n=0;n<e.w;n++){var s=(e.y+o)*this.w+e.x+n;this.map[s].building=e,this.map[s].buildingType=e.data[o*e.w+n]}}},A.prototype.placeAt=function(t,i){T.map[I(this.x,this.y)].object==this&&(T.map[I(this.x,this.y)].object=null),this.x=t,this.y=i,T.map[I(t,i)].object=this},window.onload=function(){e=document.getElementById("miumiuTale").getContext("2d"),requestAnimationFrame(C),window.addEventListener("keydown",(function(t){t.keyCode>=37&&t.keyCode<=40&&(r[t.keyCode]=!0)})),window.addEventListener("keyup",(function(t){t.keyCode>=37&&t.keyCode<=40&&(r[t.keyCode]=!1)})),M.screen=[document.getElementById("miumiuTale").width,document.getElementById("miumiuTale").height],(w=new Image).onerror=function(){e=null,alert("Failed loading gametile.")},w.onload=function(){g=!0},w.src="src/images/tilesetestt.png",T.buildMapFromData(o,20,20),T.addBuildings(F),T.map[42].eventEnter=function(){console.log("Entered tile 2,2")},new A(2).placeAt(9,1),new A(2).placeAt(9,2),new A(1).placeAt(5,5),new A(1).placeAt(7,5),new A(1).placeAt(8,5),new A(3).placeAt(4,6),new A(3).placeAt(9,6),new A(3).placeAt(7,6),new A(3).placeAt(12,6),new A(4).placeAt(2,2)}}]);
//# sourceMappingURL=main.js.map