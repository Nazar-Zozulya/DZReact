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
    // детей лучше сделать необязательными
    children: ReactNode
}

const initialValue: ILikedPosts = {
    likedPosts: [],
    addToPost: (post: IPosts) => {}, 
    isItLiked: (post: IPosts) => false, 
    removeLike: (post: IPosts) => {}
}
// экспортировать контекст не хорошая практика лучше сделать хук, который вытягивает контекст с помощью useContext
export const likedContext = createContext< ILikedPosts >(initialValue)
// useLikedPostsContext 
export function LikedContextProvider(props:ILikedPostsChildren){
    const [likedPosts, setLikedPosts] = useState<IPosts[]>([])
    
    function isItLiked(post:IPosts){
        // надо проверять по id постов, тк в жс сравнение объектов работает иным образом и два, вроде бы одинаковых объекта не равны
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