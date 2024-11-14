import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
// import Hidrokarbon from './components/Hidrokarbon';
// import termokimia from './components/termokimia';
// import reaksi from './components/reaksi';
// import kesetimabangan from './components/kesetimabangan';
// import asambasa from './components/asambasa';
// import hidrolosis from './components/hidrolosis';
// import penyangga from './components/penyangga';
// import kelarutan from './components/kelarutan';
// import koloid from './components/koloid';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
