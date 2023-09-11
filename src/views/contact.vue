<template>
    <div class="mx-12 mt-10">
        <div class="max-w-[800px] m-auto dark:text-stone-500 text-stone">
            <div class="grid phone-side:grid-cols-3 gap-10">
                <div class="phone-side:col-span-3 ">
                    <span :class="emailFocused ? 'text-sky-500' : emailErrorShow ? 'text-red-500' : ''" class="relative top-4 left-6 text-sm dark:bg-stone-900 bg-stone-100 px-1">
                        Email
                    </span>
                    <input ref="emailTarget" type="email" name="email" :class="emailErrorShow ? 'border-red-500' : 'border-stone-700'" class="mt-1 px-5 py-2 bg-inherit border focus:outline-none focus:ring-none focus:border-sky-500 block w-full h-[48px] rounded-full sm:text-sm" placeholder="" v-model="emailText"/>
                    <span v-if="emailErrorShow" class="text-red-500 ml-5">* Invalid Email Address.</span>
                </div>
                <div>
                    <span :class="titleFocused ? 'text-sky-500' : ''" class="relative top-4 left-6 text-sm dark:bg-stone-900 bg-stone-100 px-1">
                        Title
                    </span>
                    <input ref="titleTarget" type="text" name="title" class="border-stone-700 mt-1 px-5 py-2 bg-inherit border focus:outline-none focus:ring-none focus:border-sky-500 block w-full h-[48px] rounded-full sm:text-sm" v-model="title"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, } from'vue'
import { useFocus } from '@vueuse/core'

const emailTarget = ref()
const titleTarget = ref()
const { focused: emailFocused } = useFocus(emailTarget)
const { focused: titleFocused } = useFocus(titleTarget)

const emailText = ref('')
const title = ref('')

const emailErrorShow = computed(()=>{
    if(emailText.value != ''){
        if (!(emailText.value.includes("@")) || !(emailText.value.includes("."))){
            return true
        }
    }
    return false
})
</script>