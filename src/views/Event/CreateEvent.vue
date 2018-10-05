<template>
	<div class="flex-container">
		<div class="box">
			<p class="title">Create a new event</p>
			<p class="subtitle is-5">Only name and ID are required.
			The rest is optional and will be displayed on the
			event page and every schedule if provided</p>
			<b-field label="Name">
				<b-input placeholder="My Marathon"/>
			</b-field>
			<b-field label="ID">
				<b-input maxlength="30" placeholder="mymarathon"/>
			</b-field>
			<b-field label="Website (optional)">
				<b-input placeholder="https://mymarathon.com"/>
			</b-field>
			<b-field label="Stream (optional)">
				<b-input placeholder="https://twitch.tv/mymarathon"/>
			</b-field>
			<b-field label="Discord (optional)">
				<b-field >
					<br>
					<p class="control">
						<span class="button is-static">https://discord.gg/</span>
					</p>
					<b-input placeholder="abcdef" expanded/>
				</b-field>
			</b-field>
			<b-field label="Twitter (optional)">
				<b-field >
					<br>
					<p class="control">
						<span class="button is-static">@</span>
					</p>
					<b-input expanded placeholder="mymarathon"/>
				</b-field>
			</b-field>
			<b-field grouped>
				<b-field>
					<b-checkbox v-model="isPrivate">Private Event</b-checkbox>
				</b-field>
				<b-field v-if="isPrivate">
					<b-input placeholder="abcdef12345"/>
				</b-field>
				<b-field v-if="isPrivate" expanded>
					<b-input placeholder="userA, userB, userC"/>
				</b-field>
			</b-field>
			<button class="button is-primary">Create event</button>
		</div>
		<div class="side-note">
			Private events: An event can be made private by supplying a private token
			through which the event can then be accessed with a url parameter or add
			Usernames seperated by a comma who can then access the private event.
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			isPrivate: false,
		};
	},
};
</script>
<style scoped>
@media (min-width: 1280px) {
	.flex-container {
		display: flex;
	}

	.side-note {
		align-self: flex-end;
		padding-left: 1rem;
		padding-bottom: 1rem;
	}

	.box {
		flex-basis: 75%;
		flex-shrink: 0;
	}
}
</style>

