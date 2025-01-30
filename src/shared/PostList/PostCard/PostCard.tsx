import { useContext, useState  } from "react"
import { Link } from "react-router-dom";
import './PostCard.css'
import { likedContext } from "../../../context/likedContext";
import { IPosts } from "../../../hooks/usePosts";

export function PostCard(props: IPosts){
    const {addToPost, removeLike , isItLiked ,...others} = useContext(likedContext)
    const [like, setLike] = useState(0)
    // const [disable, setDisable] = useState(false)

    const [isLiked, setIsLiked] = useState('NotLiked')
    // const button = document.querySelector('#button')?.ariaDisabled
    function addLike() {

        const itIsLikedFunc = isItLiked(props)
        // alert(others)

        if(itIsLikedFunc === false){
            setIsLiked('Liked')
            addToPost(props)
            setLike(like+1)
        // setDisable(true)
        }else{
            setIsLiked('NotLiked')
            removeLike(props)
            setLike(like-1)
        }

        // addToPost(post)
        // setLike(like+1)
        // setDisable(true)
    }

    // if (like === true){
    // }

    return (
        <div className="post-root">
            <p className="category">{props.tags}</p>
            <p className="author">{props.username}</p>
            <h1 className="title">{props.title}</h1>
            <p className="description">{props.description}</p>
            <Link to={`/post/${props.id}`}>
                <img className='post-img' src={props.social_image} alt="" />
            </Link>
            <div className="like">
                <p>{like}</p>
                <button onClick={addLike} className={isLiked} >add like</button>
            </div>
        </div>

    )
}

function userContext(likedContext: any): { [x: string]: any; addToPost: any; } {
    throw new Error("Function not implemented.");
}
function removeLike(props: IPosts) {
    throw new Error("Function not implemented.");
}

