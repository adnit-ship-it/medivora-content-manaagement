<template>
  <UiSectionWrapper class="flex-col">
    <!-- Heading -->
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
        },
      }" v-if="showTitle"
        class="pb-[24px] font-defaultSerif text-[20px] md:text-[28px] lg:text-[32px] font-semibold text-black md:text-left">
        {{ products?.title || 'Discover Our Products' }}
      </h2>
    </UiSectionContainer>

    <UiCardCarousel :items="productList" @item-click="openModal" />

    <!-- Product Modal -->
    <UiProductModal :is-open="isModalOpen" :product="selectedProduct" @close="closeModal" />
  </UiSectionWrapper>
</template>

<script setup>
import { ref, computed } from "vue";
import { useSiteTextStore } from "~/stores/siteText";
import { useCRMStore } from "~/stores/crmStore";

const siteTextStore = useSiteTextStore();
const crmStore = useCRMStore();

// Destructure site text sections
const products = computed(() => siteTextStore.getHomeText()?.products);

defineProps({
  showTitle: {
    type: Boolean,
    default: false,
  },
});

// Modal state
const isModalOpen = ref(false);
const selectedProduct = ref(null);

// Fallback product data
const fallbackProducts = [
  {
    id: "mounjaro-injection",
    imageSrc: "/assets/images/products/mounjaro-injection.png",
    imageAlt: "Mounjaro Injection",
    productName: "Mounjaro Injection",
    price: "$249",
    isBestSeller: false,
  },
  {
    id: "ozempic-injection",
    imageSrc: "/assets/images/products/ozempic-injection.png",
    imageAlt: "Ozempic Injection",
    productName: "Ozempic Injection",
    price: "$199",
    isBestSeller: true,
  },
  {
    id: "methylcobalamin-injection",
    imageSrc: "/assets/images/products/methylcobalamin-injection.png",
    imageAlt: "Methylcobalamin Injection",
    productName: "Methylcobalamin Injection",
    price: "$89",
    isBestSeller: false,
  },
];

// Product list - computed to use API data or fallback
const productList = computed(() => {
  const apiProducts = crmStore.getProductBundles;

  // If we have API data, transform it to match the expected format
  if (apiProducts && apiProducts.length > 0) {
    return apiProducts.map((bundle, index) => ({
      id: bundle.id,
      imageSrc: bundle.imageUrl || fallbackProducts[index % fallbackProducts.length]?.imageSrc,
      imageAlt: bundle.name || `Product ${index + 1}`,
      productName: bundle.name || `Product ${index + 1}`,
      price: bundle.price ? `$${bundle.price}` : "$0",
      isBestSeller: bundle.tag === "BEST_SELLER" || bundle.tag === "bestseller" || index === 1,
      originalBundle: bundle // Store original data for modal
    }));
  }
  
  // Fallback to hardcoded products if no API data
  return fallbackProducts;
});

// Open modal with product data
const openModal = (product) => {
  selectedProduct.value = product.originalBundle || product;
  isModalOpen.value = true;
};

// Close modal
const closeModal = () => {
  isModalOpen.value = false;
  selectedProduct.value = null;
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
