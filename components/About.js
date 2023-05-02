import React from 'react';
import { Bold, Paragraph, TextButton } from './Text';
import Image from 'next/image';
import RoundedBottom from './RoundedBottom';
import { CONTENT as content } from 'data/ABOUT';
import { useSelector } from 'react-redux';
import Anchor from './Anchor';
import Button from './Button';
import { GLOBAL_DATA } from 'data/CONFIG';

const TextAbout = ({ children, className }) => (
  <Paragraph className={`!text-black-secondary ${className}`}>
    {children}
  </Paragraph>
);

const ResumeButton = () => {
  return (
    <Anchor href={GLOBAL_DATA.resume} isExternal>
      <Button isPrimary>
        <TextButton isPrimary>
          Download <Bold>resume</Bold>🎉
        </TextButton>
      </Button>
    </Anchor>
  );
};

export default function About() {
  const displaySize = useSelector((state) => state.displaySize);

  return (
    <>
      <div id="about" className="bg-white-primary">
        <div className="max-w-7xl mx-6 xl:mx-auto pt-24 md:pt-[218px] sm:pb-5 text-center md:text-left">
          <div className="flex flex-col relative z-10">
            <div className="w-full lg:w-[60%] static lg:relative z-0">
              <TextAbout>{content.meet}</TextAbout>
              <h1 className="text-black-primary text-[32px] md:text-[100px] leading-[48px] md:leading-[120px] font-semibold my-2 md:my-6">
                {content.experience}
              </h1>
              <TextAbout className="w-full lg:w-[65%]">
                {content.paragraph_1}
              </TextAbout>
            </div>
            <div className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 h-[250px] lg:h-full lg:w-[57%] lg:-z-10 mt-4">
              <Image
                src="/assets/images/photo-about.png"
                alt="Photo About"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 mt-4 mb-6 md:mb-0 md:mt-8">
            <TextAbout>{content.paragraph_2}</TextAbout>
            <TextAbout>
              {displaySize.small
                ? content.paragraph_3_mobile
                : content.paragraph_3}
            </TextAbout>
          </div>
          {displaySize.small && <ResumeButton />}
        </div>
      </div>
      <RoundedBottom isRoundedWhite />
    </>
  );
}
