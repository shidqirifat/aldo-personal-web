import React from 'react';
import Navigations from 'components/Navigations';
import Hero from 'components/Hero';
import Services from 'components/Services';
import ContactUs from 'components/ContactUs';

export default function Home() {
  return (
    <>
      <Navigations />
      <Hero />
      <Services />
      <ContactUs />
    </>
  );
}
