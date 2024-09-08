<template>
  <div class="fixed inset-0 bg-ctp-base bg-opacity-70 flex justify-center items-center z-50" @click="$emit('close')">
    <div class="bg-white rounded-lg overflow-hidden max-w-4xl max-h-[90vh] flex flex-col md:flex-row" @click.stop>
      <div class="bg-ctp-surface0 p-4 md:w-1/3 flex flex-col justify-center items-center">
        <h2 class="text-xl font-bold text-center text-ctp-text"># {{ title }}</h2>
      </div>
      <div class="bg-ctp-base p-4 md:w-2/3 flex items-center justify-center">
        <img :src="`/meme/${image}`" :alt="title" class="max-w-full max-h-[70vh] object-contain" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string
}>()

const title = computed(() => {
  return props.image.split('.').slice(0, -1).join('.')
})

const emit = defineEmits(['close'])
</script>