<template>
    <div class="flex items-center px-2 h-14 dark:bg-stone-800 dark:text-white bg-stone-200 drop-shadow-lg mb-5">
        <h1 class="text-3xl">Tomer Dev</h1>
        <router-link class="m-2 hover:opacity-60" v-for="page in pages" :to="page.slug">{{ page.buttonName }}</router-link>
        <div class="grow"></div>
        <button class="w-max drop-shadow-xl flex rounded-full bg-stone-100 dark:bg-stone-900 text-inherit py-1.5 px-2.5 hover:opacity-80 hover:ease-in duration-100 transition ease-in" @click.prevent="toggleDark()">
            <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" stroke-width="2" stroke="yellow" class="hidden dark:block w-6 h-6 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="#b9d1ff" viewBox="0 0 24 24" stroke-width="1" stroke="#b9d1ff" class="dark:hidden w-6 h-6 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
            toggle colorscheme
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const props = defineProps({
    pages:{
        type: Array,
        defalult: [], 
    },
})


const theme = ref("light")
</script>

<style scoped>
</style>