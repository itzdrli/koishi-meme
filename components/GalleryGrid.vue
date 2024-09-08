<template>
  <div ref="gallery" class="columns-1 sm:columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-20 mx-auto">
    <div v-for="image in visibleImages" :key="image" class="mb-6 break-inside-avoid">
      <div class="bg-ctp-overlay0 rounded-lg overflow-hidden shadow-lg transition-transform duration-200 hover:scale-150">
        <img
          :src="`/meme/${image}`"
          :alt="getImageTitle(image)"
          class="w-full h-auto cursor-pointer"
          @click="$emit('open-image', image)"
          @load="onImageLoad"
        />
        <div class="px-2 py-1 text-center text-sm truncate bg-ctp-surface0 text-ctp-text"># {{ getImageTitle(image) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  images: string[]
}>()

const gallery = ref<HTMLDivElement | null>(null)
const visibleImages = ref<string[]>([])
const currentIndex = ref(0)
const batchSize = 20

const loadMoreImages = () => {
  const newBatch = props.images.slice(currentIndex.value, currentIndex.value + batchSize)
  visibleImages.value.push(...newBatch)
  currentIndex.value += batchSize
}

const handleScroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
    loadMoreImages()
  }
}

const onImageLoad = () => {
  // This function can remain empty as we're using CSS for layout
}

onMounted(() => {
  loadMoreImages();
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const getImageTitle = (filename: string) => {
  return filename.split('.').slice(0, -1).join('.')
}
</script>