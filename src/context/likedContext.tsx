import { createContext, ReactNode, useState } from "react"
import { IPosts } from "../hooks/usePosts"


interface ILikedPosts{
    likedPosts: IPosts[]
    addToPost: (post: IPosts) => void
    isItLiked: (post: IPosts) => boolean
    removeLike: (post: IPosts) => void
    // title: string

}

interface ILikedPostsChildren{
    children: ReactNode
}

const initialValue: ILikedPosts = {
    likedPosts: [],
    addToPost: (post: IPosts) => {}, 
    isItLiked: (post: IPosts) => false, 
    removeLike: (post: IPosts) => {}
}
export const likedContext = createContext< ILikedPosts >(initialValue)

export function LikedContextProvider(props:ILikedPostsChildren){
    const [likedPosts, setLikedPosts] = useState<IPosts[]>([])
    
    function isItLiked(post:IPosts){
        if(likedPosts.includes(post)){
            return true
        } else{
            return false
        }
    }

    function addToPost(post: IPosts){
        let array = [...likedPosts, post]
        setLikedPosts(array)
    }

    function removeLike(post: IPosts){
        const fitlered = likedPosts.filter((filteredpost) =>  filteredpost !== post )
        setLikedPosts(fitlered)
        // return
    }

    return <likedContext.Provider value={{
                likedPosts: likedPosts,
                addToPost: addToPost,
                isItLiked:isItLiked,
                removeLike:removeLike
            }}>
                {props.children}
            </likedContext.Provider>
}