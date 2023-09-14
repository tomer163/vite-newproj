<template>
    <div class="mx-12 mt-10">
        <div class="max-w-[800px] m-auto dark:text-stone-500">
            <div class="grid phone-side:grid-cols-3 gap-10">
                <div class="phone-side:col-span-3 ">
                    <textInput :hasError="emailErrorShow" v-model="emailText">Email</textInput>
                    <div :class="emailErrorShow ? 'opcacity-100':'opacity-0'" class="text-red-500 ml-2 mt-2 transition select-none">* Invalid Email Address.</div>
                </div>
                <div>
                    <textInput v-model="titleText">Title</textInput>
                </div>
                <div class="phone-side:col-span-2">
                    <textInput :hasError="contentErrorShow" v-model="contentText">Content</textInput>
                    <div class="ml-3 mt-1 text-sm dark:text-stone-700 text-stone-400 select-none">{{ contentCharCount }}</div>
                    <div :class="contentErrorShow ? 'opcacity-100':'opacity-0'" class="ml-2 mt-2 text-red-500 ml-2 mt-2 transition select-none">* Character amount exceeded.</div>
                </div>
            </div>
        </div>
        <div>hello</div>
    </div>
</template>

<script setup>
import textInput from '../components/textInput.vue'
import { computed, ref, } from'vue'

const emailText = ref('')
const titleText = ref('')
const contentText = ref('')

const emailErrorShow = computed(()=>{
    if(emailText.value != ''){
        if (!(emailText.value.includes("@")) || !(emailText.value.includes("."))){
            return true
        }
    }
    return false
})

const contentCharCount = computed(()=>{
    return contentText.value.length + '/500'
})

const contentErrorShow = computed(()=>{
    if(contentText.value.length > 500){
        return true
    }
    return false
})
</script>