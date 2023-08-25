<script setup>
import { ref } from 'vue'

const props = defineProps({
  page: Object, // Specify the prop type
});
</script>

<template>
    <h1>{{ page.title }}</h1>
</template>

<style scoped>

</style>
