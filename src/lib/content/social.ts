import { socialLinks } from '@/lib/content/portfolio';
import { SocialSectionType } from '@/lib/types/sections';

export const socialSection: SocialSectionType = {
  socialLinks: [
    // {
    //   icon: 'tabler:brand-github',
    //   url: socialLinks.github,
    // },
    // {
    //   icon: 'tabler:brand-github',
    //   url: socialLinks.github,
    // },
    {
      icon: '/SocialIcons/insta.svg', // 'mdi:instagram',
      url: socialLinks.instagram,
    },
    {
      icon: '/SocialIcons/gmail.svg', // 'mdi:instagram',
      url: socialLinks.gmail,
    },
    // {
    //   icon: '/SocialIcons/facebook.svg', // 'lucide:facebook',
    //   url: socialLinks.facebook,
    // },
    // {
    //   icon: '/SocialIcons/tiktok.svg', // 'lucide:tiktok',
    //   url: socialLinks.facebook,
    // },
    // {
    //   icon: '/SocialIcons/twitter.svg', // 'lucide:twitter',
    //   url: socialLinks.twitter,
    // },
    // {
    //   icon: 'lucide:linkedin',
    //   url: socialLinks.linkedin,
    // },
  ],
};
