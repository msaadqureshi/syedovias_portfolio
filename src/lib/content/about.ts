import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'About Me',
  // Paragraphs need to be changed from `/containers/About.tsx`
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are some key areas I’ve been focusing on recently:',
    items: [
      'Business Development',
      'Strategic Planning',
      'Operational Efficiency',
      'Sustainable Growth',
      'Innovation & Technology',
      'Leadership & Team Building',
    ],
  },
  img: '/syed-ovais.png',
};
