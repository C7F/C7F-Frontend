(this.webpackJsonpc7f=this.webpackJsonpc7f||[]).push([[0],{133:function(e,t,n){},135:function(e,t,n){},137:function(e,t,n){},270:function(e,t,n){},271:function(e,t,n){},272:function(e,t,n){},274:function(e,t,n){},275:function(e,t,n){},276:function(e,t,n){},277:function(e,t,n){"use strict";n.r(t);var a,r=n(0),l=n.n(r),c=n(37),o=n.n(c),i=n(10),u=n(5),m=n(26),s=n(21),d=n(2),f=n.n(d),p=n(8),g=n(93),h=n.n(g).a.create({baseURL:"https://c7f.herokuapp.com",responseType:"json"}),b="/auth/register",E="/auth/login",v="/auth/tokenLogin";function y(e){return O.apply(this,arguments)}function O(){return(O=Object(p.a)(f.a.mark((function e(t){var n,a,r,l,c,o,i,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,a=t.password,r=t.email,e.next=3,h.post(b,{name:n,password:a,email:r});case 3:if(l=e.sent,c=l.data,o=c.success,i=c.message,u=c.error,o){e.next=8;break}return e.abrupt("return",{message:i,error:u});case 8:return e.abrupt("return",!0);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return k.apply(this,arguments)}function k(){return(k=Object(p.a)(f.a.mark((function e(t){var n,a,r,l,c,o,i,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,a=t.password,e.next=3,h.post(E,{name:n,password:a});case 3:if(r=e.sent,l=r.data,c=l.success,o=l.token,i=l.message,u=l.error,c){e.next=8;break}return e.abrupt("return",{message:i,error:u});case 8:return e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return x.apply(this,arguments)}function x(){return(x=Object(p.a)(f.a.mark((function e(t){var n,a,r,l,c,o,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.loginToken,e.next=3,h.post(v,{loginToken:n});case 3:if(a=e.sent,r=a.data,l=r.success,c=r.token,o=r.message,i=r.error,l){e.next=8;break}return e.abrupt("return",{message:o,error:i});case 8:return e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return C.apply(this,arguments)}function C(){return(C=Object(p.a)(f.a.mark((function e(){var t,n,a,r,l,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/challenges");case 2:if(t=e.sent,n=t.data,a=n.success,r=n.message,l=n.error,c=n.categories,a){e.next=7;break}return e.abrupt("return",{message:r,error:l});case 7:return e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=Object(u.b)("team/fetchToken",function(){var e=Object(p.a)(f.a.mark((function e(t){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.teamName,a=t.password,e.abrupt("return",j({name:n,password:a}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),D=Object(u.b)("team/fetchTokenUsingToken",function(){var e=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.loginToken,e.abrupt("return",w({loginToken:n}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N=function(e,t){var n=JSON.parse(localStorage.getItem("team")),a="";return"boolean"===t||"bool"===t?a=!1:"number"===t&&(a=0),n&&n[e]||a},S=function(e){var t=JSON.parse(localStorage.getItem("team"));localStorage.setItem("team",JSON.stringify(Object(s.a)(Object(s.a)({},t),e)))},W=Object(u.c)({name:"team",initialState:{name:N("name"),points:N("points","number"),loggedIn:N("loggedIn","boolean"),token:N("token")},reducers:{nameUpdate:function(e,t){e.name=t.payload,S({name:t.payload})},tokenUpdate:function(e,t){e.token=t.payload,S({token:t.payload})},loggedInUpdate:function(e,t){e.loggedIn=t.payload,S({loggedIn:t.payload})}},extraReducers:(a={},Object(m.a)(a,T.fulfilled,(function(e,t){t.error||(e.token=t.payload,e.loggedIn=!0,S({token:t.payload,loggedIn:!0}))})),Object(m.a)(a,D.fulfilled,(function(e,t){t.error||(e.token=t.payload,e.loggedIn=!0,S({token:t.payload,loggedIn:!0}))})),a)}),I=function(e){return e.team},B=W.actions,P=B.nameUpdate,A=B.tokenUpdate,L=B.loggedInUpdate,z=W.reducer,R={dracula:{fgColor:"#f8f8f2",bgColor:"#282a36",dark:"#44475a",primary:"#6272a4",primText:"",error:"#ff5555",default:"#44475a",warning:""},vs2015:{fgColor:"#C3DDE1",bgColor:"#1E1E1E",dark:"#44AAE6",primary:"#E89440",primText:"#FFFFFF",error:"#FF578F",default:"#44475a",warning:""},"atom-one-dark":{fgColor:"#ABB2BF",bgColor:"#282C34",dark:"#E06C75",primary:"#5FA5D6",primText:"#FFFFFF",error:"#E06C75",default:"#44475a",warning:""},monokai:{fgColor:"#F9F8F5",bgColor:"#272822",dark:"#75715E",primary:"#2AA198",primText:"#FFFFFF",error:"#F92672",default:"#44475a",warning:""},"gruvbox-dark":{fgColor:"#EBDBB2",bgColor:"#282828",dark:"#75715E",primary:"#83A598",primText:"#FFFFFF",error:"#CC241D",default:"#44475a",warning:""},"solarized-light":{fgColor:"#073642",bgColor:"#FDF6E3",dark:"#073642",primary:"#586E75",primText:"#FFFFFF",error:"#CB4B16",default:"#44475a",warning:""},"tomorrow-night":{fgColor:"#F0C574",bgColor:"#1D1F21",dark:"#343A40",primary:"#8ABDB6",primText:"#FFFEFE",error:"#CC6666",default:"#44475a",warning:""}},U=function(){var e=localStorage.getItem("theme");return e&&R[e]?e:"atom-one-dark"},q=Object(u.c)({name:"theme",initialState:Object(s.a)({name:U()},R[U()]),reducers:{themeUpdate:function(e,t){return e=Object(s.a)({name:t.payload},R[t.payload]),localStorage.setItem("theme",t.payload),e}}}),H=q.actions.themeUpdate,$=function(e){return e.theme},J=q.reducer,M=n(94),Z=n.n(M),_=Object(u.c)({name:"alerts",initialState:[],reducers:{addAlert:function(e,t){e.append(Object(s.a)(Object(s.a)({},t.payload),{},{id:Z()()}))},removeAlert:function(e,t){e.filter((function(e){return e.id!==t.payload}))}}}),G=function(e){return e.alerts},K=_.reducer,Y=Object(u.b)("challenges/fetchChallenges",Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",F());case 1:case"end":return e.stop()}}),e)})))),Q=Object(u.c)({name:"challenges",initialState:[{category:"",challenges:[{id:"",name:""}]}],extraReducers:Object(m.a)({},Y.fulfilled,(function(e,t){t.error||t.payload}))}).reducer,V=Object(u.a)({reducer:{team:z,theme:J,alerts:K,challenges:Q}}),X=(n(133),n(4)),ee=n(23),te=n(6),ne=n(279),ae=n(280),re=(n(134),n(3)),le=(n(135),n(136),n(137),n(11)),ce=n.n(le),oe=n(95),ie=n.n(oe);function ue(){var e=Object(X.a)(["\n    background-color: inherit !important;\n    font-size: 1rem;\n"]);return ue=function(){return e},e}var me=re.b.pre(ue());function se(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(me,null,l.a.createElement(ie.a,{source:t})))}function de(){var e=Object(X.a)(["\n    color: "," !important;\n"]);return de=function(){return e},e}function fe(){var e=Object(X.a)(["\n    color: "," !important;\n"]);return fe=function(){return e},e}var pe=function(e){return e.type||"fgColor"},ge=re.b.h1(fe(),(function(e){return e.theme[pe(e)]})),he=re.b.h2(de(),(function(e){return e.theme[pe(e)]}));function be(){return l.a.createElement("div",null,l.a.createElement(ge,{type:"error"},l.a.createElement(ce.a,{avgTypingDelay:40,cursor:{hideWhenDone:!0,hideWhenDoneDelay:300}},"Hey!",l.a.createElement(ce.a.Backspace,{count:4,delay:300}),"Welcome to C7F2020")),l.a.createElement("article",{className:"home-description"},l.a.createElement("div",null,"Team C7F is hosting a another CTF!"),l.a.createElement("br",null),l.a.createElement(he,{type:"primary"},l.a.createElement(ce.a,{avgTypingDelay:40,cursor:{hideWhenDone:!0,hideWhenDoneDelay:300}},l.a.createElement(ce.a.Delay,{ms:1700}),"When?")),l.a.createElement("div",{className:"home-text"},"Start Time:"," ",new Date("9/10/2020").toString(),l.a.createElement("br",null),l.a.createElement("br",null),"End Time:"," ",new Date("11/10/2020").toString()),l.a.createElement(he,{type:"primary"},l.a.createElement(ce.a,{avgTypingDelay:40,cursor:{hideWhenDone:!0,hideWhenDoneDelay:300}},l.a.createElement(ce.a.Delay,{ms:1900}),"Where?")),l.a.createElement("div",{className:"home-text"},"The CTF is online and anyone can take part in it!"),l.a.createElement(he,{type:"primary"},l.a.createElement(ce.a,{avgTypingDelay:40,cursor:{hideWhenDone:!0,hideWhenDoneDelay:300}},l.a.createElement(ce.a.Delay,{ms:2100}),"What?")),l.a.createElement("div",{className:"home-text"},"We have challenges of various categories including:",l.a.createElement("ul",null,l.a.createElement("li",null,"Pwn"),l.a.createElement("li",null,"Web"),l.a.createElement("li",null,"Steg"),l.a.createElement("li",null,"Misc"),l.a.createElement("li",null,"Linux"),l.a.createElement("li",null,"Crypto"),l.a.createElement("li",null,"Reversing"))),l.a.createElement(he,{type:"primary"},l.a.createElement(ce.a,{avgTypingDelay:20,cursor:{hideWhenDone:!0,hideWhenDoneDelay:300}},l.a.createElement(ce.a.Delay,{ms:2300}),"Flag format?")),l.a.createElement("div",{className:"home-text"},"The flag is in the following format:",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(se,null,"C7F{some_string_here}")),l.a.createElement(he,{type:"primary"},l.a.createElement(ce.a,{avgTypingDelay:40,cursor:{hideWhenDone:!0,hideWhenDoneDelay:300}},l.a.createElement(ce.a.Delay,{ms:2500}),"Sponsors")),l.a.createElement("div",{className:"home-text"},"C7F2020 is sponsored by:",l.a.createElement("ul",null,l.a.createElement("li",null,"Google Cloud"),l.a.createElement("li",null,"HackTheBox"),l.a.createElement("li",null,"TryHackMe"),l.a.createElement("li",null,"Trail of Bits")))))}var Ee=n(9);n(270);function ve(){var e=Object(X.a)(["\n    font-size: 1rem;\n"]);return ve=function(){return e},e}function ye(){var e=Object(X.a)(["\n    font-size: 1.3rem;\n    background-color: "," !important;\n"]);return ye=function(){return e},e}var Oe=re.b.header(ye(),(function(e){return e.theme.dark})),je=re.b.div(ve());function ke(e){var t=e.children,n=e.className;return l.a.createElement(Oe,{className:"".concat(n)},l.a.createElement(ce.a,{avgTypingDelay:50,cursor:{hideWhenDone:!0,hideWhenDoneDelay:300}},t))}function we(e){var t=e.children,n=e.className;return l.a.createElement(je,{className:n},t)}function xe(e){var t=e.children,n=e.className;return l.a.createElement("div",{className:"terminal-card ".concat(n)},t)}var Fe={children:l.a.createElement(l.a.Fragment,null),className:""};ke.defaultProps=Fe,we.defaultProps=Fe,xe.defaultProps=Fe,xe.Body=we,xe.Header=ke;var Ce=xe;function Te(e){var t=e.children;return""===t||t===l.a.createElement(l.a.Fragment,null)?l.a.createElement(l.a.Fragment,null):l.a.createElement("div",{className:"terminal-alert terminal-alert-error"},t)}Te.defaultProps={children:l.a.createElement(l.a.Fragment,null)};var De=n(27),Ne=n.n(De);n(271);function Se(){var e=Object(X.a)(["\n    border-style: solid;\n    border-width: 1px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    outline: 0;\n    padding: .65em 2em;\n    font-size: 1em;\n    font-family: inherit;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    position: relative;\n    z-index: 1;\n\n    color: ",";\n    background-color: ",";\n    border: 1px solid ",";\n"]);return Se=function(){return e},e}var We=re.b.button(Se(),(function(e){return e.theme.primText}),(function(e){return e.theme[e.btnType]}),(function(e){return e.theme[e.btnType]}));function Ie(e){var t=e.btnType,n=e.children,a=e.className,r=e.blockLevel;return"submit"===e.type?l.a.createElement(We,{type:"submit",btnType:t,className:Ne()(a,{"btn-block":r})},n):l.a.createElement(We,{type:"button",btnType:t,className:Ne()(a,{"btn-block":r})},n)}var Be={btnType:"default",children:l.a.createElement(l.a.Fragment,null),className:"",blockLevel:!1,type:"button"};Ie.defaultProps=Be;var Pe=Ie;function Ae(){var e=Object(X.a)(["\n    background-color: ",";\n    border: 1px solid "," !important;\n    color: "," !important;\n"]);return Ae=function(){return e},e}var Le=re.b.input(Ae(),(function(e){return e.theme.bgColor}),(function(e){return e.theme.fgColor}),(function(e){return e.theme.fgColor})),ze=(n(272),n(28));function Re(){var e=Object(i.c)(I).name,t=Object(r.useState)(e),n=Object(Ee.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(""),m=Object(Ee.a)(o,2),s=m[0],d=m[1],g=Object(r.useState)(""),h=Object(Ee.a)(g,2),b=h[0],E=h[1],v=Object(i.b)(),y=Object(te.f)(),O=function(){return y.push("/challenge/1")},j=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),v(P(a)),v(T({teamName:a,password:s})).then(u.e).then(O).catch((function(){E("Login failed!")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){Object(ze.validateTeamName)(a,E)&&Object(ze.validatePassword)(s,E)}),[a,s]),l.a.createElement("div",{className:"mt-5 register-container"},l.a.createElement("form",{onSubmit:j},l.a.createElement(Ce,{className:"login-card m-auto"},l.a.createElement(Ce.Header,null,"Login"),l.a.createElement(Ce.Body,null,l.a.createElement(Te,null,b),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"teamName"},"Team name"),l.a.createElement(Le,{id:"teamName",type:"text",value:a,onChange:function(e){var t=e.target;c(t.value)},placeholder:"Enter team name",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement(Le,{id:"password",type:"password",value:s,onChange:function(e){var t=e.target;d(t.value)},placeholder:"Password",required:!0})),l.a.createElement(Pe,{btnType:"primary",type:"submit",blockLevel:!0},"Login")))))}function Ue(){var e=Object(i.b)(),t=Object(te.f)();return Object(r.useEffect)((function(){e(A("")),e(L(!1)),t.push("/")})),l.a.createElement(l.a.Fragment,null)}n(274);function qe(){var e=Object(r.useState)(""),t=Object(Ee.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),o=Object(Ee.a)(c,2),i=o[0],u=o[1],m=Object(r.useState)(""),s=Object(Ee.a)(m,2),d=s[0],g=s[1],h=Object(r.useState)(""),b=Object(Ee.a)(h,2),E=b[0],v=b[1],O=Object(te.f)(),j=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,y({email:n,name:i,password:d});case 3:if(!e.sent){e.next=7;break}O.push("/login"),e.next=8;break;case 7:v("Registration failed!");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){Object(ze.validateEmail)(n,v)&&Object(ze.validateTeamName)(i,v)&&Object(ze.validatePassword)(d,v)}),[i,n,d]),l.a.createElement("div",{className:"mt-5 register-container"},l.a.createElement("form",{onSubmit:j},l.a.createElement(Ce,{className:"register-card m-auto"},l.a.createElement(Ce.Header,null,"Register"),l.a.createElement(Ce.Body,null,l.a.createElement(Te,null,E),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email address"),l.a.createElement(Le,{id:"email",type:"email",value:n,onChange:function(e){var t=e.target;a(t.value)},placeholder:"Enter email",required:!0}),l.a.createElement("small",{className:"text-muted"},"You will receive a verification email.")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"registerEmail"},"Team name"),l.a.createElement(Le,{id:"registerEmail",type:"text",value:i,onChange:function(e){var t=e.target;u(t.value)},placeholder:"Enter team name",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"registerPassword"},"Password"),l.a.createElement(Le,{id:"registerPassword",type:"password",value:d,onChange:function(e){var t=e.target;g(t.value)},placeholder:"Password",required:!0})),l.a.createElement(Pe,{btnType:"primary",type:"submit",blockLevel:!0},"Register")))))}n(275);function He(){var e=Object(te.g)().id,t=Object(te.f)(),n=Object(r.useState)(""),a=Object(Ee.a)(n,2),c=a[0],o=a[1];Object(r.useEffect)((function(){e||t.push("/")}));return l.a.createElement("div",{className:"challenge-container mt-2"},l.a.createElement(se,null,"# Oreo\n\nMy nephew is a fussy eater and is only willing to eat chocolate oreo. Any other flavour and he throws a tantrum.\n\nChallenge: [Oreo](http://chall.csivit.com:30243)\n"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault()},className:"flag-form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"teamName"},"Flag"),l.a.createElement(Le,{id:"flag",type:"text",value:c,onChange:function(e){var t=e.target;o(t.value)},placeholder:"Enter the flag",required:!0})),l.a.createElement(Pe,{type:"submit",btnType:"primary"},"Submit")))}function $e(){var e=Object(X.a)(["\n    position: absolute;\n    bottom: 2rem;\n    right: 2rem;\n    font-size: 1rem;\n    background-color: ",";\n    height: 3rem;\n    width: 15rem;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n"]);return $e=function(){return e},e}var Je=re.b.div($e(),(function(e){return e.theme[e.alertType]}));function Me(){var e=Object(i.c)(G);return l.a.createElement("div",null,e.map((function(e){return l.a.createElement(Je,{key:e.id,alertType:e.type},e.message)})))}var Ze=n(19),_e=n.n(Ze);function Ge(){var e=Object(X.a)(["\n    color: ",";\n    &:hover {\n        background-color: ",";\n        color: white;\n    }\n"]);return Ge=function(){return e},e}var Ke=re.b.span(Ge(),(function(e){return e.theme.primary}),(function(e){return e.theme.dark}));var Ye=function(e){var t=e.to,n=e.children;return l.a.createElement(ee.b,{to:t},l.a.createElement(Ke,null,n))};function Qe(){var e=Object(X.a)(["\n    cursor: pointer;\n    user-select: none;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n"]);return Qe=function(){return e},e}function Ve(){var e=Object(X.a)(["\n    padding-left: 1rem;\n"]);return Ve=function(){return e},e}var Xe=re.b.div(Ve()),et=re.b.div(Qe());function tt(e){var t=e.tree;return t?t.map((function(e){return l.a.createElement(nt,{key:Object(u.d)(),text:e.text,nested:e.children,link:e.link})})):l.a.createElement(l.a.Fragment,null)}function nt(e){var t=Object(r.useState)(!1),n=Object(Ee.a)(t,2),a=n[0],c=n[1],o=e.text,i=e.nested,m=e.link,s=function(e){e.stopPropagation(),c(!a)},d=m?l.a.createElement(Ye,{to:m},o):o;return l.a.createElement(et,{key:Object(u.d)(),className:"node",onClick:s,onKeyDown:s,role:"presentation"},a||0===i.length?"\u25b6":"\u25bc"," ",d,i.length>0&&!a&&l.a.createElement(Xe,{className:"node-children"},l.a.createElement(tt,{tree:i})))}var at={text:_e.a.string.isRequired};function rt(e){var t=e.date,n=function(){var e=+new Date(t)-+new Date,n={},a=function(e){return Math.floor(e).toString().padStart(2,"0")};return e>0&&(n={days:a(e/864e5),hours:a(e/36e5%24),minutes:a(e/1e3/60%60),seconds:a(e/1e3%60)}),n},a=Object(r.useState)(n()),c=Object(Ee.a)(a,2),o=c[0],i=c[1];Object(r.useEffect)((function(){var e=setTimeout((function(){i(n())}),1e3);return function(){return clearTimeout(e)}}));var m=[];return Object.keys(o).forEach((function(e){o[e]&&m.push(l.a.createElement("span",{key:Object(u.d)()},o[e],e[0]," "))})),l.a.createElement("div",null,m.length?m:l.a.createElement("span",null,"It is time!"))}at.children=_e.a.arrayOf(_e.a.shape(at)),nt.defaultProps={nested:[],link:""};n(276);function lt(){var e=Object(X.a)(["\n    height: 100vh;\n    overflow-y: auto;\n    font-size: 1rem;\n    padding: 1.5rem;\n    border-right: 1px solid ",";\n    position:fixed;\n    width: 23vw;\n"]);return lt=function(){return e},e}function ct(){var e=Object(X.a)(["\ncolor: ",";\nbackground-color: ",";\n"]);return ct=function(){return e},e}var ot=re.b.select(ct(),(function(e){return e.theme.fgColor}),(function(e){return e.theme.bgColor})),it=re.b.div(lt(),(function(e){return e.theme.fgColor}));function ut(){var e=Object.keys(R),t=Object(i.c)($),n=Object(i.c)(I),a=[{text:"Home",link:"/"},{text:"Login",link:"/login"},{text:"Register",link:"/register"}],c={text:"Challenges",children:[{text:"Pwn",children:[{text:"pwn-intended-0x1",link:"/challenge/pwn/1"},{text:"pwn-intended-0x2",link:"/challenge/pwn/2"},{text:"pwn-intended-0x3",link:"/challenge/pwn/3"}]},{text:"Web",children:[{text:"Oreo",link:"/challenge/web/1"},{text:"File-Library",link:"/challenge/web/2"},{text:"Cascade",link:"/challenge/web/"}]}]},o=Object(r.useState)(a),m=Object(Ee.a)(o,2),s=m[0],d=m[1],f=Object(i.b)();return Object(r.useEffect)((function(){var e=s.filter((function(e){return"Challenges"===e.text})).length,t=n.loggedIn&&!e,r=!n.loggedIn&&e;t?d((function(e){return e.filter((function(e){return!["Login","Register"].includes(e.text)})).concat(c).concat({text:"Logout",link:"/logout"})})):r&&d(a)}),[n,c,s,d,a]),l.a.createElement(it,null,l.a.createElement("h2",null,"C7F2020"),l.a.createElement(rt,{date:+new Date("11/01/2020")}),l.a.createElement(tt,{tree:s}),l.a.createElement("div",{className:"themeSelector"},l.a.createElement("label",{htmlFor:"themeSelect",className:"mt-2"},"Theme"),l.a.createElement(ot,{value:t.name,id:"themeSelect",onChange:function(e){f(H(e.target.value))},className:"ml-2"},e.map((function(e){return l.a.createElement("option",{value:e,key:Object(u.d)()},e)})))))}function mt(){var e=Object(X.a)(["\n    background-color: ",";\n    color: ",";\n    width: 100%;\n    height: 100%;\n    overflow-y: auto;\n    overflow-x: hidden;\n    word-wrap: break-word;\n    padding-right: 2rem;\n"]);return mt=function(){return e},e}var st=re.b.div(mt(),(function(e){return e.theme.bgColor}),(function(e){return e.theme.fgColor}));var dt=function(){var e=Object(i.c)($);return l.a.createElement(re.a,{theme:e},l.a.createElement(st,null,l.a.createElement(ee.a,{basename:"/C7F-Frontend"},l.a.createElement(ne.a,null,l.a.createElement(ae.a,{md:"3"},l.a.createElement(ut,null)),l.a.createElement(ae.a,null,l.a.createElement(te.c,null,l.a.createElement(te.a,{path:"/register"},l.a.createElement(qe,null)),l.a.createElement(te.a,{path:"/login"},l.a.createElement(Re,null)),l.a.createElement(te.a,{path:"/logout"},l.a.createElement(Ue,null)),l.a.createElement(te.a,{path:"/challenge/:id"},l.a.createElement(He,null)),l.a.createElement(te.a,{path:"/"},l.a.createElement(be,null)))),l.a.createElement(Me,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,{store:V},l.a.createElement(dt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},28:function(e,t){e.exports={validateEmail:function(e,t){return e&&!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.toLowerCase())?(t("Invalid email!"),!1):(t(""),!0)},validateTeamName:function(e,t){return e&&!/^[^\s]{3,100}$/.test(e)?(t("Invalid team name!"),!1):(t(""),!0)},validatePassword:function(e,t){return e&&!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,255}$/.test(e)?(t("Invalid password!"),!1):(t(""),!0)}}},99:function(e,t,n){e.exports=n(277)}},[[99,1,2]]]);