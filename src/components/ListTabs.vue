<template>
  <div class="mt-3 sm:mt-2">
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <select
        id="tabs"
        name="tabs"
        class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
      >
        <option selected="">Recently Added</option>
        <option>Library</option>
        <option>Favorited</option>
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="flex items-center border-b border-gray-200">
        <nav
          class="flex-1 -mb-px flex space-x-6 xl:space-x-8"
          aria-label="Tabs"
        >
          <a
            v-for="tab in tabs"
            :key="tab.name"
            :href="tab.href"
            :aria-current="tab.current ? 'page' : undefined"
            :class="[
              tab.current
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-dark dark:text-white hover:text-gray-700 hover:border-gray-300',
              'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
            ]"
          >
            {{ tab.name }}
          </a>
        </nav>
        <ListViewToggle />
      </div>
    </div>
  </div>
</template>

<script>
const tabs = [
  { name: 'Recently Added', href: '#', current: true },
  { name: 'Library', href: '#', current: false },
  { name: 'Favorited', href: '#', current: false },
];

export default {
  name: 'ListTabs',

  setup() {
    return {
      tabs,
    };
  },
};
</script>

<style></style>
