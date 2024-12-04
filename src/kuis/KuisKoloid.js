import React, { useState } from "react";
import "./QuizPage.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const KuisKoloid = () => {
    const navigate = useNavigate();

    const questions = [
        {
            question: "Apa yang dimaksud dengan koloid?",
            options: [
                "A. Campuran homogen dari dua zat",
                "B. Campuran heterogen dengan partikel yang berukuran antara larutan dan suspensi",
                "C. Campuran heterogen dengan partikel besar yang mudah terlihat",
                "D. Campuran dua zat yang tidak dapat bercampur"
            ],
            correctAnswer: 1,
            explanation: "Koloid adalah campuran heterogen dengan partikel berukuran antara larutan dan suspensi, biasanya 1-100 nm."
        },
        {
            question: "Manakah dari berikut ini yang termasuk koloid?",
            options: [
                "A. Air garam",
                "B. Udara",
                "C. Susu",
                "D. Minyak mentah"
            ],
            correctAnswer: 2,
            explanation: "Susu adalah contoh koloid jenis emulsi karena terdiri dari lemak yang terdispersi dalam air."
        },
        {
            question: "Fenomena apa yang menunjukkan bahwa koloid dapat menyebarkan cahaya?",
            options: [
                "A. Efek Doppler",
                "B. Efek Tyndall",
                "C. Efek Compton",
                "D. Efek Fotoelektrik"
            ],
            correctAnswer: 1,
            explanation: "Efek Tyndall adalah fenomena di mana koloid menyebarkan cahaya yang melewatinya, membuat berkas cahaya terlihat."
        },
        {
            question: "Apa metode utama untuk memisahkan koloid?",
            options: [
                "A. Filtrasi",
                "B. Destilasi",
                "C. Dialisis",
                "D. Sublimasi"
            ],
            correctAnswer: 2,
            explanation: "Dialisis adalah metode untuk memisahkan partikel koloid dari ion-ion atau molekul kecil melalui membran semipermeabel."
        },
        {
            question: "Apa fungsi zat pengemulsi dalam koloid?",
            options: [
                "A. Mempercepat reaksi kimia",
                "B. Membantu mencampurkan dua zat yang tidak bercampur",
                "C. Mengendapkan partikel dalam koloid",
                "D. Menurunkan tekanan uap campuran"
            ],
            correctAnswer: 1,
            explanation: "Zat pengemulsi digunakan untuk membantu mencampurkan dua zat yang tidak bercampur, seperti minyak dan air."
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleAnswer = (selectedIndex) => {
        const isCorrect = selectedIndex === questions[currentQuestion].correctAnswer;
        if (isCorrect) setScore(score + 1);

        setUserAnswers([
            ...userAnswers,
            {
                selectedOption: selectedIndex,
                isCorrect: isCorrect,
            },
        ]);

        if (currentQuestion + 1 === questions.length) {
            setQuizCompleted(true);
        }
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleRestartQuiz = () => {
        setCurrentQuestion(0);
        setUserAnswers([]);
        setScore(0);
        setQuizCompleted(false);
    };

    const handleExitQuiz = () => {
        navigate("/Quiz"); // Arahkan ke halaman kuis atau halaman utama
    };

    const handleQuestionSelect = (index) => {
        setCurrentQuestion(index);
    };

    return (
        <div>
            <Navbar />
            <div className="quiz-container">
                <aside className="quiz-sidebar">
                    <h3>Daftar Soal</h3>
                    <div className="question-list">
                        {questions.map((_, index) => (
                            <button
                                key={index}
                                className={`question-card ${
                                    currentQuestion === index ? "active" : ""
                                } ${
                                    userAnswers[index]
                                        ? userAnswers[index].isCorrect
                                            ? "correct"
                                            : "incorrect"
                                        : ""
                                }`}
                                onClick={() => handleQuestionSelect(index)}
                            >
                                Soal {index + 1}
                            </button>
                        ))}
                    </div>
                </aside>

                <main className="quiz-main">
                    <header className="quiz-header">
                        <h1>Ujian: Koloid</h1>
                        <div className="quiz-progress">
                            Soal {currentQuestion + 1} dari {questions.length}
                        </div>
                    </header>

                    <div className="quiz-body">
                        <div className="question-box">
                            <h2>{questions[currentQuestion].question}</h2>
                            <div className="options">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <button
                                        key={index}
                                        className={`option ${
                                            userAnswers[currentQuestion]?.selectedOption === index
                                                ? userAnswers[currentQuestion]?.isCorrect
                                                    ? "correct"
                                                    : "incorrect"
                                                : ""
                                        }`}
                                        onClick={() => handleAnswer(index)}
                                        disabled={!!userAnswers[currentQuestion]}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {userAnswers[currentQuestion] && (
                            <div className="discussion-card">
                                <h3>Pembahasan</h3>
                                <p>{questions[currentQuestion].explanation}</p>
                                <p>
                                    Jawaban Anda:{" "}
                                    <span
                                        className={
                                            userAnswers[currentQuestion].isCorrect
                                                ? "answer-correct"
                                                : "answer-incorrect"
                                        }
                                    >
                                        {
                                            questions[currentQuestion].options[
                                                userAnswers[currentQuestion].selectedOption
                                            ]
                                        }
                                    </span>
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="quiz-navigation">
                        <button
                            onClick={handlePrevious}
                            className="btn-nav"
                            disabled={currentQuestion === 0}
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNext}
                            className="btn-nav"
                            disabled={currentQuestion === questions.length - 1}
                        >
                            Next
                        </button>
                    </div>

                    {quizCompleted && (
                        <div className="quiz-result">
                            <h2>Hasil Akhir</h2>
                            <p>Skor Anda: {score} / {questions.length}</p>
                            <p>{score >= 3 ? "Kerja bagus, pertahankan!" : "Jangan bersedih, belajarlah lagi."}</p>
                            <div className="result-actions">
                                <button onClick={handleRestartQuiz} className="btn-restart">Kerjakan Ulang</button>
                                <button onClick={handleExitQuiz} className="btn-exit">Keluar</button>
                            </div>
                        </div>
                    )}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default KuisKoloid;