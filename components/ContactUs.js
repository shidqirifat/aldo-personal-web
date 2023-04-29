import Image from 'next/image';
import React from 'react';
import { Paragraph, TextLogo } from './Text';
import Anchor from './Anchor';
import { CONTACTS, SOCIALS, CONTENT as content } from 'data/CONTACT';

const ContactAnchor = ({ children, className = '', href }) => {
  return (
    <Anchor
      href={href}
      isExternal
      className={`font-semibold text-[28px] leading-[42px] text-white-primary ${className}`}
    >
      {children}
    </Anchor>
  );
};

export default function ContactUs() {
  return (
    <div id="contacts" className="background-pattern">
      <div className="pt-[120px] pb-20 max-w-7xl mx-auto">
        <div className="flex gap-[178px] items-end justify-between">
          <div>
            <h1 className="font-semibold text-[80px] leading-[120px] text-white-primary">
              {content.start} <br /> {content.together}
            </h1>
            <Paragraph className="text-white-secondary mt-6 mb-10">
              {content.collaborate}
            </Paragraph>
            <div className="flex gap-10">
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
          <div className="min-h-[360px] min-w-[360px] relative">
            <Image
              src="/assets/images/photo-profil.png"
              alt="Photo Profil"
              fill
            />
          </div>
        </div>
        <div className="flex justify-between mt-[120px]">
          <TextLogo>Raffialdo</TextLogo>
          <div className="flex gap-10">
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
