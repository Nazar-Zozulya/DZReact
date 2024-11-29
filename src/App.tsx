import { PostList } from './PostList';
import { Header } from './Header';
import { Footer } from './Footer';

export function App(){
    return(
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <h1>First react site</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos autem aliquid quaerat fugit sed itaque.</p>
                <img src="https://i.ytimg.com/vi/Rg8pbWRTSQQ/maxresdefault.jpg" alt="standoff раздача голды.png" />
                <PostList></PostList>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    )
}