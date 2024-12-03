// Import the Tyndall component
import React, { useEffect,useState } from 'react';
import './Koloid.css'; // Ensure no conflicting global styles
import Navbar from './Navbar';
import KoloidAccordion from "../accecories/KoloidAccordion";
import senterImage from "../aset/senter.png";
import bubble from "../aset/bubble.png"

function Koloid() {
  useEffect(() => {
    const originalBackgroundColor = document.body.style.backgroundColor;
    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
    };
  }, []);
  const Tyndall = () => {
    // State to control animation
    const [animate, setAnimate] = useState(false);

    // Function to toggle animation
    const handleStartAnimation = () => {
      setAnimate(true);
    };
    return (
// bagian tyndall
      <div className="container_tyndall">
           {/* tombol */}
     <div className="button_tyndall">
     <button onClick={handleStartAnimation} >
          Start Animation
        </button>
        </div>
        <div className="glass_tyndall target-glass_tyndall">
          <div className="water_tyndall"></div>
          </div>
          <div className="glass_tyndall source-glass_tyndall">
          <div className="water_tyndall"></div>
        </div>
        <div className="glass_tyndall source-glass_tyndall">
          <div className="water_tyndall"></div>
       <div className="bubble_tyndall"><img src={bubble} alt="bubble" className="bubble_tyndall" />
       </div>
        </div>
         {/* senter */}
         {animate && <div className="sinari_tyndall"></div>}
        <img src={senterImage} alt="Flashlight" className="flashlight_tyndall" />
         </div>
    );
 // akhir bagian tyndall
};

//bagian brown
const Brown = () => {
  return (
    <div className="container_brown">
      <div className="glass_brown">
        <div className="water_brown">
          {/* Zig-zag animation */}
          <svg className="line-svg_brown" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path id="zigzag-path_brown" d="M 10 10 L 50 30 L 10 50 L 50 70 L 10 90" stroke="black" fill="transparent" />
          </svg>
          {/* Ball following the path */}
          <div className="ball_brown"></div>
        </div>
      </div>
    </div>
  );
};
//akhir brown

return (
    <div id="koloid-wrapper">
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

      {/* Accordion Section */}
      <section id="koloid-science" className="section">
        <KoloidAccordion />
      </section>

      {/* Tyndall and Brown Effects */}
      <section id="koloid-effects" className="section">
        <div className='judul'>
          <h2>Efek Tyndall</h2>
          <h4>Penyebaran cahaya karena ukuran partikel dalam koloid.</h4>
          <Tyndall />
        </div>
        <div className='judul'>
          <h2>Gerakan Brown</h2>
          <h4>Gerakan acak partikel koloid.</h4>
       <Brown />
        </div>

      </section>
  
      {/* Types of Colloids */}
      <section id="koloid-types" className="section">
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

      {/* Applications */}
      <section id="koloid-applications" className="section">
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

      {/* Practicum Section */}
      <section id="koloid-practicum" className="section">
        <h3>Praktikum dirumah</h3>
        <p>Beberapa praktikum gampang yang bisa dicoba dirumah untuk memperdalam pemahaman kamu terhadap materi koloid!</p>
        <h4>Eksperimen yang Bisa Dicoba</h4>
        <ul>
          <li><a href="https://youtu.be/dADH37HS6lI?feature=shared" target="_blank" rel="noopener noreferrer">Praktikum koloid dengan agar agar</a></li>
          <li><a href="https://youtu.be/WhtjtRhNXzw?feature=shared" target="_blank" rel="noopener noreferrer">Praktikum koloid menguji larutan gula,susu,dan kopi</a></li>       
        </ul>
        <h4>Ide Proyek</h4>
        <ul>
          <li>Membangun larutan koloid dan mengukur stabilitasnya seiring waktu.</li>
          <li>Bereksperimen dengan pembuatan emulsi dan menguji stabilitasnya di bawah kondisi yang berbeda.</li>
          <li>Mengeksplorasi peran koloid dalam ilmu pangan dengan membuat mayones sendiri.</li>
        </ul>
      </section>

      {/* Video Section */}
      <section id="koloid-video" className="section">
        <h3>Video Pembelajaran</h3>
        <p>Untuk membantu anda memahami materi bisa cek video berikut ini :</p>
        <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/LLewlDhE2VM?si=YwXa_O8OuaOZd99x" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className="mascot">
          <img src="https://media.tenor.com/IOvQXmpvQNoAAAAM/cute.gif" alt="Mascot" className="mascot-img" />
        </div>
      </section>
    </div>
  );
}

export default Koloid;
