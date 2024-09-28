import { SocialLinkType } from '@/lib/types';

import SocialLink from './SocialLink';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const SocialIcon = ({ icon, url }: SocialLinkType) => {
  return (
    <li>
      <SocialLink href={url}>
        {/* <Icon icon={icon} width={24} height={24} /> */}
        <Image src={icon} alt={icon} width="25" height="25" />
      </SocialLink>
    </li>
  );
};

export default SocialIcon;
