
import { SiteData } from './types';

const SHARED_LINKS = {
  email: "pablobrusco@gmail.com",
  linkedin: "https://www.linkedin.com/in/pablobrusco/",
  scholar: "https://scholar.google.com/citations?user=OucNeLgAAAAJ",
  university: "https://computacion.dc.uba.ar/autoridades/",
  image: "https://computacion.dc.uba.ar/wp-content/uploads/2024/02/pablo_brusco_2024-1200x1200.jpeg",
};

const PUBLICATIONS_DATA = [
  {
    id: "j1",
    type: "journal",
    title: "Speech-induced suppression during natural dialogues",
    authors: "Joaquin E Gonzalez, Nicolás Nieto, Pablo Brusco, Agustín Gravano, and Juan E Kamienkowski",
    venue: "Communications Biology",
    year: "2024"
  },
  {
    id: "j2",
    type: "journal",
    title: "Automatic offline annotation of turn-taking transitions in task-oriented dialogue",
    authors: "Pablo Brusco and Agustín Gravano",
    venue: "Computer Speech & Language",
    year: "2022"
  },
  {
    id: "j3",
    type: "journal",
    title: "A cross-linguistic analysis of the temporal dynamics of turn-taking cues using machine learning as a descriptive tool",
    authors: "Pablo Brusco, Jazmín Vidal, Štefan Beňuš, and Agustín Gravano",
    venue: "Speech Communication",
    year: "2020"
  },
  {
    id: "c1",
    type: "conference",
    title: "SLUE: new benchmark tasks for spoken language understanding evaluation on natural speech",
    authors: "Suwon Shon, Ankita Pasad, Felix Wu, Pablo Brusco, Yoav Artzi, Karen Livescu, and Kyu J. Han",
    venue: "CoRR (Preprint)",
    year: "2021"
  },
  {
    id: "c2",
    type: "conference",
    title: "Brain representation of acoustic features during goal-oriented dialogues",
    authors: "Joaquin Gonzalez, Nicolás Nieto, Mauro Veneziano, Pablo Brusco, Agustín Gravano, and Juan E Kamienkowski",
    venue: "ASSAI 2021 - JAIIO 50",
    year: "2021"
  },
  {
    id: "c3",
    type: "conference",
    title: "Zero-shot multi-domain dialog state tracking using prescriptive rules",
    authors: "Edgar Altszyler, Pablo Brusco, Nikoletta Basiou, John Byrnes, and Dimitra Vergyri",
    venue: "IJCLR 2021",
    year: "2021"
  },
  {
    id: "c4",
    type: "conference",
    title: "Leveraging pre-trained language model for speech sentiment analysis",
    authors: "Suwon Shon, Pablo Brusco, Jing Pan, Kyu J. Han, and Shinji Watanabe",
    venue: "Interspeech 2021",
    year: "2021"
  },
  {
    id: "c5",
    type: "conference",
    title: "Cross-linguistic study of the production of turn-taking cues in American English and Argentine Spanish",
    authors: "Pablo Brusco, Juan Manuel Pérez, and Agustín Gravano",
    venue: "Interspeech 2017",
    year: "2017"
  },
  {
    id: "c6",
    type: "conference",
    title: "Who do you think will speak next? perception of turn-taking cues in Slovak and Argentine Spanish",
    authors: "Agustín Gravano, Pablo Brusco, and Stefan Benus",
    venue: "Interspeech 2016",
    year: "2016"
  },
  {
    id: "c7",
    type: "conference",
    title: "Análisis de la dinámica del contenido semántico de textos",
    authors: "Edgar Altszyler and Pablo Brusco",
    venue: "ASAI 2015 - JAIIO 44",
    year: "2015"
  },
  {
    id: "c8",
    type: "conference",
    title: "Detección de palabras claves en lenguajes sin datos de entrenamiento",
    authors: "Pablo Brusco, Luciana Ferrer, and Agustín Gravano",
    venue: "CACIC 2014",
    year: "2014"
  },
  {
    id: "p1",
    type: "patent",
    title: "Speech Sentiment Analysis Using a Speech Sentiment Classifier Pre-trained With Pseudo-Sentiment Labels",
    authors: "Suwon Shon, Pablo Brusco, Jing Pan, Kyu Han",
    venue: "Patent P1",
    year: "Patent"
  },
  {
    id: "d1",
    type: "dataset",
    title: "UBA Games Corpus",
    authors: "Agustín Gravano, Juan E Kamienkowski, and Pablo Brusco",
    venue: "Published Dataset",
    year: "2016"
  }
] as any;

const CONFERENCES_DATA = [
  { id: "conf1", name: "Interspeech", location: "Rotterdam, Netherlands", date: "Aug 2025" },
  { id: "conf2", name: "KHIPU (Latin American AI Meeting)", location: "Santiago, Chile", date: "Mar 2025" },
  { id: "conf3", name: "KHIPU (Latin American AI Meeting)", location: "Montevideo, Uruguay", date: "Nov 2023" },
  { id: "conf4", name: "NAACL", location: "Seattle, USA", date: "July 2022" },
  { id: "conf5", name: "Interspeech", location: "Brno, Czechia", date: "Sep 2021 (Virtual)" },
  { id: "conf6", name: "KHIPU", location: "Montevideo, Uruguay", date: "Nov 2019" },
  { id: "conf7", name: "NeurIPS", location: "Montréal, Canada", date: "Dec 2018" },
  { id: "conf8", name: "Machine Learning Summer School (MLSS)", location: "Buenos Aires, Argentina", date: "June 2018" },
  { id: "conf9", name: "Interspeech", location: "Stockholm, Sweden", date: "Aug 2017" },
  { id: "conf10", name: "LABMAN", location: "Buenos Aires, Argentina", date: "Mar 2017" },
  { id: "conf11", name: "Interspeech", location: "San Francisco, USA", date: "Sep 2016" },
  { id: "conf12", name: "IJCAI", location: "Buenos Aires, Argentina", date: "Aug 2015" },
  { id: "conf13", name: "CACIC", location: "Buenos Aires, Argentina", date: "July 2014" }
];

export const APP_DATA: { en: SiteData; es: SiteData } = {
  en: {
    profile: {
      ...SHARED_LINKS,
      name: "Pablo Brusco",
      title: "Machine Learning & Speech Researcher",
      location: "Buenos Aires, Argentina",
      summary: "Machine Learning & Speech Researcher with 10+ years of experience. Senior Data Scientist at NoRedInk (Full Stack ML & Analytics). Previously Staff Research Scientist at ASAPP leading voice-aware dialog systems and ASR. Part-time Tenure Professor and Director of the Computer Science Degree Program at the University of Buenos Aires."
    },
    experience: [
      {
        id: "e0",
        role: "Senior Data Scientist (Full Stack ML & Analytics)",
        company: "NoRedInk",
        period: "Dec 2025 – Current",
        achievements: [
          "Starting new role focused on Full Stack Machine Learning and Analytics."
        ]
      },
      {
        id: "e1",
        role: "Staff Research Scientist",
        company: "ASAPP Inc",
        period: "May 2022 – Nov 2025",
        achievements: [
          "Designed and implemented an evaluation framework for real-time Voice APIs, including traditional cascade systems and multimodal speech-LLMs. Assessed noise robustness, latency, and naturalness.",
          "Leading the development of a voice-aware dialog system, focusing on the turn-orchestration module for natural human-AI conversations.",
          "Improved conversation simulation using LLMs to create natural dialogs, API calls, and user goals. Reduced developer ramp-up time from weeks to days.",
          "Refactored training datasets and framework to enhance model development efficiency and enable seamless deployment across GPU clusters.",
          "Automated a pipeline for converting raw audio data into structured data for training, reducing onboarding time from >3 months to 1.5 weeks.",
          "Led development of the company's first Spanish ASR model, achieving production-grade accuracy for existing customers."
        ]
      },
      {
        id: "e2",
        role: "Lead Research Scientist",
        company: "ASAPP Inc",
        period: "Apr 2020 – May 2022",
        achievements: [
          "Conducted R&D of sentiment classifiers based on audio and text inputs (see Patent).",
          "Transitioned capitalization/punctuation from FST-based to neural-based models.",
          "Enhanced rules-based inverse text normalization.",
          "Built standardized evaluation pipelines to ensure fair comparison of models against competitor APIs.",
          "Improved the performance of generic models by integrating diverse data sources."
        ]
      },
      {
        id: "e3",
        role: "International Fellow",
        company: "SRI International, STAR Lab",
        location: "Palo Alto, CA",
        period: "Dec 2018 – Mar 2019",
        achievements: [
          "Contributed to building statistical models for end-of-turn detection in spoken dialogue systems using RNNs.",
          "Developed a framework for introducing first-order logic predicates into neural networks."
        ]
      },
      {
        id: "e5",
        role: "Student Associate",
        company: "SRI International, STAR Lab",
        location: "Palo Alto, CA",
        period: "Sep 2016 – Dec 2016",
        achievements: [
          "Contributed to building a cough detection system for a Health Virtual Assistant by collecting corpora and developing ML models.",
          "Participated in research on rare event detection using topic modeling techniques (LDA) for acoustic signals."
        ]
      },
      {
        id: "e6",
        role: "Software Developer",
        company: "Manas Technology Solutions",
        period: "Jun 2010 – Nov 2013",
        achievements: [
          "End-to-end developer of rich web applications for social and humanitarian goals.",
          "Project Leader for various software projects in Phnom Penh, Cambodia (2013).",
          "Distinguished projects include ResourceMap, a system to track work and resources geographically."
        ]
      }
    ],
    education: [
      {
        id: "phd",
        degree: "Ph.D. in Computer Science",
        institution: "University of Buenos Aires",
        year: "March 2021",
        thesis: "Cross-linguistic Study of Turn-taking Cues in Spoken Dialogues (ML methods for sequence modeling)",
        advisors: "Agustín Gravano",
        scholarship: "Ph.D. Scholarship by CONICET (April 2015 - March 2021): Pattern Recognition over Temporal Series"
      },
      {
        id: "lic",
        degree: "Computer Science Major (Licenciatura)",
        institution: "Univ. of Buenos Aires",
        year: "June 2014",
        details: "(Roughly equivalent to B.S. + M.S. in Computer Science)",
        thesis: "Keyword Spotting in Languages Without Previous Training Data",
        advisors: "Luciana Ferrer, Agustín Gravano"
      }
    ],
    publications: PUBLICATIONS_DATA,
    teaching: [
      {
        id: "uba",
        institution: "University of Buenos Aires",
        department: "Department of Computer Science, School of Exact and Natural Sciences",
        roles: [
          { title: "Professor", details: "Machine Learning & Deep Learning (8 semesters), Algorithms and Data Structures II (2 semesters)." },
          { title: "Head of TAs", details: "Machine Learning, Algorithms and Data Structures I, Algebra I, Programming Languages Paradigms (10 semesters total)." },
          { title: "First-Class Teaching Assistant", details: "Algebra I, Programming Languages Paradigms (6 semesters)." },
          { title: "Teaching Assistant", details: "Programming Languages Paradigms, Numerical Methods, Algorithms and Data Structures I (7 semesters)." }
        ]
      },
      {
        id: "utdt",
        institution: "Torcuato Di Tella University",
        department: "Master in Management + Analytics, Escuela de Negocios",
        roles: [
          { title: "Professor", period: "2022", details: "Introduction to Data Processing in R (Intensive course)." },
          { title: "Professor", period: "2022", details: "Introduction to Programming in R (Intensive course)." },
          { title: "Professor", period: "2021", details: "Introduction to Data Processing in R (Intensive course)." }
        ]
      }
    ],
    management: [
      {
        id: "m1",
        role: "Director of the Computer Science Degree Program",
        institution: "University of Buenos Aires",
        period: "2024 - Present",
        description: "Lead curriculum modernization and represent faculty in governance committees."
      },
      {
        id: "m2",
        role: "Professor Representative on the Curriculum Committee",
        institution: "University of Buenos Aires",
        period: "2021 - Present",
        description: "Responsible for implementing the curriculum change for the Bachelor's Degree in Computer Science."
      },
      {
        id: "m3",
        role: "Graduate Representative on the Curriculum Committee",
        institution: "University of Buenos Aires",
        period: "2018 - 2021",
        description: "Responsible for the curriculum change for the Bachelor's Degree."
      },
      {
        id: "m4",
        role: "Graduate Representative on the Department Council",
        institution: "University of Buenos Aires",
        period: "2018 - 2019",
        description: "Department of Computer Science, Faculty of Exact and Natural Sciences."
      },
      {
        id: "m5",
        role: "Evaluation Committee Representative",
        institution: "University of Buenos Aires",
        period: "2017",
        description: "Responsible for the evaluation of the current curriculum of the Bachelor's Degree in Computer Science."
      },
      {
        id: "m6",
        role: "Organizer of outreach talks",
        institution: "University of Buenos Aires",
        period: "2015 - 2018",
        description: "Talks for high-school students to encourage them to pursue a CS-related degree."
      },
      {
        id: "m7",
        role: "Organizer",
        institution: "University of Buenos Aires",
        period: "2015",
        description: "Computer Science Week 2015."
      }
    ],
    supervision: [
      { id: "s1", student: "Tomás Ravel", thesis: "Turn-taking classification in human-human conversations using LLMs", year: "Jul 2025", role: "Advisor" },
      { id: "s2", student: "Sofía Goldberg", thesis: "Application of BERT embeddings for automatic Alzheimer's detection", year: "May 2025", role: "Advisor", coAdvisor: "Lara Gauder" },
      { id: "s3", student: "Jonathan Scherman", thesis: "Lexical and syntactic inclusion in models of offline tagging of shift transitions", year: "Aug 2024", role: "Advisor" },
      { id: "s4", student: "Cecilia Bolaños", thesis: "Similarity analysis between audio and text representations for words", year: "Jul 2024", role: "Advisor", coAdvisor: "Leonardo Pepino" },
      { id: "s5", student: "Sebastián Sicardi", thesis: "Application of Convolutional Neural Networks to the Turn-Taking Problem Using Spectrograms", year: "Oct 2020", role: "Advisor", coAdvisor: "Pablo Riera" },
      { id: "s6", student: "Martín Caravario", thesis: "Machine Learning Based on Small Data in EEG Signal Processing", year: "Aug 2018", role: "Advisor", coAdvisor: "Laura Kaczer" },
      { id: "s7", student: "Gabriel Defagot", thesis: "Topic Modeling for Acoustic Scene Recognition: Combining T-SNE & Latent Dirichlet Allocation", year: "Mar 2018", role: "Advisor", coAdvisor: "Pablo Riera" },
      { id: "s8", student: "Alejandro Daniel Masseroli", thesis: "Information Extraction Through Subtitles Classification", year: "Dec 2016", role: "Advisor", coAdvisor: "Edgar Altszyler" }
    ],
    conferences: CONFERENCES_DATA,
    labels: {
      nav: {
        about: "About",
        experience: "Experience",
        research: "Research",
        teaching: "Teaching"
      },
      home: {
        location: "Buenos Aires, Argentina",
        highlights: "Current Highlights",
        role_noredink_title: "Senior Data Scientist",
        role_noredink_desc: "Full Stack ML & Analytics.",
        role_uba_title: "Director & Professor",
        role_uba_desc: "Director of the Computer Science Degree Program and Tenure Professor for Machine Learning & Deep Learning.",
        links: {
          linkedin: "LinkedIn",
          scholar: "Google Scholar",
          authorities: "UBA Authorities"
        }
      },
      experience: {
        industry_title: "Industry Experience",
        education_title: "Education",
        thesis_label: "Thesis",
        advisor_label: "Advisors"
      },
      research: {
        title: "Research",
        subtitle: "Selected publications, patents, and datasets.",
        journals: "Journal Publications",
        conferences: "Peer-reviewed Conference Publications",
        other: "Patents & Datasets"
      },
      teaching: {
        management_title: "Management Activities",
        teaching_title: "Teaching Experience",
        supervision_title: "Student Supervision (Master's / Degree Thesis)",
        conferences_title: "Conference Participation",
        coadvisor_label: "Co-advisor"
      },
      footer: {
        rights: "All rights reserved."
      }
    }
  },
  es: {
    profile: {
      ...SHARED_LINKS,
      name: "Pablo Brusco",
      title: "Investigador en Machine Learning y Habla",
      location: "Buenos Aires, Argentina",
      summary: "Investigador en Machine Learning y Habla con más de 10 años de experiencia. Científico de Datos Senior en NoRedInk (Full Stack ML & Analytics). Anteriormente Investigador Científico Staff en ASAPP liderando sistemas de diálogo conscientes de voz y ASR. Profesor Regular Parcial y Director de la Carrera de Ciencias de la Computación en la Universidad de Buenos Aires."
    },
    experience: [
      {
        id: "e0",
        role: "Científico de Datos Senior (Full Stack ML & Analytics)",
        company: "NoRedInk",
        period: "Dic 2025 – Actualidad",
        achievements: [
          "Comenzando nuevo rol enfocado en Machine Learning Full Stack y Analytics."
        ]
      },
      {
        id: "e1",
        role: "Investigador Científico Staff",
        company: "ASAPP Inc",
        period: "May 2022 – Nov 2025",
        achievements: [
          "Diseño e implementación de un marco de evaluación para APIs de voz en tiempo real, incluyendo sistemas en cascada tradicionales y speech-LLMs multimodales. Evaluación de robustez al ruido, latencia y naturalidad.",
          "Liderazgo del desarrollo de un sistema de diálogo consciente de la voz, enfocado en el módulo de orquestación de turnos para conversaciones humano-IA naturales.",
          "Mejora de la simulación de conversaciones utilizando LLMs para crear diálogos naturales, llamadas a API y objetivos de usuario. Reducción del tiempo de onboarding de desarrolladores de semanas a días.",
          "Refactorización de datasets de entrenamiento y framework para mejorar la eficiencia del desarrollo de modelos y permitir el despliegue fluido en clusters de GPU.",
          "Automatización de un pipeline para convertir datos de audio crudos en datos estructurados para entrenamiento, reduciendo el tiempo de onboarding de >3 meses a 1.5 semanas.",
          "Liderazgo del desarrollo del primer modelo ASR en español de la compañía, logrando precisión de grado de producción para clientes existentes."
        ]
      },
      {
        id: "e2",
        role: "Investigador Científico Líder",
        company: "ASAPP Inc",
        period: "Abr 2020 – May 2022",
        achievements: [
          "I+D de clasificadores de sentimientos basados en audio y texto (ver Patente).",
          "Transición de modelos de capitalización/puntuación basados en FST a modelos neuronales.",
          "Mejora de la normalización inversa de texto basada en reglas.",
          "Construcción de pipelines de evaluación estandarizados para asegurar una comparación justa de modelos contra APIs de la competencia.",
          "Mejora del rendimiento de modelos genéricos mediante la integración de diversas fuentes de datos."
        ]
      },
      {
        id: "e3",
        role: "International Fellow",
        company: "SRI International, STAR Lab",
        location: "Palo Alto, CA",
        period: "Dic 2018 – Mar 2019",
        achievements: [
          "Contribución a la construcción de modelos estadísticos para la detección de fin de turno en sistemas de diálogo hablado utilizando RNNs.",
          "Desarrollo de un framework para introducir predicados de lógica de primer orden en redes neuronales."
        ]
      },
      {
        id: "e5",
        role: "Asociado Estudiantil",
        company: "SRI International, STAR Lab",
        location: "Palo Alto, CA",
        period: "Sep 2016 – Dic 2016",
        achievements: [
          "Contribución a la construcción de un sistema de detección de tos para un Asistente Virtual de Salud mediante la recolección de corpus y desarrollo de modelos de ML.",
          "Participación en investigación sobre detección de eventos raros utilizando técnicas de modelado de tópicos (LDA) para señales acústicas."
        ]
      },
      {
        id: "e6",
        role: "Desarrollador de Software",
        company: "Manas Technology Solutions",
        period: "Jun 2010 – Nov 2013",
        achievements: [
          "Desarrollador end-to-end de aplicaciones web enriquecidas para objetivos sociales y humanitarios.",
          "Líder de Proyecto para varios proyectos de software en Phnom Penh, Camboya (2013).",
          "Proyectos destacados incluyen ResourceMap, un sistema para rastrear trabajo y recursos geográficamente."
        ]
      }
    ],
    education: [
      {
        id: "phd",
        degree: "Doctorado en Ciencias de la Computación",
        institution: "Universidad de Buenos Aires",
        year: "Marzo 2021",
        thesis: "Estudio translingüístico de las señales de toma de turnos en diálogos hablados (métodos de ML para modelado de secuencias)",
        advisors: "Agustín Gravano",
        scholarship: "Beca Doctoral CONICET (Abril 2015 - Marzo 2021): Reconocimiento de Patrones sobre Series Temporales"
      },
      {
        id: "lic",
        degree: "Licenciatura en Ciencias de la Computación",
        institution: "Universidad de Buenos Aires",
        year: "Junio 2014",
        details: "(Equivalente aproximado a B.S. + M.S. en Computer Science)",
        thesis: "Detección de palabras clave en lenguajes sin datos de entrenamiento previos",
        advisors: "Luciana Ferrer, Agustín Gravano"
      }
    ],
    publications: PUBLICATIONS_DATA,
    teaching: [
      {
        id: "uba",
        institution: "Universidad de Buenos Aires",
        department: "Departamento de Computación, Facultad de Ciencias Exactas y Naturales",
        roles: [
          { title: "Profesor", details: "Machine Learning & Deep Learning (8 cuatrimestres), Algoritmos y Estructuras de Datos II (2 cuatrimestres)." },
          { title: "Jefe de Trabajos Prácticos", details: "Machine Learning, Algoritmos y Estructuras de Datos I, Álgebra I, Paradigmas de Lenguajes de Programación (10 cuatrimestres total)." },
          { title: "Ayudante de Primera", details: "Álgebra I, Paradigmas de Lenguajes de Programación (6 cuatrimestres)." },
          { title: "Ayudante de Segunda", details: "Paradigmas de Lenguajes de Programación, Métodos Numéricos, Algoritmos y Estructuras de Datos I (7 cuatrimestres)." }
        ]
      },
      {
        id: "utdt",
        institution: "Universidad Torcuato Di Tella",
        department: "Master in Management + Analytics, Escuela de Negocios",
        roles: [
          { title: "Profesor", period: "2022", details: "Introducción al Procesamiento de Datos en R (Curso intensivo)." },
          { title: "Profesor", period: "2022", details: "Introducción a la Programación en R (Curso intensivo)." },
          { title: "Profesor", period: "2021", details: "Introducción al Procesamiento de Datos en R (Curso intensivo)." }
        ]
      }
    ],
    supervision: [
      { id: "s1", student: "Tomás Ravel", thesis: "Clasificación de toma de turnos en conversaciones humano-humano usando LLMs", year: "Jul 2025", role: "Director" },
      { id: "s2", student: "Sofía Goldberg", thesis: "Aplicación de embeddings BERT para la detección automática de Alzheimer", year: "May 2025", role: "Director", coAdvisor: "Lara Gauder" },
      { id: "s3", student: "Jonathan Scherman", thesis: "Inclusión léxica y sintáctica en modelos de etiquetado offline de transiciones de turno", year: "Ago 2024", role: "Director" },
      { id: "s4", student: "Cecilia Bolaños", thesis: "Análisis de similitud entre representaciones de audio y texto para palabras", year: "Jul 2024", role: "Director", coAdvisor: "Leonardo Pepino" },
      { id: "s5", student: "Sebastián Sicardi", thesis: "Aplicación de Redes Neuronales Convolucionales al Problema de Toma de Turnos usando Espectrogramas", year: "Oct 2020", role: "Director", coAdvisor: "Pablo Riera" },
      { id: "s6", student: "Martín Caravario", thesis: "Machine Learning Basado en Small Data en Procesamiento de Señales EEG", year: "Ago 2018", role: "Director", coAdvisor: "Laura Kaczer" },
      { id: "s7", student: "Gabriel Defagot", thesis: "Modelado de Tópicos para Reconocimiento de Escenas Acústicas: Combinando T-SNE & Latent Dirichlet Allocation", year: "Mar 2018", role: "Director", coAdvisor: "Pablo Riera" },
      { id: "s8", student: "Alejandro Daniel Masseroli", thesis: "Extracción de Información a través de Clasificación de Subtítulos", year: "Dic 2016", role: "Director", coAdvisor: "Edgar Altszyler" }
    ],
    management: [
      {
        id: "m1",
        role: "Director de la Carrera de Ciencias de la Computación",
        institution: "Universidad de Buenos Aires",
        period: "2024 - Presente",
        description: "Liderazgo en la modernización del plan de estudios y representación del claustro en comisiones de gobierno."
      },
      {
        id: "m2",
        role: "Representante de Profesores en la Comisión Curricular",
        institution: "Universidad de Buenos Aires",
        period: "2021 - Presente",
        description: "Responsable de la implementación del cambio de plan de estudios para la Licenciatura en Ciencias de la Computación."
      },
      {
        id: "m3",
        role: "Representante de Graduados en la Comisión Curricular",
        institution: "Universidad de Buenos Aires",
        period: "2018 - 2021",
        description: "Responsable del cambio de plan de estudios para la Licenciatura."
      },
      {
        id: "m4",
        role: "Representante de Graduados en el Consejo Departamental",
        institution: "Universidad de Buenos Aires",
        period: "2018 - 2019",
        description: "Departamento de Computación, Facultad de Ciencias Exactas y Naturales."
      },
      {
        id: "m5",
        role: "Representante en la Comisión de Evaluación",
        institution: "Universidad de Buenos Aires",
        period: "2017",
        description: "Responsable de la evaluación del plan de estudios actual de la Licenciatura en Ciencias de la Computación."
      },
      {
        id: "m6",
        role: "Organizador de charlas de divulgación",
        institution: "Universidad de Buenos Aires",
        period: "2015 - 2018",
        description: "Charlas para estudiantes de secundaria para fomentar el estudio de carreras relacionadas con CS."
      },
      {
        id: "m7",
        role: "Organizador",
        institution: "Universidad de Buenos Aires",
        period: "2015",
        description: "Semana de la Computación 2015."
      }
    ],
    conferences: CONFERENCES_DATA,
    labels: {
      nav: {
        about: "Sobre mí",
        experience: "Experiencia",
        research: "Investigación",
        teaching: "Docencia"
      },
      home: {
        location: "Buenos Aires, Argentina",
        highlights: "Destacados Actuales",
        role_noredink_title: "Científico de Datos Senior",
        role_noredink_desc: "Full Stack ML & Analytics.",
        role_uba_title: "Profesor y Director de Carrera",
        role_uba_desc: "Profesor Regular y Director de la Carrera de Ciencias de la Computación",
        links: {
          linkedin: "LinkedIn",
          scholar: "Google Scholar",
          authorities: "Autoridades UBA"
        }
      },
      experience: {
        industry_title: "Experiencia en la Industria",
        education_title: "Educación",
        thesis_label: "Tesis",
        advisor_label: "Directores"
      },
      research: {
        title: "Investigación",
        subtitle: "Publicaciones, patentes y datasets seleccionados.",
        journals: "Publicaciones en Revistas",
        conferences: "Publicaciones en Conferencias con Referato",
        other: "Patentes y Sets de Datos"
      },
      teaching: {
        management_title: "Gestión Académica",
        teaching_title: "Experiencia Docente",
        supervision_title: "Dirección de Tesis (Licenciatura)",
        conferences_title: "Participación en Conferencias",
        coadvisor_label: "Co-director"
      },
      footer: {
        rights: "Todos los derechos reservados."
      }
    }
  }
};
