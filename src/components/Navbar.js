import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'; // Tambahkan file CSS animasi di sini

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light animated-navbar" style={{ backgroundColor: '#122D4F', color: '#B18021' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/Home">
                        <img className="Rounded-pill ms-3" src="chemistryhub.png" alt="Avatar Logo" style={{ width: '80px', borderRadius: '60%' }} />
                    </a>
                    <a className="navbar-brand text-white" href="#"><strong>CHEMISTRY</strong>HUB</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="/Materi" role="button" data-bs-toggle="dropdown">Materi</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/Hidrokarbon">Hidrokarbon dan Minyak Bumi</a></li>
                                    <li><a className="dropdown-item" href="#">Hukum Termokimia</a></li>
                                    <li><a className="dropdown-item" href="#">Laju Reaksi</a></li>
                                    <li><a className="dropdown-item" href="/kesetimbangan">Kesetimbangan Kimia</a></li>
                                    <li><a className="dropdown-item" href="#">Larutan Asam Basa</a></li>
                                    <li><a className="dropdown-item" href="#">Hidrolisis Garam</a></li>
                                    <li><a className="dropdown-item" href="/Penyangga">Larutan Penyangga</a></li>
                                    <li><a className="dropdown-item" href="#">Kelarutan dan Hasil kali Kelarutan</a></li>
                                    <li><a className="dropdown-item" href="/koloid">Koloid</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/Aboutus">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/Materi"> MATERI </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/Quiz">Quiz</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/Login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;
