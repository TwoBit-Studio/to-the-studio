import type { Dictionary } from "../get-dictionary";

// Titles and intro copy come from the Figma frame "Desktop Español".
// TODO: the list items (services, process steps, FAQ) live inside Figma
// component instances and were translated here as placeholders. Check them
// against the design.
const es: Dictionary = {
  meta: {
    title: "2theStüdio",
    description:
      "Creamos software, sitios web y aplicaciones que funcionan exactamente como la gente espera.",
  },
  nav: {
    services: "Servicios",
    process: "Proceso",
    faq: "FAQ",
    contact: "Contacto",
  },
  hero: {
    title: "Tu negocio se merece lo mejor",
    description:
      "Creamos software, sitios web y aplicaciones que funcionan exactamente como la gente espera. Todo lo que lanzamos está diseñado para ser rápido, intuitivo y confiable desde el primer momento.",
    cta: "Hablemos",
  },
  services: {
    title: "Servicios que se ofrecen",
    items: [
      {
        title: "Sitios web para cualquier nicho",
        description:
          "Creamos desde tiendas digitales y sitios de marca que convierten hasta sistemas de reservas automatizados. Si tu negocio necesita mostrar un catálogo o procesar pagos de forma segura, diseñamos todo el flujo para que sea fluido para tus clientes.",
      },
      {
        title: "Software a la medida para empresas",
        description:
          "Las plataformas genéricas obligan a tu negocio a adaptarse a sus limitaciones. Nosotros hacemos lo contrario: construimos aplicaciones a la medida de cómo operas realmente. Si tu equipo gestiona un proceso a mano o con hojas de cálculo, es muy probable que podamos automatizarlo por completo.",
      },
      {
        title: "Apps para lo que necesites",
        description:
          "Desde apps de recompensas para cafeterías hasta motores de reservas para hoteles, construimos productos digitales desde cero. Sean cuales sean las herramientas que tu negocio necesita para crecer, las desarrollamos para que funcionen exactamente como quieres.",
      },
    ],
  },
  process: {
    title: "Nuestra forma de trabajar.",
    description:
      "Creemos que los mejores productos nacen de la colaboración directa. Aquí tratas directamente con quienes desarrollan tu software, lo que significa que tu visión nunca se pierde entre gerentes de cuenta o intermediarios.",
    steps: [
      {
        title: "Planeación",
        description:
          "Empezamos definiendo tus objetivos. Sé creativo con la lógica de tu negocio, nosotros nos encargamos del resto.",
      },
      {
        title: "Opciones para elegir",
        description:
          "Te presentamos tres paquetes según tus tiempos y presupuesto. Tú eliges el alcance que más sentido tenga para tu negocio.",
      },
      {
        title: "Acuerdo",
        description:
          "Antes de escribir una sola línea de código, ponemos por escrito los entregables, precios y tiempos exactos, y firmamos.",
      },
      {
        title: "Desarrollo",
        description:
          "Construimos todo en un entorno de pruebas transparente. Puedes revisar e interactuar con el software mientras cobra vida.",
      },
      {
        title: "Entrega",
        description:
          "Cuando apruebas la versión final, lanzamos. Te entregamos las llaves y el código fuente, y te mostramos cómo administrarlo.",
      },
    ],
  },
  team: {
    title: "Sobre nosotros",
    description:
      "Somos dos ingenieros de software a los que les importa hacer las cosas bien. Como nosotros mismos manejamos todo, nuestra reputación está en juego en cada proyecto que lanzamos.",
    linkedin: "LinkedIn",
  },
  faq: {
    title: "Preguntas? Respuestas.",
    items: [
      {
        question: "Pero, no entiendo de código",
        answer:
          "No te preocupes, ese es nuestro trabajo. Tú nos dices qué quieres lograr con tu negocio y nosotros nos encargamos de la ingeniería.",
      },
      {
        question: "¿De quién es el producto final?",
        answer:
          "Tuyo, por completo. No creemos en retener el código ni en atarte a sistemas propietarios. Tu software y tus recursos son tuyos desde el primer día.",
      },
      {
        question: "¿Qué pasa después del lanzamiento?",
        answer:
          "Cada proyecto incluye un periodo de soporte para ajustes y optimización. Las nuevas funciones a futuro se pueden cotizar como actualizaciones aparte.",
      },
      {
        question: "¿Cuánto tarda un proyecto?",
        answer:
          "Depende por completo de la complejidad de lo que construyamos. Te daremos un calendario preciso junto con las opciones de tu proyecto.",
      },
      {
        question: "¿Cómo funcionan los pagos?",
        answer:
          "Dividimos los pagos en dos etapas. La primera es un anticipo antes de empezar y el pago final se realiza cuando todo está en línea.",
      },
      {
        question: "¿Por qué trabajar con nosotros?",
        answer:
          "La mayoría de las agencias construyen sistemas que funcionan técnicamente pero son incómodos de usar. A nosotros sí nos importa el diseño. Tu producto se verá increíble y será fácil de usar.",
      },
    ],
  },
  contact: {
    title: "¿Cuándo empezamos?",
    cta: "Escríbenos por WhatsApp",
  },
  footer: {
    email: "contact@2thestudio.com",
    copyright: "©2026 2theStüdio",
  },
};

export default es;
