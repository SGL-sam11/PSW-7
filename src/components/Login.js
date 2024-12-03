import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        setMessage('SELAMAT!!! LOGIN ANDA BERHASIL !!!, SILAHKAN LOGIN');
        setUsername(''); // Clear username field
        setPassword(''); // Clear password field
        navigate('/Home'); // Navigate to Home page
    };

    return (
        <div className="login-container d-flex">                                                                                        
            {/* Left Panel */}
            <div className="login-left text-white p-5 d-flex flex-column justify-content-center" style={{ width: '40%', backgroundColor: ' #40668C' }}>
                <div>
                <h1 style={{ fontSize: '50px', textAlign: 'center' }}>
                        Welcome to <strong>CHEMISTRY</strong>HUB!
                    </h1>
                    <p>tempat terbaik untuk memulai perjalanan belajar kimia dengan cara yang menyenangkan dan interaktif! Dilengkapi dengan berbagai alat pembelajaran digital, seperti buku teks online FlexText®, sumber daya autentik, portofolio siswa, dan banyak lagi, situs ini dirancang untuk membantu siswa memahami konsep-konsep kimia secara menyeluruh dan menarik.</p>
                    <p>Bergabunglah dengan komunitas kami dan rasakan pengalaman belajar yang berbeda!</p>
                </div>
            </div>

            {/* Right Panel */}
            <div className="login-right p-5 d-flex justify-content-center align-items-center" style={{ width: '60%' }}>
                <form className="login-form w-100" onSubmit={handleSubmit}>
                    <h2 className="text-center text-white mb-4" style={{fontSize:'40px'}}>Log in to <strong>CHEMISTRY</strong>HUB</h2>
                    <div className="form-group mb-3">
                        <label htmlFor='username' className='form-label text-white'></label>
                        <input
                            type="text"
                            id="username"
                            placeholder='Masukkan Username'
                            className='form-control'
                            value={username}
                            onChange={handleUsernameChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">   
                        <label htmlFor='password' className='form-label text-white'></label>
                        <input                         
                            type="password"
                            id="password"
                            placeholder='Masukkan Password'
                            className='form-control'
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div className="form-group mb-3 text-end">
                        <a href="#" className="text-success">Forgot your password?</a>
                    </div>
                    <button type="submit" className="btn w-100 text-white" style={{backgroundColor:'#436B95'}}>LOG IN</button>
                    <div className="text-center mt-4">
                        <p className='cont'>Don't have an account? <Link to="/Registration" className="text-white">REGISTER</Link></p>
                        {message && <div className='alert alert-success mt-3 mb-0'>{message}</div>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
