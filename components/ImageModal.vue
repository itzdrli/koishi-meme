<template>
  <div class="modal-overlay" @click="$emit('close')">
    <div class="modal-content" @click.stop>
      <div class="image-info">
        <h2 class="image-title text-ctp-text">{{ title }}</h2>
      </div>
      <div class="image-container bg-ctp-base">
        <img :src="`/meme/${image}`" :alt="title" class="modal-image" />
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

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  display: flex;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  max-width: 90vw;
  max-height: 80vh;
}

.image-info {
  width: 30%;
  padding: 20px;
  background-color: #181825;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.image-title {
  font-size: 1.5em;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
}

.share-button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.share-button:hover {
  background-color: #45a049;
}

.image-container {
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>