import { useState } from 'react'
import './CreateNoteN.scss'

export default function CreateNoteN() {
    const [name, setName] = useState('')
    const [value, setValue] = useState('')
    const writeMemory = () => {
        if (name && value) {
            localStorage.setItem(name, value)
        } else {
            return false
        }
    }
    return <section className='create-note'>

        <form className="note-form">
            <label >Name note`s`:
                <input onChange={(e) => setName(e.target.value)} className="note-form__name" type="text" />
            </label>
            <h2>Note</h2>
            <textarea onChange={(e) => setValue(e.target.value)} ></textarea>
            <button onClick={writeMemory} className='note-form__but'>Confrim</button>
        </form>
    </section>
}