import Home from './views/Home.vue';
import About from './views/About.vue';
import Movies from './views/Movies.vue';
import Shows from './views/Shows.vue';
import Games from './views/Games.vue';
import NotFound from './views/NotFound.vue';

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
	{ path: '/', component: Home, meta: { title: 'Home' } },
	{ path: '/movies', component: Movies, meta: { title: 'Movies' } },
	{ path: '/tv', component: Shows, meta: { title: 'Shows' } },
	{ path: '/games', component: Games, meta: { title: 'Games' } },
	{
		path: '/about',
		meta: { title: 'About' },
		component: About,
		// example of route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// component: () => import('./views/About.vue')
	},
	{ path: '/:path(.*)', component: NotFound },
];
