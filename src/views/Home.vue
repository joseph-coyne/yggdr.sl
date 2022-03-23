<template>
	<div class="p-10">
		<Listbox v-model="selectedOption">
			<ListboxButton class="text-gray-300 flex leading-none font-medium"
				>{{ selectedOption.name }}
				<ChevronDownIcon class="h-5 w-5 text-gray-600 items-center ml-1"
			/></ListboxButton>
			<ListboxOptions
				class="
					absolute
					bg-gray-750
					rounded-lg
					shadow-lg
					text-gray-300 text-sm
					p-1
					mt-4
				"
			>
				<ListboxOption
					v-slot="{ active, selected }"
					v-for="option in options"
					:key="option"
					:value="option"
					:disabled="option.unavailable"
				>
					<li
						class="cursor-pointer px-4 py-2"
						:class="[
							{ 'bg-gray-700 rounded-md': active },
							{ 'text-blue-400': selected },
						]"
					>
						{{ option.name }}
					</li>
				</ListboxOption>
			</ListboxOptions>
		</Listbox>
		<div class="bg-gray-800 w-32 h-44 rounded-xl mt-8"></div>
	</div>
</template>

<script>
import { ref } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/solid';
import {
	Listbox,
	ListboxButton,
	ListboxOptions,
	ListboxOption,
} from '@headlessui/vue';

export default {
	components: {
		ChevronDownIcon,
		Listbox,
		ListboxButton,
		ListboxOptions,
		ListboxOption,
	},
	setup() {
		const options = [
			{ id: 1, name: 'Name', unavailable: false },
			{ id: 2, name: 'Size', unavailable: false },
			{ id: 3, name: 'Download Date', unavailable: false },
			{ id: 4, name: 'Cracked Date', unavailable: false },
		];
		const selectedOption = ref(options[0]);

		return {
			options,
			selectedOption,
		};
	},
};
</script>

<style></style>
