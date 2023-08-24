<template>
    <div :class="theme">
        <h1>hi</h1>
        <a v-if="pages.length>0" v-for="page in pages" :href="page.link">{{ page.title }}</a>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const theme = ref('dark')
const pages = ref([
    {
        title:"hi",
        link: "https://www.youtube.com",
    },
    {
        title:"yo",
        link:"https://google.com",
    }
])
</script>

<style scoped>
div{
    height: 50px;
    display: flex;
    align-items: center;
}
.dark {
    color:white;
    background-color:black;
}
.light {
    color:black;
    background-color: white;
}
</style>