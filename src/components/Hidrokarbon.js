import React from "react";
import Quiz from "react-quiz-component";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hidrokarbon.css";
import Navbar from "./Navbar";

// Komponen CourseItem
const CourseItem = ({ title, description, videoSrc }) => (
 <div className="course-item mb-4">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="ratio ratio-16x9">
      <iframe
        src={videoSrc}
        title={`Video: ${title}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

// Komponen ImportantPoints
const ImportantPoints = ({ points }) => (
  <div className="important-points mt-5">
    <h3 className="mb-3">Poin Penting</h3>
    <ul className="list-group">
      {points.map((point, index) => (
        <li key={index} className="list-group-item">
          {point}
        </li>
      ))}
    </ul>
  </div>
);

// Komponen Table
const Table = ({ tableData }) => (
  <div className="table-container mt-5">
    <h3 className="mb-3">Golongan Hidrokarbon</h3>
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          {tableData.header.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Komponen ImageCard
const ImageCard = ({ imageSrc, title, description }) => (
  <div className="card mb-">
    <div className="row g-0">
      <div className="col-md-4">
        <img src={imageSrc} className="img-fluid rounded-start" alt={title} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

// Komponen Utama Courses
const Hidrokarbon = () => {
  const courseList = [
    {
      title: "Pengertian Hidrokarbon",
      description:
        "Hidrokarbon adalah senyawa yang terdiri dari unsur karbon (C) dan hidrogen (H). Hidrokarbon dapat dikelompokkan menjadi alifatik (alkana, alkena, alkuna) dan alisiklik (sikloalkana dan aromatik). Hidrokarbon ini banyak digunakan dalam kehidupan sehari-hari, seperti bahan bakar minyak, pelumas, dan bahan kimia industri.",
      videoSrc:
        "https://www.youtube.com/embed/videoseries?list=PLYd-4PUzs1NFYN3CVx8N1igOR70ua7a2W",
    },
  ];

  const additionalContent = {
    importantPoints: [
      "Hidrokarbon adalah senyawa organik sederhana yang hanya terdiri dari atom karbon dan hidrogen.",
      "Minyak bumi adalah campuran kompleks hidrokarbon yang diperoleh dari dalam bumi.",
      "Hidrokarbon alifatik memiliki rantai karbon terbuka, sedangkan alisiklik membentuk struktur cincin.",
      "Penggunaan hidrokarbon meliputi bahan bakar, pelumas, dan bahan baku kimia.",
    ],
    table: {
      header: ["Golongan Hidrokarbon", "Contoh Senyawa", "Kegunaan"],
      rows: [
        ["Alkana", "Metana (CH4), Propana (C3H8)", "Bahan bakar LPG"],
        ["Alkena", "Etena (C2H4)", "Bahan dasar plastik"],
        ["Alkuna", "Etena (C2H2)", "Bahan bakar las"],
        ["Aromatik", "Benzena (C6H6)", "Bahan kimia industri"],
      ],
    },
  };

  const quiz = {
    quizTitle: "Kuis Hidrokarbon",
    quizSynopsis: "Tes pengetahuanmu tentang hidrokarbon dan minyak bumi.",
    questions: [
      {
        question: "Apa yang dimaksud dengan hidrokarbon?",
        questionType: "text",
        answers: [
          "Senyawa yang mengandung karbon dan hidrogen",
          "Senyawa yang hanya mengandung karbon",
          "Senyawa yang hanya mengandung hidrogen",
        ],
        correctAnswer: "1",
        messageForCorrectAnswer:
          "Benar! Hidrokarbon terdiri dari karbon dan hidrogen.",
        messageForIncorrectAnswer:
          "Salah! Jawaban yang benar adalah: Senyawa yang mengandung karbon dan hidrogen.",
      },
      {
        question: "Hidrokarbon dengan rantai karbon terbuka disebut?",
        questionType: "text",
        answers: [
          "Hidrokarbon aromatik",
          "Hidrokarbon alifatik",
          "Hidrokarbon siklik",
        ],
        correctAnswer: "2",
        messageForCorrectAnswer:
          "Benar! Hidrokarbon alifatik memiliki rantai karbon terbuka.",
        messageForIncorrectAnswer:
          "Salah! Jawaban yang benar adalah: Hidrokarbon alifatik.",
      },
    ],
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
      <Navbar />
        <h2>Hidrokarbon dan Minyak Bumi</h2>
      </div>

      {courseList.map((course, index) => (
        <div key={index}>
          <CourseItem
            title={course.title}
            description={course.description}
            videoSrc={course.videoSrc}
          />
          <ImageCard
            imageSrc="https://petrotrainingasia.com/wp-content/uploads/2019/09/Menggali-Manfaat-Minyak-dan-Gas-Bumi-untuk-Energi-Kehidupan.jpg"
            title="Hidrokarbon dalam Kehidupan Sehari-hari"
            description="Hidrokarbon digunakan dalam berbagai aplikasi sehari-hari, seperti bahan bakar kendaraan, LPG untuk memasak, hingga bahan baku plastik."
          />
        </div>
      ))}

      <ImportantPoints points={additionalContent.importantPoints} />

      <Table tableData={additionalContent.table} />

      <div className="quiz-section mt-5">
        <h3>Kuis</h3>
        <Quiz quiz={quiz} />
      </div>
    </div>
  );
};

export default Hidrokarbon;
