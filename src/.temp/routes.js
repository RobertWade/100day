export default [
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/robertwade/Desktop/100daysofcode/src/pages/About.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/robertwade/Desktop/100daysofcode/src/pages/Index.vue")
  },
  {
    path: "/instagram",
    component: () => import(/* webpackChunkName: "page--src--pages--instagram-vue" */ "/Users/robertwade/Desktop/100daysofcode/src/pages/Instagram.vue")
  },
  {
    path: "/login",
    component: () => import(/* webpackChunkName: "page--src--pages--login-vue" */ "/Users/robertwade/Desktop/100daysofcode/src/pages/Login.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/robertwade/Desktop/100daysofcode/node_modules/gridsome/app/pages/404.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/robertwade/Desktop/100daysofcode/node_modules/gridsome/app/pages/404.vue")
  }
]

