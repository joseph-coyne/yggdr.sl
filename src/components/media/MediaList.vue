<template>
  <section class="mt-8 pb-16" aria-labelledby="gallery-heading">
    <ul role="list" class="flex flex-col h-full">
      <MediaListItem
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
  name: 'MediaList',

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
