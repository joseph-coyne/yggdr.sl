<template>
	<li class="relative">
		<div
			:class="[
				media === selectedShow
					? 'ring-2 ring-offset-2 ring-blue-500'
					: 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-blue-500',
				'group block  rounded-lg bg-gray-100 overflow-hidden',
			]"
		>
			<img
				:src="mediaImage"
				:alt="`${media.title}-poster`"
				:class="[
					{ 'group-hover:opacity-75': media === selectedShow },
					'pointer-events-none object-cover aspect-[2/3]',
				]"
			/>
			<button type="button" class="absolute inset-0 focus:outline-none">
				<span class="sr-only">View details for {{ media.title }}</span>
			</button>
		</div>
		<p
			class="mt-2 block text-sm font-medium text-gray-900 dark:text-white truncate pointer-events-none"
		>
			{{ media.title }}
		</p>
		<p
			class="block text-sm font-medium text-slate-500 dark:text-white pointer-events-none"
		>
			{{ media.year }}
		</p>
	</li>
</template>

<script>
export default {
	name: 'MediaGridItem',

	props: {
		media: {
			type: Object,
		},

		selectedShow: {
			type: Object,
		},
	},

	computed: {
		mediaImage() {
			return this.media.images.find((image) => image.coverType === 'poster')
				.remoteUrl;
		},
	},

	methods: {
		formatFileSize(file) {
			const bytes = file;
			const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
			if (bytes === 0) return '0 Byte';
			const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
			return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
		},
	},
};
</script>
