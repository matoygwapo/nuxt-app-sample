import {useMessagesStore} from '@/stores/messages'
import type {Pinia} from 'pinia'

export default defineNuxtPlugin(async (nuxtApp) => {
    const messageStore = useMessagesStore(nuxtApp.$pinia as Pinia) 
  
     await messageStore.fetchSSR();
  })

