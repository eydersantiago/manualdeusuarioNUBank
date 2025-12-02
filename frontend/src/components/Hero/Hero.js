import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <header className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Manual Interactivo · React + Django</p>
        <h1>Aprende mientras navegas por la aplicación financiera</h1>
        <p className="hero__lead">
          Explora cada módulo con un recorrido didáctico, dashboard jerárquico y tutoriales interactivos
          que refuerzan confianza y claridad.
        </p>
        <div className="hero__actions">
          <Link className="btn primary" to="/modulos">
            Iniciar recorrido guiado
          </Link>
          <Link className="btn ghost" to="/modulos">
            Ver jerarquía de módulos
          </Link>
        </div>
      </div>
      <div className="hero__panel">
        <div className="panel-card">
          <p className="pill">Seguridad y claridad</p>
          <h3>Flujo optimizado de transferencias</h3>
          <ul>
            <li>Selección precisa del destinatario</li>
            <li>Validaciones preventivas y retroalimentación inmediata</li>
            <li>Confirmación final con tono claro y formal</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Hero;
