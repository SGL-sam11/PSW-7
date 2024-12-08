import React from 'react';
import { useNavigate } from 'react-router-dom';
import './asamdanbasakuatlemah.css';
import Navbar from './Navbar';

const Asamdanbasakuatlemah = () => {
  const navigate = useNavigate();

  // Fungsi untuk kembali ke halaman utama
  const goToHome = () => {
    navigate('/');
  };

  // Fungsi untuk menavigasi ke materi lain
  const goToOtherMaterial = (path) => {
    navigate(path);
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://roboguru-forum-cdn.ruangguru.com/187434b7-602e-43f1-9721-f786ce71ffaf.JPG")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '300px',
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
    marginBottom: '20px',
    backgroundColor: '#f1f1f1',
  };

  return (
    <div className="asam-basa-container">
      <Navbar />
      <h1 className="asam-basa-title">Asam dan Basa: Kuat dan Lemah</h1>

      {/* Background section */}
      <div className="asam-basa-background" style={backgroundStyle}></div>

      <p className="asam-basa-paragraph">
        Asam dan basa merupakan dua jenis zat kimia yang berperan penting dalam banyak reaksi kimia dan dalam kehidupan sehari-hari. Asam dan basa dapat digolongkan berdasarkan kekuatan ionisasi mereka, yaitu apakah mereka terionisasi secara sempurna atau hanya sebagian dalam larutan air.
      </p>

      <h2 className="asam-basa-subtitle">1. Pengertian Asam dan Basa</h2>
      <p className="asam-basa-paragraph">Asam adalah zat yang dapat melepaskan ion hidrogen (H⁺) atau proton dalam larutan air.</p>
      <p className="asam-basa-paragraph">Basa adalah zat yang dapat menerima ion hidrogen (H⁺) atau melepaskan ion hidroksida (OH⁻) dalam larutan air.</p>

      <h2 className="asam-basa-subtitle">2. Asam Kuat dan Asam Lemah</h2>
      <h3 className="asam-basa-subtitle">Asam Kuat</h3>
      <p className="asam-basa-paragraph">Asam kuat adalah asam yang terionisasi hampir sepenuhnya dalam larutan air. Contohnya:</p>
      <ul className="asam-basa-list">
        <li>Asam Klorida (HCl)</li>
        <li>Asam Sulfat (H₂SO₄)</li>
        <li>Asam Nitrat (HNO₃)</li>
        <li>Asam Perklorat (HClO₄)</li>
      </ul>

      <h3 className="asam-basa-subtitle">Asam Lemah</h3>
      <p className="asam-basa-paragraph">Asam lemah adalah asam yang hanya terionisasi sebagian dalam larutan air. Contohnya:</p>
      <ul className="asam-basa-list">
        <li>Asam Asetat (CH₃COOH)</li>
        <li>Asam Karbonat (H₂CO₃)</li>
        <li>Asam Fosfat (H₃PO₄)</li>
      </ul>

      <h2 className="asam-basa-subtitle">3. Basa Kuat dan Basa Lemah</h2>
      <h3 className="asam-basa-subtitle">Basa Kuat</h3>
      <p className="asam-basa-paragraph">Basa kuat adalah basa yang terionisasi sepenuhnya dalam larutan air. Contohnya:</p>
      <ul className="asam-basa-list">
        <li>Natrium Hidroksida (NaOH)</li>
        <li>Kalium Hidroksida (KOH)</li>
        <li>Kalsium Hidroksida (Ca(OH)₂)</li>
      </ul>

      <h3 className="asam-basa-subtitle">Basa Lemah</h3>
      <p className="asam-basa-paragraph">Basa lemah adalah basa yang hanya terionisasi sebagian dalam larutan air. Contohnya:</p>
      <ul className="asam-basa-list">
        <li>Amonia (NH₃)</li>
        <li>Sodium Bikarbonat (NaHCO₃)</li>
        <li>Amine (seperti CH₃NH₂)</li>
      </ul>

      <h2 className="asam-basa-subtitle">4. Perbedaan Asam dan Basa Kuat serta Lemah</h2>
      <table className="asam-basa-table">
        <thead>
          <tr>
            <th>Karakteristik</th>
            <th>Asam Kuat</th>
            <th>Asam Lemah</th>
            <th>Basa Kuat</th>
            <th>Basa Lemah</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tingkat Ionisasi</td>
            <td>Terionisasi sepenuhnya</td>
            <td>Terionisasi sebagian</td>
            <td>Terionisasi sepenuhnya</td>
            <td>Terionisasi sebagian</td>
          </tr>
          <tr>
            <td>Contoh</td>
            <td>HCl, H₂SO₄, HNO₃</td>
            <td>CH₃COOH, H₂CO₃, H₃PO₄</td>
            <td>NaOH, KOH, Ca(OH)₂</td>
            <td>NH₃, NaHCO₃, CH₃NH₂</td>
          </tr>
          <tr>
            <td>pH Larutan</td>
            <td>&lt; 3</td>
            <td>4 - 6</td>
            <td>&gt; 11</td>
            <td>8 - 10</td>
          </tr>
        </tbody>
      </table>

      <div className="asam-basa-button-container">
        <button onClick={goToHome} className="asam-basa-nav-button">
          Kembali ke Halaman Utama
        </button>
        <button onClick={() => goToOtherMaterial('/ContohSoall')} className="asam-basa-nav-button">
          Pelajari Contoh Soal
        </button>
      </div>
    </div>
  );
};

export default Asamdanbasakuatlemah;
