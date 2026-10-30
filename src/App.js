import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import ProyectoBlob from './pages/ProyectoBlob';
import Acerca from './pages/Acerca';
import Contacto from './pages/Contacto';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/proyecto-blob" element={<ProyectoBlob />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;