<template>
  <UiSectionWrapper class="relative text-black pt-32 pb-52">
    <!-- Background Image -->
    <div class="absolute inset-0 bg-cover bg-no-repeat w-full h-full" style="
        background-image: url(&quot;/assets/images/brand/hero-bg.png&quot;);
        background-position: bottom right;
      " />

    <!-- Hand Vial Image - Bottom Right -->
    <div class="absolute bottom-0 right-0 z-20 h-[222px] flex items-end justify-end md:h-[480px] lg:h-[600px]">
      <img v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 500,
          type: 'ease-in',
          stiffness: 250,
          damping: 25,
          mass: 1,
        },
      }" src="/assets/images/brand/hero-img.png" alt="Hand holding vial" class="h-full w-auto object-contain" />
    </div>

    <!-- Content - Single Column -->
    <UiSectionContainer class="relative z-30 h-full">
      <div class="space-y-2 md:space-y-4 lg:space-y-10 flex flex-col h-full">
        <div class="w-[150px] md:w-[365px]">
          <img v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 500,
              type: 'ease-in',
              stiffness: 250,
              damping: 25,
              mass: 1,
            },
          }" 
            :src="logoUrl || '/assets/images/brand/logo.svg'" 
            class="h-full w-full object-cover" 
            :alt="`${organizationName || 'Brand'} Logo`" 
          />
        </div>
        
        <h1 v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 500,
            type: 'ease-in',
            stiffness: 250,
            damping: 25,
            mass: 1,
            delay: 50,
          },
        }" class="text-2xl md:text-3xl lg:text-[48px] font-bold text-accentColor1 font-defaultSerif">
          {{ hero?.heading || 'Lose weight with GLP-1 medications.' }}
        </h1>

        <h2 v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 500,
            type: 'ease-in',
            stiffness: 250,
            damping: 25,
            mass: 1,
            delay: 100,
          },
        }" class="text-lg md:text-xl lg:text-[34px] text-accentColor1">
          {{ hero?.subheading || 'Start your journey with us today!' }}
        </h2>
        
        <!-- Bullet Points -->
        <ul class="space-y-3">
          <li v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 500,
              type: 'ease-in',
              stiffness: 250,
              damping: 25,
              mass: 1,
              delay: 150,
            },
          }" class="flex items-center h-[10px] md:h-[26px]">
            <img src="/assets/images/checkmark.svg" alt="Checkmark"
              class="w-[10px] h-[10px] md:w-[26px] md:h-[26px] mr-1 md:mr-3" />
            <span class="text-[14px] md:text-[20px] lg:text-[24px] font-medium">{{ hero?.bulletPoints?.trustedByExperts || 'Trusted by experts' }}</span>
          </li>
          <li v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 500,
              type: 'ease-in',
              stiffness: 250,
              damping: 25,
              mass: 1,
              delay: 150,
            },
          }" class="flex items-center h-[10px] md:h-[26px]">
            <img src="/assets/images/checkmark.svg" alt="Checkmark"
              class="w-[10px] h-[10px] md:w-[26px] md:h-[26px] mr-1 md:mr-3" />
            <span class="text-[14px] md:text-[20px] lg:text-[24px] font-medium">{{ hero?.bulletPoints?.provenResults || 'Proven results' }}</span>
          </li>
          <li v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 500,
              type: 'ease-in',
              stiffness: 250,
              damping: 25,
              mass: 1,
              delay: 150,
            },
          }" class="flex items-center h-[10px] md:h-[26px]">
            <img src="/assets/images/checkmark.svg" alt="Checkmark"
              class="w-[10px] h-[10px] md:w-[26px] md:h-[26px] mr-1 md:mr-3" />
            <span class="text-[14px] md:text-[20px] lg:text-[24px] font-medium">{{ hero?.bulletPoints?.exceptionalCare || 'Exceptional care' }}</span>
          </li>
        </ul>

        <!-- CTA Button -->
        <div v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 500,
            type: 'ease-in',
            stiffness: 250,
            damping: 25,
            mass: 1,
            delay: 200,
          },
        }" class="flex flex-col justify-end h-[50px] mt-7 lg:mt-5">
          <NuxtLink to="/consultation">
            <UiButton :width="buttonWidth" :height="buttonHeight" :font-size="buttonFontSize" ghost>
              {{ hero?.ctaButton || 'Take the Assessment' }}
            </UiButton>
          </NuxtLink>
        </div>
      </div>
    </UiSectionContainer>
  </UiSectionWrapper>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useSiteTextStore } from "~/stores/siteText";
import { useBrandLogos } from "~/utils/branding";

const siteTextStore = useSiteTextStore();
const { logoUrl, organizationName } = useBrandLogos();

// Destructure site text sections once for this component
const hero = computed(() => siteTextStore.getHomeText()?.hero);

// Mobile detection
const isMobile = ref(false);

// Check mobile on mount and resize
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});

// Derived button sizes
const buttonWidth = computed(() => (isMobile.value ? "144px" : "320px"));
const buttonHeight = computed(() => (isMobile.value ? "20px" : "48px"));
const buttonFontSize = computed(() => (isMobile.value ? "12" : "24"));
</script>

<style scoped>
/* Custom styles if needed */
</style>
