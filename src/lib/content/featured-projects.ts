import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: 'My Businesses', //My Projects i've worked on (Businesses)
  projects: [
    {
      id: getId(),
      name: 'Super Models Job',
      description: 'Transforming the Fashion Industry',
      // tasks: `Founder of Supermodelsjob.com: Ovais' groundbreaking platform, Supermodelsjob.com, is the world's first global marketplace for fashion jobs. By connecting aspiring creatives with industry leaders worldwide, he is fostering a more inclusive and diverse global fashion community.
      //         Empowering Neglected Talent: Through Supermodelsjob.com, Mr. Shah provides unprecedented global exposure to talents often overlooked by traditional fashion channels, leveling the playing field and opening doors for creatives from all corners of the world. His belief that "a great team can achieve anything" drives him to build an environment where individuals can flourish and reach their full potential.
      //         Explore Supermodelsjob.com Discover how Mr. Shah is transforming the fashion industry and connecting global talent.`,
      tasks: `Ovais Shah: Revolutionizing the Global Fashion Industry with Supermodelsjob.com
In the dynamic world of fashion, Ovais Shah stands as a visionary leader, driving change and progress through his groundbreaking platform, Supermodelsjob.com - the world's first global platform for fashion jobs.
With an unwavering commitment to empowering talent, Shah is not only connecting fashion creatives with industry professionals on an unprecedented scale but also shining a spotlight on often-neglected local talent, providing them with unparalleled global exposure. By transcending geographical boundaries and cultural barriers, Supermodelsjob.com is leveling the playing field, fostering a more inclusive and diverse fashion community where creativity knows no limits.
Through this innovative platform, Shah is bridging the gap between aspiring designers, models, photographers, stylists, and other creatives with industry elites, propelling the fashion industry into a new era of collaboration, innovation, and connectivity.`,
      // As the Supermodelsjob.com community continues to grow, the future of fashion looks brighter than ever before - a future where talent is recognized, nurtured, and celebrated, regardless of origin.`,
      url: 'https://supermodelsjob.com/',
      img: '/smj.png',
      tags: ['Models, Photographers, Makeup Artists'],
    },
    {
      id: getId(),
      name: '800CarGuru',
      description: 'Driving Automotive Service Excellence in the UAE',
      tasks:
        //   (
        //   <div className="col-xs-12 col-md-4 col-lg-6 info-panel">
        //     <strong>CEO &amp; Founder of 800 CARGURU:</strong> Ovais has also
        //     achieved remarkable success in the UAE's automotive service sector. As
        //     the visionary behind 800 CARGURU, he has built the company into the
        //     largest onsite service provider in the country, serving over 300,000
        //     satisfied customers.
        //     <br />
        //     <br />
        //     <strong>Commitment to Quality and Convenience:</strong> With a
        //     state-of-the-art service center in Dubai, 800 CARGURU delivers
        //     exceptional automotive care and convenience, setting new standards for
        //     customer satisfaction in the region. Ovais' dedication to "always
        //     working for excellence" ensures that his businesses consistently
        //     exceed expectations.
        //   </div>
        // ),
        `CEO & Founder of 800 CARGURU: Ovais has also achieved remarkable success in the UAE's automotive service sector. As the visionary behind 800 CARGURU, he has built the company into the largest onsite service provider in the country, serving over 300,000 satisfied customers.
       Commitment to Quality and Convenience: With a state-of-the-art service center in Dubai, 800 CARGURU delivers exceptional automotive care and convenience, setting new standards for customer satisfaction in the region. Ovais' dedication to "always working for excellence" ensures that his businesses consistently exceed expectations.`,
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

    // {
    //   id: getId(),
    //   name: '800CarGuru',
    //   description: 'UAE`s LARGEST CAR REPAIR SERVICE PROVIDER.',
    //   tasks:
    //     "As a freelancer, I understood the client's requirements and executed a plan to develop and design an e-commerce platform, including the frontend UI, backend setup with database, APIs, and integration with payment platforms.",
    //   url: 'https://800carguru.ae/',
    //   img: '/carguru.png',
    //   tags: [
    //     'JUMP START',
    //     'FUEL EMERGENCY',
    //     'OIL CHANGE',
    //     'BRAKE PADS',
    //     'NEW BATTERY',
    //     'BATTERY CLAIM',
    //     'NEW TYRE',
    //     'TYRE CHANGE',
    //     'AC GAS REFILL',
    //     'CAR WASH',
    //     'MINOR SERVICE',
    //     'MAJOR SERVICE',
    //     'RTA PASSING',
    //     'CAR TOW',
    //     'PPF',
    //     'CAR WRAPPING',
    //     'SERVICE CONTRACT',
    //   ],
    // },
    // {
    //   id: getId(),
    //   name: 'Super Models Job',
    //   description:
    //     'World’s First Ever Global Platform for Fashion Jobs Models, Photographers, Makeup Artists & more.',
    //   tasks:
    //     'As a freelancer, I developed this project by planning, communicating with the client, gathering feedback, implementing UI & pages, and integrating real-time data fetching with filtering functionality.',
    //   url: 'https://supermodelsjob.com/',
    //   img: '/smj.png',
    //   tags: ['Models, Photographers, Makeup Artists'],
    // },
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
