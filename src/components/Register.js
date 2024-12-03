import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css'

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
        <div className="register-container">
            {/* Left Panel - Registration Form */}
            <div className="register-left">
                <h2 className="text-white"style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '40px' }}>
                    REGISTER TO <strong>CHEMISTRY</strong>HUB
                </h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1rem' }}>
                        <input
                            type="email"
                            placeholder="Masukkan Email"
                            className="form-control"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <input
                            type="text"
                            placeholder="Masukkan Username"
                            className="form-control"
                            value={username}
                            onChange={handleUsernameChange}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <input
                            type="password"
                            placeholder="Masukkan Password"
                            className="form-control"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <input
                            type="password"
                            placeholder="Konfirmasi Password"
                            className="form-control"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-light">
                        REGISTER
                    </button>
                </form>
                <p style={{ textAlign: 'center', marginTop: '1rem' }}>
                    ALREADY HAVE AN ACCOUNT?{' '}
                    <Link className='Login' to="/login">
                        LOGIN HERE
                    </Link>
                </p>
                {message && <div className="message-box">{message}</div>}
            </div>

            {/* Right Panel - Information */}
            <div className="register-right">
                <div>
                <h1 style={{ fontSize: '50px', textAlign: 'center' }}>
                        Welcome to <strong>CHEMISTRY</strong>HUB!
                    </h1>
                    <p style={{ textAlign: 'center' }}>
                    tempat terbaik untuk memulai perjalanan belajar kimia dengan cara yang menyenangkan dan interaktif! Dilengkapi dengan berbagai alat pembelajaran digital, seperti buku teks online FlexText®, sumber daya autentik, portofolio siswa, dan banyak lagi, situs ini dirancang untuk membantu siswa memahami konsep-konsep kimia secara menyeluruh dan menarik.
                    </p>
                    <p style={{ textAlign: 'center' }}>
                    Bergabunglah dengan komunitas kami dan rasakan pengalaman belajar yang berbeda!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
