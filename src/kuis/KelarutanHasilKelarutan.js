import React, { useState } from "react";
import "./QuizPage.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const KuisKelarutanHasilKelarutan = () => {
    const navigate = useNavigate();

    const questions = [
        {
            question: "Apa yang dimaksud dengan kelarutan (solubility)?",
            options: [
                "A. Jumlah maksimum zat yang dapat larut dalam pelarut pada kondisi tertentu",
                "B. Jumlah zat yang tidak larut dalam pelarut",
                "C. Kecepatan zat larut dalam air",
                "D. Kemampuan zat untuk bereaksi dengan pelarut"
            ],
            correctAnswer: 0,
            explanation: "Kelarutan adalah jumlah maksimum zat yang dapat larut dalam pelarut tertentu pada suhu dan tekanan tertentu."
        },
        {
            question: "Apa yang dimaksud dengan hasil kali kelarutan (Ksp)?",
            options: [
                "A. Hasil kali konsentrasi ion-ion dalam larutan jenuh, masing-masing dipangkatkan dengan koefisiennya",
                "B. Hasil kali konsentrasi ion-ion dalam larutan tak jenuh",
                "C. Hasil kali massa zat yang larut dan tidak larut",
                "D. Hasil kali ion-ion dalam larutan yang tidak larut"
            ],
            correctAnswer: 0,
            explanation: "Ksp adalah hasil kali konsentrasi ion-ion dalam larutan jenuh, dipangkatkan dengan koefisien reaksi ionisasi."
        },
        {
            question: "Jika Ksp suatu senyawa lebih besar, maka kelarutannya akan?",
            options: [
                "A. Menjadi lebih kecil",
                "B. Tidak berubah",
                "C. Menjadi lebih besar",
                "D. Tidak ada hubungan dengan kelarutan"
            ],
            correctAnswer: 2,
            explanation: "Semakin besar nilai Ksp, semakin besar kelarutan senyawa tersebut."
        },
        {
            question: "Apa yang terjadi jika ion-ion sejenis ditambahkan ke dalam larutan jenuh?",
            options: [
                "A. Kelarutan bertambah",
                "B. Kelarutan berkurang",
                "C. Kelarutan tetap sama",
                "D. Konsentrasi ion-ion lain bertambah"
            ],
            correctAnswer: 1,
            explanation: "Penambahan ion sejenis menyebabkan kelarutan berkurang, dikenal sebagai efek ion sejenis."
        },
        {
            question: "Bagaimana pengaruh pH terhadap kelarutan senyawa yang mengandung ion basa lemah?",
            options: [
                "A. Kelarutan tidak terpengaruh oleh pH",
                "B. Kelarutan bertambah pada pH tinggi",
                "C. Kelarutan bertambah pada pH rendah",
                "D. Kelarutan berkurang pada pH rendah"
            ],
            correctAnswer: 2,
            explanation: "Kelarutan senyawa dengan ion basa lemah bertambah pada pH rendah karena ion H+ bereaksi dengan ion basa lemah, mengurangi konsentrasi ion dalam larutan."
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
                        <h1>Ujian: Kelarutan dan Hasil Kelarutan</h1>
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

export default KuisKelarutanHasilKelarutan;
