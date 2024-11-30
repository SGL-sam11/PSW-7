import React, { useState } from "react";
// import "./penyangga.css";
import Navbar from "./Navbar";

function Penyangga() {
  const [selectedTab, setSelectedTab] = useState("materi");
  const [buttonText, setButtonText] = useState("Klik untuk belajar lebih!");

  const handleButtonClick = () => {
    setButtonText("Semangat belajar! 💪");
  };

  return (
    <div className="Penyangga">
      {/* Navbar */}
      <Navbar />

      {/* Bagian Materi Penyangga */}
      <section id="colloid-science" className="section">
        <h3>Apa Itu Larutan Penyangga?</h3>
        <p>
          Larutan penyangga (buffer) adalah larutan yang dapat mempertahankan pH
          relatif stabil meskipun ditambahkan sejumlah kecil asam kuat, basa
          kuat, atau mengalami pengenceran. Larutan ini penting dalam berbagai
          proses kimia, biologi, dan industri.
        </p>

        {/* Tab Navigasi */}
        <nav className="tabs">
          <button
            className={selectedTab === "Jenis" ? "active" : ""}
            onClick={() => setSelectedTab("Jenis")}
          >
            Jenis-jenis
          </button>
          <button
            className={selectedTab === "prinsip" ? "active" : ""}
            onClick={() => setSelectedTab("prinsip")}
          >
            Prinsip kerja
          </button>
          <button
            className={selectedTab === "rumus" ? "active" : ""}
            onClick={() => setSelectedTab("rumus")}
          >
          rumus
          </button>
          <button
            className={selectedTab === "penggunaan" ? "active" : ""}
            onClick={() => setSelectedTab("penggunaan")}
          >
            penggunaan 
          </button>
          <button
            className={selectedTab === "buat" ? "active" : ""}
            onClick={() => setSelectedTab("buat")}
          >
          Cara buat
          </button>
        </nav>

        {/* jenis */}
        <main className="content">
          {selectedTab === "Jenis" && (
            <div className="Jenis">
                <h4>Jenis Larutan Penyangga</h4>
        <ul>
          <li><strong>1. Buffer Asam:</strong> Terdiri dari asam lemah dan garamnya (yang mengandung basa konjugasi).</li>
          <li><strong>2. Buffer Basa:</strong> Terdiri dari basa lemah dan garamnya (yang mengandung asam konjugasi).</li>
        </ul>
            </div>
          )}
          {/* prinsip */}
          {selectedTab === "prinsip" && (
            <div className="prinsip">
                      <h4>Prinsip Kerja Larutan Penyangga</h4>
        <ul>
          <li><strong>Buffer Asam:</strong>
            <ul>
              <li>Asam lemah memberikan ion H⁺ jika basa ditambahkan.</li>
              <li>Basa konjugasi menangkap ion H⁺ jika asam ditambahkan.</li>
              <li>Reaksi: CH₃COOH ⇌ CH₃COO⁻ + H⁺</li>
            </ul>
          </li>
          <li><strong>Buffer Basa:</strong>
            <ul>
              <li>Basa lemah memberikan ion OH⁻ jika asam ditambahkan.</li>
              <li>Asam konjugasi menangkap ion OH⁻ jika basa ditambahkan.</li>
              <li>Reaksi: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻</li>
            </ul>
          </li>
        </ul>
            </div>
          )}
          {/* rumus */}
          {selectedTab === "rumus" && (
            <div className="rumus">
                      <h4>Rumus Larutan Penyangga</h4>
        <ul>
          <li><strong>Buffer Asam:</strong>
            <p>Rumus pH: pH = pKa + log([Garam] / [Asam])</p>
            <p><em>pKa adalah -log Ka (tetapan ionisasi asam lemah).</em></p>
          </li>
          <li><strong>Buffer Basa:</strong>
            <p>Rumus pOH: pOH = pKb + log([Garam] / [Basa])</p>
            <p><em>pH = 14 - pOH.</em></p>
          </li>
        </ul>
            </div>
          )}
          {/* contoh penggunaan */}
          {selectedTab === "penggunaan" && (
            <div className="penggunaan">
         <h4>Contoh Penggunaan Larutan Penyangga</h4>
        <ul>
          <li><strong>Biologi:</strong> Menjaga pH darah pada sekitar 7,4 dengan buffer karbonat (H₂CO₃/HCO₃⁻).</li>
          <li><strong>Kimia Industri:</strong> Menstabilkan pH dalam proses fermentasi.</li>
          <li><strong>Laboratorium:</strong> Digunakan dalam reaksi kimia untuk menjaga stabilitas pH.</li>
        </ul>
            </div>
          )}
          {/* cara membuat */}
          {selectedTab === "buat"&& (
            <div className="buat">
                      <h4>Cara Membuat Larutan Penyangga</h4>
        <ul>
          <li>Campurkan asam lemah dengan garamnya (buffer asam) atau basa lemah dengan garamnya (buffer basa).</li>
          <li>Tentukan perbandingan konsentrasi asam/basa dengan garam sesuai kebutuhan pH menggunakan rumus buffer.</li>
        </ul>
            </div>
          )}
          {/* video pembelajaran */}
          {selectedTab === "prinsip" && (
            <div className="prinsip">
                      <h4>Prinsip Kerja Larutan Penyangga</h4>
        <ul>
          <li><strong>Buffer Asam:</strong>
            <ul>
              <li>Asam lemah memberikan ion H⁺ jika basa ditambahkan.</li>
              <li>Basa konjugasi menangkap ion H⁺ jika asam ditambahkan.</li>
              <li>Reaksi: CH₃COOH ⇌ CH₃COO⁻ + H⁺</li>
            </ul>
          </li>
          <li><strong>Buffer Basa:</strong>
            <ul>
              <li>Basa lemah memberikan ion OH⁻ jika asam ditambahkan.</li>
              <li>Asam konjugasi menangkap ion OH⁻ jika basa ditambahkan.</li>
              <li>Reaksi: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻</li>
            </ul>
          </li>
        </ul>
            </div>
          )}
        </main>
      </section>
    </div>
  );
}

export default Penyangga;
