// src/components/PerhitunganKonstanta.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './asamdanbasakuatlemah.css'; // Import CSS file for styling

const Asamdanbasakuatlemah = () => {
  const navigate = useNavigate(); // Initialize navigation function

  // Function to navigate back to the home page
  const goToHome = () => {
    navigate('/'); // Navigate to the home page
  };

  // Function to navigate to another material
  const goToOtherMaterial = (path) => {
    navigate(path); // Navigate to the provided path
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://roboguru-forum-cdn.ruangguru.com/187434b7-602e-43f1-9721-f786ce71ffaf.JPG")',  // Ganti dengan URL gambar yang benar
    backgroundSize: 'contain', // Menggunakan 'contain' agar gambar tidak terpotong dan tetap proporsional
    backgroundPosition: 'center', // Menjaga gambar tetap berada di tengah
    backgroundRepeat: 'no-repeat', // Menghindari pengulangan gambar
    height: '300px', // Anda bisa menyesuaikan dengan kebutuhan
    width: '100%', // Lebar elemen 100% dari parent container
    borderRadius: '10px', // Menambahkan border radius untuk sudut yang melengkung
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', // Memberikan efek bayangan
    marginTop: '20px', // Spasi atas
    marginBottom: '20px', // Spasi bawah
    backgroundColor: '#f1f1f1', // Warna latar belakang fallback jika gambar gagal dimuat
  };

  return (
    <div className="container">
      <h1>Asam dan Basa: Kuat dan Lemah</h1>
      
      {/* Menggunakan backgroundStyle untuk elemen div */}
      <div className="kesetimbangan-background" style={backgroundStyle}></div>

      <p>
        Asam dan basa merupakan dua jenis zat kimia yang berperan penting dalam banyak reaksi kimia dan dalam kehidupan sehari-hari. Asam dan basa dapat digolongkan berdasarkan kekuatan ionisasi mereka, yaitu apakah mereka terionisasi secara sempurna atau hanya sebagian dalam larutan air.
      </p>

      <h2>1. Pengertian Asam dan Basa</h2>
      <p>Asam adalah zat yang dapat melepaskan ion hidrogen (H⁺) atau proton dalam larutan air.</p>
      <p>Basa adalah zat yang dapat menerima ion hidrogen (H⁺) atau melepaskan ion hidroksida (OH⁻) dalam larutan air.</p>

      <h2>2. Asam Kuat dan Asam Lemah</h2>
      <h3>Asam Kuat</h3>
      <p>Asam kuat adalah asam yang terionisasi secara hampir sempurna dalam larutan air. Contohnya:</p>
      <ul>
        <li>Asam Klorida (HCl)</li>
        <li>Asam Sulfat (H₂SO₄)</li>
        <li>Asam Nitrat (HNO₃)</li>
        <li>Asam Perklorat (HClO₄)</li>
      </ul>
      
      <h3>Asam Lemah</h3>
      <p>Asam lemah adalah asam yang hanya terionisasi sebagian dalam larutan air. Contohnya:</p>
      <ul>
        <li>Asam Asetat (CH₃COOH)</li>
        <li>Asam Karbonat (H₂CO₃)</li>
        <li>Asam Fosfat (H₃PO₄)</li>
      </ul>

      <h2>3. Basa Kuat dan Basa Lemah</h2>
      <h3>Basa Kuat</h3>
      <p>Basa kuat adalah basa yang terionisasi sepenuhnya dalam larutan air. Contohnya:</p>
      <ul>
        <li>Natrium Hidroksida (NaOH)</li>
        <li>Kalium Hidroksida (KOH)</li>
        <li>Kalsium Hidroksida (Ca(OH)₂)</li>
      </ul>
      
      <h3>Basa Lemah</h3>
      <p>Basa lemah adalah basa yang hanya terionisasi sebagian dalam larutan air. Contohnya:</p>
      <ul>
        <li>Amonia (NH₃)</li>
        <li>Sodium Bikarbonat (NaHCO₃)</li>
        <li>Amine (seperti CH₃NH₂)</li>
      </ul>

      <h2>4. Perbedaan Asam dan Basa Kuat serta Lemah</h2>
      <table>
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

      {/* Navigation buttons */}
      <div className="button-container">
        <button onClick={goToHome} className="nav-button">
          Kembali ke Halaman Utama
        </button>
        <button onClick={() => goToOtherMaterial('/contoh-soal')} className="nav-button">
          Pelajari Contoh Soal
        </button>
      </div>
    </div>
  );
};

export default Asamdanbasakuatlemah;
