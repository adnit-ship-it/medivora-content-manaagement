<template>
  <UiSectionWrapper class="py-20 flex-col">
    <UiSectionContainer class="pb-6">
      <h2 v-motion :initial="{ opacity: 0, y: 32 }" :visible-once="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 400,
          type: 'ease-in',
          stiffness: 250,
          damping: 25,
          mass: 1,
          delay: 100,
        },
      }" class="font-defaultSerif text-[20px] md:text-[28px] lg:text-[32px] font-semibold text-black md:text-left">
        Before & After Medivora
      </h2>
    </UiSectionContainer>

    <UiCardCarousel :items="images">
      <template #default="{ item }">
        <div class="w-full h-full">
          <img :src="item.src" :alt="item.alt" class="h-full w-full object-cover" />
        </div>
      </template>
    </UiCardCarousel>
  </UiSectionWrapper>
</template>

<script setup>
const images = [
  { src: "/assets/images/before-after-1.png", alt: "Before & After 1" },
  { src: "/assets/images/before-after-2.png", alt: "Before & After 2" },
  { src: "/assets/images/before-after-3.png", alt: "Before & After 3" },
];
</script>

<style scoped>
/* Custom styles if needed */
</style>
