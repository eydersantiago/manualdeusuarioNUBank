import './Support.css';

function Support() {
  return (
    <section className="section">
      <div className="section__header">
        <h2>Soporte y contacto</h2>
        <p className="section__subtitle">Canales directos y guía para reportar errores o sugerencias.</p>
      </div>
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
            Mantén la app al día desde Configuración &gt; Actualizaciones. Se recomiendan copias de seguridad
            periódicas antes de versiones mayores.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Support;
