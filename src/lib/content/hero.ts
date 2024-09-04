import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, I am',
  title: 'Syed Ovais.',
  tagline: 'Entrepreneur and visionary businessman',
  description:
    "I'm a dedicated entrepreneur with extensive experience in building and managing successful businesses across various industries. He is skilled in leveraging innovative technologies and strategic thinking to create impactful solutions. With a keen eye for detail and a commitment to excellence, Syed excels in business development, operational efficiency, and sustainable growth.",
  specialText: 'Currently available for Collab',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
