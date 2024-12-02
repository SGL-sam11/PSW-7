// src/components/PerhitunganKonstanta.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './PerhitunganKonstanta.css'; // Import CSS file for styling

const PerhitunganKonstanta = () => {
  const navigate = useNavigate(); // Initialize navigation function

  // Function to navigate back to the home page
  const goToHome = () => {
    navigate('/'); // Navigate to the home page
  };

  // Function to navigate to another material
  const goToOtherMaterial = (path) => {
    navigate(path); // Navigate to the provided path
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://www.studiobelajar.com/wp-content/uploads/2017/07/hubungan-Q-dan-K-pada-persamaan-reaksi-kesetimbangan-kimia.png")',  // Ganti dengan URL gambar yang benar
    backgroundSize: 'contain', // Menggunakan 'contain' agar gambar tidak terpotong dan tetap proporsional
    backgroundPosition: 'center', // Menjaga gambar tetap berada di tengah
    backgroundRepeat: 'no-repeat', // Menghindari pengulangan gambar
    height: '300px', // Anda bisa menyesuaikan dengan kebutuhan
    width: '100%', // Lebar elemen 100% dari parent container
    borderRadius: '10px', // Menambahkan border radius untuk sudut yang melengkung
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', // Memberikan efek bayangan
    marginTop: '20px', // Spasi atas
    marginBottom: '20px', // Spasi bawah
    backgroundColor: '#f1f1f1', // Warna latar belakang fallback jika gambar gagal dimuat
  };
  
  

  return (
    <div className="container">
      <h1>Perhitungan Konstanta Kesetimbangan dalam Reaksi Kimia</h1>
      
      {/* Menggunakan backgroundStyle untuk elemen div */}
      <div className="kesetimbangan-background" style={backgroundStyle}></div>

      <p>
        Konstanta kesetimbangan (K) adalah nilai yang menggambarkan hubungan antara konsentrasi produk dan reaktan dalam suatu reaksi kimia yang berada dalam keadaan setimbang.
      </p>

      <h2>1. Rumus Konstanta Kesetimbangan</h2>
      <p>Untuk suatu reaksi kimia umum: </p>
      <pre><strong>aA + bB ⇌ cC + dD</strong></pre>
      <p>
        Konstanta kesetimbangan (K) dinyatakan dengan persamaan:
      </p>
      <pre>
        K = [C]^c [D]^d / [A]^a [B]^b
      </pre>

      <h2>2. Konstanta Kesetimbangan Berdasarkan Tekanan</h2>
      <p>
        Jika reaksi berlangsung di fase gas, konsentrasi dapat digantikan dengan tekanan parsial gas:
      </p>
      <pre>
        Kp = (P_C)^c (P_D)^d / (P_A)^a (P_B)^b
      </pre>

      <h2>3. Jenis-Jenis Konstanta Kesetimbangan</h2>
      <ul>
        <li><strong>Kc</strong>: Konstanta kesetimbangan dalam hal konsentrasi (mol/L).</li>
        <li><strong>Kp</strong>: Konstanta kesetimbangan dalam hal tekanan parsial (atm atau bar).</li>
      </ul>

      <h2>4. Faktor yang Mempengaruhi Nilai Konstanta Kesetimbangan</h2>
      <ul>
        <li>Jika reaksi eksoterm (melepaskan panas), K menurun dengan kenaikan suhu.</li>
        <li>Jika reaksi endoterm (menyerap panas), K meningkat dengan kenaikan suhu.</li>
      </ul>

      <h2>5. Menghitung Konstanta Kesetimbangan (K)</h2>
      <p>Untuk menghitung konstanta kesetimbangan, kita harus mengetahui konsentrasi produk dan reaktan pada saat kesetimbangan tercapai.</p>

      <h2>6. Contoh Soal 1: Menghitung Kc</h2>
      <pre>
        N2(g) + 3H2(g) ⇌ 2NH3(g)
        Kc = [NH₃]^2 / [N₂][H₂]^3
        Kc = (0,4)^2 / (0,2)(0,6)^3
        Kc = 3,70
      </pre>

      <h2>7. Perhitungan Menggunakan Hukum Aksi Massa</h2>
      <p>Hukum Aksi Massa menyatakan bahwa pada suhu tertentu, laju reaksi maju dan mundur dalam reaksi kesetimbangan adalah konstan.</p>

      <h2>8. Perubahan Kesetimbangan – Prinsip Le Chatelier</h2>
      <p>
        Prinsip Le Chatelier menyatakan bahwa jika suatu sistem yang berada dalam keadaan kesetimbangan dikenakan perubahan, maka sistem tersebut akan merespon perubahan tersebut dengan cara yang mengurangi efek perubahan tersebut.
      </p>

      <h2>9. Perhitungan Konstanta Kesetimbangan untuk Reaksi yang Tidak Lengkap</h2>
      <p>
        Untuk reaksi yang tidak berlangsung sempurna, kita dapat menggunakan tabel ICE (Initial, Change, Equilibrium) untuk menghitung konsentrasi masing-masing zat pada kesetimbangan.
      </p>

      <h2>Contoh Soal 2: Menggunakan Tabel ICE</h2>
      <pre>
        A(g) ⇌ B(g)
        K = [B] / [A] = 0,8 / 0,2 = 4
      </pre>

      {/* Navigation buttons */}
      <div className="button-container">
        <button onClick={goToHome} className="nav-button">
          Kembali ke Halaman Utama
        </button>
        <button onClick={() => goToOtherMaterial('/Kesetimbangan-Asam-Basa')} className="nav-button">
          Pelajari Kesetimbangan Asam Basa
        </button>
      </div>
    </div>
  );
};

export default PerhitunganKonstanta;
