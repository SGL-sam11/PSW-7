import React from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Awalan = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#122D4F', color: '#B18021' }}>
                <div className="container">
                    <a className="navbar-brand text-white" href="#"><strong>CHEMISTRY</strong>HUB</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/Register">Register</a>
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
                            <Link to="/Login" className="btn btn-lg text-white" style={{ backgroundColor: '#6CA9AF'}}> <strong>AYO MULAI BELAJAR !</strong> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Awalan;
