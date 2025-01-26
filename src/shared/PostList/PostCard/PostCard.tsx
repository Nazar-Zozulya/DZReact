import { useContext, useState  } from "react"
import { Link } from "react-router-dom";
import './PostCard.css'
import { likedContext } from "../../../shared/App";
import { IPosts } from "../../../hooks/usePosts";

export function PostCard(props: IPosts){
    const {addToPost, ...others} = useContext(likedContext)
    const [like, setLike] = useState(0)
    const [disable, setDisable] = useState(false)
    // const button = document.querySelector('#button')?.ariaDisabled
    function addLike() {
        addToPost(props)
        setLike(like+1)
        setDisable(true)
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
                <button onClick={addLike} disabled={disable}>add like</button>
            </div>
        </div>

    )
}

function userContext(likedContext: any): { [x: string]: any; addToPost: any; } {
    throw new Error("Function not implemented.");
}
