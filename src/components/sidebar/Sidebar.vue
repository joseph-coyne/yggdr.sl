<template>
  <div
    class="h-screen flex overflow-hidden bg-gray-100 border-r border-opacity-50"
  >
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64">
        <div class="flex-1 flex flex-col min-h-0 bg-dark">
          <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <SidebarLogo />
            <SidebarNav />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>
