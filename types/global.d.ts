export {};
declare global {

    type POSTS = {
        id:number,
        name:string,
        sub_name:string,
        profile:string,
        description:string
        images:IMAGES[],
        comments:COMMENTS[]
    }

    type IMAGES = {
        id:number,
        post_image:string
    }

    type COMMENTS = {
        id:number,
        name:string
        comment:string

    }

    type MESSAGE = {
        id:number,
        message:string
    }

}