<template>
	<section class="mt-8 pb-16" aria-labelledby="gallery-heading">
		<h2 id="gallery-heading" class="sr-only">Recently added</h2>
		<ul role="list" class="flex flex-col h-full">
			<MovieListItem
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
	name: 'MovieList',

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
