import React from 'react';
import About from 'components/About';
import Navigations from 'components/navigation/Navigations';
import ContactUs from 'components/ContactUs';

export default function AboutPage() {
  return (
    <>
      <Navigations />
      <About />
      <ContactUs />
    </>
  );
}
