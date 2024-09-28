'use client';
import { Button, Wrapper } from '@/components';
import { heroSection } from '@/lib/content/hero';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { slideUp } from '@/styles/animations';

import { motion } from 'framer-motion';

const Hero = () => {
  const {
    cta,
    subtitle,
    title,
    tagline,
    subtagline,
    description,
    specialText,
  } = heroSection;

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

  const getAnimationDelay = (i: number, increment = 0.15) =>
    DEFAULT_ANIMATION_DELAY + increment * i;

  return (
    <Wrapper
      id="hero"
      className="flex flex-col justify-center h-full min-h-screen gap-6 mt-12 xs:gap-7 xs:mt-0"
    >
      {/* <Wrapper
      id="hero"
      className="flex flex-col md:flex-row justify-between items-center h-full  min-h-screen gap-6 mt-12 xs:gap-7 xs:mt-0"
    > */}
      {/* <motion.img
        src="/syedovais6.jpeg"
        alt="Descriptive Image Text"
        style={{ width: '900px', height: '400px' }}
        className="object-cover rounded-lg shadow-lg"
        variants={slideUp({ delay: getAnimationDelay(0) })}
        initial="hidden"
        animate="show"
      /> */}
      <div className="flex-1 max-w-5xl">
        <motion.p
          variants={slideUp({ delay: getAnimationDelay(0) })}
          initial="hidden"
          animate="show"
          className="font-mono text-sm md:text-base text-accent"
        >
          {subtitle}
        </motion.p>
        <div className="max-w-5xl text-4xl font-bold tracking-tighter md:text-7xl">
          <motion.h1
            variants={slideUp({ delay: getAnimationDelay(1) })}
            initial="hidden"
            animate="show"
            className="text-slate-900 dark:text-slate-200 capitalize mb-2 leading-[1.1]"
          >
            {title}
          </motion.h1>
          <motion.img
            src="/syedovais6.jpeg"
            alt="Descriptive Image Text"
            style={{ width: '900px' }} // height: '400px'
            className="object-cover rounded-lg shadow-lg"
            variants={slideUp({ delay: getAnimationDelay(0) })}
            initial="hidden"
            animate="show"
          />
          <motion.h1
            variants={slideUp({ delay: getAnimationDelay(2) })}
            initial="hidden"
            animate="show"
            className="leading-[1.2]"
          >
            {tagline}
          </motion.h1>
        </div>
        <motion.p
          variants={slideUp({ delay: getAnimationDelay(2) })}
          initial="hidden"
          animate="show"
          className="mb-5 text-2xl capitalize sm:text-3xl leading-[1.2]"
        >
          {subtagline}
        </motion.p>
        <motion.p
          variants={slideUp({ delay: getAnimationDelay(3) })}
          initial="hidden"
          animate="show"
          className=" font-mono max-w-xl text-base md:text-lg"
        >
          {description}
        </motion.p>

        <motion.p
          variants={slideUp({ delay: getAnimationDelay(4) })}
          initial="hidden"
          animate="show"
          className="font-mono text-xs md:text-sm text-accent"
        >
          {specialText}
        </motion.p>
      </div>
      {/* <div className="flex-1 flex justify-center items-center p-6">
        <motion.img
          // src="/syed-ovais1.png"
          // src="/syedovais5.jpeg"
          src="/ovaisportfolio.png"
          alt="Descriptive Image Text"
          className="max-w-full h-auto object-cover rounded-lg shadow-lg"
          variants={slideUp({ delay: getAnimationDelay(1) })}
          initial="hidden"
          animate="show"
        />
      </div> */}

      {/* {cta && (
        <Button
          size="lg"
          type="link"
          variants={slideUp({ delay: getAnimationDelay(5) })}
          initial="hidden"
          animate="show"
          href={cta?.url ?? '#'}
          className={`mt-5 xs:mt-8 md:mt-10 ${
            cta.hideInDesktop ? 'md:hidden' : ''
          }`}
          sameTab={cta?.sameTab}
        >
          {cta.title}
        </Button>
      )} */}
    </Wrapper>
  );
};

export default Hero;
