// src/components/HukumAksiMassa.js
import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import './HukumAksiMassa.css'; // Importing the CSS file

const HukumAksiMassa = () => {
  const navigate = useNavigate();  // Initialize navigate function
  
  // Function to navigate back to the homepage
  const goToHome = () => {
    navigate('/');  // Navigate to the homepage
  };

  // Function to navigate to other material
  const goToOtherMaterial = (path) => {
    navigate(path);  // Navigate to the given path (e.g., another page)
  };

  return (
    <div className="container">
      <h1>Hukum Aksi Massa dan Konstanta Kesetimbangan (K)</h1>
      <div className="kesetimbangan-background"></div>  {/* Background image handled by CSS */}
      
      <p>
        Hukum Aksi Massa menyatakan bahwa pada suhu tetap, konsentrasi molar produk dan reaktan pada kesetimbangan berhubungan dengan konstanta kesetimbangan yang disebut <strong>K</strong>. 
        Untuk reaksi umum:
      </p>
      <p>
        <strong>
          aA + bB ⇌ cC + dD
        </strong>
      </p>
      <p>
        Konstanta kesetimbangan (K) dapat dituliskan sebagai:
      </p>
      <p>
        <strong>
          K = [C]<sup>c</sup> [D]<sup>d</sup> / [A]<sup>a</sup> [B]<sup>b</sup>
        </strong>
      </p>
      <p>
        Dimana:
      </p>
      <ul>
        <li><strong>[A], [B], [C], [D]</strong> adalah konsentrasi molar zat pada kesetimbangan.</li>
        <li><strong>a, b, c, d</strong> adalah koefisien stoikiometri dari reaktan dan produk dalam persamaan reaksi.</li>
      </ul>
      <p>
        Nilai K memberikan informasi tentang posisi kesetimbangan:
      </p>
      <ul>
        <li><strong>K &gt; 1</strong>: Reaksi cenderung ke arah produk, artinya produk lebih banyak daripada reaktan pada kesetimbangan.</li>
        <li><strong>K &lt; 1</strong>: Reaksi cenderung ke arah reaktan, artinya reaktan lebih banyak daripada produk pada kesetimbangan.</li>
        <li><strong>K = 1</strong>: Reaktan dan produk berada dalam jumlah yang hampir sama pada kesetimbangan.</li>
      </ul>
      
      <h2>Jenis-Jenis Konstanta Kesetimbangan:</h2>
      <ul>
        <li><strong>Kc</strong>: Konstanta kesetimbangan berdasarkan konsentrasi molar (untuk larutan).</li>
        <li><strong>Kp</strong>: Konstanta kesetimbangan berdasarkan tekanan parsial (untuk gas).</li>
      </ul>
      
      <h3>Contoh:</h3>
      <p>
        Untuk reaksi gas:
      </p>
      <p>
        <strong>N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ 2NH<sub>3</sub>(g)</strong>
      </p>
      <p>
        Jika pada kesetimbangan:
      </p>
      <ul>
        <li>[N₂] = 0,50 M</li>
        <li>[H₂] = 0,30 M</li>
        <li>[NH₃] = 0,20 M</li>
      </ul>
      <p>
        Maka, nilai K<sub>c</sub> dihitung dengan rumus:
      </p>
      <p>
        <strong>
          K<sub>c</sub> = [NH₃]<sup>2</sup> / [N₂][H₂]<sup>3</sup>
        </strong>
      </p>
      
      {/* Navigation buttons */}
      <div className="button-container">
        <button onClick={goToHome} className="nav-button">
          Kembali ke Halaman Utama
        </button>
        <button onClick={() => goToOtherMaterial('/Prinsip-Le-Chatelier')} className="nav-button">
          Pelajari Prinsip Le Chatelier
        </button>
      </div>
    </div>
  );
};

export default HukumAksiMassa;
