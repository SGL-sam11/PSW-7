import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LarutanAsamBasa.css';
import Navbar from './Navbar';

const LarutanAsamBasa = () => {
  const navigate = useNavigate();

  // Fungsi untuk menangani klik pada gelembung dan pindah ke halaman baru
  const handleBubbleClick = (halaman) => {
    navigate(`/${halaman}`);
  };

  return (
    <div className="larutan-asam-basa-container">
      <Navbar />
      <div className="larutan-asam-basa-title">Larutan Asam Basa</div>
      <div className="larutan-asam-basa-bubbles-container">
        <div className="larutan-asam-basa-row">
          <div
            className="larutan-asam-basa-bubble"
            onClick={() => handleBubbleClick("pengertianlarutanasambasa")}
          >
            <div className="larutan-asam-basa-bubble-text">Pengertian Larutan Asam dan Basa</div>
            <button className="larutan-asam-basa-learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="larutan-asam-basa-bubble"
            onClick={() => handleBubbleClick("teoriasambasa")}
          >
            <div className="larutan-asam-basa-bubble-text">Teori Asam dan Basa: Bronsted-Lowry dan Lewis</div>
            <button className="larutan-asam-basa-learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="larutan-asam-basa-bubble"
            onClick={() => handleBubbleClick("skalaph")}
          >
            <div className="larutan-asam-basa-bubble-text">Skala pH dan Pengukuran Keasaman atau Kebasaan</div>
            <button className="larutan-asam-basa-learn-more">Pelajari Lebih Lanjut</button>
          </div>
        </div>

        <div className="larutan-asam-basa-row">
          <div
            className="larutan-asam-basa-bubble"
            onClick={() => handleBubbleClick("reaksinetralisasi")}
          >
            <div className="larutan-asam-basa-bubble-text">Reaksi Netralisasi antara Asam dan Basa</div>
            <button className="larutan-asam-basa-learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="larutan-asam-basa-bubble"
            onClick={() => handleBubbleClick("asamdanbasakuatlemah")}
          >
            <div className="larutan-asam-basa-bubble-text">Larutan Asam Kuat vs Asam Lemah, serta Basa Kuat vs Basa Lemah</div>
            <button className="larutan-asam-basa-learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="larutan-asam-basa-bubble"
            onClick={() => handleBubbleClick("ContohSoall")}
          >
            <div className="larutan-asam-basa-bubble-text">Contoh Soal Larutan Asam dan Basa</div>
            <button className="larutan-asam-basa-learn-more">Pelajari Lebih Lanjut</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LarutanAsamBasa;
