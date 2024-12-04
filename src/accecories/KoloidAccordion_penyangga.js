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

function KoloidAccordion_penyangga() {
  return (
    <div className="accordion">
      <h6>1. 100 mL larutan CH,COOH 0,1 M (K, 10") dicampurkan dengan 200 mL larutan CH,COONa 0,5 M. Hitunglah pH campuran tersebut!</h6>
      <AccordionItem title="Pembahasan:">
  <div>
    <p>
    100 mL CH3COOH 0,1 M→→→ CH3COOH = 10 mmol.<br></br>
    200 mL CH3COONa 0,5 M →→→CH3COO = 100 mmol.<br></br>
    <br></br>
    Larutan penyangga: CH3COOH + CH3COONa<br></br>
    pH = - log (a/g.Ka) = - log (10/100 x 10 pangkat -5) = - log 10 pangkat -6 = 6. </p>
  </div>
</AccordionItem>
<h6>2. Dibuat suatu larutan penyangga dengan mencampurkan 50 mL larutan CH3COOH 0,1 M dengan 50 mL larutan Ca(CH3COO)2 0,1 M. Ke dalam campuran itu kita tambahkan 1 mL larutan NaOH 0,1 M. Hitunglah larutan penyangga sebelum ditambahkan larutan NaOH tersebut! Ka CH3COOH = 10 pangkat -5. </h6>
      <AccordionItem title="Pembahasan:">
  <div>
    <p>
    Larutan penyangga CH3COOH + Ca(CH3COO)2 = 50 mL CH3COOH 0,1 M → CH3COOH = 5 mmol.<br></br>
     50 mL Ca(CH3COO)2 0,1 M = 10 mmol.<br></br>
     <br></br>
    pH larutan sebelum penambahan NaOH : <br></br>
     pH = - log (a/g.Ka) = - log (5/10 x 10 pangkat -5) <br></br>
        = - log (5 x 10 pangkat -6) = 6 - log 5 = 5,30.
    </p> </div>
</AccordionItem>
<h6>3. Hitunglah pH dari 1 liter larutan yang mengandung 50 mmol CH3COOH dengan 5 mmol CH3COONa (Ka = 10 pangkat -5)! Jika ke dalam larutan itu kita tambah lagi 1 liter air, berapakah pH larutan itu sekarang?</h6>
      <AccordionItem title="Pembahasan:">
  <div>
    <p>
    Larutan penyangga: CH3COOH + CH3COONa CH3COOH = 50 mmol.<br></br>
    CH3COONa = 5 mmol CH,COO- = 5 mmol. <br></br>
Penambahan air ke dalam larutan penyangga tidak mempengaruhi jumlah mol asam lemah dan basa konjugasinya.<br></br>
pH = - log (a/g.Ka) = - log (50/5 x 10 pangkat -5) <br></br>
= - log 10 pangkat -4 = 4.
 </p> </div>
</AccordionItem>
    </div>
    
  );
}

export default KoloidAccordion_penyangga;
