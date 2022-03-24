<template>
	<TransitionRoot
		:show="showSidebar"
		enter="transform ease-in-out duration-200 transition"
		enter-from="opacity-0 translate-x-full"
		enter-to="opacity-100 translate-x-0"
		leave="transform ease-in-out duration-200 transition"
		leave-from="opacity-100 translate-x-0"
		leave-to="opacity-0 translate-x-full"
	>
		<aside
			class="hidden w-96 bg-white p-8 border-l border-gray-200 overflow-y-auto lg:block"
		>
			<div class="pb-16 space-y-6">
				<div>
					<div class="block w-full aspect-[2/3] rounded-lg overflow-hidden">
						<img
							:src="selectedMovie.images[0].remoteUrl"
							alt=""
							class="object-cover"
						/>
					</div>
					<div class="mt-4 flex items-start justify-between">
						<div>
							<h2 class="text-lg font-medium text-gray-900">
								<span class="sr-only">Details for </span
								>{{ selectedMovie.title }}
							</h2>
							<!-- <p class="text-sm font-medium text-dark">
										{{ formatFileSize(selectedMovie.sizeOnDisk) }}
									</p> -->
							<p class="text-sm font-medium text-dark">
								{{ selectedMovie.year }}
							</p>
							<p class="text-sm font-medium text-dark">
								{{ selectedMovie.certification }}
							</p>
						</div>
						<button
							type="button"
							class="ml-4 bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-dark focus:outline-none focus:ring-2 focus:ring-blue-500"
							@click="$emit('fetch-library')"
						>
							<HeartIcon class="h-6 w-6" aria-hidden="true" />
							<span class="sr-only">Favorite</span>
						</button>
					</div>
				</div>
				<div>
					<div
						v-if="!selectedMovie.overview"
						class="mt-2 flex items-center justify-between"
					>
						<p class="text-sm text-dark italic">
							Add a description to this image.
						</p>
						<button
							type="button"
							class="bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-dark focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							<PencilIcon class="h-5 w-5" aria-hidden="true" />
							<span class="sr-only">Add description</span>
						</button>
					</div>
					<div class="mt-2 flex items-center justify-between">
						<p class="text-sm text-dark">
							{{ selectedMovie.overview }}
						</p>
					</div>
				</div>
				<div class="">
					<h3 class="font-medium text-gray-900">Information</h3>
					<dl
						class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200"
					>
						<div class="py-3 flex justify-between text-sm font-medium">
							<dt class="text-dark">Video:</dt>
							<dd class="text-gray-900">
								{{ selectedMovie?.movieFile.quality.quality.name }}
							</dd>
						</div>
						<div class="py-3 flex justify-between text-sm font-medium">
							<dt class="text-dark">Audio:</dt>
							<dd class="text-gray-900">
								{{ selectedMovie?.movieFile.mediaInfo.audioCodec }}
								({{ selectedMovie?.movieFile.mediaInfo.audioChannels }})
							</dd>
						</div>
						<div class="py-3 flex justify-between text-sm font-medium">
							<dt class="text-dark">Subtitles:</dt>
							<dd class="text-gray-900 text-right">
								{{ formattedSubtitles }}
							</dd>
						</div>
					</dl>
				</div>

				<!-- <div>
				<h3 class="font-medium text-gray-900">Shared with</h3>
				<ul
					class="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200"
				>
					<li
						v-for="person in currentFile.sharedWith"
						:key="person.id"
						class="py-3 flex justify-between items-center"
					>
						<div class="flex items-center">
							<img :src="person.imageUrl" alt="" class="w-8 h-8 rounded-full" />
							<p class="ml-4 text-sm font-medium text-gray-900">
								{{ person.name }}
							</p>
						</div>
						<button
							type="button"
							class="ml-6 bg-white rounded-md text-sm font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						>
							Remove<span class="sr-only"> {{ person.name }}</span>
						</button>
					</li>
					<li class="py-2 flex justify-between items-center">
						<button
							type="button"
							class="group -ml-1 bg-white p-1 rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							<span
								class="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400"
							>
								<PlusIconSolid class="h-5 w-5" aria-hidden="true" />
							</span>
							<span
								class="ml-4 text-sm font-medium text-blue-600 group-hover:text-blue-500"
								>Share</span
							>
						</button>
					</li>
				</ul>
			</div> -->
				<div class="flex">
					<base-button>Download</base-button>
					<button
						type="button"
						class="flex-1 ml-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
					>
						Delete
					</button>
				</div>
			</div>
		</aside>
	</TransitionRoot>
</template>

<script>
const currentFile = {
	name: 'IMG_4985.HEIC',
	size: '3.9 MB',
	source:
		'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
	information: {
		'Uploaded by': 'Marie Culver',
		Created: 'June 8, 2020',
		'Last modified': 'June 8, 2020',
		Dimensions: '4032 x 3024',
		Resolution: '72 x 72',
	},
	sharedWith: [
		{
			id: 1,
			name: 'Aimee Douglas',
			imageUrl:
				'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80',
		},
		{
			id: 2,
			name: 'Andrea McMillan',
			imageUrl:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	],
};
import {
	Dialog,
	DialogOverlay,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	TransitionChild,
	TransitionRoot,
} from '@headlessui/vue';
import {
	CogIcon,
	CollectionIcon,
	HeartIcon,
	HomeIcon,
	MenuAlt2Icon,
	PhotographIcon,
	PlusIcon as PlusIconOutline,
	UserGroupIcon,
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
export default {
	name: 'MovieSelectedDetails',

	components: {
		Dialog,
		DialogOverlay,
		Menu,
		MenuButton,
		MenuItem,
		MenuItems,
		TransitionChild,
		TransitionRoot,
		HeartIcon,
		MenuAlt2Icon,
		PencilIcon,
		PlusIconOutline,
		PlusIconSolid,
		SearchIcon,
		ViewGridIconSolid,
		ViewListIcon,
		XIcon,
	},

	setup() {
		return {
			currentFile,
		};
	},

	props: {
		selectedMovie: {
			type: Object,
			required: true,
		},
	},

	computed: {
		formattedSubtitles() {
			let subtitles =
				this.selectedMovie.movieFile.mediaInfo.subtitles.split('/');
			subtitles = subtitles.map((subtitle) => subtitle.trim());
			const uniqueSubtitles = [...new Set(subtitles)].join(' / ');
			return uniqueSubtitles;
		},
		showSidebar() {
			return this.selectedMovie !== null;
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
<style scoped>
dd {
	margin-inline-start: 40px;
	text-align: end;
}
</style>
