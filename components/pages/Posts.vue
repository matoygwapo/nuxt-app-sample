<template>
    <div>
        <div class="posts-wrapper">
            <div class="posts-content" v-for="post in props.posts" :key="post.id">
                <div class="items">
                    <div class="user-details">
                        <figure>
                            <img class="profile" :src="post.profile" alt="">
                        </figure>
                        <p class="name">{{ post.name }}</p>
                        <p class="sub">{{ post.sub_name }}</p>
                        <NuxtLink :to="'/posts/'+post.id">
                            See Details
                        </NuxtLink>
                    </div>
                    <div class="post-details">
                        <div class="description">
                            <p>{{ post.description }}</p>
                        </div>
                    </div>
                    <div class="post-actions">
                        <IconsComments/>
                        <IconsHeart/>
                    </div>
                    <div class="comments">
                        <div class="items" v-for="comment in post.comments" :key="comment.id">
                            <h4>{{ comment.name }}</h4>
                            <p>{{comment.comment}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['posts'])

</script>

<style lang="scss" scoped>
.posts-wrapper{
    // padding:20px;
    .posts-content{
        padding:10px;
        margin:20px auto 0px auto;
        width: 750px;
        border:1px solid #ccc;
        border-radius: 4px;
        background:#f2f2f2;
    }
}
.user-details{
    display:flex;
    gap:10px;
    .name{
        font-weight: bold;
    }
    .sub{
        color:#757272;
    }
}
.profile{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
}
.post-actions{
    padding:10px;
    display: flex;
    justify-content: space-between;
}
.comments{
    .items{
        border:1px solid #ccc;
        padding:10px;
        border-radius: 4px;
        margin-bottom: 10px;
        background:#fff;
    }
}
</style>