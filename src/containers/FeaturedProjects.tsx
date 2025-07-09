'use client';
import { motion } from 'framer-motion';

import featuredProjectsSection from '@/lib/content/featured-projects';

import { getInstagramFeed } from './../lib/utils/functions';
import { Wrapper } from '@/components';
import FeaturedProject from '@/components/ui/FeaturedProject';

import ProjectCardTiltImage from '@/components/ui/ProjectCardTiltImage';
import { getSectionAnimation } from '@/styles/animations';
import { useEffect, useState } from 'react';

import SAGA2024 from './../../public/Achievements/SAGA2024.jpeg';

const Achievements = [
  {
    slug: 'ai-chatbot',
    name: 'AI Chatbot',
    // img: SAGA2024,
    img: '/Achievements/SAGA2024.jpeg',
    category: 'Achievement',
    // tags: [],
  },
  {
    slug: 'finance-dashboard',
    name: 'Finance Dashboard',
    img: '/Achievements/IMPACT.jpeg',
    category: 'Achievement',
    // tags: [],
  },
  {
    name: 'Finance Dashboard',
    img: '/Achievements/GULF2024.jpeg',
  },
  {
    name: 'Achievement',
    img: '/Achievements/achievement.png',
  },
];

const FeaturedProjects = () => {
  return (
    <Wrapper id="projects" {...getSectionAnimation}>
      <div className="mb-20 space-y-3 text-center lg:text-left">
        <h2 className="heading-secondary !mb-0 capitalize">
          {featuredProjectsSection.title}
        </h2>

        <p className="font-mono lg:hidden text-accent capitalize text-xs lg:mb-2.5">
          featured projects
        </p>
      </div>

      <div className="space-y-10 md:space-y-16 lg:space-y-36">
        {featuredProjectsSection.projects.map((project, i) => (
          <FeaturedProject
            key={project.id}
            align={i % 2 === 0 ? 'right' : 'left'}
            {...project}
            {...getSectionAnimation}
          />
        ))}
      </div>
      <motion.h2 className="heading-secondary text-center !mb-12"> </motion.h2>
      <Wrapper {...getSectionAnimation}>
        <motion.h2 className="heading-secondary text-center !mb-12">
          Achievements
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-4 place-items-center">
          {Achievements.map((item, index) => (
            <ProjectCardTiltImage
              project={item}
              key={index}
              // filter={{ key: 'category', value: 'Achievement' }}
            />
          ))}
        </div>
      </Wrapper>
    </Wrapper>
  );
};

export default FeaturedProjects;
