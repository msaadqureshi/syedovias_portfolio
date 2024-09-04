import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    'I`m actively seeking new business ventures and remote opportunities that align with my entrepreneurial spirit.',
    'If you have a project you`d like to collaborate on or simply want to connect, my inbox is always open. Let`s explore how we can create something impactful together!',
  ],
  link: `mailto:${author.email}`,
};
