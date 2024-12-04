import React, { useState } from "react";
import "./penyangga.css";
import Navbar from "./Navbar";
import KoloidAccordion_penyangga from "../accecories/KoloidAccordion_penyangga";

function Penyangga() {
  const [selectedTab, setSelectedTab] = useState("materi");

  return (
    <div className="penyangga">
      <Navbar />

      <header className="updated-header">
        <div className="header-content">
          <h1>Larutan Penyangga</h1>
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
          larutan penyangga adalah larutan yang yang mampu mempertahankan pH-nya saat ditambahkan asam, basa, maupun air. Larutan buffer menjadi salah satu produk yang dihasilkan dari reaksi asam dan basa.
Larutan buffer terbentuk dari interaksi antara asam atau basa lemah dengan garamnya (konjugasinya). Jika Sobat Pijar ingin mengingat kembali tentang asam/basa konjugasi, hal tersebut dijelaskan dalam pengertian asam dan basa oleh Bronsted-Lowry.
Asam konjugasi adalah basa yang sudah mengikat 1 ion H+ sedangkan basa konjugasi adalah asam yang sudah melepaskan 1 ion H+.</p>
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
            className={selectedTab === "peran" ? "active" : ""}
            onClick={() => setSelectedTab("peran")}
          >
            Penggunaan
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
             <div className="deskripsi"> <p>
              Larutan penyangga mampu mempertahankan pH saat ditambah asam, basa, dan air. Selain itu, penyangga terdiri dari campuran 2 zat yaitu asam/basa lemah dengan konjugasinya.
Dalam melaksanakan fungsinya untuk mempertahankan pH, larutan penyangga bekerja sebagai sistem. Setiap terjadi penambahan asam ataupun basa yang berusaha mengubah pH larutan tersebut, maka salah satu penyusun larutan ini akan bekerja untuk menjaga pH-nya.
<br></br>
<div className="picture"><img src="https://i.pinimg.com/236x/75/f8/23/75f823025348e4ecb0fa8eef8500a92a.jpg" alt="larutan penyangga" /></div>
Supaya bisa lebih memahami prinsip kerja ini, perhatikan contoh yang ada berikut ini, ya! <br></br>
✮ Misalnya terdapat sebuah sistem penyangga yang terdiri atas asam lemah CH3COOH dan basa konjugasinya yaitu CH3COO-. Sistem penyangga ini akan membentuk suatu reaksi kesetimbangan seperti berikut:
Jika larutan tersebut ditambahkan asam (ion H+), maka sesuai dengan prinsip kesetimbangan reaksi akan bergeser ke kiri sehingga jumlah H+ yang membawa sifat asam bisa ditekan, dengan begitu larutan bisa menjaga agar pH-nya tidak turun.
Sedangkan jika basa ditambahkan ke larutan tersebut, maka ion OH- akan bereaksi dengan H+ sehingga kesetimbangan akan bergeser ke arah kanan. Dengan kata lain, jumlah ion H+ yang berkurang diseimbangkan oleh CH3COOH sehingga pH-nya tidak naik.
              </p></div>
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
          {selectedTab === "peran" && (
            <div className="tab-panel">
             <div className="title"><h2>Peran larutan penyangga</h2> </div>
              <p>
              Di dalam kehidupan sehari-hari, larutan penyangga memiliki peran yang sangat banyak mulai dari dalam tubuh hingga dalam dunia industri hingga farmasi. Berikut ini adalah beberapa peran dari larutan buffer!
<li>Sebagai penyangga pH darah agar tidak mengalami keasaman atau kebasaan yang dapat menyebabkan penyakit atau kondisi tubuh yang tidak normal.</li>
<li>Sebagai pengatur pH pada lambung agar enzim yang ada di dalamnya bisa bekerja dengan optimal untuk mencerna makanan.</li>
<li>Menjaga pH limbah industri agar saat dibuang tidak membahayakan bagi lingkungan dan ekosistem.</li>
<li>Menjaga pH dari obat agar sesuai dengan pH di bagian tubuh tertentu misalnya obat mata yang menggunakan penyangga agar pH-nya sesuai dengan kondisi mata manusia.</li>
              </p>
            </div>
          )}
        </main>
      </section>

{/* section contoh soal */}
<section>
  <div className="contoh-soal">
<div className="judul"><h1>✩₊˚.⋆☾⋆⁺₊✧ CONTOH SOAL! ✩₊˚.⋆☾⋆⁺₊✧</h1></div>  
<KoloidAccordion_penyangga/>
</div>
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
