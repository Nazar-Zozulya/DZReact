import { PostCard } from './PostCard/PostCard';
// Импорт не используется, нужно убрать
import { useEffect, useState } from "react"
import './PostList.css'

import { usePosts } from '../../hooks/usePosts'
import { useTags } from '../../hooks/useTags';
import { Vortex } from 'react-loader-spinner';

export function PostList(){

    const { posts, isLoading, error } = usePosts()

    const [filteredPosts, setFilteredPosts] = useState(posts)
    const [selectedTag, setSelectedTag] = useState('all')
    const { tags, isLoading:tagsLoading, error:tagsError} = useTags()
    
    if( posts === undefined){
        return
    }

    // нужна рабочая фильтрация

    useEffect(()=>{
        if(selectedTag === 'all'){
            setFilteredPosts(posts)
        } else{
            setFilteredPosts(posts.filter( (posts)=>{
                return posts.tags.title === selectedTag
            }))
        }
        console.log(selectedTag)
    }, [selectedTag, posts])

    if (filteredPosts === undefined){
        return
    }

    return (
        <div className="posts-list-root">
            <select className='select-category' onChange={(event)=>{
                setSelectedTag(event.target.value)
            }}>
                <option value="all">all</option>
                {/* нужно отображать теги */}
                {tags.map(tag => {
                    return <option value={tag.title}>{tag.title}</option>
                })}
            </select>
            <h1>Усі <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">пости:</a></h1>
            { isLoading === false ? !error ? filteredPosts.map( (post) => {
                // key не забываем
                return <PostCard key={post.id}
                id={post.id}
                name= {post.name}
                description= {post.description} 
                // social_image= {post.social_image} 
                author= {post.author} 
                tags= {post.tags}
                ></PostCard>
            }) : (<div>{error}</div>) : (<div className="vortex"><Vortex
                visible={true}
                height="200"
                width="200"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                /></div>)}

        </div>
    )
}