(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{227:function(e,n,t){},280:function(e,n,t){"use strict";var o=t(227);t.n(o).a},286:function(e,n,t){"use strict";t.r(n);t(245);var o,a=t(246),r=t(262),c=t.n(r),l={metaInfo:{title:"Hello, world!"},data:function(){return{username:"coding_rob"}},methods:{getFollowers:(o=Object(a.a)(regeneratorRuntime.mark(function e(n){var t,o,a,r,l,s,u,i,f;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.prev=1,e.next=4,c.a.get("https://www.instagram.com/".concat(n,"/?__a=1"));case 4:t=e.sent,o=t.data,a=o.graphql.user,r=a.edge_owner_to_timeline_media.edges,console.log(r),l=a.edge_followed_by.count,s=a.edge_follow.count,u=a.full_name,i=a.username,f=a.profile_pic_url_hd,console.log("".concat(i," has ").concat(l," and follows ").concat(s,". His full name is ").concat(u,". His pic is ").concat(f)),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),console.log(e.t0);case 20:case"end":return e.stop()}},e,null,[[1,17]])})),function(e){return o.apply(this,arguments)})}},s=(t(280),t(91)),u=Object(s.a)(l,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Layout",{staticClass:"instagram"},[t("v-text-field",{model:{value:e.username,callback:function(n){e.username=n},expression:"username"}}),t("v-btn",{on:{click:function(n){return e.getFollowers(e.username)}}},[e._v("Senden")])],1)},[],!1,null,null,null);n.default=u.exports}}]);