<template>
	<div class="bg-brand-black h-screen w-screen max-w-xs p-4">
		<base-list></base-list>
	</div>
</template>

<script>
import BaseList from '@/components/BaseList.vue';
import { CheckIcon } from '@heroicons/vue/solid';
import { PlusCircleIcon } from '@heroicons/vue/solid';

export default {
	components: {
		BaseList,
		CheckIcon,
		PlusCircleIcon,
	},
};
</script>
