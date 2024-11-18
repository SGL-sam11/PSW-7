import React, { useState } from 'react';
import './hlm.css';

function Koloid() {
  return (
    <div className="koloid">

      <section id="intro" className="hero">
 </section>


      <section id="colloid-science" className="section">
        <h3>Apa Itu Koloid?</h3>
        <p>Koloid adalah campuran di mana satu zat tersebar secara mikroskopis dalam zat lain. Partikel-partikel ini lebih besar dari molekul tetapi cukup kecil untuk tetap tersebar tanpa mengendap. Koloid ada di sekitar kita dalam kehidupan sehari-hari, mulai dari produk makanan seperti mayones hingga fenomena alam seperti kabut!</p>

        <h4>Karakteristik Utama Koloid</h4>
        <ul>
          <li><strong>Efek Tyndall:</strong> Penyebaran cahaya karena ukuran partikel dalam koloid.</li>
          <li><strong>Gerakan Brown:</strong> Gerakan acak partikel koloid.</li>
          <li><strong>Stabilitas:</strong> Koloid tetap stabil tanpa partikel yang mengendap.</li>
        </ul>
      </section>


      <section id="types" className="section">
        <h3>Jenis-jenis Koloid</h3>
        <div className="colloid-type-cards">
          <div className="colloid-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwW0QpEA3dly8dzkdzYY7L2-CaZYHhtXM6MQ&s" alt="Sols" />
            <h4>Sols</h4>
            <p>Partikel padat tersebar dalam cairan (misalnya, cat).</p>
          </div>
          <div className="colloid-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo_P7UUeNqSk4E2mIDTzQ84J88fdoVTagaAw&s" alt="Gels" />
            <h4>Gel</h4>
            <p>Cairan tersebar dalam padatan (misalnya, gelatin).</p>
          </div>
          <div className="colloid-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGhYsNSdY5yETfT414zpyun_u79gfAOw87g&s" alt="Emulsions" />
            <h4>Emulsi</h4>
            <p>Partikel cair tersebar dalam cairan lain (misalnya, mayones).</p>
          </div>
          <div className="colloid-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMJeJ-75CkDW3xlLS6e_euGuHKlU8NaTtxw&s" alt="Foams" />
            <h4>Busa</h4>
            <p>Gas tersebar dalam cairan (misalnya, krim kocok).</p>
          </div>
          <div className="colloid-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnTBqTfLX-52CB2VmlbzjIGJ4BZhtzrU4g0g&s" alt="Aerosols" />
            <h4>Aerosol</h4>
            <p>Partikel padat atau cair tersebar dalam gas (misalnya, kabut).</p>
          </div>
        </div>
      </section>

      <section id="applications" className="section">
        <h3>Aplikasi Koloid</h3>
        <h4>Contoh Sehari-hari</h4>
        <ul>
          <li>Susu (emulsi dari tetesan lemak dalam air)</li>
          <li>Cat (sol dari pigmen dalam air atau minyak)</li>
          <li>Krim Kocok (busa gas dalam krim)</li>
        </ul>

        <h4>Aplikasi Industri & Ilmiah</h4>
        <ul>
          <li>Farmasi: Sistem pengiriman obat menggunakan partikel koloid.</li>
          <li>Industri Makanan: Menstabilkan emulsi dalam produk makanan.</li>
          <li>Kosmetik: Gel, krim, dan losion dalam kosmetik.</li>
        </ul>
      </section>


      <section id="practicum" className="section">
        <h3>Praktikum dirumah</h3>
        <p>Beberapa praktikum gampang yang bisa dicoba dirumah untuk memperdalam pemahaman kamu terhadap materi koloid!</p>

        <h4>Eksperimen yang Bisa Dicoba</h4>
        <ul>
          <li><a href="https://youtu.be/dADH37HS6lI?feature=shared" target="_blank" rel="noopener noreferrer">Praktikum koloid dengan agar agar</a></li>
          <li><a href="https://youtu.be/WhtjtRhNXzw?feature=shared" target="_blank" rel="noopener noreferrer">Praktikum koloid menguji larutan gula,susu,dan kopi</a></li>       </ul>

        <h4>Ide Proyek</h4>
        <ul>
          <li>Membangun larutan koloid dan mengukur stabilitasnya seiring waktu.</li>
          <li>Bereksperimen dengan pembuatan emulsi dan menguji stabilitasnya di bawah kondisi yang berbeda.</li>
          <li>Mengeksplorasi peran koloid dalam ilmu pangan dengan membuat mayones sendiri.</li>
        </ul>
      </section>


      <section id="video" className="section">
        <h3>Video Pembelajaran</h3>
        <p>Untuk membantu anda memahami materi bisa cek video berikut ini :</p>

        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://youtu.be/LLewlDhE2VM?feature=shared" // Replace with your desired video URL
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>


              <div className="mascot">
          <img src="https://media.tenor.com/IOvQXmpvQNoAAAAM/cute.gif" alt="Mascot" className="mascot-img" />
        </div>
      </section>

    </div>
  );
}

export default Koloid;
