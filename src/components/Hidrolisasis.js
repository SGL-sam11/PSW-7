import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hidrolisasis.css';
import Navbar from './Navbar';

const Hidrolisasis = () => {
  const navigate = useNavigate();

  // Fungsi untuk menangani klik pada gelembung dan pindah ke halaman baru
  const handleBubbleClick = (halaman) => {
    navigate(`/${halaman}`);
  };

  return (
    <div className="hidrolisasis-container">
        <Navbar />
      <div className="hidrolisasis-title">Hidrolisasi Garam</div>
      <div className="hidrolisasis-bubbles-container">
        <div className="hidrolisasis-row">
          <div
            className="hidrolisasis-bubble"
            onClick={() => handleBubbleClick("Pengertianhidrolisisgaram")}
          >
            <div className="hidrolisasis-bubble-text">Pengertian Hidrolisis Garam</div>
            <button className="hidrolisasis-learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="hidrolisasis-bubble"
            onClick={() => handleBubbleClick("HidrolisisGaram")}
          >
            <div className="hidrolisasis-bubble-text">Jenis-jenis Garam yang Mengalami Hidrolisis</div>
            <button className="hidrolisasis-learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="hidrolisasis-bubble"
            onClick={() => handleBubbleClick("FaktoryangMempengaruhi")}
          >
            <div className="hidrolisasis-bubble-text">Faktor yang Mempengaruhi Hidrolisis Garam</div>
            <button className="hidrolisasis-learn-more">Pelajari Lebih Lanjut</button>
          </div>
        </div>

        <div className="hidrolisasis-row">
          <div
            className="hidrolisasis-bubble"
            onClick={() => handleBubbleClick("Reaksikimi")}
          >
            <div className="hidrolisasis-bubble-text">Reaksi Kimia dalam Hidrolisis Garam</div>
            <button className="hidrolisasis-learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="hidrolisasis-bubble"
            onClick={() => handleBubbleClick("Aplikasihidrolisis")}
          >
            <div className="hidrolisasis-bubble-text">Aplikasi Hidrolisis Garam dalam Kehidupan Sehari-hari</div>
            <button className="hidrolisasis-learn-more">Pelajari Lebih Lanjut</button>
          </div>
          <div
            className="hidrolisasis-bubble"
            onClick={() => handleBubbleClick("Cthsoal")}
          >
            <div className="hidrolisasis-bubble-text">Contoh Soal Hidrolisis Garam</div>
            <button className="hidrolisasis-learn-more">Pelajari Lebih Lanjut</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hidrolisasis;
