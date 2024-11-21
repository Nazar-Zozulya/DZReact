import { Post } from './Post';

export function PostList(){
    const postList = [
        {id: 0, title: '1 post', description: '1 description', src: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', author: 'a4'},
        {id: 1, title: '2 post', description: '2 description', src: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', author: 'glent'},
        {id: 2, title: '3 post', description: '3 description', src: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', author: 'kobyakov'},
        {id: 3, title: '4 post', description: '4 description', src: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', author: 'serega a4'},
        {id: 4, title: '5 post', description: '5 description', src: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', author: 'rivivi'},
        {id: 5, title: '6 post', description: '6 description', src: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', author: 'mark a4'}
    ]
    return (
        <div>
            <h1>Усі <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">пости:</a></h1>
            {postList.map( (post) => {
                return <Post title= {post.title} description= {post.description} src= {post.src} author= {post.author}></Post>
            })}
        </div>
    )
}