(this.webpackJsonpreaktorassign=this.webpackJsonpreaktorassign||[]).push([[0],{63:function(e,t,n){},64:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(21),a=n.n(i),s=(n(63),n(64),n(26)),o=n(47),l=n.n(o),d=n(95),j=n(97),x=n(98),h=n(99),u=n(4),O=Object(d.a)((function(e){return{margin:{margin:e.spacing(1),zIndex:1},extendedIcon:{marginRight:e.spacing(1)}}})),b=function(e){var t=e.manufacture,n=e.elementID,r=O(),i=Object(c.useState)(),a=Object(s.a)(i,2),o=a[0],d=a[1],b=Object(c.useState)(!1),p=Object(s.a)(b,2),f=p[0],g=p[1],m=Object(c.useState)(!0),v=Object(s.a)(m,2),y=v[0],T=v[1],S=function(){g(!0),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_FETCH_API,"/manufacture/"),{method:"POST",body:JSON.stringify({manufacture:t,elementID:n}),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();T(!0)})).then((function(e){if(e){var t=(new l.a).parseFromString(e.data.DATAPAYLOAD);d(t.children[1].value),g(!1),T(!1)}else T(!0)})).catch((function(e){console.error(e),g(!1),T(!0)}))};return Object(c.useEffect)((function(){return S(),function(){d(o)}}),[t,n]),o?y?Object(u.jsxs)("div",{style:{flex:"1 1",marginTop:"15px"},children:[Object(u.jsx)("span",{style:{color:"red"},children:"Error"})," ",Object(u.jsx)(x.a,{variant:"outlined",color:"primary",size:"small",className:r.margin,onClick:S,children:"Refresh"})]}):Object(u.jsx)("div",{style:{flex:"1 1",marginTop:"15px"},children:Object(u.jsx)(h.a,{label:o,style:{backgroundColor:"INSTOCK"===o?"green":"LESSTHAN10"===o?"orange":"red",color:"white",marginTop:"15px"}})}):Object(u.jsxs)("div",{style:{flex:"1 1",marginTop:"15px"},children:[f?Object(u.jsx)(j.a,{size:20,style:{flex:"1 1",marginTop:"15px"}}):Object(u.jsx)(x.a,{variant:"outlined",color:"primary",size:"small",className:r.margin,onClick:S,children:"Check avability"})," "]})},p=r.a.memo(b),f=n(33),g=function(e){var t=e.data,n=e.title,c=r.a.useRef(new f.c({fixedWidth:!0,defaultHeight:200}));return t.length?Object(u.jsx)("div",{style:{marginTop:"100px"},children:Object(u.jsxs)("div",{style:{margin:"0 auto",width:"90%",height:"700px"},children:[Object(u.jsxs)("h1",{children:["Category is : ",n]}),Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",justifyItems:"flex-start",width:"100%",margin:"0 auto",borderBottom:"1px solid #ccc",padding:"5px",backgroundColor:"#F0A202",fontWeight:700},children:[Object(u.jsx)("p",{style:{flex:"1 1"},children:"#"}),Object(u.jsx)("p",{style:{flex:"1 1"},children:"ID"}),Object(u.jsx)("p",{style:{flex:"1 1"},children:"Name"}),Object(u.jsx)("p",{style:{flex:"1 1"},children:"Type"}),Object(u.jsx)("p",{style:{flex:"1 1"},children:"Manufacture"}),Object(u.jsx)("p",{style:{flex:"1 1"},children:"Colors"}),Object(u.jsx)("p",{style:{flex:"1 1"},children:"Availability"})]}),Object(u.jsx)(f.a,{children:function(e){var n=e.width,r=e.height;return Object(u.jsx)(f.d,{width:n,height:r,rowHeight:50,deferredMeasurementCache:c.current,rowCount:t.length,rowRenderer:function(e){var n=e.key,r=e.index,i=e.style,a=e.parent,s=t[r];return Object(u.jsx)(f.b,{cache:c.current,parent:a,columnIndex:0,rowIndex:r,children:Object(u.jsx)("div",{style:i,children:Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",justifyItems:"flex-start",width:"100%",borderBottom:"1px solid #ccc",padding:"5px"},children:[Object(u.jsx)("p",{style:{flex:"1 1"},children:r+1}),Object(u.jsx)("p",{style:{flex:"1 1"},children:s.id}),Object(u.jsx)("p",{style:{flex:"1 1"},children:s.name}),Object(u.jsx)("p",{style:{flex:"1 1"},children:s.type}),Object(u.jsx)("p",{style:{flex:"1 1"},children:s.manufacturer}),Object(u.jsx)("p",{style:{flex:"1 1"},children:s.color.map((function(e){return e})).join(", ")}),Object(u.jsx)(p,{manufacture:s.manufacturer,elementID:s.id})]})})},n)}})}})]})}):Object(u.jsxs)("div",{children:[" ",Object(u.jsx)("h1",{children:" Please wait while loading..."}),Object(u.jsx)(j.a,{size:100,style:{flex:"1 1",marginTop:"15px"}})]})},m=r.a.memo(g),v=n(39),y=n.n(v),T=n(54),S=function(e){var t=r.a.useState([]),n=Object(s.a)(t,2),c=n[0],i=n[1],a=r.a.useState(null),o=Object(s.a)(a,2),l=o[0],d=o[1];return r.a.useEffect((function(){(function(){var t=Object(T.a)(y.a.mark((function t(){var n,c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(e),{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:c=t.sent,i(c.data),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),d(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}})()()}),[]),{data:c,error:l}},_=Object(c.createContext)();var C=function(e){var t=S("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_FETCH_API,"/products/gloves/")),n=S("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_FETCH_API,"/products/facemasks/")),c=S("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_FETCH_API,"/products/beanies/"));return Object(u.jsx)(_.Provider,{value:{facemasks:n.error?[]:n.data,gloves:t.error?[]:t.data,beanies:c.error?[]:c.data},children:e.children})},E=n(14),k=n(28);var A=function(){var e=Object(c.useContext)(_),t=Object(E.f)();return console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_FETCH_API),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{style:{position:"fixed",display:"flex",margin:"0 auto",marginBottom:"55px",textAlign:"center",justifyContent:"center",backgroundColor:"white",width:"100%",height:"40px",padding:"20px 0px",borderBottom:"5px solid #F0A202 ",zIndex:2},children:Object(u.jsxs)("div",{style:{position:"fixed",display:"flex",margin:"0 auto",textAlign:"center",justifyContent:"space-between",width:"30%"},children:[Object(u.jsx)(x.a,{component:k.b,to:"/gloves",variant:"contained",color:"primary",style:{backgroundColor:t.pathname.includes("/gloves")?"green":""},children:"Gloves"}),Object(u.jsx)(x.a,{component:k.b,to:"/facemasks",variant:"contained",color:"primary",style:{backgroundColor:t.pathname.includes("/facemasks")?"green":""},children:"Face masks"}),Object(u.jsx)(x.a,{component:k.b,to:"/beanies",variant:"contained",color:"primary",style:{backgroundColor:t.pathname.includes("/beanies")?"green":""},children:"Beanies"})]})}),Object(u.jsx)("div",{style:{height:"80px",backgroundColor:"red"}}),Object(u.jsxs)(E.c,{children:[Object(u.jsx)(E.a,{path:"/gloves",children:Object(u.jsx)(m,{data:e.gloves,title:"Gloves"})}),Object(u.jsx)(E.a,{path:"/facemasks",children:Object(u.jsx)(m,{data:e.facemasks,title:"Face Masks"})}),Object(u.jsx)(E.a,{path:"/beanies",children:Object(u.jsx)(m,{data:e.beanies,title:"Beanies"})}),Object(u.jsx)(E.a,{path:"/",children:Object(u.jsxs)("div",{style:{marginTop:"200px"},children:[Object(u.jsxs)("h1",{style:{fontWeight:1e3,textTransform:"uppercase",color:"red"},children:[" ","Select one of the categories to start!"]}),Object(u.jsxs)("div",{style:{marginTop:"200px",color:"grey"},children:[Object(u.jsx)("h2",{children:"Assignment - Reaktor 2021 "}),Object(u.jsx)("h2",{children:"Erkan Isuf"}),Object(u.jsxs)("h3",{children:["Portfolio:"," ",Object(u.jsx)("a",{href:"https://erkanisuf.netlify.app/",target:"_blank",children:"Link"})]}),Object(u.jsxs)("h3",{children:["GitHub:"," ",Object(u.jsx)("a",{href:"https://github.com/erkanisuf/",target:"_blank",children:"Link"})]})]})]})})]})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,101)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(u.jsx)(k.a,{children:Object(u.jsx)(C,{children:Object(u.jsx)(A,{})})}),document.getElementById("root")),R()}},[[80,1,2]]]);
//# sourceMappingURL=main.ed3e0191.chunk.js.map