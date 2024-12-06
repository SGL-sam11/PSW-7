import React, { useState } from "react";
import "./QuizPage.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const KuisHidrolisisGaram = () => {
    const navigate = useNavigate();

    const questions = [
        {
            question: "Apa yang dimaksud dengan hidrolisis garam?",
            options: [
                "A. Reaksi garam dengan basa",
                "B. Reaksi garam dengan air",
                "C. Reaksi garam dengan asam",
                "D. Reaksi garam dengan logam"
            ],
            correctAnswer: 1,
            explanation: "Hidrolisis garam adalah reaksi antara garam dengan air yang menghasilkan ion H+ atau OH-."
        },
        {
            question: "Garam dari asam lemah dan basa kuat akan menghasilkan larutan dengan sifat apa?",
            options: [
                "A. Asam",
                "B. Basa",
                "C. Netral",
                "D. Tidak bereaksi"
            ],
            correctAnswer: 1,
            explanation: "Garam dari asam lemah dan basa kuat menghasilkan larutan yang bersifat basa karena ion OH- lebih dominan."
        },
        {
            question: "Apa yang terjadi jika larutan NaCl dilarutkan dalam air?",
            options: [
                "A. Bersifat asam",
                "B. Bersifat basa",
                "C. Bersifat netral",
                "D. Tidak larut"
            ],
            correctAnswer: 2,
            explanation: "NaCl merupakan garam dari asam kuat (HCl) dan basa kuat (NaOH), sehingga larutannya bersifat netral."
        },
        {
            question: "Apa sifat larutan yang dihasilkan oleh NH4Cl?",
            options: [
                "A. Asam",
                "B. Basa",
                "C. Netral",
                "D. Tidak bereaksi"
            ],
            correctAnswer: 0,
            explanation: "NH4Cl merupakan garam dari asam lemah (NH4+) dan basa kuat (Cl-), sehingga larutannya bersifat asam."
        },
        {
            question: "Manakah di bawah ini yang merupakan contoh garam netral?",
            options: [
                "A. CH3COONa",
                "B. NaCl",
                "C. NH4Cl",
                "D. KCN"
            ],
            correctAnswer: 1,
            explanation: "NaCl adalah garam dari asam kuat (HCl) dan basa kuat (NaOH), sehingga larutannya netral."
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
                        <h1>Ujian: Hidrolisis Garam</h1>
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

export default KuisHidrolisisGaram ;
