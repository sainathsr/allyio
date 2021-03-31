import Vue from 'vue'
import App from './App.vue'

import 'reset-css';
// using standard reset-css 


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
