import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './ContohSoal.css'; // Pastikan file CSS berada pada lokasi yang benar
import Navbar from './Navbar';

const ContohSoal = () => {
  const navigate = useNavigate(); 

  const goToHome = () => {
    navigate('/'); 
  };

  return (
    <div className="contohsoal-container">
      <Navbar />
      <h1 className="contohsoal-h1">Contoh Soal Kesetimbangan Kimia</h1>
      <p className="contohsoal-p">Berikut adalah contoh soal terkait kesetimbangan kimia yang dapat membantu memahami konsep ini...</p>
      
      <h2 className="contohsoal-h2">Soal 1:</h2>
      <p className="contohsoal-p">Reaksi kesetimbangan berikut terjadi pada suhu 25°C:</p>
      <pre className="contohsoal-pre">
        N₂(g) + 3H₂(g) ⇌ 2NH₃(g)
      </pre>
      <p className="contohsoal-p">Pada kondisi kesetimbangan, konsentrasi gas-gas tersebut adalah:</p>
      <ul className="contohsoal-ul">
        <li>[N₂] = 0,5 M</li>
        <li>[H₂] = 1,5 M</li>
        <li>[NH₃] = 0,8 M</li>
      </ul>
      <p className="contohsoal-p">Tentukan konstanta kesetimbangan K<sub>c</sub> untuk reaksi ini!</p>
      <h3 className="contohsoal-h3">Pembahasan:</h3>
      <p className="contohsoal-p">Konstanta kesetimbangan K<sub>c</sub> dapat dihitung dengan rumus:</p>
      <pre className="contohsoal-pre">
        K<sub>c</sub> = [NH₃]² / ([N₂][H₂]³)
      </pre>
      <p className="contohsoal-p">Substitusikan nilai konsentrasi yang diberikan:</p>
      <pre className="contohsoal-pre">
        K<sub>c</sub> = (0,8)² / (0,5)(1,5)³ = 0,64 / 0,379 ≈ 0,379
      </pre>
      <p className="contohsoal-p">Jadi, nilai konstanta kesetimbangan K<sub>c</sub> adalah 0,379.</p>

      <div className="contohsoal-button-container">
        <button onClick={goToHome} className="contohsoal-nav-button">
          Kembali ke Halaman Utama
        </button>
      </div>
    </div>
  );
};

export default ContohSoal;
