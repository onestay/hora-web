<template>
	<div class="section">
		<div class="container">
			<h1 class="title is-1 has-text-centered is-uppercase has-text-weight-semibold">
				Hora
			</h1>
			<h2 class="subtitle is-3 has-text-centered">
				Simply create beautiful schedules
			</h2>
			<div class="tile is-ancestor has-text-centered">
				<div class="tile is-parent">
					<div class="tile">
						<article>
							<p class="title is-3">About</p>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
								Praesent tellus. Vestibulum nunc
								felis, venenatis sed, ultrices non, fermentum
								a, ipsum. Suspendisse a odio vitae tellus
								dignissim pharetra. Vivamus ligula diam, imperdiet ut,
								pulvinar sed, malesuada et, massa. Pellentesque ut wisi.
							</p>
						</article>
					</div>
					<div class="tile is-1" />
					<div class="tile">
						<article>
							<p class="title is-3">Upcoming events</p>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
								Praesent tellus. Vestibulum nunc
								felis, venenatis sed, ultrices non, fermentum
								a, ipsum. Suspendisse a odio vitae tellus
								dignissim pharetra. Vivamus ligula diam, imperdiet ut,
								pulvinar sed, malesuada et, massa. Pellentesque ut wisi.
							</p>
						</article>
					</div>
				</div>
			</div>
			<div class="has-text-centered proceed">
				<h4 class="title is-4 proceed">To proceed</h4>
				<button class="button is-primary button-margin" @click="navigate('register')">
					Register
				</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	methods: {
		navigate(location) {
			this.$router.push(location);
		},
	},
};
</script>

<style scoped>
.proceed {
	margin-top: 3rem;
}
</style>

