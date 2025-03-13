import { useUserContext } from "../../context/userContext"



export function UserPage(){
    const { user } = useUserContext()

    return(
        <div className="UserPage">
            <p>{user?.username}</p>
            <p>{user?.email}</p>
            <p>{user?.role}</p>
        </div>
    )
}