import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PostPage.css'
import { usePostById } from "../../hooks/usePostById";
import { Audio } from 'react-loader-spinner'
import { useContext } from "react";
import { likedContext } from "../../shared/App";

export function PostPage(){
    const params = useParams();

    const {addToPost, ...others} = useContext(likedContext);

    const { post, isLoading } = usePostById(Number(params.id)) 

    const [like, setLike] = useState(0)
    const [disable, setDisable] = useState(false)

    function addLike() {
        if(post === undefined){
            return
        }
        addToPost(post)
        setLike(like+1)
        setDisable(true)
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
                <img src={post?.social_image} alt="" />
                <div className="line"></div>
                <div className="text">
                    <h1 className="title">{post?.title}</h1>
                    <p className="category">{post?.tags}</p>
                    <p className="description">{post?.description}</p>
                    <p className="author">{post?.username}</p>
                    <div className="add-like">
                        <p>{like}</p>
                        <button onClick={addLike} disabled={disable}>add like</button>
                    </div>
                </div>
            </div>
            </>
        )}
        </div>
    )
}