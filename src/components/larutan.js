import React from 'react';
import { Link, Route, Switch, useParams } from 'react-router-dom';
import './larutan.css'; // Mengimpor file CSS eksternal

// Komponen utama yang berisi daftar materi dan penjelasan materi
const Larutan = () => {
  const materiList = [
    { id: 1, title: 'Pengertian Asam dan Basa', description: 'Asam dan basa adalah dua konsep dasar dalam kimia yang berlawanan.' },
    { id: 2, title: 'Teori Asam Basa', description: 'Teori asam-basa mencakup berbagai konsep seperti teori Arrhenius, Brønsted-Lowry, dan Lewis.' },
    { id: 3, title: 'Konsep Keasaman dan Kebasaan', description: 'Keasaman dan kebasaan dapat diukur dengan pH atau indikator asam-basa.' },
    { id: 4, title: 'Asam dan Basa Kuat vs Lemah', description: 'Asam kuat dan basa kuat terionisasi sepenuhnya di dalam air.' },
    { id: 5, title: 'Reaksi Asam-Basa', description: 'Reaksi asam-basa melibatkan pertukaran proton antara asam dan basa.' },
    { id: 6, title: 'Indikator Asam-Basa', description: 'Indikator asam-basa digunakan untuk menentukan pH suatu larutan.' },
    { id: 7, title: 'Asam dan Basa dalam Kehidupan Sehari-hari', description: 'Asam dan basa banyak digunakan dalam kehidupan sehari-hari, seperti dalam pembersih rumah tangga.' },
    { id: 8, title: 'Contoh Soal', description: 'Contoh soal tentang asam dan basa untuk latihan pemahaman konsep.' },
  ];

  return (
    <div className="larutan-container">
      {/* Judul besar */}
      <h1 className="larutan-main-heading">Larutan Asam-Basa</h1>
      
      {/* Judul materi utama */}
      <h2 className="larutan-heading">Pilih Materi Asam Basa</h2>
      
      <div className="card-container">
        {materiList.map((materi) => (
          <div key={materi.id} className="card">
            <Link to={`/materi/${materi.id}`} className="card-link">
              <h3>{materi.title}</h3>
            </Link>
          </div>
        ))}
      </div>

      {/* Tampilan Penjelasan Materi */}
      <Switch>
        <Route 
          path="/materi/:id" 
          render={(props) => <MateriDetail {...props} materiList={materiList} />} 
        />
      </Switch>
    </div>
  );
};

// Komponen untuk menampilkan detail materi berdasarkan ID
const MateriDetail = ({ materiList }) => {
  const { id } = useParams();
  const materi = materiList.find((m) => m.id === parseInt(id));

  if (!materi) return <p>Materi tidak ditemukan!</p>;

  return (
    <div className="detail-container">
      <h3>{materi.title}</h3>
      <p>{materi.description}</p>
      <Link to="/" className="back-link">
        Kembali ke Daftar Materi
      </Link>
    </div>
  );
};

export default Larutan;
