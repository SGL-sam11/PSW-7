import React, { useState } from "react";
import "./QuizPage.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const KuisKesetimbanganKimia = () => {
    const navigate = useNavigate();

    const questions = [
        {
            question: "Apa yang dimaksud dengan kesetimbangan kimia?",
            options: [
                "A. Keadaan di mana semua reaktan telah habis bereaksi",
                "B. Keadaan di mana kecepatan reaksi maju sama dengan kecepatan reaksi balik",
                "C. Keadaan di mana reaksi berhenti sepenuhnya",
                "D. Keadaan di mana hanya reaktan yang tersisa"
            ],
            correctAnswer: 1,
            explanation: "Kesetimbangan kimia adalah keadaan di mana kecepatan reaksi maju sama dengan kecepatan reaksi balik, sehingga konsentrasi reaktan dan produk tetap konstan."
        },
        {
            question: "Apa pengaruh kenaikan tekanan pada reaksi kesetimbangan gas?",
            options: [
                "A. Reaksi bergeser ke arah jumlah mol gas yang lebih besar",
                "B. Reaksi bergeser ke arah jumlah mol gas yang lebih kecil",
                "C. Tidak ada pengaruh",
                "D. Bergantung pada suhu reaksi"
            ],
            correctAnswer: 1,
            explanation: "Kenaikan tekanan menyebabkan reaksi bergeser ke arah yang memiliki jumlah mol gas lebih kecil untuk mengurangi tekanan."
        },
        {
            question: "Apa yang dimaksud dengan prinsip Le Chatelier?",
            options: [
                "A. Sistem dalam kesetimbangan akan tetap diam jika diberikan gangguan",
                "B. Sistem dalam kesetimbangan akan merespon gangguan dengan cara meminimalkan gangguan tersebut",
                "C. Sistem dalam kesetimbangan akan meningkatkan gangguan",
                "D. Sistem akan berhenti bereaksi jika ada gangguan"
            ],
            correctAnswer: 1,
            explanation: "Prinsip Le Chatelier menyatakan bahwa jika kesetimbangan terganggu, sistem akan menyesuaikan diri untuk meminimalkan gangguan tersebut."
        },
        {
            question: "Bagaimana pengaruh penambahan reaktan pada kesetimbangan?",
            options: [
                "A. Reaksi bergeser ke arah pembentukan produk",
                "B. Reaksi bergeser ke arah pembentukan reaktan",
                "C. Tidak ada perubahan",
                "D. Reaksi berhenti sepenuhnya"
            ],
            correctAnswer: 0,
            explanation: "Penambahan reaktan menyebabkan reaksi bergeser ke arah produk untuk mengurangi konsentrasi reaktan tambahan."
        },
        {
            question: "Apa yang terjadi jika suhu dinaikkan pada reaksi eksoterm?",
            options: [
                "A. Reaksi bergeser ke arah pembentukan produk",
                "B. Reaksi bergeser ke arah pembentukan reaktan",
                "C. Tidak ada perubahan",
                "D. Reaksi berhenti sepenuhnya"
            ],
            correctAnswer: 1,
            explanation: "Pada reaksi eksoterm, kenaikan suhu menyebabkan reaksi bergeser ke arah reaktan untuk menyerap sebagian energi panas yang diberikan."
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
                        <h1>Ujian: Kesetimbangan Kimia</h1>
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

export default KuisKesetimbanganKimia;
