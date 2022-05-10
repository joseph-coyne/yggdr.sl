<template>
  <nav
    class="sm:mt-10 flex flex-row sm:flex-col py-2 px-6 sm:px-2 sm:space-y-1 w-full justify-between"
  >
    <router-link
      v-for="item in navigation"
      :key="item.name"
      :to="item.path"
      class="text-gray-300 hover:bg-gray-700 hover:text-white flex items-center px-3 py-3 sm:py-3 text-xs font-medium rounded-md font-plex"
    >
      <component
        :is="item.icon"
        class="sm:mr-4 flex-shrink-0 sm:h-4 sm:w-4 h-6 w-6"
        aria-hidden="true"
      />
      <span class="hidden sm:block">
        {{ item.name }}
      </span>
    </router-link>
  </nav>
</template>

<script>
import IconGames from '~icons/ri/gamepad-line';
import IconMovies from '~icons/ri/movie-2-line';
import IconHome from '~icons/iconoir/home';
import IconTV from '~icons/ri/tv-line';
import IconSettings from '~icons/ri/settings-3-line';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
const navigation = [
  // { name: 'Home', path: '/', icon: IconHome },
  {
    name: 'Movies',
    path: '/movies',
    icon: IconMovies,
  },
  { name: 'Series', path: '/tv', icon: IconTV },
  { name: 'Games', path: '/games', icon: IconGames },
  { name: 'Settings', path: '/settings', icon: IconSettings },
];
export default {
  name: 'NavbarLinks',

  setup() {
    const route = useRoute();

    const path = computed(() => route.path);
    return {
      path,
      navigation,
    };
  },
  mounted() {
    console.log(this.path);
  },
};
</script>

<style scoped>
a.router-link-active {
  @apply bg-gray-500 text-blue-500 bg-opacity-20;
}
</style>
