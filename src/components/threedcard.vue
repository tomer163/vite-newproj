<template>
    <div style="perspective:900px;">
        <div :style="{ transform: cardTransform }"
            class="aspect-video select-none bg-stone-200 dark:bg-stone-800 rounded-lg text-inherit cursor-pointer transition-all opacity-80 hover:opacity-100 duration-200 ease-out m-auto"
            ref="target">
            <slot/>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
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