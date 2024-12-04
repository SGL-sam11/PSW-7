import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LarutanAsamBasa.css';

const LarutanAsamBasa = () => {
  const navigate = useNavigate();

  // Fungsi untuk menangani klik pada gelembung dan pindah ke halaman baru
  const handleBubbleClick = (halaman) => {
    navigate(`/${halaman}`);
  };

  return (
    <div className="larutan-container">
      <div className="title">Larutan Asam Basa</div>
      <div className="bubbles-container">
        <div className="row">
          <div
            className="bubble"
            onClick={() => handleBubbleClick("pengertian-larutan-asam-basa")}
          >
            <div className="bubble-text">Pengertian Larutan Asam dan Basa</div>
            <button className="learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="bubble"
            onClick={() => handleBubbleClick("teori-asam-basa")}
          >
            <div className="bubble-text">Teori Asam dan Basa: Bronsted-Lowry dan Lewis</div>
            <button className="learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="bubble"
            onClick={() => handleBubbleClick("skala-ph")}
          >
            <div className="bubble-text">Skala pH dan Pengukuran Keasaman atau Kebasaan</div>
            <button className="learn-more">Pelajari Lebih Lanjut</button>
          </div>
        </div>

        <div className="row">
          <div
            className="bubble"
            onClick={() => handleBubbleClick("reaksi-netralisasi")}
          >
            <div className="bubble-text">Reaksi Netralisasi antara Asam dan Basa</div>
            <button className="learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="bubble"
            onClick={() => handleBubbleClick("asam-dan-basa-kuat-lemah")}
          >
            <div className="bubble-text">Larutan Asam Kuat vs Asam Lemah, serta Basa Kuat vs Basa Lemah</div>
            <button className="learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="bubble"
            onClick={() => handleBubbleClick("contoh-soal")}
          >
            <div className="bubble-text">Contoh Soal Larutan Asam dan Basa</div>
            <button className="learn-more">Pelajari Lebih Lanjut</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LarutanAsamBasa;
