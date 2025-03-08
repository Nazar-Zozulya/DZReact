import { useContext, useState  } from "react"
import { Link } from "react-router-dom";
import './PostCard.css'
import { likedContext } from "../../../context/likedContext";
import { IPosts } from "../../../hooks/usePosts";

export function PostCard(props: IPosts){
    // others? не надо
    // здесь вместо подключения useContext и вытягивания самого контекста, можно сделать хук useLikedPostsContext и использовать здесь. он будет делать тот же useContext, но тогда тебе не придется вытягивать объек контекста

    const {addToPost, removeLike , isItLiked ,...others} = useContext(likedContext)
    // лайки если сильно хочется, лучше сделать атрибутом модели на BackEnd
    const [like, setLike] = useState(0)
    // const [disable, setDisable] = useState(false)
    // за это отвечает функция isItLiked
    const [isLiked, setIsLiked] = useState('NotLiked')
    // const button = document.querySelector('#button')?.ariaDisabled
    function addLike() {
        // здесь ты вызываешь функцию, а не получаешь ее, поэтому переменную лучше назват isPostLiked
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
                <button onClick={addLike} className={isLiked} >add like</button>
            </div>
        </div>

    )
}
// del
function userContext(likedContext: any): { [x: string]: any; addToPost: any; } {
    throw new Error("Function not implemented.");
}
function removeLike(props: IPosts) {
    throw new Error("Function not implemented.");
}

