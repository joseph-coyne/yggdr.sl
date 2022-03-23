<template>
	<main class="flex h-screen overflow-hidden">
		<Sidebar class="z-50" v-if="home" />
		<router-view />
	</main>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
	components: {
		Sidebar,
	},
	data() {
		return {
			home: true,
		};
	},
};
</script>

<style>
*:focus {
	outline: none !important;
}
</style>
