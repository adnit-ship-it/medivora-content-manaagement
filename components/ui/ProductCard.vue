<template>
  <div
    class="w-[250px] lg:w-[340px] h-[295px] md:h-[340px] lg:h-[400px] bg-accentColor2 flex flex-col justify-end items-center relative cursor-pointer hover:shadow-lg transition-shadow"
    @click="handleClick"
  >
    <!-- Best Seller Flag -->
    <div v-if="isBestSeller" class="absolute top-3 left-3 z-10">
      <span
        class="text-black text-[12px] lg:text-[14px] rounded-full bg-[#FAFAFA] px-4 py-0.5 font-medium"
      >
        Best Seller
      </span>
    </div>

    <!-- Product Image -->
    <img
      :src="imageSrc"
      :alt="imageAlt"
      class="max-h-full max-w-full object-cover"
    />

    <!-- Product Info Bar -->
    <div
      class="w-full h-6 md:h-[30px] text-[12px] flex justify-between items-center px-2 md:px-4 bg-accentColor1 text-white"
    >
      <p class="">{{ productName }}</p>
      <p class="">{{ price }}</p>
    </div>
  </div>
</template>

<script setup>
// Define props for the component
const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  isBestSeller: {
    type: Boolean,
    default: false,
  },
});

// Define emits
const emit = defineEmits(["click"]);

// Handle click event
const handleClick = () => {
  emit("click", {
    imageSrc: props.imageSrc,
    productName: props.productName,
    price: props.price,
    isBestSeller: props.isBestSeller,
  });
};
</script>

<style scoped>
/* Component styles can be added here */
</style>
