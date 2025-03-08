import { useEffect, useState } from 'react'
// ITag
export interface ITags{
    comment: string;
    id: number;
    title: string;
    img: string | null;
    postId: number;
    userId: number;
}

export function useTags() {
    const [tags, setTags] = useState<ITags[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string>()

    useEffect(()=>{
        async function getTags(){
            try {
                setIsLoading(true)
                const response = await fetch('https://dev.to/api/comment/all')
                const result = await response.json()
                if (result.status === 'success') {
                    setTags(result.data)
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
        getTags()
    },[])
    return {tags: tags, isLoading: isLoading, error: error}
}
