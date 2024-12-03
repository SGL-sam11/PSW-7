import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-center text-md-left mt-5 w-100"
      style={{ backgroundColor: "#0c1446", color: "#fff" }}
    >
      <section className="d-flex justify-content-between p-4" style={{ backgroundColor: '#436B95' }}>
        <div className="me-5">
        </div>
        <div>
         
        </div>
      </section>
      
      {/* Main Content */}
      <div className="container-fluid p-4">
        <div className="row">
          {/* Section 1: Footer Content */}
          <div className="col-lg-6 col-md-12 mb-4">
            <h5 className="mb-3 text-white" style={{ fontWeight: "bold", color: "#43658b" }}>
              Footer Content
            </h5>
            <hr/>
            <p>
            Chemistry Hub adalah platform edukasi online yang menyediakan materi pembelajaran lengkap untuk siswa kelas 11 yang mempelajari kimia. 
            Situs ini menawarkan catatan pembelajaran, video tutorial, dan latihan soal yang disusun oleh para ahli untuk membantu siswa memahami konsep-konsep kimia dengan lebih mudah dan menyenangkan.
            Selain itu, Chemistry Hub juga menyediakan materi tambahan seperti simulasi eksperimen virtual dan diskusi forum untuk melibatkan siswa dalam belajar yang lebih interaktif.
            </p>
          </div>
          {/* Section 2: Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-3 text-white" style={{ fontWeight: "bold", color: "#43658b" }}>
              Links
            </h5>
            <hr/>
            <ul className="list-unstyled mb-0">
              {["FAQ", "Classes", "Pricing", "Safety"].map((link, index) => (
                <li className="mb-1" key={index}>
                  <a
                    href="#!"
                    className="text-decoration-none"
                    style={{
                      color: "#b8d4e3",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#43658b")}
                    onMouseLeave={(e) => (e.target.style.color = "#b8d4e3")}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Section 3: Opening Hours */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-3 text-white" style={{ fontWeight: "bold", color: "#43658b" }}>
              Opening Hours
            </h5>
            <hr/>
            <table className="table table-borderless text-white">
              <tbody>
                <tr>
                  <td>Mon - Fri:</td>
                  <td>8am - 9pm</td>
                </tr>
                <tr>
                  <td>Sat - Sun:</td>
                  <td>8am - 1am</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(67, 101, 139, 0.8)", color: "#fff" }}
      >
        © 2024 Copyright:
        <a
          href="https://example.com/"
          className="text-decoration-none"
          style={{
            color: "#fff",
            fontWeight: "bold",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#43658b")}
          onMouseLeave={(e) => (e.target.style.color = "#fff")}
        >
          ChemisrtyHub.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
