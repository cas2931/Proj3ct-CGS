(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),i=(a(84),a(85),a(37)),l=a(10),s=(a(86),a(41)),u=a(17),d=a.n(u),m=a(22),g=a(23),p=a(24),h=a(26),f=a(25),v=a(27),b=a(148),k=a(153),E=a(143),w=a(147),y=a(21),x=a.n(y),j=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleSignUp=Object(m.a)(d.a.mark(function e(){var t,n,r,o;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.email,r=t.password,e.next=3,x.a.post("/api/auth/signup",{email:n,password:r});case 3:o=e.sent,o.data,a.props.history.push("/");case 6:case"end":return e.stop()}},e)})),a.handleChange=function(e){a.setState(Object(s.a)({},e.target.name,e.target.value))},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{container:!0,spacing:0,direction:"column",alignContent:"center",alignItems:"flex-start",justify:"middle",style:{minHeight:"auto"}},r.a.createElement(w.a,{component:"h1",variant:"h5",color:"secondary",align:"center"},"Sign Up"),r.a.createElement(k.a,{style:{backgroundColor:"white"},margin:"normal",name:"email",label:"Email",variant:"filled",type:"text",fullWidth:"true",value:this.state.email,onChange:this.handleChange}),r.a.createElement(k.a,{style:{backgroundColor:"white"},margin:"normal",name:"password",label:"Password",type:"text",variant:"filled",fullWidth:"true",value:this.state.password,onChange:this.handleChange}),r.a.createElement(b.a,{onClick:this.handleSignUp,variant:"contained",color:"secondary"},"Sign Up"))}}]),t}(r.a.Component),S=Object(l.f)(j),C=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleLogin=Object(m.a)(d.a.mark(function e(){var t,n,r,o;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.email,r=t.password,e.next=3,x.a.post("/api/auth/login",{email:n,password:r});case 3:o=e.sent,o.data,a.props.history.push("/user");case 6:case"end":return e.stop()}},e)})),a.handleChange=function(e){a.setState(Object(s.a)({},e.target.name,e.target.value))},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{container:!0,spacing:0,direction:"column",alignContent:"center",alignItems:"flex-start",justify:"middle",style:{minHeight:"auto"}},r.a.createElement(w.a,{component:"h1",variant:"h5",color:"secondary",align:"center"},"Login"),r.a.createElement(k.a,{style:{backgroundColor:"white"},margin:"normal",name:"email",label:"Email",variant:"filled",type:"text",fullWidth:"true",value:this.state.email,onChange:this.handleChange}),r.a.createElement(k.a,{style:{backgroundColor:"white"},margin:"normal",name:"password",label:"Password",type:"text",variant:"filled",fullWidth:"true",value:this.state.password,onChange:this.handleChange}),r.a.createElement(b.a,{onClick:this.handleLogin,variant:"contained",color:"secondary"},"Login"))}}]),t}(r.a.Component),O=Object(l.f)(C),z=function(){return x.a.get("https://listen-api.listennotes.com/api/v2/genres?top_level_only=1",{headers:{"X-ListenAPI-Key":"c71cc875bf45492a908f379f06883216"}})},N=function(e){return x.a.get("https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id="+e+"&page=2&region=us&safe_mode=0",{headers:{"X-ListenAPI-Key":"c71cc875bf45492a908f379f06883216"}})},B=a(149),W=a(150),P=a(151),I=a(152),L=a(68),R=a.n(L),A=a(70),_=a.n(A),M=a(69),U=a.n(M),H=(a(110),a(50)),T=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={genres:[],podcasts:[]},a.handleInputChange=function(e){a.setState({search:e.target.value})},a.handleFormSubmit=function(e){e.preventDefault()},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;z().then(function(){var t=Object(m.a)(d.a.mark(function t(a){var n,r;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a.data.genres),n=a.data.genres.map(function(e){return N(e.id)}),t.next=4,Promise.all(n);case 4:r=t.sent,console.log(r),e.setState({podcasts:r});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden"}},this.state.podcasts.map(function(e){var t=e.data;return r.a.createElement(B.a,{flexWrap:"nowrap",cols:5,cellHeight:"auto"},t.podcasts.map(function(e){return r.a.createElement(W.a,{key:e.thumbnail},r.a.createElement("img",{style:{transform:"translateY(0)"},src:e.thumbnail,alt:e.title}),r.a.createElement(P.a,{title:r.a.createElement(I.a,{"aria-label":"star ".concat(e.title)},r.a.createElement(H.Tooltip,{title:e.description,position:"top",trigger:"click"},r.a.createElement(R.a,{fontSize:"large",color:"primary"})),r.a.createElement(H.Tooltip,{title:t.name,position:"top",trigger:"click"},r.a.createElement(U.a,{style:{color:"green"},fontSize:"large"})),r.a.createElement("a",{href:e.website,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(_.a,{fontSize:"large",color:"secondary"})))}))}))}))}}]),t}(n.Component);var D=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"columns sticky-footer-css-body text-center",style:{overflow:"auto"}},r.a.createElement(T,null," ")),r.a.createElement("div",{className:"columns shrink sticky-footer text-center",style:{backgroundColor:"black"}},r.a.createElement("div",{className:"grid-x"},r.a.createElement("div",{className:"cell auto text-center"},r.a.createElement(S,null)),r.a.createElement("div",{className:"cell auto text-center",style:{backgroundColor:"black",backgroundImage:"url('../images/ListenNotes-non-white-background.png')",width:"100%",backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}),r.a.createElement("div",{className:"cell auto text-center"},r.a.createElement(O,null)))))},J=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleLogOut=Object(m.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/auth/logout");case 2:t=e.sent,t.data,a.props.history.push("/");case 5:case"end":return e.stop()}},e)})),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("article",{className:"grid-container fluid",style:{backgroundColor:"darkred",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",WebkitBackgroundSize:"cover",MozBackgroundSize:"cover",OBackgroundSize:"cover"}},r.a.createElement("div",{className:"row",style:{backgroundImage:"url('./images/wood1-opt.jpg')",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",WebkitBackgroundSize:"cover",MozBackgroundSize:"cover",OBackgroundSize:"cover"}},r.a.createElement("div",{className:"grid-x align-center"},r.a.createElement("div",{className:"cell medium-8 text-center"},r.a.createElement(w.a,{variant:"h3"},"Spotify Search"),r.a.createElement("div",null,r.a.createElement(k.a,{fullWidth:"true",style:{backgroundColor:"white"},onChange:this.handleTermChange,placeholder:"Enter A Song, Album, or Artist"}),r.a.createElement(b.a,{variant:"contained",onClick:this.search,className:"SearchButton"},"SEARCH"))))),r.a.createElement("br",null),r.a.createElement("div",{className:"row",style:{backgroundImage:"url('./images/wood2-opt.jpg')",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",WebkitBackgroundSize:"cover",MozBackgroundSize:"cover",OBackgroundSize:"cover"}},r.a.createElement("div",{className:"grid-x align-center"},r.a.createElement("div",{className:"cell medium-8 text-center"},r.a.createElement(w.a,{variant:"h3"},"Search Results")))),r.a.createElement("br",null),r.a.createElement("div",{className:"row",style:{backgroundImage:"url('./images/wood3-opt.jpg')",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",WebkitBackgroundSize:"cover",MozBackgroundSize:"cover",OBackgroundSize:"cover"}},r.a.createElement("div",{className:"grid-x align-center"},r.a.createElement("div",{className:"cell medium-8 text-center"},r.a.createElement(w.a,{variant:"h3"},"Playlist Creator"))))),r.a.createElement("div",{className:"sticky-footer fluid text-center",style:{backgroundColor:"black",backgroundImage:"url('../images/spotify_Logo_RGB_White.png')",width:"100%",height:"250px",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}},r.a.createElement(b.a,{onClick:this.handleLogOut,variant:"contained"},"Logout ")))}}]),t}(r.a.Component);var K=function(){return Object(l.e)(),r.a.createElement("div",null,r.a.createElement("div",{className:"fixed-footer-css fluid",style:{backgroundColor:"black"}},r.a.createElement("div",{className:"row expanded flex-dir-column"},r.a.createElement("div",{className:"grid-x fluid"},r.a.createElement("div",{className:"cell auto",style:{backgroundImage:"url('./images/butlerL3.jpg')",backgroundPosition:"center",backgroundSize:"100% 100%",height:"550px",backgroundRepeat:"no-repeat"}}),r.a.createElement("div",{className:"cell auto",style:{backgroundImage:"url('./images/BlownAway.jpg')",backgroundPosition:"center",backgroundSize:"100% 100%",height:"550px",backgroundRepeat:"no-repeat"}},r.a.createElement("div",{className:"columns shrink header text-center"})),r.a.createElement("div",{className:"cell auto",style:{backgroundImage:"url('./images/butlerR3.jpg')",backgroundPosition:"center",backgroundSize:"100% 100%",height:"550px",backgroundRepeat:"no-repeat"}})))))};var X=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(K,null),r.a.createElement(l.a,{exact:!0,path:"/",component:D}),r.a.createElement(l.a,{exact:!0,path:"/user",component:J}),r.a.createElement(l.a,{exact:!0,path:"/login",component:O}),r.a.createElement(l.a,{exact:!0,path:"/signup",component:S})))},F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(X,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");F?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):G(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):G(e)})}}()},79:function(e,t,a){e.exports=a(113)},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.4e47f7b1.chunk.js.map