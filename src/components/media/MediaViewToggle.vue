<template>
  <div class="ml-6 bg-gray-100 p-0.5 rounded-lg items-center">
    <button
      @click="appStore.toggle()"
      type="button"
      :class="[
        { 'shadow-sm bg-white': appStore.mediaView === 'list' },
        'p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500',
      ]"
    >
      <ViewListIcon class="h-5 w-5" aria-hidden="true" />
      <span class="sr-only">Use list view</span>
    </button>
    <button
      @click="appStore.toggle()"
      type="button"
      :class="[
        { 'shadow-sm bg-white': appStore.mediaView === 'grid' },
        'ml-0.5 p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500',
      ]"
    >
      <ViewGridIcon class="h-5 w-5" aria-hidden="true" />
      <span class="sr-only">Use grid view</span>
    </button>
  </div>
</template>

<script>
import { ViewGridIcon, ViewListIcon } from '@heroicons/vue/solid';
import { useAppStore } from '../../store/appStore';

export default {
  name: 'MediaViewToggle',

  setup() {
    const appStore = useAppStore();

    return {
      appStore,
    };
  },

  components: {
    ViewGridIcon,
    ViewListIcon,
  },

  methods: {
    toggleView(view) {
      this.appStore.toggle(view);
    },
  },
};
</script>

<style></style>
