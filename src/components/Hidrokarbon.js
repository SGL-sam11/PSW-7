import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hidrokarbon.css";
import Navbar from "./Navbar";

const Hidrokarbon = () => {
  return (
    <div className="container">
      <Navbar/>
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
            <a className="btn btn-secondary" href="/pengertian">
              Pelajari Lebih Lanjut
            </a>
          </div>
          <div className="card">
            <h3 className="card-title">Penggolongan Hidrokarbon</h3>
            <p className="card-text">
              Hidrokarbon dapat mengalami berbagai reaksi kimia seperti
              pembakaran, substitusi, dan adisi.
            </p>
            <a className="btn btn-secondary" href="/penggolongan">
              Pelajari Lebih Lanjut
            </a>
          </div>
          <div className="card">
            <h3 className="card-title">Proses Pengolahan Minyak Bumi</h3>
            <p className="card-text">
              Minyak bumi sebagai sumber utama hidrokarbon diekstraksi dan
              diolah menjadi berbagai produk.
            </p>
            <a className="btn btn-secondary" href="/pengolahan">
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </section>

      {/* Interaksi Section */}
      <section className="section" data-aos="fade-up">
        <h2 className="section-title">Interaksi Interaktif</h2>
        <div className="feature-container">
          <div className="feature-card">
            <i className="fas fa-flask" style={{ fontSize: "36px", color: "#4caf50" }}></i>
            <h3>Simulasi Reaksi</h3>
            <p>
              Eksplorasi bagaimana reaksi kimia terjadi dengan simulasi
              interaktif.
            </p>
            <a className="btn btn-primary" href="/simulasi">
              Lihat Simulasi
            </a>
          </div>
          <div className="feature-card">
            <i className="fas fa-video" style={{ fontSize: "36px", color: "#2196f3" }}></i>
            <h3>Video Pembelajaran</h3>
            <p>
              Tonton video edukasi tentang hidrokarbon dan minyak bumi yang
              dikemas menarik.
            </p>
            <a className="btn btn-primary" href="/video">
              Tonton Video
            </a>
          </div>
          <div className="feature-card">
            <i className="fas fa-question-circle" style={{ fontSize: "36px", color: "#ff5722" }}></i>
            <h3>Contoh Soal</h3>
            <p>
              Uji pemahaman Anda dengan contoh soal yang menantang dan menarik.
            </p>
            <a className="btn btn-primary" href="/kuis">
              Lihat Soal
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hidrokarbon;
