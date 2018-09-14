import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import axios from './axios';
import router from './router';
import store from './store';


Vue.use(Buefy);
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
