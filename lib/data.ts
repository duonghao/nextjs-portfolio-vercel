import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';
import { TbSubmarine } from 'react-icons/tb';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';

export const links = [
  {
    name: 'home',
    hash: '#home',
  },
  {
    name: 'about',
    hash: '#about',
  },
  {
    name: 'projects',
    hash: '#projects',
  },
  {
    name: 'skills',
    hash: '#skills',
  },
  {
    name: 'experience',
    hash: '#experience',
  },
  {
    name: 'contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Intern',
    location: 'Defence Science and Technology Group, Australia',
    description:
      'I interned with the small satellites team, working on day-to-day operations and mission planning. I was exposed to various \
    parts of the software lifecycle and development methodology and had the oppourtunity to develop and integrate automation tools to assist mission planning.',
    icon: React.createElement(CgWorkAlt),
    date: '2018',
  },
  {
    title: 'Bachelor of Engineering (Mechanical)',
    location: 'University of Adelaide, Australia',
    description: '',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Mechanical Engineer',
    location: 'Adelaide, Australia',
    description:
      'I worked as a mechanical engineer at Babcock Australasia in the Collins sustainment team for 2 years, specialising in design and configuration. In addition to be involved in \
      engineering activities for the sustainment of mechanical subsystems, I was also involved in process and configuration improvements by integrating enterprise software with self-developed systems to enable engineers to efficiently and accurately update any \
      configuration data from one source of truth.',
    icon: React.createElement(TbSubmarine),
    date: '2019 - June 2022',
  },
  {
    title: 'Graduate Diploma of Computer Science',
    location: 'University of Melbourne',
    description:
      'After having spent a considerable amount of time programming as a hobby, I realised my passion for programming and decided to undertake a specialisation in Computer Science to provide me with the strong fundamental background needed to support my \
      future endeavours in software engineering. I undertook courses in data structures and algorithms, Machine Learning and Artifical Intelligence amongst many others.',
    icon: React.createElement(LuGraduationCap),
    date: 'June 2022 - June 2023',
  },
] as const;

export const projectsData = [
  {
    title: 'Spottr',
    description:
      'An iOS workout tracking app designed for intermediate and professional gym goers to seamlessly record workouts \
      and simplify progress tracking.',
    tags: ['iOS', 'Swift', 'SwiftUI'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'Blog',
    description:
      'A personal blog that showcases my travels, photography and life in general.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Headless CMS'],
    imageUrl: rmtdevImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'GraphQL',
  'Express',
  'PostgreSQL',
  'Python',
  'Django',
  'Framer Motion',
  'Swift',
  'SwiftUI',
] as const;
