import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cthsoal.css'; // Import CSS file
import Navbar from './Navbar';

const Cthsoal = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="CthsoalContainer">
        <Navbar />
      <h1>Contoh Soal Larutan Asam dan Basa</h1>
      <p>Berikut adalah beberapa contoh soal terkait Larutan Asam dan Basa lengkap dengan pembahasan dan solusinya:</p>

      <h2>Soal 1: Hidrolisis Garam Asam Kuat dan Basa Lemah</h2>
      <p><strong>Soal:</strong> Diketahui garam amonium klorida (NH₄Cl) dilarutkan dalam air. Tentukan jenis larutan yang terbentuk dan jelaskan reaksi hidrolisis yang terjadi.</p>
      <h3>Pembahasan:</h3>
      <p>Amonium klorida (NH₄Cl) merupakan garam yang terbentuk dari asam kuat (HCl) dan basa lemah (NH₃). Ketika NH₄Cl larut dalam air, ion NH₄⁺ akan bereaksi dengan air menghasilkan ion H₃O⁺, yang membuat larutan bersifat asam.</p>
      <p>Reaksi hidrolisis:</p>
      <pre>NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺</pre>
      <p>Karena ion H₃O⁺ terbentuk, maka larutan menjadi asam.</p>
      <p><strong>Jawaban:</strong> Larutan yang terbentuk bersifat asam.</p>

      <h2>Soal 2: Hidrolisis Garam Asam Lemah dan Basa Kuat</h2>
      <p><strong>Soal:</strong> Sodium asetat (CH₃COONa) adalah garam yang terbentuk dari asam lemah (CH₃COOH) dan basa kuat (NaOH). Jika garam ini dilarutkan dalam air, tentukan jenis larutan yang terbentuk dan jelaskan reaksi hidrolisis yang terjadi.</p>
      <h3>Pembahasan:</h3>
      <p>Sodium asetat (CH₃COONa) akan terdisosiasi menjadi ion CH₃COO⁻ dan Na⁺ dalam larutan. Ion CH₃COO⁻, yang berasal dari asam lemah (CH₃COOH), akan bereaksi dengan air menghasilkan ion OH⁻, yang membuat larutan bersifat basa.</p>
      <p>Reaksi hidrolisis:</p>
      <pre>CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻</pre>
      <p>Karena ion OH⁻ terbentuk, maka larutan menjadi basa.</p>
      <p><strong>Jawaban:</strong> Larutan yang terbentuk bersifat basa.</p>

      <h2>Soal 3: Hidrolisis Garam Asam Lemah dan Basa Lemah</h2>
      <p><strong>Soal:</strong> Garam amonium asetat (NH₄CH₃COO) adalah garam yang terbentuk dari asam lemah (CH₃COOH) dan basa lemah (NH₃). Jika garam ini dilarutkan dalam air, tentukan jenis larutan yang terbentuk dan jelaskan reaksi hidrolisis yang terjadi.</p>
      <h3>Pembahasan:</h3>
      <p>Amonium asetat (NH₄CH₃COO) terdiri dari ion NH₄⁺ (dari basa lemah NH₃) dan ion CH₃COO⁻ (dari asam lemah CH₃COOH). Keduanya akan bereaksi dengan air secara bersamaan:</p>
      <pre>NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺</pre>
      <pre>CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻</pre>
      <p>Namun, karena kekuatan asam dan basa yang terlibat relatif lemah, pH larutan akan bergantung pada keseimbangan antara kedua reaksi tersebut.</p>
      <p><strong>Jawaban:</strong> Larutan yang terbentuk dapat bersifat netral, asam, atau basa tergantung pada kekuatan relatif asam dan basa yang terlibat.</p>

      <h2>Soal 4: Hidrolisis Garam Asam Kuat dan Basa Kuat</h2>
      <p><strong>Soal:</strong> Garam natrium klorida (NaCl) adalah garam yang terbentuk dari asam kuat (HCl) dan basa kuat (NaOH). Jika garam ini dilarutkan dalam air, tentukan jenis larutan yang terbentuk dan jelaskan reaksi hidrolisis yang terjadi.</p>
      <h3>Pembahasan:</h3>
      <p>Natrium klorida (NaCl) terdisosiasi menjadi ion Na⁺ dan Cl⁻ dalam larutan. Karena kedua ion ini berasal dari asam kuat (HCl) dan basa kuat (NaOH), keduanya tidak akan bereaksi dengan air. Oleh karena itu, larutan yang terbentuk tidak mengalami perubahan pH dan bersifat netral.</p>
      <p>Reaksi hidrolisis:</p>
      <pre>NaCl → Na⁺ + Cl⁻</pre>
      <p>Karena tidak ada reaksi dengan air, larutan tetap netral.</p>
      <p><strong>Jawaban:</strong> Larutan yang terbentuk bersifat netral.</p>

      <h2>Soal 5: Menghitung pH Larutan Amonium Klorida</h2>
      <p><strong>Soal:</strong> Jika 0,1 M garam amonium klorida (NH₄Cl) dilarutkan dalam air, hitunglah pH larutan tersebut. Diketahui bahwa nilai Ka untuk NH₄⁺ adalah 5.6 × 10⁻¹⁰.</p>
      <h3>Pembahasan:</h3>
      <p>Garam amonium klorida (NH₄Cl) terhidrolisis menghasilkan ion NH₄⁺ yang akan bereaksi dengan air. Reaksi hidrolisisnya adalah sebagai berikut:</p>
      <pre>NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺</pre>
      <p>Dengan Ka untuk NH₄⁺:</p>
      <pre>Ka = [NH₃][H₃O⁺] / [NH₄⁺] = 5.6 × 10⁻¹⁰</pre>
      <p>Dengan substitusi nilai Ka:</p>
      <pre>x² / 0.1 = 5.6 × 10⁻¹⁰</pre>
      <pre>x² = 5.6 × 10⁻¹¹</pre>
      <pre>x = 7.48 × 10⁻⁶</pre>
      <p>pH dapat dihitung dengan rumus:</p>
      <pre>pH = -log[H₃O⁺] = -log(7.48 × 10⁻⁶) = 5.13</pre>
      <p><strong>Jawaban:</strong> pH larutan amonium klorida (NH₄Cl) adalah 5.13.</p>

      <div className="CthsoalButtonContainer">
        <button onClick={goToHome} className="CthsoalNavButton">
          Kembali ke Halaman Utama
        </button>
      </div>
    </div>
  );
};

export default Cthsoal;
