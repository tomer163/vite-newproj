<template>
    <div :class="theme">
        <h1>hi</h1>
        <a v-if="pages.length>0" v-for="page in pages" :href="page.link">{{ page.title }}</a>
        <button @click.prevent="theme == 'light' ? theme = 'dark' : theme = 'light'">hi</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const theme = ref("light")
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
a{
    color:inherit;
    margin-right:5px;
    margin-left:5px;
}
div{
    height: 50px;
    display: flex;
    align-items: center;
}
.dark {
    color:rgb(255, 255, 255);
    background-color:black;
}
.light {
    color:black;
    background-color: rgb(212, 212, 212);
}
</style>