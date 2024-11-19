import React from 'react';
import VideoPlayer from './Hidrokarbon_vid';
import './kesetimbangan.css';  

const KesetimbanganKimia = () => {
    const courseList = [
        { 
            title: 'Pengertian Kesetimbangan Kimia', 
            description: 'Kesetimbangan kimia adalah keadaan saat kedua reaktan dan produk hadir dalam konsentrasi yang tidak memiliki kecenderungan lebih lanjut untuk berubah seiring berjalannya waktu. Contoh: "Ketika sebuah timbangan dalam kondisi setimbang, maka jarum penunjuk timbangan dalam posisi lurus dan diam, artinya bagian kiri dan bagian kanan menunjukkan massa yang sama".', 
            videoSrc: 'https://youtu.be/DW7uLU474OE?si=z1oCG2PYS-rj6FV4',
            imageSrc: '/01.jpg'  
        },
    ];

    return (
        <div style={{ padding: '1em' }}>
            <div className="title">
                <h2>KESETIMBANGAN KIMIA</h2>
            </div>

            {courseList.map((course, index) => (
                <div key={index} style={{ marginBottom: '2em' }}>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <VideoPlayer src={course.videoSrc} title={`Video: ${course.title}`} />

                    <div className="centered-title">
                        <h4>Ciri-Ciri Kesetimbangan Kimia</h4>
                    </div>

                    <div className="centered-title">
                        <img 
                            src={course.imageSrc} 
                            alt="Ciri-Ciri Kesetimbangan Kimia" 
                            className="centered-image" 
                        />
                    </div>

                    <div className="centered-title">
                        <h4>Jenis-Jenis Kesetimbangan Kimia</h4>
                    </div>
                    <div className="jenis-kesetimbangan">
                        <div className="jenis-item">
                            <h5>a. Kesetimbangan Homogen</h5>
                            <p>
                                Kesetimbangan homogen adalah reaksi kesetimbangan kimia di mana zat-zat yang terlibat di dalamnya memiliki wujud yang sama.
                            </p>
                            <ul>
                                <li>Kesetimbangan antara larutan dengan larutan: 
                                    <em>[ Fe<sup>3+</sup> (aq) + SCN<sup>–</sup> (aq) ⇋ [Fe(SCN)]<sub>2+</sub> (aq) ]</em>
                                </li>
                                <li>Kesetimbangan antara gas dengan gas: 
                                    <em>[ N<sub>2</sub> (g) + O<sub>2</sub> (g) ⇋ 2NO (g) ]</em>
                                </li>
                            </ul>
                        </div>
                        <div className="jenis-item">
                            <h5>b. Kesetimbangan Heterogen</h5>
                            <p>
                                Kesetimbangan heterogen adalah reaksi kesetimbangan kimia di mana zat-zat yang terlibat di dalamnya memiliki wujud yang berbeda.
                            </p>
                            <ul>
                                <li>Kesetimbangan antara zat padat dengan gas: 
                                    <em>[ CaCO<sub>3</sub> (s) ⇋ CaO (s) + CO<sub>2</sub> (g) ]</em>
                                </li>
                                <li>Kesetimbangan antara gas dengan zat cair: 
                                    <em>[ CO<sub>2</sub> (g) + H<sub>2</sub> (g) ⇋ CO (g) + H<sub>2</sub>O (l) ]</em>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="centered-title">
                        <h4>Reaksi Kimia</h4>
                    </div>
                    <div className="reaksi-kimia">
                        <div className="reaksi-item">
                            <h5>a. Reaksi Irreversible</h5>
                            <p>
                                Reaksi searah atau irreversible yaitu reaksi yang berlangsung dari arah reaktan ke produk pada sebuah proses kimia. Produk yang telah bereaksi tidak dapat bereaksi kembali menjadi zat-zat asalnya.
                            </p>
                            <p><strong>Ciri-ciri:</strong></p>
                            <ul>
                                <li>Persamaan reaksi ditulis dengan satu anak panah produk/kanan (→);</li>
                                <li>Reaksi akan berhenti setelah salah satu atau semua reaktan habis;</li>
                                <li>Produk tidak dapat terurai menjadi zat-zat reaktan;</li>
                                <li>Reaksi berlangsung tuntas/berkesudahan.</li>
                            </ul>
                            <p><strong>Contoh:</strong> NaOH(aq) + HCl(aq) → NaCl(aq) + H<sub>2</sub>O(l)</p>
                        </div>

                        <div className="reaksi-item">
                            <h5>b. Reaksi Reversible</h5>
                            <p>
                                Reaksi dua arah atau reversible yaitu reaksi yang dapat berlangsung dari reaktan ke produk, dan juga sebaliknya, dari produk ke reaktan. Pada reaksi reversible zat-zat hasil reaksi dapat saling bereaksi kembali menjadi zat pereaksi.
                            </p>
                            <p><strong>Ciri-ciri:</strong></p>
                            <ul>
                                <li>Reaksi dua arah atau reversible yaitu reaksi yang dapat berlangsung dari reaktan ke produk, dan juga sebaliknya, dari produk ke reaktan;</li>
                                <li>Pada reaksi reversible zat-zat hasil reaksi dapat saling bereaksi kembali menjadi zat pereaksi.</li>
                            </ul>
                            <p><strong>Contoh:</strong> N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇄ 2NH<sub>3</sub>(g)</p>
                        </div>

                        <div className="reaksi-item">
                            <h5>Reaksi Kesetimbangan</h5>
                            <p><strong>a. Keseimbangan Statis:</strong> Terjadi ketika semua gaya yang bekerja pada objek bersifat seimbang, yaitu tidak ada gaya yang dihasilkan.</p>
                            <p><strong>b. Keseimbangan Dinamis:</strong> Diperoleh ketika semua gaya yang bekerja pada objek bersifat seimbang, tetapi objeknya sendiri bergerak.</p>
                        </div>
                    </div>

                    <div className="centered-title">
                        <img 
                            src="/02.jpg" 
                            alt="Reaksi Kimia"
                            className="centered-image"  
                        />
                    </div>

                    <div className="centered-title">
                        <h4>Tetapan Kesetimbangan Kimia</h4>
                    </div>
                    <div className="tetapan-kesetimbangan">
                        <p>
                            Tetapan kesetimbangan kimia adalah angka yang menunjukkan perbandingan secara kuantitatif antara produk dengan reaktan. Secara umum reaksi kesetimbangan dapat dituliskan sebagai berikut:
                        </p>
                        <p><em>aA + bB ⇌ cC + dD</em></p>
                        <p>
                            Saat di dalam reaksi kesetimbangan dilakukan aksi, maka kesetimbangan akan bergeser dan sekaligus mengubah komposisi zat-zat yang ada untuk kembali mencapai kesetimbangan.
                        </p>
                        <p>
                            Secara umum, dapat dikatakan tetapan kesetimbangan merupakan perbandingan hasil kali molaritas produk dengan hasil kali molaritas reaktan yang masing-masing dipangkatkan dengan koefisiennya.
                        </p>
                    </div>

                    <div className="centered-title">
                        <img 
                            src="/03.jpg"  
                            alt="Tetapan Kesetimbangan Kimia"
                            className="centered-image"  
                        />
                    </div>

                    <div className="centered-title">
                        <h4>Contoh Soal</h4>
                    </div>
                    <div className="centered-title">
                        <p>
                            Satu liter campuran gas pada suhu 100°C pada keadaan setimbang mengandung 0,0045 mol dinitrogen tetraoksida dan 0,03 mol nitrogen dioksida.
                        </p>
                        <p><strong>Tuliskan rumus tetapan kesetimbangan gas tersebut. Hitung tetapan kesetimbangannya.</strong></p>
                        <p><strong>Jawab:</strong></p>
                        <p><em>N<sub>2</sub>O<sub>4</sub>(g) ⇌ NO<sub>2</sub>(g)</em></p>
                        <p>Persamaan di atas harus disetarakan dulu menjadi:</p>
                        <p><em>N<sub>2</sub>O<sub>4</sub>(g) ⇌ 2NO<sub>2</sub>(g)</em></p>
                        <p><strong>a. Tetapan kesetimbangan:</strong> Tetapan kesetimbangan dituliskan sebagai perbandingan molaritas produk (NO<sub>2</sub>) dengan molaritas reaktan (N<sub>2</sub>O<sub>4</sub>) yang masing-masing dipangkatkan dengan koefisiennya, sehingga dapat dituliskan sebagai berikut:</p>
                        <p><em>K<sub>c</sub> = [NO<sub>2</sub>]<sup>2</sup> / [N<sub>2</sub>O<sub>4</sub>]</em></p>
                    </div>

                    <div className="centered-title">
                        <img 
                            src="/04.png"  
                            alt="Contoh Soal"
                            className="centered-image"  
                        />
                    </div>

                    <div className="centered-title">
                        <p>Jadi, tetapan kesetimbangan sebesar 0,2.</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default KesetimbanganKimia;
