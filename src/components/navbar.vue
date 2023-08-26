<template>
    <div class="container" :class="theme">
        <h1>My Website!</h1>
        <a v-for="(page , index) in pages" @click="$emit('updateParentValue', index)">{{ page.buttonName }}</a>
        <div style="display:flex; flex-grow:1;"></div>
        <button @click.prevent="theme == 'light' ? theme = 'dark' : theme = 'light'"><font-awesome-icon icon="fa-solid fa-sun" size="1x"  /> toggle colorscheme</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    pages:{
        type: Array,
        defalult: [], 
    },
})
const theme = ref("light")
</script>

<style scoped>
a{
    color:inherit;
    margin-right:5px;
    margin-left:5px;
    cursor:pointer;
}
.container{
    height:50px;
    display: flex;
    align-items: center;
}
.dark {
    color:rgb(255, 255, 255);
    border-color:rgb(255, 255, 255);
    background-color:black;
}
.light {
    color:black;
    border-color:black;
    background-color: rgb(238, 238, 238);
}
</style>