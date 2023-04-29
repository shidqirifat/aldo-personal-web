import React from 'react';
import Navigations from 'components/Navigations';
import Hero from 'components/Hero';
import Services from 'components/Services';
import ContactUs from 'components/ContactUs';
import Projects from 'components/Projects';

export default function HomePage() {
  return (
    <>
      <Navigations />
      <Hero />
      <Services />
      <Projects />
      <ContactUs />
    </>
  );
}
