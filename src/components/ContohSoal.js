import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const ContohSoal = () => {
  const navigate = useNavigate(); 

  const goToHome = () => {
    navigate('/'); 
  };

  return (
    <div>
      <h1>Contoh Soal Kesetimbangan Kimia</h1>
      <p>Berikut adalah contoh soal terkait kesetimbangan kimia yang dapat membantu memahami konsep ini...</p>
      
      <h2>Soal 1:</h2>
      <p>Reaksi kesetimbangan berikut terjadi pada suhu 25°C:</p>
      <pre>
        N₂(g) + 3H₂(g) ⇌ 2NH₃(g)
      </pre>
      <p>Pada kondisi kesetimbangan, konsentrasi gas-gas tersebut adalah:</p>
      <ul>
        <li>[N₂] = 0,5 M</li>
        <li>[H₂] = 1,5 M</li>
        <li>[NH₃] = 0,8 M</li>
      </ul>
      <p>Tentukan konstanta kesetimbangan K<sub>c</sub> untuk reaksi ini!</p>
      <h3>Pembahasan:</h3>
      <p>Konstanta kesetimbangan K<sub>c</sub> dapat dihitung dengan rumus:</p>
      <pre>
        K<sub>c</sub> = [NH₃]² / ([N₂][H₂]³)
      </pre>
      <p>Substitusikan nilai konsentrasi yang diberikan:</p>
      <pre>
        K<sub>c</sub> = (0,8)² / (0,5)(1,5)³ = 0,64 / 0,379 ≈ 0,379
      </pre>
      <p>Jadi, nilai konstanta kesetimbangan K<sub>c</sub> adalah 0,379.</p>

      <div className="button-container">
        <button onClick={goToHome} className="nav-button">
          Kembali ke Halaman Utama
        </button>
      </div>
    </div>
  );
};

export default ContohSoal;
