import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos"; // Import AOS library
import "./Hidropengertian.css";

function Hidropengertian() {
  // State to manage button visibility
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll event and show/hide the button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Attach scroll event listener on component mount
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Initialize AOS
    AOS.init({ duration: 1000 });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="header text-center py-5" data-aos="fade-down">
        <h1>Hidrokarbon dan Minyak Bumi</h1>
        <p>Pengertian Lengkap Tentang Hidrokarbon dan Minyak Bumi.</p>
      </header>

      {/* Content Sections */}
      <section className="container my-5" data-aos="fade-up">
        <h2 className="text-center">Apa itu Hidrokarbon?</h2>
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://asset-2.tstatic.net/jogja/foto/bank/images/Ikatan-Kimia.jpg"
              alt="Hidrokarbon"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <p>
              Hidrokarbon adalah senyawa kimia yang terdiri dari unsur karbon (C)
              dan hidrogen (H). Hidrokarbon bisa ditemukan dalam berbagai bentuk
              seperti gas, cair, atau padat. Contoh yang paling dikenal adalah minyak bumi
              dan gas alam.
            </p>
            <h3>Jenis-jenis Hidrokarbon</h3>
            <ul>
              <li><strong>Alkana (Parafina):</strong> Mengandung ikatan tunggal, seperti metana dan etana.</li>
              <li><strong>Alkena:</strong> Mengandung ikatan rangkap dua, seperti etena.</li>
              <li><strong>Alkina:</strong> Mengandung ikatan rangkap tiga, seperti etuna.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container my-5" data-aos="fade-left">
        <h2 className="text-center">Apa itu Minyak Bumi?</h2>
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://thegorbalsla.com/wp-content/uploads/2019/01/Minyak-Bumi.jpg"
              alt="Minyak Bumi"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <p>
              Minyak bumi adalah campuran kompleks dari senyawa hidrokarbon yang terbentuk
              dari sisa-sisa organisme laut yang terkubur selama jutaan tahun. Proses pemanasan
              dan tekanan tinggi menyebabkan perubahan kimia pada bahan organik tersebut, yang
              akhirnya membentuk minyak bumi.
            </p>

            <h3>Proses Pembentukan Minyak Bumi</h3>
            <ol>
              <li><strong>Akumulasi Organisme Laut:</strong> Sisa organisme laut terkubur di dasar laut.</li>
              <li><strong>Pemanasan dan Tekanan:</strong> Lapisan sedimentasi menumpuk dan memanaskan bahan organik.</li>
              <li><strong>Transformasi Kimia:</strong> Proses kimia yang menghasilkan minyak bumi.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="container my-5" data-aos="fade-right">
        <h2 className="text-center">Manfaat Minyak Bumi</h2>
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://i.ytimg.com/vi/_YgZjKVTwDQ/maxresdefault.jpg"
              alt="Manfaat Minyak Bumi"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <ul>
              <li><strong>Bahan Bakar:</strong> Digunakan untuk bensin, diesel, dan gas.</li>
              <li><strong>Industri:</strong> Sebagai bahan baku untuk plastik, karet, dan berbagai produk kimia.</li>
              <li><strong>Memasak:</strong> Hampir semua rumah tangga menggunakan gas LPG untuk memasak.</li>
              <li><strong>Bahan:</strong> Aspal digunakan untuk melapisi jalan raya.</li>
              <li><strong>Kebersihan:</strong> Deterjen banyak deterjen yang mengandung bahan turunan minyak bumi.</li>
              <li><strong>Kecantikan:</strong> Produk perawatan rambut: Shampo, kondisioner, dan produk perawatan rambut lainnya seringkali mengandung bahan-bahan turunan minyak bumi.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          className="btn btn-primary scroll-to-top"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            borderRadius: "50%",
            padding: "10px 15px",
            fontSize: "16px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default Hidropengertian;
