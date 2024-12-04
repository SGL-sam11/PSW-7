import React from 'react';
import { Link } from 'react-router-dom';  // Mengimpor Link untuk navigasi
import './teoriasambasa.css'; // Mengimpor file CSS

// Komponen utama
const Teoriasambasa = () => {
  return (
    <div className="container">
      <h1>Teori Asam dan Basa</h1>
      <div className="kesetimbangan-background"></div>  {/* Background image handled by CSS */}

      <p>
        Teori asam dan basa memiliki beberapa pendekatan yang berbeda. Berikut ini adalah dua teori penting: Teori Bronsted-Lowry dan Teori Lewis.
      </p>

      <h2>Teori Bronsted-Lowry</h2>
      <p>
        Teori ini diperkenalkan oleh Johannes Bronsted dan Thomas Lowry pada tahun 1923. Menurut teori ini, asam adalah zat yang dapat menyumbangkan proton (H⁺), sedangkan basa adalah zat yang dapat menerima proton (H⁺). Reaksi antara asam dan basa melibatkan transfer proton dari asam ke basa.
      </p>
      <h3>Contoh Reaksi Bronsted-Lowry</h3>
      <p>
        Sebagai contoh, mari kita lihat reaksi antara HCl dan NH₃:
      </p>
      <p>
        <strong>HCl + NH₃ → NH₄⁺ + Cl⁻</strong>
      </p>
      <p>
        Di sini, HCl bertindak sebagai asam karena menyumbangkan proton (H⁺), sedangkan NH₃ bertindak sebagai basa karena menerima proton (H⁺).
      </p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX0wFgHScRj3Dg42v58zhU9qCXgs4rwkvFPw&s" alt="Reaksi Bronsted-Lowry" className="reaction-image" />

      <h2>Teori Lewis</h2>
      <p>
        Teori asam dan basa menurut Lewis, yang diperkenalkan oleh Gilbert Lewis pada tahun 1923, lebih luas daripada teori Bronsted-Lowry. Menurut teori ini, asam adalah zat yang dapat menerima pasangan elektron, sementara basa adalah zat yang dapat menyumbangkan pasangan elektron.
      </p>
      <h3>Contoh Reaksi Asam-Basa Lewis</h3>
      <p>
        Sebagai contoh, mari kita lihat reaksi antara BF₃ dan NH₃:
      </p>
      <p>
        <strong>BF₃ + NH₃ → NH₃BF₃</strong>
      </p>
      <p>
        Dalam reaksi ini, BF₃ bertindak sebagai asam Lewis karena menerima pasangan elektron dari NH₃, yang bertindak sebagai basa Lewis.
      </p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT25UbnXMuJw43SAM0xvYDetMfArqWIR8Pe1g&s" alt="Reaksi Asam-Basa Lewis" className="reaction-image" />

      {/* Navigasi menggunakan <Link> */}
      <div className="button-container">
        <Link to="/" className="nav-button">
          Kembali ke Halaman Utama
        </Link>
        <Link to="/skala-ph" className="nav-button">
          Pelajari Skala Ph
        </Link>
      </div>
    </div>
  );
};

export default Teoriasambasa;
