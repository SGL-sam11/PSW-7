import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Home.css';
import Footer from './Footer';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />

            {/* Main Content */}
            <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
                {/* Hero Section */}
                <div className="text-center mb-5">
                    <h1 className="display-4" style={{ fontWeight: 'bold', color: '#122D4F' }}>Selamat Datang di ChemistryHub</h1>
                    <p className="lead" style={{ color: '#6c757d' }}>
                        Temukan materi kimia yang mudah dipahami dan latihan soal yang menarik.
                    </p>
                </div>

                {/* Section Cards */}
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body text-center">
                                    <h5 className="card-title" style={{ color: '#122D4F' }}>Materi</h5>
                                    <p className="card-text">Pelajari berbagai topik kimia yang terstruktur dan mudah dipahami.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body text-center">
                                    <h5 className="card-title" style={{ color: '#122D4F' }}>Latihan Soal</h5>
                                    <p className="card-text">Uji kemampuanmu dengan soal-soal menarik dan menantang.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body text-center">
                                    <h5 className="card-title" style={{ color: '#122D4F' }}>Tentang Kami</h5>
                                    <p className="card-text">Kenali ChemistryHub lebih dekat dan misi kami untukmu.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Informative Sections */}
                <div className="container">
                    <div className="row mb-5 align-items-center">
                        <div className="col-md-6">
                            <img src="manfaat kimia 200x200.png" alt="Apa itu Kimia" className="img-fluid rounded shadow" />
                        </div>
                        <div className="col-md-6">
                            <h2 style={{ color: '#122D4F' }}>Apa itu Kimia?</h2>
                            <p>
                                Kimia adalah cabang ilmu pengetahuan yang mempelajari tentang materi, sifat-sifatnya, struktur, komposisi, dan perubahan yang terjadi dalam proses kimia.
                                Ilmu ini memainkan peran penting dalam kehidupan sehari-hari, termasuk dalam industri, kesehatan, dan lingkungan.
                            </p>
                        </div>
                    </div>

                    <div className="row mb-5 align-items-center">
                        <div className="col-md-6 order-md-2">
                            <img src="sejarah kimia 150x150.png" alt="Sejarah Kimia" className="img-fluid rounded shadow" />
                        </div>
                        <div className="col-md-6 order-md-1">
                            <h2 style={{ color: '#122D4F' }}>Sejarah Kimia</h2>
                            <p>
                                Sejarah kimia bermula dari alkimia di abad pertengahan, yang kemudian berkembang menjadi ilmu modern.
                                Kimia berkontribusi pada penemuan berbagai elemen, hukum, dan reaksi yang membentuk dasar ilmu pengetahuan saat ini.
                            </p>
                        </div>
                    </div>

                    <div className="row mb-5 align-items-center">
                        <div className="col-md-6">
                            <img src="dasar-dasar kimia dengan unsur tabel periodik, molekul, atom, dan reaksi kimia, ukuran 150x150.png" alt="Dasar-dasar Kimia" className="img-fluid rounded shadow" />
                        </div>
                        <div className="col-md-6">
                            <h2 style={{ color: '#122D4F' }}>Dasar-Dasar Kimia</h2>
                            <p>
                                Dasar-dasar kimia meliputi pemahaman tentang tabel periodik, hukum-hukum dasar, dan konsep seperti molekul, atom, dan reaksi kimia.
                                Pengetahuan ini adalah fondasi penting untuk memahami berbagai fenomena ilmiah.
                            </p>
                        </div>

                    <div className="row mb-5 align-items-center">
                        <div className="col-md-6 order-md-2">
                            <img src="manfaat kimia dalam kehidupan sehari-hari.png" alt="Sejarah Kimia" className="img-fluid rounded shadow" />
                        </div>
                        <div className="col-md-6 mt-5 order-md-1">
                            <h2 style={{ color: '#122D4F' }}>Manfaat Kimia</h2>
                            <p>Kimia memberikan banyak manfaat dalam berbagai aspek kehidupan kita, di antaranya:</p>
    <ul>
        <li>
            <strong>Industri Makanan:</strong>
            <ul>
                <li>Membantu menciptakan pengawet, pewarna, dan perasa yang aman.</li>
                <li>Mengembangkan teknik pengolahan makanan agar lebih tahan lama dan sehat.</li>
            </ul>
        </li>
        <li>
            <strong>Kesehatan dan Medis:</strong>
            <ul>
                <li>Kimia adalah dasar dalam pembuatan obat-obatan dan vaksin.</li>
                <li>Membantu menciptakan alat medis, seperti prostetik dan bahan untuk perawatan gigi.</li>
            </ul>
        </li>
        <li>
            <strong>Energi dan Lingkungan:</strong>
            <ul>
                <li>Menghasilkan bahan bakar ramah lingkungan seperti bioetanol dan hidrogen.</li>
                <li>Membantu teknologi daur ulang plastik dan pengelolaan limbah.</li>
            </ul>
        </li>
        <li>
            <strong>Teknologi dan Material:</strong>
            <ul>
                <li>Membuat material tahan lama seperti polimer, plastik, dan serat karbon.</li>
                <li>Inovasi teknologi baterai untuk perangkat elektronik dan kendaraan listrik.</li>
            </ul>
        </li>
        <li>
            <strong>Pertanian:</strong>
            <ul>
                <li>Pengembangan pupuk, pestisida, dan herbisida untuk meningkatkan produktivitas pertanian.</li>
                <li>Teknologi tanah dan air untuk mendukung pertanian berkelanjutan.</li>
            </ul>
        </li>
        <li>
            <strong>Keamanan dan Kebersihan:</strong>
            <ul>
                <li>Produksi sabun, deterjen, dan disinfektan untuk mencegah penyebaran penyakit.</li>
                <li>Membantu pengembangan sensor pendeteksi gas berbahaya.</li>
            </ul>
        </li>
        <li>
            <strong>Kosmetik dan Perawatan Pribadi:</strong>
            <ul>
                <li>Membantu menciptakan produk perawatan kulit, rambut, dan kosmetik yang aman.</li>
                <li>Meneliti bahan-bahan alami untuk produk yang ramah lingkungan.</li>
            </ul>
        </li>
        <li>
            <strong>Astronomi dan Eksplorasi Luar Angkasa:</strong>
            <ul>
                <li>Menciptakan bahan bakar roket dan pakaian astronot.</li>
                <li>Mengidentifikasi komposisi planet dan bintang.</li>
            </ul>
        </li>
    </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
