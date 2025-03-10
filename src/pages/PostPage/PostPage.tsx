import { useState } from "react";
import { useParams } from "react-router-dom";
import './PostPage.css'
import { usePostById } from "../../hooks/usePostById";
import { Audio } from 'react-loader-spinner'
import { useLikedPostsContext } from "../../context/likedContext";

export function PostPage(){
    const params = useParams();
    // тоже самое что в PostCard
    const {addToPost, removeLike, isItLiked} = useLikedPostsContext()
    // error
    const { post, isLoading, error } = usePostById(Number(params.id)) 
    // идет повторение кода, можно сделать отедльный компонент кнопка лайка и туда вынести все относящееся к лайку поста
    // те же ошибки что и в PostCard 
    const [like, setLike] = useState(0)
    // const [disable, setDisable] = useState(false)
    
    function addLike() {
        if(post === undefined){
            return
        }
        
        const isPostLiked = isItLiked(post.id)

        if(isPostLiked === false){
            addToPost(post)
            setLike(like+1)
        // setDisable(true)
        }else{
            removeLike(post)
            setLike(like-1)
        }

        // addToPost(post)
        // setLike(like+1)
        // setDisable(true)
    }

    if(post === undefined){
        return
    }

    return( <div>
        {isLoading === true ? (<Audio
                                height="80"
                                width="80"
                                // radius="9"
                                color="green"
                                ariaLabel="three-dots-loading"/>)
            : ( !error ? <>
                <div className="post">
                    {/* <img src={post?.social_image} alt="" /> */}
                    <div className="line"></div>
                    <div className="text">
                        <h1 className="title">{post?.name}</h1>
                        {/* <p className="category">{post?.tags}</p> */}
                        <p className="description">{post?.description}</p>
                        <p className="author">{post?.author}</p>
                        <div className="add-like">
                            <p>{like}</p>
                            <button onClick={addLike} className={isItLiked(post?.id) ? 'Liked' : 'NotLiked'}>add like</button>
                        </div>
                    </div>
                </div>
            </>
            :
            <div>{error}</div>
        )}
        </div>
    )
}