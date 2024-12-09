import { useParams } from "react-router-dom";


export function PostPage(){
    const params = useParams();
    return(
        <div>
            <h1>{params.id}</h1>
        </div>
    )
}