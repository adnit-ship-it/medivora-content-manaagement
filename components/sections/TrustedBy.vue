<template>
  <UiSectionWrapper class="flex-col overflow-hidden py-20">
    <UiSectionContainer>
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
      }"
        class="pb-[24px] font-defaultSerif text-[20px] md:text-[28px] lg:text-[32px] font-semibold text-black text-left">
        Trusted By
      </h2>
    </UiSectionContainer>
    <div class="relative overflow-hidden border-t h-[90px] md:h-[130px] border-b border-[#D9D9D9]">
      <NuxtMarquee :speed="50" :autoFill="true" class="flex items-center justify-center h-full gap-8">
        <div class="flex items-center gap-8 lg:gap-16 h-full px-4">
          <img src="/assets/images/clients/bloomberg.png" alt="Bloomberg" class="h-8 lg:h-10 w-auto object-contain" />
          <img src="/assets/images/clients/forbes.png" alt="Forbes" class="h-8 lg:h-10 w-auto object-contain" />
          <img src="/assets/images/clients/healthline.png" alt="Healthline" class="h-8 lg:h-10 w-auto object-contain" />
          <img src="/assets/images/clients/web-md.png" alt="WebMD" class="h-8 lg:h-10 w-auto object-contain" />
          <img src="/assets/images/clients/fortune.png" alt="Fortune" class="h-8 lg:h-10 w-auto object-contain" />
          <img src="/assets/images/clients/fast-company.png" alt="Fast Company"
            class="h-8 lg:h-10 w-auto object-contain" />
          <img src="/assets/images/clients/new-york-times.png" alt="The New York Times"
            class="h-8 lg:h-10 w-auto object-contain" />
          <img src="/assets/images/clients/bloomberg.png" alt="Bloomberg" class="h-8 lg:h-10 w-auto object-contain" />
          <img src="/assets/images/clients/forbes.png" alt="Forbes" class="h-8 lg:h-10 w-auto object-contain" />
          <img src="/assets/images/clients/healthline.png" alt="Healthline" class="h-8 lg:h-10 w-auto object-contain" />
          <img src="/assets/images/clients/web-md.png" alt="WebMD" class="h-8 lg:h-10 w-auto object-contain" />
          <img src="/assets/images/clients/fortune.png" alt="Fortune" class="h-8 lg:h-10 w-auto object-contain" />
          <img src="/assets/images/clients/fast-company.png" alt="Fast Company"
            class="h-8 lg:h-10 w-auto object-contain" />
          <img src="/assets/images/clients/new-york-times.png" alt="The New York Times"
            class="h-8 lg:h-10 w-auto object-contain" />
        </div>
      </NuxtMarquee>
    </div>
  </UiSectionWrapper>
</template>

<script setup>
// Define the center prop with a default value of false
const { center } = defineProps({
  center: {
    type: Boolean,
    default: false,
  },
});

// Logos configuration for the marquee
const clients = [
  {
    src: "/assets/images/clients/schweiger.png",
    alt: "Schweiger",
    class: "h-10 md:h-14 w-auto object-contain",
  },
  {
    src: "/assets/images/clients/echelon.png",
    alt: "Echelon",
    class: "h-9 md:h-12 w-auto object-contain",
  },
  {
    src: "/assets/images/clients/yesyoucan.png",
    alt: "Yes You Can",
    class: "h-10 md:h-14 w-auto object-contain",
  },
  {
    src: "/assets/images/clients/dietdirect.png",
    alt: "Diet Direct",
    class: "h-8 md:h-10 w-auto object-contain",
  },
  {
    src: "/assets/images/clients/alpha.png",
    alt: "Alpha",
    class: "h-10 md:h-14 w-auto object-contain",
  },
  {
    src: "/assets/images/clients/fifty410.png",
    alt: "Fifty 410",
    class: "h-9 md:h-12 w-auto object-contain",
  },
  {
    src: "/assets/images/clients/skinclique.png",
    alt: "Skin Clique",
    class: "h-9 md:h-12 w-auto object-contain",
  },
  {
    src: "/assets/images/clients/medvi.png",
    alt: "Medvi",
    class: "h-4 md:h-8 w-auto object-contain",
  },
];
</script>
