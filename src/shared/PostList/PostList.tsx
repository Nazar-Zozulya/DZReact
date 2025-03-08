import { PostCard } from './PostCard/PostCard';
// Импорт не используется, нужно убрать
import { useEffect, useState } from "react"
import './PostList.css'

import { usePosts } from '../../hooks/usePosts'
import { useTags } from '../../hooks/useTags';

export function PostList(){
    // Здесь это не надо лучше удалить
    // const postList = [
    //     {id: 0, tags:'boss', title: '1 post', description: '1 description', social_image: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', username: 'a4'},
    //     {id: 1, tags:'canon gang', title: '2 post', description: '2 description', social_image: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', username: 'glent'},
    //     {id: 2, tags:'canon gang', title: '3 post', description: '3 description', social_image: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', username: 'kobyakov'},
    //     {id: 3, tags:'canon gang', title: '4 post', description: '4 description', social_image: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', username: 'serega a4'},
    //     {id: 4, tags:'woman', title: '5 post', description: '5 description', social_image: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', username: 'rivivi'},
    //     {id: 5, tags:'bad gang', title: '6 post', description: '6 description', social_image: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', username: 'mark a4'}
    // ]
    // loading и error нужно обрабатывать
    const { posts } = usePosts()

    const [filteredPosts, setFilteredPosts] = useState(posts)
    const [selectedTag, setSelectedTag] = useState('all')
    const { tags } = useTags()
    
    // нужна рабочая фильтрация

    // useEffect(()=>{
    //     if(selectedTag === 'all'){
    //         setFilteredPosts(posts)
    //     } else{
    //         setFilteredPosts(posts.filter( (posts)=>{
    //             // return posts.tags === selectedTag
    //         // }))
    //     }
    //     console.log(selectedTag)
    // }, [selectedTag, posts])

    return (
        <div className="posts-list-root">
            {/* <select className='select-category' onChange={(event)=>{
                setSelectedTag(event.target.value)
            }}>
                <option value="all">all</option>
                <option value="1231">121311</option> */}
                {/* нужно отображать теги */}
                {/* {tags.map(tag => {
                return <option value={tag}>{tag}</option>
                })} */}
            {/* </select> */}
            {/* :) */}
            <h1>Усі <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">пости:</a></h1>
            {filteredPosts.map( (post) => {
                // key не забываем
                return <PostCard id= {post.id}
                name= {post.name}
                description= {post.description} 
                // social_image= {post.social_image} 
                author= {post.author} 
                // tags= {post.tags}
                ></PostCard>
            })}
        </div>
    )
}