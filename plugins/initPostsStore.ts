import {usePostsStore, type PostsStore} from '@/stores/posts'
import type {Pinia} from 'pinia'

export default defineNuxtPlugin(async (nuxtApp) => {
    const postsStore : PostsStore = usePostsStore(nuxtApp.$pinia as Pinia) 
  
     await postsStore.fetchPost();
  })

