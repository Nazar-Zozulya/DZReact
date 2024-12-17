import { useState  } from "react"
import { Link } from "react-router-dom";
import './PostCard.css'

interface IPostProps {
    id: number;
    title: string;
    description: string;
    category: string;
    src: string;
    author: string;
}

export function PostCard(props: IPostProps){
    const [like, setLike] = useState(0)
    const [disable, setDisable] = useState(false)
    // const button = document.querySelector('#button')?.ariaDisabled
    function addLike() {
        setLike(like+1)
        setDisable(true)
    }

    // if (like === true){
    // }

    return (
        <div className="post-root">
            <p className="category">{props.category}</p>
            <p className="author">{props.author}</p>
            <h1 className="title">{props.title}</h1>
            <p className="description">{props.description}</p>
            <Link to={`/post/${props.id}`}>
                <img className='post-img' src={props.src} alt="" />
            </Link>
            <div className="like">
                <p>{like}</p>
                <button onClick={addLike} disabled={disable}>add like</button>
            </div>
        </div>

    )
}