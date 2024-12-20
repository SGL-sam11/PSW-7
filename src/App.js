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
import KuisKelarutanHasilKelarutan from './kuis/KelarutanHasilKelarutan';
import KuisKoloid from './kuis/KuisKoloid';
import Kesetimbangan from './components/Kesetimbangan';
import KesetimbanganAsamBasa from './components/KesetimbanganAsamBasa';
import PrinsipLeChatelier from './components/PrinsipLeChatelier';
import PerhitunganKonstanta from './components/PerhitunganKonstanta';
import PengertianPrinsipKesetimbangan from './components/PengertianPrinsipKesetimbangan';
import HukumAksiMassa from './components/HukumAksiMassa';
import ContohSoal from './components/ContohSoal';
import ContohSoall from './components/ContohSoall';
import LarutanAsamBasa from './components/LarutanAsamBasa';
import Asamdanbasakuatlemah from './components/asamdanbasakuatlemah';
import PengertianLarutanAsamBasa from './components/pengertianlarutanasambasa';
import Reaksinetralisasi from './components/reaksinetralisasi';
import Skalaph from './components/skalaph';
import Teoriasambasa from './components/teoriasambasa';
import Aplikasihidrolisis from './components/Aplikasihidrolisis';
import Cthsoal from './components/Cthsoal';
import FaktoryangMempengaruhi from './components/FaktoryangMempengaruhi';
import Hidrolisasis from './components/Hidrolisasis';
import HidrolisisGaram from './components/HidrolisisGaram';
import Reaksikimi from './components/Reaksikimi';
import Pengertianhidrolisisgaram from './components/Pengertianhidrolisisgaram';

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
        <Route path="/Kesetimbangan" element={<Kesetimbangan />} />
        <Route path="/KesetimbanganAsamBasa" element={<KesetimbanganAsamBasa />} />
        <Route path="/PrinsipLeChatelier" element={<PrinsipLeChatelier />} />
        <Route path="/PerhitunganKonstanta" element={<PerhitunganKonstanta />} />
        <Route path="/PengertianPrinsipKesetimbangan" element={<PengertianPrinsipKesetimbangan />} />
        <Route path="/HukumAksiMassa" element={<HukumAksiMassa />} />
        <Route path="/ContohSoal" element={<ContohSoal />} />
        <Route path="/ContohSoall" element={<ContohSoall />} />
        <Route path="/LarutanAsamBasa" element={<LarutanAsamBasa />} />
        <Route path="/asamdanbasakuatlemah" element={<Asamdanbasakuatlemah />} />
        <Route path="/pengertianlarutanasambasa" element={<PengertianLarutanAsamBasa />} />
        <Route path="/reaksinetralisasi" element={<Reaksinetralisasi />} />
        <Route path="/skalaph" element={<Skalaph />} />
        <Route path="/Lajureaksi" element={<Lajureaksi />} />
        <Route path="/teoriasambasa" element={<Teoriasambasa />} />
        <Route path="/Aplikasihidrolisis" element={<Aplikasihidrolisis />} />
        <Route path="/Cthsoal" element={<Cthsoal />} />
        <Route path="/FaktoryangMempengaruhi" element={<FaktoryangMempengaruhi />} />
        <Route path="/Hidrolisasis" element={<Hidrolisasis />} />
        <Route path="/HidrolisisGaram" element={<HidrolisisGaram />} />
        <Route path="/Reaksikimi" element={<Reaksikimi />} />
        <Route path="/Pengertianhidrolisisgaram" element={<Pengertianhidrolisisgaram />} />


      </Routes>
    </Router>
  );
};

export default App;
