import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
// import Hidrokarbon from './components/Hidrokarbon';
// import termokimia from './components/termokimia';
// import reaksi from './components/reaksi';
// import kesetimabangan from './components/kesetimopbangan';
// import asambasa from './components/asambasa';
// import hidrolosis from './components/hidrolosis';
// import penyangga from './components/penyangga';
// import kelarutan from './components/kelarutan';
// import koloid from './components/koloid';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/register" />} />
        {/* <Route path="/hidrokarbon" element={<Hidrokarbon />} />
        <Route path="/termokimia" element={<termokimia />} />
        <Route path="/reaksi" element={<reaksi />} />
        <Route path="/kesetimabangan" element={<kesetimabangan />} />
        <Route path="/asambasa" element={<asambasa />} />
        <Route path="/hidrolosis" element={<hidrolosis />} />
        <Route path="/penyangga" element={<penyangga />} />
        <Route path="/kelarutan" element={<kelarutan />} />
        <Route path="/koloid" element={<koloid />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
