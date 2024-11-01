import { NavbarSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'My Travel Diary', url: '/#Activity' }, // what i do
    // { name: 'skills', url: '/#skills' },
    // { name: 'experience', url: '/#experience' },
    { name: 'My Businesses', url: '/#projects' }, // projects
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};
