import Image from 'next/image';
import React from 'react';
import { Paragraph, TextLogo } from './Text';
import Anchor from './Anchor';
import { CONTACTS, SOCIALS, CONTENT as content } from 'data/CONTACT';
import { useSelector } from 'react-redux';

const ContactAnchor = ({ children, className = '', href }) => {
  return (
    <Anchor
      href={href}
      isExternal
      className={`font-semibold text-sm md:text-[28px] leading-5 md:leading-[42px] text-white-primary ${className}`}
    >
      {children}
    </Anchor>
  );
};

export default function ContactUs() {
  const displaySize = useSelector((state) => state.displaySize);

  return (
    <div id="contacts" className="background-pattern">
      <div className="mt-8 md:mt-14 lg:pt-[120px] pb-6 lg:pb-20 max-w-7xl mx-6 xl:mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-20 lg:gap-[178px] items-center lg:items-end justify-between">
          <div>
            <h1 className="font-semibold text-[32px] md:text-[80px] leading-[48px] md:leading-[120px] text-white-primary">
              {content.start} <br /> {content.together}
            </h1>
            <Paragraph className="text-white-secondary mt-2 md:mt-6 mb-4 md:mb-10 w-[80%] lg:w-full">
              {content.collaborate}
            </Paragraph>
            <div className="flex lg:flex-col xl:flex-row gap-10 lg:gap-4">
              {CONTACTS.map((contact) => (
                <ContactAnchor
                  key={contact.link}
                  href={contact.link}
                  className="underline underline-offset-4"
                >
                  {contact.text}
                </ContactAnchor>
              ))}
            </div>
          </div>
          <div className="min-h-[250px] md:min-h-[360px] min-w-[250px] md:min-w-[360px] relative">
            <Image
              src="/assets/images/photo-profil.png"
              alt="Photo Profil"
              fill
            />
          </div>
        </div>
        <div className="flex justify-center lg:justify-between mt-6 md:mt-24 lg:mt-[120px]">
          {displaySize.large && <TextLogo>Raffialdo</TextLogo>}
          <div className="flex gap-3 md:gap-10">
            {SOCIALS.map((social) => (
              <ContactAnchor key={social.link} href={social.link}>
                {social.text}
              </ContactAnchor>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
