/* Estud-IA — contenido explicativo del programa.

   Todo lo que se lee en la página sale de aquí, con su fuente documental
   anotada. Para corregir un texto se edita este archivo: no hay que tocar
   el HTML. Las cifras de cursos y líneas NO se escriben aquí — se cuentan
   desde cursos.json para que no puedan contradecir al catálogo.

   Fuentes: Anexo Técnico Estud-IA 2026 (AT) y Lineamientos (LN). */

window.PROGRAMA = {

  /* ---- Lo esencial, en una frase ---- */
  resumen:
    'Estud-IA 2026 es el programa de formación gratuita en habilidades ' +
    'digitales de la Secretaría de Desarrollo Económico de Medellín. ' +
    'Enseña seis áreas de tecnología, en tres etapas que van desde ' +
    'empezar de cero hasta presentar una certificación reconocida por la ' +
    'industria.',

  /* ---- Cifras que vienen del Anexo, no de los datos del catálogo ---- */
  metas: [
    { valor: '3.500', etiqueta: 'personas formadas y certificadas en habilidades digitales' },
    { valor: '1.180', etiqueta: 'personas certificadas en inglés técnico' },
    { valor: '30 %',  etiqueta: 'de quienes certifican Capa 2 deben mejorar sus ingresos' }
  ],

  /* ---- ¿Puedo entrar? (AT, criterios de selección) ---- */
  requisitos: {
    titulo: '¿Quién puede participar?',
    entrada: 'No hay que tener estudios en tecnología ni saber inglés. ' +
             'Capa 1 está hecha para quien empieza de cero.',
    lista: [
      'Vivir en el Distrito Especial de Ciencia, Tecnología e Innovación de Medellín.',
      'Tener 16 años o más.',
      'Contar con los saberes previos que pida la capa y la línea elegida. Para Capa 1 basta con manejo básico del computador.',
      'Tener disponibilidad de tiempo para la formación.',
      'Presentar fotocopia del documento de identidad en el proceso de selección.'
    ],
    nota: 'Tras la inscripción hay un proceso de perfilamiento y selección. ' +
          'A cada aspirante se le notifica por correo si fue aceptado, con la ' +
          'justificación técnica del resultado.',

    /* La inscripción se hace en el sitio de la Corporación Gilberto
       Echeverri Mejía, operadora del programa. */
    inscripcion: {
      texto: 'Da clic aquí e inscríbete',
      url: 'https://www.corpogem.gov.co/estud-ia/',
      pie: 'Te lleva al sitio de la Corporación Gilberto Echeverri Mejía, donde se hace la inscripción.'
    }
  },

  /* ---- Las tres capas ---- */
  capas: [
    {
      numero: 1,
      nombre: 'Introducción digital',
      lema: 'Empezar de cero.',
      para: 'Para quien nunca ha programado ni ha trabajado con datos.',
      descripcion:
        'Cursos cortos de nivelación y apropiación tecnológica. Sirven para ' +
        'descubrir qué área te gusta antes de comprometerte con una ' +
        'especialización larga, y para despertar vocaciones en tecnología.',
      datos: [
        ['Duración',  '60 horas por curso'],
        ['Modalidad', 'Virtual (sincrónica y asincrónica)'],
        ['Requisito', 'Ninguno previo en tecnología'],
        ['Al final',  'Certificado con insignia digital verificable']
      ],
      cierre: 'Termina con un evento virtual de cierre que conecta lo aprendido con la Capa 2.'
    },
    {
      numero: 2,
      nombre: 'Bootcamps de especialización',
      lema: 'Llegar a un perfil empleable.',
      para: 'Para quien ya pasó por Capa 1 o tiene conocimientos equivalentes.',
      descripcion:
        'Formación técnica intensiva en tres niveles —básico, intermedio y ' +
        'avanzado— que lleva al participante hasta un perfil junior listo para ' +
        'trabajar. Incluye inglés técnico y habilidades blandas, y cierra con ' +
        'un proyecto final.',
      datos: [
        ['Duración',  '90 horas: 60 técnicas + 20 de inglés + 10 de habilidades blandas'],
        ['Modalidad', 'Híbrida: 70 % virtual y 30 % presencial'],
        ['Requisito', 'Certificado de Capa 1 o conocimientos equivalentes'],
        ['Al final',  'Un certificado por cada componente, con insignia digital']
      ],
      cierre: 'El 30 % de quienes certifican debe mejorar sus ingresos, por empleo, ascenso o emprendimiento.'
    },
    {
      numero: 3,
      nombre: 'Certificaciones de industria',
      lema: 'Certificarse ante el mercado.',
      para: 'Solo para los mejores desempeños de Capa 2, en nivel intermedio y avanzado.',
      descripcion:
        'El programa entrega un voucher para presentar el examen de una ' +
        'certificación reconocida por la industria. Incluye simuladores, ' +
        'preparatorios y acompañamiento de preguntas y respuestas hasta el día ' +
        'del examen, con proctor en la sesión.',
      datos: [
        ['Acceso',    'Convocatoria interna, por mérito académico en Capa 2'],
        ['Incluye',   'Voucher del examen, simuladores y preparatorios'],
        ['Apoyo',     'Acompañamiento con preguntas y respuestas'],
        ['Al final',  'Certificación emitida por la casa matriz de la tecnología']
      ],
      cierre: 'No tiene cursos en el catálogo: es el examen y su preparación.',
      sinCatalogo: true
    }
  ],

  /* ---- Lo que acompaña a la formación técnica (AT) ---- */
  transversales: [
    {
      titulo: 'Inglés con propósito',
      texto: 'No es un curso de inglés general. Son horas dedicadas a la ' +
             'terminología, los conceptos y los procesos del sector del ' +
             'software, que en su mayoría solo existen en ese idioma. Los ' +
             'contenidos salen de la misma ruta técnica que cursa cada persona.'
    },
    {
      titulo: 'Habilidades blandas para el empleo',
      texto: 'Comunicación, trabajo en equipo, resolución de problemas, ' +
             'adaptabilidad y liderazgo, trabajadas sobre situaciones reales ' +
             'del sector: entrevistas técnicas, metodologías ágiles, revisión ' +
             'de código entre pares y sustentación ante un cliente.'
    },
    {
      titulo: 'Acompañamiento y alertas tempranas',
      texto: 'Un sistema de acompañamiento psicosocial detecta a tiempo a ' +
             'quien se está quedando atrás —por inasistencia, bajo avance o ' +
             'falta de conexión— para intervenir antes de que abandone.'
    },
    {
      titulo: 'Comunidades de práctica',
      texto: 'Redes de conocimiento entre participantes y el ecosistema de ' +
             'Ciencia, Tecnología e Innovación, para resolver problemas ' +
             'reales y hacer networking más allá del aula.'
    }
  ],

  /* ---- Certificación (AT, criterios académicos) ---- */
  certificacion: {
    titulo: '¿Cómo se obtiene el certificado?',
    regla: 'Hay que completar más del 80 % de los módulos asignados.',
    puntos: [
      ['Egresado',   'Quien termina todo el plan de estudios del curso. En Capa 2, además, presenta el proyecto final.'],
      ['Certificado', 'Quien además aprueba los criterios académicos: más del 80 % de avance en los módulos.'],
      ['Insignia',   'El certificado viene con una insignia digital verificable en Blockchain, que se puede compartir y comprobar.']
    ],
    nota: 'En Capa 2 los certificados son independientes por componente: uno ' +
          'técnico, uno de inglés y uno de habilidades blandas.'
  },

  /* ---- Enlace al catálogo detallado ---- */
  catalogo: {
    url: 'https://estud-iacursos.vercel.app',
    texto: 'Consulta el catálogo completo con el temario módulo a módulo, ' +
           'las herramientas de cada curso y los perfiles de entrada y salida.'
  },

  /* ---- Nombre legible de cada línea; debe coincidir con cursos.json ---- */
  lineas: {
    programacion:   { nombre: 'Programación',
                      texto: 'Escribir, leer y depurar código. Desde la lógica básica hasta construir y publicar aplicaciones.' },
    datos:          { nombre: 'Análisis de datos',
                      texto: 'Convertir datos en decisiones: consultarlos, analizarlos y comunicarlos con gráficos claros.' },
    nube:           { nombre: 'Nube e infraestructura',
                      texto: 'Dónde viven las aplicaciones: servicios en la nube, arquitectura, costos y seguridad.' },
    ciberseguridad: { nombre: 'Ciberseguridad',
                      texto: 'Proteger información, dispositivos y dinero frente al fraude digital y las amenazas actuales.' },
    ia:             { nombre: 'Inteligencia Artificial',
                      texto: 'Usar IA generativa con criterio: sacarle provecho, reconocer sus límites y detectar sus riesgos.' },
    marketing:      { nombre: 'Marketing digital',
                      texto: 'Vender y crecer en canales digitales con datos, automatización y contenido apoyado en IA.' }
  }
};
