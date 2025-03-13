import { useUserContext } from '../../context/userContext';
import './Header.css'
import { Link } from "react-router-dom";

export function Header(){
    const { isAuth } = useUserContext()

    return(
        <div className='header-root'>
            <Link to={"/"}>
                <button className="header-button" ><p>Main</p></button>
            </Link>
            <div className="search-bar">
                <img src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000" alt="" />
            </div>
            <Link to={"/posts"}>
                <button className="header-button" ><p>Posts</p></button>
            </Link>
            <Link to={"/liked-posts"}>
                <button className="header-button" ><p>Liked Posts</p></button>
            </Link>
            { !isAuth ? 
            <div className="header-auth">
                <Link to={"/login"}><button className='header-button'>Login</button></Link> 
                <Link to={"/reg"}><button className='header-button'>Registration</button></Link> 
            </div>
            : 
            <Link to={"/user"}><button className='header-button'>profile</button></Link> 
            }
        </div>
    )
}