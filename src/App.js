import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { IniBerubah } from './components';
import Layout from './components/layout';
import Kontak from './pages/Kontak';
import Profil from './pages/Profil';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<IniBerubah />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
