<template>
	<button
		type="button"
		class="
			flex-1
			bg-gradient-to-br
			from-green-500
			to-blue-500
			py-2
			px-4
			border border-transparent
			rounded-md
			shadow-sm
			text-sm
			font-medium
			text-white
			hover:bg-green-700
		"
	>
		<slot>Button</slot>
	</button>
</template>

<script setup>
defineProps({
	type: {
		type: String,
		default: 'primary',
	},
});
</script>

<script></script>
