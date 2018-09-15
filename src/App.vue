<template>
	<div id="app">
		<h-navbar />
		<router-view/>
	</div>
</template>
<script>
import Navbar from './components/Navbar.vue';

export default {
	beforeCreate() {
		let auth = localStorage.getItem('auth');
		if (auth) {
			auth = JSON.parse(auth);
			this.$http.post('/auth/verify')
				.then((res) => {
					this.$store.commit('login', res.data);
				})
				.catch((e) => {
					console.error(`Error during verify: ${e}`);
				});
		}
	},
	components: {
		'h-navbar': Navbar,
	},
};
</script>

<style lang="scss">
	@import "~bulma/sass/utilities/_all";
	$primary: $blue;
	$primary-invert: findColorInvert($primary);

	$twitch:#6441A4;
	$twitch-invert: findColorInvert($twitch);

	$card-background-color: #f9f6f6;
	$colors: (
		"primary": ($primary, $primary-invert),
		"twitch": ($twitch, $primary-invert),
	);

	@import "~@mdi/font/css/materialdesignicons.min.css";
	@import "~bulma";
	@import "~buefy/src/scss/buefy";
</style>
