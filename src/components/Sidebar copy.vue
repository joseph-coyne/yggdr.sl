<template>
	<div
		class="
			hidden
			md:block
			overflow-y-auto
			w-96
			p-10
			border-r border-gray-600 border-opacity-40
			bg-indigo-500
			dark:bg-black
		"
	>
		<BaseDropdown />

		<ul class="mt-10">
			<li class="flex flex-row items-center justify-between">
				<span class="flex flex-row items-center space-x-1">
					<!-- <LibraryIcon class="h-5 w-5 text-dark" /> -->
					<h1 class="text-gray-200 leading-none">Games</h1>
				</span>
				<PlusCircleIcon class="h-5 w-5 text-dark" />
			</li>
		</ul>
	</div>
</template>

<script>
import BaseDropdown from '@/components/BaseDropdown.vue';
import { PlusCircleIcon, LibraryIcon } from '@heroicons/vue/solid';

export default {
	data() {
		return {
			active: false,
		};
	},
	components: {
		BaseDropdown,
		PlusCircleIcon,
		LibraryIcon,
	},
};
</script>
