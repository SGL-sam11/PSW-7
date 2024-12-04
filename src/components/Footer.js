import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-center text-md-left mt-5 w-100 py-4"
      style={{
        backgroundColor: "#f5f7fa", // Warna latar belakang soft
        color: "#495057", // Abu-abu untuk teks
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Social Section */}
      <section
        className="d-flex justify-content-between align-items-center px-4 py-3"
        style={{
          backgroundColor: "#3b60a6", // Biru soft
          borderBottom: "1px solid #dee2e6",
        }}
      >
        <div className="me-3 text-white">
          <span
            style={{
              fontSize: "1rem",
            }}
          >
            <strong>Connect with us on social networks:</strong>
          </span>
        </div>
        <div>
          <a
            href="https://facebook.com"
            className="me-3 text-decoration-none"
            style={{ color: "#ffffff", fontSize: "1.2rem" }}
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            className="me-3 text-decoration-none"
            style={{ color: "#ffffff", fontSize: "1.2rem" }}
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            className="text-decoration-none"
            style={{ color: "#ffffff", fontSize: "1.2rem" }}
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </section>

      {/* Main Content */}
    <div>
      <div className="container-fluid py-5">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-4 col-md-12 mb-5" style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
            <h5
              style={{
                fontWeight: "bold",
                color: "#007bff",
              }}
            >
              CHEMISTRYHUB
            </h5>
            <hr />
            <p style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#495057" }}>
              Chemistry Hub adalah platform edukasi online yang menyediakan
              materi pembelajaran lengkap untuk siswa kelas 11 yang mempelajari
              kimia. Situs ini menawarkan catatan, video tutorial, dan latihan
              soal untuk membantu siswa memahami konsep kimia dengan lebih
              mudah.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-lg-4 col-md-6 mb-5" style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
            <h5
              style={{
                fontWeight: "bold",
                color: "#007bff",
              }}
            >
              QUICKLINKS
            </h5>
            <hr />
            <ul className="list-unstyled">
              {["Materi", "Quiz"].map((link, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="text-decoration-none"
                    style={{
                      color: "#6c757d",
                      fontSize: "0.9rem",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#007bff")}
                    onMouseLeave={(e) => (e.target.style.color = "#6c757d")}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours Section */}
          <div className="col-lg-4 col-md-6 mb-5" style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
            <h5
              style={{
                fontWeight: "bold",
                color: "#007bff",
              }}
            >
              OPENING HOURS   
            </h5>
            <hr />
            <table className="table table-borderless">
              <tbody style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#495057" }}>
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
    </div>

      {/* Footer Bottom */}
      <div
        className="text-center py-3"
        style={{
          backgroundColor: "#e9ecef",
          fontSize: "0.8rem",
          borderTop: "1px solid #dee2e6",
          color: "#495057",
        }}
      >
        © 2024 ChemistryHub. All rights reserved.{" "}
        <a
          href="https://example.com"
          className="text-decoration-none fw-bold"
          style={{
            color: "#007bff",
            fontWeight: "500",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.color = "#007bff")}
        >
          Visit us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
