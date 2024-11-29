import React from "react";
import { Link } from "react-router-dom"; // Import Link
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hidrokarbon.css";

const Hidrokarbon = () => {
  return (
    <div className="container">
      <Navbar />
      <div
        className="hero-section"
        style={{
          background: "linear-gradient(to right, #ff7e5f, #feb47b)",
          backgroundImage: "url('/chemistry.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <div className="hero-overlay">
          <h1 className="title">Hidrokarbon dan Minyak Bumi</h1>
          <p className="subtitle">
            Pelajari sifat, jenis, dan kegunaan hidrokarbon serta peran penting
            minyak bumi dalam kehidupan modern!
          </p>
        </div>
      </div>

      {/* Materi Section */}
      <section className="section" id="materi" data-aos="fade-up">
        <h2 className="section-title">Materi Hidrokarbon</h2>
        <div className="card-container">
          <div className="card">
            <h3 className="card-title">Pengertian Hidrokarbon</h3>
            <p className="card-text">
              Hidrokarbon diklasifikasikan menjadi alifatik (alkana, alkena,
              alkuna) dan aromatik (senyawa cincin benzena).
            </p>
            <Link className="btn btn-secondary" to="/hidropengertian">
              Pelajari Lebih Lanjut
            </Link>
          </div>
          <div className="card">
            <h3 className="card-title">Penggolongan Hidrokarbon</h3>
            <p className="card-text">
              Hidrokarbon dapat mengalami berbagai reaksi kimia seperti
              pembakaran, substitusi, dan adisi.
            </p>
            <Link className="btn btn-secondary" to="/penggolongan">
              Pelajari Lebih Lanjut
            </Link>
          </div>
          <div className="card">
            <h3 className="card-title">Proses Pengolahan Minyak Bumi</h3>
            <p className="card-text">
              Minyak bumi sebagai sumber utama hidrokarbon diekstraksi dan
              diolah menjadi berbagai produk.
            </p>
            <Link className="btn btn-secondary" to="/pengolahan">
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hidrokarbon;
  