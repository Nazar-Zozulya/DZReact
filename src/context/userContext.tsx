import { createContext, ReactNode, useContext, useState } from "react"
import { Response } from "../shared/types/response"

interface IUser{
    id: number;
    username: string;
    email: string;
    password: string;
    role: string;
}

interface IUserContext{
    user: IUser | null;
    login: (email: string, password: string) => void;
    register: (username: string, email:string, password: string) => void;   
    isAuth: () => boolean;
}

const initialValue: IUserContext = {
    user: null,
    login: (email: string, password: string) => {},
    register: (username: string, email:string, password: string) => {},
    isAuth: () => false,
}

const userContext = createContext<IUserContext>(initialValue)


export function useUserContext(){
    return useContext(userContext)
}


interface IUserContextProviderProps{
    children?: ReactNode
}

export function UserContextProvider(props: IUserContextProviderProps){
    const [user, setUser] = useState<IUser | null>(null)

    async function login(email: string, password: string){
        try{
            const response = await fetch("http://localhost:8000/user/login", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({'email': email, 'password': password})
            })
            const result: Response<string> = await response.json()
            if (result.status === 'error'){
                console.log(result.message)
                return
            }
            
            getMe(result.data)

            localStorage.setItem('token',result.data)
        } catch(error){
            console.error(error)
        }
    }


    async function register(username: string, email: string, password: string){
        try{
            const response = await fetch("http://localhost:8000/user/register", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({'username': username, 'email': email, 'password': password})
            })
            const result: Response<string> = await response.json()
            if (result.status === 'error'){
                console.log(result.message)
                return
            }

            getMe(result.data)

            localStorage.setItem('token',result.data)
        } catch(error){
            console.error(error)
        }
    }

    async function getMe(token: string){
        try{
            const response = await fetch("http://localhost:8000/user/me", {
                headers: {'Authorization': `Bearer ${token}`}
            })
            const result: Response<IUser> = await response.json()
            if (result.status === 'error'){
                console.log(result.message)
                return
            }
            setUser(result.data)
        } catch(error){
            console.error(error)
        }
    }

    function isAuth(){
        const token = localStorage.getItem('token')
        if (!token) return false
        return true
    }


    return (
        <userContext.Provider 
        value={{
            user:user,
            login: login,
            register: register,
            isAuth: isAuth,
        }}>

        {props.children}
        </userContext.Provider>
    )
}