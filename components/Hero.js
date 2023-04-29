import React from 'react';
import Button from './Button';
import { Paragraph } from './Text';
import Email from 'public/assets/icons/email.svg';
import Image from 'next/image';
import Anchor from './Anchor';
import RoundedBottom from './RoundedBottom';
import { CONTENT as content } from 'data/HERO';

const EmailMeButton = () => {
  return (
    <TextButton href="mailto:raffialdo123@gmail.com">
      <Button>
        <div className="flex items-center gap-[10px]">
          <Image src={Email} alt="See more icon" width={26} height={26} />
          <Bold>EMail</Bold> me
        </div>
      </Button>
    </TextButton>
  );
};

const CheckProjectButton = () => {
  return (
    <TextButton href="#projects" isPrimary>
      <Button isPrimary>
        Check my <Bold>project</Bold>🚀
      </Button>
    </TextButton>
  );
};

const TextButton = ({ isPrimary, children, href }) => {
  return (
    <Anchor
      href={href}
      className={`font-medium text-[22px] leading-8 ${
        isPrimary ? 'text-white-primary' : 'text-orange-primary'
      }`}
    >
      {children}
    </Anchor>
  );
};

const Bold = ({ children }) => <span className="font-bold">{children}</span>;

export default function Hero() {
  return (
    <>
      <div id="home" className="h-[calc(100vh-60px)] relative bg-white-primary">
        <div className="absolute bottom-[20%] max-w-6xl w-[1000px] center-both -mt-8">
          <div className="text-center flex flex-col gap-6">
            <Paragraph>{content.introduce}</Paragraph>
            <h1 className="font-semibold text-[100px] leading-[120px] text-black-primary">
              {content.title} <br /> {content.place}
            </h1>
            <Paragraph>{content.describe_me}</Paragraph>
          </div>
          <div className="mt-10 flex-center-both gap-6">
            <CheckProjectButton />
            <EmailMeButton />
          </div>
        </div>
      </div>
      <RoundedBottom isRoundedWhite />
    </>
  );
}
