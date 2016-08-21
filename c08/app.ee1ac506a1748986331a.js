webpackJsonp([0,3],{0:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var l=a(1),r=n(l),o=a(31),s=n(o),u=a(165),c=n(u),i=a(235),f=n(i),d=a(236),p=n(d),m=a(474),b=n(m),h=a(479),y=n(h),v=a(482),E=n(v),g=a(484),_=n(g),w=a(486),O=n(w),N=a(488),k=n(N),x=a(489),P=n(x),S=a(491),j=n(S),C=a(167),M=r["default"].createElement(C.Router,{history:C.browserHistory},r["default"].createElement(C.Route,{path:"/",component:c["default"]},r["default"].createElement(C.IndexRoute,{component:p["default"]}),r["default"].createElement(C.Route,{path:"/book",component:f["default"]}),r["default"].createElement(C.Route,{path:"/charts",component:p["default"]}),r["default"].createElement(C.Route,{path:"/embeds",component:P["default"]}),r["default"].createElement(C.Route,{path:"/forms",component:b["default"]}),r["default"].createElement(C.Route,{path:"/custom",component:y["default"]}),r["default"].createElement(C.Route,{path:"/workflow",component:E["default"]}),r["default"].createElement(C.Route,{path:"/buttons",component:_["default"]}),r["default"].createElement(C.Route,{path:"/ajax",component:O["default"]}),r["default"].createElement(C.Route,{path:"/infographics",component:k["default"]})),r["default"].createElement(C.Route,{path:"*",component:c["default"]},r["default"].createElement(C.IndexRoute,{component:j["default"]})));s["default"].render(M,document.getElementById("app"))},165:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(1),c=n(u),i=a(166),f=n(i),d=a(231),p=n(d),m=a(233),b=n(m),h=function(e){function t(){return l(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),s(t,[{key:"render",value:function(){return c["default"].createElement("section",{className:"landing"},c["default"].createElement(f["default"],null),c["default"].createElement(b["default"],null),this.props.children,c["default"].createElement(p["default"],null))}}]),t}(u.Component);t["default"]=h},166:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),r=n(l),o=(a(167),a(230)),s=n(o),u=function(){return r["default"].createElement("nav",{className:"nav"},r["default"].createElement(s["default"],{to:"/",brand:!0},"ReactSpeed"),r["default"].createElement(s["default"],{to:"/book"},"Book"),r["default"].createElement(s["default"],{href:"https://github.com/manavsehgal/react-speed-book"},"Code"),r["default"].createElement(s["default"],{href:"https://manavsehgal.github.io/react-speed-demos/"},"Demos"),r["default"].createElement(s["default"],{href:"https://reactspeed.com"},"Website"))};t["default"]=u},230:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(1),c=n(u),i=a(167),f=function(e){function t(){return l(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),s(t,[{key:"render",value:function(){var e=this.props.brand?"nav__brand":"nav__link",t=this.props.brand?null:"nav__link--active";return c["default"].createElement("li",{className:"grid-cell"},this.props.to?c["default"].createElement(i.Link,{to:this.props.to,className:e,activeClassName:t},this.props.children):c["default"].createElement("a",{href:this.props.href,className:"nav__link"},this.props.children))}}]),t}(c["default"].Component);f.propTypes={brand:u.PropTypes.bool},f.defaultProps={brand:!1},t["default"]=f},231:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),r=n(l),o=a(232),s=n(o),u=function(){return r["default"].createElement("section",{className:"stripe--slim back--gray pattern-grey-wash-wall"},r["default"].createElement(s["default"],{plain:!0,className:"col--full text--center white"},r["default"].createElement("p",null,"Copyright (c) 2016, Manav Sehgal. All rights reserved.")))};t["default"]=u},232:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),r=n(l),o=function(e){var t=e.plain?"card":"card--box",a=e.className?t+" "+e.className:t;return r["default"].createElement("div",{onClick:e.onClick,className:a},e.children)};o.propTypes={className:l.PropTypes.string,children:l.PropTypes.node,onClick:l.PropTypes.func,plain:l.PropTypes.bool},o.defaultProps={className:"",children:null,onClick:null,plain:!1},t["default"]=o},233:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(1),c=n(u),i=a(234),f=n(i),d=function(e){function t(e){l(this,t);var a=r(this,Object.getPrototypeOf(t).call(this,e));return a.state={ribbonActive:""},a}return o(t,e),s(t,[{key:"setRibbonActive",value:function(e){this.setState({ribbonActive:e}),this.context.router.push(e.toLowerCase())}},{key:"render",value:function(){return c["default"].createElement("section",{className:"ribbon"},c["default"].createElement(f["default"],{onClick:this.setRibbonActive.bind(this,"Forms"),active:"Forms"===this.state.ribbonActive,ribbon:!0,text:"Forms",icon:"list-alt",size:"2x",className:"default"}),c["default"].createElement(f["default"],{onClick:this.setRibbonActive.bind(this,"Workflow"),active:"Workflow"===this.state.ribbonActive,ribbon:!0,text:"Workflow",icon:"code-fork",size:"2x",className:"default"}),c["default"].createElement(f["default"],{onClick:this.setRibbonActive.bind(this,"Ajax"),active:"Ajax"===this.state.ribbonActive,ribbon:!0,text:"Ajax",icon:"cloud",size:"2x",className:"default"}),c["default"].createElement(f["default"],{onClick:this.setRibbonActive.bind(this,"Embeds"),active:"Embeds"===this.state.ribbonActive,ribbon:!0,text:"Embeds",icon:"share-alt-square",size:"2x",className:"default"}),c["default"].createElement(f["default"],{onClick:this.setRibbonActive.bind(this,"Custom"),active:"Custom"===this.state.ribbonActive,ribbon:!0,text:"Custom",icon:"cog",size:"2x",className:"default"}),c["default"].createElement(f["default"],{onClick:this.setRibbonActive.bind(this,"Infographics"),active:"Infographics"===this.state.ribbonActive,ribbon:!0,text:"Infographics",icon:"eye",size:"2x",className:"default"}),c["default"].createElement(f["default"],{onClick:this.setRibbonActive.bind(this,"Charts"),active:"Charts"===this.state.ribbonActive,ribbon:!0,text:"Charts",icon:"bar-chart",size:"2x",className:"default"}))}}]),t}(u.Component);d.contextTypes={router:u.PropTypes.object.isRequired},t["default"]=d},234:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=a(1),s=n(o),u=function(e){var t=e.icon,a=e.text,n=e.size,o=e.rotate,u=e.flip,c=e.inverse,i=e.slim,f=e.ribbon,d=e.active,p=l(e,["icon","text","size","rotate","flip","inverse","slim","ribbon","active"]),m="";m+=n?" fa-"+n:"",m+=o?" fa-rotate-"+o:"",m+=u?" fa-flip-"+u:"",m+=c?" fa-inverse":"";var b="fa fa-"+t+m,h=null;return i&&(h=s["default"].createElement("div",p,s["default"].createElement("i",{className:b})," ",a)),f&&(h=s["default"].createElement("div",r({},p,{className:e.className+" ribbon__menu text--center"}),s["default"].createElement("i",{className:b}),s["default"].createElement("p",{className:d?"ribbon__text--active":"ribbon__text"},a))),i||f||(h=s["default"].createElement("div",p,s["default"].createElement("i",{className:b}),s["default"].createElement("h1",null,a))),h};u.propTypes={icon:o.PropTypes.string.isRequired,text:o.PropTypes.string.isRequired,className:o.PropTypes.string,size:o.PropTypes.oneOf(["lg","2x","3x","4x","5x",""]),rotate:o.PropTypes.number,flip:o.PropTypes.oneOf(["horizontal","vertical",""]),inverse:o.PropTypes.bool,slim:o.PropTypes.bool,ribbon:o.PropTypes.bool},u.defaultProps={className:"",size:"",rotate:null,flip:"",inverse:!1,slim:!1,ribbon:!1},t["default"]=u},235:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),r=n(l),o=a(232),s=n(o),u=function(){return r["default"].createElement("section",{className:"stripe"},r["default"].createElement(s["default"],{plain:!0,className:"text--center"},r["default"].createElement("a",{href:"https://leanpub.com/reactspeedcoding",className:"image__link"},r["default"].createElement("img",{width:"200",src:"img/reactspeed-cover-leanpub.jpg"}))),r["default"].createElement(s["default"],{plain:!0,className:"col--half text--center"},r["default"].createElement("h1",null,"Develop Awesome Apps"),r["default"].createElement("p",{className:"subtext"},"Join 100s of readers learning latest React ES6 concepts.")))};t["default"]=u},236:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(1),i=n(c),f=a(232),d=n(f),p=a(237),m=a(238),b=m.Chart,h=m.Bars,y=m.Cloud,v=m.Labels,E=m.Lines,g=m.Pies,w=m.RadialLines,O=m.Ticks,N=m.Layer,k=m.Animate,x=m.Transform,P=function(e){function t(){r(this,t);var e=o(this,Object.getPrototypeOf(t).call(this));return e.updateSeries=function(){var t=[{data:_.map(_.range(3),function(){return 100*Math.random()})}],a=_.map(_.range(3),function(){return{data:_.map(_.range(3),function(){return 100*Math.random()})}});e.setState({series:a,cloudSeries:p.cloudSeries,singleSeries:t,hovered:{}})},e.state={series:p.series,cloudSeries:p.cloudSeries,singleSeries:p.singleSeries,hovered:{}},e.updateSeries=e.updateSeries.bind(e),e}return s(t,e),u(t,[{key:"render",value:function(){return i["default"].createElement("section",{className:"stripe"},i["default"].createElement(d["default"],{className:"col--quarter back--white"},i["default"].createElement(b,{onClick:this.updateSeries,width:300,height:200,series:this.state.series},i["default"].createElement(x,{method:["transpose","stackNormalized"]},i["default"].createElement(g,{colors:"category10",combined:!0,innerRadius:"33%",padAngle:.025,cornerRadius:5,innerPadding:2,pieAttributes:{onMouseMove:function(e){return e.target.style.opacity=1},onMouseLeave:function(e){return e.target.style.opacity=.5}},pieStyle:{opacity:.5}})))),i["default"].createElement(d["default"],{className:"col--quarter back--white"},i["default"].createElement(b,{onClick:this.updateSeries,width:300,height:200,series:this.state.series,minY:0},i["default"].createElement(k,l({_ease:"bounce"},"_ease","elastic"),i["default"].createElement(N,{width:"80%",height:"80%",position:"middle center"},i["default"].createElement(O,{axis:"y",ticks:{maxTicks:4},tickVisible:function(e){var t=e.tick;return t.y>0},lineLength:"100%",lineVisible:!0,lineStyle:{stroke:"lightgray"},labelStyle:{textAnchor:"end",alignmentBaseline:"middle",fontSize:"0.5em",fill:"lightgray"},labelAttributes:{x:-5}}),i["default"].createElement(O,{axis:"x",label:function(e){var t=e.tick;return t.x+1},labelStyle:{textAnchor:"middle",alignmentBaseline:"before-edge",fontSize:"0.5em",fill:"lightgray"},labelAttributes:{y:3}}),i["default"].createElement(h,{groupPadding:"3%",innerPadding:"0.5%",barAttributes:{onMouseMove:function(e){return e.target.style.fillOpacity=1},onMouseLeave:function(e){return e.target.style.fillOpacity=.5}},barStyle:{fillOpacity:.5}}),i["default"].createElement(E,{lineWidth:2}),i["default"].createElement(v,{label:function(e){var t=e.point;return"y="+Math.round(t.y)},dotStyle:{textAnchor:"middle",dominantBaseline:"text-after-edge",fontFamily:"sans-serif",fontSize:"0.65em"},labelAttributes:{y:-4}}))))),i["default"].createElement(d["default"],{className:"col--quarter back--white"},i["default"].createElement(b,{onClick:this.updateSeries,width:300,height:200,series:this.state.series,minY:0},i["default"].createElement(w,null))),i["default"].createElement(d["default"],{className:"col--quarter back--white"},i["default"].createElement(b,{onClick:this.updateSeries,width:300,height:200,series:this.state.singleSeries,minY:0},i["default"].createElement(x,{method:["transpose"]},i["default"].createElement(N,{width:"80%",height:"80%"},i["default"].createElement(h,null)),i["default"].createElement(N,{width:"25%",height:"25%",position:"right bottom"},i["default"].createElement(x,{method:"stack"},i["default"].createElement(g,{combined:!0,colors:"category10",pieStyle:{opacity:.8}})))))),i["default"].createElement(d["default"],{className:"col--quarter back--white"},i["default"].createElement(b,{onClick:this.updateSeries,width:300,height:200,series:this.state.series,minY:0},i["default"].createElement(x,{method:["transpose","stack"]},i["default"].createElement(g,{combined:!0,innerPadding:"3%",innerRadius:"20%"})))),i["default"].createElement(d["default"],{className:"col--quarter back--white"},i["default"].createElement(b,{onClick:this.updateSeries,width:300,height:200,series:this.state.cloudSeries,minY:0},i["default"].createElement(x,{method:"transpose"},i["default"].createElement(y,{font:"Arial",minFontSize:12,maxFontSize:36,padding:2})))))}}]),t}(c.Component);t["default"]=P},237:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.singleSeries=[{data:[1,2,4]}],t.series=[{data:[1,2,3]},{data:[5,7,11]},{data:[13,17,19]}],t.cloudSeries=[{data:[{label:"Highcharts",y:30},{label:"amCharts",y:13},{label:"Google Charts",y:31},{label:"ChartJS",y:15},{label:"TauCharts",y:8},{label:"FusionCharts",y:2},{label:"ZingChart",y:2},{label:"uvCharts",y:1},{label:"jQuery Sparklines",y:1},{label:"Ember Charts",y:2},{label:"Canvas.js",y:16},{label:"Flot",y:1},{label:"D3.js",y:27},{label:"n3-charts",y:3},{label:"NVD3",y:3},{label:"Chartist.js",y:3},{label:"C3.js",y:14},{label:"Cubism.js",y:1},{label:"Rickshaw",y:2}]}]},474:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),r=n(l),o=a(232),s=n(o),u=a(475),c=n(u),i=a(476),f=n(i),d=a(477),p=n(d),m=a(478),b=n(m),h=function(){return r["default"].createElement("section",{className:"stripe back--default"},r["default"].createElement(s["default"],{plain:!0,className:"col--one-third text--center"},r["default"].createElement("h1",null,"Beautiful Responsive Forms"),r["default"].createElement("p",{className:"subtext"},"Create beautiful forms using several variations of input controls and buttons.")),r["default"].createElement(s["default"],{className:"col--quarter back--white"},r["default"].createElement(f["default"],null,r["default"].createElement(p["default"],{label:"Name",icon:"user"}),r["default"].createElement(b["default"],{placeholder:"Placeholder for name"})),r["default"].createElement(f["default"],null,r["default"].createElement(p["default"],{label:"Street"}),r["default"].createElement(b["default"],{placeholder:"Enter street address"})),r["default"].createElement(f["default"],null,r["default"].createElement(b["default"],{placeholder:"Just a field"}))),r["default"].createElement(s["default"],{className:"back--white"},r["default"].createElement(f["default"],null,r["default"].createElement(b["default"],null),r["default"].createElement(c["default"],{color:"success",icon:"search"})),r["default"].createElement(f["default"],null,r["default"].createElement(c["default"],{color:"primary",icon:"cloud",label:"Connect"}),r["default"].createElement(b["default"],{placeholder:"Enter server address"})),r["default"].createElement(f["default"],null,r["default"].createElement(p["default"],{icon:"envelope"}),r["default"].createElement(b["default"],{placeholder:"Send a note"}),r["default"].createElement(c["default"],{color:"warning",label:"Send"}))))};t["default"]=h},475:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(1),o=n(r),s=function(e){var t=e.icon?o["default"].createElement("span",null,o["default"].createElement("i",{className:"fa fa-"+e.icon})," ",e.label):e.label,a=e.size?"button button--"+e.color+" button--"+e.size:"button button--"+e.color;return a=e.className?a+" "+e.className:a,o["default"].createElement("button",l({},e,{className:a}),t)};s.propTypes={label:o["default"].PropTypes.string,icon:o["default"].PropTypes.string,size:o["default"].PropTypes.string,color:o["default"].PropTypes.string},t["default"]=s},476:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(1),o=n(r),s=function(e){return o["default"].createElement("div",l({},e,{className:e.className?"input "+e.className:"input"}),e.children)};s.propTypes={children:o["default"].PropTypes.node},t["default"]=s},477:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(1),o=n(r),s=function(e){var t=null;e.icon&&e.label&&(t=o["default"].createElement("span",null,o["default"].createElement("span",{className:"fa fa-"+e.icon})," ",e.label)),!e.icon&&e.label&&(t=e.label),e.icon&&!e.label&&(t=o["default"].createElement("span",{className:"fa fa-"+e.icon}));var a=e.className?"input__label "+e.className:"input__label";return o["default"].createElement("span",l({},e,{className:a}),t)};s.propTypes={label:o["default"].PropTypes.string,icon:o["default"].PropTypes.string},t["default"]=s},478:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(1),o=n(r),s=function(e){return o["default"].createElement("input",l({},e,{className:e.className?"input__field "+e.className:"input__field",placeholder:e.placeholder}))};s.propTypes={placeholder:o["default"].PropTypes.string},t["default"]=s},479:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),r=n(l),o=a(232),s=n(o),u=a(480),c=n(u),i=function(){return r["default"].createElement("section",{className:"stripe pattern-agsquare"},r["default"].createElement(s["default"],{className:"col--one-third text--center back--white"},r["default"].createElement(c["default"],null)),r["default"].createElement(s["default"],{plain:!0,className:"col--half text--center"},r["default"].createElement("h1",null,"Custom React Component"),r["default"].createElement("p",{className:"subtext"},"This custom component demonstrates props, state, and ES6 classes.")))};t["default"]=i},480:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(1),c=n(u),i=a(481),f=n(i),d=a(476),p=n(d),m=a(477),b=n(m),h=a(478),y=n(h),v=function(e){function t(e){l(this,t);var a=r(this,Object.getPrototypeOf(t).call(this,e));return a.state={currentGreeting:e.greet,value:"ReactSpeed"},a.slangGreet=a.slangGreet.bind(a),a.hindiGreet=a.hindiGreet.bind(a),a.handleNameChange=a.handleNameChange.bind(a),a}return o(t,e),s(t,[{key:"slangGreet",value:function(){this.setState({currentGreeting:"Yo!"})}},{key:"hindiGreet",value:function(){this.setState({currentGreeting:"Namaste"})}},{key:"handleNameChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){var e=this.state.value?this.state.value+" says "+this.state.currentGreeting:this.state.currentGreeting;return c["default"].createElement("div",null,c["default"].createElement(f["default"],{greet:e,message:"World!"}),c["default"].createElement("h2",null,c["default"].createElement("a",{onClick:this.slangGreet},"Slang")," OR ",c["default"].createElement("a",{onClick:this.hindiGreet},"Hindi")),c["default"].createElement(p["default"],null,c["default"].createElement(b["default"],{label:"Name"}),c["default"].createElement(y["default"],{type:"text",value:this.state.value,placeholder:"Enter a name",onChange:this.handleNameChange})))}}]),t}(u.Component);v.propTypes={greet:u.PropTypes.string.isRequired},v.defaultProps={greet:"Hello"},t["default"]=v},481:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),r=n(l),o=function(e){var t=e.greet,a=e.message;return r["default"].createElement("h1",null,t," ",a)};o.propTypes={greet:r["default"].PropTypes.string.isRequired,message:r["default"].PropTypes.string.isRequired},t["default"]=o},482:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),r=n(l),o=a(232),s=n(o),u=a(483),c=n(u),i=function(){return r["default"].createElement("section",{className:"stripe"},r["default"].createElement(s["default"],{plain:!0,className:"col--half text--center"},r["default"].createElement("h1",null,"Custom Workflow Component"),r["default"].createElement("p",{className:"subtext"},"Navigate React development strategies.")),r["default"].createElement(s["default"],{className:"col--one-third back--secondary"},r["default"].createElement(c["default"],null)))};t["default"]=i},483:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(1),c=n(u),i=function(e){function t(e){l(this,t);var a=r(this,Object.getPrototypeOf(t).call(this,e));return a.state={stepsIndex:0},a.cycleSequence=a.cycleSequence.bind(a),a.cycleScenario=a.cycleScenario.bind(a),a}return o(t,e),s(t,[{key:"cycleSequence",value:function(){var e=this.state.stepsIndex===this.props.steps.length-1?0:this.state.stepsIndex+1;this.setState({stepsIndex:e})}},{key:"cycleScenario",value:function(){for(var e=this.props.steps,t=e[this.state.stepsIndex],a=0,n=0;n<e.length;++n)e[n].symbol===t.symbol&&a++;for(var l=t.scenario,r=this.state.stepsIndex+a>=e.length?0:this.state.stepsIndex+1,o=r;o<e.length;++o)if(e[o].scenario!=l){this.setState({stepsIndex:o});break}}},{key:"render",value:function(){for(var e=this.props.steps,t=e[this.state.stepsIndex],a=0,n=0;n<e.length;++n)e[n].symbol===t.symbol&&a++;return c["default"].createElement("div",{className:"workflow"},c["default"].createElement("div",{className:"workflow__scenario"},t.scenario),c["default"].createElement("div",{className:"workflow__text"},t.text),c["default"].createElement("div",{className:"workflow__nav"},c["default"].createElement("div",{onClick:this.cycleScenario,className:"workflow__symbol"},t.symbol),c["default"].createElement("div",{className:"workflow__steps"},a),c["default"].createElement("div",{onClick:this.cycleSequence,className:"workflow__sequence"},t.sequence)))}}]),t}(c["default"].Component);i.propTypes={steps:u.PropTypes.array.isRequired},i.defaultProps={steps:[{symbol:"Se",scenario:"Embed to React",sequence:1,text:"Customize the embed code within target platform to suit\n        your site or app styles and placement."},{symbol:"Se",scenario:"Embed to React",sequence:2,text:"Optionally, parametrize the embed code attributes using React props."},{symbol:"Se",scenario:"Embed to React",sequence:3,text:"Use stateless component as you will most likely not maintain embed UI state\n        locally in your component."},{symbol:"Ss",scenario:"Sample to React",sequence:1,text:"Identify root level component name that represents your sample.\n        Define component."},{symbol:"Ss",scenario:"Sample to React",sequence:2,text:"Split sample code HTML, CSS, JavaScript into separate files."},{symbol:"Ss",scenario:"Sample to React",sequence:3,text:"Copy HTML DOM that renders the sample UI, into render() method\n        of root component."},{symbol:"Ss",scenario:"Sample to React",sequence:4,text:"Optionally, replace some of the HTML with existing reusable\n        components in your app."},{symbol:"Ss",scenario:"Sample to React",sequence:5,text:"Copy CSS into new or existing partial."},{symbol:"Ss",scenario:"Sample to React",sequence:6,text:"Copy JS to /app/public/js folder."},{symbol:"Ss",scenario:"Sample to React",sequence:7,text:"JS over CDN is referred in <script> tag from /app/templates/*.html."},{symbol:"Ss",scenario:"Sample to React",sequence:8,text:"Import the new component into your index.jsx and\n        render in render() method."}]},t["default"]=i},484:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),r=n(l),o=a(475),s=n(o),u=a(232),c=n(u),i=a(485),f=n(i),d=function(){return r["default"].createElement("section",{className:"stripe back--default"},r["default"].createElement(c["default"],{className:"col--one-third text--center back--white"},r["default"].createElement("p",null,"Click does not do much..."),r["default"].createElement(s["default"],{label:"Default",color:"default"}),r["default"].createElement(s["default"],{label:"Primary",color:"primary"}),r["default"].createElement(s["default"],{label:"Secondary",color:"secondary"}),r["default"].createElement(s["default"],{label:"Warning",color:"warning"}),r["default"].createElement(s["default"],{label:"Success",color:"success"}),r["default"].createElement(s["default"],{label:"Danger",color:"danger"})),r["default"].createElement(c["default"],{className:"col--quarter text--center back--white"},r["default"].createElement(f["default"],{colors:["Primary","Success","Danger","Warning"]})),r["default"].createElement(c["default"],{className:"text--center back--white"},r["default"].createElement(f["default"],{colors:["Secondary","Success","Danger","Warning"],sizes:["large","medium","medium","small"],icons:["coffee","cloud","flash","plug"],iconOnly:!0})))};t["default"]=d},485:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{
value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(1),c=n(u),i=a(475),f=n(i),d=function(e){function t(e){l(this,t);var a=r(this,Object.getPrototypeOf(t).call(this,e));return a.state={demoMessage:"Click any button..."},a}return o(t,e),s(t,[{key:"handleButtonClick",value:function(e){this.setState({demoMessage:"Button "+e+" clicked."})}},{key:"render",value:function(){var e=this,t=this.props.colors.map(function(t,a){var n=void 0===e.props.icons||0===e.props.icons.length?null:e.props.icons[a],l=void 0===e.props.sizes||0===e.props.sizes.length?null:e.props.sizes[a],r=e.props.iconOnly?null:t;return c["default"].createElement(f["default"],{key:t,label:r,size:l,color:t.toLowerCase(),icon:n,onClick:e.handleButtonClick.bind(e,t)})});return c["default"].createElement("div",null,c["default"].createElement("p",null,this.state.demoMessage),t)}}]),t}(u.Component);d.propTypes={colors:u.PropTypes.array.isRequired,icons:u.PropTypes.array,sizes:u.PropTypes.array,iconOnly:u.PropTypes.bool},d.defaultProps={icons:[],sizes:[],iconOnly:!1},t["default"]=d},486:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),r=n(l),o=a(232),s=n(o),u=a(487),c=n(u),i=function(){return r["default"].createElement("section",{className:"stripe"},r["default"].createElement(s["default"],{className:"col--quarter text--center back--default"},r["default"].createElement(c["default"],{repo:"angular/angular"})),r["default"].createElement(s["default"],{className:"col--quarter text--center back--default"},r["default"].createElement(c["default"],{repo:"facebook/react"})),r["default"].createElement(s["default"],{className:"col--quarter text--center back--default"},r["default"].createElement(c["default"],{repo:"meteor/meteor"})))};t["default"]=i},487:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(1),c=n(u),i=a(234),f=n(i),d=function(e){function t(e){l(this,t);var a=r(this,Object.getPrototypeOf(t).call(this,e));return a.state={full_name:"",stargazers_count:0,open_issues:0},a}return o(t,e),s(t,[{key:"componentDidMount",value:function(){var e="https://api.github.com/repos/"+this.props.repo;this.serverRequest=$.get(e,function(e){this.setState({full_name:e.full_name,stargazers_count:e.stargazers_count,open_issues:e.open_issues})}.bind(this))}},{key:"componentWillUnmount",value:function(){this.serverRequest.abort()}},{key:"render",value:function(){return this.state.full_name?c["default"].createElement("div",null,c["default"].createElement("h1",null,c["default"].createElement(f["default"],{slim:!0,className:"primary",icon:"github",text:this.state.full_name})),c["default"].createElement("h2",null,c["default"].createElement(f["default"],{slim:!0,className:"secondary",icon:"star",text:this.state.stargazers_count+" stars"})),c["default"].createElement("h2",null,c["default"].createElement(f["default"],{slim:!0,className:"danger",icon:"bug",text:this.state.open_issues+" issues"}))):c["default"].createElement("p",null,"Loading Live Stats...")}}]),t}(c["default"].Component);d.propTypes={repo:u.PropTypes.string.isRequired},t["default"]=d},488:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),r=n(l),o=a(232),s=n(o),u=a(234),c=n(u),i=function(){return r["default"].createElement("section",{className:"stripe back--default"},r["default"].createElement(s["default"],{className:"col--one-third text--center back--white"},r["default"].createElement(c["default"],{className:"primary",icon:"globe",size:"5x",text:"Nine Component Creation Strategies"})),r["default"].createElement(s["default"],{plain:!0,className:"col--one-fourth"},r["default"].createElement("h3",null,r["default"].createElement(c["default"],{slim:!0,className:"danger",icon:"building",text:"Modular Architecture"})),r["default"].createElement("h3",null,r["default"].createElement(c["default"],{slim:!0,className:"default",icon:"cloud",text:"Leverages Cloud"})),r["default"].createElement("h3",null,r["default"].createElement(c["default"],{slim:!0,className:"secondary",icon:"cog",text:"30 Custom Components"})),r["default"].createElement("h3",null,r["default"].createElement(c["default"],{slim:!0,className:"warning",icon:"bullseye",text:"Goal Oriented Design"}))),r["default"].createElement(s["default"],{plain:!0,className:"col--one-third text--center"},r["default"].createElement("h1",null,"Infographic Components"),r["default"].createElement("p",{className:"subtext"},"Custom React components easily reusable to create variety of Infographic elements.")))};t["default"]=i},489:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),r=n(l),o=a(232),s=n(o),u=a(490),c=n(u),i=function(){return r["default"].createElement("section",{className:"stripe"},r["default"].createElement(s["default"],{plain:!0,className:"col--one-third text--center back--white"},r["default"].createElement(c["default"],{videoid:"MGuKhcnrqGA"})),r["default"].createElement(s["default"],{plain:!0,className:"col--half text--center"},r["default"].createElement("h1",null,"Embed React Components"),r["default"].createElement("p",{className:"subtext"},"This custom component demonstrates media embed within custom React component.")))};t["default"]=i},490:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),r=n(l),o=function(e){var t=e.videoid;return r["default"].createElement("iframe",{className:"youtube",width:"560",height:"315",src:"https://www.youtube.com/embed/"+t+"?\n    rel=0&amp;controls=0&amp;showinfo=0",frameBorder:"0",allowFullScreen:!0})};o.propTypes={videoid:r["default"].PropTypes.string},t["default"]=o},491:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(){return o["default"].createElement("section",{className:"stripe"},o["default"].createElement(u["default"],{plain:!0,className:"col--half text--center"},o["default"].createElement("h1",null,"Sorry we could not find that"),o["default"].createElement("p",{className:"subtext"},"Please use top navigation to visit what you are looking for.")),o["default"].createElement(u["default"],{plain:!0,className:"text--center"},o["default"].createElement("a",{href:"https://leanpub.com/reactspeedcoding",className:"image__link"},o["default"].createElement("img",{width:"200",src:"img/reactspeed-cover-leanpub.jpg"}))))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),o=n(r),s=a(232),u=n(s);t["default"]=l}});