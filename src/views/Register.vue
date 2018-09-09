<template>
	<div class="section">
		<div class="container">
			<h2 class="title is-2 has-text-centered">Register</h2>
			<div class="form">
				<b-field label="Username">
					<b-input v-model="username"/>
				</b-field>

				<b-field label="Email">
					<b-input type="email" v-model="email" />
				</b-field>

				<b-field label="Password">
					<b-input type="password" v-model="password" />
				</b-field>
				<button class="button is-primary is-pulled-right">Register</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			username: '',
			email: '',
			password: '',
		};
	},
};
</script>
<style scoped>
.form {
	max-width: 40%;
	margin: 0 auto;
}

@media only screen and (max-width: 600px){
	.form {
		max-width: 90%;
		margin: 0 auto;
	}
}
</style>
