import React, { useState } from "react";
// import "./penyangga.css";
import Navbar from "./Navbar";

function Penyangga() {
  const [selectedTab, setSelectedTab] = useState("materi");

  return (
    <div className="penyangga">
      <Navbar />

      <header className="updated-header">
        <div className="header-content">
          <h1>Larutan Penyangga</h1>
          <p>Explore the wonders of chemistry and its real-world applications.</p>
        </div>
        <div className="header-image">
          <img
            src="https://i.pinimg.com/736x/e5/8d/8a/e58d8a2e4fffda25e953e48cf6cb0a7d.jpg"
            alt="Chemistry Illustration"
          />
        </div>
      </header>

      {/* Section Informasi */}
      <section className="info-section">
        <img
          src="https://i.pinimg.com/736x/75/38/46/753846a58d15368b8e43839d6010c98e.jpg"
          alt="Chemistry Illustration"
          className="info-image"
        />
        <div className="info-content">
          <h2>Apa itu Larutan Penyangga?</h2>
          <p>
          Larutan penyangga atau Buffer adalah larutan yang dapat mempertahankan pH tertentu terhadap usaha mengubah pH, seperti penambahan asam, basa, ataupun pengenceran.
          </p>
        </div>
      </section>

      {/* Section Penyangga */}
      <section className="content-section">
        {/* Image di tengah atas */}
        <div className="image-center">
          <img
            src="https://i.pinimg.com/736x/7f/d5/02/7fd502213a93720ce7f5f251e02ae8c6.jpg"
            alt="Buffer Solution Illustration"
            className="buffer-image"
          />
        </div>

        {/* Tabs untuk Materi */}
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
            Prinsip Kerja
          </button>
          <button
            className={selectedTab === "rumus" ? "active" : ""}
            onClick={() => setSelectedTab("rumus")}
          >
            Rumus
          </button>
          <button
            className={selectedTab === "penggunaan" ? "active" : ""}
            onClick={() => setSelectedTab("penggunaan")}
          >
            Penggunaan
          </button>
          <button
            className={selectedTab === "buat" ? "active" : ""}
            onClick={() => setSelectedTab("buat")}
          >
            Cara Membuat
          </button>
        </nav>

        {/* Konten Tab */}
        <main className="tab-content">
          {selectedTab === "Jenis" && (
            <div className="tab-panel">
             <div className="title"><h2>Jenis Larutan Penyangga</h2></div> 
              <div className="penyangga-type-cards">
          <div className="penyangga-card">
            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRrZr3yXY7QFy6BP6rrj8XQbQ_c0vzQA6aQGRMl0-IJpjgaIkMt5loIGc-wXElbIOW9xy2FS2-kcsm0NIUiPzZJ9yuNhxCR&usqp=CAE
" alt="larutan basa" />
            <h4>Larutan Basa</h4>
            <p>Larutan basa adalah zat yang jika dilarutkan ke dalam air akan menghasilkan ion hidroksida (OH). Basa memiliki sifat kaustik, artinya dapat merusak kulit dan terasa licin serta rasanya pahit.
            Sedangkan jika PH-nya di atas 7 , maka larutan tersebut sifatnya basa.</p>          </div>
          <div className="penyangga-card2">
            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSrxQ8g_chRZ-n8X6DyGZSp2L1BklY_P93M4p31PbJUueanf-3xAzgbXEZRP0bVWVRpQC8CYNH_ZcSaYd5Ln983IenTlf4_0OIgB9lGBU8&usqp=CAE" alt="larutan asam" />
            <h4>Larutan Asam</h4>
            <p>Larutan asam didefinisikan sebagai cairan yang mengandung konsentrasi ion hidrogen yang tinggi , yang umumnya digunakan dalam proses industri seperti pengawetan asam, pembersihan, dan penghilangan kerak.
            Jika nilai PH-nya dibawah 7 maka larutan tersebut sifatnya asam.
            </p>
          </div>
        </div>
            </div>
          )}
          {selectedTab === "prinsip" && (
            <div className="tab-panel">
            <div className="title">  <h2>Prinsip Kerja</h2> </div>
              <p>
                Buffer bekerja dengan menetralkan asam atau basa yang ditambahkan
                ke larutan. Hal ini dicapai melalui reaksi antara komponen asam
                dan basa yang membentuk buffer.
              </p>
            </div>
          )}
          {selectedTab === "rumus" && (
            <div className="tab-panel">
             <div className="title"> <h2>Rumus Buffer</h2> </div>
             <h3> Buffer asam menggunakan rumus pH </h3> 
              <div className="rms"> <p> pKa + log([garam]/[asam]),</p></div>
              <h3>  sedangkan buffer basa menggunakan rumus </h3>
              <div className="rms"> <p> pOH = pKb + log([garam]/[basa]). </p> </div>
            </div>
          )}
          {selectedTab === "penggunaan" && (
            <div className="tab-panel">
             <div className="title"><h2>Penggunaan</h2> </div>
              <p>
                Larutan penyangga digunakan di berbagai bidang seperti biologi,
                kimia, dan industri untuk menjaga kestabilan pH.
              </p>
            </div>
          )}
          {selectedTab === "buat" && (
            <div className="tab-panel">
            <div className="title"> <h2>Cara Membuat Larutan Penyangga</h2> </div>
              <p>
                Campurkan asam atau basa lemah dengan garamnya. Hitung perbandingan
                menggunakan rumus buffer untuk menentukan pH yang diinginkan.
              </p>
            </div>
          )}
        </main>
      </section>

      {/* Section Video */}
      <section className="video-section">
        <h2>Video Pembelajaran</h2>
        <div className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-H4k-SFYqxo?si=iPzkngrpt-wstvyQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
    </div>
  );
}
export default Penyangga;
