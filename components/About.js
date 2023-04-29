import React from 'react';
import { Paragraph } from './Text';
import Image from 'next/image';
import RoundedBottom from './RoundedBottom';
import { CONTENT as content } from 'data/ABOUT';

const TextAbout = ({ children, className }) => (
  <Paragraph className={`!text-black-secondary ${className}`}>
    {children}
  </Paragraph>
);

export default function About() {
  return (
    <>
      <div id="about" className="bg-white-primary">
        <div className="max-w-7xl mx-auto pt-[218px] pb-5">
          <div className="relative z-10">
            <div className="w-[60%] relative z-0">
              <TextAbout>{content.meet}</TextAbout>
              <h1 className="text-black-primary text-[100px] leading-[120px] font-semibold my-6">
                {content.experience}
              </h1>
              <TextAbout className="w-[65%]">{content.paragraph_1}</TextAbout>
            </div>
            <div className="absolute right-0 top-0 bottom-0 h-full w-[57%] -z-10">
              <Image
                src="/assets/images/photo-about.png"
                alt="Photo About"
                fill
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <TextAbout>{content.paragraph_2}</TextAbout>
            <TextAbout>{content.paragraph_3}</TextAbout>
          </div>
        </div>
      </div>
      <RoundedBottom isRoundedWhite />
    </>
  );
}
