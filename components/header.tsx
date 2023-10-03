'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';
import ThemeSwitch from './theme-switch';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <div className="fixed top-0 left-0 w-full sm:top-6 flex items-center justify-center gap-4">
        <div className="relative w-full sm:w-[36rem]">
          <motion.div
            className="w-full rounded-none border h-[5rem] sm:h-[3.25rem] border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          ></motion.div>
          <nav className="absolute flex h-12 sm:top-1/2 top-[1.75rem] -translate-y-1/2 left-1/2 -translate-x-1/2 sm:h-[initial] sm:py-0">
            <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
              {links.map((link) => (
                <motion.li
                  className="relative h-3/4 flex items-center justify-center"
                  key={link.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    className={clsx(
                      'w-full items-center justify-center px-3 py-3 hover:text-gray-950 capitalize transition dark:text-gray-500 dark:hover:text-gray-300',
                      {
                        'text-gray-950 dark:text-gray-200':
                          activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}
                    {link.name === activeSection && (
                      <motion.span
                        className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                        layoutId="activeSection"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
        <ThemeSwitch />
      </div>
    </header>
  );
}
