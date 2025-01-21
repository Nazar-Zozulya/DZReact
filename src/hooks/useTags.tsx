import { useEffect, useState } from 'react'

interface ITags{
    // id: number;
    name: string
}

export function useTags() {
    const [tags, setTags] = useState<ITags[]>([])

    useEffect(()=>{
        async function getTags(){
            const response = await fetch('https://dev.to/api/tags')
            const tags = await response.json()
            setTags(tags)
        }
        getTags()
    },[])
    console.log(tags)
    return {tags: tags}
}
