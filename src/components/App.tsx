import { PostList } from './PostsList/PostsList';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export function App(){
    return(
        <div>
            <Header></Header>
            <PostList></PostList>
            <Footer></Footer>
        </div>
    )
}