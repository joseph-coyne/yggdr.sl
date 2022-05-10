<template>
  <main class="flex h-screen relative overflow-hidden">
    <Sidebar />
    <router-view />
    <NavbarMobile />
    <!-- <CommandBox /> -->
  </main>
</template>

<script>
export default {
  mounted() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      console.log('dark');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      console.log('light');
    }
  },
};
</script>

<style>
* {
  outline: none !important;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  -webkit-tap-highlight-color: transparent;
}

*::-webkit-scrollbar {
  display: none;
}
</style>
