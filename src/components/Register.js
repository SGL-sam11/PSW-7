import React, { useState } from 'react';  
import { useNavigate, Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const Register = () => 
{
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
        navigate('/Login');
    };

    return (
    <div className='container-fluid d-flex justify-content-center align-items-center vh-100 bg-light'>
        <Row className="justify-content-center w-100">
        <Col md={6} lg={4} className=" p-4 rounded shadow" style={{ backgroundColor: '#000080', borderColor: '#8560c0' }}>
        <div className='container mt-4'>
            <h2 className='container text-white bg-primary rounded p-3 mt-1 text-center'>REGISTRASI !</h2>
            <form onSubmit={handleSubmit} className='mt-3'>
                <div className="mb-3">
                    <label htmlFor='email' className='form-label text-white'>Email :</label>
                    <input
                        type="email"
                        id="email"
                        className='form-control'
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor='username' className='form-label text-white'>Username :</label>
                    <input
                        type="text"
                        id="username"
                        className='form-control'
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor='password' className='form-label text-white'>Password :</label>
                    <input
                        type="password"
                        id="password"
                        className='form-control'
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor='confirmPassword' className='form-label text-white'>Confirm Password :</label>
                    <input
                    type="password"
                    id="confirmPassword"
                    className='form-control'
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                    />
                </div>
                <button type="submit" className='btn btn-primary mt-3 w-100 '> Register </button>
            </form>
            <p className="text-center mt-3 text-white">
             ALREADY HAVE AN ACCOUNT? <Link to="/Login">LOGIN HERE</Link> </p>
            {message && <div className='alert alert-success mt-3 mb-0'>{message}</div>}
        </div>
        </Col>
        </Row>
    </div>

    );
}

export default Register;