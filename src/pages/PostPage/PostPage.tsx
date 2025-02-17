import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PostPage.css'
import { usePostById } from "../../hooks/usePostById";
import { Audio } from 'react-loader-spinner'
import { useContext } from "react";
import { likedContext } from "../../context/likedContext";

export function PostPage(){
    const params = useParams();

    const {addToPost, removeLike, isItLiked} = useContext(likedContext);

    const { post, isLoading } = usePostById(Number(params.id)) 

    const [like, setLike] = useState(0)
    // const [disable, setDisable] = useState(false)
    const [isLiked, setIsLiked] = useState('NotLiked')

    function addLike() {
        if(post === undefined){
            return
        }

        const itIsLikedFunc = isItLiked(post)

        if(itIsLikedFunc === false){
            setIsLiked('Liked')
            addToPost(post)
            setLike(like+1)
        // setDisable(true)
        }else{
            setIsLiked('NotLiked')
            removeLike(post)
            setLike(like-1)
        }

        // addToPost(post)
        // setLike(like+1)
        // setDisable(true)
    }

    return( <div>
        {isLoading === true ? (<Audio
                                height="80"
                                width="80"
                                // radius="9"
                                color="green"
                                ariaLabel="three-dots-loading"/>) : (
            <>
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
                        <button onClick={addLike} className={isLiked}>add like</button>
                    </div>
                </div>
            </div>
            </>
        )}
        </div>
    )
}