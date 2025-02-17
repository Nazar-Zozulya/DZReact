import { useEffect, useState } from 'react'

interface ITags{
    comment: string;
    id: number;
    title: string;
    img: string | null;
    postId: number;
    userId: number;
}

export function useTags() {
    const [tags, setTags] = useState<ITags[]>([])

    useEffect(()=>{
        async function getTags(){
            const response = await fetch('https://dev.to/api/comment/all')
            const tags = await response.json()
            setTags(tags)
        }
        getTags()
    },[])
    console.log(tags)
    return {tags: tags}
}
