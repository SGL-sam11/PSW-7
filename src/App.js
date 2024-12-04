import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Awalan from './components/Awalan';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Materi from './components/Materi';
import Hidrokarbon from './components/Hidrokarbon';
import Koloid from './components/koloid';
import Penyangga from './components/Penyangga';
import Quiz from './components/Quiz';
import Kuishidrokarbon from './kuis/Kuishidrokarbon';
import AboutUs from './components/Aboutus';
import Termokimia from './components/Termokimia';
import HukumDasar from './components/Hukumdasar';
import Kelarutan from './components/kelarutan';
import Lajureaksi from './components/Lajureaksi';
import KuisHukumTermokimia from './kuis/KuisHukumTermokimia';
import KuisLajuReaksi from './kuis/KuisLajuReaksi';
import KuisKesetimbanganKimia from './kuis/KuisKesetimbanganKimia';
import KuisLarutanAsambasa from './kuis/KuisLarutanAsambasa';
import KuisHidrolisisGaram from './kuis/KuisHidrolisisGaram';
import KuisLarutanPenyangga from './kuis/KuisLarutanPenyangga';
import KuisKelarutanHasilKelarutan from './kuis/KelarutanHasilKelarutan'
import KuisKoloid from './kuis/KuisKoloid'

// import Kesetimbangan from './components/Kesetimbangan';
// import  KesetimbanganAsamBasa from './components/KesetimbanganAsamBasa';
// import Hidrokarbon from './components/Hidrokarbon';
// import reaksi from './components/reaksi';
// import asambasa from './components/asambasa';
// import hidrolosis from './components/hidrolosis'; 

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/Awalan" />} />
        <Route path='/Awalan' element={<Awalan />} />
        <Route path="/Koloid" element={<Koloid />} />
        <Route path="/Kelarutan" element={<Kelarutan />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/penyangga" element={<Penyangga />} />
        <Route path="/Materi" element={<Materi />} />
        <Route path="/hidrokarbon" element={<Hidrokarbon />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Kuishidrokarbon" element={<Kuishidrokarbon />} />
        <Route path="/KuisHukumTermokimia" element={<KuisHukumTermokimia />} />
        <Route path="/KuisLajuReaksi" element={<KuisLajuReaksi />} />
        <Route path="/KuisKesetimbanganKimia" element={<KuisKesetimbanganKimia />} />
        <Route path="/KuisLarutanAsambasa" element={<KuisLarutanAsambasa />} />
        <Route path="/KuisHidrolisisGaram" element={<KuisHidrolisisGaram />} />
        <Route path="/KuisLarutanPenyangga" element={<KuisLarutanPenyangga/>} />
        <Route path="/KuisKelarutanHasilKelarutan" element={<KuisKelarutanHasilKelarutan/>} />
        <Route path='KuisKoloid' element={<KuisKoloid/>}/>
        <Route path="/Aboutus" element={<AboutUs />} />
        <Route path="/Termokimia" element={<Termokimia />} />
        <Route path="/Hukumdasar" element={<HukumDasar />} />
        <Route path="/Lajureaksi" element={<Lajureaksi />} />
        {/* <Route path="/Kesetimbangan" element={<Kesetimbangan />} /> */}
        {/* <Route path="/KesetimbanganAsamBasa" element={<KesetimbanganAsamBasa />} /> */}

        {/* <Route path="/hidrokarbon" element={<Hidrokarbon />} />
        <Route path="/asambasa" element={<asambasa />} />
        <Route path="/hidrolosis" element={<hidrolosis />} />
        <Route path="/kelarutan" element={<kelarutan />} />*/}
      </Routes>
    </Router>
  );
};

export default App;
