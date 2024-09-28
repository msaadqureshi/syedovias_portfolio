import { SocialLinkType } from '@/lib/types';

import SocialLink from './SocialLink';
import { Icon } from '@iconify/react';

const SocialIcon = ({ icon, url }: SocialLinkType) => {
  return (
    <li>
      <SocialLink href={url}>
        {/* <Icon icon={icon} width={24} height={24} /> */}
        <img src={icon} alt={icon} width="25" height="25" />
      </SocialLink>
    </li>
  );
};

export default SocialIcon;
