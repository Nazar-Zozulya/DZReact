import { Link } from 'react-router-dom'
import './Footer.css'

export function Footer(){
    return(
        <div className='footer-root'>
            
            <Link to={'/'} >
                <button >Main</button>
            </Link>
            <Link to={'/'} >
                <button>Account</button>
            </Link>

        </div>
    )
}