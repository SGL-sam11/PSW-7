import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';
import './Hidrokarbon.css';

function HidrokarbonDanMinyakBumi() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div className="unique-app-container">
      <Navbar />
      <header className="unique-header" data-aos="fade-up">
        <h1 className="unique-main-title">Hidrokarbon dan Minyak Bumi: Sebuah Pengantar</h1>
        <p className="unique-sub-title">Mengenal lebih dalam tentang hidrokarbon dan bagaimana minyak bumi terbentuk serta manfaatnya!</p>
      </header>

      <section className="unique-content">
        <h2 data-aos="fade-up">Hidrokarbon: Definisi dan Jenis-Jenisnya</h2>
        <p className="unique-fade-in" data-aos="fade-up">
          Hidrokarbon adalah senyawa organik yang hanya terdiri dari dua unsur, yaitu karbon (C) dan hidrogen (H). Senyawa ini menjadi dasar dari banyak senyawa organik lainnya dan memiliki peran penting dalam kehidupan sehari-hari.
        </p>

        <div className="unique-box" data-aos="zoom-in">
          <h3>Jenis-Jenis Hidrokarbon</h3>
          <p><strong>Alkana:</strong> Hidrokarbon jenuh dengan ikatan tunggal antar atom karbon. Contoh: metana (CH₄), etana (C₂H₆).</p>
          <p><strong>Alkena:</strong> Hidrokarbon tak jenuh dengan satu ikatan rangkap dua antar atom karbon. Contoh: etena (C₂H₄).</p>
          <p><strong>Alkuna:</strong> Hidrokarbon tak jenuh dengan satu ikatan rangkap tiga antar atom karbon. Contoh: etuna (C₂H₂).</p>
          <p><strong>Aromatik:</strong> Hidrokarbon siklik dengan ikatan rangkap terkonjugasi. Contoh: benzena (C₆H₆).</p>
        </div>

        <h2 data-aos="fade-up">Proses Pembentukan Minyak Bumi</h2>
        <p className="unique-fade-in" data-aos="fade-up">
          Minyak bumi adalah campuran kompleks dari berbagai jenis hidrokarbon. Minyak bumi terbentuk dari sisa-sisa organisme yang terkubur dalam lapisan bumi selama jutaan tahun dan mengalami proses perubahan kimiawi.
        </p>

        <div className="unique-box" data-aos="zoom-in">
          <h3>Pembentukan Minyak Bumi</h3>
          <p><strong>Pembentukan Materi Organik:</strong> Sisa-sisa organisme seperti plankton dan tumbuhan laut terakumulasi di dasar laut.</p>
          <p><strong>Penguburan dan Pembentukan Sedimen:</strong> Materi organik terkubur oleh sedimen dan mengalami tekanan dan suhu yang tinggi.</p>
          <p><strong>Perubahan Menjadi Minyak Bumi:</strong> Selama jutaan tahun, materi organik mengalami perubahan kimiawi menjadi hidrokarbon yang membentuk minyak bumi.</p>
        </div>

        <div className="unique-box" data-aos="zoom-in">
          <h3>Fraksi-Fraksi Minyak Bumi</h3>
          <ul>
            <li><strong>Gas:</strong> Metana, etana, digunakan sebagai bahan bakar.</li>
            <li><strong>Nafta:</strong> Digunakan sebagai bahan baku petrokimia.</li>
            <li><strong>Bensin:</strong> Bahan bakar kendaraan bermotor.</li>
            <li><strong>Kerosin:</strong> Bahan bakar pesawat terbang dan minyak tanah.</li>
            <li><strong>Solar:</strong> Bahan bakar kendaraan diesel.</li>
            <li><strong>Minyak pelumas:</strong> Pelumas mesin.</li>
            <li><strong>Aspal:</strong> Bahan untuk membuat jalan.</li>
          </ul>
        </div>

        <div className="unique-box" data-aos="zoom-in">
        <h2 data-aos="fade-up">Pemanfaatan Hidrokarbon dan Minyak Bumi</h2>
        <ul className="unique-list-icons" data-aos="fade-up">
          <li><span className="unique-icon">⛽</span> Bahan bakar: Bensin, solar, gas, dan kerosene digunakan sebagai bahan bakar untuk transportasi dan pembangkit listrik.</li>
          <li><span className="unique-icon">🏭</span> Bahan baku industri: Nafta digunakan sebagai bahan baku untuk menghasilkan berbagai produk petrokimia seperti plastik, serat sintetis, dan pupuk.</li>
          <li><span className="unique-icon">🔧</span> Pelumas: Minyak pelumas digunakan untuk mengurangi gesekan pada mesin.</li>
          <li><span className="unique-icon">🛣️</span> Aspal: Aspal digunakan untuk membuat jalan dan atap.</li>
        </ul>
        </div>

        <div className="unique-box" data-aos="zoom-in">
        <h2 data-aos="fade-up">Dampak Negatif Penggunaan Minyak Bumi</h2>
        <p className="unique-fade-in" data-aos="fade-up">
          Meskipun memiliki banyak manfaat, penggunaan minyak bumi juga menimbulkan dampak negatif bagi lingkungan, antara lain:
        </p>
        <ul className="unique-list-icons" data-aos="fade-up">
          <li><span className="unique-icon">🌍</span> Pencemaran: Tumpahan minyak dapat mencemari laut dan tanah.</li>
          <li><span className="unique-icon">🌡️</span> Pemanasan global: Pembakaran minyak bumi menghasilkan gas rumah kaca yang menyebabkan pemanasan global.</li>
          <li><span className="unique-icon">💨</span> Hujan asam: Pembakaran minyak bumi menghasilkan senyawa belerang dan nitrogen oksida yang menyebabkan hujan asam.</li>
        </ul>
        </div>

        <Link to="/AlternatifEnergi">
          <button className="unique-cta-button" data-aos="fade-up">Lihat Alternatif Energi</button>
        </Link>
      </section>
    </div>
  );
}

export default HidrokarbonDanMinyakBumi;
