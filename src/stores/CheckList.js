import { defineStore } from 'pinia'

export const useCheckList = defineStore("CheckList", {
    state: ()=>{
        return {
            items:[]
        }
    },
    getters:{
        getItems(state){
            return state.items
        },
    },
    actions: {
        addItem(content){
            this.items.push({content:content, editflag:false, marked:false})
        },

        removeItem(index){
            this.items.splice(index,1)
        },

        toggleEditMode(index){
            this.items[index].editflag = !this.items[index].editflag
        },

        changeContent(index, content){
            this.items[index].content = content
        },

        toggleMark(index){
            this.items[index].marked = !this.items[index].marked 
        },

        getEditFlag(index){
            return (this.items[index].editflag)
        },

        getMark(index){
            return (this.items[index].marked)
        },

        getContent(index){
            return (this.items[index].content)
        },

    }
})