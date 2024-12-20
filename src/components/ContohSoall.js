import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContohSoall.css';
import Navbar from './Navbar';

const ContohSoall = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="contohsoall-container">
      <Navbar />
      <h1 className="contohsoall-h1">Contoh Soal Larutan Asam dan Basa</h1>
      <p className="contohsoall-p">Berikut adalah beberapa contoh soal terkait Larutan Asam dan Basa lengkap dengan pembahasan dan solusinya:</p>

      <h2 className="contohsoall-h2">Soal 1: Menentukan pH Larutan Asam Kuat</h2>
      <p className="contohsoall-p"><strong>Soal:</strong> Berapa pH larutan yang mengandung 0,01 mol/L asam klorida (HCl)?</p>
      <h3 className="contohsoall-h3">Penyelesaian:</h3>
      <p className="contohsoall-p">Asam klorida (HCl) adalah asam kuat, yang berarti terionisasi sepenuhnya dalam air. Sehingga, konsentrasi ion H⁺ dalam larutan adalah sama dengan konsentrasi HCl, yaitu 0,01 mol/L.</p>
      <p className="contohsoall-p">Rumus untuk menghitung pH adalah:</p>
      <pre className="contohsoall-pre">pH = −log[H⁺]</pre>
      <p className="contohsoall-p">Maka,</p>
      <pre className="contohsoall-pre">pH = −log(0,01) = 2</pre>
      <p className="contohsoall-p"><strong>Jawaban:</strong> pH larutan HCl tersebut adalah 2.</p>

      <h2 className="contohsoall-h2">Soal 2: Menentukan pOH Larutan Basa Kuat</h2>
      <p className="contohsoall-p"><strong>Soal:</strong> Berapa pOH larutan yang mengandung 0,1 mol/L natrium hidroksida (NaOH)?</p>
      <h3 className="contohsoall-h3">Penyelesaian:</h3>
      <p className="contohsoall-p">Natrium hidroksida (NaOH) adalah basa kuat, yang berarti terionisasi sepenuhnya dalam air. Sehingga, konsentrasi ion OH⁻ dalam larutan adalah sama dengan konsentrasi NaOH, yaitu 0,1 mol/L.</p>
      <p className="contohsoall-p">Rumus untuk menghitung pOH adalah:</p>
      <pre className="contohsoall-pre">pOH = −log[OH⁻]</pre>
      <p className="contohsoall-p">Maka,</p>
      <pre className="contohsoall-pre">pOH = −log(0,1) = 1</pre>
      <p className="contohsoall-p">Karena hubungan antara pH dan pOH adalah:</p>
      <pre className="contohsoall-pre">pH + pOH = 14</pre>
      <p className="contohsoall-p">Maka,</p>
      <pre className="contohsoall-pre">pH = 14 − pOH = 14 − 1 = 13</pre>
      <p className="contohsoall-p"><strong>Jawaban:</strong> pOH larutan tersebut adalah 1, dan pH-nya adalah 13.</p>

      <h2 className="contohsoall-h2">Soal 3: Menentukan pH dari Larutan Asam Lemah</h2>
      <p className="contohsoall-p"><strong>Soal:</strong> Diketahui larutan asam asetat (CH₃COOH) memiliki konsentrasi 0,1 mol/L dan konstanta disosiasi asam (Ka) sebesar 1,8 × 10⁻⁵. Berapa pH larutan tersebut?</p>
      <h3 className="contohsoall-h3">Penyelesaian:</h3>
      <p className="contohsoall-p">Asam asetat adalah asam lemah, sehingga hanya sebagian yang terionisasi dalam air. Kita dapat menggunakan persamaan untuk menghitung konsentrasi ion H⁺ menggunakan rumus untuk asam lemah:</p>
      <pre className="contohsoall-pre">Ka = [H⁺][A⁻] / [HA]</pre>
      <p className="contohsoall-p">Misalkan konsentrasi H⁺ yang terbentuk adalah x mol/L, sehingga konsentrasi ion asetat (A⁻) juga x mol/L, dan konsentrasi asam asetat yang tersisa adalah 0,1 − x.</p>
      <p className="contohsoall-p">Dengan memasukkan nilai-nilai ke dalam persamaan Ka:</p>
      <pre className="contohsoall-pre">1,8 × 10⁻⁵ = x² / (0,1 − x)</pre>
      <p className="contohsoall-p">Karena Ka kecil, kita dapat mengasumsikan bahwa 0,1 − x ≈ 0,1. Maka persamaan menjadi:</p>
      <pre className="contohsoall-pre">1,8 × 10⁻⁵ = x² / 0,1</pre>
      <p className="contohsoall-p">Menyelesaikan persamaan ini:</p>
      <pre className="contohsoall-pre">x² = (1,8 × 10⁻⁵) × 0,1 = 1,8 × 10⁻⁶</pre>
      <pre className="contohsoall-pre">x = 1,34 × 10⁻³ mol/L</pre>
      <p className="contohsoall-p">Konsentrasi ion H⁺ adalah 1,34 × 10⁻³ mol/L, sehingga pH dapat dihitung:</p>
      <pre className="contohsoall-pre">pH = −log[H⁺] = −log(1,34 × 10⁻³) = 2,87</pre>
      <p className="contohsoall-p"><strong>Jawaban:</strong> pH larutan asam asetat adalah 2,87.</p>

      <h2 className="contohsoall-h2">Soal 4: Menentukan Konsentrasi Asam dari pH Larutan</h2>
      <p className="contohsoall-p"><strong>Soal:</strong> Jika larutan HCl memiliki pH 3, berapa konsentrasi HCl dalam larutan tersebut?</p>
      <h3 className="contohsoall-h3">Penyelesaian:</h3>
      <p className="contohsoall-p">Asam klorida (HCl) adalah asam kuat yang terionisasi sepenuhnya, sehingga konsentrasi ion H⁺ sama dengan konsentrasi HCl.</p>
      <p className="contohsoall-p">Rumus pH adalah:</p>
      <pre className="contohsoall-pre">pH = −log[H⁺]</pre>
      <p className="contohsoall-p">Dari soal, pH = 3, maka kita dapat menghitung konsentrasi H⁺:</p>
      <pre className="contohsoall-pre">3 = −log[H⁺]</pre>
      <pre className="contohsoall-pre">[H⁺] = 10⁻³ mol/L</pre>
      <p className="contohsoall-p">Karena HCl adalah asam kuat, maka konsentrasi HCl juga 10⁻³ mol/L.</p>
      <p className="contohsoall-p"><strong>Jawaban:</strong> Konsentrasi HCl dalam larutan adalah 10⁻³ mol/L.</p>

      <h2 className="contohsoall-h2">Soal 5: Reaksi Asam dan Basa Kuat</h2>
      <p className="contohsoall-p"><strong>Soal:</strong> Jika 50 mL larutan HCl 0,1 M dicampur dengan 50 mL larutan NaOH 0,1 M, berapakah pH larutan hasil pencampuran tersebut?</p>
      <h3 className="contohsoall-h3">Penyelesaian:</h3>
      <p className="contohsoall-p">Karena HCl dan NaOH adalah asam kuat dan basa kuat yang terionisasi sepenuhnya, kita dapat menggunakan konsep netralisasi.</p>
      <p className="contohsoall-p">Jumlah mol H⁺ dari HCl:</p>
      <pre className="contohsoall-pre">mol H⁺ = M × V = 0,1 mol/L × 0,05 L = 0,005 mol</pre>
      <p className="contohsoall-p">Jumlah mol OH⁻ dari NaOH:</p>
      <pre className="contohsoall-pre">mol OH⁻ = M × V = 0,1 mol/L × 0,05 L = 0,005 mol</pre>
      <p className="contohsoall-p">Karena jumlah mol H⁺ sama dengan jumlah mol OH⁻, maka reaksi netralisasi sempurna, dan larutan yang dihasilkan adalah netral.</p>
      <p className="contohsoall-p">Maka, pH larutan adalah 7.</p>
      <p className="contohsoall-p"><strong>Jawaban:</strong> pH larutan hasil pencampuran adalah 7.</p>

      <h2 className="contohsoall-h2">Soal 6: Titrasi Asam Lemah dengan Basa Kuat</h2>
      <p className="contohsoall-p"><strong>Soal:</strong> Jika 25 mL larutan asam asetat (CH₃COOH) 0,1 M dititrasi dengan larutan NaOH 0,1 M, berapa volume NaOH yang dibutuhkan untuk menetralkan asam?</p>
      <h3 className="contohsoall-h3">Penyelesaian:</h3>
      <p className="contohsoall-p">Reaksi antara asam asetat dan natrium hidroksida adalah:</p>
      <pre className="contohsoall-pre">CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O</pre>
      <p className="contohsoall-p">Karena reaksi ini 1:1, jumlah mol asam asetat yang ada adalah:</p>
      <pre className="contohsoall-pre">mol CH₃COOH = M × V = 0,1 mol/L × 0,025 L = 0,0025 mol</pre>
      <p className="contohsoall-p">Jumlah mol NaOH yang dibutuhkan juga 0,0025 mol. Dengan konsentrasi NaOH 0,1 M, volume NaOH yang dibutuhkan adalah:</p>
      <pre className="contohsoall-pre">V = mol / M = 0,0025 mol / 0,1 mol/L = 0,025 L = 25 mL</pre>
      <p className="contohsoall-p"><strong>Jawaban:</strong> Volume NaOH yang dibutuhkan adalah 25 mL.</p>

      <div className="button-container">
        <button onClick={goToHome} className="nav-button">
          Kembali ke Halaman Utama
        </button>
      </div>
    </div>
  );
};

export default ContohSoall;
