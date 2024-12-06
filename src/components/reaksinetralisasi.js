import React from 'react';
import { useNavigate } from 'react-router-dom';
import './reaksinetralisasi.css';
import Navbar from './Navbar';

const Reaksinetralisasi = () => {
  const navigate = useNavigate();  // Initialize navigate function
  
  // Fungsi untuk menavigasi kembali ke halaman utama
  const goToHome = () => {
    navigate('/');  // Navigate to the homepage
  };

  // Fungsi untuk menavigasi ke materi lain
  const goToOtherMaterial = (path) => {
    navigate(path);  // Navigate to the given path (e.g., another page)
  };

  return (
    <div className="reaksi-netralisasi-container">
      <Navbar />
      <h1>Reaksi Netralisasi</h1>

      {/* Background image */}
      <div className="background-image"></div>

      <h2>1. Pengertian Reaksi Netralisasi</h2>
      <p>
        Reaksi netralisasi adalah reaksi antara asam dan basa yang menghasilkan garam dan air. Proses ini terjadi ketika asam melepaskan ion H⁺ (proton) dan basa melepaskan ion OH⁻ (hidroksida). Ketika keduanya bertemu, mereka saling menetralkan, membentuk air (H₂O) dan garam.
      </p>
      <pre>
        Asam (H⁺) + Basa (OH⁻) → Air (H₂O) + Garam
      </pre>

      <h2>2. Reaksi Netralisasi pada Tingkat Ion</h2>
      <p>
        Pada tingkat ion, reaksi ini melibatkan pertemuan antara ion H⁺ dari asam dan ion OH⁻ dari basa yang menghasilkan air. Proses ini dapat dituliskan sebagai:
      </p>
      <pre>
        H⁺ (aq) + OH⁻ (aq) → H₂O (l)
      </pre>

      <h2>3. Contoh Reaksi Netralisasi</h2>
      <p>Berikut adalah beberapa contoh reaksi netralisasi yang umum ditemui:</p>
      <ul>
        <li>HCl (aq) + NaOH (aq) → NaCl (aq) + H₂O (l)</li>
        <li>H₂SO₄ (aq) + 2KOH (aq) → K₂SO₄ (aq) + 2H₂O (l)</li>
        <li>CH₃COOH (aq) + NH₄OH (aq) → CH₃COONH₄ (aq) + H₂O (l)</li>
      </ul>

      <h2>4. Jenis-jenis Asam dan Basa yang Terlibat</h2>
      <p>
        <strong>Asam kuat:</strong> HCl, H₂SO₄, HNO₃<br />
        <strong>Basa kuat:</strong> NaOH, KOH, Ca(OH)₂<br />
        <strong>Asam lemah:</strong> CH₃COOH, H₂CO₃<br />
        <strong>Basa lemah:</strong> NH₃, NaHCO₃
      </p>

      <h2>5. Pentingnya Reaksi Netralisasi</h2>
      <ul>
        <li>Keseimbangan pH dalam pengobatan penyakit asam lambung (antasida)</li>
        <li>Proses industri untuk mengolah limbah asam atau basa</li>
        <li>Penyesuaian pH tanah dalam pertanian</li>
      </ul>

      <h2>6. Stokiometri dalam Reaksi Netralisasi</h2>
      <p>Contoh stokiometri:</p>
      <pre>
        HCl (aq) + NaOH (aq) → NaCl (aq) + H₂O (l)
      </pre>

      <h2>7. Penyelesaian Masalah Terkait Reaksi Netralisasi</h2>
      <ul>
        <li>Menentukan konsentrasi larutan asam atau basa dengan titrasi</li>
        <li>Menghitung pH larutan hasil netralisasi</li>
      </ul>

      <h2>8. Fenomena yang Terkait dengan Reaksi Netralisasi</h2>
      <ul>
        <li>Perubahan suhu (reaksi eksotermik)</li>
        <li>Penggunaan indikator pH (fenolftalein, bromtimol biru)</li>
      </ul>

      <h2>9. Aplikasi Reaksi Netralisasi dalam Kehidupan Sehari-hari</h2>
      <ul>
        <li>Antasida untuk mengatasi gangguan pencernaan</li>
        <li>Pengolahan air limbah</li>
        <li>Penyesuaian pH tanah untuk pertanian</li>
      </ul>

      {/* Navigation buttons */}
      <div className="reaksi-netralisasi-button-container">
        <button onClick={goToHome} className="reaksi-netralisasi-nav-button">
          Kembali ke Halaman Utama
        </button>
        <button onClick={() => goToOtherMaterial('/asamdanbasakuatlemah')} className="reaksi-netralisasi-nav-button">
          Pelajari Asam Dan Basa Kuat Lemah
        </button>
      </div>
    </div>
  );
};

export default Reaksinetralisasi;
