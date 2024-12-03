import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Hukumdasar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HukumDasar() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div className="hukum-dasar-container">
      <header className="header text-center mb-4" data-aos="fade-up">
        <h1 className="main-title display-3">Hukum-Hukum Dasar Termokimia</h1>
        <p className="sub-title lead">Pahami konsep dasar termokimia yang menjadi fondasi ilmu ini!</p>
      </header>

      <section className="container">
        {/* Hukum Hess */}
        <div className="card mb-4" data-aos="fade-right">
          <div className="card-body">
            <h2>1. Hukum Hess</h2>
            <img 
              src="https://tse3.mm.bing.net/th?id=OIP.KSHr_VpvrHYmPziw9s3QDAAAAA&pid=Api&P=0&h=180" 
              alt="Diagram Hukum Hess" 
              className="responsive-img img-fluid mb-3"
              data-aos="zoom-in"
            />
            <p>
              <strong>Hukum Hess:</strong> Hukum ini menyatakan bahwa kalor yang diserap atau dilepas dalam suatu reaksi kimia hanya bergantung pada keadaan awal dan akhir reaksi, bukan pada jalannya reaksi. Dengan kata lain, meskipun reaksi berlangsung melalui beberapa tahap, total perubahan entalpi (ΔH) akan sama dengan jumlah perubahan entalpi pada setiap tahap.
            </p>

            <div className="accordion" id="accordionHess">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button 
                    className="accordion-button" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseOne" 
                    aria-expanded="true" 
                    aria-controls="collapseOne"
                  >
                    Lihat Rumus
                  </button>
                </h2>
                <div 
                  id="collapseOne" 
                  className="accordion-collapse collapse show" 
                  aria-labelledby="headingOne" 
                  data-bs-parent="#accordionHess"
                >
                  <div className="accordion-body">
                    <pre className="code-block bg-light p-3 rounded">
                      A → C melalui dua tahap: A → B, B → C
                      ΔH (A → C) = ΔH (A → B) + ΔH (B → C)
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <p className="img-description text-center text-muted">
              Diagram menunjukkan tahapan perubahan entalpi yang terlibat dalam reaksi, sesuai dengan Hukum Hess.
            </p>
          </div>
        </div>

        <div className="card mb-4" data-aos="fade-left">
          <div className="card-body">
            <h2>2. Hukum Lavoisier-Laplace</h2>
            <img 
              src="https://tse2.mm.bing.net/th?id=OIP.dv32cmQZfUO3kSrRnoilIgAAAA&pid=Api&P=0&h=180" 
              alt="Diagram Hukum Lavoisier-Laplace" 
              className="responsive-img img-fluid mb-3"
              data-aos="zoom-in"
            />
            <p>
              <strong>Hukum Lavoisier-Laplace:</strong> Hukum ini menyatakan bahwa kalor yang diperlukan untuk menguraikan suatu senyawa menjadi unsur-unsurnya adalah sama dengan kalor yang dilepaskan pada pembentukan senyawa tersebut dari unsur-unsurnya. Dengan kata lain, reaksi penguraian adalah kebalikan dari reaksi pembentukan, sehingga perubahan entalpinya berlawanan tanda.
            </p>

            <div className="accordion" id="accordionLavoisier">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button 
                    className="accordion-button" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseTwo" 
                    aria-expanded="true" 
                    aria-controls="collapseTwo"
                  >
                    Lihat Rumus
                  </button>
                </h2>
                <div 
                  id="collapseTwo" 
                  className="accordion-collapse collapse show" 
                  aria-labelledby="headingTwo" 
                  data-bs-parent="#accordionLavoisier"
                >
                  <div className="accordion-body">
                    <pre className="code-block bg-light p-3 rounded">
                      Pembentukan: H₂ + O₂ → H₂O   (ΔH = -)
                      Penguraian: H₂O → H₂ + O₂   (ΔH = +)
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <p className="img-description text-center text-muted">
              Diagram ini menggambarkan perbandingan antara reaksi pembentukan dan penguraian senyawa sesuai dengan Hukum Lavoisier-Laplace.
            </p>
          </div>
        </div>

        <div className="card mb-4" data-aos="fade-up">
          <div className="card-body">
            <h2>3. Hukum Kekekalan Energi</h2>
            <img 
              src="https://cdn.idntimes.com/content-images/community/2020/07/a-1-b17da30cda3dbe1f1965586725dc6d16.jpeg" 
              alt="Diagram Hukum Kekekalan Energi" 
              className="responsive-img img-fluid mb-3"
              data-aos="zoom-in"
            />
            <p>
              <strong>Hukum Kekekalan Energi:</strong> Hukum ini menyatakan bahwa energi tidak dapat diciptakan atau dimusnahkan, tetapi hanya dapat diubah bentuknya. Dalam reaksi kimia, energi kimia diubah menjadi energi panas, cahaya, atau bentuk energi lainnya.
            </p>

            <div className="accordion" id="accordionEnergi">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button 
                    className="accordion-button" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseThree" 
                    aria-expanded="true" 
                    aria-controls="collapseThree"
                  >
                    Lihat Rumus
                  </button>
                </h2>
                <div 
                  id="collapseThree" 
                  className="accordion-collapse collapse show" 
                  aria-labelledby="headingThree" 
                  data-bs-parent="#accordionEnergi"
                >
                  <div className="accordion-body">
                    <pre className="code-block bg-light p-3 rounded">
                      E_awal = E_akhir (Energi total tetap konstan)
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <p className="img-description text-center text-muted">
              Diagram ini menunjukkan bagaimana energi dipertahankan dalam sistem tertutup, sesuai dengan Hukum Kekekalan Energi.
            </p>
          </div>
        </div>

        <div className="alert alert-info mb-4" data-aos="fade-up">
          <h4>Implikasi Hukum Kekekalan Energi dalam Termokimia</h4>
          <ul>
            <li>Penggunaan <strong>kalorimeter</strong> untuk mengukur kalor yang diserap atau dilepas dalam suatu reaksi.</li>
            <li>Aplikasi <strong>Hukum Hess</strong> dalam perhitungan perubahan entalpi pada reaksi yang sulit diukur langsung.</li>
            <li>Penerapan hukum ini dalam analisis reaksi pembakaran bahan bakar dan perubahan energi dalam reaksi biokimia.</li>
          </ul>
        </div>

        <div className="alert alert-success" data-aos="fade-up">
          <h4>Penerapan Hukum-Hukum Termokimia</h4>
          <ul>
            <li><span role="img" aria-label="Industry">🏭</span> <strong>Industri kimia:</strong> Menghitung efisiensi proses produksi dan reaksi kimia industri.</li>
            <li><span role="img" aria-label="Energy">💡</span> <strong>Energi:</strong> Menganalisis reaksi pembakaran bahan bakar fosil untuk pembangkit listrik.</li>
            <li><span role="img" aria-label="Environment">🌍</span> <strong>Lingkungan:</strong> Mempelajari perubahan energi dalam ekosistem dan dampak emisi karbon.</li>
            <li><span role="img" aria-label="Biochemistry">🧬</span> <strong>Biokimia:</strong> Mempelajari metabolisme energi dalam tubuh makhluk hidup, termasuk reaksi-reaksi biokimia dalam proses respirasi sel.</li>
          </ul>
        </div>

        <div className="text-left mt-4">
          <Link to="/Termokimia">
            <button className="cta-button btn btn-primary">Kembali</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HukumDasar;
