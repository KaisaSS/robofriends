(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(3),o=n.n(s),i=n(2),a=n(4),l=n(8),h=n(9),b=(n(25),n(1)),d=function(e){var t=e.name,n=e.email,c=e.id;return Object(b.jsxs)("div",{className:"bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc",children:[Object(b.jsx)("img",{alt:"robopic",src:"https://robohash.org/".concat(c,"?200x200")}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:n})]})]})},j=function(e){var t=e.robots;return Object(b.jsxs)("div",{children:[t.map((function(e,n){return Object(b.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))," "]})},u=function(e){e.searchfield;var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b-green bg-lightest-blue",type:"search",placeholder:"search Robots...",onChange:t})})},O=function(e){return Object(b.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"80vh"},children:e.children})},f=n(10),g=n(11),p=n(13),v=n(12),x=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(e){var c;return Object(f.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(g.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h1",{children:"Ooops...That is not good!"}):this.props.children}}]),n}(c.Component),m=(n(27),"CHANGE_SEARCHFIELD"),y="REQUEST_ROBOTS_PENDING",E="REQUEST_ROBOTS_SUCCESS",C="REQUEST_ROBOTS_FAILED",R=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.searchRobots})).searchField,n=Object(i.c)((function(e){return e.requestRobots})),r=n.robots,s=n.isPending,o=function(){e((function(e){e({type:y}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:E,payload:t})})).catch((function(t){return e({type:C,payload:t})}))}))};Object(c.useEffect)((function(){o()}),[]);var a=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return s?Object(b.jsx)("h1",{children:"Loading..."}):Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsxs)("div",{className:"title-container",children:[Object(b.jsx)("h1",{className:"title logo",children:Object(b.jsx)("i",{className:"fas fa-robot"})}),Object(b.jsx)("h1",{className:"title",children:"RoboFriends"})]}),Object(b.jsx)(u,{searchChange:function(t){var n;e((n=t.target.value,{type:m,payload:n}))}}),Object(b.jsx)(O,{children:Object(b.jsx)(x,{children:Object(b.jsx)(j,{robots:a})})})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))},N={searchField:""},F={isPending:!1,robots:[],error:""},w=(n(28),Object(l.createLogger)()),T=Object(a.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.type===m?Object.assign({},e,{searchField:t.payload}):e},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y:return Object.assign({},e,{isPending:!0});case E:return Object.assign({},e,{robots:t.payload,isPending:!1});case C:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),L=Object(a.c)(T,Object(a.a)(h.a,w));o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(i.a,{store:L,children:Object(b.jsx)(R,{})})}),document.getElementById("root")),S()}},[[29,1,2]]]);
//# sourceMappingURL=main.7b717c46.chunk.js.map