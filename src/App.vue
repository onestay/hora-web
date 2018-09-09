<template>
	<div id="app">
		<h-navbar />
		<router-view/>
	</div>
</template>
<script>
import Navbar from './components/Navbar.vue';

export default {
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

	$colors: (
		"primary": ($primary, $primary-invert),
		"twitch": ($twitch, $primary-invert),
	);

	@import "~@mdi/font/css/materialdesignicons.min.css";
	@import "~bulma";
	@import "~buefy/src/scss/buefy";
</style>
