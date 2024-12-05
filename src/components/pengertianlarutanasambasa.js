import React from 'react';
import { useNavigate } from 'react-router-dom';  // Mengimpor useNavigate untuk navigasi
import './pengertianlarutanasambasa.css'; // Mengimpor file CSS

const PengertianLarutanAsamBasa = () => {
  const navigate = useNavigate();  

  // Fungsi untuk menavigasi ke halaman utama
  const goToHome = () => {
    navigate('/');  // Mengarahkan pengguna ke halaman utama
  };

  // Fungsi untuk menavigasi ke materi lain
  const goToOtherMaterial = (path) => {
    navigate(path);  // Mengarahkan pengguna ke materi lain sesuai path
  };

  // Gambar ilustrasi larutan asam dan basa (satu gambar saja)
  const acidBaseImage = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgD3MSkDC1RRGhkdvEmiQTHkVbrMwNNEqWkN1312D3Q2H3JlKlR13a7QXWA8ww91o238_EMiQZc2SNeWZdN8TH9Nf428sebr-FOl3JvWHB5oIRZwgtLY36veQa2ZIbMRt4IrUNrZcR35mJS/s1600/Asam+Basa+Garam.PNG';  // Gambar ilustrasi

  return (
    <div className="pengertian-larutan-asam-basa-container">
      <h1>Pengertian Larutan Asam dan Basa</h1>
      
      <h2>Larutan Asam</h2>
      <p>
        Larutan asam adalah larutan yang memiliki konsentrasi ion hidrogen (H⁺) atau proton yang tinggi. Asam adalah senyawa yang dapat melepaskan ion hidrogen (H⁺) ketika dilarutkan dalam air. Proses pelepasan ion H⁺ ini yang membuat larutan tersebut bersifat asam. Larutan asam memiliki pH lebih kecil dari 7, dengan semakin rendahnya pH, semakin kuat sifat keasamannya.
      </p>

      <h3>Contoh Asam Kuat dan Lemah</h3>
      <h4>Asam Kuat:</h4>
      <p>Asam kuat terdisosiasi hampir sepenuhnya dalam air, melepaskan banyak ion H⁺. Contohnya adalah asam klorida (HCl), asam sulfat (H₂SO₄), dan asam nitrat (HNO₃).</p>
      <pre>
        HCl → H⁺ + Cl⁻
      </pre>
      <h4>Asam Lemah:</h4>
      <p>Asam lemah hanya terdisosiasi sebagian dalam air, menghasilkan sedikit ion H⁺. Contoh asam lemah adalah asam asetat (CH₃COOH), asam karbonat (H₂CO₃), dan asam formiat (HCOOH).</p>
      <pre>
        CH₃COOH ⇌ CH₃COO⁻ + H⁺
      </pre>

      <h2>Larutan Basa</h2>
      <p>
        Larutan basa adalah larutan yang memiliki konsentrasi ion hidroksida (OH⁻) yang tinggi. Basa dapat didefinisikan sebagai zat yang mampu menerima ion H⁺ atau melepaskan ion OH⁻ dalam larutan. Basa kuat sepenuhnya terdisosiasi dalam air, sedangkan basa lemah hanya terdisosiasi sebagian. Larutan basa memiliki pH lebih besar dari 7, dan semakin tinggi pH, semakin kuat sifat kebasannya.
      </p>

      <h3>Contoh Basa Kuat dan Lemah</h3>
      <h4>Basa Kuat:</h4>
      <p>Basa kuat terdisosiasi sepenuhnya dalam larutan air, melepaskan banyak ion OH⁻. Contoh basa kuat adalah natrium hidroksida (NaOH), kalium hidroksida (KOH), dan kalsium hidroksida (Ca(OH)₂).</p>
      <pre>
        NaOH → Na⁺ + OH⁻
      </pre>
      <h4>Basa Lemah:</h4>
      <p>Basa lemah hanya terdisosiasi sebagian dalam larutan, menghasilkan sedikit ion OH⁻. Contoh basa lemah adalah amonia (NH₃), magnesium hidroksida (Mg(OH)₂), dan amonium hidroksida (NH₄OH).</p>
      <pre>
        NH₃ + H₂O ⇌ NH₄⁺ + OH⁻
      </pre>

      {/* Ilustrasi Larutan Asam dan Basa */}
      <h3>Ilustrasi Larutan Asam dan Basa</h3>
      <img src={acidBaseImage} alt="Ilustrasi Larutan Asam dan Basa" style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }} />

      <p>
        Gambar di atas menunjukkan perbandingan antara larutan asam dan basa, di mana asam memiliki konsentrasi ion H⁺ yang lebih tinggi, sedangkan basa memiliki konsentrasi ion OH⁻ yang lebih tinggi.
      </p>

      {/* Tombol untuk navigasi */}
      <div className="pengertian-larutan-asam-basa-button-container">
        <button onClick={goToHome} className="pengertian-larutan-asam-basa-nav-button">
          Kembali ke Halaman Utama
        </button>
        <button onClick={() => goToOtherMaterial('/teori-asam-basa')} className="pengertian-larutan-asam-basa-nav-button">
          Pelajari Teori Asam Basa
        </button>
        <button onClick={() => goToOtherMaterial('/contoh-soal')} className="pengertian-larutan-asam-basa-nav-button">
          Pelajari Contoh Soal
        </button>
      </div>
    </div>
  );
};

export default PengertianLarutanAsamBasa;
