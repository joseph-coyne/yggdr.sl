<template>
	<li
		:class="[
			{ 'bg-slate-500 bg-opacity-10 rounded-lg': movie === selectedMovie },
			'flex flex-row space-x-4 w-full h-full p-4 cursor-pointer hover:bg-blue-100 rounded-lg overflow-hidden',
		]"
	>
		<div
			:class="[
				movie === selectedMovie
					? 'ring-2 ring-offset-2 ring-blue-500'
					: 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-blue-500',
				'rounded-lg bg-gray-100 overflow-hidden',
			]"
		>
			<img
				:src="movie.images[0].remoteUrl"
				:alt="`${movie.title}-poster`"
				:class="[
					movie === selectedMovie ? '' : 'group-hover:opacity-75',
					'pointer-events-none object-contain aspect-[2/3] h-32 ',
				]"
			/>
		</div>
		<div class="flex flex-col w-3/4 h-full">
			<div class="w-full">
				<p
					class="block text-sm font-medium text-gray-900 dark:text-white pointer-events-none"
				>
					{{ movie.title }}
				</p>
				<div
					class="flex flex-row space-x-2 items-baseline text-slate-500 text-sm font-medium dark:text-white pointer-events-none"
				>
					<p
						class="block text-sm font-medium text-slate-500 dark:text-white pointer-events-none"
					>
						{{ movie.year }}
					</p>
					<span class="text-lg">•</span>
					<p
						class="block text-sm font-medium text-slate-500 dark:text-white pointer-events-none"
					>
						{{ movie?.movieFile?.mediaInfo?.runTime || 'N/A' }}
					</p>
				</div>
			</div>
			<div class="w-full">
				<p
					class="text-sm font-medium text-slate-500 dark:text-white pointer-events-none truncate line-clamp-4 whitespace-normal"
				>
					{{ movie.overview }}
				</p>
			</div>
		</div>
	</li>
</template>

<script>
export default {
	name: 'MovieListItem',

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
