import React from 'react';
import { Link } from 'react-router-dom'; // Mengimpor Link untuk navigasi
import './Aplikasihidrolisis.css'; // Mengimpor file CSS
import Navbar from './Navbar';

// Komponen utama
const Aplikasihidrolisis = () => {
  return (
    <div className="aplikasihidrolisis-container">
        <Navbar />
      <h1 className="aplikasihidrolisis-title">Aplikasi Hidrolisis Garam Dalam Kehidupan Sehari Hari</h1>
      <div className="aplikasihidrolisis-background"></div>  {/* Background image handled by CSS */}

      <p className="aplikasihidrolisis-paragraph">
        Reaksi hidrolisis garam digunakan dalam banyak proses industri untuk mengatur pH larutan, yang sangat penting untuk kelancaran reaksi kimia dan produksi berbagai bahan kimia.
      </p>

      <h2 className="aplikasihidrolisis-subtitle">1. Industri Kimia</h2>
      <p className="aplikasihidrolisis-paragraph">
        Beberapa proses kimia memerlukan pH yang sangat spesifik untuk memperoleh hasil yang optimal. Dalam hal ini, garam yang mengalami hidrolisis sering digunakan untuk mengatur pH larutan.
      </p>
      <h3 className="aplikasihidrolisis-section-title">Contoh: Industri Sabun</h3>
      <p className="aplikasihidrolisis-paragraph">
        Pada produksi deterjen atau sabun, proses hidrolisis digunakan untuk mengatur pH agar proses pembuatan sabun berjalan lancar. Misalnya, natrium karbonat (Na₂CO₃) yang digunakan dalam industri sabun, akan terhidrolisis dalam air menghasilkan ion karbonat (CO₃²⁻) yang dapat menambah pH larutan.
      </p>

      <h2 className="aplikasihidrolisis-subtitle">2. Pengolahan Air</h2>
      <p className="aplikasihidrolisis-paragraph">
        Hidrolisis garam digunakan dalam pengolahan air, terutama untuk mengatur pH air dan menghilangkan ion-ion tertentu yang dapat mencemari air.
      </p>
      <h3 className="aplikasihidrolisis-section-title">2.1 Penyaringan Air dan Softener</h3>
      <p className="aplikasihidrolisis-paragraph">
        Dalam sistem penyaringan air, terutama dalam pengolahan air untuk keperluan rumah tangga, hidrolisis garam digunakan untuk mengurangi kandungan kalsium (Ca²⁺) dan magnesium (Mg²⁺) dalam air. Proses ini dilakukan dengan menggunakan garam berbasis natrium, seperti natrium klorida (NaCl) dalam mesin water softener.
      </p>

      <h2 className="aplikasihidrolisis-subtitle">3. Pertanian dan Pemupukan</h2>
      <p className="aplikasihidrolisis-paragraph">
        Di sektor pertanian, hidrolisis garam memiliki aplikasi yang sangat penting dalam pengaturan pH tanah dan penyediaan nutrisi yang dibutuhkan oleh tanaman.
      </p>

      <h3 className="aplikasihidrolisis-section-title">3.1 Pengatur pH Tanah</h3>
      <p className="aplikasihidrolisis-paragraph">
        Garam tertentu digunakan untuk menurunkan atau meningkatkan pH tanah, tergantung pada kebutuhan tanaman. Tanaman tertentu tumbuh lebih baik di tanah yang sedikit asam atau basa.
      </p>

      <h2 className="aplikasihidrolisis-subtitle">4. Pengawetan Makanan</h2>
      <p className="aplikasihidrolisis-paragraph">
        Hidrolisis garam juga digunakan dalam proses pengawetan makanan. Proses ini berfungsi untuk meningkatkan umur simpan makanan dan mencegah pertumbuhan mikroorganisme yang merusak makanan.
      </p>

      <h2 className="aplikasihidrolisis-subtitle">5. Kesehatan dan Penggunaan Medis</h2>
      <p className="aplikasihidrolisis-paragraph">
        Hidrolisis garam juga memiliki aplikasi medis, terutama dalam bentuk larutan garam untuk rehidrasi dan pengobatan.
      </p>

      <h3 className="aplikasihidrolisis-section-title">5.1 Larutan Elektrolit dan Rehidrasi</h3>
      <p className="aplikasihidrolisis-paragraph">
        Dalam medis, larutan elektrolit, seperti larutan garam fisiologis, digunakan untuk rehidrasi tubuh dan menggantikan elektrolit yang hilang akibat dehidrasi atau penyakit.
      </p>

      {/* Navigasi menggunakan <Link> */}
      <div className="aplikasihidrolisis-button-container">
        <Link to="/" className="aplikasihidrolisis-nav-button">
          Kembali ke Halaman Utama
        </Link>
        <Link to="/Cthsoal" className="aplikasihidrolisis-nav-button">
          Pelajari contoh Soal
        </Link>
      </div>
    </div>
  );
};

export default Aplikasihidrolisis;
