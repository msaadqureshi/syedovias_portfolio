import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    // {
    //   id: getId(),
    //   title: 'full stack development',
    //   // animation lottie file: https://lottiefiles.com/
    //   lottie: {
    //     light: '/lotties/coding.json',
    //     dark: '/lotties/coding.json',
    //   },
    //   points: [
    //     'Building full-stack web applications using Next.js with TypeScript, TailwindCSS, ShadCN, and Prisma',
    //     'Developing responsive single-page applications using React.js',
    //     'Creating RESTful APIs using Express for backend development',
    //   ],
    //   softwareSkills: [
    //     // iconify icons: https://icon-sets.iconify.design/
    //     { name: 'html-5', icon: 'vscode-icons:file-type-html' },
    //     { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
    //     { name: 'sass', icon: 'vscode-icons:file-type-sass' },
    //     { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
    //     {
    //       name: 'typeScript',
    //       icon: 'vscode-icons:file-type-typescript-official',
    //     },
    //     { name: 'nodejs', icon: 'logos:nodejs-icon' },
    //     { name: 'prisma', icon: 'vscode-icons:file-type-prisma' },
    //     { name: 'reactjs', icon: 'logos:react' },
    //     { name: 'nextjs', icon: 'logos:nextjs-icon' },
    //     // { name: 'angularjs', icon: 'logos:angular-icon' },
    //     { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
    //     { name: 'redux', icon: 'logos:redux' },
    //     { name: 'database', icon: 'vscode-icons:file-type-sql' },
    //     { name: 'jest', icon: 'vscode-icons:file-type-jest' },
    //   ],
    // },
    // {
    //   id: getId(),
    //   title: 'UI/UX designing',
    //   lottie: {
    //     light: '/lotties/designing.json',
    //     dark: '/lotties/designing-dark.json',
    //   },
    //   points: [
    //     'Experience in designing user-friendly interfaces with figma',
    //     'Experience in developing design systems and style guides',
    //     'Providing user-friendly design solutions',
    //   ],
    //   softwareSkills: [
    //     { name: 'figma', icon: 'logos:figma' },
    //     { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
    //     { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
    //   ],
    // },
    {
      id: getId(),
      title: 'Travel around the world',
      lottie: {
        light: '/lotties/coding.json',
        dark: '/lotties/coding.json',
      },
      img: '/syedovais5.jpeg', // '/ovaisportfolio.png',
      points: [
        'Exploring diverse cultures and traditions across different countries.',
        'Experiencing new cuisines and local delicacies.',
        'Visiting historical landmarks and world-renowned attractions.',
        'Connecting with people from various backgrounds and forming global friendships.',
        'Adventuring through natural wonders, from mountains to beaches.',
        'Learning new languages and improving communication skills.',
        'Gaining a broader perspective on the world and its diversity.',
        'Enhancing problem-solving and adaptability skills through travel challenges.',
        'Enjoying the thrill of discovering hidden gems and off-the-beaten-path destinations.',
        'Creating lifelong memories through unique travel experiences.',
      ],
      softwareSkills: [
        { name: 'United Kingdom', icon: '🇬🇧' },
        { name: 'United States', icon: '🇺🇸' },
        { name: 'Sri Lanka', icon: '🇱🇰' },
        { name: 'Malaysia', icon: '🇲🇾' },
        { name: 'Singapore', icon: '🇸🇬' },
        { name: 'Thailand', icon: '🇹🇭' },
        { name: 'Azerbaijan', icon: '🇦🇿' },
        { name: 'Georgia', icon: '🇬🇪' },
        { name: 'India', icon: '🇮🇳' },
        { name: 'Pakistan', icon: '🇵🇰' },
        { name: 'Afghanistan', icon: '🇦🇫' },
        { name: 'Bahrain', icon: '🇧🇭' },
        { name: 'Saudi Arabia', icon: '🇸🇦' },
        { name: 'Turkey', icon: '🇹🇷' },
        { name: 'Germany', icon: '🇩🇪' },
        { name: 'France', icon: '🇫🇷' },
        { name: 'Switzerland', icon: '🇨🇭' },
        { name: 'Austria', icon: '🇦🇹' },
        { name: 'Belgium', icon: '🇧🇪' },
        { name: 'Netherlands', icon: '🇳🇱' },
        { name: 'Norway', icon: '🇳🇴' },
        { name: 'Denmark', icon: '🇩🇰' },
        { name: 'Sweden', icon: '🇸🇪' },
        { name: 'Czech Republic', icon: '🇨🇿' },
        { name: 'Hungary', icon: '🇭🇺' },
        { name: 'Spain', icon: '🇪🇸' },
        { name: 'Italy', icon: '🇮🇹' },
        { name: 'United Kingdom (UK)', icon: '🇬🇧' },
        { name: 'United Arab Emirates', icon: '🇦🇪' },
      ],
    },
  ],
};
