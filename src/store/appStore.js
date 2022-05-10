import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
  state: () => ({
    mediaView: 'grid',
  }),

  getters: {},

  actions: {
    toggle() {
      this.mediaView = this.mediaView === 'grid' ? 'list' : 'grid';
    },
  },
});
