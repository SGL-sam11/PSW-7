import React from 'react';
import { Link } from 'react-router-dom';
import './Awalan.css';
import Footer from './Footer';

const Awalan = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            <strong>CHEMISTRY</strong>HUB
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/Register">
                  <strong>Register</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  <strong>Login</strong>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="backgroundStyle">
        <div className="overlay">
          <div className="container text-white hero-content">
            <div className="row">
              <div className="col-md-6">
                <h1 className="display-5">Kamu berada di <strong>CHEMISTRY</strong>HUB</h1>
                <p className="lead">
                  Selamat datang di situs web kami, <strong>CHEMISTRY HUB!</strong> Temukan materi pelajaran, eksperimen menarik,
                  dan sumber daya lengkap untuk memahami kimia dengan mudah. Ayo mulai belajar dan eksplorasi dunia kimia bersama kami! 🌟🔬
                </p>
                <Link to="/Login" className="btn btn-lg custom-btn">
                  <strong>AYO MULAI BELAJAR!</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Awalan;
