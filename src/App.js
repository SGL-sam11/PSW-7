import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Awalan from './components/Awalan';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Hidrokarbon from './components/Hidrokarbon';
import Koloid from './components/koloid';
import Penyangga from './components/Penyangga';
// import Quiz from './components/Quiz';
// import Hidrokarbon from './components/Hidrokarbon';
// import termokimia from './components/termokimia';
// import reaksi from './components/reaksi';
// import asambasa from './components/asambasa';
// import hidrolosis from './components/hidrolosis'; 
// import kelarutan from './components/kelarutan';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Awalan' element={<Awalan />} />
        <Route path="/Koloid" element={<Koloid />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/penyangga" element={<Penyangga />} />
        {/* <Route path="/kesetimbangan" element={<Kesetimbangan />} /> */}
        <Route path="/" element={<Navigate to="/Awalan" />} />
        <Route path="/hidrokarbon" element={<Hidrokarbon />} />
        {/* <Route path="/Quiz" element={<Quiz />} /> */}
        {/* <Route path="/hidrokarbon" element={<Hidrokarbon />} />
        <Route path="/termokimia" element={<termokimia />} />
        <Route path="/reaksi" element={<reaksi />} />
        <Route path="/asambasa" element={<asambasa />} />
        <Route path="/hidrolosis" element={<hidrolosis />} />
       
        <Route path="/kelarutan" element={<kelarutan />} />
        <Route path="/koloid" element={<koloid />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
