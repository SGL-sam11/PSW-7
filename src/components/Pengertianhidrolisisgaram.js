import React from 'react';
import { useNavigate } from 'react-router-dom';  // Mengimpor useNavigate untuk navigasi
import './Pengertianhidrolisisgaram.css'; // Mengimpor file CSS
import Navbar from './Navbar';

const Pengertianhidrolisisgaram = () => {
  const navigate = useNavigate();  

  // Fungsi untuk menavigasi ke halaman utama
  const goToHome = () => {
    navigate('/');  // Mengarahkan pengguna ke halaman utama
  };

  // Fungsi untuk menavigasi ke materi lain
  const goToOtherMaterial = (path) => {
    navigate(path);  // Mengarahkan pengguna ke materi lain sesuai path
  };

  // Gambar ilustrasi hidrolisis garam
  const hydrolysisImage = 'https://upload.wikimedia.org/wikipedia/commons/0/06/Hidrolisis.png';  // Gambar ilustrasi hidrolisis garam

  return (
    <div className="pengertianhidrolisisgaram-container">
        <Navbar />
      <h1 className="pengertianhidrolisisgaram-h1">Pengertian Hidrolisis Garam</h1>
      
      <p className="pengertianhidrolisisgaram-p">
        Hidrolisis garam adalah suatu proses kimia di mana garam yang terlarut dalam air bereaksi dengan air (H₂O) membentuk asam (H⁺) atau basa (OH⁻). Proses ini terjadi karena garam yang terbentuk dari asam dan basa dapat berinteraksi dengan air dan menghasilkan perubahan dalam komposisi kimia air, yang mempengaruhi pH larutan.
      </p>

      <p className="pengertianhidrolisisgaram-p">
        Hidrolisis garam terjadi ketika ion-ion dari garam yang larut dalam air berinteraksi dengan molekul air, menyebabkan pemecahan (atau hidrolisis) garam menjadi ion-ion yang lebih sederhana, yang pada gilirannya dapat meningkatkan atau menurunkan keasaman atau kebasaan larutan.
      </p>

      <h2 className="pengertianhidrolisisgaram-h2">Proses Hidrolisis Garam</h2>
      <p className="pengertianhidrolisisgaram-p">
        Hidrolisis garam dapat dibagi menjadi tiga jenis utama, bergantung pada kekuatan asam dan basa yang membentuk garam tersebut:
      </p>

      <h3 className="pengertianhidrolisisgaram-h3">Hidrolisis Garam Asam Kuat dan Basa Lemah</h3>
      <p className="pengertianhidrolisisgaram-p">Contoh: Ammonium klorida (NH₄Cl) yang terbentuk dari asam kuat (HCl) dan basa lemah (NH₃).</p>
      <p className="pengertianhidrolisisgaram-p">Reaksi:</p>
      <pre className="pengertianhidrolisisgaram-pre">
        NH₄⁺ + H₂O → NH₃ + H₃O⁺
      </pre>

      <h3 className="pengertianhidrolisisgaram-h3">Hidrolisis Garam Basa Kuat dan Asam Lemah</h3>
      <p className="pengertianhidrolisisgaram-p">Contoh: Natrium asetat (NaOAc) yang terbentuk dari asam lemah (CH₃COOH) dan basa kuat (NaOH).</p>
      <p className="pengertianhidrolisisgaram-p">Reaksi:</p>
      <pre className="pengertianhidrolisisgaram-pre">
        CH₃COO⁻ + H₂O → CH₃COOH + OH⁻
      </pre>

      <h3 className="pengertianhidrolisisgaram-h3">Hidrolisis Garam Asam Lemah dan Basa Lemah</h3>
      <p className="pengertianhidrolisisgaram-p">Contoh: Garam amonium asetat (NH₄C₂H₃O₂) yang terbentuk dari asam lemah (CH₃COOH) dan basa lemah (NH₃).</p>

      <h2 className="pengertianhidrolisisgaram-h2">Faktor yang Mempengaruhi Hidrolisis Garam</h2>
      <p className="pengertianhidrolisisgaram-p">
        Beberapa faktor yang mempengaruhi laju dan derajat hidrolisis garam antara lain:
      </p>
      <ul className="pengertianhidrolisisgaram-ul">
        <li className="pengertianhidrolisisgaram-p">Kekuatan asam dan basa yang membentuk garam</li>
        <li className="pengertianhidrolisisgaram-p">Konsentrasi garam</li>
        <li className="pengertianhidrolisisgaram-p">Suhu</li>
        <li className="pengertianhidrolisisgaram-p">Pengaruh ion lain dalam larutan</li>
      </ul>

      <h2 className="pengertianhidrolisisgaram-h2">Contoh-contoh Garam yang Mengalami Hidrolisis</h2>
      <ul className="pengertianhidrolisisgaram-ul">
        <li className="pengertianhidrolisisgaram-p">Ammonium klorida (NH₄Cl): Menghasilkan larutan asam</li>
        <li className="pengertianhidrolisisgaram-p">Natrium asetat (NaOAc): Menghasilkan larutan basa</li>
        <li className="pengertianhidrolisisgaram-p">Natrium karbonat (Na₂CO₃): Menghasilkan larutan basa</li>
      </ul>

      <h3 className="pengertianhidrolisisgaram-h3">Ilustrasi Hidrolisis Garam</h3>
      <img src={hydrolysisImage} alt="Ilustrasi Hidrolisis Garam" style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }} />

      {/* Tombol untuk navigasi */}
      <div className="pengertianhidrolisisgaram-button-container">
        <button onClick={goToHome} className="pengertianhidrolisisgaram-nav-button">
          Kembali ke Halaman Utama
        </button>
        <button onClick={() => goToOtherMaterial('/HidrolisisGaram')} className="pengertianhidrolisisgaram-nav-button">
          Pelajari Hidrolisis Garam
        </button>
        <button onClick={() => goToOtherMaterial('/FaktoryangMempengaruhi')} className="pengertianhidrolisisgaram-nav-button">
          Pelajari Faktor yang Mempengaruhi
        </button>
      </div>
    </div>
  );
};

export default Pengertianhidrolisisgaram;
