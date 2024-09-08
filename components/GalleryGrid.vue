<template>
  <div ref="gallery" class="ml-200 gallery-grid">
    <div v-for="image in visibleImages" :key="image" class="gallery-item bg-gray-100 rounded-lg overflow-hidden shadow-lg">
      <img
        :src="`/meme/${image}`"
        :alt="getImageTitle(image)"
        class="w-full h-auto cursor-pointer transition-transform duration-300 hover:scale-105"
        @click="$emit('open-image', image)"
        @load="onImageLoad"
      />
      <div class="px-2 py-1 text-center text-sm truncate bg-ctp-surface0 text-ctp-text"># {{ getImageTitle(image) }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps<{
  images: string[]
}>()

const gallery = ref<HTMLDivElement | null>(null)
const visibleImages = ref<string[]>([])
const currentIndex = ref(0)
const batchSize = 20
const columnWidth = 250
const margin = 55

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
  nextTick(() => {
    updateLayout()
  })
}

const updateLayout = () => {
  if (!gallery.value) return
  
  const items = gallery.value.children
  const containerWidth = gallery.value.offsetWidth
  const columns = Math.floor((containerWidth + margin) / (columnWidth + margin))
  const columnHeights = new Array(columns).fill(0)

  for (let i = 0; i < items.length; i++) {
    const item = items[i] as HTMLElement
    const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights))
    
    item.style.position = 'absolute'
    item.style.width = `${columnWidth}px`
    item.style.left = `${shortestColumn * (columnWidth + margin)}px`
    item.style.top = `${columnHeights[shortestColumn]}px`

    columnHeights[shortestColumn] += item.offsetHeight + margin
  }

  gallery.value.style.height = `${Math.max(...columnHeights)}px`
}

onMounted(() => {
  loadMoreImages();
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', updateLayout);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', updateLayout);
});

const getImageTitle = (filename: string) => {
  return filename.split('.').slice(0, -1).join('.')
}
</script>

<style scoped>
.gallery-grid {
  position: relative;
  width: 100%;
}

.gallery-item {
  position: absolute;
  transition: all 0.3s ease;
  margin-bottom: 200px;
}
</style>
