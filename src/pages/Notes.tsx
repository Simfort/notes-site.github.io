import { Route, Routes, useLocation } from "react-router";
import CreateNoteN from "../components/CreateNoteN/CreateNoteN";
import NotesListN from "../components/NotesListN/NotesListN";

export default function Notes() {
    const loc = useLocation()
    return <main className="notes">
        <NotesListN />
    </main>
}