import React from 'react';
import { useNavigate } from 'react-router-dom';
import './KesetimbanganAsamBasa.css'; // Importing the CSS file

const KesetimbanganAsamBasa = () => {
  const navigate = useNavigate();  // Initialize navigate function

  // Function to navigate back to the homepage
  const goToHome = () => {
    navigate('/');  // Navigate to the homepage
  };

  // Function to navigate to other material
  const goToOtherMaterial = (path) => {
    navigate(path);  // Navigate to the given path (e.g., another page)
  };

  // Inline style for the background image
  const backgroundStyle = {
    backgroundImage: 'url(https://api.umeds.id/storage/photos/244c1608-5641-4081-a1ca-009d2af21132/Homeostasis/Keseimbangan%20A/Asset%204.png)',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '500px',
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
    marginBottom: '20px',
    opacity: '1',  // Ensure the image is fully visible
    animation: 'slideUp 1.5s forwards',  // Animation for image entry
  };

  return (
    <div className="container">
      <h1>Kesetimbangan Asam-Basa dan Aplikasinya</h1>

      {/* Background image styled with inline style */}
      <div style={backgroundStyle}>
        {/* The div will display the background image */}
      </div>

      <h2>A. Pengantar Kesetimbangan Asam-Basa</h2>
      <p>
        Kesetimbangan asam-basa adalah kondisi di mana laju reaksi antara asam dan basa dalam larutan mencapai keadaan seimbang, artinya laju reaksi asam dengan basa untuk menghasilkan ion H⁺ (atau H₃O⁺) dan OH⁻ adalah sama dalam arah maju dan mundur. Pada keadaan ini, konsentrasi ion H⁺ (atau H₃O⁺) dan OH⁻ dalam larutan tetap konstan, meskipun masih terjadi reaksi antara asam dan basa.
      </p>
      <p>
        Reaksi asam-basa sering kali melibatkan ionisasi asam atau basa dalam air. Proses ionisasi asam dan basa dapat dinyatakan dengan dua persamaan umum berikut:
      </p>
      <pre>
        Ionisasi asam dalam air:
        HA ⇌ H⁺ + A⁻
        
        Ionisasi basa dalam air:
        B + H₂O ⇌ BH⁺ + OH⁻
      </pre>

      {/* Content continues... */}

      {/* Navigation buttons */}
      <div className="button-container">
        <button onClick={goToHome} className="nav-button">
          Kembali ke Halaman Utama
        </button>
        <button onClick={() => goToOtherMaterial('/Contoh-Soal')} className="nav-button">
          Contoh Soal
        </button>
      </div>
    </div>
  );
};

export default KesetimbanganAsamBasa;
