<template>
	<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<div class="navbar-item">
				<div>
					<b-icon icon="calendar" size="is-medium" class="has-text-black"/>
					<span class="is-size-2 logo-text">Hora</span>
				</div>
			</div>
			<div class="navbar-burger"
				@click="() => navbarToggle = !navbarToggle" :class="{ 'is-active': navbarToggle }">
				<span aria-hidden="true"/>
				<span aria-hidden="true"/>
				<span aria-hidden="true"/>
			</div>
		</div>
		<div class="navbar-menu" :class="{ 'is-active': navbarToggle }">
			<div class="navbar-start">
				<router-link to="/" class="navbar-item">
					<b-icon icon="home" />
					<span>Home</span>
				</router-link>

				<div class="navbar-item has-dropdown is-hoverable" v-if="isLoggedIn">
					<a class="navbar-link">Events</a>

					<div class="navbar-dropdown">
						<a class="navbar-item">Speedcon</a>
						<a class="navbar-item">GSM</a>
						<hr class="navbar-divider">
						<router-link to="/event/create" class="navbar-item">
							<b-icon icon="plus" />
							<span>Create event</span>
						</router-link>
					</div>

				</div>
				<div class="navbar-item has-dropdown is-hoverable" v-if="isLoggedIn">
					<a class="navbar-link">Schedules</a>
					<div class="navbar-dropdown">
						<a class="navbar-item">Speedcon</a>
						<a class="navbar-item">GSM</a>
					</div>
				</div>

			</div>
			<div class="navbar-end">
				<router-link :to='`/user/${user.id}`' class="navbar-item" v-if="isLoggedIn">
					<b-icon icon="account" size="is-small"/>
					<span>{{ user.displayName }}</span>
				</router-link>

				<a role="button" class="navbar-item" v-if="isLoggedIn" @click="logout">
					<b-icon icon="logout" size="is-small"/>
					<span>Logout</span>
				</a>

				<router-link to='/login' class="navbar-item" v-else>
					<b-icon icon="login-variant" size="is-small"/>
					<span>Login</span>
				</router-link>
			</div>
		</div>
	</nav>
</template>
<script>
export default {
	data() {
		return {
			navbarToggle: false,
		};
	},
	computed: {
		isLoggedIn() {
			return this.$store.state.isLoggedIn;
		},
		user() {
			return this.$store.state.user;
		},
	},
	methods: {
		logout() {
			this.$store.commit('logout');
			this.$router.push({ name: 'home' });
		},
	},
};
</script>

<style scoped>
.logo-text {
	padding-left: 0.5rem;
}
</style>

