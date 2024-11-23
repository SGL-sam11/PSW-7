import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './Home.css'

const Home = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#122D4F', color: '#B18021' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/Home">
                        <span><img className='Rounded-pill ms-3' src="chemistryhub.png" alt="Avatar Logo" style={{ width: '80px', borderRadius: '60%' }} /></span>
                    </a>
                    <a className="navbar-brand text-white" href="#"><strong>CHEMISTRY</strong>HUB</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className='nav-link text-white' to='/Home'>Home</Link>
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
                                <Link className='nav-link text-white' to='/Aboutus'>About us</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Quiz</a>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link text-white' to='/Login'>Login</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <div className='backgroundStyle'>
                <div className="container text-white">
                    <div className="row">
                        <div className="col-md-4">
                            <h1 className="display-5">Kamu ada di <strong>CHEMISTRYHUB</strong></h1>
                            <p className="lead">Selamat datang di situs web kami, <strong>CHEMISTRY HUB!</strong> Temukan materi pelajaran, eksperimen menarik, dan sumber daya lengkap untuk memahami kimia dengan mudah. Ayo mulai belajar dan eksplorasi dunia kimia bersama kami! 🌟🔬</p>
                            <Link to="/Hidrokarbon" className="btn btn-lg text-white" style={{ backgroundColor: '#6CA9AF'}}> <strong>AYO MULAI BELAJAR !</strong> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
