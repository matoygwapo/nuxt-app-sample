import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePostsStore = defineStore('posts',()=>{
    // state
    const message = ref<string>('Hello class')
    const posts : Ref<POSTS[]>   = ref([])

    // another way to declate types in ref hooks
    const postsv2 = ref<POSTS[]>([])


    // getters
    const get_message = computed(()=>message.value)
    const get_posts = computed(()=>posts.value)


    //functions or actions
    const fetchPost = async() : Promise<void> =>{
        // const response = await axios.get('your_url',params)
        const response = [
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
            {
                id:2,
                name:'Taylor Shessh',
                sub_name:'Taylot]3@Official',
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
                        name:'Elieser Tajanlangit',
                        comment:'Hey, wanna do a collab?'
                    }
                ]
            },
            {
                id:3,
                name:'Edsheeran',
                sub_name:'Edsheeran_2024',
                profile:'https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=0&k=20&c=mt-Bsap56B_7Lgx1fcLqFVXTeDbIOILVjTdOqrDS54s=',
                description:'Happier than before',
                images:[
                    {
                        id:1,
                        post_image:'https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=0&k=20&c=mt-Bsap56B_7Lgx1fcLqFVXTeDbIOILVjTdOqrDS54s='
                    }
                ],
                comments:[
                    {
                        id:1,
                        name:'JohnMark Sumagang',
                        comment:'Idol edsheeran'
                    }
                ]
            }
        ];
        posts.value = response;
    }

    const fetchPostWithType = async() : Promise<POSTS[] | null>=>{
        const response = null
        return response
    }


    return{
        get_message,
        get_posts,
        fetchPost
    }

})

export type PostsStore = ReturnType<typeof usePostsStore>