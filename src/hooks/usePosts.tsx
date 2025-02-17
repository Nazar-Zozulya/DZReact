import { useState, useEffect } from 'react'

export interface IPosts{
    name: string;
    id: number;
    author: string;
    description: string;
}


export function usePosts(){
    const [posts, setPosts] = useState<IPosts[]>([])
    const error = 'error'

    useEffect(()=>{
        async function getPosts(){
            const response = await fetch('http://localhost:8000/api/product/all')
            const posts = await response.json()
            setPosts(posts)
        }
        getPosts()
        
    },[])
    return {posts: posts}
}