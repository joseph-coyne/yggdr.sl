<template>
  <section class="mt-8 pb-16" aria-labelledby="gallery-heading">
    <ul
      role="list"
      class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 xl:grid-cols-5 xl:gap-x-8"
    >
      <MediaGridItem
        v-for="media in library"
        :key="media.title"
        :media="media"
        :media-type="mediaType"
        :selected-media="selectedMedia"
        @click="$emit('select-media', media)"
      />
    </ul>
  </section>
</template>

<script>
export default {
  name: 'MediaGrid',

  props: {
    library: {
      type: Array,
      required: true,
    },

    selectedMedia: {
      type: Object,
    },

    mediaType: {
      type: String,
    },
  },
};
</script>
