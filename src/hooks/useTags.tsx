import { useEffect, useState } from 'react'
// ITag
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
    // Loading
    // error

    useEffect(()=>{
        async function getTags(){
            // try catch
            const response = await fetch('https://dev.to/api/comment/all')
            const tags = await response.json()
            setTags(tags)
        }
        getTags()
    },[])
    // log убираем
    console.log(tags)
    return {tags: tags}
}
