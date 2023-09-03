<template>
    <div style="perspective:1000px;">
        <div :style="{
            transform: cardTransform ,
            transition: 'transform ease-out 0.2s',
            }"
            class="p-2 w-80 h-80 m-auto mt-52 bg-stone-200 dark:bg-stone-800 rounded-lg text-inherit cursor-pointer"
            ref="target">
            <slot/>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'

const target = ref(null)

const { elementY, elementX, elementHeight, elementWidth, isOutside } = useMouseInElement(target)

const cardTransform = computed(() => {
    const maxRoatation = 20

    const rX = (maxRoatation / 2 - (elementY.value / elementHeight.value) * maxRoatation).toFixed(2)

    const rY = ((elementX.value / elementWidth.value) * maxRoatation - maxRoatation / 2).toFixed(2)

    return isOutside.value ? '' : `rotateY(${rY}deg) rotateX(${rX}deg)`
})
</script>

<style scoped>

</style>