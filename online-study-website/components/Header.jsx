import { navLinks } from '../src/data'
import Link from 'next/link'
import styles from './styles/Header.module.css'
import {useRouter} from 'next/router'

export default function Header () {
    const cur_path = useRouter().pathname;

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className='container-fluid justify-content-between'>
                <Link href='/'>
                    <a className='navbar-brand mb-0 h1'>Online Study Prediction</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href='/'>
                                <a className={cur_path == '/' ? 'nav-link active text-decoration-underline' : 'nav-link'} aria-current="page">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/about'>
                                <a className={cur_path == '/about' ? 'nav-link active text-decoration-underline' : 'nav-link'}>About</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/team'>
                                <a className={cur_path == '/team' ? 'nav-link active text-decoration-underline' : 'nav-link'}>Team</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}