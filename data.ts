
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
    venue: "ICASSP 2022",
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
    venue: "CONICET",
    year: "2023"
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
      summary: "Machine Learning & Speech Researcher with 10+ years of experience. Data Scientist at NoRedInk. Previously Research Scientist at ASAPP leading voice-aware dialog systems and ASR. Part-time Tenure Professor and Director of the Computer Science Degree Program at the University of Buenos Aires."
    },
    experience: [
      {
        id: "e0",
        role: "Data Scientist",
        company: "NoRedInk",
        period: "Dec 2025 – Current",
        description: "Focus on Full Stack Machine Learning and Analytics."
      },
      {
        id: "e1",
        role: "Research Scientist",
        company: "ASAPP Inc",
        period: "Apr 2020 – Nov 2025",
        description: "Development of voice-aware dialog systems and production-grade Spanish ASR models. Design of evaluation frameworks for real-time Voice APIs and automation of data pipelines. R&D in the field of speech processing."
      },
      {
        id: "e3",
        role: "International Fellow",
        company: "SRI International, STAR Lab",
        location: "Palo Alto, CA",
        period: "Dec 2018 – Mar 2019",
        description: "Construction of statistical models for end-of-turn detection in spoken dialogue systems using RNNs. Development of a framework for introducing first-order logic predicates into neural networks."
      },
      {
        id: "e5",
        role: "Student Associate",
        company: "SRI International, STAR Lab",
        location: "Palo Alto, CA",
        period: "Sep 2016 – Dec 2016",
        description: "Development of ML models for a cough detection system in a Health Virtual Assistant. Research on rare event detection using acoustic topic modeling."
      },
      {
        id: "e6",
        role: "Software Developer",
        company: "Manas Technology Solutions",
        period: "Jun 2010 – Nov 2013",
        description: "End-to-end development of rich web applications for social and humanitarian goals."
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
        links: [{ label: "Student surveys (until 2022)", url: "https://encuestas-finales.exactas.uba.ar/doc/d8127.html" }],
        roles: [
          {
            title: "Professor (8 semesters)",
            courses: [
              { name: "Machine Learning & Deep Learning", periods: "2025-2C, 2025-1C, 2024-2, 2024-1, 2023-2, 2023-1" },
              { name: "Algorithms and Data Structures II", periods: "2022-2, 2022-1" }
            ]
          },
          {
            title: "Head of TAs (10 semesters)",
            courses: [
              { name: "Machine Learning", periods: "2018-2" },
              { name: "Algorithms and Data Structures I", periods: "2021-1, 2020-2, 2019-2, 2019-1, 2018-1, 2017-2" },
              { name: "Algebra I", periods: "2017-1" },
              { name: "Programming Languages Paradigms", periods: "2016-1, 2014-2" }
            ]
          },
          {
            title: "First-Class Teaching Assistant (6 semesters)",
            courses: [
              { name: "Algebra I", periods: "2015-2, 2015-summer, 2014-2, 2013-2" },
              { name: "Programming Languages Paradigms", periods: "2015-1, 2014-1" }
            ]
          },
          {
            title: "Teaching Assistant (7 semesters)",
            courses: [
              { name: "Programming Languages Paradigms", periods: "2013-2, 2013-1, 2012-2, 2012-1" },
              { name: "Numerical Methods", periods: "2011-2" },
              { name: "Algorithms and Data Structures I", periods: "2011-2, 2011-1" }
            ]
          }
        ]
      },
      {
        id: "utdt",
        institution: "Torcuato Di Tella University",
        department: "Master in Management + Analytics, Escuela de Negocios",
        roles: [
          {
            title: "Professor",
            courses: [
              { name: "Introduction to Data Processing in R", periods: "2021-1 (Intensive, 8 lessons)" },
              { name: "Introduction to Programming in R", periods: "2022-1 (Intensive, 4 lessons)" },
              { name: "Introduction to Data Processing in R", periods: "2022-1 (Intensive, 4 lessons)" }
            ]
          }
        ]
      },
    ],
    management: [
      {
        id: "m1",
        role: "Director of the Computer Science Degree Program",
        institution: "University of Buenos Aires",
        period: "2024 - Present"
      },
      {
        id: "m2",
        role: "Professor Representative on the Curriculum Committee",
        institution: "University of Buenos Aires",
        period: "2021 - Present"
      },
      {
        id: "m3",
        role: "Graduate Representative on the Curriculum Committee",
        institution: "University of Buenos Aires",
        period: "2018 - 2021"
      },
      {
        id: "m4",
        role: "Graduate Representative on the Department Council",
        institution: "University of Buenos Aires",
        period: "2018 - 2019"
      },
      {
        id: "m5",
        role: "Evaluation Committee Representative",
        institution: "University of Buenos Aires",
        period: "2017"
      },
      {
        id: "m6",
        role: "Organizer of outreach talks",
        institution: "University of Buenos Aires",
        period: "2015 - 2018"
      },
      {
        id: "m7",
        role: "Organizer",
        institution: "University of Buenos Aires",
        period: "2015"
      }
    ],
    supervision: [
      { id: "s0", student: "Sofía Roitman", thesis: "Optical Music Recognition with Visual LLMs: Zero-Shot Analysis on Monophonic Scores", year: "Dec 2025", role: "Advisor", coAdvisor: "Pablo Riera" },
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
        teaching: "Teaching",
        management: "Management"
      },
      home: {
        location: "Buenos Aires, Argentina",
        highlights: "Current Highlights",
        role_noredink_title: "Data Scientist",
        role_noredink_desc: "",
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
        other: "Patents & Datasets",
        participation_title: "Conference Participation"
      },
      teaching: {
        teaching_title: "Teaching Experience",
        supervision_title: "Student Supervision (Master's / Degree Thesis)",
        coadvisor_label: "Co-advisor"
      },
      management: {
        title: "Management Activities"
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
      summary: "Investigador en Machine Learning y Habla con más de 10 años de experiencia. Científico de Datos en NoRedInk. Anteriormente Investigador Científico Staff en ASAPP liderando sistemas de diálogo. Profesor Regular Parcial y Director de la Carrera de Ciencias de la Computación en la Universidad de Buenos Aires."
    },
    experience: [
      {
        id: "e0",
        role: "Científico de Datos",
        company: "NoRedInk",
        period: "Dic 2025 – Actualidad",
        description: "Rol enfocado en Machine Learning Full Stack y Analytics."
      },
      {
        id: "e1",
        role: "Investigador Científico",
        company: "ASAPP Inc",
        period: "Abr 2020 – Nov 2025",
        description: "Desarrollo de sistemas de diálogo conscientes de la voz y modelos de ASR en español para producción. Diseño de marcos de evaluación para APIs de voz en tiempo real y automatización de pipelines de datos. I+D en problemas del mundo del procesamiento del habla."
      },
      {
        id: "e3",
        role: "International Fellow",
        company: "SRI International, STAR Lab",
        location: "Palo Alto, CA",
        period: "Dic 2018 – Mar 2019",
        description: "Construcción de modelos estadísticos para la detección de fin de turno en sistemas de diálogo usando RNNs. Desarrollo de un framework para introducir predicados lógicos de primer orden en redes neuronales."
      },
      {
        id: "e5",
        role: "Asociado Estudiantil",
        company: "SRI International, STAR Lab",
        location: "Palo Alto, CA",
        period: "Sep 2016 – Dic 2016",
        description: "Desarrollo de modelos de ML para un sistema de detección de tos en un Asistente Virtual de Salud. Investigación sobre la detección de eventos raros usando técnicas de modelado de tópicos."
      },
      {
        id: "e6",
        role: "Desarrollador de Software",
        company: "Manas Technology Solutions",
        period: "Jun 2010 – Nov 2013",
        description: "Desarrollo full-stack de aplicaciones web con objetivos humanitarios."
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
        links: [{ label: "Encuestas estudiantiles (hasta 2022)", url: "https://encuestas-finales.exactas.uba.ar/doc/d8127.html" }],
        roles: [
          {
            title: "Profesor (8 cuatrimestres)",
            courses: [
              { name: "Machine Learning & Deep Learning", periods: "2025-2C, 2025-1C, 2024-2, 2024-1, 2023-2, 2023-1" },
              { name: "Algoritmos y Estructuras de Datos II", periods: "2022-2, 2022-1" }
            ]
          },
          {
            title: "Jefe de Trabajos Prácticos (10 cuatrimestres)",
            courses: [
              { name: "Machine Learning", periods: "2018-2" },
              { name: "Algoritmos y Estructuras de Datos I", periods: "2021-1, 2020-2, 2019-2, 2019-1, 2018-1, 2017-2" },
              { name: "Álgebra I", periods: "2017-1" },
              { name: "Paradigmas de Lenguajes de Programación", periods: "2016-1, 2014-2" }
            ]
          },
          {
            title: "Ayudante de Primera (6 cuatrimestres)",
            courses: [
              { name: "Álgebra I", periods: "2015-2, 2015-verano, 2014-2, 2013-2" },
              { name: "Paradigmas de Lenguajes de Programación", periods: "2015-1, 2014-1" }
            ]
          },
          {
            title: "Ayudante de Segunda (7 cuatrimestres)",
            courses: [
              { name: "Paradigmas de Lenguajes de Programación", periods: "2013-2, 2013-1, 2012-2, 2012-1" },
              { name: "Métodos Numéricos", periods: "2011-2" },
              { name: "Algoritmos y Estructuras de Datos I", periods: "2011-2, 2011-1" }
            ]
          }
        ]
      },
      {
        id: "utdt",
        institution: "Universidad Torcuato Di Tella",
        department: "Master in Management + Analytics, Escuela de Negocios",
        roles: [
          {
            title: "Profesor",
            courses: [
              { name: "Introducción al Procesamiento de Datos en R", periods: "2021-1 (Intensivo, 8 clases)" },
              { name: "Introducción a la Programación en R", periods: "2022-1 (Intensivo, 4 clases)" },
              { name: "Introducción al Procesamiento de Datos en R", periods: "2022-1 (Intensivo, 4 clases)" }
            ]
          }
        ]
      }
    ],
    supervision: [
      { id: "s0", student: "Sofía Roitman", thesis: "Reconocimiento Óptico de Música con Visual LLMs: Análisis Zero-Shot en Partituras Monofónicas", year: "Dic 2025", role: "Director", coAdvisor: "Pablo Riera" },
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
        period: "2024 - Presente"
      },
      {
        id: "m2",
        role: "Representante de Profesores en la Comisión Curricular",
        institution: "Universidad de Buenos Aires",
        period: "2021 - Presente"
      },
      {
        id: "m3",
        role: "Representante de Graduados en la Comisión Curricular",
        institution: "Universidad de Buenos Aires",
        period: "2018 - 2021"
      },
      {
        id: "m4",
        role: "Representante de Graduados en el Consejo Departamental",
        institution: "Universidad de Buenos Aires",
        period: "2018 - 2019"
      },
      {
        id: "m5",
        role: "Representante en la Comisión de Evaluación",
        institution: "Universidad de Buenos Aires",
        period: "2017"
      },
      {
        id: "m6",
        role: "Organizador de charlas de divulgación",
        institution: "Universidad de Buenos Aires",
        period: "2015 - 2018"
      },
      {
        id: "m7",
        role: "Organizador",
        institution: "Universidad de Buenos Aires",
        period: "2015"
      }
    ],
    conferences: CONFERENCES_DATA,
    labels: {
      nav: {
        about: "Sobre mí",
        experience: "Experiencia",
        research: "Investigación",
        teaching: "Docencia",
        management: "Gestión"
      },
      home: {
        location: "Buenos Aires, Argentina",
        highlights: "Destacados Actuales",
        role_noredink_title: "Científico de Datos",
        role_noredink_desc: "",
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
        other: "Patentes y Sets de Datos",
        participation_title: "Participación en Conferencias"
      },
      teaching: {
        teaching_title: "Experiencia Docente",
        supervision_title: "Dirección de Tesis (Licenciatura)",
        coadvisor_label: "Co-director"
      },
      management: {
        title: "Gestión Académica"
      },
      footer: {
        rights: "Todos los derechos reservados."
      }
    }
  }
};
