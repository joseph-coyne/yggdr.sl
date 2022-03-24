<template>
	<div class="relative bg-gray-50 dark:bg-dark w-full flex overflow-hidden">
		<!-- Mobile menu -->
		<TransitionRoot as="template" :show="mobileMenuOpen">
			<Dialog
				as="div"
				static
				class="fixed inset-0 z-40 flex md:hidden"
				@close="mobileMenuOpen = false"
				:open="mobileMenuOpen"
			>
				<TransitionChild
					as="template"
					enter="transition-opacity ease-linear duration-300"
					enter-from="opacity-0"
					enter-to="opacity-100"
					leave="transition-opacity ease-linear duration-300"
					leave-from="opacity-100"
					leave-to="opacity-0"
				>
					<DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
				</TransitionChild>
				<TransitionChild
					as="template"
					enter="transition ease-in-out duration-300 transform"
					enter-from="-translate-x-full"
					enter-to="translate-x-0"
					leave="transition ease-in-out duration-300 transform"
					leave-from="translate-x-0"
					leave-to="-translate-x-full"
				>
					<div
						class="relative max-w-xs w-full bg-indigo-700 pt-5 pb-4 flex-1 flex flex-col"
					>
						<TransitionChild
							as="template"
							enter="ease-in-out duration-300"
							enter-from="opacity-0"
							enter-to="opacity-100"
							leave="ease-in-out duration-300"
							leave-from="opacity-100"
							leave-to="opacity-0"
						>
							<div class="absolute top-1 right-0 -mr-14 p-1">
								<button
									type="button"
									class="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
									@click="mobileMenuOpen = false"
								>
									<XIcon class="h-6 w-6 text-dark" aria-hidden="true" />
									<span class="sr-only">Close sidebar</span>
								</button>
							</div>
						</TransitionChild>
						<div class="flex-shrink-0 px-4 flex items-center">
							<img
								class="h-8 w-auto"
								src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
								alt="Workflow"
							/>
						</div>
						<div class="mt-5 flex-1 h-0 px-2 overflow-y-auto">
							<nav class="h-full flex flex-col">
								<div class="space-y-1">
									<a
										v-for="item in navigation"
										:key="item.name"
										:href="item.href"
										:class="[
											item.current
												? 'bg-indigo-800 text-dark'
												: 'text-indigo-100 hover:bg-indigo-800 hover:text-white',
											'group py-2 px-3 rounded-md flex items-center text-sm font-medium',
										]"
										:aria-current="item.current ? 'page' : undefined"
									>
										<component
											:is="item.icon"
											:class="[
												item.current
													? 'text-white'
													: 'text-indigo-300 group-hover:text-white',
												'mr-3 h-6 w-6',
											]"
											aria-hidden="true"
										/>
										<span>{{ item.name }}</span>
									</a>
								</div>
							</nav>
						</div>
					</div>
				</TransitionChild>
				<div class="flex-shrink-0 w-14" aria-hidden="true">
					<!-- Dummy element to force sidebar to shrink to fit close icon -->
				</div>
			</Dialog>
		</TransitionRoot>

		<!-- Content area -->
		<div class="flex-1 flex flex-col overflow-hidden">
			<header class="w-full">
				<div
					class="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex"
				>
					<button
						type="button"
						class="border-r border-gray-200 px-4 dark:text-white text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
						@click="mobileMenuOpen = true"
					>
						<span class="sr-only">Open sidebar</span>
						<MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
					</button>
					<div class="flex-1 flex justify-between px-4 sm:px-6">
						<div class="flex-1 flex">
							<form class="w-full flex md:ml-0" action="#" method="GET">
								<label for="search-field" class="sr-only"
									>Search all files</label
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
									<!-- <input
										name="search-field"
										id="search-field"
										class="
											h-full
											w-full
											border-transparent
											py-2
											pl-8
											pr-3
											text-base text-gray-900
											dark:text-white
											placeholder-dark
											focus:outline-none
											focus:ring-0
											focus:border-transparent
											focus:placeholder-gray-400
											sm:hidden
										"
										placeholder="Search"
										type="search"
									/> -->
									<input
										name="search-field"
										id="search-field"
										class="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 dark:text-white placeholder-dark focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:block"
										placeholder="Search all files"
										type="search"
									/>
								</div>
							</form>
						</div>
						<div class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
							<!-- Profile dropdown -->
							<Menu as="div" class="relative flex-shrink-0">
								<div>
									<MenuButton
										class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
								class="flex bg-indigo-600 p-1 rounded-full items-center justify-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								<PlusIconOutline class="h-6 w-6" aria-hidden="true" />
								<span class="sr-only">Add file</span>
							</button>
						</div>
					</div>
				</div>
			</header>

			<!-- Main content -->
			<div class="flex-1 flex items-stretch overflow-hidden">
				<main class="flex-1 overflow-y-auto">
					<div class="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div class="flex">
							<h1
								class="flex-1 text-2xl font-bold text-gray-900 dark:text-white"
							>
								Games
							</h1>
							<div
								class="ml-6 bg-gray-100 p-0.5 rounded-lg flex items-center sm:hidden"
							>
								<button
									type="button"
									class="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
								>
									<ViewListIcon class="h-5 w-5" aria-hidden="true" />
									<span class="sr-only">Use list view</span>
								</button>
								<button
									type="button"
									class="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
									class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
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
													? 'border-indigo-500 text-indigo-600'
													: 'border-transparent dark:text-white text-dark hover:text-gray-700 hover:border-gray-300',
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
											type="button"
											class="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
										>
											<ViewListIcon class="h-5 w-5" aria-hidden="true" />
											<span class="sr-only">Use list view</span>
										</button>
										<button
											type="button"
											class="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
										>
											<ViewGridIconSolid class="h-5 w-5" aria-hidden="true" />
											<span class="sr-only">Use grid view</span>
										</button>
									</div>
								</div>
							</div>
						</div>

						<!-- Gallery -->
						<section class="mt-8 pb-16" aria-labelledby="gallery-heading">
							<h2 id="gallery-heading" class="sr-only">Recently added</h2>
							<ul
								role="list"
								class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
							>
								<li v-for="game in games" :key="game.name" class="relative">
									<div
										:class="[
											game.current
												? 'ring-2 ring-offset-2 ring-indigo-500'
												: 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500',
											'group block w-full aspect-[2.09] rounded-lg bg-gray-100 overflow-hidden',
										]"
									>
										<img
											:src="game.image"
											alt=""
											:class="[
												game.current ? '' : 'group-hover:opacity-75',
												'object-cover pointer-events-none w-full h-full',
											]"
										/>
										<button
											type="button"
											class="absolute inset-0 focus:outline-none"
										>
											<span class="sr-only"
												>View details for {{ game.name }}</span
											>
										</button>
									</div>
									<p
										class="mt-2 block text-sm font-medium text-gray-900 dark:text-white truncate pointer-events-none"
									>
										{{ game.name || game.title }}
									</p>
									<p
										class="block text-sm font-medium dark:text-white text-white pointer-events-none"
									>
										{{ game.size }}
									</p>
								</li>
							</ul>
						</section>
					</div>
				</main>
			</div>
		</div>
	</div>
</template>

<script>
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import app from '../firebase/init';
const db = getFirestore(app);
// const app = initializeApp(firebaseConfig.firebaseConfig);

import { ref } from 'vue';
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

const userNavigation = [
	{ name: 'Your profile', href: '#' },
	{ name: 'Sign out', href: '#' },
];
const tabs = [
	{ name: 'Recently Added', href: '#', current: true },
	{ name: 'Library', href: '#', current: false },
	{ name: 'Favorited', href: '#', current: false },
];
const files = [
	{
		name: 'IMG_4985.HEIC',
		size: '3.9 MB',
		source:
			'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
		current: true,
	},
	{
		name: 'IMG_4985.HEIC',
		size: '3.9 MB',
		source:
			'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
		current: true,
	},
	{
		name: 'IMG_4985.HEIC',
		size: '3.9 MB',
		source:
			'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
		current: true,
	},
	{
		name: 'IMG_4985.HEIC',
		size: '3.9 MB',
		source:
			'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
		current: true,
	},
	{
		name: 'IMG_4985.HEIC',
		size: '3.9 MB',
		source:
			'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
		current: true,
	},
	{
		name: 'IMG_4985.HEIC',
		size: '3.9 MB',
		source:
			'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
		current: true,
	},
	{
		name: 'IMG_4985.HEIC',
		size: '3.9 MB',
		source:
			'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
		current: true,
	},
	{
		name: 'IMG_4985.HEIC',
		size: '3.9 MB',
		source:
			'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
		current: true,
	},
	{
		name: 'IMG_4985.HEIC',
		size: '3.9 MB',
		source:
			'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
		current: true,
	},
	// More files...
];
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
const gamesSnap = await getDocs(collection(db, 'games'));
let games = [];
gamesSnap.forEach((game) => {
	games.push(game.data());
});
// sort games alphabetically
games.sort((a, b) => {
	if (a.title < b.title) return -1;
	if (a.title > b.title) return 1;
	return 0;
});

export default {
	name: 'Games',
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
		const mobileMenuOpen = ref(false);

		return {
			userNavigation,
			tabs,
			files,
			currentFile,
			mobileMenuOpen,
			games,
		};
	},
};
</script>
