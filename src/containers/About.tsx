'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is {author.name}, a dynamic entrepreneur and visionary
            businessman with a passion for innovation and excellence.{' '}
            {/* <Link
              href="https://bhu.ac.in/"
              target="_blank"
              className="text-accent"
            >
              Banaras Hindu University
            </Link> */}
            <br /> With a wealth of experience across various industries, Syed
            has consistently demonstrated his ability to identify emerging
            trends, capitalize on opportunities, and turn ambitious ideas into
            successful ventures.
          </p>

          <p>My main focus - - - - - - - .</p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
          <>
            <h3 className="text-accent">Our Vision</h3>
            <p>
              Syed Ovais Shah believes in the power of transformative leadership
              and strategic thinking. <br /> His vision is to build businesses
              that not only thrive in the marketplace but also contribute
              positively to the community and the environment. <br /> By
              embracing cutting-edge technologies and sustainable practices,
              S.Ovais is dedicated to creating a legacy of success and social
              impact.
            </p>
          </>
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
