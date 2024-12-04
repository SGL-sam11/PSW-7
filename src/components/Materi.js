import React from 'react';
import './animasi1.css'; // Tambahkan file CSS untuk animasi custom
import  Navbar from './Navbar';
import Footer from './Footer';

function Materi() {
  const materiList = [
    {
      title: 'Hidrokarbon dan Minyak Bumi',
      description: 'Pelajari struktur dan sifat-sifat hidrokarbon serta perannya dalam minyak bumi.',
      image: 'hidrokarbon dan minyakbumi.png',
      link: '/Hidrokarbon',
    },
    {
      title: 'Hukum Termokimia',
      description: 'Memahami hukum termokimia dan penerapannya dalam reaksi kimia.',
      image: 'termokimia 150X150 bagus unik estetik.png',
      link: '/Termokimia',
    },
    {
      title: 'Laju Reaksi',
      description: 'Analisis faktor-faktor yang memengaruhi laju reaksi kimia.',
      image: 'laju reaksi 150x150.png',
      link: '/Lajureaksi',
    },
    {
      title: 'Kesetimbangan Kimia',
      description: 'Mempelajari konsep kesetimbangan dalam reaksi kimia.',
      image: 'kesetimbangan kimia 150x150.png',
      link: '#',
    },
    {
      title: 'Larutan Asam Basa',
      description: 'Eksplorasi sifat-sifat larutan asam dan basa.',
      image: 'larutan asam basa 150x150.png',
      link: '#',
    },
    {
      title: 'Hidrolisis Garam',
      description: 'Memahami konsep hidrolisis garam dalam kimia.',
      image: 'hidrolisis garam.png',
      link: '#',
    },
    {
      title: 'Larutan Penyangga',
      description: 'Belajar tentang larutan penyangga dan aplikasinya.',
      image: 'larutan penyangga 150x150.png',
      link: '/Penyangga',
    },
    {
      title: 'Kelarutan dan Hasil Kali Kelarutan',
      description: 'Studi tentang kelarutan dan hasil kali kelarutan.',
      image: 'kelarutan dan hasil kali kelarutan.png',
      link: '/Kelarutan',
    },
    {
      title: 'Koloid',
      description: 'Mempelajari sifat dan aplikasi koloid dalam kehidupan.',
      image: 'koloid 150x150 bagus unik estetik.png',
      link: '/Koloid',
    },
  ];

  return ( 
  <div>
    <Navbar />
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h2>Materi Pembelajaran</h2>
          <p>Pilih topik berikut untuk memulai pembelajaran.</p>
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
    < Footer />
  </div>
  );
}

export default Materi;
