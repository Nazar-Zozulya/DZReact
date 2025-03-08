import { useState, useEffect } from 'react'
// IPost, тип должен совпдаать с Backend(еще не глянул но навсякий случай)
export interface IPosts{
    name: string;
    id: number;
    author: string;
    description: string;
}


export function usePosts(){
    const [posts, setPosts] = useState<IPosts[]>([])
    // error - состояние
    // loading
    const error = 'error'

    useEffect(()=>{
        async function getPosts(){
            // try catch
            const response = await fetch('http://localhost:8000/api/product/all')
            const posts = await response.json()
            setPosts(posts)
        }
        getPosts()
        
    },[])
    return {posts: posts}
}