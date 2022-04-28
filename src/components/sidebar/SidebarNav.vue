<template>
  <nav class="mt-10 flex-1 px-2 bg-dark space-y-1">
    <router-link
      v-for="item in navigation"
      :key="item.name"
      :to="item.path"
      class="text-gray-300 hover:bg-gray-700 hover:text-white flex items-center px-4 py-3 text-xs font-medium rounded-md font-plex"
    >
      <component
        :is="item.icon"
        class="mr-4 flex-shrink-0 h-4 w-4"
        aria-hidden="true"
      />
      {{ item.name }}
    </router-link>
  </nav>
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
  name: 'SidebarNav',

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
