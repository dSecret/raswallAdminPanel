import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueRouter from 'vue-router'
import Routes from './routes'
 
Vue.use(Vuetify)
Vue.use(VueRouter)

const router =new VueRouter({
	routes:Routes,
	mode:'history'
})

new Vue({
	el: '#app',
	render: h => h(App),
	router:router
})
