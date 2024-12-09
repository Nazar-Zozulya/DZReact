import { Post } from '../Post/Post';
import { useEffect, useState } from "react"
import './PostsList.css'

export function PostsList(){
    const postList = [
        {id: 0, tags:'boss', title: '1 post', description: '1 description', social_image: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', author: 'a4'},
        {id: 1, tags:'canon gang', title: '2 post', description: '2 description', social_image: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', author: 'glent'},
        {id: 2, tags:'canon gang', title: '3 post', description: '3 description', social_image: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', author: 'kobyakov'},
        {id: 3, tags:'canon gang', title: '4 post', description: '4 description', social_image: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', author: 'serega a4'},
        {id: 4, tags:'woman', title: '5 post', description: '5 description', social_image: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', author: 'rivivi'},
        {id: 5, tags:'bad gang', title: '6 post', description: '6 description', social_image: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', author: 'mark a4'}
    ]

    const [filteredPosts, setFilteredPosts] = useState(postList)
    const [selectedCategory, setSelectedCategory] = useState('all')

    useEffect(()=>{
        if(selectedCategory === 'all'){
            setFilteredPosts(postList)
        } else{
            setFilteredPosts(postList.filter( (postList)=>{
                return postList.tags === selectedCategory
            }))
        }
        console.log(selectedCategory)
    }, [selectedCategory])

    useEffect(()=>{
        async function getProducts(){
            const response = await fetch('https://dev.to/api/articles')
            const products = await response.json()
            setFilteredPosts(products)
        }
        getProducts()
    },[])

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
                return <Post id= {post.id} title= {post.title} description= {post.description} src= {post.social_image} author= {post.author} category= {post.tags}></Post>
            })}
        </div>
    )
}