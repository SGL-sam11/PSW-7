import React, { useState } from "react";
import "./QuizPage.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const KuisLarutanAsambasa = () => {
    const navigate = useNavigate();

    const questions = [
        {
            question: "Apa yang dimaksud dengan larutan asam menurut teori Arrhenius?",
            options: [
                "A. Larutan yang dapat melepaskan ion H+",
                "B. Larutan yang dapat melepaskan ion OH-",
                "C. Larutan yang dapat menyerap ion H+",
                "D. Larutan yang dapat menyerap ion OH-"
            ],
            correctAnswer: 0,
            explanation: "Menurut teori Arrhenius, larutan asam adalah larutan yang dapat melepaskan ion H+ saat dilarutkan dalam air."
        },
        {
            question: "Apa yang dimaksud dengan larutan basa menurut teori Bronsted-Lowry?",
            options: [
                "A. Zat yang dapat menerima proton",
                "B. Zat yang dapat melepaskan proton",
                "C. Zat yang dapat melepaskan ion OH-",
                "D. Zat yang dapat menyerap ion OH-"
            ],
            correctAnswer: 0,
            explanation: "Menurut teori Bronsted-Lowry, larutan basa adalah zat yang dapat menerima proton (H+)."
        },
        {
            question: "pH suatu larutan adalah 3. Bagaimana sifat larutan tersebut?",
            options: [
                "A. Asam kuat",
                "B. Asam lemah",
                "C. Basa kuat",
                "D. Netral"
            ],
            correctAnswer: 1,
            explanation: "Larutan dengan pH 3 tergolong sebagai asam lemah karena pH-nya berada di bawah 7, tetapi tidak sangat rendah."
        },
        {
            question: "Apa pH dari larutan netral pada suhu 25°C?",
            options: [
                "A. 0",
                "B. 7",
                "C. 14",
                "D. 10"
            ],
            correctAnswer: 1,
            explanation: "Pada suhu 25°C, pH larutan netral adalah 7 karena konsentrasi ion H+ dan OH- sama, yaitu 10⁻⁷ M."
        },
        {
            question: "Apa pengaruh penambahan asam pada larutan basa?",
            options: [
                "A. Meningkatkan pH larutan",
                "B. Menurunkan pH larutan",
                "C. Tidak ada perubahan pada pH",
                "D. Meningkatkan konsentrasi ion OH-"
            ],
            correctAnswer: 1,
            explanation: "Penambahan asam pada larutan basa akan menurunkan pH karena ion H+ dari asam akan menetralkan ion OH- dari basa."
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
                        <h1>Ujian: Larutan Asam Basa</h1>
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

export default KuisLarutanAsambasa;
