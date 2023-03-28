import Vue from 'vue'
import App from './App.vue'
import LoadingPersonalizado from '../src/components/LoadingComponent.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// Object.defineProperty(Vue.prototype, '$_', { value: _ });
Vue.component('loading-personalizado', LoadingPersonalizado)