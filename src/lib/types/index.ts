export type NavLinkType = {
  name: string;
  url: string;
};

export type SocialLinkType = {
  icon: string;
  url: string;
};

export type CTAType = {
  title: string;
  url: string;
  sameTab?: boolean;
};

// env
export type ExperienceType = {
  role: string;
  company: string;
  companyUrl: string;
  started: Date | string;
  upto: Date | 'present' | string;
  tasks: string[];
};

export type ProjectType = {
  id: string;
  name: string;
  url: string;
  year: number;
  img: string;
  tags: string[];
  repo: string;
};

// Project Details

export interface Project {
  slug?: string;
  name: string;
  img: string;
  category?: string;
  tagline?: string;
  description?: string;
  tags?: string[];
  github?: string;
  featured?: boolean;
  launch_video?: string;
  url?: string;
}

export interface FeaturedProjectType
  extends Omit<ProjectType, 'year' | 'repo'> {
  description: string;
  repo?: string;
  tasks?: string | JSX.Element;
}

export type StringKeyValueType = {
  [link: string]: string;
};

export type Direction = 'up' | 'right' | 'down' | 'left';

export type SoftwareSkillType = {
  name: string;
  icon: string;
  iconEmoji: string;
};

export type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
