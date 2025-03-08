import { useContext, useState  } from "react"
import { Link } from "react-router-dom";
import './PostCard.css'
import { IPosts } from "../../../hooks/usePosts";
import { useLikedPostsContext } from "../../../context/likedContext";

export function PostCard(props: IPosts){
    // здесь вместо подключения useContext и вытягивания самого контекста, можно сделать хук useLikedPostsContext и использовать здесь. он будет делать тот же useContext, но тогда тебе не придется вытягивать объек контекста

    const {addToPost, removeLike , isItLiked } = useLikedPostsContext()
    // лайки если сильно хочется, лучше сделать атрибутом модели на BackEnd
    const [like, setLike] = useState(0)
    
    function addLike() {
        const isPostLiked = isItLiked(props.id)
        // alert(others)

        if(isPostLiked === false){
            addToPost(props)
            setLike(like+1)
        // setDisable(true)
        }else{
            removeLike(props)
            setLike(like-1)
        }
    }

    return (
        <div className="post-root">
            {/* <p className="category">{props.}</p> */}
            <Link to={`/post/${props.id}`}>
                <p className="author">{props.author}</p>
                <h1 className="title">{props.name}</h1>
                <p className="description">{props.description}</p>
                    {/* <img className='post-img' src={props.social_image} alt="" /> */}
            </Link>
            <div className="like">
                <p>{like}</p>
                {/* вместо isLiked состояния, можно сделать условие isItLiked(post.id) ? 'liked' : 'not-liked' */}
                <button onClick={addLike} className={isItLiked(props.id) ? 'Liked' : 'NotLiked'} >add like</button>
            </div>
        </div>

    )
}

