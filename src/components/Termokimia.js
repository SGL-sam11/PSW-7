import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Termokimia.css';

function Termokimia() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div className="app-container">
      <header className="header" data-aos="fade-up">
        <h1 className="main-title">Termokimia: Mengukur Panas dalam Reaksi Kimia</h1>
        <p className="sub-title">Belajar tentang perubahan energi dalam reaksi kimia secara sederhana dan menarik!</p>
      </header>

      <section className="content">
        <h2 data-aos="fade-up">Konsep Dasar Termokimia</h2>
        <p className="fade-in" data-aos="fade-up">
          Termokimia adalah cabang ilmu kimia yang mempelajari tentang perubahan energi, khususnya energi panas
          (kalor), yang menyertai proses kimia dan fisika. Dalam kehidupan sehari-hari, kita seringkali menemukan contoh termokimia,
          seperti pembakaran kayu yang menghasilkan panas, atau es yang mencair menyerap panas dari lingkungan.
        </p>

        <div className="box" data-aos="zoom-in">
          <h3>Sistem dan Lingkungan</h3>
          <p><strong>Sistem:</strong> Bagian dari alam semesta yang menjadi pusat perhatian kita (misalnya, reaksi kimia dalam labu).</p>
          <p><strong>Lingkungan:</strong> Bagian dari alam semesta di luar sistem yang berinteraksi dengan sistem.</p>
        </div>

        <div className="box" data-aos="zoom-in">
          <h3>Reaksi Eksoterm dan Endoterm</h3>
          <p><strong>Reaksi eksoterm:</strong> Reaksi yang melepaskan energi ke lingkungan sehingga suhu lingkungan meningkat.</p>
          <p><strong>Reaksi endoterm:</strong> Reaksi yang menyerap energi dari lingkungan sehingga suhu lingkungan menurun.</p>
        </div>

        <div className="image-container">
          <img className="responsive-img" src="https://images.pexels.com/photos/9408000/pexels-photo-9408000.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Proses Pembakaran Kayu" data-aos="fade-right" />
          <img className="responsive-img" src="https://images.pexels.com/photos/434259/pexels-photo-434259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Es Mencair" data-aos="fade-left" />
        </div>

        <h2 data-aos="fade-up">Contoh Persamaan Termokimia</h2>
        <pre className="code-block" data-aos="zoom-in">
          C(s) + O₂(g) → CO₂(g)    ΔH = -393,5 kJ/mol
        </pre>
        <p data-aos="fade-up">
          Persamaan di atas menunjukkan bahwa pembakaran 1 mol karbon (C) menghasilkan 1 mol karbon dioksida (CO₂) dan melepaskan energi sebesar 393,5 kJ.
        </p>

        <h2 data-aos="fade-up">Aplikasi Termokimia</h2>
        <ul className="list-icons" data-aos="fade-up">
          <li><span className="icon">🔥</span> Produksi energi: Pembakaran bahan bakar fosil, reaksi nuklir.</li>
          <li><span className="icon">🍽️</span> Industri makanan: Proses pengolahan makanan, seperti pemanasan dan pendinginan.</li>
          <li><span className="icon">💊</span> Farmasi: Pengembangan obat-obatan.</li>
          <li><span className="icon">🌍</span> Lingkungan: Studi tentang perubahan iklim, polusi udara.</li>
        </ul>

        <Link to="/Hukumdasar">
          <button className="cta-button" data-aos="fade-up">Hukum Dasar Termokimia</button>
        </Link>
      </section>
    </div>
  );
}

export default Termokimia;