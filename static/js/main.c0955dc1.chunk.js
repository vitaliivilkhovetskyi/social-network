(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){e.exports={nav:"Navbar_nav__M6Ygg",item:"Navbar_item__2noiO",activeLink:"Navbar_activeLink__2xhd1",friends:"Navbar_friends__1wfvY"}},128:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(41),a=n(5),c="SEND_MESSAGE",s={dialogs:[{id:1,name:"Vitalii"},{id:1,name:"Vitalii"},{id:2,name:"Andriy"},{id:3,name:"Vasya"},{id:4,name:"Valera"},{id:5,name:"Petya"},{id:6,name:"igor"}],messages:[{id:1,message:"Hi"},{id:1,message:"Hello"},{id:2,message:"Hyper Link"},{id:3,message:"Hyper Link"},{id:4,message:"Hyper Link"},{id:5,message:"Hyper Link"}]},i=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},135:function(e,t,n){e.exports={userPhoto:"users_userPhoto__2RQ0E"}},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n(133),a=(n(26),r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"10068273-c4ca-46ac-8490-df081983d159"}})),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),s.getProfile(e)}},s={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},169:function(e,t,n){},170:function(e,t,n){},26:function(e,t,n){"use strict";n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return w})),n.d(t,"c",(function(){return y})),n.d(t,"b",(function(){return _})),n.d(t,"f",(function(){return C}));var r=n(11),a=n.n(r),c=n(21),s=n(41),i=n(5),o=n(16),u=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),r):e}))},l="FOLLOW",d="UNFOLLOW",f="SET_USERS",j="SET_CURRENT_PAGE",b="SET_TOTAL_USERS_COUNT",p="TOGGLE_IS_FETCHING",h="TOGGLE_IS_FOLLOWING_PROGRESS",g={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},O=function(e){return{type:l,userId:e}},m=function(e){return{type:d,userId:e}},v=function(e){return{type:j,currentPage:e}},x=function(e){return{type:p,isFetching:e}},w=function(e,t){return{type:h,isFetching:e,userId:t}},y=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),r(v(e)),n.next=4,o.c.getUsers(e,t);case 4:c=n.sent,r(x(!1)),r((s=c.items,{type:f,users:s})),r((a=c.totalCount,{type:b,count:a}));case 8:case"end":return n.stop()}var a,s}),n)})));return function(e){return n.apply(this,arguments)}}()},P=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(c(n)),t(w(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),_=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:P(n,e,o.c.follow.bind(o.c),O);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:P(n,e,o.c.unfollow.bind(o.c),m);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!0})});case d:return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!1})});case f:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case j:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case b:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.count});case p:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case h:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(s.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},291:function(e,t,n){"use strict";n.r(t);var r=n(1),a=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,296)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},c=n(0),s=n.n(c),i=n(66),o=n.n(i),u=(n(169),n(36)),l=n(37),d=n(39),f=n(38),j=(n(170),n(12)),b=n.n(j),p=n(13),h=function(){return Object(r.jsxs)("nav",{className:b.a.nav,children:[Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{to:"/profile",activeClassName:b.a.activeLink,children:"Profile"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{to:"/dialogs",activeClassName:b.a.activeLink,children:"Messages"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{to:"/users",activeClassName:b.a.activeLink,children:"Users"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{to:"/news",activeClassName:b.a.activeLink,children:"News"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{to:"/music",activeClassName:b.a.activeLink,children:"Music"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(p.b,{to:"/settings",activeClassName:b.a.activeLink,children:"Settings"})}),Object(r.jsx)("div",{className:b.a.friends,children:"Friends"}),Object(r.jsxs)("div",{className:b.a.friends,children:[Object(r.jsx)(p.b,{to:"/andrey",activeClassName:b.a.activeLink,children:"Andrey"}),Object(r.jsx)(p.b,{to:"/sasha",activeClassName:b.a.activeLink,children:"Sasha"}),Object(r.jsx)(p.b,{to:"/vasya",activeClassName:b.a.activeLink,children:"Vasya"})]})]})},g=n(18),O=n(26),m=n(57),v=n(69),x=n(130),w=n(71),y=n.n(w),P=n(134),_=n.n(P),C=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,s=e.onPageChanged,i=e.portionSize,o=void 0===i?10:i,u=Math.ceil(t/n),l=[],d=1;d<=u;d++)l.push(d);var f=Math.ceil(u/o),j=Object(c.useState)(1),b=Object(x.a)(j,2),p=b[0],h=b[1],g=(p-1)*o+1,O=p*o;return Object(r.jsxs)("div",{className:y.a.paginator,children:[p>1&&Object(r.jsx)("button",{onClick:function(){h(p-1)},children:"PREV"}),l.filter((function(e){return e>=g&&e<=O})).map((function(e){return Object(r.jsx)("span",{className:_()(Object(v.a)({},y.a.selectedPage,a===e),y.a.pageNumber),onClick:function(t){s(e)},children:e},e)})),f>p&&Object(r.jsx)("button",{onClick:function(){h(p+1)},children:"NEXT"})]})},S=n(135),k=n.n(S),N=n.p+"static/media/user.4ce1ce10.png",I=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,c=e.follow;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(p.b,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:N,className:k.a.userPhoto,alt:"men"})})}),Object(r.jsx)("div",{children:t.followed?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Follow "})})]}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:"user.location.city"}),Object(r.jsx)("div",{children:"user.location.country"})]})]})]})},E=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,c=e.onPageChanged,s=e.users,i=Object(m.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(C,{currentPage:t,onPageChanged:c,totalItemsCount:n,pageSize:a}),Object(r.jsx)("div",{children:s.map((function(e){return Object(r.jsx)(I,{user:e,followingInProgress:i.followingInProgress,unfollow:i.unfollow,follow:i.follow},e.id)}))})]})},L=n(42),F=n(9),T=n(136),U=Object(T.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),z=function(e){return e.usersPage.pageSize},A=function(e){return e.usersPage.totalUsersCount},M=function(e){return e.usersPage.currentPage},R=function(e){return e.usersPage.isFetching},D=function(e){return e.usersPage.followingInProgress},V=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(L.a,{}):null,Object(r.jsx)(E,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.Component),H=Object(F.d)(Object(g.b)((function(e){return{users:U(e),pageSize:z(e),totalUsersCount:A(e),currentPage:M(e),isFetching:R(e),followingInProgress:D(e)}}),{follow:O.b,unfollow:O.f,setCurrentPage:O.d,toggleFollowingProgress:O.e,getUsers:O.c}))(V),G=n(5),B=n(95),W=n.n(B),J=function(e){return Object(r.jsxs)("header",{className:W.a.header,children:[Object(r.jsx)("img",{src:"https://cdn.mos.cms.futurecdn.net/BVb3Wzn9orDR8mwVnhrSyd-1200-80.jpg",alt:"logo"}),Object(r.jsx)("div",{className:W.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[e.login," - ",Object(r.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(r.jsx)(p.b,{to:"/login",children:"Login"})})]})},K=n(11),X=n.n(K),Y=n(21),q=n(16),Q=n(46),Z="samurai-network/auth/SET_USER_DATA",$={userId:null,email:null,login:null,isAuth:!1},ee=function(e,t,n,r){return{type:Z,payload:{userId:e,email:t,login:n,isAuth:r}}},te=function(){return function(){var e=Object(Y.a)(X.a.mark((function e(t){var n,r,a,c,s;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.email,s=r.login,t(ee(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return Object(G.a)(Object(G.a)({},e),t.payload);default:return e}},re=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)(J,Object(G.a)({},this.props))}}]),n}(s.a.Component),ae=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(Y.a)(X.a.mark((function e(t){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.logout();case 2:0===e.sent.data.resultCode&&t(te());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(re),ce=n(129),se=n(34),ie=n(88),oe=n(10),ue=n(54),le=n.n(ue),de=Object(ce.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(se.c)("Email","email",[ie.b],se.a),Object(se.c)("Password","password",[ie.b],se.a,{type:"password"}),Object(se.c)(null,"rememberMe",[],se.a,{type:"checkbox"},"Remember me"),n&&Object(r.jsx)("div",{className:le.a.formSummaryError,children:n}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),fe=Object(g.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(Y.a)(X.a.mark((function r(a){var c,s;return X.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,q.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(te()):(s=c.data.messages.length>0?c.data.messages[0]:"Some error",a(Object(Q.a)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(r.jsx)(oe.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(de,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),je="INITIALIZED_SUCCESS",be={initialized:!1},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case je:return Object(G.a)(Object(G.a)({},e),{},{initialized:!0});default:return e}},he=n(98),ge=n(128),Oe={postsSiteBar:[{id:1,message:"What are you doing",likesCount:12},{id:1,message:"I will try to help you",likesCount:11}]},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe;return e},ve=n(138),xe=n(131),we=Object(F.c)({profilePage:he.b,dialogsPage:ge.a,sitebar:me,usersPage:O.a,auth:ne,form:xe.a,app:pe}),ye=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||F.d,Pe=Object(F.e)(we,ye(Object(F.a)(ve.a)));window.__store__=Pe;var _e=Pe,Ce=function(e){return function(t){return Object(r.jsx)(s.a.Suspense,{fallback:Object(r.jsx)(L.a,{}),children:Object(r.jsx)(e,Object(G.a)({},t))})}},Se=s.a.lazy((function(){return n.e(4).then(n.bind(null,298))})),ke=s.a.lazy((function(){return n.e(3).then(n.bind(null,297))})),Ne=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(ae,{}),Object(r.jsx)(h,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(oe.b,{path:"/dialogs",render:Ce(Se)}),Object(r.jsx)(oe.b,{path:"/profile/:userId?",render:Ce(ke)}),Object(r.jsx)(oe.b,{path:"/users",render:function(){return Object(r.jsx)(H,{})}}),Object(r.jsx)(oe.b,{path:"/login",render:function(){return Object(r.jsx)(fe,{})}})]})]}):Object(r.jsx)(L.a,{})}}]),n}(s.a.Component),Ie=Object(F.d)(oe.f,Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(te());Promise.all([t]).then((function(){e({type:je})}))}}}))(Ne),Ee=function(e){return Object(r.jsx)(p.a,{children:Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(g.a,{store:_e,children:Object(r.jsx)(Ie,{})})})})};o.a.render(Object(r.jsx)(Ee,{}),document.getElementById("root")),a()},34:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(5),a=n(57),c=n(1),s=(n(0),n(91)),i=n(54),o=n.n(i),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,s=r&&n;return Object(c.jsxs)("div",{className:o.a.formControl+" "+(s?o.a.error:""),children:[Object(c.jsx)("div",{children:a}),s&&Object(c.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(c.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(c.jsxs)(u,Object(r.a)(Object(r.a)({},e),{},{children:[Object(c.jsx)("input",Object(r.a)(Object(r.a)({},t),n))," "]}))},f=function(e,t,n,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(c.jsxs)("div",{children:[Object(c.jsx)(s.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},i))," ",o]})}},42:function(e,t,n){"use strict";var r=n(1),a=(n(0),n.p+"static/media/prealoader.33240157.svg");t.a=function(e){return Object(r.jsx)("div",{style:{backgroundColor:"black"},children:Object(r.jsx)("img",{src:a,alt:"loader"})})}},54:function(e,t,n){e.exports={formControl:"FormsControls_formControl__25Nd4",error:"FormsControls_error__sdVzV",formSummaryError:"FormsControls_formSummaryError__3lJvN"}},71:function(e,t,n){e.exports={paginator:"Paginator_paginator__3Kf06",pageNumber:"Paginator_pageNumber__1VsQr",selectedPage:"Paginator_selectedPage__1RHKG"}},88:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},95:function(e,t,n){e.exports={header:"Header_header__1M1aq",loginBlock:"Header_loginBlock__3DydH"}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return g}));var r=n(11),a=n.n(r),c=n(21),s=n(41),i=n(5),o=n(16),u="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",f={posts:[{id:1,message:"hi, how are you. i`m",likesCount:12},{id:1,message:"its my first post",likesCount:11}],profile:null,status:""},j=function(e){return{type:u,newPostText:e}},b=function(e){return{type:d,status:e}},p=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(b(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n]),newPostText:""});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});default:return e}}}},[[291,1,2]]]);
//# sourceMappingURL=main.c0955dc1.chunk.js.map