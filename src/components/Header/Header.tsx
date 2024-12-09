import './Header.css'
import { Link } from "react-router-dom";

export function Header(){
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
        </div>
    )
}