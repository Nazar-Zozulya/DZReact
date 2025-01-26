import { Layout } from "./Layout/Layout"
import { Header } from "./Header/Header"
import { Main} from './Main/Main'
import { Footer } from "./Footer/Footer"
import { PostsList } from "./PostList/PostList"
import { PostPage } from "../pages/PostPage/PostPage"
import { NotFound } from "./NotFound/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { IPosts } from "../hooks/usePosts"
import { createContext, useState } from "react"

interface ILikedPosts{
    likedPosts: IPosts[]
    addToPost: (post: IPosts) => void
    // title: string

}

const initialValue: ILikedPosts = {likedPosts: [], addToPost: (post: IPosts) => {}}
export const likedContext = createContext< ILikedPosts >(initialValue)


export function App(){

    const [likedPosts, setLikedPosts] = useState<IPosts[]>([])

    function addToPost(post: IPosts){
        let array = [...likedPosts, post]
        setLikedPosts(array)
    }


    return(
        <div>
            <likedContext.Provider value={{likedPosts: likedPosts,addToPost: addToPost}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout></Layout>}>

                            <Route path="/posts" element={<PostsList></PostsList>}></Route>
                            <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                            <Route path="*" element={<NotFound></NotFound>}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </likedContext.Provider>
        </div>
    )
}