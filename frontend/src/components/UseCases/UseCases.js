import { useCases } from '../../data/manualContent';
import './UseCases.css';

function UseCases() {
  return (
    <section className="section">
      <div className="section__header">
        <h2>Casos de uso y buenas prácticas</h2>
        <p className="section__subtitle">Escenarios comunes para aprovechar la aplicación mientras la exploras.</p>
      </div>
      <div className="grid">
        {useCases.map((useCase) => (
          <article key={useCase.title} className="card">
            <p className="pill">Caso práctico</p>
            <h3>{useCase.title}</h3>
            <ol>
              {useCase.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </section>
  );
}

export default UseCases;
