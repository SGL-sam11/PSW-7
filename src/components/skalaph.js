// src/components/PrinsipLeChatelier.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link untuk navigasi
import './skalaph.css';

const Skalaph = () => {
  const backgroundStyle = {
    backgroundImage: 'url("https://media.istockphoto.com/id/997087002/id/vektor/skala-ph-sains.jpg?s=612x612&w=0&k=20&c=iU8eQHQMzyu82Qomj5SthltZj4iTgrlRah5HoSm1Jgg=")', // Ganti dengan link gambar yang sesuai
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
    <div className="container">
      <h1>Pengertian pH dan Faktor yang Mempengaruhi pH</h1>

      <div className="kesetimbangan-background" style={backgroundStyle}></div>

      <h2>1. Pengertian pH</h2>
      <p>
        pH adalah ukuran untuk menunjukkan tingkat keasaman atau kebasaan suatu larutan. Skala pH berkisar antara 0 hingga 14, di mana nilai pH yang lebih rendah dari 7 menunjukkan larutan asam, nilai pH 7 menunjukkan larutan netral (misalnya air murni), dan nilai pH yang lebih tinggi dari 7 menunjukkan larutan basa (alkalis).
      </p>
      <p>
        Definisi pH: pH adalah logaritma negatif dari konsentrasi ion hidrogen (H⁺) dalam suatu larutan.
      </p>
      <pre>pH = −log[H⁺]</pre>
      <p>[H⁺] = konsentrasi ion hidrogen dalam mol per liter (M)</p>

      <h2>2. Skala pH</h2>
      <ul>
        <li>pH &lt; 7: Larutan asam, memiliki konsentrasi ion H&plus; yang lebih tinggi.</li>
        <li>pH = 7: Larutan netral, artinya konsentrasi ion H&plus; sama dengan konsentrasi ion OH&minus;.</li>
        <li>pH &gt; 7: Larutan basa atau alkalis, dengan konsentrasi ion H&plus; lebih rendah dibandingkan ion OH&minus;.</li>
      </ul>
      <p>Contoh pH berbagai bahan:</p>
      <ul>
        <li>pH 0-3: Asam kuat (misalnya asam klorida - HCl)</li>
        <li>pH 4-6: Asam lemah (misalnya cuka, air lemon)</li>
        <li>pH 7: Netral (air murni)</li>
        <li>pH 8-11: Basa lemah (misalnya sabun, air laut)</li>
        <li>pH 12-14: Basa kuat (misalnya natrium hidroksida - NaOH)</li>
      </ul>

      <h2>3. Pentingnya pH</h2>
      <p>
        pH memainkan peran penting dalam berbagai proses kimia dan biologis. Beberapa aplikasi penting pH dalam kehidupan sehari-hari adalah:
      </p>
      <ul>
        <li>Pertanian: pH tanah mempengaruhi ketersediaan unsur hara untuk tanaman.</li>
        <li>Lingkungan: pH air sungai dan laut mempengaruhi ekosistem.</li>
        <li>Industri: dalam proses produksi, pengendalian pH penting untuk kualitas produk.</li>
        <li>Kesehatan: pH darah yang normal adalah sekitar 7,4, dan perubahan pH dapat menandakan gangguan kesehatan.</li>
      </ul>

      <h2>4. Pengukuran pH</h2>
      <p>Untuk mengukur pH, ada beberapa cara:</p>
      <ul>
        <li><strong>Indikator pH:</strong> Pewarna alami atau sintetis yang berubah warna tergantung pada pH larutan. Contoh: lakmus, fenolftalein, metil jingga.</li>
        <li><strong>pH Meter:</strong> Alat elektronik yang dapat mengukur pH dengan akurat menggunakan elektroda sensitif terhadap ion H&plus;.</li>
      </ul>

      <h2>5. Cara Menghitung pH</h2>
      <p>Untuk larutan dengan konsentrasi H&plus; yang diketahui, pH dapat dihitung dengan rumus:</p>
      <pre>pH = −log[H⁺]</pre>
      <p>Contoh: Jika konsentrasi H&plus; dalam larutan adalah 0,001 M, maka:</p>
      <pre>pH = −log(0,001) = 3</pre>
      <p>Ini berarti larutan tersebut bersifat asam dengan pH 3.</p>

      <h2>6. Hubungan pH dan Konsentrasi OH&minus;</h2>
      <p>Hubungan antara [H&plus;] dan [OH&minus;] dapat dihitung menggunakan rumus:</p>
      <pre>[H⁺] × [OH⁻] = 10⁻¹⁴ (pada suhu 25°C)</pre>

      <h2>7. Faktor yang Mempengaruhi pH</h2>
      <ul>
        <li>Konsentrasi zat terlarut: Semakin banyak asam atau basa yang dilarutkan, semakin rendah atau tinggi pH larutan.</li>
        <li>Suhu: Pada suhu yang lebih tinggi, ionisasi air meningkat, sehingga pH bisa sedikit menurun.</li>
        <li>Kekuatan asam atau basa: Asam kuat atau basa kuat akan memiliki pH yang lebih ekstrim (lebih asam atau lebih basa).</li>
      </ul>

      <h2>8. Contoh Kasus dan Aplikasi pH</h2>
      <ul>
        <li><strong>Air Minum:</strong> pH air minum yang ideal adalah antara 6,5 hingga 8,5. Air dengan pH yang terlalu rendah atau terlalu tinggi dapat mempengaruhi rasa dan kualitas air tersebut.</li>
        <li><strong>Tanah:</strong> Tanah dengan pH terlalu asam atau basa dapat menghambat pertumbuhan tanaman. Biasanya pH tanah yang ideal untuk pertanian adalah sekitar 6 hingga 7.</li>
      </ul>

      {/* Buttons untuk navigasi */}
      <div className="navigation-buttons">
        <Link to="/">
          <button className="btn btn-primary">Kembali ke Halaman Utama</button>
        </Link>
        <Link to="/reaksi-netralisasi">
          <button className="btn btn-secondary">Pelajari Reaksi Netralisasi</button>
        </Link>
      </div>
    </div>
  );
};

export default Skalaph;
