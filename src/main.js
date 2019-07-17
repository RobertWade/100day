// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify'
import DefaultLayout from '~/layouts/Default.vue'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(Vuetify)
  Vue.component('Layout', DefaultLayout)
}
