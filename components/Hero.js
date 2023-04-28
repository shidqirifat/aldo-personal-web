import React from 'react';
import Button from './Button';
import { Paragraph } from './Text';

const TextButton = ({ isPrimary, children }) => {
  return (
    <h4
      className={`font-medium text-[22px] leading-8 ${
        isPrimary ? 'text-white-primary' : 'text-orange-primary'
      }`}
    >
      {children}
    </h4>
  );
};

const Bold = ({ children }) => <span className="font-bold">{children}</span>;

export default function Hero() {
  return (
    <div className="h-screen relative bg-white-primary rounded-b-[60px]">
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
            <TextButton isPrimary>
              Check my <Bold>project</Bold>✨
            </TextButton>
          </Button>
          <Button>
            <TextButton>
              <Bold>EMail</Bold> me
            </TextButton>
          </Button>
        </div>
      </div>
    </div>
  );
}
