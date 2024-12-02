import React from 'react';
import { useNavigate } from 'react-router-dom';  // Mengimpor useNavigate untuk navigasi
import './PengertianPrinsipKesetimbangan.css'; // Mengimpor file CSS

const PengertianPrinsipKesetimbangan = () => {
  const navigate = useNavigate();  // Mendapatkan fungsi navigate

  // Fungsi untuk menavigasi ke halaman utama
  const goToHome = () => {
    navigate('/');  // Mengarahkan pengguna ke halaman utama
  };

  // Fungsi untuk menavigasi ke materi lain
  const goToOtherMaterial = (path) => {
    navigate(path);  // Mengarahkan pengguna ke materi lain sesuai path
  };

  // Gambar latar belakang untuk kesetimbangan
  const backgroundStyle = {
    backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Potential_energy_diagram_for_ammonia_synthesis.svg/1024px-Potential_energy_diagram_for_ammonia_synthesis.svg.png)',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '500px',
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
    marginBottom: '20px',
    opacity: '1',  // Pastikan gambar muncul dengan opacity 1
    animation: 'slideUp 1.5s forwards',  // Animasi untuk gambar masuk
  };

  return (
    <div className="container">
      <h1>Pengertian dan Prinsip Kesetimbangan Kimia</h1>
      
      <p>
        Kesetimbangan kimia adalah kondisi di mana laju reaksi maju (reaksi yang menghasilkan produk) sama dengan laju reaksi mundur (reaksi yang menghasilkan reaktan). 
        Pada saat kesetimbangan tercapai, konsentrasi reaktan dan produk tidak berubah lagi meskipun kedua reaksi (maju dan mundur) masih berlangsung.
      </p>
      
      <h2>Reaksi Reversibel</h2>
      <p>
        Reaksi yang dapat berlangsung ke kedua arah, yaitu dari reaktan menjadi produk dan sebaliknya. Pada kondisi ini, reaksi dapat berlangsung maju atau mundur.
      </p>

      <h2>Kesetimbangan Dinamis</h2>
      <p>
        Meskipun pada tingkat makroskopik tampak tidak ada perubahan (konsentrasi reaktan dan produk tetap), pada tingkat mikroskopik reaksi terus berlangsung ke kedua arah. 
        Inilah yang disebut dengan kesetimbangan dinamis.
      </p>

      <h3>Contoh Reaksi Reversibel yang Mencapai Kesetimbangan</h3>
      <p><strong>A + B ⇌ C + D</strong></p>
      <p>
        Pada kesetimbangan, laju reaksi maju (A + B → C + D) sama dengan laju reaksi mundur (C + D → A + B), sehingga konsentrasi A, B, C, dan D tetap konstan.
      </p>

      <h3>Ilustrasi Kesetimbangan Kimia</h3>

      {/* Gambar latar belakang akan diatur di sini */}
      <div style={backgroundStyle}></div>

      <p>
        Gambar di atas menunjukkan prinsip kesetimbangan kimia menurut Le Chatelier, yang menyatakan bahwa jika suatu sistem dalam kesetimbangan diganggu, 
        maka sistem akan berusaha untuk mengimbangi gangguan tersebut dan kembali mencapai kesetimbangan.
      </p>

      {/* Tombol untuk navigasi */}
      <div className="button-container">
        <button onClick={goToHome} className="nav-button">
          Kembali ke Halaman Utama
        </button>
        <button onClick={() => goToOtherMaterial('/hukum-aksi-massa')} className="nav-button">
          Pelajari Hukum Aksi Massa
        </button>
        <button onClick={() => goToOtherMaterial('/prinsip-le-chatelier')} className="nav-button">
          Pelajari Prinsip Le Chatelier
        </button>
      </div>
    </div>
  );
};

export default PengertianPrinsipKesetimbangan;
