<template>
    <canvas id="canvas" width="1200" height="800" style="border:1px solid grey"></canvas>
</template>

<script setup>
import { ref, onMounted} from 'vue'

onMounted(() => {
    let canvas = document.getElementById("canvas")
    let ctx = canvas.getContext('2d')

    let pHeight = 100

    let v0y = 6
    let v0x = 5
    let vx = 0
    let vxnew = 0
    let y = canvas.height - pHeight
    let x =0
    let newx = 0
    let ty=0
    let tx1=0
    let tx2=0

    let stopRightSpeed = false

    ctx.fillRect(0, y, 50, pHeight)
    function jump() {
        ctx.clearRect(0,0, canvas.width, canvas.height)
        ctx.fillRect(x, y, 50, pHeight)
        y=canvas.height - pHeight-(v0y*ty)+(ty*ty*0.09)
        ty+=1
        const myreq = requestAnimationFrame(jump)
        if(y > canvas.height - pHeight){
            ctx.clearRect(0,0, canvas.width, canvas.height)
            ctx.fillRect(x, canvas.height - pHeight, 50, pHeight)
            v0y = 6
            y = canvas.height - pHeight
            ty=0
            cancelAnimationFrame(myreq)
        }
    }

    function moveRight(){
        ctx.clearRect(0,0, canvas.width, canvas.height)
        ctx.fillRect(x, y, 50, pHeight)
        x=newx+(v0x*tx1)
        tx1+=1
        console.log('place: ' + x)
        console.log('speed: ' + v0x)
        const myreq3 = requestAnimationFrame(moveRight)
        if (stopRightSpeed){
            newx=x
            vx=v0x
            cancelAnimationFrame(myreq3)
            moveRightSlow()
            return
        }
    }

    function moveRightSlow(){
        ctx.clearRect(0,0, canvas.width, canvas.height)
        ctx.fillRect(x, y, 50, pHeight)
        x=newx+(vx*tx2)-(tx2*tx2*0.035)
        vxnew=vx-(0.07*tx2)
        tx2+=1
        console.log('place: ' + x)
        console.log('speed: ' + vxnew)
        //console.log(vxnew)
        //console.log(tx2)
        //console.log(x)
        const myreq2 = requestAnimationFrame(moveRightSlow)
        if(vxnew < 0){
            ctx.clearRect(0,0, canvas.width, canvas.height)
            ctx.fillRect(x, y, 50, pHeight)
            v0x = 5
            vx=0
            tx1 = 0
            tx2 = 0
            vxnew = 0
            newx=x
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