import React, { useState } from 'react';  
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';

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
        <div className="register-container d-flex">                                                                                        
            {/* Left Panel - Registration Form */}
            <div className="register-left bg-light text-black p-5 d-flex flex-column justify-content-center" style={{ width: '30%' }}>
                <div>
                    <h2 className='text-center text-black mb-4' style={{ fontFamily: 'monospace', fontSize: '40px' }}>REGISTRASI</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="email"
                                placeholder='Masukkan Email'
                                className='form-control'
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                placeholder='Masukkan Username'
                                className='form-control'
                                value={username}
                                onChange={handleUsernameChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                placeholder='Masukkan Password'
                                className='form-control'
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                placeholder='Konfirmasi Password'
                                className='form-control'
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                required
                            />
                        </div>
                        <button type="submit" className='btn btn-light w-100'>REGISTER</button>
                    </form>
                    <p className="text-center mt-3">
                        ALREADY HAVE AN ACCOUNT? <Link to="/login" className="text-black">LOGIN HERE</Link>
                    </p>
                    {message && <div className='alert alert-success mt-3'>{message}</div>}
                </div>
            </div>

            {/* Right Panel - Information */}
            <div className="register-right p-5 d-flex justify-content-center align-items-center" style={{ width: '70%' }}>
                <div>
                    <h1 style={{ fontSize: '50px' }}>Welcome to ChemistryHub!</h1>
                    <p>Learning Site® is your home for Explorer® classes, containing digital learning tools like FlexText® online textbooks, authentic resources, student portfolios, and more.</p>
                    <p>Join our community and start your journey to learn chemistry in a fun and interactive way!</p>
                </div>
            </div>
        </div>
    );
}

export default Register;
