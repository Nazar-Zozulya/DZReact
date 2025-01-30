import { useContext } from "react"
import { likedContext } from "../../context/likedContext"


export function LikedPostsPage(){
    const {likedPosts} = useContext(likedContext)
    return(
        <div>
            {likedPosts.map((post)=>{
                return(
                    <div>
                        <img src={post.social_image} alt="" />
                        <h1>{post.title}</h1>
                        <p>{post.tags}</p>
                        <p>{post.description}</p>
                        <p>{post.username}</p>
                    </div>
                )
            })}
        </div>
    )
}