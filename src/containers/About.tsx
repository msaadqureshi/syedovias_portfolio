'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';
import { getInstagramFeed } from '@/lib/utils/functions';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(true); // defult false
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    async function fetchFeed() {
      const instagramFeed = await getInstagramFeed('ssovais'); // Replace with your Instagram username
      setFeed(instagramFeed);
    }

    // fetchFeed();
  }, []);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
    {/* <Wrapper id="about"> */}
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, I’m {author.name}, a dynamic entrepreneur and visionary with a
            passion for innovation and excellence.{' '}
            {/* <Link
              href="https://bhu.ac.in/"
              target="_blank"
              className="text-accent"
            >
              Banaras Hindu University
            </Link> */}
            <br /> With extensive experience across various industries, I have
            consistently demonstrated an ability to identify emerging trends,
            seize opportunities, and transform ambitious ideas into successful
            ventures.
          </p>
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
            <h3 className="text-accent">My Vision</h3>
            <p>
              I believe in the power of transformative leadership and strategic
              thinking.
              <br />
              My vision is to build businesses that not only thrive in the
              marketplace but also contribute positively to society and the
              environment. By embracing cutting-edge technologies and
              sustainable practices, I am dedicated to creating a legacy of
              success and social impact.
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
