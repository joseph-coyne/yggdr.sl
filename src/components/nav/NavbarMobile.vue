<template>
  <div class="sm:hidden h-16 flex absolute bottom-0 w-full z-40">
    <div class="z-40 flex relative w-full">
      <NavbarLinks />
    </div>
    <div
      class="absolute bottom-1 h-20 w-full flex justify-center pointer-events-none"
    >
      <button
        class="z-40 bg-gradient-to-bl from-blue-500 to-green-500 flex w-10 h-10 rounded-sm rotate-45 items-center justify-center pointer-events-auto"
      >
        <IconAdd
          class="flex-shrink-0 h-12 w-12 rotate-45 text-white"
          aria-hidden="true"
        />
      </button>
      <div class="flex w-full items-center justify-center absolute bottom-0">
        <div
          class="z-50 absolute flex items-center justify-center overflow-hidden h-10 bottom-[19px] w-full pointer-events-none"
        >
          <div
            class="absolute bottom-[14px] flex w-14 h-14 rounded-sm rotate-45 items-center justify-center ring ring-dark"
          ></div>
        </div>
        <div class="flex items-center justify-center">
          <div
            class="z-30 absolute bg-dark h-[63px] w-1/2 -left-[38px] -bottom-1"
          ></div>
          <div class="absolute bg-dark w-full inset-x-0 h-4 -bottom-2"></div>
          <div
            class="z-30 absolute bg-dark h-[63px] w-1/2 -right-[38px] -bottom-1"
          ></div>
          <div
            class="z-30 absolute flex items-center justify-center bg-dark h-10 w-20 mr-12 -bottom-1 rotate-45"
          ></div>
          <div
            class="z-30 absolute bg-dark h-10 w-20 flex items-center justify-center -bottom-1 -rotate-45 ml-12"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconAdd from '~icons/iconoir/plus';

export default {
  name: 'NavbarMobile',

  components: {
    IconAdd,
  },
};
</script>

<style></style>
