(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(5),o=n.n(l),i=(n(3),n(4),n(6)),c=n(1),m=n(18),d=function(e){var t=e.deadlineTimestamp,n=e.warningColor,l=e.warningLimit,o=e.standardColor,i=e.timerUpColor,d=e.borderColor,s=e.warningBorderColor,g=e.showFooterInfo,p=e.showTitle,u=e.useTimerFont,f=e.showTimerIcon,h=Object(r.useState)(""),E=Object(c.a)(h,2),w=E[0],b=E[1],y=Object(r.useState)(""),v=Object(c.a)(y,2),x=v[0],S=v[1],j=Object(r.useState)(""),C=Object(c.a)(j,2),O=C[0],F=C[1],T=Object(r.useState)(""),I=Object(c.a)(T,2),A=I[0],D=I[1],M=Object(r.useState)(!1),W=Object(c.a)(M,2),z=W[0],k=W[1],B=Object(r.useState)(1),L=Object(c.a)(B,2),U=L[0],J=L[1],P=t.split(/[- :]/),_=new Date(P[0],P[1]-1,P[2],P[3],P[4],P[5]),N=new Date(_).getTime();return Object(r.useEffect)(function(){if(!z){var e=setInterval(function(){var t=(new Date).getTime();J(N-t);var n=Math.floor(U/864e5),r=Math.floor(U%864e5/36e5),a=Math.floor(U%36e5/6e4),l=Math.floor(U%6e4/1e3);b(n),S(r),F(a),D(l),U<0&&(clearInterval(e),b(""),S(""),F(""),D(""),k(!0))},1e3);return function(){clearInterval(e)}}},[w,x,O,A,N,U,z]),a.a.createElement("section",{style:{margin:"0 auto",padding:"0 0 4rem 0 ",display:"flex",flexDirection:"column",justifyContent:"center"}},a.a.createElement("div",null,p&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{color:d,padding:".5rem",textAlign:"center"}},a.a.createElement("h3",{style:{fontSize:"2rem"}},p," ")))),f&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{textAlign:"center",padding:".5rem"}},a.a.createElement(m.a,{style:{height:"5rem",width:"5rem",color:"white"}}))),U<0||z?a.a.createElement("div",{style:{alignSelf:"center",color:i}},a.a.createElement("p",null,"TIMER UP!!!"),a.a.createElement("p",null,a.a.createElement("small",null,"Your time was up at ",t))):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{alignSelf:"center",color:o,fontFamily:u?"Chakra Petch":"inherit"}},""!==A&&w+x+O+A>0?a.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:".5rem",color:l&&n?U>l-1e3?o:n:o}},a.a.createElement("div",{style:{padding:".5rem 0",border:"2px solid",borderColor:l&&s?U>l-1e3?d:s:d,width:"70px",textAlign:"center",alignSelf:"center"}},a.a.createElement("p",{style:{fontWeight:"bold",fontSize:"1.5rem"}},w," d")),a.a.createElement("div",{style:{padding:".5rem 0",border:"2px solid",borderColor:l&&s?U>l-1e3?d:s:d,width:"70px",textAlign:"center",alignSelf:"center"}},a.a.createElement("p",{style:{fontWeight:"bold",fontSize:"1.5rem"}},x," h")),a.a.createElement("div",{style:{padding:".5rem 0",border:"2px solid",borderColor:l&&s?U>l-1e3?d:s:d,width:"70px",textAlign:"center",alignSelf:"center"}},a.a.createElement("p",{style:{fontWeight:"bold",fontSize:"1.5rem"}},O," m")),a.a.createElement("div",{style:{padding:".5rem 0",border:"2px solid",borderColor:l&&s?U>l-1e3?d:s:d,width:"70px",textAlign:"center",alignSelf:"center"}},a.a.createElement("p",{style:{fontWeight:"bold",fontSize:"1.5rem"}},A," s"))):a.a.createElement("div",null,"Loading..."))),a.a.createElement("div",null,g&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{color:d,padding:".5rem",textAlign:"center",fontFamily:"inherit"}},a.a.createElement("p",null,"Deadline set for ",t)))))};n(14);var s=function(){return a.a.createElement("main",{style:Object(i.a)({position:"relative",width:"100vw",height:"100vh",display:"flex",justifyContent:"center",flexDirection:"column",flexWrap:"wrap"},"position","relative"),className:"main__bg"},a.a.createElement("div",{style:{}},a.a.createElement(d,{deadlineTimestamp:"2022-11-12 0:00:00-04",borderColor:"lightgray",warningBorderColor:"salmon",standardColor:"#e6e6e6",warningColor:"salmon",warningLimit:36e5,timerUpColor:"salmon",showFooterInfo:!1,showTitle:"Duolingo 100 day countdown!",useTimerFont:!0,showTimerIcon:!0})),a.a.createElement("img",{src:"./duolingo.png",style:{position:"absolute",bottom:0,width:"100px",height:"100px",objectFit:"contain",overflow:"hidden",margin:"2rem 0 8rem",alignSelf:"center"}}))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s,null)),document.getElementById("root"))},3:function(e,t,n){},4:function(e,t,n){},7:function(e,t,n){e.exports=n(16)}},[[7,2,1]]]);
//# sourceMappingURL=main.7aa08f96.chunk.js.map