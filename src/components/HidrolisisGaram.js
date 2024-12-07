// src/components/HidrolisisGaram.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './HidrolisisGaram.css'; // Import CSS file for styling
import Navbar from './Navbar';

const HidrolisisGaram = () => {
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
    backgroundImage: 'url("https://mazpur.com/wp-content/uploads/2023/02/hidrolisis.jpg")', // Replace with actual image URL
    backgroundSize: 'contain',
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
    <div className="hidrolisisgaram-container">
        <Navbar />
      <h1>Hidrolisis Garam</h1>
      
      {/* Menggunakan backgroundStyle untuk elemen div */}
      <div className="hidrolisisgaram-background" style={backgroundStyle}></div>

      <p>
        Hidrolisis garam adalah reaksi antara garam dan air yang menghasilkan perubahan pada pH larutan. Proses ini terjadi ketika garam terlarut dalam air, dan ion-ionnya bereaksi dengan air, menghasilkan ion hidrogen (H⁺) atau ion hidroksida (OH⁻). Berdasarkan sifat asam dan basa dari ion-ion yang terlibat, garam dapat dikelompokkan menjadi beberapa jenis yang mengalami hidrolisis.
      </p>

      <h2>1. Garam Asam Kuat dan Basa Lemah</h2>
      <p>Garam yang terbentuk dari asam kuat dan basa lemah akan mengalami hidrolisis, menghasilkan larutan yang bersifat asam.</p>
      <p>Contoh:</p>
      <ul>
        <li>Garam Amonium Klorida (NH₄Cl)</li>
      </ul>

      <h2>2. Garam Asam Lemah dan Basa Kuat</h2>
      <p>Garam yang terbentuk dari asam lemah dan basa kuat akan mengalami hidrolisis, menghasilkan larutan yang bersifat basa.</p>
      <p>Contoh:</p>
      <ul>
        <li>Garam Natrium Asetat (CH₃COONa)</li>
      </ul>

      <h2>3. Garam Asam Lemah dan Basa Lemah</h2>
      <p>Garam yang terbentuk dari asam lemah dan basa lemah dapat mengalami hidrolisis dengan cara yang lebih kompleks, dimana sifat asam atau basanya tergantung pada konstanta disosiasi dari masing-masing asam dan basa.</p>
      <p>Contoh:</p>
      <ul>
        <li>Garam Amonium Asetat (NH₄CH₃COO)</li>
      </ul>

      <h2>4. Garam Basa Kuat dan Asam Kuat (Tidak Mengalami Hidrolisis)</h2>
      <p>Garam yang terbentuk dari asam kuat dan basa kuat tidak mengalami hidrolisis karena ion yang terbentuk tidak berinteraksi dengan air.</p>
      <p>Contoh:</p>
      <ul>
        <li>Garam Natrium Klorida (NaCl)</li>
      </ul>

      <h2>5. Garam Asam Kuat dan Basa Kuat yang Tidak Mengalami Hidrolisis</h2>
      <p>Beberapa garam yang terbentuk dari asam kuat dan basa kuat tidak mengalami hidrolisis karena sifatnya yang netral.</p>
      <p>Contoh:</p>
      <ul>
        <li>Kalium Nitrat (KNO₃)</li>
      </ul>

      {/* Navigation buttons */}
      <div className="button-container">
        <button onClick={goToHome} className="nav-button">
          Kembali ke Halaman Utama
        </button>
        <button onClick={() => goToOtherMaterial('/FaktoryangMempengaruhi')} className="nav-button">
          Pelajari Faktor yang Mempengaruhi
        </button>
      </div>
    </div>
  );
};

export default HidrolisisGaram;
