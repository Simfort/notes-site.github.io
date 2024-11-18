import github from '../assets/links/github.svg';
import telegram from '../assets/links/telegram.svg';
import youtube from '../assets/links/youtube.svg';
import './Footer.scss';

export default function Footer() {
    return <footer className="footer">
        <div className="footer-panel__link">
            <a className="link-github" href="https://github.com/Simfort"><img width={50} src={github} alt="" /></a>
            <a className="link-telegram" href="https://t.me/getcode_front"><img width={50} src={telegram} alt="" /></a>
            <a className="link-youtube" href="https://youtube.com/@simfort_iron?si=T8KHCiBLqgH_sybe"><img width={50} src={youtube} alt="" /></a>
        </div>
    </footer>
}