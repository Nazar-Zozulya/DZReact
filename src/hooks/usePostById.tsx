import { useState, useEffect } from 'react'
import { IPosts } from './usePosts'
import { ITags } from './useTags';

interface IComment{
    comment: string;
    id: number;
    title: string;
    img: string | null;
}

interface IPostsWithComments{
    name: string;
    id: number;
    author: string;
    description: string;
    tags: ITags
    comments: IComment[]
}

export function usePostById(id: number){
    const [post, setPost] = useState<IPostsWithComments>()
    // изначально false
    const [isLoading, setIsLoading] = useState(false)
    // error
    const [error, setError] = useState<string>()

    useEffect(() => {
        // сделать проверку на то, что id не NaN
        if(isNaN(id)){
            setError('Invalid id')
            return
        }
        // если Number('fdfds') получишь NaN, тк NaN тип number то TS ошибки не видит
        async function getPost() {
            // try...catch
            try {
                setIsLoading(true)
                const response = await fetch(`http://localhost:8000/api/product/${id}`)
                const result = await response.json()
                if (result.status === 'success') {
                    setPost(result.data)
                }
                else {
                    setError(result.message)
                }
            }
            catch (error) {
                const err = error instanceof Error ? error.message : undefined
                setError(`${err}`)
            }
            finally {
                setIsLoading(false)
            }
        }
        getPost()
    }, [id])

    return {post: post, isLoading: isLoading, error: error}
}