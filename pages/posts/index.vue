<template>
    <div>
        <div class="page-wrapper">
            <div class="page-content">
                <h1 style="text-align: center;">{{ message }}</h1>
                <h1 style="text-align: center;">{{ csrMessage }}</h1>
                <h1 style="text-align: center;">{{ ssrMessage }}</h1>
                <PagesHeader/>
                <PagesAddPost/>
                <PagesPosts :posts="posts"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {usePostsStore, type PostsStore} from '@/stores/posts'
import {useMessagesStore,type MessagesStore} from '@/stores/messages'

const postStore : PostsStore = usePostsStore();
const messageStore : MessagesStore = useMessagesStore();

const message = ref(postStore.get_message)
const posts : Ref<POSTS[]>   = ref(postStore.get_posts)

const csrMessage : Ref<MESSAGE[]> = ref(messageStore.get_csrMessage)
const ssrMessage = ref<MESSAGE[]>(messageStore.get_ssrMessage)

// another way to declare type in ref hook
const postsv2 = ref<POSTS[]>(postStore.get_posts)

</script>
