<template>
	<div class="section">
		<div class="container">
			<div class="card">
				<div class="card-content register">
					<p class="title">Don't have an account yet?</p>
					<p class="subtitle is-5">Register for free</p>

					<b-field label="Username" :type="username.error" :message="username.errorMessage">
						<b-input v-model="username.value" rounded @blur="validate('username')" icon="account"/>
					</b-field>

					<b-field label="Email" :type="email.error" :message="email.errorMessage">
						<b-input type="email" v-model="email.value" rounded
							@blur="validate('email')" icon="email"/>
					</b-field>

					<b-field label="Password" :type="password.error" :message="password.errorMessage">
						<b-input type="password" v-model="password.value"
							rounded @blur="validate('password')" icon="lock" :password-reveal="true"/>
					</b-field>
					<div class="is-size-6 has-text-weight-semibold is-italic error">{{ error }}</div>
					<button class="button is-primary"
						:class="{ 'is-loading': loading }" @click="register">Register</button>
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
			username: {
				value: '',
				error: '',
				errorMessage: '',
			},
			email: {
				value: '',
				error: '',
				errorMessage: '',
			},
			password: {
				value: '',
				error: '',
				errorMessage: '',
			},
			error: '',
			loading: false,
		};
	},
	methods: {
		register() {
			if (this.username.error || this.email.error || this.password.error) {
				this.error = 'Please fix all above errors';
				return;
			}
			this.error = '';
			this.loading = true;
			this.$http.post('/auth/register', {
				name: this.username.value,
				email: this.email.value,
				password: this.password.value,
			})
				.then((res) => {
					localStorage.setItem('auth', JSON.stringify({
						refreshToken: res.data.refreshToken,
						token: res.data.token,
					}));

					delete res.data.token;
					delete res.data.refreshToken;

					this.$store.commit('login', res.data);

					this.loading = false;
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
		validate(source) {
			const { value } = this[source];

			switch (source) {
			case 'username':
				if (value.length < 2 || value.length > 20) {
					this.username.error = 'is-danger';
					this.username.errorMessage = 'Between 2 and 20 characters';
					return;
				}
				if (!/^[a-z0-9]+$/i.test(value)) {
					this.username.error = 'is-danger';
					this.username.errorMessage = 'Has to be alphanumeric';
					return;
				}
				break;
			case 'email':
				if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
					this.email.error = 'is-danger';
					console.log('invalid email');
					this.email.errorMessage = 'Not a valid Email';
					return;
				}
				break;
			case 'password':
				if (value.length < 6) {
					this.password.error = 'is-danger';
					this.password.errorMessage = 'Password has to be at least 6 characters long';
					return;
				}
				break;
			default:
				break;
			}
			this[source].error = '';
			this[source].errorMessage = '';
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
.register>button {
	display: block;
	margin: 1rem auto;
}
.register>h6 {
	margin-top: 1rem;
}
@media only screen and (max-width: 600px){
	.card {
		max-width: 100%;
		margin: 0 auto;
	}
}
</style>
