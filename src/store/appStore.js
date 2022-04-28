import { defineStore } from 'pinia';

export const useAppStore = defineStore({
  id: 'app',

  state: () => ({
    listView: 'grid',
  }),

  getters: {},

  actions: {
    toggle() {
      this.listView = this.listView === 'grid' ? 'list' : 'grid';
    },
  },
});
