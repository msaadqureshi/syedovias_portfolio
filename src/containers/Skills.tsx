'use client';
import { skillsSection } from '@/lib/content/skills';
import { useTheme } from '@/lib/hooks/use-theme';

import { Skill, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

const Skills = () => {
  const { title, skills } = skillsSection;
  const { isDarkMode } = useTheme();

  return (
    <Wrapper id="Activity" {...getSectionAnimation}>
      <h2 className="text-center heading-secondary">{title}</h2>

      <div className="space-y-32">
        {skills.map(({ id, lottie, img, softwareSkills, points, title }) => (
          <Skill
            key={id}
            className="odd:lg:flex-row-reverse"
            lottie={lottie[isDarkMode ? 'dark' : 'light']}
            img={img}
            skills={softwareSkills}
            points={points}
            title={title}
            {...getSectionAnimation}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Skills;
