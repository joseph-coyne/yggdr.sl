<template>
	<section class="mt-8 pb-16" aria-labelledby="gallery-heading">
		<h2 id="gallery-heading" class="sr-only">Recently added</h2>
		<ul
			role="list"
			class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
		>
			<MovieGridItem
				v-for="movie in movies"
				:key="movie.title"
				:movie="movie"
				:selected-movie="selectedMovie"
				@click="$emit('select-movie', movie)"
			/>
		</ul>
	</section>
</template>

<script>
export default {
	name: 'MovieGrid',

	props: {
		movies: {
			type: Array,
			required: true,
		},
		selectedMovie: {
			type: Object,
		},
	},
};
</script>
