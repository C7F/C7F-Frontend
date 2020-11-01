(this.webpackJsonpc7f=this.webpackJsonpc7f||[]).push([[0],{106:function(e,t,n){e.exports=n(291)},132:function(e,t,n){},134:function(e,t,n){},136:function(e,t,n){},269:function(e,t,n){},270:function(e,t,n){},271:function(e,t,n){},273:function(e,t,n){},274:function(e,t,n){},278:function(e,t,n){},28:function(e,t){e.exports={validateEmail:function(e,t){return e&&!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.toLowerCase())?(t("Invalid email!"),!1):(t(""),!0)},validateTeamName:function(e,t){return e&&!/^[^\s]{3,100}$/.test(e)?(t("Invalid team name!"),!1):(t(""),!0)},validatePassword:function(e,t){return e&&!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,255}$/.test(e)?(t("Invalid password!"),!1):(t(""),!0)}}},289:function(e,t,n){},290:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(33),l=n.n(c),i=n(4),u=n(5),m=n(26),s=n(21),d=n(6),p=n.n(d),f=n(11),h=n(99),g=n.n(h).a.create({baseURL:"https://c7f.herokuapp.com",responseType:"json"}),b=g,v="/auth/register",E="/auth/login",y="/auth/tokenLogin";function O(e){return j.apply(this,arguments)}function j(){return(j=Object(f.a)(p.a.mark((function e(t){var n,a,r,o,c,l,i,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,a=t.password,r=t.email,e.next=3,b.post(v,{name:n,password:a,email:r});case 3:if(o=e.sent,c=o.data,l=c.success,i=c.message,u=c.error,l){e.next=8;break}return e.abrupt("return",{message:i,error:u});case 8:return e.abrupt("return",!0);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return w.apply(this,arguments)}function w(){return(w=Object(f.a)(p.a.mark((function e(t){var n,a,r,o,c,l,i,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,a=t.password,e.next=3,b.post(E,{name:n,password:a});case 3:if(r=e.sent,o=r.data,c=o.success,l=o.token,i=o.message,u=o.error,c){e.next=8;break}return e.abrupt("return",{message:i,error:u});case 8:return e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return C.apply(this,arguments)}function C(){return(C=Object(f.a)(p.a.mark((function e(t){var n,a,r,o,c,l,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.loginToken,e.next=3,b.post(y,{loginToken:n});case 3:if(a=e.sent,r=a.data,o=r.success,c=r.token,l=r.message,i=r.error,o){e.next=8;break}return e.abrupt("return",{message:l,error:i});case 8:return e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return(F=Object(f.a)(p.a.mark((function e(){var t,n,a,r,o,c,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/challenges");case 2:if(t=e.sent,n=t.data,a=n.success,r=n.message,o=n.error,c=n.challenges,a){e.next=7;break}return e.abrupt("return",{message:r,error:o});case 7:return l=[],c.forEach((function(e){var t=e.category;l[t]||(l[t]=[]),l[t].push(e)})),e.abrupt("return",{challenges:c,challengeTree:l});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(f.a)(p.a.mark((function e(t){var n,a,r,o,c,l,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.flag,e.next=3,b.post("/challenges/submit",{flag:n});case 3:if(a=e.sent,r=a.data,o=r.success,c=r.message,l=r.error,i=r.id,o){e.next=8;break}return e.abrupt("return",{message:c,error:l});case 8:return e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=Object(u.b)("team/fetchToken",function(){var e=Object(f.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.teamName,a=t.password,e.abrupt("return",k({name:n,password:a}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N=Object(u.b)("team/fetchTokenUsingToken",function(){var e=Object(f.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.loginToken,e.abrupt("return",x({loginToken:n}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),D=function(e,t){var n=JSON.parse(localStorage.getItem("team")),a="";return"boolean"===t||"bool"===t?a=!1:"number"===t&&(a=0),n&&n[e]||a},M=function(e){var t=JSON.parse(localStorage.getItem("team"));localStorage.setItem("team",JSON.stringify(Object(s.a)(Object(s.a)({},t),e)))},q=Object(u.c)({name:"team",initialState:{name:D("name"),points:D("points","number"),loggedIn:D("loggedIn","boolean"),token:D("token")},reducers:{nameUpdate:function(e,t){e.name=t.payload,M({name:t.payload})},tokenUpdate:function(e,t){e.token=t.payload,M({token:t.payload})},loggedInUpdate:function(e,t){e.loggedIn=t.payload,M({loggedIn:t.payload})}},extraReducers:(a={},Object(m.a)(a,T.fulfilled,(function(e,t){t.error||(e.token=t.payload,e.loggedIn=!0,M({token:t.payload,loggedIn:!0}))})),Object(m.a)(a,N.fulfilled,(function(e,t){t.error||(e.token=t.payload,e.loggedIn=!0,M({token:t.payload,loggedIn:!0}))})),a)}),I=function(e){return e.team},A=q.actions,W=A.nameUpdate,P=A.tokenUpdate,B=A.loggedInUpdate,z=q.reducer,L={dracula:{fgColor:"#f8f8f2",bgColor:"#282a36",dark:"#44475a",primary:"#6272a4",primText:"",error:"#ff5555",default:"#44475a",warning:""},vs2015:{fgColor:"#C3DDE1",bgColor:"#1E1E1E",dark:"#44AAE6",primary:"#E89440",primText:"#FFFFFF",error:"#FF578F",default:"#44475a",warning:""},"atom-one-dark":{fgColor:"#ABB2BF",bgColor:"#282C34",dark:"#E06C75",primary:"#5FA5D6",primText:"#FFFFFF",error:"#E06C75",default:"#44475a",warning:""},monokai:{fgColor:"#F9F8F5",bgColor:"#272822",dark:"#75715E",primary:"#2AA198",primText:"#FFFFFF",error:"#F92672",default:"#44475a",warning:""},"gruvbox-dark":{fgColor:"#EBDBB2",bgColor:"#282828",dark:"#75715E",primary:"#83A598",primText:"#FFFFFF",error:"#CC241D",default:"#44475a",warning:""},"solarized-light":{fgColor:"#073642",bgColor:"#FDF6E3",dark:"#073642",primary:"#586E75",primText:"#FFFFFF",error:"#CB4B16",default:"#44475a",warning:""},"tomorrow-night":{fgColor:"#F0C574",bgColor:"#1D1F21",dark:"#343A40",primary:"#8ABDB6",primText:"#FFFEFE",error:"#CC6666",default:"#44475a",warning:""}},R=function(){var e=localStorage.getItem("theme");return e&&L[e]?e:"atom-one-dark"},U=Object(u.c)({name:"theme",initialState:Object(s.a)({name:R()},L[R()]),reducers:{themeUpdate:function(e,t){return e=Object(s.a)({name:t.payload},L[t.payload]),localStorage.setItem("theme",t.payload),e}}}),_=U.actions.themeUpdate,H=function(e){return e.theme},$=U.reducer,J=Object(u.c)({name:"alerts",initialState:[],reducers:{removeAlert:function(e,t){return e=e.filter((function(e){return e.id!==t.payload}))},addAlert:function(e,t){e.push(t.payload)}}}),Z=function(e){return e.alerts},G=J.actions,K=G.addAlert,Y=G.removeAlert,Q=J.reducer,V=Object(u.b)("challenges/fetchChallenges",(function(){return F.apply(this,arguments)})),X=Object(u.b)("challenges/submitFlag",(function(e){return S.apply(this,arguments)})),ee=Object(u.c)({name:"challenges",initialState:{challengeArray:[],challengeTree:{}},extraReducers:Object(m.a)({},V.fulfilled,(function(e,t){if(!t.error){var n=t.payload,a=n.challenges,r=n.challengeTree;e.challengeArray=a,e.challengeTree=r}}))}),te=function(e){return e.challenges.challengeArray},ne=ee.reducer,ae=[{rank:7,team:"csictf",points:1450,country:"India",submissions:[{qid:Math.random().toString(32),timestamp:1602787644107,points:300},{qid:Math.random().toString(32),timestamp:1602787649405,points:510},{qid:Math.random().toString(32),timestamp:1602787653405,points:640}]},{rank:3,team:"GreyFang",points:1620,country:"India",submissions:[{qid:Math.random().toString(32),timestamp:1602787648107,points:380},{qid:Math.random().toString(32),timestamp:1602787649905,points:550},{qid:Math.random().toString(32),timestamp:1602787652405,points:690}]},{rank:1,team:"bi0s",points:1674,country:"India",submissions:[{qid:Math.random().toString(32),timestamp:1602787643107,points:399},{qid:Math.random().toString(32),timestamp:1602787647005,points:587},{qid:Math.random().toString(32),timestamp:1602787652345,points:678}]},{rank:2,team:"3k",points:1621,country:"Turkey",submissions:[{qid:Math.random().toString(32),timestamp:1602787644907,points:401},{qid:Math.random().toString(32),timestamp:1602787645405,points:523},{qid:Math.random().toString(32),timestamp:1602787651405,points:697}]},{rank:6,team:"Zh3r0",points:1516,country:"India",submissions:[{qid:Math.random().toString(32),timestamp:1602787641307,points:411},{qid:Math.random().toString(32),timestamp:1602787644605,points:514},{qid:Math.random().toString(32),timestamp:1602787653905,points:591}]},{rank:5,team:"irNoobs",points:1569,country:"Iran",submissions:[{qid:Math.random().toString(32),timestamp:1602787639417,points:313},{qid:Math.random().toString(32),timestamp:1602787643505,points:522},{qid:Math.random().toString(32),timestamp:1602787653135,points:633}]},{rank:4,team:"InfosecIITR",points:1588,country:"India",submissions:[{qid:Math.random().toString(32),timestamp:1602787641937,points:396},{qid:Math.random().toString(32),timestamp:1602787646415,points:521},{qid:Math.random().toString(32),timestamp:1602787652415,points:671}]},{rank:8,team:"warlock_rootx",points:1446,country:"India",submissions:[{qid:Math.random().toString(32),timestamp:1602787641437,points:391},{qid:Math.random().toString(32),timestamp:1602787646415,points:511},{qid:Math.random().toString(32),timestamp:1602787652995,points:544}]},{rank:9,team:"Shellphish",points:1433,country:"USA",submissions:[{qid:Math.random().toString(32),timestamp:1602787641207,points:301},{qid:Math.random().toString(32),timestamp:1602787646105,points:533},{qid:Math.random().toString(32),timestamp:1602787650005,points:599}]}],re=Object(u.c)({name:"scoreboard",initialState:ae.sort((function(e,t){return e.rank-t.rank})),reducers:{}}),oe=function(e){return e.scoreboard},ce=re.reducer,le=Object(u.a)({reducer:{team:z,theme:$,alerts:Q,challenges:ne,scoreboard:ce}}),ie=(n(132),n(3)),ue=n(23),me=n(7),se=n(293),de=n(294),pe=(n(133),n(2)),fe=(n(134),n(135),n(12)),he=n.n(fe),ge=(n(136),n(100)),be=n.n(ge);function ve(){var e=Object(ie.a)(["\n    color: ",";\n"]);return ve=function(){return e},e}function Ee(){var e=Object(ie.a)(["\n    color: ",";\n"]);return Ee=function(){return e},e}function ye(){var e=Object(ie.a)(["\n    background-color: inherit !important;\n    font-size: 1rem;\n"]);return ye=function(){return e},e}var Oe=pe.b.pre(ye()),je=pe.b.h1(Ee(),(function(e){return e.theme.error})),ke=pe.b.p(ve(),(function(e){return e.theme.fgColor}));function we(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(Oe,null,o.a.createElement(be.a,{source:t,renderers:{heading:function(e){var t=e.children;return o.a.createElement(je,null,t)},paragraph:function(e){var t=e.children;return o.a.createElement(ke,null,t)}}})))}function xe(){var e=Object(ie.a)(["\n    color: "," !important;\n"]);return xe=function(){return e},e}function Ce(){var e=Object(ie.a)(["\n    color: "," !important;\n"]);return Ce=function(){return e},e}var Fe=function(e){return e.type||"fgColor"},Se=pe.b.h1(Ce(),(function(e){return e.theme[Fe(e)]})),Te=pe.b.h2(xe(),(function(e){return e.theme[Fe(e)]}));function Ne(){return o.a.createElement("div",null,o.a.createElement(Se,{type:"error"},o.a.createElement(he.a,{avgTypingDelay:40,cursor:{hideWhenDone:!0,hideWhenDoneDelay:300}},"Hey!",o.a.createElement(he.a.Backspace,{count:4,delay:300}),"Welcome to C7F2020")),o.a.createElement("article",{className:"home-description"},o.a.createElement("div",null,"Team C7F is hosting a another CTF!"),o.a.createElement("br",null),o.a.createElement(Te,{type:"primary"},o.a.createElement(he.a,{avgTypingDelay:40,cursor:{hideWhenDone:!0,hideWhenDoneDelay:300}},o.a.createElement(he.a.Delay,{ms:1700}),"When?")),o.a.createElement("div",{className:"home-text"},"Start Time:"," ",new Date("9/10/2020").toString(),o.a.createElement("br",null),o.a.createElement("br",null),"End Time:"," ",new Date("11/10/2020").toString()),o.a.createElement(Te,{type:"primary"},o.a.createElement(he.a,{avgTypingDelay:40,cursor:{hideWhenDone:!0,hideWhenDoneDelay:300}},o.a.createElement(he.a.Delay,{ms:1900}),"Where?")),o.a.createElement("div",{className:"home-text"},"The CTF is online and anyone can take part in it!"),o.a.createElement(Te,{type:"primary"},o.a.createElement(he.a,{avgTypingDelay:40,cursor:{hideWhenDone:!0,hideWhenDoneDelay:300}},o.a.createElement(he.a.Delay,{ms:2100}),"What?")),o.a.createElement("div",{className:"home-text"},"We have challenges of various categories including:",o.a.createElement("ul",null,o.a.createElement("li",null,"Pwn"),o.a.createElement("li",null,"Web"),o.a.createElement("li",null,"Steg"),o.a.createElement("li",null,"Misc"),o.a.createElement("li",null,"Linux"),o.a.createElement("li",null,"Crypto"),o.a.createElement("li",null,"Reversing"))),o.a.createElement(Te,{type:"primary"},o.a.createElement(he.a,{avgTypingDelay:20,cursor:{hideWhenDone:!0,hideWhenDoneDelay:300}},o.a.createElement(he.a.Delay,{ms:2300}),"Flag format?")),o.a.createElement("div",{className:"home-text"},"The flag is in the following format:",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(we,null,"flag{some_string_here}")),o.a.createElement(Te,{type:"primary"},o.a.createElement(he.a,{avgTypingDelay:40,cursor:{hideWhenDone:!0,hideWhenDoneDelay:300}},o.a.createElement(he.a.Delay,{ms:2500}),"Sponsors")),o.a.createElement("div",{className:"home-text"},"C7F2020 is sponsored by:",o.a.createElement("ul",null,o.a.createElement("li",null,"Google Cloud"),o.a.createElement("li",null,"HackTheBox"),o.a.createElement("li",null,"TryHackMe"),o.a.createElement("li",null,"Trail of Bits")))))}var De=n(8);n(269);function Me(){var e=Object(ie.a)(["\n    font-size: 1rem;\n"]);return Me=function(){return e},e}function qe(){var e=Object(ie.a)(["\n    font-size: 1.3rem;\n    background-color: "," !important;\n"]);return qe=function(){return e},e}var Ie=pe.b.header(qe(),(function(e){return e.theme.dark})),Ae=pe.b.div(Me());function We(e){var t=e.children,n=e.className;return o.a.createElement(Ie,{className:"".concat(n)},o.a.createElement(he.a,{avgTypingDelay:50,cursor:{hideWhenDone:!0,hideWhenDoneDelay:300}},t))}function Pe(e){var t=e.children,n=e.className;return o.a.createElement(Ae,{className:n},t)}function Be(e){var t=e.children,n=e.className;return o.a.createElement("div",{className:"terminal-card ".concat(n)},t)}var ze={children:o.a.createElement(o.a.Fragment,null),className:""};We.defaultProps=ze,Pe.defaultProps=ze,Be.defaultProps=ze,Be.Body=Pe,Be.Header=We;var Le=Be;function Re(e){var t=e.children;return""===t||t===o.a.createElement(o.a.Fragment,null)?o.a.createElement(o.a.Fragment,null):o.a.createElement("div",{className:"terminal-alert terminal-alert-error"},t)}Re.defaultProps={children:o.a.createElement(o.a.Fragment,null)};var Ue=n(27),_e=n.n(Ue);n(270);function He(){var e=Object(ie.a)(["\n    border-style: solid;\n    border-width: 1px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    outline: 0;\n    padding: .65em 2em;\n    font-size: 1em;\n    font-family: inherit;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    position: relative;\n    z-index: 1;\n\n    color: ",";\n    background-color: ",";\n    border: 1px solid ",";\n"]);return He=function(){return e},e}var $e=pe.b.button(He(),(function(e){return e.theme.primText}),(function(e){return e.theme[e.btnType]}),(function(e){return e.theme[e.btnType]}));function Je(e){var t=e.btnType,n=e.children,a=e.className,r=e.blockLevel;return"submit"===e.type?o.a.createElement($e,{type:"submit",btnType:t,className:_e()(a,{"btn-block":r})},n):o.a.createElement($e,{type:"button",btnType:t,className:_e()(a,{"btn-block":r})},n)}var Ze={btnType:"default",children:o.a.createElement(o.a.Fragment,null),className:"",blockLevel:!1,type:"button"};Je.defaultProps=Ze;var Ge=Je;function Ke(){var e=Object(ie.a)(["\n    background-color: ",";\n    border: 1px solid "," !important;\n    color: "," !important;\n"]);return Ke=function(){return e},e}var Ye=pe.b.input(Ke(),(function(e){return e.theme.bgColor}),(function(e){return e.theme.fgColor}),(function(e){return e.theme.fgColor})),Qe=(n(271),n(28));function Ve(){var e=Object(i.c)(I).name,t=Object(r.useState)(e),n=Object(De.a)(t,2),a=n[0],c=n[1],l=Object(r.useState)(""),m=Object(De.a)(l,2),s=m[0],d=m[1],h=Object(r.useState)(""),g=Object(De.a)(h,2),b=g[0],v=g[1],E=Object(i.b)(),y=Object(me.f)(),O=function(){return y.push("/")},j=function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),E(W(a)),E(T({teamName:a,password:s})).then(u.e).then(O).catch((function(){v("Login failed!")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){Object(Qe.validateTeamName)(a,v)&&Object(Qe.validatePassword)(s,v)}),[a,s]),o.a.createElement("div",{className:"mt-5 register-container"},o.a.createElement("form",{onSubmit:j},o.a.createElement(Le,{className:"login-card m-auto"},o.a.createElement(Le.Header,null,"Login"),o.a.createElement(Le.Body,null,o.a.createElement(Re,null,b),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"teamName"},"Team name"),o.a.createElement(Ye,{id:"teamName",type:"text",value:a,onChange:function(e){var t=e.target;c(t.value)},placeholder:"Enter team name",required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement(Ye,{id:"password",type:"password",value:s,onChange:function(e){var t=e.target;d(t.value)},placeholder:"Password",required:!0})),o.a.createElement(Ge,{btnType:"primary",type:"submit",blockLevel:!0},"Login")))))}function Xe(){var e=Object(i.b)(),t=Object(me.f)();return Object(r.useEffect)((function(){e(P("")),e(B(!1)),t.push("/")})),o.a.createElement(o.a.Fragment,null)}n(273);function et(){var e=Object(r.useState)(""),t=Object(De.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),l=Object(De.a)(c,2),i=l[0],u=l[1],m=Object(r.useState)(""),s=Object(De.a)(m,2),d=s[0],h=s[1],g=Object(r.useState)(""),b=Object(De.a)(g,2),v=b[0],E=b[1],y=Object(me.f)(),j=function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,O({email:n,name:i,password:d});case 3:if(!e.sent){e.next=7;break}y.push("/login"),e.next=8;break;case 7:E("Registration failed!");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){Object(Qe.validateEmail)(n,E)&&Object(Qe.validateTeamName)(i,E)&&Object(Qe.validatePassword)(d,E)}),[i,n,d]),o.a.createElement("div",{className:"mt-5 register-container"},o.a.createElement("form",{onSubmit:j},o.a.createElement(Le,{className:"register-card m-auto"},o.a.createElement(Le.Header,null,"Register"),o.a.createElement(Le.Body,null,o.a.createElement(Re,null,v),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"email"},"Email address"),o.a.createElement(Ye,{id:"email",type:"email",value:n,onChange:function(e){var t=e.target;a(t.value)},placeholder:"Enter email",required:!0}),o.a.createElement("small",{className:"text-muted"},"You will receive a verification email.")),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"registerEmail"},"Team name"),o.a.createElement(Ye,{id:"registerEmail",type:"text",value:i,onChange:function(e){var t=e.target;u(t.value)},placeholder:"Enter team name",required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"registerPassword"},"Password"),o.a.createElement(Ye,{id:"registerPassword",type:"password",value:d,onChange:function(e){var t=e.target;h(t.value)},placeholder:"Password",required:!0})),o.a.createElement(Ge,{btnType:"primary",type:"submit",blockLevel:!0},"Register")))))}n(274);function tt(){var e=Object(me.g)().id,t=Object(me.f)(),n=Object(i.b)(),a=Object(i.c)(te),c=Object(r.useState)(""),l=Object(De.a)(c,2),m=l[0],d=l[1],p=Object(r.useState)(""),f=Object(De.a)(p,2),h=f[0],g=f[1],b=Object(r.useCallback)((function(){var t=a.find((function(t){return t.id===e}));return t?"# ".concat(t.name,"\n\n**Points: ").concat(t.points,"**\n\n").concat(t.description,"\n"):"# Challenge not found!\n\nChallenge does not exist. Please visit a valid URL."}),[a,e]);return Object(r.useEffect)((function(){e||t.push("/"),d(b())}),[d,b,t,e]),o.a.createElement("div",{className:"challenge-container mt-2"},o.a.createElement(we,null,m),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n(X({flag:h})).then(u.e).then((function(e){var t="Flag was incorrect!",a="error";e&&(t="Flag was submitted!",a="primary"),function(e,t,n){var a=n||5e3,r=Object(u.d)();e(K(Object(s.a)(Object(s.a)({},t),{},{id:r}))),setTimeout((function(){return e(Y(r))}),a)}(n,{message:t,type:a},5e3)}))},className:"flag-form"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"teamName"},"Flag"),o.a.createElement(Ye,{id:"flag",type:"text",value:h,onChange:function(e){var t=e.target;g(t.value)},placeholder:"Enter the flag",required:!0})),o.a.createElement(Ge,{type:"submit",btnType:"primary"},"Submit")))}var nt=n(31),at=n.n(nt);function rt(){var e=Object(i.c)(H);return o.a.createElement(at.a,{className:"plot",data:[{values:[15,25,15,10,35],labels:["Pwn","Web","Crypto","Misc","Forensics"],type:"pie"}],layout:{width:500,height:500,title:"Category-wise distribution",paper_bgcolor:e.bgColor,plot_bgcolor:e.bgColor,font:{color:e.fgColor}}})}var ot=n(105);function ct(){var e=Object(i.c)(H),t=Object(i.c)(te),n=t.map((function(e){return e.name})),a=t.map((function(e){return e.points})),r=Math.max.apply(Math,Object(ot.a)(a)),c=a.map((function(t){return e.primary+Math.round(255*t/r).toString(16).toUpperCase()}));return console.log(c),o.a.createElement(at.a,{className:"plot",data:[{type:"bar",x:n,y:a,marker:{color:c}}],layout:{width:1e3,height:500,title:"Challenges vs Solves",paper_bgcolor:e.bgColor,plot_bgcolor:e.bgColor,font:{color:e.fgColor},yaxis:{gridcolor:e.primary}}})}function lt(){return o.a.createElement("div",null,o.a.createElement(Se,{type:"error"},"Admin Panel"),o.a.createElement(ct,null),o.a.createElement(rt,null))}function it(){for(var e="#",t=0;t<6;t+=1)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}n(278);function ut(e){var t=e.width,n=e.height,a=Object(i.c)(H),r=Object(i.c)(oe).filter((function(e,t){return t<10})),c=r.map((function(e){return function(e){for(var t=e.submissions.map((function(e){return e.timestamp})),n=[],a=0,r=0;r<t.length;r+=1)a+=e.submissions[r].points,n.push(a);return{x:t,y:n,name:e.team,type:"scatter",mode:"lines+markers",marker:{color:it()}}}(e)}));return o.a.createElement(at.a,{className:"plot",data:c,layout:{width:t,height:n,title:"Top 10 teams",paper_bgcolor:a.bgColor,plot_bgcolor:a.bgColor,font:{color:a.fgColor},xaxis:{gridcolor:a.primary},yaxis:{gridcolor:a.primary}},useResizeHandler:!0})}function mt(){var e=Object(ie.a)(["\n    border: 1px solid "," !important;\n"]);return mt=function(){return e},e}function st(){var e=Object(ie.a)(["\n    color: "," !important;\n    border: 1px solid "," !important;\n    font-size: 1.1rem;\n"]);return st=function(){return e},e}function dt(){var e=Object(ie.a)(["\n    border: 1px solid "," !important;\n    color: "," !important;\n    font-size: 1rem;\n    text-align: center;\n"]);return dt=function(){return e},e}ut.defaultProps={height:""};var pt=pe.b.table(dt(),(function(e){return e.theme.primary}),(function(e){return e.theme.fgColor})),ft=pe.b.th(st(),(function(e){return e.theme.primary}),(function(e){return e.theme.primary})),ht=pe.b.td(mt(),(function(e){return e.theme.primary}));function gt(){var e=Object(i.c)(oe);return o.a.createElement(pt,null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement(ft,null,"Rank"),o.a.createElement(ft,null,"Team"),o.a.createElement(ft,null,"Points"),o.a.createElement(ft,null,"Country"))),o.a.createElement("tbody",null,e.map((function(e){var t=e.rank,n=e.team,a=e.points,r=e.country;return o.a.createElement("tr",{key:t+n},o.a.createElement(ht,null,t,"."),o.a.createElement(ht,null,n),o.a.createElement(ht,null,a),o.a.createElement(ht,null,r))}))))}function bt(){var e=Object(r.useRef)(null),t=Object(r.useState)(1e3),n=Object(De.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){c(e.current?e.current.offsetWidth/1.5:1e3)}),[c]),o.a.createElement("div",{ref:e},o.a.createElement(Se,{type:"error"},"Scoreboard"),o.a.createElement(ut,{width:a}),o.a.createElement(gt,null))}var vt=n(104);n(289);function Et(){var e=Object(ie.a)(["\n    font-size: 1rem;\n    background-color: ","44;\n    height: 3rem;\n    width: 15rem;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-top: 2vh;\n"]);return Et=function(){return e},e}var yt=pe.b.div(Et(),(function(e){return e.theme[e.alertType]}));function Ot(){var e=Object(i.c)(Z),t=Object(i.b)();return o.a.createElement(vt.CSSTransitionGroup,{component:"div",className:"alert-container",transitionName:"fade-alerts",transitionEnterTimeout:1e3,transitionLeaveTimeout:500},e.map((function(e){return o.a.createElement(yt,{key:e.id,alertType:e.type,onClick:function(){return n=e.id,void t(Y(n));var n}},e.message)})))}var jt=n(10),kt=n.n(jt);function wt(){var e=Object(ie.a)(["\n    color: ",";\n    &:hover {\n        background-color: ",";\n        color: white;\n    }\n"]);return wt=function(){return e},e}var xt=pe.b.span(wt(),(function(e){return e.theme.primary}),(function(e){return e.theme.dark}));var Ct=function(e){var t=e.to,n=e.children;return o.a.createElement(ue.b,{to:t},o.a.createElement(xt,null,n))};function Ft(){var e=Object(ie.a)(["\n    cursor: pointer;\n    user-select: none;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n"]);return Ft=function(){return e},e}function St(){var e=Object(ie.a)(["\n    padding-left: 1rem;\n"]);return St=function(){return e},e}var Tt=pe.b.div(St()),Nt=pe.b.div(Ft());function Dt(e){var t=e.tree;return t?t.map((function(e){return o.a.createElement(Mt,{key:Object(u.d)(),text:e.text,nested:e.children,link:e.link})})):o.a.createElement(o.a.Fragment,null)}function Mt(e){var t=Object(r.useState)(!0),n=Object(De.a)(t,2),a=n[0],c=n[1],l=e.text,i=e.nested,m=e.link,s=function(e){e.stopPropagation(),c(!a)},d=m?o.a.createElement(Ct,{to:m},l):l;return o.a.createElement(Nt,{key:Object(u.d)(),className:"node",onClick:s,onKeyDown:s,role:"presentation"},a||0===i.length?"\u25b6":"\u25bc"," ",d,i.length>0&&!a&&o.a.createElement(Tt,{className:"node-children"},o.a.createElement(Dt,{tree:i})))}var qt={text:kt.a.string.isRequired};function It(e){var t=e.date,n=function(){var e=+new Date(t)-+new Date,n={},a=function(e){return Math.floor(e).toString().padStart(2,"0")};return e>0&&(n={days:a(e/864e5),hours:a(e/36e5%24),minutes:a(e/1e3/60%60),seconds:a(e/1e3%60)}),n},a=Object(r.useState)(n()),c=Object(De.a)(a,2),l=c[0],i=c[1];Object(r.useEffect)((function(){var e=setTimeout((function(){i(n())}),1e3);return function(){return clearTimeout(e)}}));var m=[];return Object.keys(l).forEach((function(e){l[e]&&m.push(o.a.createElement("span",{key:Object(u.d)()},l[e],e[0]," "))})),o.a.createElement("div",null,m.length?m:o.a.createElement("span",null,"It is time!"))}qt.children=kt.a.arrayOf(kt.a.shape(qt)),Mt.defaultProps={nested:[],link:""};n(290);function At(){var e=Object(ie.a)(["\n    height: 100vh;\n    overflow-y: auto;\n    font-size: 1rem;\n    padding: 1.5rem;\n    padding-bottom: 3rem;\n    border-right: 1px solid ",";\n    position:fixed;\n    width: 23vw;\n"]);return At=function(){return e},e}function Wt(){var e=Object(ie.a)(["\n    position: fixed;\n    bottom: 0rem;\n    padding-bottom: 1rem;\n    width: 20vw;\n    padding-top: 2vh;\n    background-color: ",";\n"]);return Wt=function(){return e},e}function Pt(){var e=Object(ie.a)(["\ncolor: ",";\nbackground-color: ",";\n"]);return Pt=function(){return e},e}var Bt=pe.b.select(Pt(),(function(e){return e.theme.fgColor}),(function(e){return e.theme.bgColor})),zt=pe.b.div(Wt(),(function(e){return e.theme.bgColor})),Lt=pe.b.div(At(),(function(e){return e.theme.fgColor}));function Rt(){var e=Object.keys(L),t=Object(i.c)(H),n=Object(i.c)(I),a=[{text:"Home",link:"/"},{text:"Login",link:"/login"},{text:"Register",link:"/register"},{text:"Scoreboard",link:"/scoreboard"}],c=Object(r.useState)(a),l=Object(De.a)(c,2),m=l[0],s=l[1],d=Object(i.b)(),p=Object(r.useCallback)((function(e){var t={text:"Challenges",children:[]};Object.keys(e).forEach((function(n){var a={text:n,children:[]};e[n].forEach((function(e){a.children.push({text:e.name,link:"/challenge/".concat(e.id)})})),t.children.push(a)})),s((function(e){return e.filter((function(e){return!["Login","Register"].includes(e.text)})).concat({text:"Logout",link:"/logout"}).concat(t)}))}),[s]);return Object(r.useEffect)((function(){var e;n.loggedIn&&(e=n.token,g.interceptors.request.use((function(t){var n=t;return n.headers.Authorization=e,n})))})),Object(r.useEffect)((function(){var e=m.filter((function(e){return"Challenges"===e.text})).length,t=n.loggedIn&&!e,r=!n.loggedIn&&e;t?d(V()).then(u.e).then((function(e){var t=e.challengeTree;return p(t)})):r&&s(a)}),[n,d,a,m,s,p]),o.a.createElement(Lt,null,o.a.createElement("h2",null,"C7F2020"),o.a.createElement("h5",null,"Team:"," ",n.name),o.a.createElement(It,{date:+new Date("11/01/2020")}),o.a.createElement(Dt,{tree:m}),o.a.createElement(zt,null,o.a.createElement("label",{htmlFor:"themeSelect",className:"mt-2"},"Theme"),o.a.createElement(Bt,{value:t.name,id:"themeSelect",onChange:function(e){d(_(e.target.value))},className:"ml-2"},e.map((function(e){return o.a.createElement("option",{value:e,key:Object(u.d)()},e)})))))}function Ut(){var e=Object(ie.a)(["\n    background-color: ",";\n    color: ",";\n    width: 100%;\n    height: 100%;\n    overflow-y: auto;\n    overflow-x: hidden;\n    word-wrap: break-word;\n    padding-right: 2rem;\n"]);return Ut=function(){return e},e}var _t=pe.b.div(Ut(),(function(e){return e.theme.bgColor}),(function(e){return e.theme.fgColor}));var Ht=function(){var e=Object(i.c)(H);return o.a.createElement(pe.a,{theme:e},o.a.createElement(_t,null,o.a.createElement(ue.a,{basename:"/C7F-Frontend"},o.a.createElement(se.a,null,o.a.createElement(de.a,{md:"3"},o.a.createElement(Rt,null)),o.a.createElement(de.a,null,o.a.createElement(me.c,null,o.a.createElement(me.a,{path:"/register"},o.a.createElement(et,null)),o.a.createElement(me.a,{path:"/login"},o.a.createElement(Ve,null)),o.a.createElement(me.a,{path:"/logout"},o.a.createElement(Xe,null)),o.a.createElement(me.a,{path:"/challenge/:id"},o.a.createElement(tt,null)),o.a.createElement(me.a,{path:"/scoreboard"},o.a.createElement(bt,null)),o.a.createElement(me.a,{path:"/admin"},o.a.createElement(lt,null)),o.a.createElement(me.a,{path:"/"},o.a.createElement(Ne,null)))),o.a.createElement(Ot,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{store:le},o.a.createElement(Ht,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[106,1,2]]]);