(this.webpackJsonpquizapplication=this.webpackJsonpquizapplication||[]).push([[0],{14:function(e,t,n){},25:function(e,t,n){e.exports=n(37)},30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(20),c=n.n(r),l=(n(30),n(21)),i=n(2),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var u=n(8),m=n.n(u),p=n(10),h=n(7),f=(n(14),n(24)),g=n(23),b=function(){var e=Object(p.a)(m.a.mark((function e(t,n){var a,o,r,c,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api.php?amount=".concat(t,"&difficulty=").concat(n));case 2:return a=e.sent,e.next=5,a.json();case 5:return o=e.sent,r=o.results,c=function(e){return Object(g.a)(e).sort((function(){return Math.random()-.5}))},l=r.map((function(e){return{question:e.question,answer:e.correct_answer,options:c(e.incorrect_answers.concat(e.correct_answer))}})),e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=1;var E=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("easy"),l=Object(h.a)(c,2),i=l[0],s=l[1];function d(e){parseInt(e.target.value)<=50?r(e.target.value):r("50")}function u(){""!==n?window.location.assign("/"+n+"/"+i):alert("please fill complete information")}return o.a.createElement("div",null,o.a.createElement("div",{className:"row d-none d-md-block",style:{backgroundColor:"#e6edea",height:"100vh",width:"100%",paddingTop:"10%",overflow:"hidden"}},o.a.createElement("div",{className:"col-12 text-center align-self-center"},o.a.createElement("h5",{style:{fontFamily:"Lucida Console, Courier, monospace",color:"#e334c0"}},"Online Quiz"),o.a.createElement("input",{type:"number",onChange:function(e){d(e)},style:{height:"40px",width:"50%",borderBottom:"2px solid #e334c0",borderTop:"0px",borderLeft:"0px",borderRight:"0px",backgroundColor:"#e6edea"},placeholder:"Enter no of Question"}),o.a.createElement("br",null),o.a.createElement("span",{className:"text-left"},"Question Limit 1 to 50"),o.a.createElement("br",null),o.a.createElement("select",{onChange:function(e){s(e.target.value)},style:{height:"40px",width:"50%",marginTop:"1%",borderTop:"0px",borderBottom:"2px solid #e334c0",borderLeft:"0px",borderRight:"0px",backgroundColor:"#e6edea"}},o.a.createElement("option",{value:"easy"},"easy"),o.a.createElement("option",null,"hard")),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){u()},style:{height:"40px",backgroundColor:"#e334c0",color:"white",border:"2px solid #e334c0",width:"50%",fontSize:"20px",marginTop:"1%"}},"Start Quiz"))),o.a.createElement("div",{className:"row d-xl-none d-lg-none d-md-none",style:{backgroundColor:"#e6edea",height:"100vh",width:"100%",overflow:"hidden"}},o.a.createElement("div",{className:"col-12 text-center align-self-center"},o.a.createElement("h5",{style:{fontFamily:"Lucida Console, Courier, monospace",color:"#e334c0"}},"Online Quiz"),o.a.createElement("input",{type:"number",onChange:function(e){d(e)},style:{height:"40px",width:"80%",borderBottom:"2px solid #e334c0",borderTop:"0px",borderLeft:"0px",borderRight:"0px",backgroundColor:"#e6edea"},placeholder:"Enter no of Question"}),o.a.createElement("br",null),o.a.createElement("span",{className:"text-left"},"Question Limit 1 to 50"),o.a.createElement("br",null),o.a.createElement("select",{onChange:function(e){s(e.target.value)},style:{height:"40px",width:"80%",marginTop:"1%",borderTop:"0px",borderBottom:"2px solid #e334c0",borderLeft:"0px",borderRight:"0px",backgroundColor:"#e6edea"}},o.a.createElement("option",{value:"easy"},"easy"),o.a.createElement("option",null,"hard")),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){u()},style:{height:"40px",backgroundColor:"#e334c0",color:"white",border:"2px solid #e334c0",width:"80%",fontSize:"20px",marginTop:"1%"}},"Start Quiz"))))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,null,o.a.createElement("div",null,o.a.createElement(i.a,{exact:!0,path:"/",component:E}),o.a.createElement(i.a,{exact:!0,path:"/:number/:level",component:function(e){var t,n=Object(a.useState)([{question:"",answer:"",options:["loading","loading","loading","loading"]}]),r=Object(h.a)(n,2),c=r[0],l=r[1],i=Object(a.useState)(0),s=Object(h.a)(i,2),d=s[0],u=s[1],g=Object(a.useState)(0),E=Object(h.a)(g,2),v=E[0],x=E[1],y=Object(a.useState)(0),k=Object(h.a)(y,2),N=k[0],C=k[1],S=100/parseInt(e.match.params.number),O=Object(a.useState)(0),j=Object(h.a)(O,2),T=j[0],A=j[1],L=Object(a.useState)(!1),R=Object(h.a)(L,2),z=R[0],W=R[1],I=Object(a.useState)(0),M=Object(h.a)(I,2),Q=M[0],B=M[1];function q(e){c[Q].answer===e?(x(v+1),console.log(v)):(u(d-1),console.log(d))}Object(a.useEffect)((function(){function e(){return(e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}));var U=o.a.createElement(f.a,{variant:"info",now:T});function P(){A(T+S),Q<parseInt(e.match.params.number)-1?B(Q+1):(W(!0),C(1))}var D=function(){var n=Object(p.a)(m.a.mark((function n(){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b(parseInt(e.match.params.number),e.match.params.level);case 2:t=n.sent,1===w&&l(t),w++;case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return console.log(c),o.a.createElement("div",{className:"DesignCard",style:{height:"100vh",width:"100%",overflow:"hidden"}},o.a.createElement("div",null,U),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row text-left",style:{marginTop:"5%"}},o.a.createElement("h3",{className:"col-12",style:{color:"white"}},"Question:",Q+1)),o.a.createElement("div",{style:{paddingTop:"2%"},className:"row"},o.a.createElement("h5",{className:"col-12",style:{color:"white"}},c[Q].question)),c[Q].options.map((function(e,t){return o.a.createElement("div",{key:t,className:"row ",style:{borderRadius:"14%"}},o.a.createElement("h6",{className:"col-12 ",style:{backgroundColor:"#E334C0",marginLeft:"1%",paddingTop:"2%",paddingBottom:"2%",color:"white"}},o.a.createElement("input",{disabled:z,checked:!1,onChange:function(){console.log(P(),q(e))},type:"radio"})," ",e))})),o.a.createElement("div",{className:"row d-flex justify-content-center"},o.a.createElement("input",{className:"col-6 d-flex justify-content-center",onClick:function(){console.log(window.location.assign("/"+v+"/"+d+"/"+v+d))},style:{height:"40px",opacity:N,backgroundColor:"#cd7ae5",color:"white",fontWeight:"bold",border:"2px solid #cd7ae5",letterSpacing:"3px",fontSize:"100%"},value:"CHECK RESULTE",type:"button"}))))}}),o.a.createElement(i.a,{exact:!0,path:"/:ObtainedMarks/:detectmarks/:percentage",component:function(e){var t,n=parseInt(e.match.params.ObtainedMarks)+-parseInt(e.match.params.detectmarks),a=parseInt(e.match.params.ObtainedMarks),r=a/n*100;return t=r>=50?"CONGRATULATIONS YOUE ARE PASSED THIS TEST ":"failed please try againe",o.a.createElement("div",null,o.a.createElement("div",{className:"DesignCard ",style:{height:"100vh",width:"100%",overflow:"hidden"}},o.a.createElement("div",{className:"container"},o.a.createElement("div",{style:{marginTop:"10%"},className:"row align-self-center text-center"},o.a.createElement("h3",{className:"col-12",style:{letterSpacing:"2px",wordSpacing:"4px",color:"white"}},t," ")),o.a.createElement("div",{className:"row text-center",style:{marginTop:"3%"}},o.a.createElement("h4",{style:{color:"white"},className:"col-12"},"Total Marks :",n),o.a.createElement("h4",{style:{color:"white"},className:"col-12"},"Obtainned Marks :",a),o.a.createElement("h4",{style:{color:"white"},className:"col-12"},"PERCENTAGE :",r.toFixed(2))),o.a.createElement("div",{className:"row d-flex justify-content-center ",style:{marginTop:"3%"}},o.a.createElement("input",{className:"col-6 d-flex justify-content-center",onClick:function(){window.location.assign("/")},style:{height:"40px",backgroundColor:"#cd7ae5",color:"white",fontWeight:"bold",border:"2px solid #cd7ae5",letterSpacing:"3px",fontSize:"20px"},value:"Start Again",type:"button"})))),o.a.createElement("div",{className:"DesignCard d-none",style:{height:"100vh",width:"100%",overflow:"hidden"}},o.a.createElement("div",{className:"container"},o.a.createElement("div",{style:{marginTop:"10%"},className:"row align-self-center text-center"},o.a.createElement("h2",{className:"col-12",style:{letterSpacing:"2px",wordSpacing:"4px",color:"white"}},t," ")),o.a.createElement("div",{className:"row text-center",style:{marginTop:"3%"}},o.a.createElement("h3",{style:{color:"white"},className:"col-12"},"Total Marks :",n),o.a.createElement("h3",{style:{color:"white"},className:"col-12"},"Obtainned Marks :",a),o.a.createElement("h3",{style:{color:"white"},className:"col-12"},"PERCENTAGE :",r.toFixed(2))),o.a.createElement("div",{className:"row d-flex justify-content-center ",style:{marginTop:"3%"}},o.a.createElement("input",{className:"col-4 d-flex justify-content-center",onClick:function(){window.location.assign("/")},style:{height:"40px",backgroundColor:"#cd7ae5",color:"white",fontWeight:"bold",border:"2px solid #cd7ae5",letterSpacing:"3px",fontSize:"100%"},value:"Start Again",type:"button"})))))}}))),"  "),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");s?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):d(t,e)}))}}()}},[[25,1,2]]]);
//# sourceMappingURL=main.3fc107a9.chunk.js.map