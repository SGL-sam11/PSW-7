import React, { useState } from "react";
import "./QuizPage.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const KuisLarutanPenyangga = () => {
    const navigate = useNavigate();

    const questions = [
        {
            question: "Apa yang dimaksud dengan larutan penyangga?",
            options: [
                "A. Larutan yang pH-nya berubah drastis saat ditambah air",
                "B. Larutan yang dapat mempertahankan pH meskipun ditambahkan asam atau basa",
                "C. Larutan yang dapat mempercepat reaksi kimia",
                "D. Larutan yang hanya mengandung air dan garam"
            ],
            correctAnswer: 1,
            explanation: "Larutan penyangga dapat mempertahankan pH-nya meskipun ditambahkan sedikit asam atau basa."
        },
        {
            question: "Komponen utama larutan penyangga adalah?",
            options: [
                "A. Air dan garam",
                "B. Asam lemah dan basa kuat",
                "C. Asam lemah dan garamnya, atau basa lemah dan garamnya",
                "D. Asam kuat dan basa kuat"
            ],
            correctAnswer: 2,
            explanation: "Larutan penyangga terdiri dari asam lemah dan garamnya, atau basa lemah dan garamnya."
        },
        {
            question: "pH larutan penyangga asam dapat dihitung menggunakan rumus?",
            options: [
                "A. pH = -log[H+]",
                "B. pH = pKa + log([garam]/[asam])",
                "C. pH = pKa - log([garam]/[asam])",
                "D. pH = -log[OH-]"
            ],
            correctAnswer: 1,
            explanation: "pH larutan penyangga asam dihitung dengan rumus pH = pKa + log([garam]/[asam])."
        },
        {
            question: "Larutan yang termasuk larutan penyangga basa adalah?",
            options: [
                "A. HCl dan NaCl",
                "B. CH3COOH dan CH3COONa",
                "C. NH3 dan NH4Cl",
                "D. HNO3 dan NaNO3"
            ],
            correctAnswer: 2,
            explanation: "NH3 dan NH4Cl merupakan larutan penyangga basa karena terdiri dari basa lemah dan garamnya."
        },
        {
            question: "Apa fungsi larutan penyangga dalam tubuh manusia?",
            options: [
                "A. Meningkatkan kecepatan reaksi metabolisme",
                "B. Menjaga kestabilan pH darah",
                "C. Menguraikan zat-zat makanan",
                "D. Menghancurkan racun dalam tubuh"
            ],
            correctAnswer: 1,
            explanation: "Larutan penyangga menjaga kestabilan pH darah agar tetap sekitar 7,4."
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
                        <h1>Ujian: Larutan Penyangga</h1>
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

export default KuisLarutanPenyangga;
