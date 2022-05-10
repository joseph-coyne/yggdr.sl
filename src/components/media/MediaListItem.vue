<template>
  <li
    :class="[
      { 'bg-slate-500 bg-opacity-10 rounded-lg': media === selectedMedia },
      'flex flex-row space-x-4 w-full h-full p-4 cursor-pointer hover:bg-blue-100 rounded-lg overflow-hidden',
    ]"
  >
    <div
      :class="[
        media === selectedMedia
          ? 'ring-2 ring-offset-2 ring-blue-500'
          : 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-blue-500',
        'rounded-lg bg-gray-100 overflow-hidden',
      ]"
    >
      <img
        :src="mediaImage"
        :alt="`${media.title}-poster`"
        :class="[
          { 'group-hover:opacity-75': media === selectedMedia },
          mediaType === 'games' ? 'aspect-[2.09] h-28' : 'aspect-[2/3] h-32',
          'pointer-events-none object-cover',
        ]"
      />
    </div>
    <div class="flex flex-col w-3/4 h-full">
      <div class="w-full">
        <p
          class="block text-sm font-medium text-gray-900 dark:text-white pointer-events-none"
        >
          {{ media.title }}
        </p>
        <div
          class="flex flex-row space-x-2 items-baseline text-slate-500 text-sm font-medium dark:text-white pointer-events-none"
        >
          <p
            class="block text-sm font-medium text-slate-500 dark:text-white pointer-events-none"
          >
            {{ mediaInfo }}
          </p>
          <span class="text-lg">•</span>
          <p
            class="block text-sm font-medium text-slate-500 dark:text-white pointer-events-none"
          >
            {{ mediaReleaseDate }}
          </p>
        </div>
      </div>
      <div class="w-full">
        <p
          class="text-sm font-medium text-slate-500 dark:text-white pointer-events-none truncate line-clamp-4 whitespace-normal"
        >
          {{ mediaDescription }}
        </p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'MediaListItem',

  props: {
    media: {
      type: Object,
    },

    selectedMedia: {
      type: Object,
    },

    mediaType: {
      type: String,
    },
  },

  computed: {
    mediaImage() {
      return (
        this.media.image ||
        this.media.images.find((image) => image.coverType === 'poster')
          .remoteUrl
      );
    },

    mediaInfo() {
      return (
        this.media?.movieFile?.mediaInfo?.runTime ||
        this.mediaSeasonCount ||
        this.media.size ||
        'N/A'
      );
    },

    mediaSeasonCount() {
      if (!this.media.statistics?.seasonCount) return;
      let seasonCount = parseInt(this.media.statistics.seasonCount, 10);
      if (seasonCount > 1) {
        return `${this.media.statistics.seasonCount} Seasons`;
      } else {
        return `${this.media.statistics.seasonCount} Season`;
      }
    },

    mediaDescription() {
      return this.media.overview || this.media.summary || 'N/A';
    },

    mediaReleaseDate() {
      return this.media.releaseDate?.date || this.media.year || 'N/A';
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
