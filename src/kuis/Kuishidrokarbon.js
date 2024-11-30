import React, { useState } from "react";
import "./QuizPage.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Kuishidrokarbon = () => {
    const navigate = useNavigate();

    const questions = [
        {
            question: "Apa jenis hidrokarbon yang hanya memiliki ikatan tunggal antar atom karbon?",
            options: ["A. Alkana", "B. Alkena", "C. Alkuna", "D. Aren"],
            correctAnswer: 0,
            explanation: "Alkana hanya memiliki ikatan tunggal antar atom karbon.",
        },
        {
            question: "Minyak bumi terutama terdiri dari senyawa apa?",
            options: ["A. Karbohidrat", "B. Hidrokarbon", "C. Asam amino", "D. Protein"],
            correctAnswer: 1,
            explanation: "Minyak bumi sebagian besar terdiri dari hidrokarbon.",
        },
        {
            question: "Apa nama proses yang digunakan untuk memisahkan komponen minyak bumi?",
            options: ["A. Destilasi fraksional", "B. Fermentasi", "C. Hidrolisis", "D. Polimerisasi"],
            correctAnswer: 0,
            explanation: "Destilasi fraksional memisahkan komponen minyak bumi berdasarkan titik didih.",
        },
        {
            question: "Apa produk utama dari pembakaran sempurna hidrokarbon?",
            options: ["A. Karbon monoksida dan air", "B. Karbon dioksida dan air", "C. Hidrogen dan karbon", "D. Metana dan oksigen"],
            correctAnswer: 1,
            explanation: "Pembakaran sempurna menghasilkan karbon dioksida dan air.",
        },
        {
            question: "Apa jenis reaksi yang terjadi pada pembakaran hidrokarbon?",
            options: ["A. Reduksi", "B. Eksoterm", "C. Endoterm", "D. Netralisasi"],
            correctAnswer: 1,
            explanation: "Reaksi pembakaran hidrokarbon bersifat eksoterm karena menghasilkan energi panas.",
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

    const handleQuestionSelect = (index) => {
        setCurrentQuestion(index);
    };

    return (
    <div>
        <Navbar/>
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
                    <h1>Ujian: Hidrokarbon</h1>
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
                        <button onClick={handleRestartQuiz} className="btn-restart">Kerjakan Ulang</button>
                    </div>
                )}
            </main>
        </div>
        <Footer/>
    </div>
    );
};

export default Kuishidrokarbon;
