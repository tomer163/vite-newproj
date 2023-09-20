<template>
    <div>
        <div class="flex">
            <textInput @keyup.enter="()=>{checkList.addItem(text); console.log(checkList.getItems); text='';}" v-model="text"/>
        </div>
        <div v-for="(item, i) in checkList.items">
            <div :class="checkList.getMark(i) ? 'text-red-500':''" class="flex">
                <span class="mr-5">{{ i+1 }}</span>
                <span v-if="!checkList.getEditFlag(i)" class="mr-5">{{ checkList.getContent(i) }}</span>
                <button v-if="!checkList.getEditFlag(i)" class="mr-5" @click="checkList.removeItem(i)">remove item</button>
                <textInput v-if="checkList.getEditFlag(i)" v-model="edittext"/>
                <button v-if="!checkList.getEditFlag(i)" class="mr-5" @click="checkList.toggleEditMode(i)">edit</button>
                <button v-if="!checkList.getEditFlag(i)" @click="checkList.toggleMark(i)">mark</button>
                <button v-if="checkList.getEditFlag(i)" @click="()=>{checkList.changeContent(i, edittext); checkList.toggleEditMode(i); edittext='';}">save</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import textInput from './textInput.vue'
import { useCheckList } from '../stores/CheckList'

const checkList = useCheckList()

const text = ref('')
const edittext = ref('')
</script>