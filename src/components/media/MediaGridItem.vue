<template>
  <li class="relative">
    <div
      :class="[
        media === selectedShow
          ? 'ring-2 ring-offset-2 ring-blue-500'
          : 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-blue-500',
        'group block  rounded-lg bg-gray-100 overflow-hidden',
      ]"
    >
      <img
        :src="mediaImage"
        :alt="`${media.title}-poster`"
        :class="[
          { 'group-hover:opacity-75': media === selectedShow },
          mediaType === 'games' ? 'aspect-[2.09]' : 'aspect-[2/3]',
          'pointer-events-none object-cover',
        ]"
      />
      <button type="button" class="absolute inset-0 focus:outline-none">
        <span class="sr-only">View details for {{ media.title }}</span>
      </button>
    </div>
    <p
      class="mt-2 block text-sm font-medium text-gray-900 dark:text-white truncate pointer-events-none"
    >
      {{ media.title }}
    </p>
    <p
      class="block text-sm font-medium text-slate-500 dark:text-white pointer-events-none"
    >
      {{ mediaReleaseDate }}
    </p>
  </li>
</template>

<script>
export default {
  name: 'MediaGridItem',

  props: {
    media: {
      type: Object,
    },

    selectedShow: {
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
      return this.media.year || this.media.size || 'N/A';
    },
  },

  methods: {
    formatFileSize(file) {
      const bytes = file;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes === 0) return '0 Byte';
      const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    },
  },
};
</script>
