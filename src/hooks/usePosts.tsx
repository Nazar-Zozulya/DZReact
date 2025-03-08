import { useState, useEffect } from 'react'
import { ITags } from './useTags';
// IPost, тип должен совпдаать с Backend(еще не глянул но навсякий случай)
export interface IPosts{
    name: string;
    id: number;
    author: string;
    description: string;
    tags: ITags
}


export function usePosts(){
    const [posts, setPosts] = useState<IPosts[]>()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string>()
  

    useEffect(()=>{
        async function getPosts(){
            try {
                setIsLoading(true)
                const response = await fetch('http://localhost:8000/api/product/all')
                const result = await response.json()
                if (result.status === 'success') {
                    setPosts(result.data)
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
        getPosts()
        
    },[])
    return {posts: posts, isLoading: isLoading, error: error}
}