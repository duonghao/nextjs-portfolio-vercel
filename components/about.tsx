/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('about');

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{' '}
        <span className="font-medium">Mechanical Engineering</span>, I decided
        to pursue my passion for programming. I enrolled in a Graduate Diploma
        at the University of Melbourne majoring in Computer Science and learnt{' '}
        <span className="font-medium">full-stack web development</span>.{' '}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of turning ideas into real-world solutions in almost an instant.
        My core stack is{' '}
        <span className="font-medium">React, Next.js and Node.js</span>. I am
        also familiar with TypeScript and Swift for iOS development. I am always
        looking to learn new technologies and practices to grow and improve. I
        am currently looking for a{' '}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy travelling
        and photography. Feel free to check out some of stories and pictures in
        my blog. I also enjoy{' '}
        <span className="font-medium">learning new things</span>. I am currently
        learning <span className="font-medium">Japanese</span> and aim to
        achieve N3 on the Japanese Language Proficiency Test by the end of this
        year.
      </p>
    </motion.section>
  );
}
