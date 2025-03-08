import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { IPosts } from "../hooks/usePosts"


interface ILikedPosts{
    likedPosts: IPosts[]
    addToPost: (post: IPosts) => void
    isItLiked: (post: number) => boolean
    removeLike: (post: IPosts) => void
}

interface ILikedPostsChildren{
    // детей лучше сделать необязательными
    children?: ReactNode
}

const initialValue: ILikedPosts = {
    likedPosts: [],
    addToPost: (post: IPosts) => {}, 
    isItLiked: (id: number) => false, 
    removeLike: (post: IPosts) => {},
}
// экспортировать контекст не хорошая практика лучше сделать хук, который вытягивает контекст с помощью useContext
const likedContext = createContext< ILikedPosts >(initialValue)

export function useLikedPostsContext(){
    return useContext(likedContext)
}

export function LikedContextProvider(props:ILikedPostsChildren){
    const [likedPosts, setLikedPosts] = useState<IPosts[]>([])
    
    function isItLiked(id: number){
        // надо проверять по id постов, тк в жс сравнение объектов работает иным образом и два, вроде бы одинаковых объекта не равны
        const result = likedPosts.some((post) => {
            return post.id === id
        })
        return result
    }

    function addToPost(post: IPosts){
        let array = [...likedPosts, post]
        setLikedPosts(array)
    }

    function removeLike(post: IPosts){
        const fitlered = likedPosts.filter((filteredpost) =>  filteredpost !== post )
        setLikedPosts(fitlered)
    }


    return <likedContext.Provider value={{
                likedPosts: likedPosts,
                addToPost: addToPost,
                isItLiked: isItLiked,
                removeLike: removeLike,
            }}>
                {props.children}
            </likedContext.Provider>
}