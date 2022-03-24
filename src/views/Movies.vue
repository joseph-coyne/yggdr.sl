<template>
	<div class="relative bg-gray-50 dark:bg-dark w-full flex overflow-hidden">
		<!-- Content area -->
		<div class="flex-1 flex flex-col overflow-hidden">
			<!-- <header class="w-full">
				<div
					class="relative z-10 flex-shrink-0 h-10 bg-white border-b border-gray-200 shadow-sm flex"
				>
					<button
						type="button"
						class="border-r border-gray-200 px-4 text-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden"
						@click="mobileMenuOpen = true"
					>
						<span class="sr-only">Open sidebar</span>
						<MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
					</button>
					<div class="flex-1 flex justify-between px-4 sm:px-6">
						<div class="flex-1 flex">
							<form class="w-full flex md:ml-0" action="#" method="GET">
								<label for="search-field" class="sr-only"
									>Search all movies</label
								>
								<div
									class="relative w-full text-gray-400 focus-within:text-gray-600"
								>
									<div
										class="pointer-events-none absolute inset-y-0 left-0 flex items-center"
									>
										<SearchIcon
											class="flex-shrink-0 h-5 w-5"
											aria-hidden="true"
										/>
									</div>
									<input
										name="search-field"
										id="search-field"
										class="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-dark focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:hidden"
										placeholder="Search"
										type="search"
									/>
									<input
										name="search-field"
										id="search-field"
										class="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-dark focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:block"
										placeholder="Search all files"
										type="search"
									/>
								</div>
							</form>
						</div>
						<div class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
							<Menu as="div" class="relative flex-shrink-0">
								<div>
									<MenuButton
										class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
									>
										<span class="sr-only">Open user menu</span>
										<img
											class="h-8 w-8 rounded-full"
											src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
											alt=""
										/>
									</MenuButton>
								</div>
								<transition
									enter-active-class="transition ease-out duration-100"
									enter-from-class="transform opacity-0 scale-95"
									enter-to-class="transform opacity-100 scale-100"
									leave-active-class="transition ease-in duration-75"
									leave-from-class="transform opacity-100 scale-100"
									leave-to-class="transform opacity-0 scale-95"
								>
									<MenuItems
										class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
									>
										<MenuItem
											v-for="item in userNavigation"
											:key="item.name"
											v-slot="{ active }"
										>
											<a
												:href="item.href"
												:class="[
													active ? 'bg-gray-100' : '',
													'block px-4 py-2 text-sm text-gray-700',
												]"
												>{{ item.name }}</a
											>
										</MenuItem>
									</MenuItems>
								</transition>
							</Menu>

							<button
								type="button"
								class="flex bg-blue-600 p-1 rounded-full items-center justify-center text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							>
								<PlusIconOutline class="h-6 w-6" aria-hidden="true" />
								<span class="sr-only">Add file</span>
							</button>
						</div>
					</div>
				</div>
			</header> -->

			<!-- Main content -->

			<div class="flex-1 flex items-stretch overflow-hidden">
				<main class="flex-1 overflow-y-auto">
					<div class="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div class="flex">
							<h1
								class="flex-1 text-2xl font-bold text-gray-900 dark:text-white"
							>
								Movies
							</h1>
							<div
								class="ml-6 bg-gray-100 p-0.5 rounded-lg flex items-center sm:hidden"
							>
								<button
									type="button"
									class="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
								>
									<ViewListIcon class="h-5 w-5" aria-hidden="true" />
									<span class="sr-only">Use list view</span>
								</button>
								<button
									type="button"
									class="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
								>
									<ViewGridIconSolid class="h-5 w-5" aria-hidden="true" />
									<span class="sr-only">Use grid view</span>
								</button>
							</div>
						</div>

						<!-- Tabs -->
						<div class="mt-3 sm:mt-2">
							<div class="sm:hidden">
								<label for="tabs" class="sr-only">Select a tab</label>
								<select
									id="tabs"
									name="tabs"
									class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
								>
									<option selected="">Recently Added</option>
									<option>Library</option>
									<option>Favorited</option>
								</select>
							</div>
							<div class="hidden sm:block">
								<div class="flex items-center border-b border-gray-200">
									<nav
										class="flex-1 -mb-px flex space-x-6 xl:space-x-8"
										aria-label="Tabs"
									>
										<a
											v-for="tab in tabs"
											:key="tab.name"
											:href="tab.href"
											:aria-current="tab.current ? 'page' : undefined"
											:class="[
												tab.current
													? 'border-blue-500 text-blue-500'
													: 'border-transparent text-dark dark:text-white hover:text-gray-700 hover:border-gray-300',
												'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
											]"
										>
											{{ tab.name }}
										</a>
									</nav>
									<div
										class="hidden ml-6 bg-gray-100 p-0.5 rounded-lg items-center sm:flex"
									>
										<button
											@click="selectedView = 'list'"
											type="button"
											:class="[
												{ 'shadow-sm bg-white': selectedView === 'list' },
												'p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500',
											]"
										>
											<ViewListIcon class="h-5 w-5" aria-hidden="true" />
											<span class="sr-only">Use list view</span>
										</button>
										<button
											@click="selectedView = 'grid'"
											type="button"
											:class="[
												{ 'shadow-sm bg-white': selectedView === 'grid' },
												'ml-0.5 p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500',
											]"
										>
											<ViewGridIconSolid class="h-5 w-5" aria-hidden="true" />
											<span class="sr-only">Use grid view</span>
										</button>
									</div>
								</div>
							</div>
						</div>

						<MovieGrid
							v-if="selectedView === 'grid'"
							:movies="movies"
							:selected-movie="selectedMovie"
							@select-movie="selectMovie"
						/>
						<MovieList
							v-if="selectedView === 'list'"
							:movies="movies"
							:selected-movie="selectedMovie"
							@select-movie="selectMovie"
						/>
					</div>
				</main>

				<MovieSelectedDetails
					v-if="showSidebar"
					:selected-movie="selectedMovie"
					@fetch-library="getLibrary"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { TransitionRoot } from '@headlessui/vue';
import {
	MenuAlt2Icon,
	PlusIcon as PlusIconOutline,
	ViewGridIcon as ViewGridIconOutline,
	XIcon,
} from '@heroicons/vue/outline';
import {
	PencilIcon,
	PlusIcon as PlusIconSolid,
	SearchIcon,
	ViewGridIcon as ViewGridIconSolid,
	ViewListIcon,
} from '@heroicons/vue/solid';

const tabs = [
	{ name: 'Recently Added', href: '#', current: true },
	{ name: 'Library', href: '#', current: false },
	{ name: 'Favorited', href: '#', current: false },
];

export default {
	name: 'Movies',

	components: {
		TransitionRoot,
		MenuAlt2Icon,
		PencilIcon,
		PlusIconOutline,
		PlusIconSolid,
		SearchIcon,
		ViewGridIconSolid,
		ViewListIcon,
		XIcon,
	},

	data() {
		return {
			movies: [
				{
					title: 'Talladega Nights: The Ballad of Ricky Bobby',
					originalTitle: 'Talladega Nights: The Ballad of Ricky Bobby',
					alternateTitles: [
						{
							sourceType: 'tmdb',
							movieId: 2,
							title: 'High, Wide, and Handsome',
							sourceId: 0,
							votes: 0,
							voteCount: 0,
							language: {
								id: 1,
								name: 'English',
							},
							id: 4,
						},
						{
							sourceType: 'tmdb',
							movieId: 2,
							title: 'Talladega Nights',
							sourceId: 0,
							votes: 0,
							voteCount: 0,
							language: {
								id: 1,
								name: 'English',
							},
							id: 5,
						},
						{
							sourceType: 'tmdb',
							movieId: 2,
							title: 'Рікі Боббі: Король дороги',
							sourceId: 0,
							votes: 0,
							voteCount: 0,
							language: {
								id: 1,
								name: 'English',
							},
							id: 6,
						},
						{
							sourceType: 'tmdb',
							movieId: 2,
							title: 'As Corridas Loucas de Ricky Bobby',
							sourceId: 0,
							votes: 0,
							voteCount: 0,
							language: {
								id: 18,
								name: 'Portuguese',
							},
							id: 7,
						},
						{
							sourceType: 'tmdb',
							movieId: 2,
							title: 'Priča o Rickyju Bobbyju',
							sourceId: 0,
							votes: 0,
							voteCount: 0,
							language: {
								id: 1,
								name: 'English',
							},
							id: 8,
						},
						{
							sourceType: 'tmdb',
							movieId: 2,
							title: 'Ricky Bobby - legendaarne kihutaja',
							sourceId: 0,
							votes: 0,
							voteCount: 0,
							language: {
								id: 1,
								name: 'English',
							},
							id: 9,
						},
						{
							sourceType: 'tmdb',
							movieId: 2,
							title: 'タラデガ・ナイト　オーバルの狼',
							sourceId: 0,
							votes: 0,
							voteCount: 0,
							language: {
								id: 1,
								name: 'English',
							},
							id: 10,
						},
						{
							sourceType: 'tmdb',
							movieId: 2,
							title: 'Rikijs Bobijs - ātruma karalis',
							sourceId: 0,
							votes: 0,
							voteCount: 0,
							language: {
								id: 1,
								name: 'English',
							},
							id: 11,
						},
						{
							sourceType: 'tmdb',
							movieId: 2,
							title: 'Talladega Nights: Balada lui Ricky Bobby',
							sourceId: 0,
							votes: 0,
							voteCount: 0,
							language: {
								id: 27,
								name: 'Romanian',
							},
							id: 12,
						},
						{
							sourceType: 'tmdb',
							movieId: 2,
							title: 'Прича о Рикију Бобију',
							sourceId: 0,
							votes: 0,
							voteCount: 0,
							language: {
								id: 1,
								name: 'English',
							},
							id: 13,
						},
					],
					secondaryYearSourceId: 0,
					sortTitle: 'talladega nights ballad ricky bobby',
					sizeOnDisk: 24408894505,
					status: 'released',
					overview:
						"The fastest man on four wheels, Ricky Bobby is one of the greatest drivers in NASCAR history. A big, hairy American winning machine, Ricky has everything a dimwitted daredevil could want, a luxurious mansion, a smokin' hot wife and all the fast food he can eat. But Ricky's turbo-charged lifestyle hits an unexpected speed bump when he's bested by flamboyant Euro-idiot Jean Girard and reduced to a fear-ridden wreck.",
					inCinemas: '2006-08-04T00:00:00Z',
					physicalRelease: '2007-02-13T00:00:00Z',
					digitalRelease: '2009-01-08T00:00:00Z',
					images: [
						{
							coverType: 'poster',
							url: '/radarr/MediaCover/2/poster.jpg?lastWrite=637641209170001360',
							remoteUrl:
								'https://image.tmdb.org/t/p/original/3iCiTqsmJz1mO85AHzTiHNkRmb6.jpg',
						},
						{
							coverType: 'fanart',
							url: '/radarr/MediaCover/2/fanart.jpg?lastWrite=637767796164778824',
							remoteUrl:
								'https://image.tmdb.org/t/p/original/qTVgXx0pgBmsGqc8wJsfbd71ppa.jpg',
						},
					],
					website:
						'https://www.sonypictures.com/movies/talladeganightstheballadofrickybobby',
					year: 2006,
					hasFile: true,
					youTubeTrailerId: 'myKtVl8N7jU',
					studio: 'Relativity Media',
					path: '/home34/tocks/media/movies/Talladega Nights The Ballad of Ricky Bobby (2006)',
					qualityProfileId: 4,
					monitored: true,
					minimumAvailability: 'inCinemas',
					isAvailable: true,
					folderName:
						'/home34/tocks/media/movies/Talladega Nights The Ballad of Ricky Bobby (2006)',
					runtime: 106,
					cleanTitle: 'talladeganightsballadrickybobby',
					imdbId: 'tt0415306',
					tmdbId: 9718,
					titleSlug: '9718',
					certification: 'PG-13',
					genres: ['Comedy'],
					tags: [],
					added: '2021-08-09T15:48:36Z',
					ratings: {
						votes: 1248,
						value: 6.3,
					},
					movieFile: {
						movieId: 2,
						relativePath:
							'Talladega Nights The Ballad of Ricky Bobby (2006) Remux-1080p.mkv',
						path: '/home34/tocks/media/movies/Talladega Nights The Ballad of Ricky Bobby (2006)/Talladega Nights The Ballad of Ricky Bobby (2006) Remux-1080p.mkv',
						size: 24408894505,
						dateAdded: '2021-08-09T16:08:08Z',
						indexerFlags: 0,
						quality: {
							quality: {
								id: 30,
								name: 'Remux-1080p',
								source: 'bluray',
								resolution: 1080,
								modifier: 'remux',
							},
							revision: {
								version: 1,
								real: 0,
								isRepack: false,
							},
						},
						mediaInfo: {
							audioAdditionalFeatures: 'XLL',
							audioBitrate: 2288201,
							audioChannels: 5.1,
							audioCodec: 'DTS-HD MA',
							audioLanguages: 'English / English',
							audioStreamCount: 2,
							videoBitDepth: 8,
							videoBitrate: 24087787,
							videoCodec: 'MPEG2',
							videoFps: 23.976,
							resolution: '1920x1080',
							runTime: '2:01:26',
							scanType: 'Progressive',
							subtitles: 'English / English / French',
						},
						originalFilePath:
							'Talladega.Nights.The.Ballad.of.Ricky.Bobby.2006.UNRATED.Remux.1080p.BluRay.MPEG-2.DTS-HD.MA.5.1-LEGi0N English/53aa1f72d64af5909e85627e3229c214.mkv',
						qualityCutoffNotMet: false,
						languages: [
							{
								id: 1,
								name: 'English',
							},
						],
						releaseGroup: 'LEGi0N',
						edition: 'UNRATED',
						id: 1,
					},
					id: 2,
				},
			],
			selectedMovie: null,
			selectedView: 'grid',
		};
	},

	setup() {
		return {
			tabs,
		};
	},

	computed: {
		showSidebar() {
			return this.selectedMovie !== null;
		},
	},

	methods: {
		getLibrary() {
			console.log('fetching library');
			const proxyurl = 'https://cors-anywhere.herokuapp.com/';
			const url = `https://${import.meta.env.VITE_APP_RADARR_DOMAIN}/movie`;
			const options = {
				method: 'GET',
				url: proxyurl + url,
				params: { apikey: import.meta.env.VITE_APP_RADARR_KEY },
			};

			this.axios.request(options).then((res) => {
				this.movies = res.data;
				console.log(this.movies);
			});
		},

		selectMovie(movie) {
			this.selectedMovie = movie;
		},
	},
};
</script>
