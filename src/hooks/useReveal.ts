import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to all `.reveal` elements inside the container.
 * When they enter the viewport they get the `.visible` class applied.
 */
const useReveal = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
};

export default useReveal;
