<template>
	<div
		class="h-screen flex overflow-hidden bg-gray-100 border-r border-opacity-50"
	>
		<div class="hidden md:flex md:flex-shrink-0">
			<div class="flex flex-col w-64">
				<div class="flex-1 flex flex-col min-h-0 bg-dark">
					<div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
						<div class="flex items-baseline flex-shrink-0 px-4">
							<img class="h-10 w-auto" src="/img/emblem.png" alt="Yggdr.sl" />
							<img
								class="h-6 w-auto px-4"
								src="/img/logo-white.png"
								alt="Yggdr.sl"
							/>
						</div>
						<nav class="mt-10 flex-1 px-2 bg-dark space-y-1">
							<router-link
								v-for="item in navigation"
								:key="item.name"
								:to="item.path"
								class="text-gray-300 hover:bg-gray-700 hover:text-white flex items-center px-4 py-4 text-sm font-medium rounded-md font-plex"
							>
								<component
									:is="item.icon"
									class="mr-4 flex-shrink-0 h-5 w-5"
									aria-hidden="true"
								/>
								{{ item.name }}
							</router-link>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import IconGames from '~icons/carbon/game-console';
import IconMovies from '~icons/iconoir/movie';
import IconHome from '~icons/iconoir/home';
import IconTV from '~icons/iconoir/tv';

const navigation = [
	{ name: 'Home', path: '/', icon: IconHome },
	{
		name: 'Movies',
		path: '/movies',
		icon: IconMovies,
	},
	{ name: 'Series', path: '/tv', icon: IconTV },
	{ name: 'Games', path: '/games', icon: IconGames },
];

export default {
	setup() {
		return {
			navigation,
		};
	},
};
</script>

<style scoped>
a.router-link-active {
	@apply bg-gray-500 text-blue-500 bg-opacity-20;
}
</style>
