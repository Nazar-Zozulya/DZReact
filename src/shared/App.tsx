import { LikedContextProvider } from "../context/likedContext"
import { UserContextProvider } from "../context/userContext"
import { AppRoutes } from "../routes/routes"

export function App(){


    return(
        <div>
            <UserContextProvider>
                <LikedContextProvider>
                    <AppRoutes></AppRoutes>
                </LikedContextProvider>
            </UserContextProvider>
        </div>
    )
}