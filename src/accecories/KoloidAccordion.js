import React, { useState } from "react";
import "../style/ac.css";

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h4>{title}</h4>
        <span className="accordion-icon">{isOpen ? "▼" : "▶"}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}

function KoloidAccordion() {
  return (
    <div className="accordion">
      <AccordionItem title="Apa itu koloid?">
      <p>Koloid adalah campuran di mana satu zat tersebar secara mikroskopis dalam zat lain. Partikel-partikel ini lebih besar dari molekul tetapi cukup kecil untuk tetap tersebar tanpa mengendap. Koloid ada di sekitar kita dalam kehidupan sehari-hari, mulai dari produk makanan seperti mayones hingga fenomena alam seperti kabut!</p>
      </AccordionItem>
      <AccordionItem title="Karakteristik Utama Koloid">
  <div>
    <img
      src="https://cdn-web.ruangguru.com/landing-pages/assets/hs/Imported%20sitepage%20images/941e2add-2d3c-4e7a-8bee-17de67cd6441.png" 
      alt="Karakteristik Koloid"
      style={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "10px" }}
    />
    <p>
      Koloid memiliki beberapa karakteristik unik, seperti Efek Tyndall, Gerakan Brown, dan Stabilitas yang memungkinkan partikel tetap tersebar dalam waktu lama tanpa mengendap.
    </p>
    <ul>
      <li><strong>Efek Tyndall:</strong> Penyebaran cahaya karena ukuran partikel dalam koloid.</li>
      <li><strong>Gerakan Brown:</strong> Gerakan acak partikel koloid.</li>
      <li><strong>Stabilitas:</strong> Koloid tetap stabil tanpa partikel yang mengendap.</li>
    </ul>
  </div>
</AccordionItem>
      <AccordionItem title="Section 3 title">
        <p>Content for Section 3</p>
      </AccordionItem>
    </div>
  );
}

export default KoloidAccordion;
