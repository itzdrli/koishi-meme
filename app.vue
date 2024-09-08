<template>
  <div class="min-h-screen flex flex-col bg-ctp-base">
    <main class="flex-grow container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8 text-ctp-text">Koishi Memes</h1>
      <GalleryGrid :images="shuffledImages" @open-image="openImage" />
      <ImageModal v-if="selectedImage" :image="selectedImage" @close="closeImage" />
    </main>
    <footer class="bg-ctp-surface0 text-ctp-text py-4">
      <div class="container mx-auto px-4 text-center">
        <p></p>
        <p class="mt-2">
          <a href="https://github.com/itzdrli/koishi-meme" target="_blank" rel="noopener noreferrer"
            class="hover:underline">
            GitHub
          </a> | <a href="https://t.me/koimemes" target="_blank" rel="noopener noreferrer" class="hover:underline">
            Telegram 频道
          </a> | <a href="https://koishi.chat" target="_blank" rel="noopener noreferrer" class="hover:underline">
            Koishi 官网
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { shuffleArray } from '~/utils/random'
import GalleryGrid from './components/GalleryGrid.vue'
import ImageModal from './components/ImageModal.vue'

const { data: images } = await useFetch('/api/images')
const shuffledImages = ref(shuffleArray(images.value || []))
const selectedImage = ref<string | null>(null)

const openImage = (image: string) => {
  selectedImage.value = image
  updateUrl(image)
}

const closeImage = () => {
  selectedImage.value = null
  updateUrl(null)
}

const updateUrl = (image: string | null) => {
  if (image) {
    history.pushState(null, '', `?image=${encodeURIComponent(image)}`)
  } else {
    history.pushState(null, '', window.location.pathname)
  }
}

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  const imageParam = urlParams.get('image')
  if (imageParam && images.value?.includes(imageParam)) {
    openImage(imageParam)
  }
})
</script>