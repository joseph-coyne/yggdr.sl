<template>
	<li class="relative">
		<div
			:class="[
				movie === selectedMovie
					? 'ring-2 ring-offset-2 ring-blue-500'
					: 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-blue-500',
				'group block aspect-[2/3] rounded-lg bg-gray-100 overflow-hidden',
			]"
		>
			<img
				:src="movie.images[0].remoteUrl"
				alt=""
				:class="[
					{ 'group-hover:opacity-75': movie === selectedMovie },
					'pointer-events-none object-contain ',
				]"
			/>
			<button type="button" class="absolute inset-0 focus:outline-none">
				<span class="sr-only">View details for {{ movie.title }}</span>
			</button>
		</div>
		<p
			class="mt-2 block text-sm font-medium text-gray-900 dark:text-white truncate pointer-events-none"
		>
			{{ movie.title }}
		</p>
		<!-- <div class="flex flex-row space-x-4"> -->
		<p
			class="block text-sm font-medium text-slate-500 dark:text-white pointer-events-none"
		>
			{{ movie.year }}
		</p>
		<!-- <p
				class="block text-sm font-medium text-slate-500 dark:text-white pointer-events-none"
			>
				{{ movie.movieFile.mediaInfo.runTime }}
			</p> -->
		<!-- </div> -->
	</li>
</template>

<script>
export default {
	name: 'MovieGridItem',

	props: {
		movie: {
			type: Object,
		},
		selectedMovie: {
			type: Object,
		},
	},

	methods: {
		formatFileSize(file) {
			// convert bytes into MB, GB, etc.
			const bytes = file;
			const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
			if (bytes === 0) return '0 Byte';
			const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
			return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
		},
	},
};
</script>
