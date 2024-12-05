import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Kesetimbangan.css';

const Kesetimbangan = () => {
  const navigate = useNavigate();

  // Fungsi untuk menangani klik pada gelembung dan pindah ke halaman baru
  const handleBubbleClick = (halaman) => {
    navigate(`/${halaman}`);
  };

  return (
    <div className="kesetimbangan-container">
      <div className="kesetimbangan-title">Kesetimbangan Kimia</div>
      <div className="kesetimbangan-bubbles-container">
        <div className="kesetimbangan-row">
          <div
            className="kesetimbangan-bubble"
            onClick={() => handleBubbleClick("pengertian-prinsip-kesetimbangan")}
          >
            <div className="kesetimbangan-bubble-text">Pengertian dan Prinsip Kesetimbangan Kimia</div>
            <button className="kesetimbangan-learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="kesetimbangan-bubble"
            onClick={() => handleBubbleClick("hukum-aksi-massa")}
          >
            <div className="kesetimbangan-bubble-text">Hukum Aksi Massa dan Konstanta Kesetimbangan (K)</div>
            <button className="kesetimbangan-learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="kesetimbangan-bubble"
            onClick={() => handleBubbleClick("contoh-soal")}
          >
            <div className="kesetimbangan-bubble-text">Contoh Soal Kesetimbangan Kimia</div>
            <button className="kesetimbangan-learn-more">Pelajari Lebih Lanjut</button>
          </div>
        </div>

        <div className="kesetimbangan-row">
          <div
            className="kesetimbangan-bubble"
            onClick={() => handleBubbleClick("prinsip-le-chatelier")}
          >
            <div className="kesetimbangan-bubble-text">Prinsip Le Chatelier dan Faktor yang Mempengaruhi Kesetimbangan</div>
            <button className="kesetimbangan-learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="kesetimbangan-bubble"
            onClick={() => handleBubbleClick("perhitungan-konstanta")}
          >
            <div className="kesetimbangan-bubble-text">Perhitungan Konstanta Kesetimbangan dalam Reaksi Kimia</div>
            <button className="kesetimbangan-learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="kesetimbangan-bubble"
            onClick={() => handleBubbleClick("kesetimbangan-asam-basa")}
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
