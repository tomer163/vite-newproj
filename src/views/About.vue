<template>
    <div class="mx-12">
        <div class=" relative w-full tablet:max-w-[945px] max-w-[400px] m-auto my-10">
            <div class="grid tablet:grid-cols-2 grid-cols-1 gap-10 ">
                <div class="text-center tablet:text-left">
                    <h1 class="text-4xl mb-4">My name is Tomer.</h1>
                    <p class="text-xl">I am a Website developer</p>
                </div>
                <threedcard>
                    <div class="p-10">
                        <h1 class="text-4xl font-bold mb-3">Hello</h1>
                        <p>my name is paul and i like milk</p>
                    </div>
                </threedcard>
            </div>
        </div>
        <div class=" relative w-full tablet:max-w-[1800px] m-auto my-10">
            <div class="grid tablet:grid-cols-3 grid-cols-1 gap-[80px] tablet:text-center texet-left">
                <h1>one</h1>
                <h1>two</h1>
                <h1>three</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import threedcard from '../components/3dcard.vue'
</script>