(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{40:function(e,t,n){e.exports=n(70)},45:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),i=n.n(c),o=(n(45),n(77)),l=n(73),u=n(74),m=n(75),s=n(76),f=n(13),h=n(31),d=n.n(h),p=n(7),g=n(8);function E(){var e=Object(p.a)(['\n  font-family: "Fira Sans", sans-serif;\n  font-size: 1.1rem;\n']);return E=function(){return e},e}function v(){var e=Object(p.a)(['\n  font-size: "Merriweather", sans-serif;\n  font-size: 1.6rem;\n  position: relative;\n  cursor: pointer;\n  &:hover {\n    top: -5px;\n  }\n']);return v=function(){return e},e}function b(){var e=Object(p.a)(["\n  text-align: center;\n"]);return b=function(){return e},e}var y=function(e){var t=e.country,n=e.city,c=e.getWheather,i=Object(a.useState)(""),o=Object(f.a)(i,2),l=o[0],u=o[1],m=Object(a.useState)(!1),s=Object(f.a)(m,2),h=s[0],d=s[1];return r.a.createElement(w,null,!h&&r.a.createElement(j,{onClick:function(){return d(!0)}},n),h&&r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c(l)}},r.a.createElement("input",{type:"text",required:!0,value:l,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Search"),r.a.createElement("button",{onClick:function(){return d(!1)}},"Cancel")),r.a.createElement(x,null,t))},w=g.a.div(b()),j=g.a.h1(v()),x=g.a.h3(E());function O(){var e=Object(p.a)(["\n    width: 40%;\n  "]);return O=function(){return e},e}var W=function(e){var t=e.icon,n=g.a.img(O());return r.a.createElement(n,{src:t,alt:"Weather Icon"})},k=n(19);function S(){var e=Object(p.a)(['\n  font-family: "Merriweather", sans-serif;\n  font-size: 0.8rem;\n']);return S=function(){return e},e}var C=function(e){var t=e.temp,n=e.condition;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{theme:{group:{transitionDelay:"0ms",transitionTimingFunction:"ease-in-out",transform:"translate(0, 0)"},number:{height:"1em",fontFamily:"Fira Sans, sans-serif"},reel:{height:"1em",display:"flex",alignItems:"flex-end",overflowY:"hidden",fontSize:"45px",fontWeight:"300",lineHeight:"0.90em"}},text:"".concat(t)}),r.a.createElement(F,null,n))},F=g.a.h3(S()),I=n(37);function z(){var e=Object(p.a)(["\n    margin: 0 auto;\n    background: ",";\n    display: flex;\n    padding: 10px;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    border-radius: 15px;\n  "]);return z=function(){return e},e}var M=function(e){var t=e.temp,n=e.condition,a=e.country,c=e.city,i=e.icon,o=e.getWheather,l=0,u=0,m=null;t>12?(u=(l=255*(1-(t-12)/28))-200,m="linear-gradient(\n      to top,\n      rgba(255, ".concat(l,", 0),\n      rgba(255, ").concat(Math.abs(u),", 0)\n    )")):t<=12&&(u=(l=255*(1-(t+20)/32))-200,m="linear-gradient(\n      to top,\n      rgba(0, ".concat(l,", 255),\n      rgba(0, ").concat(Math.abs(u),", 255)\n    )"));var s=g.a.div(z(),m);return r.a.createElement(I.a.div,{initial:{scale:0},animate:{scale:1}},r.a.createElement(s,null,r.a.createElement(y,{city:c,country:a,getWheather:o}),r.a.createElement(W,{icon:i}),r.a.createElement(C,{temp:t,condition:n})))},N=n(34),A=n.n(N),B=function(e){var t=e.location,n=Object(a.useState)({temp:null,city:null,country:null,condition:null,icon:null}),c=Object(f.a)(n,2),i=c[0],o=c[1],l=Object(a.useState)(!1),u=Object(f.a)(l,2),m=u[0],s=u[1],h=function(e){s(!0),d.a.get("https://api.weatherapi.com/v1/current.json?key=f4ac401d188e480496270919202505&q=".concat(e)).then((function(e){200===e.status&&(s(!1),o({temp:e.data.current.temp_c,city:e.data.location.name,country:e.data.location.country,condition:e.data.current.condition.text,icon:e.data.current.condition.icon}))}))};return Object(a.useEffect)((function(){h(t)}),[t]),m?r.a.createElement("div",{style:{display:"flex",width:"200px",height:"240px",justifyContent:"center",alignItems:"center"}},r.a.createElement(A.a,null)):r.a.createElement("div",{className:"App"},r.a.createElement(M,{temp:i.temp,condition:i.condition,city:i.city,country:i.country,icon:i.icon,getWheather:h}))};var q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,{bg:"dark",variant:"dark"},r.a.createElement(o.a.Brand,{href:"#home"},r.a.createElement("img",{alt:"",src:"/logo192.png",width:"30",height:"30",className:"d-inline-block align-top"})," ","React Wheather")),r.a.createElement(l.a,null,r.a.createElement(u.a,null,r.a.createElement(m.a,{className:"justify-content-md-center"},r.a.createElement(s.a,null,r.a.createElement(B,{location:"Calicut"})),r.a.createElement(s.a,null,r.a.createElement(B,{location:"Kalpetta"})),r.a.createElement(s.a,null,r.a.createElement(B,{location:"Kochi"})),r.a.createElement(s.a,null,r.a.createElement(B,{location:"Trivandrum"}))))),r.a.createElement(m.a,{className:"justify-content-md-center"},r.a.createElement(s.a,{md:"auto"},r.a.createElement("a",{href:"https://www.weatherapi.com/",title:"Free Weather API"},r.a.createElement("img",{src:"//cdn.weatherapi.com/v4/images/weatherapi_logo.png",alt:"Weather data by WeatherAPI.com",border:"0"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(69);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.5980480e.chunk.js.map