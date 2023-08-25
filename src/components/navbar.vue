<template>
    <div class="container" :class="theme">
        <h1>My Website!</h1>
        <a v-if="pages.length > 0" v-for="(page , index) in pages" @click="$emit('updateParentValue', index)">{{ page.buttonName }}</a>
        <div style="display:flex; flex-grow:1;"></div>
        <button @click.prevent="theme == 'light' ? theme = 'dark' : theme = 'light'">toggle colorscheme</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    pages: Array,
})
const theme = ref("light")
</script>

<style scoped>
a{
    color:inherit;
    margin-right:5px;
    margin-left:5px;
}
.container{
    height:50px;
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