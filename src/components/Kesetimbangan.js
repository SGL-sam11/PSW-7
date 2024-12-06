import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Kesetimbangan.css';
import Navbar from './Navbar';  // Mengimpor Navbar

const Kesetimbangan = () => {
  const navigate = useNavigate();

  // Fungsi untuk menangani klik pada gelembung dan pindah ke halaman baru
  const handleBubbleClick = (halaman) => {
    navigate(`/${halaman}`);
  };

  return (
    <div className="kesetimbangan-container">
      {/* Menambahkan Navbar di sini */}
      <Navbar />

      <div className="kesetimbangan-title">Kesetimbangan Kimia</div>
      <div className="kesetimbangan-bubbles-container">
        <div className="kesetimbangan-row">
          <div
            className="kesetimbangan-bubble"
            onClick={() => handleBubbleClick("PengertianPrinsipKesetimbangan")}
          >
            <div className="kesetimbangan-bubble-text">Pengertian dan Prinsip Kesetimbangan Kimia</div>
            <button className="kesetimbangan-learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="kesetimbangan-bubble"
            onClick={() => handleBubbleClick("hukumaksimassa")}
          >
            <div className="kesetimbangan-bubble-text">Hukum Aksi Massa dan Konstanta Kesetimbangan (K)</div>
            <button className="kesetimbangan-learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="kesetimbangan-bubble"
            onClick={() => handleBubbleClick("contohsoal")}
          >
            <div className="kesetimbangan-bubble-text">Contoh Soal Kesetimbangan Kimia</div>
            <button className="kesetimbangan-learn-more">Pelajari Lebih Lanjut</button>
          </div>
        </div>

        <div className="kesetimbangan-row">
          <div
            className="kesetimbangan-bubble"
            onClick={() => handleBubbleClick("prinsiplechatelier")}
          >
            <div className="kesetimbangan-bubble-text">Prinsip Le Chatelier dan Faktor yang Mempengaruhi Kesetimbangan</div>
            <button className="kesetimbangan-learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="kesetimbangan-bubble"
            onClick={() => handleBubbleClick("perhitungankonstanta")}
          >
            <div className="kesetimbangan-bubble-text">Perhitungan Konstanta Kesetimbangan dalam Reaksi Kimia</div>
            <button className="kesetimbangan-learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="kesetimbangan-bubble"
            onClick={() => handleBubbleClick("kesetimbanganasambasa")}
          >
            <div className="kesetimbangan-bubble-text">Kesetimbangan Asam-Basa dan Aplikasinya</div>
            <button className="kesetimbangan-learn-more">Pelajari Lebih Lanjut</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kesetimbangan;
