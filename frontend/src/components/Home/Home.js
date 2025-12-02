import { Link } from 'react-router-dom';
import Hero from '../Hero/Hero';
import './Home.css';

function Home() {
  return (
    <div className="page">
      <Hero />
      <section className="section">
        <div className="section__header">
          <h2>Explora el manual por rutas</h2>
          <p className="section__subtitle">
            Ingresa directamente al módulo que necesitas. Cada ruta ofrece navegación con tooltips, pop-ups y
            diagramas interactivos.
          </p>
        </div>
        <div className="grid shortcuts">
          <Link className="card link-card" to="/modulos">
            <p className="pill">Recorrido</p>
            <h3>Explorar módulos</h3>
            <p>Filtra por proceso, seguridad o reportes y abre la jerarquía de componentes.</p>
          </Link>
          <Link className="card link-card" to="/ayuda">
            <p className="pill">Ayuda</p>
            <h3>FAQ y tutoriales</h3>
            <p>Activa videos, tooltips y pop-ups interactivos sobre cada flujo.</p>
          </Link>
          <Link className="card link-card" to="/casos">
            <p className="pill">Buenas prácticas</p>
            <h3>Casos guiados</h3>
            <p>Aprende con ejemplos prácticos para transferencias, reportes y tours.</p>
          </Link>
          <Link className="card link-card" to="/soporte">
            <p className="pill">Soporte</p>
            <h3>Contacta y reporta</h3>
            <p>Reporta incidencias, agenda seguimiento y revisa actualizaciones.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
