(this.webpackJsonpreaktorassign=this.webpackJsonpreaktorassign||[]).push([[0],{63:function(e,t,n){},64:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(21),s=n.n(c),i=(n(63),n(64),n(26)),l=n(47),o=n.n(l),d=n(95),j=n(97),h=n(98),x=n(99),u=n(4),b=Object(d.a)((function(e){return{margin:{margin:e.spacing(1),zIndex:1},extendedIcon:{marginRight:e.spacing(1)}}})),p=function(e){var t=e.manufacture,n=e.elementID,a=b(),c=Object(r.useState)(),s=Object(i.a)(c,2),l=s[0],d=s[1],p=Object(r.useState)(!1),f=Object(i.a)(p,2),O=f[0],g=f[1],m=Object(r.useState)(!0),y=Object(i.a)(m,2),v=y[0],k=y[1],C=function(){g(!0),fetch("https://erkanisufreakt.azurewebsites.net/manufacture/",{method:"POST",body:JSON.stringify({manufacture:t,elementID:n}),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();k(!0)})).then((function(e){if(e){var t=(new o.a).parseFromString(e.data.DATAPAYLOAD);d(t.children[1].value),g(!1),k(!1)}else k(!0)})).catch((function(e){console.error(e),g(!1),k(!0)}))};return Object(r.useEffect)((function(){return C(),function(){d(l)}}),[t,n]),l?v?Object(u.jsxs)("div",{style:{flex:"1 1",marginTop:"15px"},children:[Object(u.jsx)("span",{style:{color:"red"},children:"Error"})," ",Object(u.jsx)(h.a,{variant:"outlined",color:"primary",size:"small",className:a.margin,onClick:C,children:"Refresh"})]}):Object(u.jsx)("div",{style:{flex:"1 1",marginTop:"15px"},children:Object(u.jsx)(x.a,{label:l,style:{backgroundColor:"INSTOCK"===l?"green":"LESSTHAN10"===l?"orange":"red",color:"white",marginTop:"15px"}})}):Object(u.jsxs)("div",{style:{flex:"1 1",marginTop:"15px"},children:[O?Object(u.jsx)(j.a,{size:20,style:{flex:"1 1",marginTop:"15px"}}):Object(u.jsx)(h.a,{variant:"outlined",color:"primary",size:"small",className:a.margin,onClick:C,children:"Check avability"})," "]})},f=a.a.memo(p),O=n(33),g=function(e){var t=e.data,n=e.title,r=a.a.useRef(new O.c({fixedWidth:!0,defaultHeight:200}));return t.length?Object(u.jsx)("div",{style:{marginTop:"100px"},children:Object(u.jsxs)("div",{style:{margin:"0 auto",width:"90%",height:"700px"},children:[Object(u.jsxs)("h1",{children:["Category is : ",n]}),Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",justifyItems:"flex-start",width:"100%",margin:"0 auto",borderBottom:"1px solid #ccc",padding:"5px",backgroundColor:"#F0A202",fontWeight:700},children:[Object(u.jsx)("p",{style:{flex:"1 1"},children:"#"}),Object(u.jsx)("p",{style:{flex:"1 1"},children:"ID"}),Object(u.jsx)("p",{style:{flex:"1 1"},children:"Name"}),Object(u.jsx)("p",{style:{flex:"1 1"},children:"Type"}),Object(u.jsx)("p",{style:{flex:"1 1"},children:"Manufacture"}),Object(u.jsx)("p",{style:{flex:"1 1"},children:"Colors"}),Object(u.jsx)("p",{style:{flex:"1 1"},children:"Availability"})]}),Object(u.jsx)(O.a,{children:function(e){var n=e.width,a=e.height;return Object(u.jsx)(O.d,{width:n,height:a,rowHeight:50,deferredMeasurementCache:r.current,rowCount:t.length,rowRenderer:function(e){var n=e.key,a=e.index,c=e.style,s=e.parent,i=t[a];return Object(u.jsx)(O.b,{cache:r.current,parent:s,columnIndex:0,rowIndex:a,children:Object(u.jsx)("div",{style:c,children:Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",justifyItems:"flex-start",width:"100%",borderBottom:"1px solid #ccc",padding:"5px"},children:[Object(u.jsx)("p",{style:{flex:"1 1"},children:a+1}),Object(u.jsx)("p",{style:{flex:"1 1"},children:i.id}),Object(u.jsx)("p",{style:{flex:"1 1"},children:i.name}),Object(u.jsx)("p",{style:{flex:"1 1"},children:i.type}),Object(u.jsx)("p",{style:{flex:"1 1"},children:i.manufacturer}),Object(u.jsx)("p",{style:{flex:"1 1"},children:i.color.map((function(e){return e})).join(", ")}),Object(u.jsx)(f,{manufacture:i.manufacturer,elementID:i.id})]})})},n)}})}})]})}):Object(u.jsxs)("div",{children:[" ",Object(u.jsx)("h1",{children:" Please wait while loading..."}),Object(u.jsx)(j.a,{size:100,style:{flex:"1 1",marginTop:"15px"}})]})},m=a.a.memo(g),y=n(39),v=n.n(y),k=n(54),C=function(e){var t=a.a.useState([]),n=Object(i.a)(t,2),r=n[0],c=n[1],s=a.a.useState(null),l=Object(i.a)(s,2),o=l[0],d=l[1];return a.a.useEffect((function(){(function(){var t=Object(k.a)(v.a.mark((function t(){var n,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e),{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,c(r.data),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),d(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}})()()}),[]),{data:r,error:o}},T=Object(r.createContext)();var w=function(e){var t=C("https://erkanisufreakt.azurewebsites.net/products/gloves/"),n=C("https://erkanisufreakt.azurewebsites.net/products/facemasks/"),r=C("https://erkanisufreakt.azurewebsites.net/products/beanies/");return Object(u.jsx)(T.Provider,{value:{facemasks:n.error?[]:n.data,gloves:t.error?[]:t.data,beanies:r.error?[]:r.data},children:e.children})},S=n(14),I=n(28);var A=function(){var e=Object(r.useContext)(T),t=Object(S.f)();return console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_FETCH_API),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{style:{position:"fixed",display:"flex",margin:"0 auto",marginBottom:"55px",textAlign:"center",justifyContent:"center",backgroundColor:"white",width:"100%",height:"40px",padding:"20px 0px",borderBottom:"5px solid #F0A202 ",zIndex:2},children:Object(u.jsxs)("div",{style:{position:"fixed",display:"flex",margin:"0 auto",textAlign:"center",justifyContent:"space-between",width:"30%"},children:[Object(u.jsx)(h.a,{component:I.b,to:"/gloves",variant:"contained",color:"primary",style:{backgroundColor:t.pathname.includes("/gloves")?"green":""},children:"Gloves"}),Object(u.jsx)(h.a,{component:I.b,to:"/facemasks",variant:"contained",color:"primary",style:{backgroundColor:t.pathname.includes("/facemasks")?"green":""},children:"Face masks"}),Object(u.jsx)(h.a,{component:I.b,to:"/beanies",variant:"contained",color:"primary",style:{backgroundColor:t.pathname.includes("/beanies")?"green":""},children:"Beanies"})]})}),Object(u.jsx)("div",{style:{height:"80px",backgroundColor:"red"}}),Object(u.jsxs)(S.c,{children:[Object(u.jsx)(S.a,{path:"/gloves",children:Object(u.jsx)(m,{data:e.gloves,title:"Gloves"})}),Object(u.jsx)(S.a,{path:"/facemasks",children:Object(u.jsx)(m,{data:e.facemasks,title:"Face Masks"})}),Object(u.jsx)(S.a,{path:"/beanies",children:Object(u.jsx)(m,{data:e.beanies,title:"Beanies"})}),Object(u.jsx)(S.a,{path:"/",children:Object(u.jsxs)("div",{style:{marginTop:"200px"},children:[Object(u.jsxs)("h1",{style:{fontWeight:1e3,textTransform:"uppercase",color:"red"},children:[" ","Select one of the categories to start!"]}),Object(u.jsxs)("div",{style:{marginTop:"200px",color:"grey"},children:[Object(u.jsx)("h2",{children:"Assignment - Reaktor 2021 "}),Object(u.jsx)("h2",{children:"Erkan Isuf"}),Object(u.jsxs)("h3",{children:["Portfolio:"," ",Object(u.jsx)("a",{href:"https://erkanisuf.netlify.app/",target:"_blank",children:"Link"})]}),Object(u.jsxs)("h3",{children:["GitHub:"," ",Object(u.jsx)("a",{href:"https://github.com/erkanisuf/",target:"_blank",children:"Link"})]})]})]})})]})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,101)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(u.jsx)(I.a,{children:Object(u.jsx)(w,{children:Object(u.jsx)(A,{})})}),document.getElementById("root")),E()}},[[80,1,2]]]);
//# sourceMappingURL=main.376c77b4.chunk.js.map