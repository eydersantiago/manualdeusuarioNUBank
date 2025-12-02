# Manual de Usuario Interactivo

## Portada
- **Aplicación:** Plataforma financiera con frontend en React y backend en Django.
- **Versión del manual:** 1.0
- **Fecha de publicación:** 2024-03-20
- **Autoría:** Equipo de Diseño de Contenido y Producto.

## Índice
1. [Introducción](#introducción)
2. [Recorrido didáctico por la aplicación](#recorrido-didáctico-por-la-aplicación)
3. [Dashboard interactivo de módulos](#dashboard-interactivo-de-módulos)
4. [Secciones de ayuda](#secciones-de-ayuda)
5. [Casos de uso y buenas prácticas](#casos-de-uso-y-buenas-prácticas)
6. [Instalación y requisitos](#instalación-y-requisitos)
7. [Glosario de componentes](#glosario-de-componentes)
8. [Soporte y reporte de incidencias](#soporte-y-reporte-de-incidencias)

## Introducción
En el contexto actual de la transformación digital, las aplicaciones financieras se han consolidado como herramientas fundamentales para la gestión del dinero y las transacciones cotidianas. La experiencia de usuario (UX) en estos entornos digitales no solo determina la satisfacción del cliente, sino que también influye directamente en la confianza, la seguridad percibida y la eficiencia operativa de las plataformas financieras. En este marco, el diseño de contenido y la escritura orientada a la experiencia de usuario (UX writing) emergen como disciplinas críticas que requieren un enfoque estratégico y fundamentado en principios de usabilidad, claridad y accesibilidad.

El presente manual guía al usuario para recorrer una aplicación financiera basada en **React** (frontend) y **Django** (backend). Su objetivo principal es que el usuario aprenda a ejecutar operaciones clave (consultas, transferencias, pagos y gestión de beneficiarios) mientras explora la interfaz. Además, brinda respuestas a dudas frecuentes, incorpora tutoriales interactivos y expone un dashboard gráfico que muestra la jerarquía de módulos y sus flujos dependientes.

### Objetivo del manual
- Enseñar de forma didáctica cada módulo y componente visible en el frontend.
- Facilitar la búsqueda rápida de información y la resolución de dudas frecuentes.
- Ofrecer un recorrido guiado que permita aprender mientras se usa la aplicación.

### Alcance
- Cubre la navegación general, los principales procesos financieros y las herramientas de autoayuda.
- No incluye configuraciones avanzadas de servidor ni despliegues en producción.

### Público objetivo
- Usuarios nuevos que realizan sus primeras operaciones financieras en la plataforma.
- Usuarios intermedios que requieren optimizar su flujo de trabajo y reducir errores.

## Recorrido didáctico por la aplicación

### Paso a paso de navegación
1. **Inicio de sesión y seguridad**
   - Accede al formulario de autenticación. Un tooltip guía la activación del 2FA y explica por qué es importante para proteger transferencias.
   - Un pop-up inicial resume las novedades recientes y enlaza a la sección «Qué hay de nuevo» del manual.
2. **Panel principal (Dashboard)**
   - Barra superior: accesos rápidos a notificaciones, centro de ayuda y perfil.
   - Menú lateral: módulos de **Cuentas**, **Transferencias**, **Pagos**, **Ahorros/Inversiones** y **Soporte**. Cada ícono incluye un tooltip descriptivo.
3. **Módulo Cuentas**
   - Visualiza saldos, movimientos y estados. Tooltips explican filtros por fecha y categoría.
   - Botón «Exportar» muestra un pop-up con formatos disponibles y advertencias de seguridad.
4. **Módulo Transferencias**
   - Flujo guiado en cuatro pasos con indicador de progreso: seleccionar destinatario → monto y concepto → revisión → confirmación segura.
   - Se resaltan validaciones en vivo (formato de cuenta/CLABE, montos máximos) y mensajes preventivos para reducir errores.
5. **Módulo Pagos y Servicios**
   - Catálogo filtrable por servicio (luz, agua, internet). Los tooltips indican requisitos de referencia o contrato.
   - Confirmación con resumen claro y mensaje de retroalimentación contextual.
6. **Módulo Ahorros/Inversiones**
   - Tarjetas interactivas con rendimiento proyectado y riesgos. Gráficos permiten expandir/colapsar detalles.
7. **Centro de ayuda**
   - Búsqueda inteligente por palabra clave, con filtros por módulo/componente.
   - Acceso a tutoriales interactivos, videos y preguntas frecuentes.

### Explicación visual de módulos y componentes
- **Menú lateral**: navegación jerárquica con estados activo/hover. Incluye badges de novedades.
- **Tarjetas informativas**: resumen de productos, CTA principal y enlaces a ayuda contextual.
- **Barras de progreso**: indican avance en flujos multistep (transferencias, onboarding de usuarios, registro de beneficiarios).
- **Alertas y banners**: uso de colores (éxito, advertencia, error) alineados al manual de voz y tono.

### Ejemplos prácticos
- **Realizar una transferencia**: inicia en «Transferencias», selecciona beneficiario, ingresa monto, revisa y confirma. El tour guiado señala cada campo crítico y despliega tips de seguridad.
- **Pagar un servicio**: filtra por categoría, ingresa referencia, revisa comisiones y confirma con token. Un pop-up explica cómo guardar el servicio como favorito.
- **Consultar movimientos**: aplica filtros por fecha y tipo, exporta en PDF/CSV. El manual ofrece un tooltip que explica la nomenclatura de cargos y abonos.

## Dashboard interactivo de módulos
- **Visualización jerárquica:** árbol expandible que muestra **Dashboard → (Cuentas, Transferencias, Pagos, Ahorros/Inversiones, Soporte)**. Cada nodo puede colapsarse.
- **Flujos dependientes:** diagramas dinámicos conectan pasos (p. ej., «Seleccionar beneficiario» → «Ingresar monto» → «Revisar» → «Confirmar con 2FA»). Al pasar el cursor, se despliegan breves descripciones.
- **Filtros y búsqueda:** barra superior permite filtrar por módulo, componente o proceso; los resultados se resaltan en el diagrama.
- **Accesibilidad:** soporte para navegación con teclado (tab/enter/espacio) y contraste alto para nodos seleccionados.

## Secciones de ayuda

### Preguntas frecuentes (FAQ)
- ¿Cómo activo la autenticación de dos factores?
- ¿Qué hago si un pago aparece duplicado?
- ¿Cómo guardo un beneficiario frecuente?
- ¿Dónde encuentro los comprobantes de transferencia?
- ¿Cómo reporto un error o solicito reembolso?

### Tutoriales interactivos
- **Videos cortos** incrustados en la sección de ayuda, con subtítulos y controles accesibles.
- **Tooltips contextuales** en botones sensibles: «Confirmar», «Agregar beneficiario», «Exportar».
- **Pop-ups de onboarding** que aparecen la primera vez que se visita un módulo.

### Búsqueda rápida
- Caja de búsqueda con autocompletado por palabras clave (ej. «2FA», «duplicado», «límite de transferencia»).
- Filtros por módulo (Cuentas, Transferencias, Pagos), componente (formulario, tabla, gráfico) o proceso (onboarding, confirmación).

## Casos de uso y buenas prácticas
- **Transferencia segura y sin errores:** valida datos de beneficiario, revisa monto y concepto, confirma con 2FA y conserva el comprobante.
- **Pagos recurrentes:** configura alertas y favoritos, verifica fechas de corte y guarda comprobantes.
- **Gestión de ahorro/inversión:** compara productos con la vista expandible, revisa riesgos y establece metas.
- **Optimización de tiempo:** usa accesos rápidos del dashboard, búsquedas guardadas y filtros preconfigurados.
- **Inclusión y accesibilidad:** usa el modo de alto contraste, la navegación con teclado y los textos de ayuda con lenguaje claro.

## Instalación y requisitos
- **Frontend (React):** Node.js 18+, npm o yarn. Instalación: `npm install` y ejecución: `npm start`.
- **Backend (Django):** Python 3.10+, pip, virtualenv. Instalación: `pip install -r requirements.txt` y ejecución: `python manage.py runserver`.
- **Integración:** configurar variables de entorno (API URL, claves de seguridad, proveedores de autenticación). Usar HTTPS en entornos productivos.

## Glosario de componentes
- **Tooltip:** mensaje breve al posar el cursor sobre un elemento para explicar su función.
- **Pop-up modal:** ventana superpuesta que solicita confirmación o muestra instrucciones.
- **Tour guiado:** recorrido paso a paso que resalta zonas clave de la interfaz.
- **CTA (Call to Action):** botón principal que conduce a la acción recomendada.
- **Dashboard jerárquico:** vista gráfica que organiza módulos y flujos dependientes en un árbol interactivo.

## Soporte y reporte de incidencias
- **Contacto directo:** botón «Soporte» en el menú lateral abre el chat integrado o el formulario de tickets.
- **Reporte de errores:** captura de pantalla, descripción breve, hora aproximada, ID de transacción (si aplica) y pasos para reproducir.
- **Seguimiento:** los tickets muestran estado (abierto, en revisión, resuelto) y SLA estimado.

---

### Anexos inspiradores del proceso de diseño
- **Competidores directos e indirectos:** análisis comparativo y banco seleccionado para referencias de UX.
- **Matriz de correcciones:** hallazgos y ajustes aplicados tras evaluar competidores.
- **Entrevistas y lluvia de ideas:** hallazgos de research, planificación de sesiones y selección de la idea final.
- **Manual de voz y tono:** identidad, audiencia y guías de tono para mensajes críticos (alertas, confirmaciones, errores).
- **Prototipos optimizados:** enlaces a pantallas iteradas y prototipo interactivo validado con usuarios.
