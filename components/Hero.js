import React from 'react';
import Button from './Button';
import { Paragraph } from './Text';
import Email from 'public/assets/icons/email.svg';
import Image from 'next/image';
import Anchor from './Anchor';
import RoundedBottom from './RoundedBottom';
import { CONTENT as content } from 'data/HERO';
import { useSelector } from 'react-redux';

const EmailMeButton = ({ isSmallDisplay }) => {
  const size = isSmallDisplay ? 15 : 26;

  return (
    <Anchor href="mailto:raffialdo123@gmail.com">
      <Button>
        <div className="flex items-center gap-2 md:gap-[10px]">
          <Image src={Email} alt="See more icon" width={size} height={size} />
          <TextButton>
            <Bold>EMail</Bold> me
          </TextButton>
        </div>
      </Button>
    </Anchor>
  );
};

const CheckProjectButton = () => {
  return (
    <Anchor href="#projects">
      <Button isPrimary>
        <TextButton isPrimary>
          Check my <Bold>project</Bold>🚀
        </TextButton>
      </Button>
    </Anchor>
  );
};

const TextButton = ({ isPrimary, children }) => {
  return (
    <h3
      className={`font-medium text-sm sm:text-[22px] leading-5 md:leading-8 ${
        isPrimary ? 'text-white-primary' : 'text-orange-primary'
      }`}
    >
      {children}
    </h3>
  );
};

const Bold = ({ children }) => <span className="font-bold">{children}</span>;

export default function Hero() {
  const displaySize = useSelector((state) => state.displaySize);

  return (
    <>
      <div
        id="home"
        className="md:h-[calc(100vh-60px)] pt-28 md:pt-0 relative bg-white-primary"
      >
        <div className="md:absolute md:bottom-[20%] max-w-6xl w-full lg:w-[1000px] px-6 md:center-both md:-mt-8">
          <div className="text-center flex flex-col gap-2 md:gap-6">
            <Paragraph>{content.introduce}</Paragraph>
            <h1 className="font-semibold text-[32px] md:text-[100px] leading-[48px] md:leading-[120px] text-black-primary">
              {content.title} <br /> {content.place}
            </h1>
            <Paragraph>{content.describe_me}</Paragraph>
          </div>
          <div className="mt-6 md:mt-10 flex-center-both gap-4 md:gap-6">
            <CheckProjectButton />
            <EmailMeButton isSmallDisplay={displaySize.small} />
          </div>
        </div>
      </div>
      <RoundedBottom isRoundedWhite />
    </>
  );
}
