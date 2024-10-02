/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

import { StringKeyValueType } from '../types';

export const author = {
  name: 'Ovais Shah',
  email: 'shah@syedovais.com',
  send_email_api_url: 'https://800carguru.me/SMTPmailer/so_email.php',
};

export const socialLinks: StringKeyValueType = {
  facebook: 'https://www.instagram.com/ssovais',
  instagram: 'https://www.instagram.com/ssovais',
  gmail: `mailto:${author.email}`,
  twitter: 'https://www.instagram.com/ssovais',
  github: 'https://www.instagram.com/ssovais',
  linkedin: 'https://www.instagram.com/ssovais',
};

export const seoData = {
  title: 'Ovais Shah | Entrepreneur businessman',
  description:
    'Ovais Shah is a dynamic entrepreneur and visionary businessman with a passion for innovation and excellence.',
  author: author.name,
  image: '/webBanner.png',
  url: 'https://syedovais.com/',
  // url: 'https://syedovais.netlify.app/',
  keywords: [
    'Ovais',
    'SyedOvais',
    'OvaisShah',
    '@syedovais',
    'Portfolio',
    'Ovais Shah Portfolio',
    'ssovais',
    'Syed',
    'Ovais',
    'shah',
    'Ovais Shah',
  ],
};
