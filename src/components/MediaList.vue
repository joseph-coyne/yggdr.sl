<template>
	<section class="mt-8 pb-16" aria-labelledby="gallery-heading">
		<ul role="list" class="flex flex-col h-full">
			<MediaListItem
				v-for="media in allMedia"
				:key="media.title"
				:media="media"
				:selected-media="selectedMedia"
				@click="$emit('select-media', media)"
			/>
		</ul>
	</section>
</template>

<script>
export default {
	name: 'MediaList',

	props: {
		allMedia: {
			type: Array,
			required: true,
		},

		selectedMedia: {
			type: Object,
		},
	},
};
</script>
