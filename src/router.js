import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/register',
			name: 'register',
			component: () => import('./views/Register.vue'),
			beforeEnter: (to, from, next) => {
				if (localStorage.getItem('auth')) {
					return next({ name: 'home' });
				}

				return next();
			},
		},
		{
			path: '/user/:id',
			name: 'user',
			component: () => import('./views/User.vue'),
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('./views/Login.vue'),
			beforeEnter: (to, from, next) => {
				if (localStorage.getItem('auth')) {
					return next({ name: 'home' });
				}

				return next();
			},
		},
		{
			path: '/event',
			name: 'event',
			component: () => import('./views/Event/Event.vue'),
			children: [
				{
					path: 'create',
					component: () => import('./views/Event/CreateEvent.vue'),
				},
			],
		},
	],
});
