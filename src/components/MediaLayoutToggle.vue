<template>
	<div class="ml-6 bg-gray-100 p-0.5 rounded-lg items-center">
		<button
			@click="updateLayout('list')"
			type="button"
			:class="[
				{ 'shadow-sm bg-white': selectedLayout === 'list' },
				'p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500',
			]"
		>
			<ViewListIcon class="h-5 w-5" aria-hidden="true" />
			<span class="sr-only">Use list view</span>
		</button>
		<button
			@click="updateLayout('grid')"
			type="button"
			:class="[
				{ 'shadow-sm bg-white': selectedLayout === 'grid' },
				'ml-0.5 p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500',
			]"
		>
			<ViewGridIconSolid class="h-5 w-5" aria-hidden="true" />
			<span class="sr-only">Use grid view</span>
		</button>
	</div>
</template>

<script>
import {
	ViewGridIcon as ViewGridIconSolid,
	ViewListIcon,
} from '@heroicons/vue/solid';

export default {
	name: 'MediaLayoutToggle',

	components: {
		ViewGridIconSolid,
		ViewListIcon,
	},

	props: {
		selectedLayout: {
			type: String,
		},
	},
	emits: ['update:selectedLayout'],

	methods: {
		updateLayout(layout) {
			this.$emit('update:selectedLayout', layout);
		},
	},
};
</script>
