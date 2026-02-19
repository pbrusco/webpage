
export type Language = 'en' | 'es';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
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

export interface TeachingCourse {
  name: string;
  periods: string;
  details?: string;
}

export interface TeachingRole {
  title: string;
  courses: TeachingCourse[];
}

export interface TeachingItem {
  id: string;
  institution: string;
  department?: string;
  roles: TeachingRole[];
  links?: { label: string; url: string }[];
}

export interface ManagementItem {
  id: string;
  role: string;
  institution: string;
  period: string;
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
    management: string;
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
    full_list_prefix: string;
    full_list_link: string;
    journals: string;
    conferences: string;
    other: string;
    participation_title: string;
  };
  teaching: {
    teaching_title: string;
    supervision_title: string;
    coadvisor_label: string;
  };
  management: {
    title: string;
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
  MANAGEMENT = '/management',
}
