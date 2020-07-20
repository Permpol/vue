import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})
