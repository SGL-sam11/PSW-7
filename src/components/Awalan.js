import React from 'react';
import { Link } from 'react-router-dom';
import './Awalan.css'

const Awalan = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#122D4F', color: '#B18021' }}>
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/"><strong>CHEMISTRY</strong>HUB</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/Register"><strong>Register</strong></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/Login"><strong>Login</strong></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="backgroundStyle">
        <div className='overlay'>
        <div className="container text-white">
          <div className="row">
            <div className="col-md-4">
              <h1 className="display-5">Kamu berada di <strong>CHEMISTRY</strong>HUB</h1>
              <p className="lead">
                Selamat datang di situs web kami, <strong>CHEMISTRY HUB!</strong> Temukan materi pelajaran, eksperimen menarik,
                dan sumber daya lengkap untuk memahami kimia dengan mudah. Ayo mulai belajar dan eksplorasi dunia kimia bersama kami! 🌟🔬
              </p>
              <Link to="/Login" className="btn btn-lg text-white" style={{ backgroundColor: '#6CA9AF' }}>
                <strong>AYO MULAI BELAJAR !</strong>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Footer Section */}
        <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#1c2331' }}>
          {/* Section: Social media */}
          <section className="d-flex justify-content-between p-4" style={{ backgroundColor: '#6351ce' }}>
            <div className="me-5">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <a href="#" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="text-white me-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white me-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-white me-4">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>

          {/* Section: Links */}
          <section>
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Company name</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                  <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                  <p><a href="#!" className="text-white">MDBootstrap</a></p>
                  <p><a href="#!" className="text-white">MDWordPress</a></p>
                  <p><a href="#!" className="text-white">BrandFlow</a></p>
                  <p><a href="#!" className="text-white">Bootstrap Angular</a></p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                  <p><a href="#!" className="text-white">Your Account</a></p>
                  <p><a href="#!" className="text-white">Become an Affiliate</a></p>
                  <p><a href="#!" className="text-white">Shipping Rates</a></p>
                  <p><a href="#!" className="text-white">Help</a></p>
                </div>

              </div>
            </div>
          </section>

          {/* Copyright */}
          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2024 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
        </footer>
      </div>
  );
};

export default Awalan;
