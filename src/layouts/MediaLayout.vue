<template>
  <div class="relative bg-gray-50 dark:bg-dark w-full flex overflow-hidden">
    <!-- Content area -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <div class="flex-1 flex items-stretch overflow-hidden">
        <main class="flex-1 overflow-y-auto">
          <div class="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex">
              <h1
                class="flex-1 text-2xl font-bold text-gray-900 dark:text-white"
              >
                {{ title }}
              </h1>
              <MediaViewToggle class="flex sm:hidden" />
            </div>

            <MediaTabs />

            <component
              :is="mediaView"
              :media-type="title.toLowerCase()"
              :library="mediaStore[currentMedia]"
              :selected-media="selectedMedia"
              @select-media="selectMedia"
            >
            </component>
          </div>
        </main>

        <MediaDetails
          v-if="showSidebar"
          :selected-media="selectedMedia"
          :media-type="title.toLowerCase()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useAppStore } from '../store/appStore';
import { useMediaStore } from '../store/mediaStore';
import { isEmpty, isNil } from 'lodash';
import MediaList from '../components/media/MediaList.vue';
import MediaGrid from '../components/media/MediaGrid.vue';

export default {
  name: 'MediaLayout',

  components: {
    MediaList,
    MediaGrid,
  },

  setup() {
    const appStore = useAppStore();
    const mediaStore = useMediaStore();

    return {
      appStore,
      mediaStore,
    };
  },

  props: {
    title: {
      type: String,
    },
  },

  data() {
    return {
      selectedMedia: null,
    };
  },

  computed: {
    showSidebar() {
      return !isNil(this.selectedMedia);
    },

    emptyLibrary() {
      return isEmpty(this.mediaStore[this.currentMedia]);
    },

    currentMedia() {
      return this.title.toLowerCase();
    },

    mediaView() {
      return `Media${this.appStore.mediaView
        .charAt(0)
        .toUpperCase()}${this.appStore.mediaView.slice(1)}`;
    },
  },

  mounted() {
    if (this.emptyLibrary) {
      this.mediaStore.fetchMedia(this.currentMedia);
    }
  },

  methods: {
    selectMedia(media) {
      this.selectedMedia = media;
    },
  },
};
</script>
