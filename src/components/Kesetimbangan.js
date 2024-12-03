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
    <div className="larutan-container">
      <div className="title">Kesetimbangan Kimia</div>
      <div className="bubbles-container">
        <div className="row">
          <div
            className="bubble"
            onClick={() => handleBubbleClick("pengertian-prinsip-kesetimbangan")}
          >
            <div className="bubble-text">Pengertian dan Prinsip Kesetimbangan Kimia</div>
            <button className="learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="bubble"
            onClick={() => handleBubbleClick("hukum-aksi-massa")}
          >
            <div className="bubble-text">Hukum Aksi Massa dan Konstanta Kesetimbangan (K)</div>
            <button className="learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="bubble"
            onClick={() => handleBubbleClick("contoh-soal")}
          >
            <div className="bubble-text">Contoh Soal Kesetimbangan Kimia</div>
            <button className="learn-more">Pelajari Lebih Lanjut</button>
          </div>
        </div>

        <div className="row">
          <div
            className="bubble"
            onClick={() => handleBubbleClick("prinsip-le-chatelier")}
          >
            <div className="bubble-text">Prinsip Le Chatelier dan Faktor yang Mempengaruhi Kesetimbangan</div>
            <button className="learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="bubble"
            onClick={() => handleBubbleClick("perhitungan-konstanta")}
          >
            <div className="bubble-text">Perhitungan Konstanta Kesetimbangan dalam Reaksi Kimia</div>
            <button className="learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="bubble"
            onClick={() => handleBubbleClick("kesetimbangan-asam-basa")}
          >
            <div className="bubble-text">Kesetimbangan Asam-Basa dan Aplikasinya</div>
            <button className="learn-more">Pelajari Lebih Lanjut</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kesetimbangan;
