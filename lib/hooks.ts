import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { Section } from './types';

export function useSectionInView(section: Section, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const debounce = (timeOfLastClick: number) => {
    return Date.now() - timeOfLastClick < 1000;
  };

  useEffect(() => {
    if (inView && !debounce(timeOfLastClick)) {
      setActiveSection(section);
    }
  }, [section, inView, setActiveSection, timeOfLastClick]);

  return {
    ref,
  };
}
