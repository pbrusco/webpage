
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, GraduationCap, MapPin, BookOpen, Users, ExternalLink, Briefcase, School, Award, UserCheck, Calendar, Globe } from 'lucide-react';
import { APP_DATA } from './data';
import { PublicationItem, Language, SiteData } from './types';

// --- Components ---

const NavBar: React.FC<{ lang: Language; setLang: (l: Language) => void; data: SiteData }> = ({ lang, setLang, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { nav } = data.labels;

  const navLinks = [
    { name: nav.about, path: '/' },
    { name: nav.experience, path: '/experience' },
    { name: nav.research, path: '/research' },
    { name: nav.teaching, path: '/teaching' },
    { name: nav.management, path: '/management' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleLang = () => {
    setLang(lang === 'en' ? 'es' : 'en');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-serif font-bold text-slate-900 truncate mr-4">
              Pablo Brusco
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={toggleLang}
              className="ml-4 flex items-center px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-sm font-medium text-slate-700"
              aria-label="Toggle Language"
            >
              <Globe size={16} className="mr-2 text-slate-500" />
              {lang === 'en' ? 'Español' : 'English'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
             <button 
              onClick={toggleLang}
              className="mr-4 flex items-center px-2 py-1 rounded bg-slate-100 text-xs font-medium text-slate-700"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC<{ text: string; name: string }> = ({ text, name }) => (
  <footer className="bg-slate-50 border-t border-slate-200 py-8 mt-auto">
    <div className="max-w-6xl mx-auto px-4 text-center text-slate-500 text-sm">
      <p>&copy; {new Date().getFullYear()} {name}. {text}</p>
    </div>
  </footer>
);

// --- Pages ---

const HomePage: React.FC<{ data: SiteData }> = ({ data }) => {
  const { home } = data.labels;
  const { profile } = data;
  return (
    <div className="animate-fade-in">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="shrink-0">
            <img 
              src={profile.image} 
              alt={profile.name}
              className="w-48 h-48 md:w-64 md:h-64 rounded-lg shadow-xl object-cover hover:opacity-95 transition-opacity duration-500"
            />
          </div>
          
          <div className="space-y-6 text-center md:text-left">
            <div>
              <h1 className="text-4xl font-serif font-bold text-slate-900 mb-2">{profile.name}</h1>
              <h2 className="text-lg text-blue-700 font-medium mb-1">{profile.title}</h2>
              <div className="flex items-center justify-center md:justify-start text-slate-500 text-sm gap-2">
                <MapPin size={16} />
                <span>{profile.location}</span>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed text-lg">
              {profile.summary}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <a 
                href={profile.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors shadow-sm text-sm font-medium"
              >
                <Linkedin size={18} className="mr-2" />
                {home.links.linkedin}
              </a>
              <a 
                href={profile.scholar} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 transition-colors shadow-sm text-sm font-medium"
              >
                <GraduationCap size={18} className="mr-2" />
                {home.links.scholar}
              </a>
              <a 
                href={profile.university} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 transition-colors shadow-sm text-sm font-medium"
              >
                <ExternalLink size={18} className="mr-2" />
                {home.links.authorities}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-100 pt-10">
          <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">{home.highlights}</h3>
          <div className="grid gap-6 md:grid-cols-2">
             <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                  <Briefcase size={20} className="mr-2 text-blue-600"/> {home.role_noredink_title}
                </h4>
                <p className="text-sm text-slate-600 mb-2">NoRedInk</p>
                {home.role_noredink_desc && <p className="text-sm text-slate-500">{home.role_noredink_desc}</p>}
             </div>
             <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                   <School size={20} className="mr-2 text-blue-600"/> {home.role_uba_title}
                </h4>
                <p className="text-sm text-slate-600 mb-2">University of Buenos Aires</p>
                <p className="text-sm text-slate-500">{home.role_uba_desc}</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperiencePage: React.FC<{ data: SiteData }> = ({ data }) => {
  const { experience } = data.labels;
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 border-b pb-4">{experience.industry_title}</h2>
      <div className="space-y-12">
        {data.experience.map((exp) => (
          <div key={exp.id} className="relative pl-8 border-l-2 border-slate-200">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
            <div className="mb-2">
              <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between text-slate-600 mt-1">
                <span className="font-medium text-blue-700">{exp.company}</span>
                <span className="text-sm font-mono">{exp.period}</span>
              </div>
              {exp.location && <span className="text-xs text-slate-400 block mt-1">{exp.location}</span>}
            </div>
            <p className="mt-4 text-slate-700 text-sm leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 mt-16 border-b pb-4">{experience.education_title}</h2>
      <div className="space-y-8">
        {data.education.map((edu) => (
           <div key={edu.id} className="bg-slate-50 p-6 rounded-lg border border-slate-100">
             <div className="flex justify-between items-start mb-2">
               <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
               <span className="text-sm font-mono bg-slate-200 px-2 py-1 rounded text-slate-700">{edu.year}</span>
             </div>
             <p className="text-blue-700 font-medium">{edu.institution}</p>
             {edu.details && <p className="text-xs text-slate-500 mt-1 italic">{edu.details}</p>}
             <div className="mt-3 text-sm text-slate-700">
                <p><span className="font-semibold">{experience.thesis_label}:</span> {edu.thesis}</p>
                {edu.advisors && <p className="mt-1 text-slate-600"><span className="font-semibold">{experience.advisor_label}:</span> {edu.advisors}</p>}
             </div>
             {edu.scholarship && (
                 <div className="mt-3 pt-3 border-t border-slate-200 text-sm text-slate-600 flex items-start">
                    <Award size={16} className="shrink-0 mt-1 mr-2 text-amber-500"/>
                    <span>{edu.scholarship}</span>
                 </div>
             )}
           </div>
        ))}
      </div>
    </div>
  );
};

const PublicationEntry: React.FC<{ item: PublicationItem }> = ({ item }) => (
  <div className="mb-6">
    <h4 className="text-md font-semibold text-slate-900">{item.title}</h4>
    <p className="text-slate-600 text-sm mt-1">{item.authors}</p>
    <div className="flex items-center mt-2 text-xs font-mono text-blue-600">
      <span className="bg-blue-50 px-2 py-0.5 rounded border border-blue-100 uppercase tracking-wide">
        {item.venue}
      </span>
      <span className="ml-3 text-slate-400">{item.year}</span>
    </div>
  </div>
);

const ResearchPage: React.FC<{ data: SiteData }> = ({ data }) => {
  const { research } = data.labels;
  const journals = data.publications.filter(p => p.type === 'journal');
  const conferences = data.publications.filter(p => p.type === 'conference');
  const other = data.publications.filter(p => p.type === 'patent' || p.type === 'dataset');

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">{research.title}</h2>
      <p className="text-slate-600 mb-10">{research.subtitle}</p>

      <div className="space-y-12">
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center border-b pb-2">
            <BookOpen size={20} className="mr-2" /> {research.journals}
          </h3>
          <div className="bg-white">
             {journals.map(p => <PublicationEntry key={p.id} item={p} />)}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center border-b pb-2">
            <Users size={20} className="mr-2" /> {research.conferences}
          </h3>
          <div className="bg-white">
             {conferences.map(p => <PublicationEntry key={p.id} item={p} />)}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center border-b pb-2">
            <Briefcase size={20} className="mr-2" /> {research.other}
          </h3>
          <div className="bg-white">
             {other.map(p => <PublicationEntry key={p.id} item={p} />)}
          </div>
        </section>

        {/* Conferences Section (Moved from Teaching) */}
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center border-b pb-2">
             <Calendar size={20} className="mr-2" /> {research.participation_title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.conferences.map((conf) => (
              <div key={conf.id} className="bg-slate-50 p-4 rounded-lg border border-transparent hover:border-slate-200 transition-colors">
                <h4 className="font-semibold text-slate-900">{conf.name}</h4>
                <div className="flex justify-between items-end mt-2">
                  <span className="text-xs text-slate-500 flex items-center">
                    <MapPin size={12} className="mr-1" /> {conf.location}
                  </span>
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {conf.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const TeachingPage: React.FC<{ data: SiteData }> = ({ data }) => {
  const { teaching } = data.labels;
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <div className="grid gap-16">
        
        {/* Teaching Section */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 border-b pb-3 flex items-center">
             <School size={24} className="mr-2 text-blue-600" /> {teaching.teaching_title}
          </h2>
          <div className="space-y-12">
             {data.teaching.map((item) => (
               <div key={item.id}>
                 <h3 className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3 mb-1">{item.institution}</h3>
                 {item.department && <p className="text-slate-500 text-sm mb-6 pl-4">{item.department}</p>}
                 
                 <div className="space-y-8 pl-4">
                   {item.roles.map((role, idx) => (
                     <div key={idx} className="relative border-l-2 border-slate-100 pl-6 pb-2">
                       <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-300"></div>
                       <h4 className="font-bold text-slate-800 text-md mb-3">{role.title}</h4>
                       <div className="space-y-3">
                         {role.courses.map((course, cIdx) => (
                           <div key={cIdx} className="bg-slate-50 p-3 rounded border border-slate-100">
                             <span className="font-semibold text-slate-900 block">{course.name}</span>
                             <span className="text-xs font-mono text-blue-600 mt-1 block">{course.periods}</span>
                             {course.details && <span className="text-xs text-slate-500 mt-1 block">{course.details}</span>}
                           </div>
                         ))}
                       </div>
                     </div>
                   ))}
                 </div>
                 
                 {item.links && item.links.length > 0 && (
                   <div className="mt-4 pl-4">
                     {item.links.map((link, lIdx) => (
                       <a 
                        key={lIdx} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 hover:underline"
                       >
                         <ExternalLink size={14} className="mr-1" />
                         {link.label}
                       </a>
                     ))}
                   </div>
                 )}
               </div>
             ))}
          </div>
        </section>

        {/* Mentorship Section */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 border-b pb-3 flex items-center">
             <UserCheck size={24} className="mr-2 text-blue-600" /> {teaching.supervision_title}
          </h2>
          <div className="overflow-hidden bg-white border border-slate-200 rounded-lg">
            {data.supervision.map((student, idx) => (
              <div key={student.id} className={`p-4 ${idx !== data.supervision.length - 1 ? 'border-b border-slate-100' : ''} hover:bg-slate-50 transition-colors`}>
                <div className="flex flex-col md:flex-row justify-between md:items-center">
                   <div className="md:flex-1">
                     <h4 className="font-bold text-slate-900">{student.student}</h4>
                     <p className="text-slate-600 text-sm mt-1 italic">"{student.thesis}"</p>
                     {student.coAdvisor && <p className="text-xs text-slate-400 mt-1">{teaching.coadvisor_label}: {student.coAdvisor}</p>}
                   </div>
                   <div className="mt-2 md:mt-0 flex items-center md:flex-col md:items-end gap-2">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{student.role}</span>
                      <span className="text-xs text-slate-500 font-mono">{student.year}</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const ManagementPage: React.FC<{ data: SiteData }> = ({ data }) => {
  const { management } = data.labels;
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <section>
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 border-b pb-3 flex items-center">
            <Briefcase size={24} className="mr-2 text-blue-600" /> {management.title}
          </h2>
          <div className="space-y-6">
            {data.management.map((item) => (
              <div key={item.id} className="border-l-4 border-slate-200 pl-4 py-1 hover:border-blue-400 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                  <h3 className="text-lg font-bold text-slate-900">{item.role}</h3>
                  <span className="text-sm font-mono text-slate-500 mt-1 md:mt-0">{item.period}</span>
                </div>
                <p className="text-blue-700 text-sm mt-1">{item.institution}</p>
              </div>
            ))}
          </div>
        </section>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const data = APP_DATA[lang];

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-white text-slate-800 font-sans">
        <NavBar lang={lang} setLang={setLang} data={data} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage data={data} />} />
            <Route path="/experience" element={<ExperiencePage data={data} />} />
            <Route path="/research" element={<ResearchPage data={data} />} />
            <Route path="/teaching" element={<TeachingPage data={data} />} />
            <Route path="/management" element={<ManagementPage data={data} />} />
          </Routes>
        </main>
        <Footer text={data.labels.footer.rights} name={data.profile.name} />
      </div>
    </HashRouter>
  );
}
