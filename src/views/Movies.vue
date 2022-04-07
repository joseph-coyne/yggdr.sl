<template>
	<div class="relative bg-gray-50 dark:bg-dark w-full flex overflow-hidden">
		<!-- Content area -->
		<div class="flex-1 flex flex-col overflow-hidden">
			<div class="flex-1 flex items-stretch overflow-hidden">
				<main class="flex-1 overflow-y-auto">
					<div class="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div class="flex">
							<h1
								class="flex-1 text-2xl font-bold text-gray-900 dark:text-white"
							>
								{{ title }}
							</h1>
							<MediaLayoutToggle
								v-model:selected-layout="selectedLayout"
								class="flex sm:hidden"
							/>
						</div>

						<div
							class="flex items-center justify-between border-b border-gray-200"
						>
							<MediaTabs v-model:activeTab="activeTab" />
							<MediaLayoutToggle
								v-model:selected-layout="selectedLayout"
								class="hidden sm:flex"
							/>
						</div>

						<h2 id="gallery-heading" class="sr-only">{{ activeTab }}</h2>
						<MediaGrid
							v-if="selectedLayout === 'grid'"
							:allMedia="movies"
							:selected-media="selectedMovie"
							@select-media="selectMovie"
						/>
						<MovieList
							v-if="selectedLayout === 'list'"
							:movies="movies"
							:selected-movie="selectedMovie"
							@select-movie="selectMovie"
						/>
					</div>
				</main>

				<MediaDetailsSidebar
					v-if="showSidebar"
					:selected-media="selectedMovie"
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
			title: 'Movies',
			movies: [],
			// movies: [
			// 	{
			// 		title: 'Talladega Nights: The Ballad of Ricky Bobby',
			// 		originalTitle: 'Talladega Nights: The Ballad of Ricky Bobby',
			// 		alternateTitles: [
			// 			{
			// 				sourceType: 'tmdb',
			// 				movieId: 2,
			// 				title: 'High, Wide, and Handsome',
			// 				sourceId: 0,
			// 				votes: 0,
			// 				voteCount: 0,
			// 				language: {
			// 					id: 1,
			// 					name: 'English',
			// 				},
			// 				id: 4,
			// 			},
			// 			{
			// 				sourceType: 'tmdb',
			// 				movieId: 2,
			// 				title: 'Talladega Nights',
			// 				sourceId: 0,
			// 				votes: 0,
			// 				voteCount: 0,
			// 				language: {
			// 					id: 1,
			// 					name: 'English',
			// 				},
			// 				id: 5,
			// 			},
			// 			{
			// 				sourceType: 'tmdb',
			// 				movieId: 2,
			// 				title: 'Рікі Боббі: Король дороги',
			// 				sourceId: 0,
			// 				votes: 0,
			// 				voteCount: 0,
			// 				language: {
			// 					id: 1,
			// 					name: 'English',
			// 				},
			// 				id: 6,
			// 			},
			// 			{
			// 				sourceType: 'tmdb',
			// 				movieId: 2,
			// 				title: 'As Corridas Loucas de Ricky Bobby',
			// 				sourceId: 0,
			// 				votes: 0,
			// 				voteCount: 0,
			// 				language: {
			// 					id: 18,
			// 					name: 'Portuguese',
			// 				},
			// 				id: 7,
			// 			},
			// 			{
			// 				sourceType: 'tmdb',
			// 				movieId: 2,
			// 				title: 'Priča o Rickyju Bobbyju',
			// 				sourceId: 0,
			// 				votes: 0,
			// 				voteCount: 0,
			// 				language: {
			// 					id: 1,
			// 					name: 'English',
			// 				},
			// 				id: 8,
			// 			},
			// 			{
			// 				sourceType: 'tmdb',
			// 				movieId: 2,
			// 				title: 'Ricky Bobby - legendaarne kihutaja',
			// 				sourceId: 0,
			// 				votes: 0,
			// 				voteCount: 0,
			// 				language: {
			// 					id: 1,
			// 					name: 'English',
			// 				},
			// 				id: 9,
			// 			},
			// 			{
			// 				sourceType: 'tmdb',
			// 				movieId: 2,
			// 				title: 'タラデガ・ナイト　オーバルの狼',
			// 				sourceId: 0,
			// 				votes: 0,
			// 				voteCount: 0,
			// 				language: {
			// 					id: 1,
			// 					name: 'English',
			// 				},
			// 				id: 10,
			// 			},
			// 			{
			// 				sourceType: 'tmdb',
			// 				movieId: 2,
			// 				title: 'Rikijs Bobijs - ātruma karalis',
			// 				sourceId: 0,
			// 				votes: 0,
			// 				voteCount: 0,
			// 				language: {
			// 					id: 1,
			// 					name: 'English',
			// 				},
			// 				id: 11,
			// 			},
			// 			{
			// 				sourceType: 'tmdb',
			// 				movieId: 2,
			// 				title: 'Talladega Nights: Balada lui Ricky Bobby',
			// 				sourceId: 0,
			// 				votes: 0,
			// 				voteCount: 0,
			// 				language: {
			// 					id: 27,
			// 					name: 'Romanian',
			// 				},
			// 				id: 12,
			// 			},
			// 			{
			// 				sourceType: 'tmdb',
			// 				movieId: 2,
			// 				title: 'Прича о Рикију Бобију',
			// 				sourceId: 0,
			// 				votes: 0,
			// 				voteCount: 0,
			// 				language: {
			// 					id: 1,
			// 					name: 'English',
			// 				},
			// 				id: 13,
			// 			},
			// 		],
			// 		secondaryYearSourceId: 0,
			// 		sortTitle: 'talladega nights ballad ricky bobby',
			// 		sizeOnDisk: 24408894505,
			// 		status: 'released',
			// 		overview:
			// 			"The fastest man on four wheels, Ricky Bobby is one of the greatest drivers in NASCAR history. A big, hairy American winning machine, Ricky has everything a dimwitted daredevil could want, a luxurious mansion, a smokin' hot wife and all the fast food he can eat. But Ricky's turbo-charged lifestyle hits an unexpected speed bump when he's bested by flamboyant Euro-idiot Jean Girard and reduced to a fear-ridden wreck.",
			// 		inCinemas: '2006-08-04T00:00:00Z',
			// 		physicalRelease: '2007-02-13T00:00:00Z',
			// 		digitalRelease: '2009-01-08T00:00:00Z',
			// 		images: [
			// 			{
			// 				coverType: 'poster',
			// 				url: '/radarr/MediaCover/2/poster.jpg?lastWrite=637641209170001360',
			// 				remoteUrl:
			// 					'https://image.tmdb.org/t/p/original/3iCiTqsmJz1mO85AHzTiHNkRmb6.jpg',
			// 			},
			// 			{
			// 				coverType: 'fanart',
			// 				url: '/radarr/MediaCover/2/fanart.jpg?lastWrite=637767796164778824',
			// 				remoteUrl:
			// 					'https://image.tmdb.org/t/p/original/qTVgXx0pgBmsGqc8wJsfbd71ppa.jpg',
			// 			},
			// 		],
			// 		website:
			// 			'https://www.sonypictures.com/movies/talladeganightstheballadofrickybobby',
			// 		year: 2006,
			// 		hasFile: true,
			// 		youTubeTrailerId: 'myKtVl8N7jU',
			// 		studio: 'Relativity Media',
			// 		path: '/home34/tocks/media/movies/Talladega Nights The Ballad of Ricky Bobby (2006)',
			// 		qualityProfileId: 4,
			// 		monitored: true,
			// 		minimumAvailability: 'inCinemas',
			// 		isAvailable: true,
			// 		folderName:
			// 			'/home34/tocks/media/movies/Talladega Nights The Ballad of Ricky Bobby (2006)',
			// 		runtime: 106,
			// 		cleanTitle: 'talladeganightsballadrickybobby',
			// 		imdbId: 'tt0415306',
			// 		tmdbId: 9718,
			// 		titleSlug: '9718',
			// 		certification: 'PG-13',
			// 		genres: ['Comedy'],
			// 		tags: [],
			// 		added: '2021-08-09T15:48:36Z',
			// 		ratings: {
			// 			votes: 1248,
			// 			value: 6.3,
			// 		},
			// 		movieFile: {
			// 			movieId: 2,
			// 			relativePath:
			// 				'Talladega Nights The Ballad of Ricky Bobby (2006) Remux-1080p.mkv',
			// 			path: '/home34/tocks/media/movies/Talladega Nights The Ballad of Ricky Bobby (2006)/Talladega Nights The Ballad of Ricky Bobby (2006) Remux-1080p.mkv',
			// 			size: 24408894505,
			// 			dateAdded: '2021-08-09T16:08:08Z',
			// 			indexerFlags: 0,
			// 			quality: {
			// 				quality: {
			// 					id: 30,
			// 					name: 'Remux-1080p',
			// 					source: 'bluray',
			// 					resolution: 1080,
			// 					modifier: 'remux',
			// 				},
			// 				revision: {
			// 					version: 1,
			// 					real: 0,
			// 					isRepack: false,
			// 				},
			// 			},
			// 			mediaInfo: {
			// 				audioAdditionalFeatures: 'XLL',
			// 				audioBitrate: 2288201,
			// 				audioChannels: 5.1,
			// 				audioCodec: 'DTS-HD MA',
			// 				audioLanguages: 'English / English',
			// 				audioStreamCount: 2,
			// 				videoBitDepth: 8,
			// 				videoBitrate: 24087787,
			// 				videoCodec: 'MPEG2',
			// 				videoFps: 23.976,
			// 				resolution: '1920x1080',
			// 				runTime: '2:01:26',
			// 				scanType: 'Progressive',
			// 				subtitles: 'English / English / French',
			// 			},
			// 			originalFilePath:
			// 				'Talladega.Nights.The.Ballad.of.Ricky.Bobby.2006.UNRATED.Remux.1080p.BluRay.MPEG-2.DTS-HD.MA.5.1-LEGi0N English/53aa1f72d64af5909e85627e3229c214.mkv',
			// 			qualityCutoffNotMet: false,
			// 			languages: [
			// 				{
			// 					id: 1,
			// 					name: 'English',
			// 				},
			// 			],
			// 			releaseGroup: 'LEGi0N',
			// 			edition: 'UNRATED',
			// 			id: 1,
			// 		},
			// 		id: 2,
			// 	},
			// ],
			selectedMovie: null,
			selectedLayout: 'grid',
			activeTab: 'Recently Added',
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

	mounted() {
		if (this.movies.length === 0) this.getLibrary();
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
