import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on (My Businesses)",
  projects: [
    {
      id: getId(),
      name: '800CarGuru',
      description: 'UAE`s LARGEST CAR REPAIR SERVICE PROVIDER.',
      tasks:
        "As a freelancer, I understood the client's requirements and executed a plan to develop and design an e-commerce platform, including the frontend UI, backend setup with database, APIs, and integration with payment platforms.",
      url: 'https://800carguru.ae/',
      img: '/carguru.png',
      tags: [
        'JUMP START',
        'FUEL EMERGENCY',
        'OIL CHANGE',
        'BRAKE PADS',
        'NEW BATTERY',
        'BATTERY CLAIM',
        'NEW TYRE',
        'TYRE CHANGE',
        'AC GAS REFILL',
        'CAR WASH',
        'MINOR SERVICE',
        'MAJOR SERVICE',
        'RTA PASSING',
        'CAR TOW',
        'PPF',
        'CAR WRAPPING',
        'SERVICE CONTRACT',
      ],
    },
    {
      id: getId(),
      name: 'Super Models Job',
      description:
        'World’s First Ever Global Platform for Fashion Jobs Models, Photographers, Makeup Artists & more.',
      tasks:
        'As a freelancer, I developed this project by planning, communicating with the client, gathering feedback, implementing UI & pages, and integrating real-time data fetching with filtering functionality.',
      url: 'https://supermodelsjob.com/',
      img: '/smj.png',
      tags: ['Models, Photographers, Makeup Artists'],
    },
    // {
    //   id: getId(),
    //   name: 'GetLifeGuard',
    //   description: 'An E-Commerce platform for Self-Defense Keychain.',
    //   tasks:
    //     "As a freelancer, I understood the client's requirements and executed a plan to develop and design an e-commerce platform, including the frontend UI, backend setup with database, APIs, and integration with payment platforms.",
    //   url: 'https://www.getlifegard.com/',
    //   img: 'https://www.getlifegard.com/images/og.png',
    //   tags: [
    //     'NextJs 14',
    //     'TypeScript',
    //     'TailwindCSS',
    //     'ShadCN',
    //     'Prisma',
    //     'Stripe',
    //   ],
    // },
    // {
    //   id: getId(),
    //   name: 'Velvi Matrimony',
    //   description:
    //     'A platform that redefines the way individuals find their life partners.',
    //   tasks:
    //     'As a freelancer, I developed this project by planning, communicating with the client, gathering feedback, implementing UI & pages, and integrating real-time data fetching with filtering functionality.',
    //   url: 'https://velvi.vercel.app/',
    //   img: 'https://i.postimg.cc/tRS4GvzJ/Screenshot-2024-02-27-at-5-48-49-PM.png',
    //   tags: ['NextJs', 'TypeScript', 'TailwindCSS', 'APIs'],
    // },
    // {
    //   id: getId(),
    //   name: 'Integra',
    //   description: 'An AI-Powered Leads Generation Platform.',
    //   tasks:
    //     'I strategically planned project milestones, led a cross-functional team, established a design system, developed the website, and integrated Stripe payments with secure authentication.',
    //   url: 'https://www.integraleads.xyz/',
    //   img: 'https://user-images.githubusercontent.com/68834718/279476369-2f69466a-71db-4da0-9afd-04f8f0efb621.jpeg',
    //   tags: ['AI/ML', 'NextJs', 'TypeScript', 'TailwindCSS', 'Express'],
    // },
    // {
    //   id: getId(),
    //   name: 'Drafton',
    //   description: 'The AI-powered platform that simplifies proposal creation.',
    //   tasks:
    //     'Implemented NextAuth authentication, integrated Mailchimp for newsletter subscription, developed a custom hook for dark mode, created UI components in the Dashboard, and used Notion as a CMS for the blogs page.',
    //   url: 'https://www.drafton.io/',
    //   img: 'https://i.postimg.cc/4N6dsGcm/Screenshot-2024-06-17-at-11-05-22-PM.png',
    //   tags: ['Open AI', 'NextJs', 'TypeScript', 'TailwindCSS', 'Prisma'],
    // },
  ],
};

export default featuredProjectsSection;
