<script setup>
import { ref } from 'vue'

const props = defineProps({
  page: {
    type: Object,
    default: {}
  },
  currentPage: Number,
});

const show = ref(true)
</script>

<template>
  <Transition name="fade">
    <h1 v-if="show">{{ page.title }}</h1>
  </Transition>
  <p @click="show=!show; console.log(title)">{{ page.content }}</p>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
