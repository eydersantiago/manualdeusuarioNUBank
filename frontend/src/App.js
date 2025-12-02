import { useMemo, useState } from 'react';
import './App.css';

const modules = [
  {
    name: 'Inicio y Dashboard',
    description:
      'Vista de bienvenida con acceso rápido a resumen financiero, accesos directos y tour guiado.',
    components: ['Resumen de cuentas', 'Accesos rápidos', 'Tour interactivo'],
    process: 'Presenta el estado general y propone el siguiente paso del usuario.',
    tags: ['navegacion', 'dashboard'],
  },
  {
    name: 'Transferencias',
    description:
      'Flujo paso a paso para seleccionar destinatario, monto y confirmación segura con validaciones preventivas.',
    components: ['Selector de destinatario', 'Ingreso de monto', 'Doble confirmación'],
    process: 'Optimizado para reducir fricciones y errores durante la transacción.',
    tags: ['procesos', 'seguridad'],
  },
  {
    name: 'Historial y Reportes',
    description:
      'Consulta filtrable de movimientos, exportaciones y recibos digitales.',
    components: ['Filtros rápidos', 'Exportar PDF/CSV', 'Recibos'],
    process: 'Permite verificar operaciones y descargar evidencias.',
    tags: ['reportes', 'soporte'],
  },
  {
    name: 'Soporte y Ayuda',
    description:
      'Canal directo con respuestas rápidas, chatbot y formularios de incidentes.',
    components: ['FAQ', 'Chat en vivo', 'Tickets'],
    process: 'Centraliza la resolución de dudas y el seguimiento de solicitudes.',
    tags: ['soporte'],
  },
];

const faqs = [
  {
    question: '¿Cómo inicio el tour guiado?',
    answer:
      'Desde el panel principal, haz clic en “Iniciar tour interactivo”. Se desplegarán pop-ups contextuales sobre los botones clave.',
  },
  {
    question: '¿Puedo repetir los tutoriales?',
    answer: 'Sí, todos los tutoriales están disponibles en la sección “Tutoriales interactivos”.',
  },
  {
    question: '¿Cómo reporto un error?',
    answer:
      'En la sección Soporte, selecciona “Reportar incidencia” y completa el formulario. Adjunta capturas para acelerar la atención.',
  },
];

const useCases = [
  {
    title: 'Enviar dinero de forma segura',
    steps: [
      'Ingresa al módulo Transferencias desde el dashboard.',
      'Selecciona destinatario y escribe el monto.',
      'Revisa la pantalla de confirmación y finaliza con validación en dos pasos.',
    ],
  },
  {
    title: 'Revisar avances y optimizaciones',
    steps: [
      'Accede al Historial y aplica filtros por fecha.',
      'Descarga el reporte optimizado en PDF para compartir hallazgos.',
      'Consulta los cambios recomendados en los tooltips de cada componente.',
    ],
  },
  {
    title: 'Aprender buenas prácticas',
    steps: [
      'Activa el tour guiado en la página de inicio.',
      'Lee los tooltips de voz y tono para mantener mensajes claros.',
      'Guarda tus atajos favoritos en el dashboard personalizable.',
    ],
  },
];

const tutoriales = [
  {
    title: 'Tour de navegación',
    duration: '4 min',
    focus: 'Recorrido didáctico por módulos principales.',
  },
  {
    title: 'Transferencia sin errores',
    duration: '6 min',
    focus: 'Validaciones preventivas y mensajes claros.',
  },
  {
    title: 'Optimiza tu dashboard',
    duration: '5 min',
    focus: 'Configura accesos directos y filtros personalizados.',
  },
];

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="section__header">
        <h2>{title}</h2>
        {subtitle && <p className="section__subtitle">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

function App() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('todos');
  const [expanded, setExpanded] = useState({});

  const filteredModules = useMemo(() => {
    return modules.filter((mod) => {
      const matchesSearch = mod.name.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === 'todos' || mod.tags.includes(filter);
      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const toggleExpand = (name) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="App">
      <header className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">Manual Interactivo · React + Django</p>
          <h1>Aprende mientras navegas por la aplicación financiera</h1>
          <p className="hero__lead">
            Explora cada módulo con un recorrido didáctico, dashboard jerárquico y
            tutoriales interactivos que refuerzan confianza y claridad.
          </p>
          <div className="hero__actions">
            <a href="#recorrido" className="btn primary">
              Iniciar recorrido guiado
            </a>
            <a href="#dashboard" className="btn ghost">
              Ver jerarquía de módulos
            </a>
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

      <nav className="quick-nav">
        <a href="#recorrido">Recorrido</a>
        <a href="#dashboard">Dashboard</a>
        <a href="#ayuda">Ayuda</a>
        <a href="#casos">Casos de uso</a>
        <a href="#soporte">Soporte</a>
      </nav>

      <Section
        id="recorrido"
        title="Recorrido didáctico"
        subtitle="Paso a paso para navegar por la aplicación con ejemplos prácticos y tooltips."
      >
        <div className="controls">
          <input
            type="search"
            placeholder="Buscar módulo o componente"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="filters">
            {['todos', 'navegacion', 'dashboard', 'procesos', 'seguridad', 'reportes', 'soporte'].map(
              (tag) => (
                <button
                  key={tag}
                  className={filter === tag ? 'chip active' : 'chip'}
                  onClick={() => setFilter(tag)}
                >
                  {tag === 'todos' ? 'Todos' : tag.charAt(0).toUpperCase() + tag.slice(1)}
                </button>
              )
            )}
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
      </Section>

      <Section
        id="dashboard"
        title="Dashboard interactivo"
        subtitle="Visualiza jerarquías y flujos dependientes entre módulos y componentes."
      >
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
      </Section>

      <Section
        id="ayuda"
        title="Secciones de ayuda"
        subtitle="FAQ, tutoriales interactivos y búsqueda rápida."
      >
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
                Usa la búsqueda inteligente para localizar temas por módulo, componente o proceso
                específico.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="casos"
        title="Casos de uso y buenas prácticas"
        subtitle="Escenarios comunes para aprovechar la aplicación mientras la exploras."
      >
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
      </Section>

      <Section
        id="soporte"
        title="Soporte y contacto"
        subtitle="Canales directos y guía para reportar errores o sugerencias."
      >
        <div className="support">
          <div className="card">
            <p className="pill">Contacto</p>
            <h3>Soporte técnico</h3>
            <ul>
              <li>Chat en vivo: 08:00 - 18:00</li>
              <li>Email: soporte@appfinanzas.com</li>
              <li>Teléfono: +51 999 999 999</li>
            </ul>
          </div>
          <div className="card">
            <p className="pill">Incidencias</p>
            <h3>Reportar errores</h3>
            <ol>
              <li>Abre el módulo Soporte &gt; Reportar incidencia.</li>
              <li>Describe el problema, pasos y adjunta capturas.</li>
              <li>Envía el ticket y revisa el estado en Historial de reportes.</li>
            </ol>
          </div>
          <div className="card">
            <p className="pill">Mantenimiento</p>
            <h3>Actualizaciones</h3>
            <p>
              Mantén la app al día desde Configuración &gt; Actualizaciones. Se recomiendan copias de
              seguridad periódicas antes de versiones mayores.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default App;
