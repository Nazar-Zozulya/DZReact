import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import './PostPage.css'
import { usePostById } from "../../hooks/usePostById";
import { Audio } from 'react-loader-spinner'
import { useLikedPostsContext } from "../../context/likedContext";
import { useUserContext } from "../../context/userContext";
import { useForm } from "react-hook-form";

interface ICommentForm{
    title: string;
    comment: string;
    img: string;
}

export function PostPage(){
    const params = useParams();
    // тоже самое что в PostCard
    const {addToPost, removeLike, isItLiked} = useLikedPostsContext()

    const {register, handleSubmit, formState} = useForm <ICommentForm>({
            mode: 'onSubmit'
    })
    // error
    const { post, isLoading, error } = usePostById(Number(params.id)) 
    // идет повторение кода, можно сделать отедльный компонент кнопка лайка и туда вынести все относящееся к лайку поста
    // те же ошибки что и в PostCard 

    const [like, setLike] = useState(0)

    const { user } = useUserContext()

    const { isAuth } = useUserContext()
    // const [disable, setDisable] = useState(false)
    
    function sendComment(data: ICommentForm){
        if(!post){
            return
        }

        if(!user){
            return
        }
        // if(isAuth){

        // }
        fetch('http:http://localhost:8000/api/comment/create',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                comment: data.comment,
                title: data.title,
                img: data.img,
                post: post.id,
                user: user.id,
            })
        })
    }

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
                <div className="comments">
                    <div className="all-comments">
                        { post.comments.map((comment)=>{
                            return(
                                <div>
                                    <p>{comment.title}</p>
                                    <p>{comment.comment}</p>
                                    <img src={comment.img ? comment.img : undefined} alt="no na virande" />
                                </div>
                            )
                        } ) }
                    </div>
                    <div className="self-comment">
                        {!isAuth ? <Link to="/reg">Авторизуватисяя</Link> 
                        : 
                        <form action="" onSubmit={handleSubmit(sendComment)}>
                            <input type="text" placeholder="title" {...register('title',{
                                required: {value: true, message: 'Це поле обов\'язкове'}, 
                                maxLength: {value: 150, message: 'Ваш заголовок повинен бути не більше 150 слів'}, })} />
                            <p>{formState.errors.title?.message}</p>

                            <input type="textarea" placeholder="comment" {...register('comment',{
                                required: {value: true, message: 'Це поле обов\'язкове'}, })} />
                            <p>{formState.errors.title?.message}</p>

                            <input type="image" placeholder="img" {...register('img')}/>
                        </form>
                        }
                    </div>
                </div>
            </>
            :
            <div>{error}</div>
        )}

        
        </div>
    )
}