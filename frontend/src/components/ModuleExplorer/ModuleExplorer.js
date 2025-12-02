import { useMemo, useState } from 'react';
import { modules } from '../../data/manualContent';
import './ModuleExplorer.css';

function ModuleExplorer() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('todos');

  const filteredModules = useMemo(() => {
    return modules.filter((mod) => {
      const matchesSearch = mod.name.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === 'todos' || mod.tags.includes(filter);
      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <section className="section">
      <div className="section__header">
        <h2>Recorrido didáctico</h2>
        <p className="section__subtitle">
          Paso a paso para navegar por la aplicación con ejemplos prácticos y tooltips.
        </p>
      </div>
      <div className="controls">
        <input
          type="search"
          placeholder="Buscar módulo o componente"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filters">
          {['todos', 'navegacion', 'dashboard', 'procesos', 'seguridad', 'reportes', 'soporte'].map((tag) => (
            <button key={tag} className={filter === tag ? 'chip active' : 'chip'} onClick={() => setFilter(tag)}>
              {tag === 'todos' ? 'Todos' : tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="grid">
        {filteredModules.map((mod) => (
          <article key={mod.name} className="card">
            <header>
              <p className="pill">Módulo</p>
              <h3>{mod.name}</h3>
              <p className="muted">{mod.process}</p>
            </header>
            <p>{mod.description}</p>
            <details>
              <summary>Componentes y acciones</summary>
              <ul>
                {mod.components.map((comp) => (
                  <li key={comp}>{comp}</li>
                ))}
              </ul>
            </details>
            <div className="tags">
              {mod.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ModuleExplorer;
