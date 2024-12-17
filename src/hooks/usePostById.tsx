import { useState, useEffect } from 'react'
import { IPosts } from './usePosts'

export function usePostById(id: number){
    const [post, setPost] = useState<IPosts>()
    const error = 'error'

    useEffect(() => {
        async function getPost() {
            const response = await fetch(`https://dev.to/api/articles/${id}`)
            const post = await response.json()
            setPost(post)
        }
        getPost()
    }, [id])

    return {post: post, error: error}
}