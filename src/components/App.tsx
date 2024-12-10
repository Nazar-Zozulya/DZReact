import { Layout } from "./Layout/Layout"
import { Header } from "./Header/Header"
import { Main} from './Main/Main'
import { Footer } from "./Footer/Footer"
import { PostsList } from "./PostsList/PostsList"
import { PostPage } from "./PostPage/PostPage"
import { NotFound } from "./NotFound/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export function App(){

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout></Layout>}>

                        <Route path="/posts" element={<PostsList></PostsList>}></Route>
                        <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                        <Route path="*" element={<NotFound></NotFound>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}