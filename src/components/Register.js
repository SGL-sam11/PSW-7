import React, { useState } from 'react';  
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('SELAMAT!!! REGISTRASI ANDA BERHASIL !!!, SILAHKAN LOGIN');
        setEmail('');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        navigate('/login');
    };

    return (
        <div
            style={{
                display: 'flex',
                height: '100vh',
                backgroundColor: '#00693E', // Dartmouth green background
                color: '#FFFFFF', // White text
            }}
        >
            {/* Left Panel - Registration Form */}
            <div
                style={{
                    width: '70%',
                    backgroundColor: '#004B2D', // Darker Dartmouth green for form
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <h2
                    style={{
                        textAlign: 'center',
                        marginBottom: '1rem',
                        fontSize: '40px',
                    }}
                >
                    REGISTRASI
                </h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1rem' }}>
                        <input
                            type="email"
                            placeholder="Masukkan Email"
                            style={{
                                width: '50%',
                                padding: '0.5rem',
                                borderRadius: '5px',
                                border: '1px solid #CCCCCC',
                            }}
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <input
                            type="text"
                            placeholder="Masukkan Username"
                            style={{
                                width: '50%',
                                padding: '0.5rem',
                                borderRadius: '5px',
                                border: '1px solid #CCCCCC',
                            }}
                            value={username}
                            onChange={handleUsernameChange}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <input
                            type="password"
                            placeholder="Masukkan Password"
                            style={{
                                width: '50%',
                                padding: '0.5rem',
                                borderRadius: '5px',
                                border: '1px solid #CCCCCC',
                            }}
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <input
                            type="password"
                            placeholder="Konfirmasi Password"
                            style={{
                                width: '50%',
                                padding: '0.5rem',
                                borderRadius: '5px',
                                border: '1px solid #CCCCCC',
                            }}
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: '50%',
                            padding: '0.7rem',
                            border: 'none',
                            borderRadius: '5px',
                            backgroundColor: '#00693E', // Dartmouth green for button
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                        }}
                    >
                        REGISTER
                    </button>
                </form>
                <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                    ALREADY HAVE AN ACCOUNT?{' '}
                    <Link
                        to="/login"
                        style={{
                            color: '#FFD700', // Gold link
                            textDecoration: 'none',
                            fontWeight: 'bold',
                        }}
                    >
                        LOGIN HERE
                    </Link>
                </p>
                {message && (
                    <div
                        style={{
                            marginTop: '1rem',
                            padding: '1rem',
                            borderRadius: '5px',
                            backgroundColor: '#004B2D', // Darker Dartmouth green
                            color: '#FFFFFF',
                            textAlign: 'center',
                        }}
                    >
                        {message}
                    </div>
                )}
            </div>

            {/* Right Panel - Information */}
            <div
                style={{
                    width: '30%',
                    padding: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#00693E',
                }}
            >
                <div>
                    <h1 style={{ fontSize: '50px', textAlign: 'center' }}>
                        Welcome to ChemistryHub!
                    </h1>
                    <p style={{ textAlign: 'center' }}>
                        Learning Site® is your home for Explorer® classes,
                        containing digital learning tools like FlexText® online
                        textbooks, authentic resources, student portfolios, and
                        more.
                    </p>
                    <p style={{ textAlign: 'center' }}>
                        Join our community and start your journey to learn
                        chemistry in a fun and interactive way!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
