
import { useRef } from 'react'
import './AuothorSectH.scss'
export default function AuothorSectH() {
    const light = useRef<any>()
    const section = useRef<any>()
    const mouseMoveHandler = (e: any) => {
        light.current.style.left = `${e.clientX - 50}px`
        light.current.style.top = `${e.clientY - section.current.clientHeight + section.current.clientHeight / 2}px`
    }
    return <section ref={section} onPointerDown={mouseMoveHandler} onMouseMove={mouseMoveHandler} className='section-author'>
        <div ref={light} className='light'></div>
        <h2 className='section-author__h2'>Who`s author this site? </h2>
        <p className='section-author__text'>I am David,i am 14 years old.I living in Russia,Simferopol.I love programmin and i know frontend develop.This site created for my portfolio.This site created on <ul>
            <li>HTML/CSS</li>
            <li>JS/TS</li>
            <li>React and react-router</li>
            <li>Git</li>
        </ul></p>
        <p className='section-author__hiddenText' >It not all sites.You can search they here on my github Simfart!</p>
    </section>
}