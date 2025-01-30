import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../shared/Layout/Layout";
import { PostListPage } from "../pages/PostListPage/PostListPage";
import { PostPage } from "../pages/PostPage/PostPage";
import { NotFound } from "../shared/NotFound/NotFound";
import { LikedPostsPage } from "../pages/LikedPostsPage/LikedPostsPage";



export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route path="/posts" element={<PostListPage></PostListPage>}></Route>
                    <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                    <Route path="*" element={<NotFound></NotFound>}></Route>
                    <Route path="/liked-posts" element={<LikedPostsPage ></LikedPostsPage>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}