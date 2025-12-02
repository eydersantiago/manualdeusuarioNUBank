import { faqs, tutoriales } from '../../data/manualContent';
import './Help.css';

function Help() {
  return (
    <section className="section">
      <div className="section__header">
        <h2>Secciones de ayuda</h2>
        <p className="section__subtitle">FAQ, tutoriales interactivos y búsqueda rápida.</p>
      </div>
      <div className="help">
        <div className="faq">
          <h3>Preguntas frecuentes</h3>
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
        <div className="tutorials">
          <h3>Tutoriales interactivos</h3>
          <ul>
            {tutoriales.map((tuto) => (
              <li key={tuto.title}>
                <div>
                  <strong>{tuto.title}</strong>
                  <p className="muted">{tuto.focus}</p>
                </div>
                <span className="pill">{tuto.duration}</span>
              </li>
            ))}
          </ul>
          <div className="callout">
            <p>
              Usa la búsqueda inteligente para localizar temas por módulo, componente o proceso específico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Help;
