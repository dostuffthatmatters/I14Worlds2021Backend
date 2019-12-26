(this.webpackJsonpreact_frontend=this.webpackJsonpreact_frontend||[]).push([[8],{193:function(e,a,t){"use strict";var i=t(21);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t(0)),r=(0,i(t(27)).default)(n.default.createElement(n.default.Fragment,null,n.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z",opacity:".87"}),n.default.createElement("path",{d:"M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"})),"ArrowBackIosTwoTone");a.default=r},200:function(e,a,t){"use strict";var i=t(21);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t(0)),r=(0,i(t(27)).default)(n.default.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");a.default=r},201:function(e,a,t){"use strict";var i=t(21);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t(0)),r=(0,i(t(27)).default)(n.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight");a.default=r},222:function(e,a,t){"use strict";var i=t(37),n=t(38),r=t(40),c=t(39),l=t(34),s=t(41),o=t(0),d=t.n(o),m=(t(223),t(76)),g=t.n(m),p=t(26),h=t(184),u=t(245),f=t(178),v=t(224),b=t.n(v),y=t(200),I=t.n(y),x=t(201),k=t.n(x),E=t(2),O=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(r.a)(this,Object(c.a)(a).call(this,e))).state={loading:!0,shrinkImage:!1},t.cardRef=d.a.createRef(),t.buttonRef=d.a.createRef(),document.addEventListener("keydown",(function(e){"Escape"===e.key?t.props.closeImageSlider():t.props.images.length>1&&("ArrowLeft"===e.key?t.handleLeftClick():"ArrowRight"===e.key&&t.handleRightClick())})),t.handleLeftClick=t.handleLeftClick.bind(Object(l.a)(t)),t.handleRightClick=t.handleRightClick.bind(Object(l.a)(t)),t}return Object(s.a)(a,e),Object(n.a)(a,[{key:"handleLeftClick",value:function(){var e=this.props.imageSliderIndex-1;e<0&&(e+=this.props.images.length),this.setState({loading:!0}),this.props.newImageSliderIndex(e)}},{key:"handleRightClick",value:function(){var e=(this.props.imageSliderIndex+1)%this.props.images.length;this.setState({loading:!0}),this.props.newImageSliderIndex(e)}},{key:"render",value:function(){var e=this,a=this.props.classes;return d.a.createElement("div",{className:Object(E.a)(a.imageSlider,"ImageSlider")},d.a.createElement("div",{className:"Image"},d.a.createElement(u.a,{color:"secondary",style:{display:this.state.loading?"block":"none"}}),d.a.createElement(h.a,{ref:this.cardRef,className:a.card,elevation:3,style:{display:this.state.loading?"none":"block"}},d.a.createElement("img",{className:a.img,src:this.props.images[this.props.imageSliderIndex].filepath_full,alt:this.props.images[this.props.imageSliderIndex].description,onLoad:function(){return e.setState({loading:!1})}}))),d.a.createElement(f.a,{ref:this.buttonRef,"aria-label":"close image slider",className:Object(E.a)(a.icon,a.closeIcon),size:"medium",onClick:this.props.closeImageSlider},d.a.createElement(b.a,null)),this.props.images.length>1&&d.a.createElement(d.a.Fragment,null,d.a.createElement(f.a,{"aria-label":"previous image",className:Object(E.a)(a.icon,a.prevIcon),size:"medium",onClick:this.handleLeftClick},d.a.createElement(I.a,null)),d.a.createElement(f.a,{"aria-label":"next image",className:Object(E.a)(a.icon,a.nextIcon),size:"medium",onClick:this.handleRightClick},d.a.createElement(k.a,null))))}}]),a}(d.a.Component);a.a=g()((function(e){return{imageSlider:{backgroundColor:e.palette.gunmetalGray.main},card:{margin:e.spacing(2),maxWidth:"calc(100vw - ".concat(e.spacing(4),"px)"),maxHeight:"calc(100vh - ".concat(e.spacing(4),"px)")},img:{maxWidth:"calc(100vw - ".concat(e.spacing(4),"px)"),maxHeight:"calc(100vh - ".concat(e.spacing(4),"px)")},icon:{backgroundColor:e.palette.gunmetalGray.main,position:"fixed",color:"white",zIndex:3e3},closeIcon:{right:e.spacing(2),top:e.spacing(2)},prevIcon:{left:e.spacing(2),bottom:e.spacing(2)},nextIcon:{right:e.spacing(2),bottom:e.spacing(2)}}}))(Object(p.h)(O))},223:function(e,a,t){},224:function(e,a,t){"use strict";var i=t(21);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t(0)),r=(0,i(t(27)).default)(n.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");a.default=r},225:function(e,a,t){"use strict";var i=t(1),n=t(3),r=t(0),c=t.n(r),l=(t(4),t(2)),s=t(6),o=["video","audio","picture","iframe","img"],d=c.a.forwardRef((function(e,a){var t=e.children,r=e.classes,s=e.className,d=e.component,m=void 0===d?"div":d,g=e.image,p=e.src,h=e.style,u=Object(n.a)(e,["children","classes","className","component","image","src","style"]),f=-1!==o.indexOf(m),v=!f&&g?Object(i.a)({backgroundImage:'url("'.concat(g,'")')},h):h;return c.a.createElement(m,Object(i.a)({className:Object(l.a)(r.root,s,f&&r.media,-1!=="picture img".indexOf(m)&&r.img),ref:a,style:v,src:f?g||p:void 0},u),t)}));a.a=Object(s.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(d)},226:function(e,a,t){"use strict";var i=t(1),n=t(3),r=t(0),c=t.n(r),l=(t(4),t(2)),s=t(6),o=c.a.forwardRef((function(e,a){var t=e.classes,r=e.className,s=e.component,o=void 0===s?"div":s,d=Object(n.a)(e,["classes","className","component"]);return c.a.createElement(o,Object(i.a)({className:Object(l.a)(t.root,r),ref:a},d))}));a.a=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(o)},245:function(e,a,t){"use strict";var i=t(1),n=t(3),r=t(0),c=t.n(r),l=(t(4),t(2)),s=t(6),o=t(7);function d(e){var a,t,i;return a=e,t=0,i=1,e=(Math.min(Math.max(t,a),i)-t)/(i-t),e=(e-=1)*e*e+1}var m=c.a.forwardRef((function(e,a){var t,r=e.classes,s=e.className,m=e.color,g=void 0===m?"primary":m,p=e.disableShrink,h=void 0!==p&&p,u=e.size,f=void 0===u?40:u,v=e.style,b=e.thickness,y=void 0===b?3.6:b,I=e.value,x=void 0===I?0:I,k=e.variant,E=void 0===k?"indeterminate":k,O=Object(n.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),S={},N={},j={};if("determinate"===E||"static"===E){var C=2*Math.PI*((44-y)/2);S.strokeDasharray=C.toFixed(3),j["aria-valuenow"]=Math.round(x),"static"===E?(S.strokeDashoffset="".concat(((100-x)/100*C).toFixed(3),"px"),N.transform="rotate(-90deg)"):(S.strokeDashoffset="".concat((t=(100-x)/100,t*t*C).toFixed(3),"px"),N.transform="rotate(".concat((270*d(x/70)).toFixed(3),"deg)"))}return c.a.createElement("div",Object(i.a)({className:Object(l.a)(r.root,s,"inherit"!==g&&r["color".concat(Object(o.a)(g))],{indeterminate:r.indeterminate,static:r.static}[E]),style:Object(i.a)({width:f,height:f},N,{},v),ref:a,role:"progressbar"},j,O),c.a.createElement("svg",{className:r.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},c.a.createElement("circle",{className:Object(l.a)(r.circle,h&&r.circleDisableShrink,{indeterminate:r.circleIndeterminate,static:r.circleStatic}[E]),style:S,cx:44,cy:44,r:(44-y)/2,fill:"none",strokeWidth:y})))}));a.a=Object(s.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(m)},256:function(e,a,t){},315:function(e,a,t){"use strict";t.r(a);var i=t(37),n=t(38),r=t(40),c=t(39),l=t(34),s=t(41),o=t(0),d=t.n(o),m=t(10),g=t(26),p=(t(256),t(5)),h=t(54),u=t(55),f=t(184),v=t(226),b=t(225),y=t(179),I=t(183),x=t(185),k=t(44),E=t(182),O=t(178),S=t(193),N=t.n(S),j=t(76),C=t.n(j),w=t(222),M=t(2),T=t(200),L=t.n(T),A=t(201),_=t.n(A),F={"<h6>":"<h6 class='MuiTypography-root MuiTypography-h6'>","<h5>":"<h5 class='MuiTypography-root MuiTypography-h5'>","<h4>":"<h4 class='MuiTypography-root MuiTypography-h4'>","<h3>":"<h3 class='MuiTypography-root MuiTypography-h3'>","<h2>":"<h2 class='MuiTypography-root MuiTypography-h2'>","<h1>":"<h1 class='MuiTypography-root MuiTypography-h1'>","<p>":"<p class='MuiTypography-root MuiTypography-body1'>","<a href=":"<strong><a href=","<a target=":"<strong><a target=","</a>":"</a></strong>"},R=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(r.a)(this,Object(c.a)(a).call(this,e))).state={imageSliderOpen:!1,imageSliderIndex:0},t.articleId=t.props.match.params.articleId,t.getArticleContent=t.getArticleContent.bind(Object(l.a)(t)),t.openImageSlider=t.openImageSlider.bind(Object(l.a)(t)),t.closeImageSlider=t.closeImageSlider.bind(Object(l.a)(t)),t.newImageSliderIndex=t.newImageSliderIndex.bind(Object(l.a)(t)),t}return Object(s.a)(a,e),Object(n.a)(a,[{key:"openImageSlider",value:function(){this.props.hideWebsite(!0),this.setState({imageSliderOpen:!0})}},{key:"closeImageSlider",value:function(){this.props.hideWebsite(!1),this.setState({imageSliderOpen:!1})}},{key:"newImageSliderIndex",value:function(e){this.setState({imageSliderIndex:e})}},{key:"getArticleContent",value:function(e){var a=this,t=this.props.classes;for(var i in F)e.content_html=e.content_html.replace(i,F[i]);var n=e.headline;return 0===n.length&&(n="No Title"),d.a.createElement("div",{className:"ArticleView"},d.a.createElement(E.a,{maxWidth:"md",className:t.relativeContainer},d.a.createElement(m.b,{to:"/news-feed",className:t.relativeContainer,onClick:function(){return k.animateScroll.scrollToTop({duration:300})}},d.a.createElement(N.a,{className:t.backIcon,color:"secondary"})),d.a.createElement(y.a,{variant:"h4",className:t.headline},n),d.a.createElement(f.a,{elevation:3,className:t.card},d.a.createElement(b.a,{className:t.cardMedia,image:e.images[this.state.imageSliderIndex].filepath_large,alt:e.images[this.state.imageSliderIndex].description,onClick:this.openImageSlider}),e.images.length>1&&d.a.createElement(d.a.Fragment,null,d.a.createElement(O.a,{"aria-label":"previous image",className:Object(M.a)(t.icon,t.prevIcon),size:"medium",onClick:function(){var t=a.state.imageSliderIndex-1;t<0&&(t+=e.images.length),a.setState({loading:!0}),a.newImageSliderIndex(t)}},d.a.createElement(L.a,null)),d.a.createElement(O.a,{"aria-label":"next image",className:Object(M.a)(t.icon,t.nextIcon),size:"medium",onClick:function(){var t=(a.state.imageSliderIndex+1)%e.images.length;a.setState({loading:!0}),a.newImageSliderIndex(t)}},d.a.createElement(_.a,null)))),d.a.createElement("div",{className:t.articleContent+" ArticleContent",dangerouslySetInnerHTML:{__html:e.content_html}}),d.a.createElement("div",{className:t.articleCredit},d.a.createElement(y.a,{variant:"subtitle2",className:t.articleCredit},"By ",e.author))))}},{key:"render",value:function(){var e,a=this,t=this.props.classes,i=this.props.getArticleFromId(this.articleId);return e=void 0===i?d.a.createElement(y.a,{variant:"h4",className:t.headline},"Nothing here ..."):this.getArticleContent(i),d.a.createElement(d.a.Fragment,null,!this.state.imageSliderOpen&&d.a.createElement("div",{className:"NewsFeedPage"},e),this.state.imageSliderOpen&&d.a.createElement(w.a,{images:i.images,imageSliderIndex:this.state.imageSliderIndex,closeImageSlider:this.closeImageSlider,newImageSliderIndex:function(e){return a.newImageSliderIndex(e)}}))}}]),a}(d.a.Component),z=C()((function(e){return{relativeContainer:{position:"relative"},backIcon:{position:"absolute",top:e.spacing(1),left:e.spacing(1)},headline:{marginLeft:e.spacing(5),marginRight:e.spacing(5),display:"block",textAlign:"center",marginBottom:e.spacing(2)},card:{position:"relative",cursor:"pointer"},cardMedia:{height:0,paddingTop:"66.666%"},icon:{position:"absolute",color:"white",zIndex:3e3},prevIcon:{left:e.spacing(1),bottom:e.spacing(1)},nextIcon:{right:e.spacing(1),bottom:e.spacing(1)},articleContent:{marginTop:e.spacing(4),marginBottom:e.spacing(8)},articleCredit:{textAlign:"center"}}}))(Object(g.h)(R)),B=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(r.a)(this,Object(c.a)(a).call(this,e))).state={loading:!0,articles:[],articleIdtoIndex:{}},t.getArticleList=t.getArticleList.bind(Object(l.a)(t)),t.getArticleFromId=t.getArticleFromId.bind(Object(l.a)(t)),t}return Object(s.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("Fetching article data"),Object(h.a)(u.a+"/backend/database/article",{}).then((function(a){console.log("Fetching article data: successful"),e.setState({loading:!1,articles:JSON.parse(a).articles,articleIdtoIndex:JSON.parse(a).article_id_to_index})})).catch((function(){console.log("Fetching article data: failed"),e.setState({loading:!1})}))}},{key:"getArticleList",value:function(){var e=this.props.classes,a=this.state.articles.map((function(a,t){var i;i=0===a.images.length?"https://wallpaperaccess.com/full/25637.jpg":a.images[0].filepath_medium;var n=a.headline;return 0===n.length&&(n="No Title"),d.a.createElement(I.a,{item:!0,xs:12,sm:8,md:12,key:t},d.a.createElement(m.b,{to:"/news-feed/"+a.id},d.a.createElement(p.Breakpoint,{small:!0,down:!0},d.a.createElement(f.a,{elevation:3},d.a.createElement(b.a,{className:e.cardImageTop,image:i}),d.a.createElement("div",{className:e.cardContentBottom},d.a.createElement("div",{className:e.cardContentOverlay}),d.a.createElement(v.a,{className:e.cardContent},d.a.createElement(y.a,{component:"h5",variant:"h5"},n),d.a.createElement(y.a,{variant:"subtitle1",color:"textSecondary"},a.content_plain))))),d.a.createElement(p.Breakpoint,{medium:!0,up:!0},d.a.createElement(f.a,{className:e.card,elevation:3},d.a.createElement(b.a,{className:e.cardImageLeft,image:i}),d.a.createElement("div",{className:e.cardContentRight},d.a.createElement("div",{className:e.cardContentOverlay}),d.a.createElement(v.a,{className:e.cardContent},d.a.createElement(y.a,{component:"h5",variant:"h5"},n),d.a.createElement(y.a,{variant:"subtitle1",color:"textSecondary"},a.content_plain)))))))}));return 0===this.state.articles.length?d.a.createElement(y.a,{variant:"h6",style:{textAlign:"center"}},"No posts ..."):d.a.createElement(I.a,{container:!0,spacing:2,justify:"center"},a)}},{key:"getArticleFromId",value:function(e){return this.state.articles[this.state.articleIdtoIndex[e]]}},{key:"render",value:function(){var e=this.props.classes;return d.a.createElement(g.d,null,d.a.createElement(g.b,{exact:!0,strict:!0,path:"/news-feed"},d.a.createElement("div",{className:"NewsFeedPage"},d.a.createElement(y.a,{variant:"h4",className:e.headline},"News Feed"),this.state.loading&&d.a.createElement(x.a,{className:e.linearProgress,color:"secondary"}),d.a.createElement("div",{className:e.root},!this.state.loading&&this.getArticleList()))),d.a.createElement(g.b,{path:"/news-feed/:articleId"},this.state.loading&&d.a.createElement(d.a.Fragment,null,d.a.createElement(y.a,{variant:"h4",className:e.headline},"Gallery"),d.a.createElement(x.a,{className:e.linearProgress,color:"secondary"})),!this.state.loading&&d.a.createElement(z,{getArticleFromId:this.getArticleFromId,hideWebsite:this.props.hideWebsite})))}}]),a}(d.a.Component);a.default=C()((function(e){return{headline:{display:"block",textAlign:"center",marginBottom:e.spacing(3)},linearProgress:{borderRadius:"2px"},card:{display:"flex",cursor:"pointer"},cardContentRight:{position:"relative",height:e.spacing(16),marginBottom:e.spacing(2),textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"no-wrap",maxWidth:"calc(100% - ".concat(e.spacing(32),"px)")},cardContentBottom:{position:"relative",minHeight:e.spacing(10),maxHeight:e.spacing(18),marginBottom:e.spacing(2),textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"no-wrap",maxWidth:"100%"},cardContent:{paddingTop:e.spacing(2),paddingRight:e.spacing(2),paddingBottom:e.spacing(1),paddingLeft:e.spacing(2),margin:0,"&:last-child":{paddingBottom:e.spacing(1)}},cardContentOverlay:{position:"absolute",left:0,bottom:"-1px",width:"100%",height:e.spacing(4),background:"linear-gradient(0deg, rgba(255,255,255,1.0), rgba(255,255,255,0.0))"},cardImageLeft:{height:e.spacing(18),width:e.spacing(32)},cardImageTop:{height:0,paddingTop:"56.25%"}}}))(B)}}]);
//# sourceMappingURL=8.4539a702.chunk.js.map