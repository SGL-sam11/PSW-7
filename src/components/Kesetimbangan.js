import React, { useState } from 'react';
import './Kesetimbangan.css';

function Kesetimbangan() {
  const subjects = [
    'Pengertian', 'Jenis-Jenis', 'Reaksi Kimia', 'Faktor Yang Mempengaruhi', 'Ciri-Ciri', 'Contoh Soal'
  ];

  // State untuk menyimpan mata pelajaran yang dipilih
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Fungsi untuk menangani klik pada mata pelajaran
  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject); // Menyimpan mata pelajaran yang dipilih
  };

  // Fungsi untuk menampilkan informasi berdasarkan mata pelajaran
  const renderSubjectDetails = () => {
    if (selectedSubject === 'Pengertian') {
      return (
        <div className="subject-details">
          <h2>{selectedSubject}</h2>
          <p>Kesetimbangan kimia adalah suatu kondisi dalam reaksi kimia di mana laju reaksi maju (reaksi yang menghasilkan produk) sama dengan laju reaksi mundur (reaksi yang menghasilkan reaktan). Pada titik kesetimbangan, konsentrasi reaktan dan produk tidak lagi berubah seiring berjalannya waktu, meskipun reaksi tetap berlangsung dalam kedua arah. Ini berarti bahwa reaksi tidak berhenti, tetapi ada keseimbangan dinamis antara pembentukan produk dan pengembalian produk menjadi reaktan.</p>
          <p>Secara lebih mendetail, berikut adalah beberapa konsep kunci dalam kesetimbangan kimia:</p>
          <ul>
            <li><strong>Reaksi Bolak-Balik:</strong> <p>Pada banyak reaksi kimia, produk dapat bereaksi kembali membentuk reaktan. Reaksi semacam ini disebut reaksi bolak-balik (reversible reactions).</p></li>
            <li><strong>Keseimbangan Dinamis:</strong> <p>Meskipun reaksi tidak terlihat, baik reaksi maju maupun mundur terjadi secara terus-menerus dengan laju yang sama pada titik kesetimbangan. Oleh karena itu, meskipun konsentrasi produk dan reaktan tidak berubah, reaksi tidak berhenti sepenuhnya.</p></li>
            <li><strong>Hukum Kesetimbangan (Hukum Le Chatelier):</strong> <p>Jika kondisi eksternal seperti suhu, tekanan, atau konsentrasi salah satu zat diubah, sistem kesetimbangan akan menyesuaikan diri untuk mengurangi perubahan tersebut. Misalnya, jika tekanan dinaikkan dalam sistem yang melibatkan gas, sistem akan menyesuaikan untuk mengurangi tekanan dengan menggeser posisi kesetimbangan.</p></li>
            <li><strong>Konstanta Kesetimbangan (K):</strong> <p>Kesetimbangan kimia dapat digambarkan dengan persamaan konstanta kesetimbangan, yang menunjukkan hubungan antara konsentrasi produk dan reaktan pada titik kesetimbangan. Misalnya, untuk reaksi:</p></li>
            <p>𝑎A + 𝑏B ⇌ 𝑐C + 𝑑D</p>
            <p>Konstanta kesetimbangan K dihitung dengan:</p>
            <p>K = [C]ⁿ[D]ᵈ / [A]ᵃ[B]ᵇ</p>
          </ul>
        </div>
      );
    }

    if (selectedSubject === 'Jenis-Jenis') {
      return (
        <div className="subject-details">
          <h2>{selectedSubject}</h2>

          <h3>1. Kesetimbangan Reaksi Gas</h3>
          <p>Pada kesetimbangan reaksi gas, reaktan dan produk berada dalam bentuk gas, dan posisi kesetimbangan dipengaruhi oleh perubahan tekanan atau volume. Kesetimbangan ini sering dianalisis menggunakan hukum Le Chatelier, yang menjelaskan bagaimana sistem merespons perubahan eksternal seperti tekanan dan konsentrasi.</p>
          <p>Contoh:</p>
          <ul>
            <li>𝑁₂(𝑔) + 3𝐻₂(𝑔) ⇌ 2𝑁𝐻₃(𝑔) (Reaksi sintesis amonia yang terjadi pada tekanan tinggi)</li>
          </ul>

          <h3>2. Kesetimbangan Reaksi Larutan</h3>
          <p>Pada kesetimbangan larutan, reaktan dan produk berada dalam bentuk larutan. Reaksi ini sering kali melibatkan proses disosiasi atau pembentukan ion-ion dalam larutan.</p>
          <p>Contoh:</p>
          <ul>
            <li>𝐴𝑔𝐶𝑙(𝑠) ⇌ 𝐴𝑔⁺(𝑎𝑞) + 𝐶𝑙⁻(𝑎𝑞) (Pembentukan ion perak dan ion klorida dalam larutan)</li>
          </ul>

          <h3>3. Kesetimbangan Homogen</h3>
          <p>Kesetimbangan homogen terjadi ketika semua zat yang terlibat dalam reaksi berada dalam fase yang sama, yaitu semua reaktan dan produk ada dalam bentuk gas atau cairan.</p>
          <p>Contoh:</p>
          <ul>
            <li>2𝑁𝑂(𝑔) + 𝑂₂(𝑔) ⇌ 2𝑁𝑂₂(𝑔) (Semua zat berada dalam fase gas)</li>
          </ul>

          <h3>4. Kesetimbangan Heterogen</h3>
          <p>Kesetimbangan heterogen terjadi ketika reaktan dan produk berada dalam fase yang berbeda, misalnya satu zat dalam bentuk padat, satu dalam bentuk cair, dan lainnya dalam bentuk gas. Pada kesetimbangan ini, hanya konsentrasi zat-zat yang berada dalam fase gas atau larutan yang dipertimbangkan dalam persamaan konstanta kesetimbangan.</p>
          <p>Contoh:</p>
          <ul>
            <li>𝐶𝑎𝐶𝑂₃(𝑠) ⇌ 𝐶𝑎𝑂(𝑠) + CO₂(𝑔) (Kalsium karbonat yang terurai menjadi kalsium oksida dan karbon dioksida)</li>
          </ul>

          <h3>5. Kesetimbangan Kimia Reversibel</h3>
          <p>Reaksi reversibel adalah reaksi kimia yang dapat berjalan dalam kedua arah, yaitu maju dan mundur, sehingga dapat mencapai keadaan kesetimbangan dinamis. Pada titik ini, laju reaksi maju sama dengan laju reaksi mundur, dan konsentrasi reaktan serta produk tetap konstan.</p>
          <p>Contoh:</p>
          <ul>
            <li>𝑁₂(𝑔) + 3𝐻₂(𝑔) ⇌ 2𝑁𝐻₃(𝑔) (Sintesis amonia)</li>
          </ul>

          <h3>6. Kesetimbangan Termodinamika</h3>
          <p>Pada kesetimbangan termodinamika, sistem mencapai keadaan di mana energi bebas Gibbs (ΔG) minimal, yang menunjukkan bahwa sistem berada dalam keadaan yang paling stabil secara energetik. Pada keadaan ini, tidak ada perubahan lebih lanjut dalam komposisi reaktan dan produk.</p>
          <p>Contoh:</p>
          <ul>
            <li>Pembentukan air dari hidrogen dan oksigen di bawah kondisi standar.</li>
          </ul>

          <h3>7. Kesetimbangan Dinamis</h3>
          <p>Kesetimbangan dinamis adalah keadaan di mana reaksi berlangsung dalam kedua arah (maju dan mundur), tetapi tidak ada perubahan bersih dalam konsentrasi reaktan dan produk. Meskipun reaksi masih berlangsung, laju reaksi maju dan mundur adalah sama, sehingga komposisi sistem tetap konstan.</p>
          <p>Contoh:</p>
          <ul>
            <li>2𝐻₂𝑂(𝑔) ⇌ 2𝐻₂(𝑔) + 𝑂₂(𝑔) (Reaksi penguraian air menjadi hidrogen dan oksigen)</li>
          </ul>

          <h3>8. Kesetimbangan Katalitik</h3>
          <p>Pada kesetimbangan katalitik, suatu reaksi mencapai kesetimbangan dengan bantuan katalis, yang mempercepat laju reaksi tanpa mengubah posisi kesetimbangan atau komposisi produk akhir. Katalis hanya mempengaruhi laju pencapaian kesetimbangan, bukan posisi kesetimbangan itu sendiri.</p>
          <p>Contoh:</p>
          <ul>
            <li>Reaksi Haber untuk sintesis amonia yang melibatkan katalis besi (Fe).</li>
          </ul>

        </div>
      );
    }

    if (selectedSubject === 'Reaksi Kimia') {
      return (
        <div className="subject-details">
          <h2>{selectedSubject}</h2>
          <p>Reaksi Kimia pada Kesetimbangan Kimia terjadi ketika reaktan dan produk berada dalam keadaan stabil, di mana laju reaksi maju (reaksi pembentukan produk) sama dengan laju reaksi mundur (reaksi pembentukan reaktan). Meskipun reaksi tetap berlangsung, konsentrasi reaktan dan produk tidak berubah seiring waktu, menciptakan kondisi kesetimbangan.</p>
    
          <h3>Ciri-ciri Kesetimbangan Kimia:</h3>
          <ul>
            <li><strong>Laju Reaksi Sama:</strong> Laju reaksi maju dan mundur adalah sama, sehingga konsentrasi reaktan dan produk tetap konstan.</li>
            <li><strong>Kondisi Dinamis:</strong> Meskipun tidak ada perubahan bersih dalam jumlah reaktan dan produk, reaksi tetap terjadi di kedua arah.</li>
            <li><strong>Kesetimbangan Tidak Harus 50-50:</strong> Pada kesetimbangan, jumlah reaktan dan produk bisa berbeda, tergantung pada sifat reaksi dan kondisi sistem.</li>
          </ul>
    
          <h3>Contoh Reaksi Kesetimbangan:</h3>
          <p><strong>Contoh reaksi kesetimbangan pada gas:</strong></p>
          <p>𝑁₂(𝑔) + 3𝐻₂(𝑔) ⇌ 2𝑁𝐻₃(𝑔)</p>
          <p>Pada reaksi ini, nitrogen dan hidrogen akan bereaksi membentuk amonia hingga tercapai kesetimbangan, di mana laju pembentukan amonia sama dengan laju penguraian amonia.</p>
    
          <h3>Faktor yang Mempengaruhi Kesetimbangan Kimia:</h3>
          <ul>
            <li><strong>Perubahan Konsentrasi:</strong> Menambah konsentrasi reaktan atau produk akan menggeser kesetimbangan untuk mengurangi perubahan tersebut.</li>
            <li><strong>Perubahan Tekanan (untuk gas):</strong> Pada reaksi gas, meningkatkan tekanan dapat menggeser kesetimbangan ke arah yang menghasilkan jumlah mol gas lebih sedikit.</li>
            <li><strong>Perubahan Suhu:</strong> Mengubah suhu akan menggeser kesetimbangan menuju arah yang menyerap atau melepaskan panas (sesuai dengan prinsip Le Chatelier).</li>
            <li><strong>Katalis:</strong> Katalis tidak mengubah posisi kesetimbangan, tetapi mempercepat pencapaiannya.</li>
          </ul>
    
          <h3>Kesimpulan:</h3>
          <p>Pada kesetimbangan kimia, reaksi tidak berhenti, tetapi berlangsung dalam kedua arah dengan laju yang sama. Kesetimbangan dipengaruhi oleh konsentrasi, suhu, tekanan, dan katalis.</p>
        </div>
      );
    }

    if (selectedSubject === 'Faktor Yang Mempengaruhi') {
      return (
        <div className="subject-details">
          <h2>{selectedSubject}</h2>
          <p>Faktor-faktor yang Mempengaruhi Kesetimbangan Kimia adalah kondisi yang dapat menggeser posisi kesetimbangan reaksi kimia. Berikut adalah faktor-faktor tersebut:</p>
          <ul>
            <li><strong>Konsentrasi Reaktan dan Produk:</strong> Menambah konsentrasi reaktan atau produk akan menggeser kesetimbangan untuk mengurangi perubahan tersebut.</li>
            <p>Contoh: Jika konsentrasi reaktan ditambah, kesetimbangan akan bergeser ke arah produk untuk mengurangi reaktan.</p>
    
            <li><strong>Perubahan Tekanan (untuk gas):</strong> Pada reaksi yang melibatkan gas, peningkatan tekanan akan menggeser kesetimbangan ke arah yang menghasilkan lebih sedikit mol gas (jika ada perbedaan jumlah mol gas di kedua sisi reaksi).</li>
            <p>Contoh: Pada reaksi yang menghasilkan lebih banyak mol gas di satu sisi, peningkatan tekanan akan menggeser kesetimbangan ke sisi yang menghasilkan lebih sedikit gas.</p>
    
            <li><strong>Perubahan Suhu:</strong> Meningkatkan suhu pada reaksi eksotermik (melepaskan panas) akan menggeser kesetimbangan ke arah reaksi endotermik (penyerap panas), dan sebaliknya.</li>
            <p>Contoh: Pada reaksi yang melepaskan panas, peningkatan suhu akan menggeser kesetimbangan ke arah reaktan.</p>
    
            <li><strong>Katalis:</strong> Katalis tidak mengubah posisi kesetimbangan, tetapi mempercepat tercapainya kesetimbangan, baik pada reaksi maju maupun mundur.</li>
          </ul>
    
          <h3>Kesimpulan:</h3>
          <p>Kesetimbangan kimia dapat dipengaruhi oleh perubahan konsentrasi, tekanan, suhu, dan penggunaan katalis. Faktor-faktor ini dapat menggeser posisi kesetimbangan untuk mencapai keadaan yang lebih stabil.</p>
        </div>
      );
    }

    if (selectedSubject === 'Ciri-Ciri') {
      return (
        <div className="subject-details">
          <h2>{selectedSubject}</h2>
          <p>Ciri-ciri Kesetimbangan Kimia adalah kondisi di mana reaksi kimia mencapai keadaan stabil dan dinamis. Berikut adalah ciri-ciri utama kesetimbangan kimia:</p>
          <ul>
            <li><strong>Laju Reaksi Maju dan Mundur Sama:</strong> Pada kesetimbangan, laju reaksi pembentukan produk (maju) sama dengan laju reaksi pengembalian produk menjadi reaktan (mundur), sehingga konsentrasi reaktan dan produk tetap konstan.</li>
            <li><strong>Konsentrasi Reaktan dan Produk Tetap Konstan:</strong> Meskipun reaksi berlangsung terus-menerus, konsentrasi reaktan dan produk tidak berubah karena jumlah yang terbentuk sama dengan yang dikonsumsi.</li>
            <li><strong>Kondisi Dinamis:</strong> Reaksi tidak berhenti, tetapi berlangsung terus dalam kedua arah (maju dan mundur). Tidak ada perubahan bersih dalam jumlah reaktan dan produk.</li>
            <li><strong>Posisi Kesetimbangan Dapat Berbeda:</strong> Posisi kesetimbangan tidak selalu berada di tengah antara reaktan dan produk. Tergantung pada kondisi reaksi (seperti suhu, tekanan, dan konsentrasi), lebih banyak reaktan atau produk dapat terbentuk.</li>
          </ul>
          <h3>Kesimpulan:</h3>
          <p>Kesetimbangan kimia ditandai dengan laju reaksi maju dan mundur yang sama, konsentrasi reaktan dan produk yang tetap konstan, dan kondisi yang dinamis. Reaksi berlangsung terus dalam kedua arah, tetapi tidak ada perubahan bersih pada komposisi sistem.</p>
        </div>
      );
    }

    if (selectedSubject === 'Contoh Soal') {
      return (
        <div className="subject-details">
          <h2>{selectedSubject}</h2>
          <p>Soal:</p>
          <p>
            Pada suhu 500°C, campuran gas nitrogen (𝑁<sub>2</sub>) dan hidrogen (𝐻<sub>2</sub>) mengalami reaksi pembentukan amonia (𝑁𝐻<sub>3</sub>) menurut persamaan reaksi berikut:
          </p>
          <pre>
            N<sub>2</sub> (g) + 3H<sub>2</sub> (g) ⇌ 2NH<sub>3</sub> (g)
          </pre>
          <p>
            Jika pada awalnya dalam suatu wadah tertutup terdapat 1 mol 𝑁<sub>2</sub> dan 3 mol 𝐻<sub>2</sub>, dan setelah mencapai kesetimbangan, jumlah 𝑁𝐻<sub>3</sub> yang terbentuk adalah 1 mol, tentukan:
          </p>
          <ul>
            <li>Konsentrasi 𝑁<sub>2</sub> dan 𝐻<sub>2</sub> pada keadaan kesetimbangan.</li>
            <li>Posisi kesetimbangan apakah lebih ke produk atau reaktan?</li>
          </ul>
          <h3>Penyelesaian:</h3>
          <p>
            Menentukan perubahan konsentrasi:
          </p>
          <p>
            Awalnya, jumlah mol 𝑁<sub>2</sub> = 1 mol dan 𝐻<sub>2</sub> = 3 mol. 
            Pada kesetimbangan, jumlah mol 𝑁𝐻<sub>3</sub> yang terbentuk = 1 mol.
          </p>
          <p>Berdasarkan persamaan reaksi:</p>
          <pre>
            N<sub>2</sub> (g) + 3H<sub>2</sub> (g) ⇌ 2NH<sub>3</sub> (g)
          </pre>
          <p>
            Jika 1 mol 𝑁𝐻<sub>3</sub> terbentuk, maka:
            <br />
            𝑁<sub>2</sub> berkurang sebanyak 1/2 mol (karena koefisien 𝑁<sub>2</sub> adalah 1 dan 𝑁𝐻<sub>3</sub> adalah 2).
            <br />
            𝐻<sub>2</sub> berkurang sebanyak 3 mol 𝐻<sub>2</sub> untuk setiap 2 mol 𝑁𝐻<sub>3</sub> yang terbentuk, jadi 1 mol 𝑁𝐻<sub>3</sub> membutuhkan 1,5 mol 𝐻<sub>2</sub>.
          </p>
          <p>
            Maka perubahan jumlah mol:
            <br />
            𝑁<sub>2</sub> berkurang 0,5 mol. 
            <br />
            𝐻<sub>2</sub> berkurang 1,5 mol. 
            <br />
            𝑁𝐻<sub>3</sub> bertambah 1 mol.
          </p>
          <p>
            Konsentrasi pada kesetimbangan:
          </p>
          <p>
            Jumlah mol 𝑁<sub>2</sub> pada kesetimbangan = 1 - 0,5 = 0,5 mol.
            <br />
            Jumlah mol 𝐻<sub>2</sub> pada kesetimbangan = 3 - 1,5 = 1,5 mol.
            <br />
            Jumlah mol 𝑁𝐻<sub>3</sub> pada kesetimbangan = 1 mol.
          </p>
          <p>
            Posisi kesetimbangan:
          </p>
          <p>
            Karena jumlah 𝑁𝐻<sub>3</sub> yang terbentuk adalah 1 mol (tidak lebih sedikit atau lebih banyak dari jumlah awal reaktan), posisi kesetimbangan lebih mengarah ke reaktan, yang berarti reaksi lebih banyak mengarah ke pembentukan reaktan dibandingkan produk.
          </p>
          <h3>Kesimpulan:</h3>
          <ul>
            <li>Konsentrasi pada kesetimbangan:
              <ul>
                <li>[𝑁<sub>2</sub>] = 0,5 mol</li>
                <li>[𝐻<sub>2</sub>] = 1,5 mol</li>
                <li>[𝑁𝐻<sub>3</sub>] = 1 mol</li>
              </ul>
            </li>
            <li>Posisi kesetimbangan lebih mengarah ke reaktan.</li>
          </ul>
        </div>
      );
    }
    
       
    
    // Jika subjek lain dipilih, tampilkan detail standar
    return (
      <div className="subject-details">
        <h2>{selectedSubject}</h2>
        <p>Ini adalah informasi lebih lanjut tentang mata pelajaran {selectedSubject}.</p>
      </div>
    );    
  };

  

  return (
    <div className="kesetimbangan-container">
      <h1 className="title">Pilih SubMateri</h1>

      {/* Daftar Mata Pelajaran */}
      <div className="subject-list">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="subject-bubble"
            onClick={() => handleSubjectClick(subject)}
          >
            {subject}
          </div>
        ))}
      </div>

      {/* Tampilkan detail mata pelajaran yang dipilih */}
      {selectedSubject && renderSubjectDetails()}
    </div>
  );
}

export default Kesetimbangan;
