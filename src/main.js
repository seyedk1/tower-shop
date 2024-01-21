import Vue from 'vue'
import app from './app.vue'
import './axios'
import './registerServiceWorker'
import router from './router'
import { store } from './store'
import 'mdbvue/lib/css/mdb.min.css'
import './assets/sass/style.scss'
import './resources'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import EasySlider from 'vue-easy-slider'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import 'vuetify/dist/vuetify.min.css'


// import plugins
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import vuetify from './plugins/vuetify';


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(EasySlider)
Vue.component('VueSlider', VueSlider)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(app)
}).$mount('#app')
