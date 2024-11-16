import { NavLink, Link } from 'react-router-dom'
import './NavLink.scss'
export default function NavSite() {
    return <nav className='nav'>
        <NavLink className={({ isActive, isPending }) =>
            isActive ? "nav__link nav__link-active" : "nav__link"
        } to='/'>Home</NavLink>
        <NavLink className={({ isActive, isPending }) =>
            isActive ? "nav__link nav__link-active" : "nav__link"
        } to='/notes'>Notes</NavLink>
    </nav >
}