import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PostPage.css'
import { usePostById } from "../../hooks/usePostById";


// interface IPostProps {
//     id: string;
//     title: string;
//     description: string;
//     category: string;
//     src: string;
//     author: string;
// }

// function addPost(props: IPostProps){
//         return <div>
//             <h1>{props.id}</h1>
//             <h2>{props.title}</h2>
//             <p>{props.description}</p>
//             <img src={props.src} alt='123' />
//             <h3>{props.author}</h3>
//         </div>
//     }

export function PostPage(){
    // const postPage = [
        // {{id: 0, tags:'boss', title: '1 post', description: '1 description', social_image: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', username: 'a4'}
    // ]
    // const postPage = {id: 0, tags:'boss', title: '1 post', description: '1 description', social_image: 'https://i.ytimg.com/vi/lhLA7w9wlfE/hqdefault.jpg', username: 'a4'}

    // const [post, setPost] = useState(postPage)

    const params = useParams();

    const { post } = usePostById(Number(params.id)) 

    // useEffect(()=>{
    //         async function getPoss(){
    //             const response = await fetch(`https://dev.to/api/articles/${params.id}`)
    //             const posts = await response.json()
    //             post(posts)
    //         }
    //         getPost()
    //     },[])
    return(
        <div>
            <div className="post">
                <img src={post?.social_image} alt="" />
                <div className="line"></div>
                <div className="text">
                    <h1 className="title">{post?.title}</h1>
                    <p className="category">{post?.tags}</p>
                    <p className="description">{post?.description}</p>
                    <p className="author">{post?.username}</p>
                </div>
            </div>
        </div>
    )
}