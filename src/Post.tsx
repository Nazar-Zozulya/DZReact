interface IPostProps {
    title: string;
    description: string;
    src: string;
    author: string;
}

export function Post(props: IPostProps){
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img src="{props.src}" alt="" />
            <source />
            <p>{props.author}</p>
        </div>
    )
}