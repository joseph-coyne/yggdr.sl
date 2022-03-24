<template>
	<main class="flex h-screen overflow-hidden">
		<Sidebar class="z-50" v-if="home" />
		<router-view />
		<CommandBox />
	</main>
</template>

<script>
export default {
	data() {
		return {
			home: true,
		};
	},

	mounted() {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			console.log('dark');
			document.documentElement.classList.remove('dark');
		} else {
			document.documentElement.classList.add('dark');
			console.log('light');
		}
	},
};
</script>

<style>
*:focus {
	outline: none !important;
}
</style>
