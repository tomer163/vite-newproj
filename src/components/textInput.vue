<template>
    <div class="relative dark:text-stone-500 text-stone-500">
        <span :class="hasError ? 'text-red-500' : focused ? 'text-sky-500' : '' , focused ? '-translate-y-2 translate-x-8 text-sm' : modelValue == '' ? 'translate-y-3 translate-x-6' : '-translate-y-2 translate-x-8 text-sm'" class="absolute select-none pointer-events-none rounded-full dark:bg-stone-900 bg-stone-100 px-1 transition-all ease-out">
            <slot/>
        </span>
        <input ref="target" type="text" @input="$emit('update:modelValue', $event.target.value)" :value="modelValue" :class="hasError ? 'border-red-500': focused ? 'border-sky-500' : 'dark:border-stone-700 border-stone-500'" class="text-stone-400 px-5 py-2 bg-inherit border focus:outline-none block w-full h-[48px] rounded-full transition-all ease-out"/>
    </div>
</template>

<script setup>
import { ref } from'vue'
import { useFocus } from '@vueuse/core'

const props = defineProps({
    hasError: Boolean,
    modelValue: String
})

const emit = defineEmits(['update:modelValue'])


const target = ref()
const { focused } = useFocus(target)
</script>