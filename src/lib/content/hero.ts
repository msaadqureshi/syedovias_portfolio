import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, I am',
  // title: 'Ovais Shah.',
  // tagline: 'Entrepreneur and visionary businessman',
  // description:
  //   'I am a dedicated entrepreneur with extensive experience in building and managing successful businesses across a range of industries. Skilled in leveraging innovative technologies and strategic thinking, I focus on creating impactful solutions. With a keen eye for detail and a commitment to excellence, I excel in business development, operational efficiency, and driving sustainable growth.',
  title: 'Ovais Shah.',
  tagline: 'A Visionary Entrepreneur ',
  subtagline: 'Driven by Passion and a Growth Mindset',
  description:
    'Ovais Shah is a dynamic entrepreneur and industry leader fueled by an achiever`s mindset and a passion for empowering talent and driving innovation across diverse sectors. With ventures spanning fashion and automotive services, Mr. Shah always dreams big and is committed to creating impactful businesses that bridge gaps, foster connections, and deliver exceptional experiences. He leads from the front, inspiring his teams to work hard, stay focused, and always strive for excellence.',
  specialText: 'Currently available for Collab',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
