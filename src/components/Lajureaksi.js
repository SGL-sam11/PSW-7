import React, { useState, useEffect } from 'react';
import { Link, useBlocker } from 'react-router-dom';
import AOS from 'aos';
import { Line } from 'react-chartjs-2'; // Import Line chart
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'; // Register required chart components
import 'aos/dist/aos.css';
import Navbar from './Navbar';
import './Lajureaksi.css';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Lajureaksi() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // State untuk menyimpan labels dan data grafik
  const [labels, setLabels] = useState(['0', '5', '10', '15', '20', '25']);  // Waktu (detik)
  const [dataPoints, setDataPoints] = useState([100, 80, 65, 50, 30, 10]);  // Konsentrasi (mol/L)

  // State untuk input data baru
  const [newTime, setNewTime] = useState('');
  const [newConcentration, setNewConcentration] = useState('');

  // Data untuk grafik (dengan labels dan dataPoints yang reaktif)
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Konsentrasi Pereaksi (mol/L)',
        data: dataPoints,
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)', // Warna garis
        borderColor: 'rgba(75,192,192,1)', // Warna border
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Grafik Laju Reaksi: Konsentrasi vs Waktu',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Waktu (detik)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Konsentrasi (mol/L)',
        },
      },
    },
  };

  // Fungsi untuk menambah data baru ke grafik
  const addDataPoint = (e) => {
    e.preventDefault();
    if (newTime && newConcentration) {
      setLabels((prevLabels) => [...prevLabels, newTime]);
      setDataPoints((prevDataPoints) => [...prevDataPoints, parseFloat(newConcentration)]);
      setNewTime('');
      setNewConcentration('');
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <header className="header" data-aos="fade-up">
        <h1 className="main-title">Pengertian Laju Reaksi</h1>
        <p className="sub-title">
          Memahami kecepatan reaksi kimia dan faktor-faktor yang memengaruhinya.
        </p>
      </header>

      <section className="content">
        <h2 data-aos="fade-up">Definisi Laju Reaksi</h2>
        <p className="fade-in" data-aos="fade-up">
          Laju reaksi adalah perubahan konsentrasi pereaksi atau produk dalam suatu satuan waktu. Dengan kata lain, laju reaksi menunjukkan seberapa cepat suatu zat habis atau terbentuk dalam suatu reaksi.
        </p>
        <pre className="code-block" data-aos="zoom-in">
          Laju reaksi = Δkonsentrasi / Δwaktu
        </pre>

        <div className="card mb-4" data-aos="fade-up">
          <h2 data-aos="fade-up">Faktor-faktor yang Mempengaruhi Laju Reaksi</h2>
          <ul className="list-icons" data-aos="fade-up">
            <li>
              <span className="icon">⚗️</span> <strong>Konsentrasi:</strong> Semakin tinggi konsentrasi, semakin sering terjadi tumbukan antar partikel, sehingga laju  semakin cepat.
            </li>
            <li>
              <span className="icon">🌡️</span> <strong>Suhu:</strong> Peningkatan suhu meningkatkan energi kinetik partikel, sehingga lebih banyak tumbukan efektif terjadi.
            </li>
            <li>
              <span className="icon">🔬</span> <strong>Luas permukaan:</strong> Semakin luas permukaan zat padat, semakin banyak partikel yang berkontak dengan pereaksi lain.
            </li>
            <li>
              <span className="icon">⚙️</span> <strong>Katalis:</strong> Zat yang mempercepat laju reaksi dengan menurunkan energi aktivasi tanpa ikut bereaksi.
            </li>
            <li>
              <span className="icon">🧪</span> <strong>Sifat alamiah zat pereaksi:</strong> Jenis ikatan kimia, ukuran partikel, dan kompleksitas molekul juga memengaruhi laju reaksi.
            </li>
          </ul>
        </div>

        <div className="card mb-4" data-aos="fade-up">
          <h2 data-aos="fade-up">Teori Tumbukan</h2>
          <p data-aos="fade-up">
          Teori Tumbukan adalah konsep dalam kimia yang menjelaskan bagaimana reaksi kimia terjadi. Sederhananya, reaksi kimia hanya terjadi ketika partikel-partikel pereaksi bertumbukan dengan energi yang cukup dan arah yang tepat.
          </p>
        </div>

        <div className="card mb-4" data-aos="fade-up">
          <h2 data-aos="fade-up">Persamaan Laju Reaksi</h2>
          <pre className="code-block" data-aos="zoom-in">
            Laju reaksi = k [A]^m [B]^n
          </pre>
          <p data-aos="fade-up">Di mana:</p>
          <ul data-aos="fade-up">
            <li><strong>k:</strong> Konstanta laju reaksi</li>
            <li><strong>[A] dan [B]:</strong> Konsentrasi pereaksi A dan B</li>
            <li><strong>m dan n:</strong> Orde reaksi terhadap A dan B</li>
          </ul>
        </div>

        <div className="card mb-4" data-aos="fade-up"></div>
        <div className="button-container" data-aos="fade-up">
          <h2 data-aos="fade-up">Grafik Laju Reaksi</h2>
          <p data-aos="fade-up">
            Grafik laju reaksi menggambarkan perubahan konsentrasi pereaksi atau produk terhadap waktu. Grafik ini memberikan informasi tentang orde reaksi dan konstanta laju reaksi.
          </p>
        </div>

        {/* Tambahkan grafik di sini */}
        <div className="graph-container" data-aos="fade-up">
          <Line data={data} options={options} />
        </div>

        {/* Formulir untuk menambah data */}
        <div className="input-form-container" data-aos="fade-up">
          <h3>Tambah Data Baru</h3>
          <form onSubmit={addDataPoint} className="input-form">
            <div className="form-group">
              <label htmlFor="time">Waktu (detik):</label>
              <input
                type="number"
                id="time"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                placeholder="Masukkan waktu"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="concentration">Konsentrasi (mol/L):</label>
              <input
                type="number"
                id="concentration"
                value={newConcentration}
                onChange={(e) => setNewConcentration(e.target.value)}
                placeholder="Masukkan konsentrasi"
                required
              />
            </div>
            <button type="submit" className="cta-button">
              Tambahkan Data
            </button>
          </form>
        </div>

        <div className="card mb-4" data-aos="fade-up">
        <h2 data-aos="fade-up">Penerapan Laju Reaksi</h2>
        <ul className="list-icons" data-aos="fade-up">
          <li><span className="icon">🏭</span> Industri: Mengoptimalkan proses produksi untuk hasil yang cepat dan efisien.</li>
          <li><span className="icon">🌱</span> Lingkungan: Mempelajari laju degradasi polutan.</li>
          <li><span className="icon">💊</span> Kesehatan: Mengembangkan obat-obatan yang bekerja dengan cepat dan efektif.</li>
        </ul>
        </div>

        <Link to="/HukumLajuReaksi">
          <button className="cta-button" data-aos="fade-up">Hukum Laju Reaksi</button>
        </Link>
      </section>
    </div>
  );
}

export default Lajureaksi;
