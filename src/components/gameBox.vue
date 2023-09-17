<template>
    <canvas id="canvas" width="1200" height="800" style="border:1px solid grey"></canvas>
    <button @click.prevent="jump()">f</button>
</template>

<script setup>
import { ref, onMounted} from 'vue'

onMounted(() => {
    let canvas = document.getElementById("canvas")
    let ctx = canvas.getContext('2d')

    let pHeight = 100

    let v0y = 12
    let v0x = 0
    let vx = 0
    let vxnew = 0
    let y = canvas.height - pHeight
    let x =0
    let ty=0
    let tx1=0
    let tx2=0

    let stopRightSpeed = false

    ctx.fillRect(0, y, 50, pHeight)
    function jump() {
        const myreq = requestAnimationFrame(jump)
        ctx.clearRect(0,0, canvas.width, canvas.height)
        ctx.fillRect(x, y, 50, pHeight)
        y=y-(v0y*ty)+(ty*ty*12)
        ty+=0.01
        if(y > canvas.height - pHeight){
            ctx.clearRect(0,0, canvas.width, canvas.height)
            ctx.fillRect(x, canvas.height - pHeight, 50, pHeight)
            v0y = 12
            y = canvas.height - pHeight
            ty=0
            cancelAnimationFrame(myreq)
        }
    }

    function moveRight(){
        const myreq3 = requestAnimationFrame(moveRight)
        ctx.clearRect(0,0, canvas.width, canvas.height)
        ctx.fillRect(x, y, 50, pHeight)
        x=x+(tx1*tx1*2)
        vx=(4*tx1)
        tx1+=0.01
        console.log(vx)
        console.log(tx1)
        if (stopRightSpeed){
            moveRightSlow()
            cancelAnimationFrame(myreq3)
        }
    }

    function moveRightSlow(){
        const myreq2 = requestAnimationFrame(moveRightSlow)
        ctx.clearRect(0,0, canvas.width, canvas.height)
        ctx.fillRect(x, y, 50, pHeight)
        x=x+(vx*tx2)-(tx2*tx2*2)
        vxnew=vx-(4*tx2)
        tx2+=0.01
        console.log(vxnew)
        console.log(tx2)
        if(vxnew < 0){
            ctx.clearRect(0,0, canvas.width, canvas.height)
            ctx.fillRect(x, canvas.height - pHeight, 50, pHeight)
            v0x = 0
            vx=0
            tx1 = 0
            tx2=0
            vxnew = 0
            cancelAnimationFrame(myreq2)
        }

    }
    document.addEventListener("keypress", (e)=>{
        if(e.key == 'w'){
            jump()
        }
    })
    document.addEventListener("keydown", (e)=>{
        stopRightSpeed = false
        if (e.repeat) return
        if(e.key == 'd'){
            console.log('yo')
            moveRight()
        }
    })
    document.addEventListener("keyup", (e)=>{
        if(e.key == 'd'){
            stopRightSpeed = true
        console.log('hi')
        }
    })
})


</script>