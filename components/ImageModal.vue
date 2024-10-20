<template>
  <div class="fixed inset-0 bg-ctp-base bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50" @click="$emit('close')">
    <div class="bg-ctp-surface0 bg-opacity-90 rounded-lg overflow-hidden max-w-4xl max-h-[90vh] flex flex-col md:flex-row shadow-xl" @click.stop>
      <div class="p-4 md:w-1/3 flex flex-col justify-center items-center">
        <h2 class="text-xl font-bold text-center text-ctp-text mb-4"># {{ title }}</h2>
        <button 
          @click="copyImageLink" 
          class="bg-ctp-surface1 text-ctp-text px-4 py-2 rounded hover:bg-ctp-surface2 transition duration-300"
        >
          复制链接
        </button>
        <span v-if="copied" class="text-ctp-green mt-2 text-sm">链接已复制！</span>
      </div>
      <div class="p-4 md:w-2/3 flex items-center justify-center">
        <img :src="`/meme/${image}`" :alt="title" class="max-w-full max-h-[70vh] object-contain" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  image: string
}>()

const title = computed(() => {
  return props.image.split('.').slice(0, -1).join('.')
})

const emit = defineEmits(['close'])

const copied = ref(false)

const copyImageLink = () => {
  const encodedImage = encodeURIComponent(props.image)
  const link = `${window.location.origin}/meme/${encodedImage}`
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(link).then(() => {
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2000)
    }).catch(err => {
      console.error('无法复制链接: ', err)
      fallbackCopyTextToClipboard(link)
    })
  } else {
    fallbackCopyTextToClipboard(link)
  }
}

const fallbackCopyTextToClipboard = (text: string) => {
  const textArea = document.createElement("textarea")
  textArea.value = text
  textArea.style.position = "fixed"  // 避免滚动到底部
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    const successful = document.execCommand('copy')
    if (successful) {
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2000)
    } else {
      console.error('复制失败')
    }
  } catch (err) {
    console.error('复制失败: ', err)
  }

  document.body.removeChild(textArea)
}
</script>
