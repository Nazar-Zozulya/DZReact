import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useState } from "react"

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
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img src={props.src} alt="" />
            <source />
            <p>{props.author}</p>
            <button onClick={addLike} disabled={disable}>add like</button>
            <p>{like}</p>
            <hr />
        </div>

    )
}