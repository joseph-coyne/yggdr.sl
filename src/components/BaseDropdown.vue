<template>
	<!-- List component  -->
	<Menu as="div">
		<MenuButton as="button">
			<img
				src="/img/crackhead.jpg"
				alt="crackhead logo"
				class="rounded-lg h-16 w-16 cursor-pointer"
			/>
		</MenuButton>

		<MenuItems
			as="div"
			class="
				bg-gray-750
				shadow-lg
				rounded-xl
				divide-y divide-gray-600 divide-opacity-50
				absolute
				w-80
				mt-4
			"
		>
			<!-- List Item  -->
			<MenuItem
				as="div"
				v-slot="{ active }"
				class="flex flex-row justify-between items-center p-6"
			>
				<!-- Item Content -->
				<div class="flex flex-row space-x-4">
					<!-- Item Icon -->
					<img
						src="/img/crackhead.jpg"
						alt="crackhead logo"
						class="rounded-lg h-10 w-10"
					/>
					<!-- Item Details -->
					<div class="flex flex-col space-y-1">
						<!-- Item Title -->
						<h1 class="text-gray-200 font-medium leading-none">Crackhead</h1>
						<!-- Item Subtitle -->
						<h2 class="text-gray-400 text-sm">12 Games</h2>
					</div>
				</div>
				<CheckIcon v-if="active" class="h-7 w-7 text-blue-500" />
			</MenuItem>
			<MenuItem
				as="div"
				v-slot="{ active }"
				class="flex flex-row justify-between items-center px-6 py-5"
			>
				<div class="flex flex-row space-x-4">
					<img
						src="/img/crackhead.jpg"
						alt="crackhead logo"
						class="rounded-lg h-10 w-10"
					/>
					<div class="flex flex-col space-y-1">
						<h1 class="text-gray-200 font-medium leading-none">Crackhead</h1>
						<h2 class="text-gray-400 text-sm">12 Games</h2>
					</div>
				</div>
				<!-- Item secondary icon -->

				<CheckIcon v-if="active" class="h-7 w-7 text-blue-500" />
			</MenuItem>
			<!-- List footer -->
			<div class="flex flex-row space-x-2 items-center px-6 py-3">
				<PlusCircleIcon class="h-5 w-5 text-gray-500" />
				<h1 class="text-gray-300 leading-none">Add or join server</h1>
			</div>
		</MenuItems>
	</Menu>
</template>

<script>
import { Menu, MenuItems, MenuButton, MenuItem } from '@headlessui/vue';
import { CheckIcon, PlusCircleIcon } from '@heroicons/vue/solid';

export default {
	name: 'BaseDropdown',
	components: {
		Menu,
		MenuItems,
		MenuButton,
		MenuItem,
		CheckIcon,
		PlusCircleIcon,
	},
	props: {
		active: {
			type: Boolean,
			default: false,
		},
	},
};
</script>
