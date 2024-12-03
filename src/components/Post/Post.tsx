import { useState } from "react"
import './Post.css'

interface IPostProps {
    title: string;
    description: string;
    src: string;
    author: string;
}

export function Post(props: IPostProps){
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
            <p className="author">{props.author}</p>
            <h1 className="title">{props.title}</h1>
            <p className="description">{props.description}</p>
            <img className='post-img' src={props.src} alt="" />
            <div className="like">
                <p>{like}</p>
                <button onClick={addLike} disabled={disable}>add like</button>
            </div>
        </div>

    )
}