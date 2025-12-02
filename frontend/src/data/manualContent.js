export const modules = [
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

export const faqs = [
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

export const useCases = [
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

export const tutoriales = [
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
