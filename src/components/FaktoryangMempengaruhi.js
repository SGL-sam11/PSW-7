import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FaktoryangMempengaruhi.css';
import Navbar from './Navbar';

const FaktoryangMempengaruhi = () => {
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
    <div className="faktoryangmempengaruhi-container">
        <Navbar />
      <h1 className="faktoryangmempengaruhi-h1">Faktor Yang Mempengaruhi Hidrolisis Garam</h1>

      <h2 className="faktoryangmempengaruhi-h2">1. Jenis Asam dan Basa yang Membentuk Garam</h2>
      <p className="faktoryangmempengaruhi-p">
        Jenis asam dan basa yang digunakan untuk membentuk garam merupakan faktor utama yang mempengaruhi apakah garam akan mengalami hidrolisis dan seberapa besar dampaknya terhadap pH larutan.
      </p>
      
      <h3 className="faktoryangmempengaruhi-h3">Asam Kuat dan Basa Lemah</h3>
      <p className="faktoryangmempengaruhi-p">
        Garam yang terbentuk dari asam kuat dan basa lemah cenderung menghasilkan larutan asam. Hal ini karena ion dari basa lemah akan bereaksi dengan air menghasilkan ion hidronium (H₃O⁺), yang menurunkan pH larutan. 
        Contoh: Amonium klorida (NH₄Cl), yang terbentuk dari asam kuat (HCl) dan basa lemah (NH₃), menghasilkan ion H₃O⁺ yang menurunkan pH.
      </p>

      <h3 className="faktoryangmempengaruhi-h3">Asam Lemah dan Basa Kuat</h3>
      <p className="faktoryangmempengaruhi-p">
        Garam yang terbentuk dari asam lemah dan basa kuat menghasilkan larutan basa. Ini disebabkan oleh ion dari asam lemah yang akan bereaksi dengan air menghasilkan ion hidroksida (OH⁻), yang meningkatkan pH larutan. 
        Contoh: Natrium asetat (CH₃COONa), yang terbentuk dari asam lemah (CH₃COOH) dan basa kuat (NaOH), menghasilkan ion OH⁻ yang menaikkan pH.
      </p>

      <h3 className="faktoryangmempengaruhi-h3">Asam Lemah dan Basa Lemah</h3>
      <p className="faktoryangmempengaruhi-p">
        Garam yang terbentuk dari asam lemah dan basa lemah bisa menghasilkan larutan dengan pH yang bervariasi tergantung pada kekuatan relatif asam dan basa tersebut.
        Contoh: Amonium asetat (NH₄CH₃COO), yang terbentuk dari asam lemah (CH₃COOH) dan basa lemah (NH₃), dapat menghasilkan larutan dengan pH yang dekat dengan netral, tetapi bisa asam atau basa tergantung pada konstanta disosiasi masing-masing.
      </p>

      <h3 className="faktoryangmempengaruhi-h3">Asam Kuat dan Basa Kuat</h3>
      <p className="faktoryangmempengaruhi-p">
        Garam yang terbentuk dari asam kuat dan basa kuat tidak mengalami hidrolisis karena ion-ion yang terbentuk tidak bereaksi signifikan dengan air, sehingga larutan akan tetap netral. 
        Contoh: Natrium klorida (NaCl), yang terbentuk dari asam kuat (HCl) dan basa kuat (NaOH), menghasilkan larutan netral karena ion Na⁺ dan Cl⁻ tidak berinteraksi dengan air.
      </p>

      <h2 className="faktoryangmempengaruhi-h2">2. Kekuatan Asam dan Basa</h2>
      <p className="faktoryangmempengaruhi-p">
        Kekuatan asam dan basa (yang diukur dengan konstanta disosiasi asam atau basa, Ka dan Kb) mempengaruhi sejauh mana hidrolisis terjadi.
      </p>

      <h2 className="faktoryangmempengaruhi-h2">3. Konsentrasi Garam</h2>
      <p className="faktoryangmempengaruhi-p">
        Konsentrasi garam dalam larutan berpengaruh terhadap sejauh mana hidrolisis dapat terjadi. Semakin tinggi konsentrasi garam, semakin banyak ion yang tersedia untuk bereaksi dengan air.
      </p>

      <h2 className="faktoryangmempengaruhi-h2">4. Suhu</h2>
      <p className="faktoryangmempengaruhi-p">
        Suhu juga mempengaruhi laju hidrolisis dan tingkat perubahan pH. Pada suhu yang lebih tinggi, reaksi kimia umumnya berjalan lebih cepat, sehingga proses hidrolisis juga akan meningkat.
      </p>

      <h2 className="faktoryangmempengaruhi-h2">5. Efek Ions Strength (Kekuatan Ion)</h2>
      <p className="faktoryangmempengaruhi-p">
        Kekuatan ion atau ion strength adalah ukuran dari konsentrasi total ion dalam larutan. Ion strength mempengaruhi aktivitas ion dalam larutan, yang pada gilirannya mempengaruhi proses hidrolisis.
      </p>

      <h2 className="faktoryangmempengaruhi-h2">6. Perubahan pH Akibat Hidrolisis</h2>
      <p className="faktoryangmempengaruhi-p">
        Selama hidrolisis, pH larutan dapat berubah tergantung pada jenis garam yang terlarut.
      </p>

      {/* Navigation buttons */}
      <div className="faktoryangmempengaruhi-button-container">
        <button onClick={goToHome} className="faktoryangmempengaruhi-nav-button">
          Kembali ke Halaman Utama
        </button>
        <button onClick={() => goToOtherMaterial('/Reaksikimi')} className="faktoryangmempengaruhi-nav-button">
          Pelajari Reaksi Kimia 
        </button>
      </div>
    </div>
  );
};

export default FaktoryangMempengaruhi;
