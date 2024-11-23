import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMessagesStore = defineStore('messages',()=>{
    // state
    const csrMessage = ref<MESSAGE[]>([])
    const ssrMessage : Ref<MESSAGE[]> = ref([])

    // getters
    const get_csrMessage = computed(()=>csrMessage.value)
    const get_ssrMessage = computed(()=>ssrMessage.value)

    // functions
    const fetchCSR = async():Promise<void> =>{
        const response = [
            {id:1,message:'This is a client side rendered message'}
        ]
        csrMessage.value = response
    }

    const fetchSSR = async():Promise<void> =>{
        const response = [
            {id:1,message:'This is a server side rendered message'}
        ]
        ssrMessage.value = response
    }


    return {
        get_csrMessage,get_ssrMessage,fetchCSR,fetchSSR

    }

})

export type MessagesStore = ReturnType<typeof useMessagesStore>