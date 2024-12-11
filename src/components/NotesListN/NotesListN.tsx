import { useEffect } from "react"
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import './NotesListN.scss'
import plus from '../../assets/plus.svg'

function Note({ text }: { text: string }) {
    return <div className="note">
        <p>{text}</p>
    </div>
}

export default function NotesListN() {
    const list = localStorage
    const loc = useLocation()
    const navigate = useNavigate()
    const navigateToNotes = navigate('/notes')
    useEffect(() => {
        console.log(list)
    }, [])
    return <section className="notes-list">
        <div className="list-link">
            {Object.keys(localStorage).map((val, i) => <Link key={i} to={`/notes/${val}`}>{val}</Link>)}
            <Link onClick={navigateToNotes as any} to='/notes/create'><img src={plus} width={50} alt="add" /></Link>
        </div>
        <Note text={localStorage.getItem(loc.pathname.slice(7)) as string} />
    </section>
}