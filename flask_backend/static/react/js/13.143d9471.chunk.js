(this.webpackJsonpreact_frontend=this.webpackJsonpreact_frontend||[]).push([[13],{226:function(e,t,a){"use strict";function n(e){if(Array.isArray(e))return e}a.d(t,"a",(function(){return n}))},227:function(e,t,a){"use strict";function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}a.d(t,"a",(function(){return n}))},259:function(e,t,a){},260:function(e,t,a){"use strict";var n=a(21);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),r=(0,n(a(27)).default)(i.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=r},311:function(e,t,a){"use strict";a.r(t);var n=a(37),i=a(38),r=a(41),o=a(39),l=a(40),s=a(0),c=a.n(s),d=(a(259),a(178)),u=a(174),m=a(180),g=a(182),p=a(1),b=a(226),f=a(85),h=a(227);var y=a(3),v=(a(45),a(4),a(2)),E=a(151),k=a(6),x=a(19),S=a(25),w=a(23),B=c.a.forwardRef((function(e,t){var a=e.children,n=e.classes,i=e.className,r=e.collapsedHeight,o=void 0===r?"0px":r,l=e.component,s=void 0===l?"div":l,d=e.in,u=e.onEnter,m=e.onEntered,g=e.onEntering,b=e.onExit,f=e.onExiting,h=e.style,k=e.timeout,B=void 0===k?x.b.standard:k,C=Object(y.a)(e,["children","classes","className","collapsedHeight","component","in","onEnter","onEntered","onEntering","onExit","onExiting","style","timeout"]),j=Object(w.a)(),R=c.a.useRef(),O=c.a.useRef(null),N=c.a.useRef(),F="number"===typeof o?"".concat(o,"px"):o;c.a.useEffect((function(){return function(){clearTimeout(R.current)}}),[]);return c.a.createElement(E.a,Object(p.a)({in:d,onEnter:function(e,t){e.style.height=F,u&&u(e,t)},onEntered:function(e,t){e.style.height="auto",m&&m(e,t)},onEntering:function(e,t){var a=O.current?O.current.clientHeight:0,n=Object(S.a)({style:h,timeout:B},{mode:"enter"}).duration;if("auto"===B){var i=j.transitions.getAutoHeightDuration(a);e.style.transitionDuration="".concat(i,"ms"),N.current=i}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height="".concat(a,"px"),g&&g(e,t)},onExit:function(e){var t=O.current?O.current.clientHeight:0;e.style.height="".concat(t,"px"),b&&b(e)},onExiting:function(e){var t=O.current?O.current.clientHeight:0,a=Object(S.a)({style:h,timeout:B},{mode:"exit"}).duration;if("auto"===B){var n=j.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(n,"ms"),N.current=n}else e.style.transitionDuration="string"===typeof a?a:"".concat(a,"ms");e.style.height=F,f&&f(e)},addEndListener:function(e,t){"auto"===B&&(R.current=setTimeout(t,N.current||0))},timeout:"auto"===B?null:B},C),(function(e,r){return c.a.createElement(s,Object(p.a)({className:Object(v.a)(n.container,i,{entered:n.entered,exited:!d&&"0px"===F&&n.hidden}[e]),style:Object(p.a)({minHeight:F},h),ref:t},r),c.a.createElement("div",{className:n.wrapper,ref:O},c.a.createElement("div",{className:n.wrapperInner},a)))}))}));B.muiSupportAuto=!0;var C=Object(k.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(B),j=a(120);var R=c.a.createContext({}),O=c.a.forwardRef((function(e,t){var a=e.children,n=e.classes,i=e.className,r=e.defaultExpanded,o=void 0!==r&&r,l=e.disabled,s=void 0!==l&&l,d=e.expanded,u=e.onChange,m=e.square,g=void 0!==m&&m,E=e.TransitionComponent,k=void 0===E?C:E,x=e.TransitionProps,S=Object(y.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),w=c.a.useRef(null!=d).current,B=c.a.useState(o),O=B[0],N=B[1],F=w?d:O;var T,A=c.a.useCallback((function(e){w||N(!F),u&&u(e,!F)}),[F,w,u]),P=c.a.Children.toArray(a),I=(T=P,Object(b.a)(T)||Object(f.a)(T)||Object(h.a)()),W=I[0],M=I.slice(1),D=c.a.useMemo((function(){return{expanded:F,disabled:s,toggle:A}}),[F,s,A]);return c.a.createElement(j.a,Object(p.a)({className:Object(v.a)(n.root,i,F&&n.expanded,s&&n.disabled,!g&&n.rounded),ref:t,square:g},S),c.a.createElement(R.Provider,{value:D},W),c.a.createElement(k,Object(p.a)({in:F,timeout:"auto"},x),c.a.createElement("div",{"aria-labelledby":W.props.id,id:W.props["aria-controls"],role:"region"},M)))})),N=Object(k.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiExpansionPanel"})(O),F=a(121),T=a(177),A=c.a.forwardRef((function(e,t){var a=e.children,n=e.classes,i=e.className,r=e.expandIcon,o=e.IconButtonProps,l=e.onBlur,s=e.onClick,d=e.onFocusVisible,u=Object(y.a)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),m=c.a.useState(!1),g=m[0],b=m[1],f=c.a.useContext(R),h=f.disabled,E=void 0!==h&&h,k=f.expanded,x=f.toggle;return c.a.createElement(F.a,Object(p.a)({focusRipple:!1,disableRipple:!0,disabled:E,component:"div","aria-expanded":k,className:Object(v.a)(n.root,i,E&&n.disabled,k&&n.expanded,g&&n.focused),onFocusVisible:function(e){b(!0),d&&d(e)},onBlur:function(e){b(!1),l&&l(e)},onClick:function(e){x&&x(e),s&&s(e)},ref:t},u),c.a.createElement("div",{className:Object(v.a)(n.content,k&&n.expanded)},a),r&&c.a.createElement(T.a,Object(p.a)({className:Object(v.a)(n.expandIcon,k&&n.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},o),r))})),P=Object(k.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:"0 24px 0 24px","&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.grey[300]},"&$disabled":{opacity:.38}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiExpansionPanelSummary"})(A),I=c.a.forwardRef((function(e,t){var a=e.classes,n=e.className,i=Object(y.a)(e,["classes","className"]);return c.a.createElement("div",Object(p.a)({className:Object(v.a)(a.root,n),ref:t},i))})),W=Object(k.a)({root:{display:"flex",padding:"8px 24px 24px"}},{name:"MuiExpansionPanelDetails"})(I),M=a(260),D=a.n(M),H=a(5),L=a.n(H),$=Object(u.a)((function(e){return{root:{width:"100%"},coloredRow:{backgroundColor:"hsl(210, 100%, 97.5%)"},gridItem:{display:"flex",alignItems:"center",justifyContent:"left",whiteSpace:"pre-line"},detailsBlock:{marginRight:e.spacing(4)},divider:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},mobileDetailLabel:{paddingBottom:e.spacing(1)}}}));function G(e){var t=$(),a=e.details.map((function(e,a){return c.a.createElement(c.a.Fragment,null,0!==a&&c.a.createElement(g.a,{item:!0,xs:12},c.a.createElement(m.a,{className:t.divider})),c.a.createElement(g.a,{item:!0,xs:12},c.a.createElement(L.a,{small:!0,down:!0},c.a.createElement(g.a,{container:!0,justify:"flex-start"},c.a.createElement(g.a,{xs:12,md:2,className:Object(v.a)(t.gridItem,t.mobileDetailLabel)},c.a.createElement(d.a,{variant:"h7"},c.a.createElement("strong",null,e.label))),c.a.createElement(g.a,{xs:12,md:10,className:t.gridItem},c.a.createElement(d.a,{variant:"body1"},e.content)))),c.a.createElement(L.a,{medium:!0,up:!0},c.a.createElement(g.a,{container:!0,justify:"flex-start"},c.a.createElement(g.a,{xs:12,md:2,className:t.gridItem},c.a.createElement(d.a,{variant:"h7"},c.a.createElement("strong",null,e.label))),c.a.createElement(g.a,{xs:12,md:10,className:t.gridItem},c.a.createElement(d.a,{variant:"body1"},e.content))))))}));return c.a.createElement(N,{elevation:3,className:e.colored?t.coloredRow:""},c.a.createElement(P,{expandIcon:c.a.createElement(D.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},c.a.createElement(L.a,{small:!0,down:!0},c.a.createElement(g.a,{container:!0,justify:"flex-start"},c.a.createElement(g.a,{xs:12,className:t.gridItem},c.a.createElement(d.a,{variant:"subtitle1"},e.date," (",e.weekday,")")),c.a.createElement(g.a,{xs:12,className:t.gridItem},c.a.createElement(d.a,{variant:"subtitle1"},c.a.createElement("strong",null,e.title))))),c.a.createElement(L.a,{medium:!0,up:!0,style:{width:"100%"}},c.a.createElement(g.a,{container:!0,justify:"flex-start"},c.a.createElement(g.a,{xs:2,className:t.gridItem},c.a.createElement(d.a,{variant:"subtitle1"},e.date)),c.a.createElement(g.a,{xs:2,className:t.gridItem},c.a.createElement(d.a,{variant:"subtitle1"},e.weekday)),c.a.createElement(g.a,{xs:2,className:t.gridItem},c.a.createElement(d.a,{variant:"subtitle1"},e.title))))),c.a.createElement(W,null,c.a.createElement(L.a,{small:!0,down:!0,style:{width:"100%"}},c.a.createElement(g.a,{container:!0,justify:"flex-start"},a)),c.a.createElement(L.a,{medium:!0,up:!0,style:{width:"100%"}},c.a.createElement("div",{className:t.detailsBlock},c.a.createElement(g.a,{container:!0,justify:"flex-start"},a)))))}var q=[{colored:!1,date:"07.08.2021",weekday:"Saturday",title:"Welcome",details:[{label:"Logistics",content:"Arrival, unpacking of containers"}]},{colored:!1,date:"08.08.2021",weekday:"Sunday",title:"Welcome",details:[{label:"Logistics",content:"Arrival, unpacking of containers"},{label:"Preparation",content:"Measuring of skiffs and equipment\nRegistration of competitors/teams"}]},{colored:!0,date:"09.08.2021",weekday:"Monday",title:"Team Worlds",details:[{label:"Logistics",content:"Arrival, unpacking of containers"},{label:"Preparation",content:"Measuring of skiffs and equipment\nRegistration of competitors/teams\nWelcome and skippers briefing at the FSC"},{label:"Sailing",content:"Round Robin\nAfter sailing beer / snacks"},{label:"Evening",content:"Barbecue at the FSC (guest tickets available)\nTiki Bar, FSC Bar"}]},{colored:!0,date:"10.08.2021",weekday:"Tuesday",title:"Team Worlds",details:[{label:"Logistics",content:"Arrival, unpacking of containers"},{label:"Preparation",content:"Measuring of skiffs and equipment\nregistration of competitors/teams"},{label:"Sailing",content:"Semi-Finals and Finals\nAfter sailing beer / snacks"},{label:"Evening",content:'Price giving of the Team Worlds\nTeam Worlds Dinner at the FSC (guest tickets available)\n"Presentation Night" at the boat shed of the FSC\nTiki Bar, FSC Bar\nMidnight - Skippers briefing (Bastardo Race)'}]},{colored:!1,date:"11.08.2021",weekday:"Wednesday",title:"Lay-Day",details:[{label:"Logistics",content:"Arrival, unpacking of containers"},{label:"Preparation",content:"Measuring of skiffs and equipment\nRegistration of competitors"},{label:"Sailing",content:"Bastardo Race\nAfter sailing beer / snacks"},{label:"Evening",content:"6pm - AGM of German Int14 Class Association at the FSC\nTiki Bar, FSC Bar"}]},{colored:!0,date:"12.08.2021",weekday:"Thursday",title:"Worlds",details:[{label:"Preparation",content:"Welcome and skippers briefing at the FSC (snacks / soft drinks)"},{label:"Sailing",content:"Practice Race (Start 2 pm)\nAfter sailing beer / snacks"},{label:"Evening",content:"Welcome Dinner at the Robbe & Berking Heritage Center (guest tickets available)\nPlease dress nicely"}]},{colored:!0,date:"13.08.2021",weekday:"Friday",title:"Worlds",details:[{label:"Sailing",content:"Race 1 (start 1 pm)\nAfter sailing beer / snacks"},{label:"Evening",content:"6pm - Crews Union Meeting, youth room of the FSC\nTiki Bar, FSC Bar"}]},{colored:!0,date:"14.08.2021",weekday:"Saturday",title:"Worlds",details:[{label:"Sailing",content:"Race 2 (start 1pm)\nAfter sailing beer / snacks"},{label:"Afternoon",content:'Int14 test sailing\nBoats for sale\nFood truck "Ono Deli"'},{label:"Evening",content:'6pm - Presentation of future Worlds Proposals at the FSC\n"Veteran\'s Night" at the Bar of the FSC'}]},{colored:!0,date:"15.08.2021",weekday:"Sunday",title:"Worlds",details:[{label:"Sailing",content:"Race 3 (start 1pm)\nAfter sailing beer / snacks"},{label:"Afternoon",content:'Int14 test sailing\nBoats for sale\nFood truck "Ono Deli"'},{label:"Evening",content:"6pm - World Council Meeting, youth room of the FSC\nTiki Bar, FSC Bar"}]},{colored:!0,date:"16.08.2021",weekday:"Monday",title:"Worlds",details:[{label:"Sailing",content:"Race 4 (start 1pm)\nAfter sailing beer / snacks"},{label:"Evening",content:'"Barbecue Night" at the FSC (guest tickets available)\nTiki Bar, FSC Bar'}]},{colored:!1,date:"17.08.2021",weekday:"Tuesday",title:"Reserve-Day",details:[{label:"Sightseeing\nPossibilities",content:"Water castle of Gl\xfccksburg\nBlackBox Tours\nTrip to Flensburg with the MS Viking\nHansen's Brewery\nRum Museum\nCity walk through ancient town"},{label:"Evening",content:"Tiki Bar, FSC Bar"}]},{colored:!0,date:"18.08.2021",weekday:"Wednesday",title:"Worlds",details:[{label:"Sailing",content:"Race 5 (start 12 am)\nAfter sailing beer / snacks"},{label:"Afternoon",content:"5pm - Welcome on the terrace of the Hanseatic Naval School (DHH)"},{label:"Evening",content:"Tiki Bar, FSC Bar"}]},{colored:!0,date:"19.08.2021",weekday:"Thursday",title:"Worlds",details:[{label:"Sailing",content:"Race 6 (start 1 pm)\nAfter sailing beer / snacks"},{label:"Evening",content:"Tiki Bar (last call), FSC Bar"}]},{colored:!0,date:"20.08.2021",weekday:"Friday",title:"Worlds",details:[{label:"Sailing",content:"Race 7 (start 1pm)\nAfter sailing beer / snacks"},{label:"Logistics",content:"Packing of boats and containers"},{label:"Evening",content:"Price giving and Worlds Dinner at the FSC (guest tickets available)\nPlease dress nicely"}]},{colored:!1,date:"21.08.2021",weekday:"Saturday",title:"Goodbye",details:[{label:"Logistics",content:"Packing of boats and containers, departure"},{label:"Evening",content:"Party night in Hamburg"}]},{colored:!1,date:"22.08.2021",weekday:"Sunday",title:"Goodbye",details:[{label:"Logistics",content:"Packing of boats and containers, departure"}]}],V=Object(u.a)((function(e){return{root:{width:"100%"},gridItem:{display:"flex",alignItems:"center",justifyContent:"left"},divider:{marginTop:e.spacing(2),marginBottom:e.spacing(2)}}}));function _(){var e=V(),t=q.map((function(e){return c.a.createElement(G,{colored:e.colored,date:e.date,weekday:e.weekday,title:e.title,details:e.details})}));return c.a.createElement("div",{className:e.root},t)}var J=a(74),z=a.n(J),U=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return c.a.createElement("div",{className:"SailorsGuidePage"},c.a.createElement(d.a,{variant:"h4",className:e.headline},"Sailors Guide"),c.a.createElement(d.a,{variant:"h6",className:e.headlineSmall},"Preliminary Schedule"),c.a.createElement(_,null))}}]),t}(c.a.Component);t.default=z()((function(e){return{headline:{display:"block",textAlign:"center",marginBottom:e.spacing(4)},headlineSmall:{display:"block",textAlign:"center",marginBottom:e.spacing(2)}}}))(U)}}]);
//# sourceMappingURL=13.143d9471.chunk.js.map