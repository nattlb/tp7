import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Lenguajes 4</div>
      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/acerca">Acerca de</Link>
        <Link to="/proyecto-blob">Proyectos</Link>
        <Link to="/contacto" className="boton-contacto">Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;