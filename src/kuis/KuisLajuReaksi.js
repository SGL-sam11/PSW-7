import React, { useState } from "react";
import "./QuizPage.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const KuisLajuReaksi = () => {
    const navigate = useNavigate();

    const questions = [
        {
            question: "Apa faktor yang dapat mempengaruhi laju reaksi?",
            options: [
                "A. Konsentrasi, suhu, dan katalis",
                "B. Volume, tekanan, dan suhu",
                "C. Waktu, suhu, dan warna",
                "D. Berat molekul, tekanan, dan waktu"
            ],
            correctAnswer: 0,
            explanation: "Faktor utama yang mempengaruhi laju reaksi adalah konsentrasi, suhu, dan keberadaan katalis."
        },
        {
            question: "Bagaimana cara katalis mempercepat laju reaksi?",
            options: [
                "A. Dengan meningkatkan suhu reaksi",
                "B. Dengan menurunkan energi aktivasi reaksi",
                "C. Dengan meningkatkan konsentrasi reaktan",
                "D. Dengan menambah energi ke dalam sistem"
            ],
            correctAnswer: 1,
            explanation: "Katalis mempercepat reaksi dengan menurunkan energi aktivasi, sehingga reaksi lebih mudah terjadi."
        },
        {
            question: "Apa yang terjadi pada laju reaksi jika suhu dinaikkan?",
            options: [
                "A. Laju reaksi meningkat",
                "B. Laju reaksi menurun",
                "C. Tidak ada perubahan",
                "D. Reaksi berhenti"
            ],
            correctAnswer: 0,
            explanation: "Peningkatan suhu menyebabkan partikel bergerak lebih cepat, sehingga peluang tumbukan efektif meningkat."
        },
        {
            question: "Dalam grafik energi vs lintasan reaksi, apa peran puncak kurva?",
            options: [
                "A. Energi potensial awal",
                "B. Energi aktivasi",
                "C. Energi kinetik maksimum",
                "D. Energi produk reaksi"
            ],
            correctAnswer: 1,
            explanation: "Puncak kurva menunjukkan energi aktivasi, yaitu energi minimum yang diperlukan agar reaksi berlangsung."
        },
        {
            question: "Apa pengaruh luas permukaan pada laju reaksi?",
            options: [
                "A. Semakin kecil luas permukaan, semakin cepat reaksi",
                "B. Semakin besar luas permukaan, semakin cepat reaksi",
                "C. Tidak ada pengaruh",
                "D. Hanya memengaruhi reaksi endoterm"
            ],
            correctAnswer: 1,
            explanation: "Luas permukaan yang lebih besar meningkatkan peluang tumbukan antar partikel, sehingga mempercepat laju reaksi."
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
                        <h1>Ujian: Laju Reaksi</h1>
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

export default KuisLajuReaksi;
