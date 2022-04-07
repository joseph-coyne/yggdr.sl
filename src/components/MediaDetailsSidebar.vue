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
			class="hidden w-96 h-full bg-white p-8 border-l border-gray-200 overflow-y-auto lg:block"
		>
			<div class="pb-16 space-y-6">
				<div>
					<div class="block w-full rounded-lg overflow-hidden">
						<img
							:src="mediaImage"
							:alt="`${selectedMedia.title}-poster`"
							class="object-cover aspect-[2/3]"
						/>
					</div>
					<div class="mt-4 flex items-start justify-between">
						<div>
							<h2 class="text-lg font-medium text-gray-900">
								<span class="sr-only">Details for </span
								>{{ selectedMedia.title }}
							</h2>
							<!-- <p class="text-sm font-medium text-dark">
										{{ formatFileSize(selectedMedia.sizeOnDisk) }}
									</p> -->
							<div
								class="flex flex-row space-x-2 items-baseline text-slate-500 text-sm font-medium dark:text-white pointer-events-none"
							>
								<p class="text-sm font-medium text-dark">
									{{ selectedMedia.year }}
								</p>
								<span class="text-lg">•</span>
								<p class="text-sm font-medium text-dark">
									{{ selectedMedia.certification }}
								</p>
							</div>
						</div>
						<!-- <button
							type="button"
							class="ml-4 bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-dark focus:outline-none focus:ring-2 focus:ring-blue-500"
							@click="$emit('fetch-library')"
						>
							<HeartIcon class="h-6 w-6" aria-hidden="true" />
							<span class="sr-only">Favorite</span>
						</button> -->
					</div>
				</div>
				<div>
					<div
						v-if="!selectedMedia.overview"
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
							{{ selectedMedia.overview }}
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
								{{ selectedMedia?.movieFile?.quality?.quality.name || 'N/A' }}
							</dd>
						</div>
						<div class="py-3 flex justify-between text-sm font-medium">
							<dt class="text-dark">Audio:</dt>
							<dd class="text-gray-900">
								{{ selectedMedia?.movieFile?.mediaInfo.audioCodec || 'N/A' }}
								({{
									selectedMedia?.movieFile?.mediaInfo.audioChannels || 'N/A'
								}})
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
	name: 'MediaDetailsSidebar',

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
		selectedMedia: {
			type: Object,
			required: true,
		},
	},

	computed: {
		formattedSubtitles() {
			if (this.selectedMedia.movieFile) {
				let subtitles =
					this.selectedMedia.movieFile.mediaInfo.subtitles.split('/');
				subtitles = subtitles.map((subtitle) => subtitle.trim());
				const uniqueSubtitles = [...new Set(subtitles)].join(' / ');
				return uniqueSubtitles;
			} else {
				return 'N/A';
			}
		},

		showSidebar() {
			return this.selectedMedia !== null;
		},

		mediaImage() {
			return this.selectedMedia.images.find(
				(image) => image.coverType === 'poster'
			).remoteUrl;
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
