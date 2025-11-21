
export type Language = 'en' | 'es';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description?: string;
  achievements: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  thesis?: string;
  advisors?: string;
  details?: string;
  scholarship?: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
  type: 'journal' | 'conference' | 'patent' | 'dataset';
}

export interface TeachingItem {
  id: string;
  institution: string;
  department?: string;
  roles: {
    title: string;
    period?: string;
    details?: string;
  }[];
}

export interface ManagementItem {
  id: string;
  role: string;
  institution: string;
  period: string;
  description: string;
}

export interface SupervisionItem {
  id: string;
  student: string;
  thesis: string;
  year: string;
  role: string;
  coAdvisor?: string;
}

export interface ConferenceItem {
  id: string;
  name: string;
  location?: string;
  date: string;
}

export interface UILabels {
  nav: {
    about: string;
    experience: string;
    research: string;
    teaching: string;
  };
  home: {
    location: string;
    highlights: string;
    role_noredink_title: string;
    role_noredink_desc: string;
    role_uba_title: string;
    role_uba_desc: string;
    links: {
      linkedin: string;
      scholar: string;
      authorities: string;
    };
  };
  experience: {
    industry_title: string;
    education_title: string;
    thesis_label: string;
    advisor_label: string;
  };
  research: {
    title: string;
    subtitle: string;
    journals: string;
    conferences: string;
    other: string;
  };
  teaching: {
    management_title: string;
    teaching_title: string;
    supervision_title: string;
    conferences_title: string;
    coadvisor_label: string;
  };
  footer: {
    rights: string;
  };
}

export interface SiteData {
  profile: {
    name: string;
    title: string;
    location: string;
    email: string;
    linkedin: string;
    scholar: string;
    university: string;
    image: string;
    summary: string;
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  publications: PublicationItem[];
  teaching: TeachingItem[];
  management: ManagementItem[];
  supervision: SupervisionItem[];
  conferences: ConferenceItem[];
  labels: UILabels;
}

export enum PageRoute {
  HOME = '/',
  EXPERIENCE = '/experience',
  RESEARCH = '/research',
  TEACHING = '/teaching',
}
