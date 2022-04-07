<template>
	<div class="mt-3 sm:mt-2">
		<div class="block">
			<nav class="flex-1 -mb-px flex space-x-6 xl:space-x-8" aria-label="Tabs">
				<button
					v-for="tab in tabs"
					@click="setActiveTab(tab)"
					:key="tab.name"
					:aria-current="tab.current ? 'page' : undefined"
					:class="[
						tab.current
							? 'border-blue-500 text-blue-500'
							: 'border-transparent text-dark dark:text-white hover:text-gray-700 hover:border-gray-300',
						'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer',
					]"
				>
					{{ tab.name }}
				</button>
			</nav>
		</div>
	</div>
</template>

<script>
const tabs = [
	{ name: 'Recently Added', current: true },
	{ name: 'Library', current: false },
	{ name: 'Favorited', current: false },
];

export default {
	name: 'MediaTabs',

	props: {
		activeTab: {
			type: String,
		},
	},

	methods: {
		setActiveTab(tab) {
			tabs.forEach((t) => (t.current = false));
			tab.current = true;
			this.$emit('update:activeTab', tab.name);
		},
	},

	setup() {
		return {
			tabs,
		};
	},
};
</script>
