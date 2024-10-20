<template>
  <div ref="gallery" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mx-auto">
    <div v-for="(image, index) in visibleImages" :key="image" class="mb-6 break-inside-avoid"> 
      <div class="bg-ctp-surface0 rounded-lg overflow-hidden shadow-lg transition-transform duration-200 hover:scale-125 h-full flex flex-col">
        <div class="flex-grow flex items-center justify-center p-2">
          <img
            :src="`/meme/${image}`"
            :alt="getImageTitle(image)"
            class="max-w-full max-h-full object-contain cursor-pointer"
            @click="$emit('open-image', image)"
            @load="() => onImageLoad(index)"
          />
        </div>
        <div v-if="imageLoadStatus[index]" class="px-2 py-1 text-center text-sm truncate bg-ctp-surface0 text-ctp-text mt-auto">
          # {{ getImageTitle(image) }}
        </div>
      </div>
    </div>
    <div ref="sentinel" class="h-px w-full"></div>
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps<{
  images: string[]
}>()

const gallery = ref<HTMLDivElement | null>(null)
const sentinel = ref<HTMLDivElement | null>(null)
const visibleImages = ref<string[]>([])
const currentIndex = ref(0)
const batchSize = 20
const imageLoadStatus = ref<boolean[]>([])

const loadMoreImages = () => {
  const newBatch = props.images.slice(currentIndex.value, currentIndex.value + batchSize)
  visibleImages.value = [...visibleImages.value, ...newBatch]
  imageLoadStatus.value = [...imageLoadStatus.value, ...new Array(newBatch.length).fill(false)]
  currentIndex.value += batchSize
}

const onImageLoad = (index: number) => {
  imageLoadStatus.value[index] = true
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  loadMoreImages()
  
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && currentIndex.value < props.images.length) {
      loadMoreImages()
    }
  }, { rootMargin: '200px' })

  if (sentinel.value) {
    observer.observe(sentinel.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

watch(() => props.images, () => {
  visibleImages.value = []
  imageLoadStatus.value = []
  currentIndex.value = 0
  loadMoreImages()
}, { deep: true })

const getImageTitle = (filename: string) => {
  return filename.split('.').slice(0, -1).join('.')
}
</script>

<style scoped>
.sentinel {
  height: 1px;
  width: 100%;
}
</style>