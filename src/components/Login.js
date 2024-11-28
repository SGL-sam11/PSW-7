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
            <div className="login-left text-white p-5 d-flex flex-column justify-content-center" style={{ width: '30%', backgroundColor: '#122D4F' }}>
                <div>
                    <a className='mb-1 brand-text' style={{ fontSize: '55px' }}><strong>CHEMISTRY</strong>HUB</a>
                    <h1 style={{ fontSize: '50px' }}>Welcome!</h1>
                    <p>Learning Site® is your home for Explorer® classes, containing digital learning tools like FlexText® online textbooks, authentic resources, student portfolios, and more.</p>
                    <p>Bring students together in an online learning community and discover all the features to enrich your language courses.</p>
                </div>
            </div>

            {/* Right Panel */}
            <div className="login-right p-5 d-flex justify-content-center align-items-center" style={{ width: '70%' }}>
                <form className="login-form w-100" onSubmit={handleSubmit}>
                    <h2 className="text-center mb-4" style={{fontSize:'40px'}}>Log in to Learning Site®</h2>
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
                    <button type="submit" className="btn w-100 text-white" style={{backgroundColor:'#122D4F'}}>LOG IN</button>
                    <div className="text-center mt-4">
                        <p>Don't have an account? <Link to="/Register" className="text-success">REGISTER</Link></p>
                        {message && <div className='alert alert-success mt-3 mb-0'>{message}</div>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;


// import React, { useState } from 'react';  
// import { useNavigate, Link } from 'react-router-dom';
// import { Row, Col } from 'react-bootstrap';

// const Login = () => 
// {
//     const [email, setEmail] = useState('');
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const navigate = useNavigate();

//     const handleEmailChange = (e) => setEmail(e.target.value);
//     const handleUsernameChange = (e) => setUsername(e.target.value);
//     const handlePasswordChange = (e) => setPassword(e.target.value);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setMessage('SELAMAT!!! LOGIN ANDA BERHASIL !!!, SILAHKAN LOGIN');
//         setUsername('');
//         setPassword('');
//         navigate('/home');
//     };

//     return (
//     <div className='container-fluid d-flex justify-content-center align-items-center vh-100 ' style={{ backgroundColor: '#40668C' }}>
//         <Row className="justify-content-center w-100">
//         <Col md={6} lg={4} className=" p-2 rounded shadow" style={{ backgroundColor: '#6CA9AF', borderColor: '#8560c0' }}>
//         <div className='container mt-4'>
//             <h2 className='container text-white rounded p-3 mt-1 text-center' style={{backgroundColor:'#122D4F'}}>LOGIN !</h2>
//             <form onSubmit={handleSubmit} className='mt-1'>
//                 <div className="mb-1">
//                     <label htmlFor='username' className='form-label text-white'></label>
//                     <input
//                         type="text"
//                         id="username"
//                         placeholder='Masukkan Username'
//                         className='form-control'
//                         value={username}
//                         onChange={handleUsernameChange}
//                         required
//                     />
//                 </div>
//                 <div className="mb-1">
//                     <label htmlFor='password' className='form-label text-white'></label>
//                     <input
//                         type="password"
//                         id="password"
//                         placeholder='Masukkan Password'
//                         className='form-control'
//                         value={password}
//                         onChange={handlePasswordChange}
//                         required
//                     />
//                 </div>
//                 <button type="submit" className='btn mt-3 w-100 text-white' style={{backgroundColor:'#122D4F'}}>LOGIN</button>
//             </form>
//             <p className="text-center mt-3 text-white">
//              DON'T HAVE AN ACCOUNT? <Link to="/register">REGISTER HERE</Link> </p>
//             {message && <div className='alert alert-success mt-3 mb-0'>{message}</div>}
//         </div>
//         </Col>
//         </Row>
//     </div>

//     );
// }

// export default Login;
