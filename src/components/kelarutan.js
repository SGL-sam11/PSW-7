import React, { useState } from "react";
import "./kelarutan.css";
import Navbar from "./Navbar";

function Kelarutan() {
  const [selectedTab, setSelectedTab] = useState("materi");

  return (
    <div className="kelarutan">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <header className="updated-header">
        <div className="header-content">
          <h1>Kelarutan dan hasil kali kelarutan</h1>
        </div>
        <div className="header-image">
          <img
            src="https://i.pinimg.com/736x/99/32/1f/99321f1601c934d5ff28667033eeea78.jpg"
            alt="Chemistry Illustration"
          />
        </div>
      </header>

      {/* Section Informasi */}
      <section className="info-section">
        <img
          src="https://i.pinimg.com/736x/3b/e0/e5/3be0e56316396ba68826a81edbdf59db.jpg"
          alt="Chemistry Illustration"
          className="info-image"
        />
        <div className="info-content">
          <h2>Apa itu Kelarutan?</h2>
          <p>
          Kelarutan adalah kemampuan suatu zat untuk melarut dalam sejumlah pelarut atau bisa dikatakan jika kelarutan menyatakan banyaknya zat terlarut dalam tiap satu liter larutan pada suhu tertentu. Jika suatu zat padat secara terus menerus ditambahkan ke dalam zat pelarut, maka pada suatu saat kita akan mendapati zat tersebut tidak akan larut lagi. 
Itu artinya, pada saat itu sudah mencapai konsentrasi maksimum. Larutan yang sudah mengandung konsentrasi maksimum itu, disebut sebagai larutan jenuh dan harga konsentrasi maksimum itu dinamakan kelarutan. 
          </p>
        </div>
      </section>

      <section className="info-section">
        <img
          src="https://i.pinimg.com/736x/c9/be/5d/c9be5dd292b269863d0264520ffca52c.jpg"
          alt="Chemistry Illustration"
          className="info-image"
        />
      <div className="info-content">
          <h2>Apa itu Hasil Kali Kelarutan?</h2>
          <p>
          Hasil kali kelarutan (Ksp) adalah suatu konstanta kesetimbangan ion yang menunjukkan tingkat kelarutan suatu senyawa ionik dalam air pada suhu tertentu. Dalam konteks kimia, ketika suatu senyawa ionik larut dalam air, itu terdisosiasi menjadi ion-ion konstituen, dan terdapat suatu kesetimbangan dinamis antara senyawa tersebut dan ion-ionnya dalam larutan. </p>
        </div>
</section>

      <section className="content-section">
        <div className="image-center">
          <img
            src="https://i.pinimg.com/736x/ac/35/3f/ac353f1d35cfa951bc5d17d35cdc99b5.jpg"
            alt="Buffer Solution Illustration"
            className="buffer-image"
          />
        </div>

        {/* Tabs untuk Materi */}
        <nav className="tabs">
          <button
            className={selectedTab === "Pengaruh-Ion" ? "active" : ""}
            onClick={() => setSelectedTab("Pengaruh-Ion")}
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
          {selectedTab === "Pengaruh-Ion" && (
            <div className="tab-panel">
             <div className="title"><h2>Pengaruh Ion</h2></div> 
              <div className="penyangga-type-cards">
          <div className="penyangga-card">
            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRrZr3yXY7QFy6BP6rrj8XQbQ_c0vzQA6aQGRMl0-IJpjgaIkMt5loIGc-wXElbIOW9xy2FS2-kcsm0NIUiPzZJ9yuNhxCR&usqp=CAE
" alt="larutan basa" />
            <h4>Pengaruh Ion Sejenis Terhadap Kelarutan</h4>
            <p>Larutan basa adalah zat yang jika dilarutkan ke dalam air akan menghasilkan ion hidroksida (OH). Basa memiliki sifat kaustik, artinya dapat merusak kulit dan terasa licin serta rasanya pahit.
            Sedangkan jika PH-nya di atas 7 , maka larutan tersebut sifatnya basa.</p>          </div>
          <div className="penyangga-card2">
            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSrxQ8g_chRZ-n8X6DyGZSp2L1BklY_P93M4p31PbJUueanf-3xAzgbXEZRP0bVWVRpQC8CYNH_ZcSaYd5Ln983IenTlf4_0OIgB9lGBU8&usqp=CAE" alt="larutan asam" />
           <p></p>
            <h4>Larutan Asam</h4>
            <p>Pengaruh penambahan ion sejenis terhadap kelarutan suatu senyawa dapat memiliki dampak signifikan pada kelarutan senyawa tersebut. Dampaknya dapat dijelaskan dalam beberapa poin:</p>
<div className="sub-bab"><h5>Pengurangan Kelarutan</h5></div>
<li>Penambahan ion sejenis dengan muatan yang sama dapat mengurangi kelarutan suatu senyawa. Ini terjadi karena adanya tolakan elektrostatis antara ion-ion sejenis.</li>
<li>Contohnya, pertimbangkan senyawa AB yang terdisosiasi menjadi ion Aⁿ⁺ dan ion Bⁿ⁻. Jika kita menambahkan ion Aⁿ⁺ dalam larutan yang sudah mengandung senyawa AB, ion-ion Aⁿ⁺ tersebut dapat bersaing dengan ion Bⁿ⁻ untuk tempat di dalam larutan, mengurangi kelarutan senyawa AB.</li>
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
             <div className="title"> <h2>Rumus </h2> </div>
             <h3> Buffer asam menggunakan rumus pH </h3> 
          
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
\<iframe width="560" height="315" src="https://www.youtube.com/embed/VISgNcdmOdU?si=J_dJre_UfBhJb7mc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        </div>
      </section>
    </div>
  );
}
export default Kelarutan;
