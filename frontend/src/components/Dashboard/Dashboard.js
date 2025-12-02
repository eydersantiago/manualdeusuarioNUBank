import { useState } from 'react';
import { modules } from '../../data/manualContent';
import './Dashboard.css';

function Dashboard() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (name) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <section className="section">
      <div className="section__header">
        <h2>Dashboard interactivo</h2>
        <p className="section__subtitle">Visualiza jerarquías y flujos dependientes entre módulos y componentes.</p>
      </div>
      <div className="dashboard">
        {modules.map((mod) => (
          <div key={mod.name} className="flow">
            <button className="flow__toggle" onClick={() => toggleExpand(mod.name)}>
              {expanded[mod.name] ? '➖' : '➕'}
            </button>
            <div>
              <p className="flow__title">{mod.name}</p>
              <p className="muted">{mod.process}</p>
              {expanded[mod.name] && (
                <ul className="flow__list">
                  {mod.components.map((comp) => (
                    <li key={comp}>
                      <span className="dot" />
                      <div>
                        <strong>{comp}</strong>
                        <p className="muted">Conectado a otros módulos mediante tooltips y pop-ups.</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
