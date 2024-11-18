import './AboutSectH.scss'
import memory from '../../assets/memory.svg'
import note from '../../assets/notebook.svg'
import quill from '../../assets/quill.svg'
import notebook from '../../assets/background-notebook.jpg'

export default function AboutSectH() {
    return <section className="section-about">
        <div className='section-about__text'>
            <h2>What about this site?</h2>
            <p>This give you fucntion creating the notes.Notes are the memory on your computer,you can creating this memory on my web-site.</p>
        </div>

        <div className="images-about">
            <div className='images'>
                <img src={quill} alt="" className="images-about__img --1" />
                <img src={note} alt="" className="images-about__img --2" />
                <img src={memory} alt="" className="images-about__img --3" />
            </div>

            <p className='algoritm'>You always can follow algoritm:
                <ul>
                    <li>Write</li>
                    <li>Save</li>
                    <li>Think</li>
                </ul>
            </p>
        </div>
    </section>
}