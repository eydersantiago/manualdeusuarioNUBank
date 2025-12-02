import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav__brand">Manual Interactivo</div>
      <div className="nav__links">
        <NavLink to="/" end>
          Inicio
        </NavLink>
        <NavLink to="/modulos">Módulos</NavLink>
        <NavLink to="/ayuda">Ayuda</NavLink>
        <NavLink to="/casos">Casos de uso</NavLink>
        <NavLink to="/soporte">Soporte</NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
