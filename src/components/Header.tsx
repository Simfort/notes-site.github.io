import { useLocation } from "react-router";
import './Header.scss'
export default function Header() {
    const loc = useLocation()
    return <header className="header">
        <h1>{loc.pathname == '/' ? 'Welcome To The Home' : 'Welcome To The Notes'}</h1>
    </header>
}