(this.webpackJsonpreact_frontend=this.webpackJsonpreact_frontend||[]).push([[14],{255:function(e,t,a){},307:function(e,t,a){"use strict";a.r(t);var n=a(37),r=a(38),i=a(40),o=a(39),s=a(34),c=a(41),l=a(0),u=a.n(l),d=a(10),m=(a(255),a(54)),b=a(55),p=a(182),f=a(245),g=a(3),h=a(11),v=a(1),E=(a(4),a(2)),O=a(6),w=a(19),j=a(9),k=a.n(j),y=a(22),x=a(14),L=a(30),C=a(20);function N(e){return e.substring(2).toLowerCase()}var R=u.a.forwardRef((function(e,t){var a=e.children,n=e.mouseEvent,r=void 0===n?"onClick":n,i=e.touchEvent,o=void 0===i?"onTouchEnd":i,s=e.onClickAway,c=u.a.useRef(!1),l=u.a.useRef(null),d=u.a.useRef(!1);u.a.useEffect((function(){return d.current=!0,function(){d.current=!1}}),[]);var m=Object(x.a)(l,t),b=u.a.useCallback((function(e){Object(L.a)(m,k.a.findDOMNode(e))}),[m]),p=Object(x.a)(a.ref,b),f=Object(C.a)((function(e){if(d.current)if(c.current)c.current=!1;else if(l.current){var t=Object(y.a)(l.current);t.documentElement&&t.documentElement.contains(e.target)&&!l.current.contains(e.target)&&s(e)}})),g=u.a.useCallback((function(){c.current=!0}),[]);return u.a.useEffect((function(){if(!1!==o){var e=N(o),t=Object(y.a)(l.current);return t.addEventListener(e,f),t.addEventListener("touchmove",g),function(){t.removeEventListener(e,f),t.removeEventListener("touchmove",g)}}}),[f,g,o]),u.a.useEffect((function(){if(!1!==r){var e=N(r),t=Object(y.a)(l.current);return t.addEventListener(e,f),function(){t.removeEventListener(e,f)}}}),[f,r]),u.a.createElement(u.a.Fragment,null,u.a.cloneElement(a,{ref:p}))})),M=a(7),T=a(62),S=a(299),D=a(121),P=a(179),I=a(8),K=u.a.forwardRef((function(e,t){var a=e.action,n=e.classes,r=e.className,i=e.message,o=e.role,s=void 0===o?"alert":o,c=Object(g.a)(e,["action","classes","className","message","role"]);return u.a.createElement(D.a,Object(v.a)({component:P.a,variant:"body2",variantMapping:{body1:"div",body2:"div"},role:s,square:!0,elevation:6,className:Object(E.a)(n.root,r),ref:t},c),u.a.createElement("div",{className:n.message},i),a?u.a.createElement("div",{className:n.action},a):null)})),B=Object(O.a)((function(e){var t="light"===e.palette.type?.8:.98,a=Object(I.b)(e.palette.background.default,t);return{root:Object(h.a)({color:e.palette.getContrastText(a),backgroundColor:a,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288}),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(K),V=u.a.forwardRef((function(e,t){var a=e.action,n=e.anchorOrigin,r=(n=void 0===n?{vertical:"bottom",horizontal:"center"}:n).vertical,i=n.horizontal,o=e.autoHideDuration,s=e.children,c=e.classes,l=e.className,d=e.ClickAwayListenerProps,m=e.ContentProps,b=e.disableWindowBlurListener,p=void 0!==b&&b,f=e.message,h=e.onClose,O=e.onEnter,j=e.onEntered,k=e.onEntering,y=e.onExit,x=e.onExited,L=e.onExiting,N=e.onMouseEnter,D=e.onMouseLeave,P=e.open,I=e.resumeHideDuration,K=e.TransitionComponent,V=void 0===K?S.a:K,z=e.transitionDuration,W=void 0===z?{enter:w.b.enteringScreen,exit:w.b.leavingScreen}:z,A=e.TransitionProps,F=Object(g.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),H=u.a.useRef(),J=u.a.useState(!0),q=J[0],_=J[1],G=Object(C.a)((function(){h.apply(void 0,arguments)})),U=Object(C.a)((function(e){G&&null!=e&&(clearTimeout(H.current),H.current=setTimeout((function(){G(null,"timeout")}),e))}));u.a.useEffect((function(){return P&&U(o),function(){clearTimeout(H.current)}}),[P,o,U]);var X=function(){clearTimeout(H.current)},Q=u.a.useCallback((function(){null!=o&&U(null!=I?I:.5*o)}),[o,I,U]);return u.a.useEffect((function(){if(!p&&P)return window.addEventListener("focus",Q),window.addEventListener("blur",X),function(){window.removeEventListener("focus",Q),window.removeEventListener("blur",X)}}),[p,Q,P]),!P&&q?null:u.a.createElement(R,Object(v.a)({onClickAway:function(e){h&&h(e,"clickaway")}},d),u.a.createElement("div",Object(v.a)({className:Object(E.a)(c.root,c["anchorOrigin".concat(Object(M.a)(r)).concat(Object(M.a)(i))],l),onMouseEnter:function(e){N&&N(e),X()},onMouseLeave:function(e){D&&D(e),Q()},ref:t},F),u.a.createElement(V,Object(v.a)({appear:!0,in:P,onEnter:Object(T.a)((function(){_(!1)}),O),onEntered:j,onEntering:k,onExit:y,onExited:Object(T.a)((function(){_(!0)}),x),onExiting:L,timeout:W,direction:"top"===r?"down":"up"},A),s||u.a.createElement(B,Object(v.a)({message:f,action:a},m)))))})),z=Object(O.a)((function(e){var t={top:8},a={bottom:8},n={justifyContent:"flex-end"},r={justifyContent:"flex-start"},i={top:24},o={bottom:24},s={right:24},c={left:24},l={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(v.a)({},t,Object(h.a)({},e.breakpoints.up("sm"),Object(v.a)({},i,{},l))),anchorOriginBottomCenter:Object(v.a)({},a,Object(h.a)({},e.breakpoints.up("sm"),Object(v.a)({},o,{},l))),anchorOriginTopRight:Object(v.a)({},t,{},n,Object(h.a)({},e.breakpoints.up("sm"),Object(v.a)({left:"auto"},i,{},s))),anchorOriginBottomRight:Object(v.a)({},a,{},n,Object(h.a)({},e.breakpoints.up("sm"),Object(v.a)({left:"auto"},o,{},s))),anchorOriginTopLeft:Object(v.a)({},t,{},r,Object(h.a)({},e.breakpoints.up("sm"),Object(v.a)({right:"auto"},i,{},c))),anchorOriginBottomLeft:Object(v.a)({},a,{},r,Object(h.a)({},e.breakpoints.up("sm"),Object(v.a)({right:"auto"},o,{},c)))}}),{flip:!1,name:"MuiSnackbar"})(V),W=a(318),A=a(173),F=a(76),H=a.n(F),J=a(26),q=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={loading:!1,email:"",password:"",errorMessageVisible:!1,errorMessageText:""},a.emailInputRef=u.a.createRef(),a.passwordInputRef=u.a.createRef(),a.processLogin=a.processLogin.bind(Object(s.a)(a)),a.handleEmailKeyDown=a.handleEmailKeyDown.bind(Object(s.a)(a)),a.handlePasswordKeyDown=a.handlePasswordKeyDown.bind(Object(s.a)(a)),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"processLogin",value:function(){var e=this;console.log("Trying to log in"),this.setState({loading:!0});var t={email:this.state.email,password:this.state.password};Object(m.c)(b.a+"/backend/login",t,"POST").then((function(a){var n=JSON.parse(a);"Ok"===n.Status?(console.log("Login: Status = "+a),e.setState({loading:!1,successMessageVisible:!0,successMessageText:"Login successful!"}),setTimeout((function(){e.props.loginUser(t.email,n.api_key,n.name)}),600)):(console.log("Login failed: Status = "+a),e.setState({loading:!1,errorMessageVisible:!0,errorMessageText:n.Status}))})).catch((function(t){console.log("Login failed: "+t);var a=JSON.parse(t);e.setState({loading:!1,errorMessageVisible:!0,errorMessageText:a.Status})}))}},{key:"handleEmailKeyDown",value:function(e){this.setState({errorMessageVisible:!1}),13!==e.which&&9!==e.which||(e.preventDefault(),this.emailInputRef.current.blur(),this.passwordInputRef.current.focus())}},{key:"handlePasswordKeyDown",value:function(e){this.setState({errorMessageVisible:!1}),13===e.which?(this.passwordInputRef.current.blur(),this.processLogin()):9===e.which&&(e.preventDefault(),this.passwordInputRef.current.blur(),this.emailInputRef.current.focus())}},{key:"render",value:function(){var e=this,t=this.props.classes;return u.a.createElement("div",{className:"LoginPage"},u.a.createElement(p.a,{maxWidth:"xs"},u.a.createElement(P.a,{variant:"h3",className:t.title},"Login"),u.a.createElement(W.a,{required:!0,fullWidth:!0,disabled:this.state.loading,id:"email-input",label:"Email",variant:"outlined",value:this.state.email,inputRef:this.emailInputRef,onChange:function(t){return e.setState({email:t.target.value})},onKeyDown:this.handleEmailKeyDown,className:t.textField}),u.a.createElement(W.a,{required:!0,fullWidth:!0,disabled:this.state.loading,type:"password",id:"password-input",label:"Password",variant:"outlined",value:this.state.password,inputRef:this.passwordInputRef,onChange:function(t){return e.setState({password:t.target.value})},onKeyDown:this.handlePasswordKeyDown,className:t.textField}),u.a.createElement("div",{className:"ButtonBox"},u.a.createElement("div",{className:t.wrapper},u.a.createElement(A.a,{variant:"contained",disabled:this.state.loading,color:"secondary",className:t.button},u.a.createElement(d.b,{to:"/event",className:t.link},"Cancel"))),u.a.createElement("div",{className:t.wrapper},u.a.createElement(A.a,{variant:"contained",disabled:this.state.loading,color:"secondary",onClick:this.processLogin,className:t.button},"login"),this.state.loading&&u.a.createElement(f.a,{size:24,className:t.buttonProgress,color:"secondary"}))),this.state.errorMessageVisible&&u.a.createElement(z,{className:t.snackbar,open:!0,anchorOrigin:{vertical:"bottom",horizontal:"center"}},u.a.createElement(B,{className:t.snackbarContentError,"aria-describedby":"message-id",message:u.a.createElement("span",{id:"message-id"},this.state.errorMessageText)})),this.state.successMessageVisible&&u.a.createElement(z,{className:t.snackbar,open:!0,anchorOrigin:{vertical:"bottom",horizontal:"center"}},u.a.createElement(B,{className:t.snackbarContentSuccess,"aria-describedby":"message-id",message:u.a.createElement("span",{id:"message-id"},this.state.successMessageText)}))))}}]),t}(u.a.Component);t.default=Object(J.h)(H()((function(e){return{title:{display:"block",textAlign:"center",marginBottom:e.spacing(2)},link:{textDecoration:"none",display:"block"},button:{color:"white"},textField:{display:"block",marginBottom:e.spacing(1)},wrapper:{marginTop:e.spacing(1),marginLeft:e.spacing(.5),marginRight:e.spacing(.5),position:"relative"},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},snackbar:{margin:e.spacing(1)},snackbarContentError:{backgroundColor:e.palette.primary.main},snackbarContentSuccess:{backgroundColor:e.palette.secondary.main}}}))(q))}}]);
//# sourceMappingURL=14.5e1292c6.chunk.js.map