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
								{{ viewTitle }}
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
							:allMedia="shows"
							:selected-media="selectedShow"
							@select-media="selectShow"
						/>
						<MediaList
							v-if="selectedLayout === 'list'"
							:all-media="shows"
							:selected-show="selectedShow"
							@select-show="selectShow"
						/>
					</div>
				</main>

				<MediaDetailsSidebar
					v-if="showSidebar"
					:selected-media="selectedShow"
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
	name: 'Shows',

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
			title: 'TV Shows',
			// shows: [
			// 	{
			// 		title: 'Gravity Falls',
			// 		alternateTitles: [],
			// 		sortTitle: 'gravity falls',
			// 		seasonCount: 2,
			// 		totalEpisodeCount: 100,
			// 		episodeCount: 40,
			// 		episodeFileCount: 40,
			// 		sizeOnDisk: 21239046322,
			// 		status: 'ended',
			// 		overview:
			// 			'Twin brother and sister Dipper and Mabel Pines are in for an unexpected adventure when they spend the summer helping their Great Uncle Stan run a tourist trap in the mysterious town of Gravity Falls, Oregon.',
			// 		previousAiring: '2016-02-16T02:30:00Z',
			// 		network: 'Disney XD',
			// 		airTime: '21:30',
			// 		images: [
			// 			{
			// 				coverType: 'banner',
			// 				url: '/sonarr/MediaCover/1/banner.jpg?lastWrite=637642177395494690',
			// 				remoteUrl:
			// 					'https://artworks.thetvdb.com/banners/graphical/259972-g.jpg',
			// 			},
			// 			{
			// 				coverType: 'poster',
			// 				url: '/sonarr/MediaCover/1/poster.jpg?lastWrite=637752134401562630',
			// 				remoteUrl:
			// 					'https://artworks.thetvdb.com/banners/posters/259972-1.jpg',
			// 			},
			// 			{
			// 				coverType: 'fanart',
			// 				url: '/sonarr/MediaCover/1/fanart.jpg?lastWrite=637804006276258430',
			// 				remoteUrl:
			// 					'https://artworks.thetvdb.com/banners/show/259972/backgrounds/5f44c885d0bbc.jpg',
			// 			},
			// 		],
			// 		seasons: [
			// 			{
			// 				seasonNumber: 0,
			// 				monitored: false,
			// 				statistics: {
			// 					episodeFileCount: 0,
			// 					episodeCount: 0,
			// 					totalEpisodeCount: 60,
			// 					sizeOnDisk: 0,
			// 					percentOfEpisodes: 0.0,
			// 				},
			// 			},
			// 			{
			// 				seasonNumber: 1,
			// 				monitored: true,
			// 				statistics: {
			// 					previousAiring: '2013-08-03T01:30:00Z',
			// 					episodeFileCount: 20,
			// 					episodeCount: 20,
			// 					totalEpisodeCount: 20,
			// 					sizeOnDisk: 10285396420,
			// 					percentOfEpisodes: 100.0,
			// 				},
			// 			},
			// 			{
			// 				seasonNumber: 2,
			// 				monitored: true,
			// 				statistics: {
			// 					previousAiring: '2016-02-16T02:30:00Z',
			// 					episodeFileCount: 20,
			// 					episodeCount: 20,
			// 					totalEpisodeCount: 20,
			// 					sizeOnDisk: 10953649902,
			// 					percentOfEpisodes: 100.0,
			// 				},
			// 			},
			// 		],
			// 		year: 2012,
			// 		path: '/home34/tocks/media/tvshows/Gravity Falls',
			// 		profileId: 1,
			// 		languageProfileId: 1,
			// 		seasonFolder: true,
			// 		monitored: true,
			// 		useSceneNumbering: false,
			// 		runtime: 25,
			// 		tvdbId: 259972,
			// 		tvRageId: 31839,
			// 		tvMazeId: 396,
			// 		firstAired: '2012-06-15T00:00:00Z',
			// 		lastInfoSync: '2022-03-16T02:22:24.117515Z',
			// 		showType: 'standard',
			// 		cleanTitle: 'gravityfalls',
			// 		imdbId: 'tt1865718',
			// 		titleSlug: 'gravity-falls',
			// 		certification: 'TV-Y7',
			// 		genres: [
			// 			'Action',
			// 			'Adventure',
			// 			'Animation',
			// 			'Comedy',
			// 			'Drama',
			// 			'Family',
			// 			'Fantasy',
			// 			'Horror',
			// 			'Mystery',
			// 			'Science Fiction',
			// 			'Thriller',
			// 		],
			// 		tags: [],
			// 		added: '2021-08-10T18:42:15.01054Z',
			// 		ratings: {
			// 			votes: 1758,
			// 			value: 9.3,
			// 		},
			// 		qualityProfileId: 1,
			// 		id: 1,
			// 	},
			// ],
			shows: [],
			selectedShow: null,
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
			return this.selectedShow !== null;
		},

		viewTitle() {
			return this.$route.meta.title;
		},
	},

	mounted() {
		if (this.shows.length === 0) this.getLibrary();
	},

	methods: {
		getLibrary() {
			const proxyurl = 'https://cors-anywhere.herokuapp.com/';
			const url = `https://${import.meta.env.VITE_APP_SONARR_DOMAIN}/series`;
			const options = {
				method: 'GET',
				url: proxyurl + url,
				params: { apikey: import.meta.env.VITE_APP_SONARR_KEY },
			};

			this.axios.request(options).then((res) => {
				this.shows = res.data;
			});
		},

		selectShow(show) {
			this.selectedShow = show;
		},
	},
};
</script>
