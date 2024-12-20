import { useState, useEffect } from 'react'
import { IPosts } from './usePosts'

export function usePostById(id: number){
    const [post, setPost] = useState<IPosts>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getPost() {
            const response = await fetch(`https://dev.to/api/articles/${id}`)
            const post = await response.json()
            setPost(post)
            setIsLoading(false)
        }
        getPost()
    }, [id])

    return {post: post, isLoading: isLoading}
}