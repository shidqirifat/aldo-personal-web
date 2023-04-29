import { NAVIGATIONS } from 'data/NAVIGATION';
import { useEffect, useState } from 'react';

export default function useNavigation() {
  const [activeNavigation, setActiveNavigation] = useState('#home');
  const [navigationsEl, setNavigationsEl] = useState([]);

  const getAllNavigationsEl = () => {
    const navigations = [];

    NAVIGATIONS.forEach((nav) => {
      if (!nav.anchor) return;
      const element = document.querySelector(nav.anchor);
      if (!element) return;

      navigations.push(element);
    });

    setNavigationsEl(navigations);
  };

  useEffect(() => {
    getAllNavigationsEl();
  }, []);

  useEffect(() => {
    const observerOptions = {
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeLinkId = entry.target.getAttribute('id');
          setActiveNavigation(`#${activeLinkId}`);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    navigationsEl.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navigationsEl]);

  return [activeNavigation];
}
