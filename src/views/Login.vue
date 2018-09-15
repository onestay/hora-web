<template>
	<div class="section">
		<div class="container">
			<div class="card">
				<div class="card-content login">
					<p class="title">Already have an account?</p>
					<p class="subtitle is-5">Login here</p>

					<b-field label="Username">
						<b-input rounded v-model="username" />
					</b-field>
					<b-field label="Password">
						<b-input rounded v-model="password" type="password"/>
					</b-field>
					<div class="is-size-6 has-text-weight-semibold is-italic error">{{ error }}</div>
					<button class="button is-primary" :class="{'is-loading': loading}"
						@click="login">Login</button>
					<h6 class="subtitle is-6 has-text-centered">or</h6>
					<button class="button is-twitch">Register with Twtich</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			username: '',
			password: '',
			error: '',
			loading: false,
		};
	},
	methods: {
		login() {
			this.loading = true;
			this.error = '';
			if (!this.username || !this.password) {
				this.loading = false;
				this.error = 'Please fill out username and password';
				return;
			}

			this.$http.post('/auth/login', {
				username: this.username,
				password: this.password,
			})
				.then((res) => {
					localStorage.setItem('auth', JSON.stringify({
						refreshToken: res.data.refreshToken,
						token: res.data.token,
					}));

					delete res.data.token;
					delete res.data.refreshToken;

					this.$store.commit('login', res.data);

					this.$loading = false;
					this.$router.push({ name: 'user', params: { id: res.data.id } });
				})
				.catch((e) => {
					this.loading = false;
					if (e.response) {
						this.error = e.response.data.message;
					} else if (e.request) {
						this.error = 'Something went wrong with the request to the server';
						console.log(e.request);
					}
				});
		},
	},
};
</script>

<style scoped>
.error {
	color: red;
}

.card {
	max-width: 40%;
	margin: 0 auto;
}

.login>button {
	display: block;
	margin: 1rem auto;
}
.login>h6 {
	margin-top: 1rem;
}

@media only screen and (max-width: 600px) {
	.card {
		max-width: 100%;
		margin: 0 auto;
	}
}
</style>
