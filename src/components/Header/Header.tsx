import './Header.css'

export function Header(){
    return(
        <div className='header-root'>
            <a className="header-a" href="/">Main</a>
            <div className="search-bar">
                <img src="https://img.icons8.com/?size=100&id=7695&format=png&color=000000" alt="" />
            </div>
            <a className="header-a" href="/">Account</a>
        </div>
    )
}