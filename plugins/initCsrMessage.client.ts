import {useMessagesStore,type MessagesStore} from '@/stores/messages'
import type {Pinia} from 'pinia'

export default defineNuxtPlugin(async (nuxtApp) => {
    const messageStore : MessagesStore = useMessagesStore(nuxtApp.$pinia as Pinia) 
  
     await messageStore.fetchCSR();
  })

