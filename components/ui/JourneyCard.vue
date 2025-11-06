<template>
  <div
    :class="[
      'h-[88px] md:h-[128px] w-[276px] md:w-[500px] transition-all duration-300 lg:h-[304px] lg:w-[304px] border-2 rounded-[6px] lg:rounded-[10px] flex flex-row lg:flex-col items-start lg:items-center justify-start lg:justify-center gap-5 px-5 py-2 md:py-4 lg:px-0 lg:py-0',
      isActive ? 'border-accentColor1 bg-accentColor2' : 'border-accentColor1/40 lg:border-accentColor1 lg:bg-accentColor2'
    ]"
  >
    <img :src="img" :alt="title" class="h-8 w-8 md:w-[48px] md:h-[48px] mt-2 lg:mt-0 lg:w-[60px] lg:h-[60px]" />
    <div class="flex justify-center flex-col gap-0.5 lg:gap-5">
      <p class="text-[16px] md:text-[20px] font-semibold text-left lg:text-center">
        {{ title }}
      </p>
      <p class="text-black text-[14px] md:text-[20px] font-medium text-left lg:text-center">
        <span v-html="subtext"></span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  img: string
  title: string
  subtext: string
  isActive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isActive: false
})
</script> 