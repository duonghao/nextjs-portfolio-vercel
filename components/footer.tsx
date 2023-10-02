import React from 'react';

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-gray-500 text-center">
      <small className="mb-2 text-xs block">
        &copy; Hao Duong. All rights reserved.
      </small>
      <p className="text-xs ">
        <span className="font-semibold">About this website: </span>
        Built with React and Next.Js (App router and Server Actions),
        TypeScript, TailwindCSS, Framer Motion, React Email and Resend. Hosted
        on GitHub Pages.
      </p>
    </footer>
  );
}
