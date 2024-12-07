import { Post } from '../Post/Post';
import { useEffect, useState } from "react"
import './PostsList.css'

export function PostList(){
    const postList = [
        {id: 0, category:'boss', title: '1 post', description: '1 description', src: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', author: 'a4'},
        {id: 1, category:'canon gang', title: '2 post', description: '2 description', src: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', author: 'glent'},
        {id: 2, category:'canon gang', title: '3 post', description: '3 description', src: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', author: 'kobyakov'},
        {id: 3, category:'canon gang', title: '4 post', description: '4 description', src: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', author: 'serega a4'},
        {id: 4, category:'woman', title: '5 post', description: '5 description', src: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', author: 'rivivi'},
        {id: 5, category:'bad gang', title: '6 post', description: '6 description', src: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', author: 'mark a4'}
    ]

    const [filteredPosts, setFilteredPosts] = useState(postList)
    const [selectedCategory, setSelectedCategory] = useState('all')

    useEffect(()=>{
        if(selectedCategory === 'all'){
            setFilteredPosts(postList)
        } else{
            setFilteredPosts(postList.filter( (postList)=>{
                return postList.category === selectedCategory
            }))
        }
        console.log(selectedCategory)
    }, [selectedCategory])

    return (
        <div className="posts-list-root">
            <select className='select-category' onChange={(event)=>{
                setSelectedCategory(event.target.value)
            }}>
                <option value="all">all</option>
                <option value="boss">boss</option>
                <option value="canon gang">canon gang</option>
                <option value="woman">woman</option>
                <option value="bad gang">bad gang</option>
            </select>

            <h1>Усі <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">пости:</a></h1>
            {filteredPosts.map( (post) => {
                return <Post title= {post.title} description= {post.description} src= {post.src} author= {post.author}></Post>
            })}
        </div>
    )
}