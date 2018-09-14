<template>
	<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<div class="navbar-item">
				<div>
					<b-icon icon="calendar" size="is-medium" class="has-text-black"/>
					<span class="is-size-2 logo-text">Hora</span>
				</div>
			</div>
		</div>
		<div class="navbar-menu">
			<div class="navbar-end">
				<router-link :to='`/user/${user.id}`' class="navbar-item" v-if="isLoggedIn">
					<b-icon icon="account" size="is-small"/>
					<span>{{ user.displayName }}</span>
				</router-link>
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
	computed: {
		isLoggedIn() {
			return this.$store.state.isLoggedIn;
		},
		user() {
			return this.$store.state.user;
		},
	},
};
</script>

<style scoped>
.logo-text {
	padding-left: 0.5rem;
}
</style>

