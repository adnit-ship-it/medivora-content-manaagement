<template>
  <nav :class="[
    'w-full fixed top-0 z-50 flex justify-center shadow-lg',
    props.color || 'bg-white'
  ]">
    <div v-motion :initial="{ opacity: 0.3, y: 8 }" :visible-once="{
      opacity: 1,
      y: 0,
      transition: {
        duration: 400,
        type: 'ease-in',
        stiffness: 250,
        damping: 25,
        mass: 1,
      },
    }" :class="[
      'lg:max-w-[1328px] w-full flex justify-center px-4 md:px-8 pb-2 md:pb-0',
      'h-[83px] lg:h-[68px]',
      props.hideNavigation ? 'justify-center' : 'justify-between',
    ]">
      <!-- Mobile hamburger menu on the left -->
      <button v-if="!props.hideNavigation" class="md:hidden rounded" aria-label="Toggle mobile menu"
        @click="toggleMobileMenu">
        <img src="/assets/images/hamburger-menu.svg" alt="Menu" class="h-4 w-4" />
      </button>

      <!-- Logo on center-->
      <div class="flex items-center">
        <NuxtLink to="/">
          <img 
            :src="logoUrl || '/assets/images/brand/logo.svg'" 
            :alt="`${organizationName || 'Brand'} Logo`" 
            class="w-auto h-[24px] md:h-[28px]" 
          />
        </NuxtLink>
      </div>
      <div class="flex items-center gap-10">

        <!-- Navigation links in middle -->
        <div v-if="!props.hideNavigation" class="hidden md:flex items-center gap-8">
          <NuxtLink to="/about">
            <p class="text-black text-lg font-medium">{{ navigation?.about || 'About' }}</p>
          </NuxtLink>
          <NuxtLink to="/contact">
            <p class="text-black text-lg font-medium">{{ navigation?.contact || 'Contact' }}</p>
          </NuxtLink>
          <NuxtLink to="/products">
            <p class="text-black text-lg font-medium">{{ navigation?.product || 'Product' }}</p>
          </NuxtLink>
        </div>

        <!-- Get Started button on right -->
        <div v-if="!props.hideNavigation" class="flex flex-row items-center md:gap-3 relative">
          <NuxtLink to="/consultation">
            <UiButton width="176px" height="32px" font-size="20">
              {{ buttons?.getStarted || 'Get Started' }}
            </UiButton>
          </NuxtLink>

          <!-- Mobile dropdown menu -->
          <div v-if="isMobileMenuOpen"
            class="lg:hidden absolute top-full right-36 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <div class="py-2">
              <NuxtLink to="/about" class="block px-4 py-2 text-black text-lg font-medium hover:bg-gray-100"
                @click="closeMobileMenu">
                {{ navigation?.about || 'About' }}
              </NuxtLink>
              <NuxtLink to="/contact" class="block px-4 py-2 text-black text-lg font-medium hover:bg-gray-100"
                @click="closeMobileMenu">
                {{ navigation?.contact || 'Contact' }}
              </NuxtLink>
              <NuxtLink to="/products" class="block px-4 py-2 text-black text-lg font-medium hover:bg-gray-100"
                @click="closeMobileMenu">
                {{ navigation?.product || 'Product' }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useSiteTextStore } from "~/stores/siteText";
import { useBrandLogos } from "~/utils/branding";

const siteTextStore = useSiteTextStore();
const { logoUrl, organizationName } = useBrandLogos();

// Destructure site text sections
const navigation = computed(() => siteTextStore.getCommonText()?.navigation);
const buttons = computed(() => siteTextStore.getCommonText()?.buttons);

// Define the color prop with a default value of 'bg-white'
const props = defineProps({
  color: {
    type: String,
    default: "bg-white",
  },
  hideNavigation: {
    type: Boolean,
    default: false,
  },
});

// Mobile detection
const isMobile = ref(false);

// Mobile menu state
const isMobileMenuOpen = ref(false);

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Close mobile menu when clicking outside
const handleClickOutside = (event) => {
  if (isMobileMenuOpen.value && !event.target.closest("nav")) {
    closeMobileMenu();
  }
};

// Check mobile on mount and resize
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

// Add click outside listener
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  window.removeEventListener("resize", checkMobile);
});
</script>

<style scoped>
/* Custom styles if needed */
</style>
