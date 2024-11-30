import React from 'react';
import './animasi1.css'; // Tambahkan file CSS untuk animasi custom
import  Navbar from './Navbar';
import Footer from './Footer';


function Quiz() {
  const materiList = [
    {
      title: 'KUIS Hidrokarbon dan Minyak Bumi',
      description: 'Tes kemampuanmu mengenai materi Hidrokarbon dan minyak bumi disini!',
      image: 'kuispg.png',
      link: '/Kuishidrokarbon',
    },
    {
      title: 'KUIS Hukum Termokimia',
      description: 'Memahami hukum termokimia dan penerapannya dalam reaksi kimia.',
      image: 'kuispg.png',
      link: '#',
    },
    {
      title: 'KUIS Laju Reaksi',
      description: 'Analisis faktor-faktor yang memengaruhi laju reaksi kimia.',
      image: 'kuispg.png',
      link: '#',
    },
    {
      title: 'KUIS Kesetimbangan Kimia',
      description: 'Mempelajari konsep kesetimbangan dalam reaksi kimia.',
      image: 'kuispg.png',
      link: '/kesetimbangan',
    },
    {
      title: 'KUIS Larutan Asam Basa',
      description: 'Eksplorasi sifat-sifat larutan asam dan basa.',
      image: 'kuispg.png',
      link: '#',
    },
    {
      title: 'KUIS Hidrolisis Garam',
      description: 'Memahami konsep hidrolisis garam dalam kimia.',
      image: 'kuispg.png',
      link: '#',
    },
    {
      title: 'KUIS Larutan Penyangga',
      description: 'Belajar tentang larutan penyangga dan aplikasinya.',
      image: 'kuispg.png',
      link: '/Penyangga',
    },
    {
      title: 'KUIS Kelarutan dan Hasil Kali Kelarutan',
      description: 'Studi tentang kelarutan dan hasil kali kelarutan.',
      image: 'kuispg.png',
      link: '#',
    },
    {
      title: 'KUIS Koloid',
      description: 'Mempelajari sifat dan aplikasi koloid dalam kehidupan.',
      image: 'kuispg.png',
      link: '/koloid',
    },
    {
      title: 'KUIS Termodinamika Kimia',
      description: 'Konsep dasar termodinamika dalam reaksi kimia.',
      image: 'https://via.placeholder.com/150',
      link: '#',
    },
    {
      title: 'Redoks dan Elektrokimia',
      description: 'Mendalami reaksi redoks dan prinsip elektrokimia.',
      image: 'https://via.placeholder.com/150',
      link: '#',
    },
    {
      title: 'Kimia Organik',
      description: 'Dasar-dasar kimia organik dan aplikasinya.',
      image: 'https://via.placeholder.com/150',
      link: '#',
    },
  ];

  return ( 
  <div>
    <Navbar />
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h2>KUIS PERMATERI !!!</h2>
          <p>Mari tes kemampuan mu , apakah kamu benar-benar belajar atau tidak, belajar tanpa diuji adalah kesia-siaan.</p>
        </div>
      </div>
      <div className="row g-4">
        {materiList.map((materi, index) => (
          <div
            className="col-md-4 fade-in-up"
            key={index}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="p-3 bg-light border rounded text-center hover-zoom">
              <a href={materi.link} className="text-decoration-none text-dark">
                <img
                  src={materi.image}
                  alt={materi.title}
                  className="mb-3 img-fluid rounded"
                />
                <h5>{materi.title}</h5>
                <p className="text-muted">{materi.description}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default Quiz;
