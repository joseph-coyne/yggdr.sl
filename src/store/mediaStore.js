import { defineStore } from 'pinia';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import app from '../firebase/init';
const db = getFirestore(app);
import axios from 'axios';

export const useMediaStore = defineStore('mediaStore', {
  state: () => ({
    movies: [],
    series: [],
    games: [],
  }),

  getters: {},

  actions: {
    async fetchMedia(mediaType) {
      if (mediaType !== 'games') {
        let url;
        let apiKey;
        switch (mediaType) {
          case 'movies':
            url = `https://${import.meta.env.VITE_APP_RADARR_DOMAIN}/movie`;
            apiKey = import.meta.env.VITE_APP_RADARR_KEY;
            break;

          case 'series':
            url = `https://${import.meta.env.VITE_APP_SONARR_DOMAIN}/series`;
            apiKey = import.meta.env.VITE_APP_SONARR_KEY;
            break;
        }

        const proxyurl = 'https://cors-anywhere.herokuapp.com/';

        const options = {
          method: 'GET',
          url: proxyurl + url,
          params: { apiKey },
        };

        axios.request(options).then((res) => {
          let media = res.data.sort((a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
          });
          this[mediaType] = media;
        });
      } else if (mediaType === 'games') {
        const gamesSnap = await getDocs(collection(db, 'games'));

        gamesSnap.forEach((game) => {
          this.games.push(game.data());
        });
        this.games = this.games.sort((a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        });
      }
    },
  },
});
