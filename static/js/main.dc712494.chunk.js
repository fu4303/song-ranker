(this["webpackJsonpspotify-song-ranker"]=this["webpackJsonpspotify-song-ranker"]||[]).push([[0],{26:function(n,e,t){"use strict";(function(n){var r=t(5),a=t(6),i=t.n(a),c=t(0),o=t.n(c),u=t(27),l=t(31),s=t(36),f=t(34),d=t(35);i.a.defaults.baseURL="https://api.spotify.com";var m="search",p="ranker",b="album_picker",h="results";e.a=function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),a=(t[0],t[1]),g=Object(c.useState)(null),v=Object(r.a)(g,2),x=v[0],O=v[1],j=Object(c.useState)(null),k=Object(r.a)(j,2),E=k[0],y=k[1],w=Object(c.useState)([]),S=Object(r.a)(w,2),C=S[0],A=S[1],z=Object(c.useState)([]),I=Object(r.a)(z,2),_=I[0],R=I[1],B=Object(c.useState)([]),G=Object(r.a)(B,2),N=G[0],T=G[1],U=function(n,e){var t=o.a.useState((function(){var t=window.localStorage.getItem(e);return null!==t?JSON.parse(t):n})),a=Object(r.a)(t,2),i=a[0],c=a[1];return o.a.useEffect((function(){window.localStorage.setItem(e,JSON.stringify(i))}),[e,i]),[i,c]}([]),L=Object(r.a)(U,2),M=L[0],F=L[1],P=Object(c.useState)((function(){return M.length?h:m})),D=Object(r.a)(P,2),J=D[0],H=D[1];return Object(c.useEffect)((function(){var e={headers:{Authorization:"Basic "+new n("f170a7aa1b8e4e11ae2e80cbbc695b31:4f284636dc1244f3b12a5b1b462f8466").toString("base64"),"Content-Type":"application/x-www-form-urlencoded"}};i.a.post("https://accounts.spotify.com/api/token","grant_type=client_credentials",e).then((function(n){if(n.data){var e=n.data.access_token;a(e),i.a.defaults.headers.common.Authorization="Bearer "+e}})).catch((function(n){console.log(n)}))}),[]),o.a.createElement("div",null,o.a.createElement(l.a,null),J===m&&o.a.createElement(d.a,{setScreen:H,selectedItem:E,setSelectedItem:y,setSelectedAlbums:T}),J===b&&o.a.createElement(u.a,{setScreen:H,selectedItem:E,setAlbums:A,albums:C,selectedAlbums:N,setSelectedAlbums:T}),J===p&&o.a.createElement(s.a,{setScreen:H,selectedItem:E,songs:_,albums:N,setSongs:R,rankedList:M,setRankedList:F}),J===h&&o.a.createElement(f.a,{rankedList:M,token:x,setToken:O,restart:function(){F([]),R([]),T([]),A([]),y(null),H(m),window.location.reload()}}))}}).call(this,t(44).Buffer)},27:function(n,e,t){"use strict";var r=t(3),a=t(8),i=t(6),c=t.n(i),o=t(0),u=t.n(o),l=t(1),s=t(4);function f(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  height: 56px;\n  margin-bottom: 1ch;\n  border-radius: 10px;\n  padding: "," 2ch;\n  background-color: ",";\n"]);return f=function(){return n},n}function d(){var n=Object(r.a)(["\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  margin-right: 2ch;\n  background-color: white;\n"]);return d=function(){return n},n}function m(){var n=Object(r.a)(["\n  height: 40px;\n  width: 40px;\n  margin-right: 2ch;\n"]);return m=function(){return n},n}function p(){var n=Object(r.a)(["\n  padding: 16px;\n  padding-top: 70px;\n  padding-bottom: 32px;\n"]);return p=function(){return n},n}function b(){var n=Object(r.a)(["\n  color: ",";\n  font-size: 14px;\n"]);return b=function(){return n},n}var h=Object(l.b)(s.e)(b(),(function(n){return n.theme.lightBlue})),g=l.b.div(p()),v=l.b.img(m()),x=l.b.span(d()),O=l.b.div(f(),(function(n){return n.selected?"1ch":"0"}),(function(n){return n.selected?n.theme.darkestGray:n.theme.background}));e.a=function(n){var e=n.setScreen,t=n.selectedItem,r=n.setAlbums,i=n.albums,l=n.selectedAlbums,f=n.setSelectedAlbums;Object(o.useEffect)((function(){c.a.get("/v1/artists/".concat(t.id,"/albums?market=US&include_groups=album&limit=50")).then((function(n){r(n.data.items)})).catch((function(n){return console.log(n)}))}),[r,t]);return u.a.createElement(g,null,u.a.createElement(s.d,null,"Select which albums to include",u.a.createElement("br",null)," in your ranking"),u.a.createElement(h,null,"For best results, select at most one version of each album to avoid duplicate songs"),i.length&&u.a.createElement("div",null,i.map((function(n,e){return u.a.createElement(O,{onClick:function(){return function(n){f((function(e){var t=Object(a.a)(e);return t.some((function(e){return e===n}))?t.splice(t.indexOf(n),1):t.push(n),t}))}(n)},key:e,selected:!!l.includes(n)},n.images[0]?u.a.createElement(v,{src:n.images[0].url}):u.a.createElement(x,null),u.a.createElement(s.e,null,n.name))}))),l.length?u.a.createElement(s.a,{onClick:function(){e("ranker")},block:!0},"BEGIN RANKING"):null)}},31:function(n,e,t){"use strict";var r=t(3),a=t(0),i=t.n(a),c=t(1);function o(){var n=Object(r.a)(["\n  position: absolute;\n  background-color: ",";\n  width: 100%;\n  height: 52px;\n  padding-left: 16px;\n  padding-top: 16px;\n  box-sizing: border-box;\n  top: 0;\n"]);return o=function(){return n},n}var u=t(66),l=c.b.div(o(),(function(n){return n.theme.darkestGray}));e.a=function(){return i.a.createElement(l,null,i.a.createElement("img",{src:u,alt:"Rankify Logo"}))}},34:function(n,e,t){"use strict";var r=t(2),a=t(5),i=t(0),c=t.n(i),o=t(1),u=t(4),l=t(6),s=t.n(l);function f(){var n=Object(r.a)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 12px;\n  padding: 8px 32px;\n  color: ",";\n"]);return f=function(){return n},n}function d(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  margin-top: 32px;\n"]);return d=function(){return n},n}function m(){var n=Object(r.a)(["\n  font-size: 14px;\n  color: white;\n"]);return m=function(){return n},n}function p(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return p=function(){return n},n}function b(){var n=Object(r.a)(["\n  font-style: italic;\n  font-weight: normal;\n  font-size: 12px;\n  color: #8d9193;\n  margin-top: 0.5em;\n"]);return b=function(){return n},n}function h(){var n=Object(r.a)(["\n  font-style: normal;\n  font-weight: bold;\n  font-size: 13px;\n  color: white;\n  margin-bottom: 0px;\n"]);return h=function(){return n},n}function g(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  height: 56px;\n  margin-bottom: 1ch;\n  border-radius: 10px;\n  padding: "," 2ch;\n"]);return g=function(){return n},n}function v(){var n=Object(r.a)(["\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  margin-right: 2ch;\n  background-color: white;\n"]);return v=function(){return n},n}function x(){var n=Object(r.a)(["\n  height: 40px;\n  width: 40px;\n  margin-right: 2ch;\n"]);return x=function(){return n},n}function O(){var n=Object(r.a)(["\n  font-size: 16px;\n  line-height: 18px;\n  color: #ffffff;\n"]);return O=function(){return n},n}function j(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n"]);return j=function(){return n},n}function k(){var n=Object(r.a)(["\n  padding: 16px;\n  padding-top: 70px;\n"]);return k=function(){return n},n}var E=["user-read-currently-playing","user-read-playback-state","streaming","user-top-read","user-library-read","playlist-read-private","playlist-modify-private","playlist-modify-public","user-read-email","user-read-private"],y=window.location.hash.substring(1).split("&").reduce((function(n,e){if(e){var t=e.split("=");n[t[0]]=decodeURIComponent(t[1])}return n}),{});window.location.hash="";var w=o.b.div(k()),S=o.b.div(j()),C=o.b.p(O()),A=o.b.img(x()),z=o.b.span(v()),I=o.b.div(g(),(function(n){return n.selected?"1ch":"0"})),_=o.b.p(h()),R=o.b.p(b()),B=o.b.div(p()),G=o.b.p(m()),N=o.b.div(d()),T=Object(o.b)(u.b)(f(),(function(n){return n.theme.background}));e.a=function(n){var e=n.rankedList,t=n.token,r=n.setToken,o=n.restart,l=Object(i.useState)(null),f=Object(a.a)(l,2),d=f[0],m=f[1];Object(i.useEffect)((function(){var n=y.access_token;n&&r(n)}),[t,r]);return e.length?c.a.createElement(w,null,t?d?c.a.createElement(B,null,c.a.createElement(G,null,"Playlist created!"),c.a.createElement(u.a,{onClick:function(){window.location.href="".concat(d)}},"Open Playlist")):c.a.createElement(B,null,c.a.createElement(G,null,"Click below to save your ranking to a playlist"),c.a.createElement(u.a,{onClick:function(){s.a.get("/v1/me",{headers:{Authorization:"Bearer "+t}}).then((function(n){var r=n.data.id;s.a.post("/v1/users/".concat(r,"/playlists"),{name:"Rankify Results"},{headers:{Authorization:"Bearer "+t}}).then((function(n){m(n.data.external_urls.spotify);var r=n.data.id;s.a.post("/v1/playlists/".concat(r,"/tracks"),{uris:e.map((function(n){return n.uri}))},{headers:{Authorization:"Bearer "+t}}).catch((function(n){return console.log(n)}))})).catch((function(n){return console.log(n)}))})).catch((function(n){return console.log(n)}))}},"Create Spotify Playlist")):c.a.createElement(B,null,c.a.createElement(G,null,"Log in with Spotify to save your ranking to a playlist"),c.a.createElement(u.c,{onClick:function(){return window.location.href="".concat("https://accounts.spotify.com/authorize","?client_id=f170a7aa1b8e4e11ae2e80cbbc695b31&redirect_uri=").concat("https://katherinepeterson.github.io/rankify/","&scope=").concat(E.join("%20"),"&response_type=token&show_dialog=true")}},"LOG IN WITH SPOTIFY")),c.a.createElement(N,null,c.a.createElement(u.d,{style:{margin:0}},"Your Ranking"),c.a.createElement(T,{onClick:o},"START OVER")),e.map((function(n,e){return c.a.createElement(S,{key:e},c.a.createElement(C,null,"#",e+1),c.a.createElement(I,{key:e},n.image_url?c.a.createElement(A,{src:n.image_url}):c.a.createElement(z,null),c.a.createElement("div",null,c.a.createElement(_,null,n.name),c.a.createElement(R,null,n.artists[0].name))))}))):null}},35:function(n,e,t){"use strict";var r=t(2),a=t(5),i=t(6),c=t.n(i),o=t(0),u=t.n(o),l=t(1),s=t(4);function f(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  height: 56px;\n  margin-bottom: 1ch;\n  border-radius: 10px;\n  padding: "," 2ch;\n  background-color: ",";\n"]);return f=function(){return n},n}function d(){var n=Object(r.a)(["\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  margin-right: 2ch;\n  background-color: white;\n"]);return d=function(){return n},n}function m(){var n=Object(r.a)(["\n  border-radius: ",";\n  height: 40px;\n  width: 40px;\n  margin-right: 2ch;\n"]);return m=function(){return n},n}function p(){var n=Object(r.a)(["\n  background-color: ",";\n  margin: 0;\n  padding-top: 16px;\n  padding-bottom: 16px;\n"]);return p=function(){return n},n}function b(){var n=Object(r.a)(["\n  background-color: ",";\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return b=function(){return n},n}function h(){var n=Object(r.a)(["\n  margin-left: 0.5ch;\n"]);return h=function(){return n},n}function g(){var n=Object(r.a)(["\n  display: flex;\n"]);return g=function(){return n},n}function v(){var n=Object(r.a)(["\n  position: absolute;\n  top: 0px;\n  left: 5px;\n  z-index: 10;\n"]);return v=function(){return n},n}function x(){var n=Object(r.a)(["\n  font-size: 16px;\n  border-radius: 15px;\n  border: 1px #000 solid;\n  padding: 5px 5px 5px 36px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  width: 100%;\n  box-sizing: border-box;\n\n  &:focus {\n    outline: none;\n  }\n"]);return x=function(){return n},n}function O(){var n=Object(r.a)(["\n  position: relative;\n  height: 30px;\n  flex-grow: 1;\n  margin-left: 12px;\n"]);return O=function(){return n},n}function j(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n"]);return j=function(){return n},n}function k(){var n=Object(r.a)(["\n  padding: 16px;\n  padding-top: 70px;\n"]);return k=function(){return n},n}var E,y=t(67),w=t(68),S=["artist","album"],C=l.b.div(k()),A=l.b.div(j()),z=l.b.div(O()),I=l.b.input(x()),_=l.b.img(v()),R=l.b.div(g()),B=l.b.img(h()),G=l.b.div(b(),(function(n){return n.theme.darkestGray})),N=Object(l.b)(s.e)(p(),(function(n){return n.selected?n.theme.primary:n.theme.darkestGray})),T=l.b.img(m(),(function(n){return"artist"===n.type?"50%":null})),U=l.b.span(d()),L=l.b.div(f(),(function(n){return n.selected?"1ch":"0"}),(function(n){return n.selected?n.theme.darkestGray:n.theme.background}));e.a=function(n){var e=n.setScreen,t=n.selectedItem,r=n.setSelectedItem,i=n.setSelectedAlbums,l=Object(o.useState)(S[0]),f=Object(a.a)(l,2),d=f[0],m=f[1],p=Object(o.useState)(!1),b=Object(a.a)(p,2),h=b[0],g=b[1],v=Object(o.useState)(""),x=Object(a.a)(v,2),O=x[0],j=x[1],k=Object(o.useState)(null),M=Object(a.a)(k,2),F=M[0],P=M[1],D=function(){c.a.get("/v1/search?q=".concat(O,"&type=").concat(d,"&limit=5")).then((function(n){P(n.data[d+"s"].items)}))},J=function(n,e){clearTimeout(E),E=setTimeout(n,e)};return u.a.createElement(C,{onClick:function(){return g(!1)}},u.a.createElement(s.d,null,"Search for an Artist, Album, or",u.a.createElement("br",null)," Playlist to begin ranking songs"),u.a.createElement(A,null,u.a.createElement(R,{onClick:function(n){return function(n){g((function(n){return!n})),n.stopPropagation()}(n)}},u.a.createElement(s.d,null,d.charAt(0).toUpperCase()+d.slice(1)),u.a.createElement(B,{src:y})),u.a.createElement(z,null,u.a.createElement(I,{type:"text",value:O,onChange:function(n){!function(n){j(n.target.value),J(D,300)}(n)}}),u.a.createElement(_,{src:w}))),h&&u.a.createElement(G,null,S.map((function(n,e){return u.a.createElement(N,{key:e,onClick:function(){m(n),P(null),r(null),j("")},selected:d===n},n.charAt(0).toUpperCase()+n.slice(1))}))),F&&u.a.createElement("div",null,F.map((function(n,e){return u.a.createElement(L,{onClick:function(){return r(n)},key:e,selected:t===n},n.images[0]?u.a.createElement(T,{src:n.images[0].url,type:d}):u.a.createElement(U,null),u.a.createElement(s.e,null,n.name))}))),t&&u.a.createElement(s.a,{onClick:function(){"album"===d?(i([t]),e("ranker")):e("album_picker")},style:{marginTop:"10px"},block:!0},"album"===d?"BEGIN RANKING":"NEXT"))}},36:function(n,e,t){"use strict";var r=t(3),a=t(8),i=t(37),c=t(13),o=t(6),u=t.n(o),l=t(0),s=t.n(l),f=t(1),d=t(4),m=t(32),p=t(33),b=function(){function n(e,t){Object(m.a)(this,n),this.items=e,this.ranked=[this.items[0]],this.current=1,this.middle=0,this.min=-1,this.max=1,this.done=!1,this.update=t}return Object(p.a)(n,[{key:"promptUser",value:function(){this.update((function(n){return!n}))}},{key:"setMiddle",value:function(){this.middle=Math.floor((this.min+this.max)/2)}},{key:"insertItem",value:function(n,e){this.ranked.splice(e,0,n)}},{key:"onClickCurrent",value:function(){if(this.min=this.middle+1,this.min===this.max){if(this.insertItem(this.items[this.current],this.min),this.ranked.length===this.items.length)return this.done=!0,void this.promptUser();this.current++,this.min=0,this.max=this.ranked.length-1}this.setMiddle(),this.promptUser()}},{key:"onClickMiddle",value:function(){if(this.max=this.middle,this.min===this.max||-1===this.min){if(this.insertItem(this.items[this.current],this.max),this.ranked.length===this.items.length)return this.done=!0,void this.promptUser();this.current++,this.min=0,this.max=this.ranked.length-1}this.setMiddle(),this.promptUser()}}]),n}();function h(){var n=Object(r.a)(["\n  font-style: italic;\n  font-weight: normal;\n  font-size: 12px;\n  color: #8d9193;\n  margin-top: 0.5em;\n"]);return h=function(){return n},n}function g(){var n=Object(r.a)(["\n  font-style: normal;\n  font-weight: bold;\n  font-size: 13px;\n  color: white;\n  margin-bottom: 0px;\n"]);return g=function(){return n},n}function v(){var n=Object(r.a)(["\n  max-width: 136px;\n"]);return v=function(){return n},n}function x(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 400px;\n"]);return x=function(){return n},n}function O(){var n=Object(r.a)(["\n  height: 136px;\n  width: 136px;\n"]);return O=function(){return n},n}function j(){var n=Object(r.a)(["\n  transform: translateY(60px);\n"]);return j=function(){return n},n}function k(){var n=Object(r.a)(["\n  font-weight: bold;\n  font-size: 24px;\n  margin-top: 80px;\n  margin-bottom: 80px;\n  color: white;\n"]);return k=function(){return n},n}function E(){var n=Object(r.a)(["\n  padding: 16px;\n  padding-top: 70px;\n"]);return E=function(){return n},n}var y=f.b.div(E()),w=f.b.p(k()),S=Object(f.b)(d.e)(j()),C=f.b.img(O()),A=f.b.div(x()),z=f.b.div(v()),I=f.b.p(g()),_=f.b.p(h());e.a=function(n){var e=n.setScreen,t=n.songs,r=n.setSongs,o=n.albums,f=n.setRankedList,d=n.rankedList,m=Object(l.useRef)(null),p=Object(l.useRef)(null),h=Object(l.useState)(null),g=Object(c.a)(h,2),v=g[0],x=g[1],O=s.a.useState(0),j=Object(c.a)(O,2)[1];Object(l.useEffect)((function(){var n="";o.forEach((function(e,t){0!==t&&(n+=","),n+=e.id})),u.a.get("/v1/albums?ids=".concat(n,"&market=US")).then((function(n){var e=[];n.data.albums.forEach((function(n){var t=n.tracks.items.map((function(e){var t;return Object(i.a)({},e,{image_url:null===(t=n.images[0])||void 0===t?void 0:t.url})}));e=[].concat(Object(a.a)(e),Object(a.a)(t))}));var t=e.map((function(n){return{sort:Math.random(),value:n}})).sort((function(n,e){return n.sort-e.sort})).map((function(n){return n.value}));r(t)})).catch((function(n){return console.log(n)}))}),[r,o]),Object(l.useEffect)((function(){if(null==v&&t.length){var n=Object(a.a)(t);x(new b(n,j))}}),[t,v]),Object(l.useEffect)((function(){if(m.current&&p.current&&(m.current.style.pointerEvents="auto",p.current.style.pointerEvents="auto"),null===v||void 0===v?void 0:v.done){for(var n=[],e=(null===v||void 0===v?void 0:v.ranked.length)-1;e>=0;e--)n.push(null===v||void 0===v?void 0:v.ranked[e]);f(n)}})),Object(l.useEffect)((function(){(null===v||void 0===v?void 0:v.done)&&e("results")}),[d,v,e]);var k=null===v||void 0===v?void 0:v.items[null===v||void 0===v?void 0:v.current],E=null===v||void 0===v?void 0:v.ranked[null===v||void 0===v?void 0:v.middle];return s.a.createElement(y,null,s.a.createElement(w,null,"Choose a song"),t.length&&s.a.createElement(A,null,s.a.createElement(z,{ref:m,onClick:function(){m.current.style.pointerEvents="none",p.current.style.pointerEvents="none",v.onClickCurrent()}},s.a.createElement(C,{src:null===k||void 0===k?void 0:k.image_url}),s.a.createElement(I,null,null===k||void 0===k?void 0:k.name),s.a.createElement(_,null,null===k||void 0===k?void 0:k.artists[0].name)),s.a.createElement(S,null,"OR"),s.a.createElement(z,{ref:p,onClick:function(){m.current.style.pointerEvents="none",p.current.style.pointerEvents="none",v.onClickMiddle()}},s.a.createElement(C,{src:null===E||void 0===E?void 0:E.image_url}),s.a.createElement(I,null,null===E||void 0===E?void 0:E.name),s.a.createElement(_,null,null===E||void 0===E?void 0:E.artists[0].name))))}},38:function(n,e,t){n.exports=t(39)},39:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(25),c=t.n(i),o=t(1),u=t(26);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(o.a,{theme:{primary:"#4B89AC",lightBlue:"#ACE6F6",background:"#292929",darkestGray:"#1F1F1F",gray100:"#D7DBDC",gray200:"#8D9193",spotifyGreen:"#1DB954"}},a.a.createElement(u.a,null))),document.getElementById("root"))},4:function(n,e,t){"use strict";t.d(e,"a",(function(){return s})),t.d(e,"b",(function(){return f})),t.d(e,"c",(function(){return d})),t.d(e,"d",(function(){return m})),t.d(e,"e",(function(){return p}));var r=t(3),a=t(1);function i(){var n=Object(r.a)(["\n  color: white;\n"]);return i=function(){return n},n}function c(){var n=Object(r.a)(["\n  font-size: 1.1em;\n  color: white;\n  font-weight: bold;\n"]);return c=function(){return n},n}function o(){var n=Object(r.a)(["\n  background-color: ",";\n"]);return o=function(){return n},n}function u(){var n=Object(r.a)(["\n  background-color: white;\n  color: ",";\n"]);return u=function(){return n},n}function l(){var n=Object(r.a)(["\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  font-weight: 550;\n  letter-spacing: 0.05em;\n  cursor: pointer;\n  border-radius: 40px;\n  padding: 12px 32px;\n  border: 0px;\n  background-color: ",";\n  color: white;\n  width: ",";\n"]);return l=function(){return n},n}var s=a.b.button(l(),(function(n){return n.theme.primary}),(function(n){return n.block?"100%":null})),f=Object(a.b)(s)(u(),(function(n){return n.theme.primary})),d=Object(a.b)(s)(o(),(function(n){return n.theme.spotifyGreen})),m=a.b.p(c()),p=a.b.p(i())},66:function(n,e,t){n.exports=t.p+"static/media/logo.4121971b.svg"},67:function(n,e,t){n.exports=t.p+"static/media/down.b4ef9886.svg"},68:function(n,e,t){n.exports=t.p+"static/media/magnify.dc035f9e.svg"}},[[38,1,2]]]);
//# sourceMappingURL=main.dc712494.chunk.js.map