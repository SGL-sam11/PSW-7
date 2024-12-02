import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import './KesetimbanganAsamBasa.css'; // Importing the CSS file

const KesetimbanganAsamBasa = () => {
  const navigate = useNavigate();  // Initialize navigate function
  
  // Function to navigate back to the homepage
  const goToHome = () => {
    navigate('/');  // Navigate to the homepage
  };

  // Function to navigate to other material
  const goToOtherMaterial = (path) => {
    navigate(path);  // Navigate to the given path (e.g., another page)
  };

  // Inline style for the background image
  const backgroundStyle = {
    backgroundImage: 'url(https://api.umeds.id/storage/photos/244c1608-5641-4081-a1ca-009d2af21132/Homeostasis/Keseimbangan%20A/Asset%204.png)',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '500px',
    width: '100%',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
    marginBottom: '20px',
    opacity: '1',  // Ensure the image is fully visible
    animation: 'slideUp 1.5s forwards',  // Animation for image entry
  };

  return (
    <div className="container">
      <h1>Kesetimbangan Asam-Basa dan Aplikasinya</h1>

      {/* Background image styled with inline style */}
      <div style={backgroundStyle}>
        {/* The div will display the background image */}
      </div>

      <h2>A. Pengantar Kesetimbangan Asam-Basa</h2>
      <p>
        Kesetimbangan asam-basa adalah kondisi di mana laju reaksi antara asam dan basa dalam larutan mencapai keadaan seimbang, artinya laju reaksi asam dengan basa untuk menghasilkan ion H⁺ (atau H₃O⁺) dan OH⁻ adalah sama dalam arah maju dan mundur. Pada keadaan ini, konsentrasi ion H⁺ (atau H₃O⁺) dan OH⁻ dalam larutan tetap konstan, meskipun masih terjadi reaksi antara asam dan basa.
      </p>
      <p>
        Reaksi asam-basa sering kali melibatkan ionisasi asam atau basa dalam air. Proses ionisasi asam dan basa dapat dinyatakan dengan dua persamaan umum berikut:
      </p>
      <pre>
        Ionisasi asam dalam air:
        HA ⇌ H⁺ + A⁻
        
        Ionisasi basa dalam air:
        B + H₂O ⇌ BH⁺ + OH⁻
      </pre>

      <h2>B. Konsep dan Hukum-Hukum Kesetimbangan Asam-Basa</h2>
      <h3>Konstanta Kesetimbangan Asam-Basa (Kₐ dan Kᵦ)</h3>
      <p>
        Kₐ (Konstanta disosiasi asam) adalah konstanta yang menunjukkan sejauh mana asam terionisasi dalam air. Kₐ dapat dihitung dengan rumus berikut:
      </p>
      <pre>
        Kₐ = [H⁺][A⁻] / [HA]
      </pre>
      <p>
        Kᵦ (Konstanta disosiasi basa) adalah konstanta yang menunjukkan sejauh mana basa terionisasi dalam air. Kᵦ dapat dihitung dengan rumus berikut:
      </p>
      <pre>
        Kᵦ = [BH⁺][OH⁻] / [B]
      </pre>
      <p>
        Hubungan antara Kₐ dan Kᵦ adalah:
      </p>
      <pre>
        Kₐ × Kᵦ = Kₓ
      </pre>
      <p>
        Di mana Kₓ adalah konstanta ionisasi air, yang nilainya adalah 1 × 10⁻¹⁴ pada suhu 25°C.
      </p>

      <h3>pH dan pOH</h3>
      <p>
        pH adalah ukuran konsentrasi ion hidrogen (H⁺) dalam larutan: <strong>pH = −log[H⁺]</strong>
      </p>
      <p>
        pOH adalah ukuran konsentrasi ion hidroksida (OH⁻) dalam larutan: <strong>pOH = −log[OH⁻]</strong>
      </p>
      <p>
        Hubungan antara pH dan pOH adalah: <strong>pH + pOH = 14</strong>
      </p>

      <h2>C. Jenis-Jenis Asam dan Basa</h2>
      <h3>Asam dan Basa Kuat</h3>
      <ul>
        <li>Asam kuat: Asam yang hampir seluruhnya terionisasi dalam larutan air, seperti asam klorida (HCl), asam sulfat (H₂SO₄), dan asam nitrat (HNO₃).</li>
        <li>Basa kuat: Basa yang hampir seluruhnya terionisasi dalam larutan air, seperti natrium hidroksida (NaOH) dan kalium hidroksida (KOH).</li>
      </ul>

      <h3>Asam dan Basa Lemah</h3>
      <ul>
        <li>Asam lemah: Asam yang hanya terionisasi sebagian dalam air, seperti asam asetat (CH₃COOH) dan asam karbonat (H₂CO₃).</li>
        <li>Basa lemah: Basa yang hanya terionisasi sebagian dalam air, seperti amonia (NH₃).</li>
      </ul>

      <h2>D. Prinsip Le Chatelier dalam Kesetimbangan Asam-Basa</h2>
      <p>
        Sama seperti kesetimbangan kimia lainnya, kesetimbangan asam-basa dapat dipengaruhi oleh perubahan kondisi eksternal seperti konsentrasi, suhu, dan tekanan. Prinsip Le Chatelier menyatakan bahwa jika ada perubahan kondisi dalam suatu sistem kesetimbangan, sistem tersebut akan menyesuaikan dirinya untuk mengurangi dampak perubahan tersebut.
      </p>
      <p>
        Misalnya, jika kita menambah konsentrasi asam (ion H⁺) dalam larutan, sistem akan menggeser keseimbangan untuk mengurangi konsentrasi H⁺ dengan mengubah lebih banyak asam menjadi basa konjugatnya.
      </p>

      <h2>E. Aplikasi Kesetimbangan Asam-Basa dalam Kehidupan Sehari-Hari</h2>
      <h3>Pengaturan pH dalam Tubuh</h3>
      <p>
        Tubuh manusia memiliki sistem penyangga yang menjaga keseimbangan asam-basa dalam darah dan cairan tubuh lainnya. Salah satu sistem penyangga utama adalah sistem asam karbonat (H₂CO₃) dan bikarbonat (HCO₃⁻). Sistem ini membantu menjaga pH darah agar tetap berada dalam rentang 7.35–7.45.
      </p>
      <pre>
        H₂CO₃ ⇌ H⁺ + HCO₃⁻
      </pre>

      <h3>Indikator Asam-Basa</h3>
      <p>
        Indikator asam-basa adalah senyawa yang berubah warna tergantung pada pH larutan, contohnya litmus, fenolftalein, dan bromtimol biru. Indikator digunakan dalam titrasi asam-basa untuk menentukan konsentrasi asam atau basa dalam larutan.
      </p>

      <h3>Pengendalian pH dalam Industri Makanan</h3>
      <p>
        Dalam industri makanan, pH sangat penting dalam pengawetan, pembentukan tekstur, dan rasa makanan. Misalnya, pengawetan sayuran dengan asam cuka menggunakan prinsip kesetimbangan asam-basa untuk memastikan makanan tetap aman dan awet.
      </p>

      <h3>Proses Kimia Industri (Produksi Ammonia - Proses Haber)</h3>
      <p>
        Dalam proses Haber untuk produksi amonia (NH₃), reaksi kesetimbangan antara nitrogen dan hidrogen untuk membentuk amonia sangat dipengaruhi oleh suhu dan tekanan, yang juga memengaruhi sifat asam-basa dalam larutan yang digunakan dalam reaksi tersebut.
      </p>

      <h3>Titrasi Asam-Basa</h3>
      <p>
        Titrasi asam-basa adalah metode untuk menentukan konsentrasi suatu asam atau basa dengan menambahkan larutan basa (atau asam) yang diketahui konsentrasinya. Titik ekivalen, di mana jumlah mol asam sama dengan jumlah mol basa, digunakan untuk menghitung konsentrasi larutan yang tidak diketahui.
      </p>

      <h3>Antasida</h3>
      <p>
        Antasida adalah obat yang digunakan untuk menetralkan asam lambung berlebih. Antasida mengandung senyawa basa, seperti magnesium hidroksida (Mg(OH)₂) atau kalsium karbonat (CaCO₃), yang bereaksi dengan ion H⁺ dalam lambung untuk meningkatkan pH.
      </p>

      {/* Navigation buttons */}
      <div className="button-container">
        <button onClick={goToHome} className="nav-button">
          Kembali ke Halaman Utama
        </button>
        <button onClick={() => goToOtherMaterial('/Contoh-Soal')} className="nav-button">
          Contoh Soal
        </button>
      </div>
    </div>
  );
};

export default KesetimbanganAsamBasa;
