import { useState, useEffect } from 'react'
import { IPosts } from './usePosts'

export function usePostById(id: number){
    const [post, setPost] = useState<IPosts>()
    // изначально false
    const [isLoading, setIsLoading] = useState(true)
    // error

    useEffect(() => {
        // сделать проверку на то, что id не NaN
        // если Number('fdfds') получишь NaN, тк NaN тип number то TS ошибки не видит
        async function getPost() {
            // try...catch
            // тут менять на true перед запросом
            const response = await fetch(`http://localhost:8000/api/product/${id}`)
            const post = await response.json()
            setPost(post)
            setIsLoading(false)
        }
        getPost()
    }, [id])

    return {post: post, isLoading: isLoading}
}