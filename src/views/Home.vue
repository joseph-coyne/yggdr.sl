<template>
	<div class="bg-brand-black h-screen w-screen max-w-sm p-10">
		<Menu>
			<MenuButton>
				<img
					src="/img/crackhead.jpg"
					alt="crackhead logo"
					class="rounded-lg h-16 w-16 cursor-pointer"
				/>
			</MenuButton>
			<base-list class="absolute w-80 mt-4"></base-list>
		</Menu>

		<ul class="mt-10">
			<li class="flex flex-row items-center justify-between">
				<span class="flex flex-row items-center space-x-1">
					<!-- <LibraryIcon class="h-5 w-5 text-gray-500" /> -->
					<h1 class="text-white leading-none">Library</h1>
				</span>
				<PlusCircleIcon class="h-5 w-5 text-gray-500" />
			</li>
		</ul>
	</div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import BaseList from '@/components/BaseList.vue';
import { PlusCircleIcon, LibraryIcon } from '@heroicons/vue/solid';

export default {
	data() {
		return {
			active: false,
		};
	},
	components: {
		Menu,
		MenuButton,
		MenuItems,
		MenuItem,
		BaseList,
		PlusCircleIcon,
		LibraryIcon,
	},
};
</script>
