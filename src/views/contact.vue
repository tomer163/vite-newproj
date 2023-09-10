<template>
    <div class="mx-12 mt-10">
        <div class="max-w-[500px] m-auto">
            <div v-auto-animate>
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium">
                    Email
                </span>
                <input type="email" name="email" :class="emailErrorStyle" class="mt-1 px-3 py-2 bg-white dark:bg-stone-800 border border-stone-700 placeholder-stone-500 dark:placeholder-stone-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" v-model="emailText"/>
                <span v-if="emailErrorShow" class="text-red-500">Email must include @ and .</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from'vue'

const emailText = ref('')
const emailErrorShow = computed(()=>{
    if(emailText.value != ''){
        if (!(emailText.value.includes("@"))){
            return true
        }
    }
    return false
})
const emailErrorStyle = computed(()=>{
    if(emailErrorShow.value == true){
        return 'border-red-500'
    }
    return ''
})
</script>