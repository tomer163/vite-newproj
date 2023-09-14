<template>
    <div class="relative dark:text-stone-500 text-stone-500">
        <input type="text" @input="$emit('update:modelValue', $event.target.value)" :value="modelValue" :class="hasError ? 'focus:border-red-500 focus:dark:border-red-500 dark:border-red-500 border-red-500': 'dark:border-stone-700 border-stone-500'" class="peer text-stone-400 px-5 py-2 bg-inherit border focus:border-sky-500 focus:dark:border-sky-500 focus:outline-none block w-full h-[48px] rounded-full transition-all ease-out"/>
        <span :class="hasError ? 'text-red-500 dark:text-red-500 peer-focuse:text-red-500 peer-focuse:dark:text-red-500' : 'peer-focus:text-sky-500' , modelValue == '' ? '-translate-y-9 translate-x-6' : '-translate-y-14 translate-x-8 text-sm'" class="absolute select-none pointer-events-none peer-focus:-translate-y-14 peer-focus:translate-x-8 peer-focus:text-sm rounded-full dark:bg-stone-900 bg-stone-100 px-1 transition-all ease-out">
            <slot></slot>
        </span>
    </div>
</template>

<script setup>

const props = defineProps({
    hasError: {
        type: Boolean,
        default: false
    },
    modelValue: String
})

const emit = defineEmits(['update:modelValue'])
</script>