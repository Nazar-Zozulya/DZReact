import { ReactNode } from "react"

interface IMainPageProps {
    children?: ReactNode
}


export function MainPage(props: IMainPageProps){

    return (
        <div className = "MainPage">
            {props.children}
        </div>
    )
}