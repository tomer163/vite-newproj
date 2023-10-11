<template>
    <div class="mx-5 mb-5">
        <div class="max-w-[500px] m-auto items-center flex flex-col gap-5">
            <h1 class="text-center text-xl">give products</h1>
            <div class="relative w-full">
                <textInput v-model="hi" :hasError="Error" @keyup.enter="subfunc">enter product name</textInput>
                <button class="top-0 right-0 h-full absolute bg-red-500 px-3 py-1 rounded-r-full text-lg text-white" @click="subfunc">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="text-center bg-red-200 border-red-500 border max-w-[500px] m-auto font-bold rounded-xl mt-52 p-3" v-if="Error">products not found!</div>
        <div class="flex flex-wrap mt-5">
            <div v-for="product in jsonData" class="basis-[100%] phone:basis-1/2 phone-side:basis-1/4 tablet:basis-1/6">
                <div class="bg-stone-300 flex aspect-[3/5] flex-col items-center gap-1 rounded-lg m-2">
                    <span>{{ product.title }}</span>
                    <img :src="product.images[0]" class="w-[90%]">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
//import checkList from '../components/checklist.vue'
import textInput from '../components/textInput.vue'
import axios from 'axios'
import { ref } from 'vue'

const hi = ref('')
const jsonData = ref([])
const Error = ref(false)

const subfunc = async ()=>{
    try{
        const result = await axios.get(`http://localhost:8081/api/products?search=${hi.value}`)
        if(!result.data.message){
            Error.value=false
            jsonData.value = result.data
            hi.value=''
        }
        else{
            Error.value=true
            jsonData.value = []
        }
    }
    catch(err){
        console.log(err)
    }
}

</script>