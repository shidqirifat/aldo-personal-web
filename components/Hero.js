import React from 'react';
import Button from './Button';
import { Paragraph } from './Text';
import Email from 'public/assets/icons/email.svg';
import Image from 'next/image';
import Anchor from './Anchor';

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
    <div
      id="home"
      className="h-screen relative bg-white-primary rounded-b-[60px]"
    >
      <div className="absolute bottom-[20%] max-w-6xl w-[1000px] center-both -mt-8">
        <div className="text-center flex flex-col gap-6">
          <Paragraph>Holla👋, I’m Raffialdo Bayu Anggara and I’m a</Paragraph>
          <h1 className="font-semibold text-[100px] leading-[120px] text-black-primary">
            UI/UX Designer <br /> based in Indonesia
          </h1>
          <Paragraph>
            I love designing websites and user interfaces, doing freelance work
            and focusing on designing digital products that are easy on users
            and customers.
          </Paragraph>
        </div>
        <div className="mt-10 flex-center-both gap-6">
          <Button isPrimary>
            <TextButton href="#projects" isPrimary>
              Check my <Bold>project</Bold>🚀
            </TextButton>
          </Button>
          <Button>
            <div className="flex items-center gap-[10px]">
              <Image src={Email} alt="See more icon" width={26} height={26} />
              <TextButton href="mailto:raffialdo123@gmail.com">
                <Bold>EMail</Bold> me
              </TextButton>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
