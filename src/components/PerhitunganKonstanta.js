import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './PerhitunganKonstanta.css'; // Import CSS file for styling
import Navbar from './Navbar';

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
    backgroundImage: 'url("https://www.studiobelajar.com/wp-content/uploads/2017/07/hubungan-Q-dan-K-pada-persamaan-reaksi-kesetimbangan-kimia.png")',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '300px',
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
    marginBottom: '20px',
    backgroundColor: '#f1f1f1',
  };

  return (
    <div className="perhitungankonstanta-container">
      <Navbar />
      <h1 className="perhitungankonstanta-h1">Perhitungan Konstanta Kesetimbangan dalam Reaksi Kimia</h1>
      
      <div className="perhitungankonstanta-background" style={backgroundStyle}></div>

      <p className="perhitungankonstanta-p">
        Konstanta kesetimbangan (K) adalah nilai yang menggambarkan hubungan antara konsentrasi produk dan reaktan dalam suatu reaksi kimia yang berada dalam keadaan setimbang.
      </p>

      <h2 className="perhitungankonstanta-h2">1. Rumus Konstanta Kesetimbangan</h2>
      <p className="perhitungankonstanta-p">Untuk suatu reaksi kimia umum: </p>
      <pre className="perhitungankonstanta-pre"><strong>aA + bB ⇌ cC + dD</strong></pre>
      <p className="perhitungankonstanta-p">
        Konstanta kesetimbangan (K) dinyatakan dengan persamaan:
      </p>
      <pre className="perhitungankonstanta-pre">
        K = [C]^c [D]^d / [A]^a [B]^b
      </pre>

      <h2 className="perhitungankonstanta-h2">2. Konstanta Kesetimbangan Berdasarkan Tekanan</h2>
      <p className="perhitungankonstanta-p">
        Jika reaksi berlangsung di fase gas, konsentrasi dapat digantikan dengan tekanan parsial gas:
      </p>
      <pre className="perhitungankonstanta-pre">
        Kp = (P_C)^c (P_D)^d / (P_A)^a (P_B)^b
      </pre>

      <h2 className="perhitungankonstanta-h2">3. Jenis-Jenis Konstanta Kesetimbangan</h2>
      <ul className="perhitungankonstanta-ul">
        <li><strong>Kc</strong>: Konstanta kesetimbangan dalam hal konsentrasi (mol/L).</li>
        <li><strong>Kp</strong>: Konstanta kesetimbangan dalam hal tekanan parsial (atm atau bar).</li>
      </ul>

      <h2 className="perhitungankonstanta-h2">4. Faktor yang Mempengaruhi Nilai Konstanta Kesetimbangan</h2>
      <ul className="perhitungankonstanta-ul">
        <li>Jika reaksi eksoterm (melepaskan panas), K menurun dengan kenaikan suhu.</li>
        <li>Jika reaksi endoterm (menyerap panas), K meningkat dengan kenaikan suhu.</li>
      </ul>

      <h2 className="perhitungankonstanta-h2">5. Menghitung Konstanta Kesetimbangan (K)</h2>
      <p className="perhitungankonstanta-p">Untuk menghitung konstanta kesetimbangan, kita harus mengetahui konsentrasi produk dan reaktan pada saat kesetimbangan tercapai.</p>

      <h2 className="perhitungankonstanta-h2">6. Contoh Soal 1: Menghitung Kc</h2>
      <pre className="perhitungankonstanta-pre">
        N2(g) + 3H2(g) ⇌ 2NH3(g)
        Kc = [NH₃]^2 / [N₂][H₂]^3
        Kc = (0,4)^2 / (0,2)(0,6)^3
        Kc = 3,70
      </pre>

      <h2 className="perhitungankonstanta-h2">7. Perhitungan Menggunakan Hukum Aksi Massa</h2>
      <p className="perhitungankonstanta-p">Hukum Aksi Massa menyatakan bahwa pada suhu tertentu, laju reaksi maju dan mundur dalam reaksi kesetimbangan adalah konstan.</p>

      <h2 className="perhitungankonstanta-h2">8. Perubahan Kesetimbangan – Prinsip Le Chatelier</h2>
      <p className="perhitungankonstanta-p">
        Prinsip Le Chatelier menyatakan bahwa jika suatu sistem yang berada dalam keadaan kesetimbangan dikenakan perubahan, maka sistem tersebut akan merespon perubahan tersebut dengan cara yang mengurangi efek perubahan tersebut.
      </p>

      <h2 className="perhitungankonstanta-h2">9. Perhitungan Konstanta Kesetimbangan untuk Reaksi yang Tidak Lengkap</h2>
      <p className="perhitungankonstanta-p">
        Untuk reaksi yang tidak berlangsung sempurna, kita dapat menggunakan tabel ICE (Initial, Change, Equilibrium) untuk menghitung konsentrasi masing-masing zat pada kesetimbangan.
      </p>

      <h2 className="perhitungankonstanta-h2">Contoh Soal 2: Menggunakan Tabel ICE</h2>
      <pre className="perhitungankonstanta-pre">
        A(g) ⇌ B(g)
        K = [B] / [A] = 0,8 / 0,2 = 4
      </pre>

      <div className="perhitungankonstanta-button-container">
        <button onClick={goToHome} className="perhitungankonstanta-nav-button">
          Kembali ke Halaman Utama
        </button>
        <button onClick={() => goToOtherMaterial('/KesetimbanganAsamBasa')} className="perhitungankonstanta-nav-button">
          Pelajari Kesetimbangan Asam Basa
        </button>
      </div>
    </div>
  );
};

export default PerhitunganKonstanta;
