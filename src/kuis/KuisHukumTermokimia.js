import React, { useState } from "react";
import "./QuizPage.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const KuisHukumTermokimia = () => {
    const navigate = useNavigate();

    const questions = [
        {
            question: "Apa yang dimaksud dengan hukum Hess dalam termokimia?",
            options: [
                "A. Energi dalam reaksi kimia tidak dapat diciptakan atau dimusnahkan.",
                "B. Perubahan entalpi total suatu reaksi hanya bergantung pada keadaan awal dan akhir.",
                "C. Panas yang dilepaskan selalu sama dengan energi yang diserap.",
                "D. Reaksi eksoterm lebih stabil dibandingkan reaksi endoterm."
            ],
            correctAnswer: 1,
            explanation: "Hukum Hess menyatakan bahwa perubahan entalpi total suatu reaksi hanya bergantung pada keadaan awal dan akhir, tidak tergantung pada jalannya reaksi."
        },
        {
            question: "Apa satuan yang biasanya digunakan untuk mengukur entalpi reaksi?",
            options: [
                "A. Joule (J)",
                "B. Kalori (cal)",
                "C. Kilojoule (kJ)",
                "D. Semua benar"
            ],
            correctAnswer: 3,
            explanation: "Entalpi reaksi dapat dinyatakan dalam satuan joule (J), kalori (cal), atau kilojoule (kJ), tergantung konteks pengukurannya."
        },
        {
            question: "Jika suatu reaksi menghasilkan energi 100 kJ, maka reaksi tersebut bersifat?",
            options: [
                "A. Eksoterm",
                "B. Endoterm",
                "C. Netral",
                "D. Spontan"
            ],
            correctAnswer: 0,
            explanation: "Reaksi eksoterm menghasilkan energi ke lingkungan, biasanya dalam bentuk panas."
        },
        {
            question: "Proses pembakaran bahan bakar merupakan reaksi yang?",
            options: [
                "A. Eksoterm",
                "B. Endoterm",
                "C. Isoterm",
                "D. Adiabatik"
            ],
            correctAnswer: 0,
            explanation: "Pembakaran bahan bakar adalah reaksi eksoterm karena melepaskan panas ke lingkungan."
        },
        {
            question: "Dalam eksperimen termokimia, alat yang digunakan untuk mengukur perubahan panas adalah?",
            options: [
                "A. Termometer",
                "B. Barometer",
                "C. Kalorimeter",
                "D. Spektrofotometer"
            ],
            correctAnswer: 2,
            explanation: "Kalorimeter digunakan untuk mengukur perubahan panas dalam eksperimen termokimia."
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
                        <h1>Ujian: Hukum Termokimia</h1>
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
                                 <h3 className="pembahasan mt-5">Pembahasan</h3>
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

            {/* Modal */}
            {quizCompleted && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Hasil Akhir</h2>
                        <p>Skor Anda: {score} / {questions.length}</p>
                        <p>{score >= 3 ? "Kerja bagus, pertahankan!" : "Jangan bersedih, belajarlah lagi."}</p>
                        <div className="result-actions">
                            <button onClick={handleRestartQuiz} className="btn-restart">Kerjakan Ulang</button>
                            <button onClick={handleExitQuiz} className="btn-exit">Keluar</button>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default KuisHukumTermokimia;
