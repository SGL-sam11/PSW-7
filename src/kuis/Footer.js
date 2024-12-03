import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

function Footer() {
  return (
    <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#1c2331' }}>
      {/* Section: Social media */}
      <section className="d-flex justify-content-between p-4" style={{ backgroundColor: '#6351ce' }}>
        <div className="me-5">
        </div>
        <div>
         
        </div>
      </section>

      {/* Section: Links */}
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            {/* Company Info */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold"><strong>CHEMISTRY</strong>hub</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p>
              Chemistry Hub adalah platform edukasi online yang menyediakan materi pembelajaran lengkap untuk siswa kelas 11 yang mempelajari kimia. Situs ini menawarkan catatan pembelajaran, video tutorial, dan latihan soal yang disusun oleh para ahli untuk membantu siswa memahami konsep-konsep kimia dengan lebih mudah dan menyenangkan. Selain itu, Chemistry Hub juga menyediakan materi tambahan seperti simulasi eksperimen virtual dan diskusi forum untuk melibatkan siswa dalam belajar yang lebih interaktif.
              </p>
            </div>

            {/* Products */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Products</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
              <p><a className="text-white"><strong>MATERI</strong></a></p>
              <p><a className="text-white"><strong>KUIS</strong></a></p>
            </div>

          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className="text-white" href="#">ChemisrtyHub.co.id</a>
      </div>
    </footer>
  );
}

export default Footer;
