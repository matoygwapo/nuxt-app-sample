<template>
        <div class="page-wrapper">
            <div class="page-content">
                <PagesHeader/>
                <PagesPosts :posts="posts"/>
            </div>
        </div>
</template>

<script setup lang="ts">
const posts = ref([
{
        id:1,
        name:'Bruno Mars',
        sub_name:'Bruno@Official',
        profile:'https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=0&k=20&c=mt-Bsap56B_7Lgx1fcLqFVXTeDbIOILVjTdOqrDS54s=',
        description:'Hey there, I have a new song',
        images:[
            {
                id:1,
                post_image:'https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=0&k=20&c=mt-Bsap56B_7Lgx1fcLqFVXTeDbIOILVjTdOqrDS54s='
            }
        ],
        comments:[
            {
                id:1,
                name:'Gil Sumalinog',
                comment:'Hey, wanna do a collab?'
            },
            {
                id:2,
                name:'JohnMark Sumagang',
                comment:'Parehas diay ta fan ni bruno Gil?'
            }
        ]
    },
])
</script>

<style lang="scss" scoped>

</style>