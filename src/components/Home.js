import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Home = () => {
    const backgroundStyle = {
        backgroundImage: "url('https://wallpaperaccess.com/full/3481768.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        alignItems: 'center'
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#122D4F', color: '#B18021' }}>
                <div className="container">
                    <a className="navbar-brand" href="/Home">
                        <img className='Rounded-pill' src="logo192.png" alt="Avatar Logo" style={{ width: '80px', borderRadius: '60%' }} />
                    </a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className='nav-link text-white' to='/Home'>Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle text-white" href="/Materi" role="button" data-bs-toggle="dropdown">Materi</a>
                               <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Hidrokarbon dan Minyak Bumi</a></li>
                                <li><a className="dropdown-item" href="#">Hukum Termokimia</a></li>
                                <li><a className="dropdown-item" href="#">Laju Reaksi</a></li>
                                <li><a className="dropdown-item" href="#">Kesetimbangan Kimia</a></li>
                                <li><a className="dropdown-item" href="#">Larutan Asam Basa</a></li>
                                <li><a className="dropdown-item" href="#">Hidrolisis Garam</a></li>
                                <li><a className="dropdown-item" href="#">Larutan Penyangga</a></li>
                                <li><a className="dropdown-item" href="#">Kelarutan dan Hasil kali Kelarutan</a></li>
                                <li><a className="dropdown-item" href="#">Koloid</a></li>
                               </ul>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link text-white' to='/Aboutus'>About us</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link text-white' to='/Login'>Login</Link>
                            </li>
                        </ul>

                        <footer className="bg-light text-center text-white py-3">
                            
                        </footer>
                    </div>
                </div>
            </nav>
            <div style={backgroundStyle}>
                <div className="container text-white">
                    <div className="row">
                        <div className="col-md-4">
                            <h1 className="display-4">Welcome to Our Website</h1>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.</p>
                            <Link to="/Materi" className="btn btn-primary btn-lg"> AYO MULAI BELAJAR ! </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
