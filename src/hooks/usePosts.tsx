import { useState, useEffect } from 'react'

export interface IPosts{
    id: number;
    username: string;
    tags: string;
    title: string;
    description: string;
    social_image: string;
}


export function usePosts(){
    const [posts, setPosts] = useState<IPosts[]>([])
    const error = 'error'

    useEffect(()=>{
        async function getPosts(){
            const response = await fetch('https://dev.to/api/articles')
            const posts = await response.json()
            setPosts(posts)
        }
        getPosts()
        
    },[])
    return {posts: posts}
}