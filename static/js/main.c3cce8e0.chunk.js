(this["webpackJsonppersonal-page"]=this["webpackJsonppersonal-page"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(6),r=n.n(a),i=(n(36),n(22)),o=(n(37),n(38),n(24)),l=s.a.createContext(),j=(n(39),n(2));function b(){var e=Object(c.useContext)(l);return Object(j.jsxs)("div",{children:[Object(j.jsx)("nav",{children:e.routes.map((function(e,t){return Object(j.jsx)(o.a,{className:"a-link",smooth:!0,to:"#".concat(e.to),scroll:function(e){return e.scrollIntoView({behavior:"smooth"})},children:e.desc},t)}))}),Object(j.jsx)("ul",{})]})}var d=n(9),h=n(15);var u=function(e){var t=e.showBtnDrawer,n=e.openCloseDrawer;return Object(j.jsx)("header",{className:"bar",children:t?Object(j.jsx)("div",{className:"burgerBox",children:Object(j.jsx)(d.a,{onClick:n,icon:h.a,style:{float:"let"}})}):Object(j.jsx)(b,{})})},x=(n(51),n(75));function O(e){var t=e.openDrawer,n=e.showDrawer,s=Object(c.useContext)(l);return Object(j.jsx)(x.a,{variant:"temporary",onClose:t,open:n,children:Object(j.jsx)("div",{className:"boxDrawer",children:Object(j.jsx)("ul",{children:s.routes.map((function(e,t){return Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#".concat(e.to),children:[e.desc," "]})},t)}))})})})}n(52);function p(){return Object(j.jsx)("section",{className:"section",style:{background:"#1687A7"},id:"about",children:Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h2",{children:"Who I am?"}),Object(j.jsxs)("p",{children:["I am Jan Severino and i am a fullstack web developer with around of 6 years of experience. Since that I have been developing web applications for different companies, working with Git flow, DevOps in SCRUM, and AGILE methodologies. My main skill set are: ",Object(j.jsx)("span",{className:"bright",children:"Javascript"}),",",Object(j.jsx)("span",{className:"bright",children:" ReactJS"}),",",Object(j.jsx)("span",{className:"bright",children:" C#"}),",",Object(j.jsx)("span",{className:"bright",children:" Javascript"}),",",Object(j.jsx)("span",{className:"bright",children:" ASP.NET "}),"and",Object(j.jsx)("span",{className:"bright",children:" SQL server "}),"but I also work with other languages and frameworks like  ",Object(j.jsx)("span",{className:"bright",children:" NodeJS"}),",  ",Object(j.jsx)("span",{className:"bright",children:"AngularJS"}),". Also, I have to mention \u201cI really love learning new skills\u201d."]})]})})}function m(){return Object(j.jsxs)("section",{className:"section",style:{background:"#F6F5F5",color:"#276678"},id:"intro",children:[Object(j.jsx)("h1",{className:"title",children:"Jan Carlo Severino Santana"}),Object(j.jsx)("span",{className:"sub-title",children:"Fullstack Web Developer"})]})}var f=n.p+"static/media/website.89618c56.png";n(53);function g(){return Object(j.jsxs)("section",{className:"section",style:{background:"rgb(246, 245, 245)",color:"#276678"},id:"projects",children:[Object(j.jsx)("h1",{children:"Here are some projects made by me!"}),Object(j.jsx)("p",{children:"Just an idea how to I code"}),Object(j.jsx)("div",{style:{display:"flex"},children:Object(j.jsxs)("a",{className:"project-link",target:"_blank",href:"https://github.com/janseverino/personal-page",children:[Object(j.jsx)("img",{width:"350px",src:f,alt:"Personal Web Site"}),Object(j.jsx)("div",{children:Object(j.jsxs)("span",{children:["< This Page Code />"," "]})})]})})]})}var v=n(21);n(54);function w(){return Object(j.jsxs)("section",{className:"section",style:{background:"rgb(22, 135, 167)"},id:"contact",children:[Object(j.jsx)("h1",{className:"title",children:"Let\u2019s work together..."}),Object(j.jsx)("span",{className:"sub-title",children:"contact me at"}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("a",{className:"img-link linkedin",target:"_blank",href:"https://www.linkedin.com/in/janseverino/",children:Object(j.jsx)(d.a,{icon:v.b})}),Object(j.jsx)("a",{className:"img-link github",target:"_blank",href:"https://github.com/janseverino",children:Object(j.jsx)(d.a,{icon:v.a})}),Object(j.jsx)("a",{className:"img-link mail",target:"_blank",href:"https://github.com/janseverino",children:Object(j.jsx)(d.a,{icon:h.b})})]})]})}n(55);function N(){var e=(new Date).getFullYear();return Object(j.jsx)("footer",{children:Object(j.jsxs)("p",{children:[" \xa9 ",e," Jan C. Severino Santana. Made with ",Object(j.jsx)("a",{class:"footer",href:"https://reactjs.org/",children:"ReactJS"})," + CSS "]})})}var k=[{to:"intro",desc:"Intro"},{to:"about",desc:"About me"},{to:"projects",desc:"How i code "},{to:"contact",desc:"Contact"}];var S=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),r=Object(i.a)(a,2),o=r[0],b=r[1],d=function(){window.innerWidth<=700?s(!0):(s(!1),b(!1))},h=function(){return b(!o)};return Object(c.useEffect)((function(){d(),window.addEventListener("resize",d)})),Object(j.jsxs)(l.Provider,{value:{routes:k},children:[Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u,{openCloseDrawer:h,showBtnDrawer:n}),Object(j.jsx)(O,{openDrawer:h,showDrawer:o})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(m,{}),Object(j.jsx)(p,{}),Object(j.jsx)(g,{}),Object(j.jsx)(w,{}),Object(j.jsx)(N,{})]})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))},y=n(10);r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(y.a,{children:Object(j.jsx)(S,{})})}),document.getElementById("root")),C()}},[[56,1,2]]]);
//# sourceMappingURL=main.c3cce8e0.chunk.js.map