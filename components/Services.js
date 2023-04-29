import Image from 'next/image';
import React from 'react';
import { Paragraph } from './Text';
import { SERVICES } from 'data/SERVICE';
import RoundedBottom from './RoundedBottom';

export default function Services() {
  return (
    <>
      <div id="services" className="background-pattern pt-32">
        <h1 className="font-semibold text-[80px] leading-[120px] text-white-primary text-center">
          What can I do for you
        </h1>
        <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto mt-16 pb-5">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="text-center bg-white-primary rounded-[32px] py-10 px-8"
            >
              <div className="bg-grey-primary h-[120px] w-[120px] rounded-full grid place-content-center mx-auto">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={60}
                  height={60}
                />
              </div>
              <h2 className="text-black-primary font-semibold text-4xl leading-[54px] mt-8 mb-4">
                {service.title}
              </h2>
              <Paragraph>{service.description}</Paragraph>
            </div>
          ))}
        </div>
      </div>
      <RoundedBottom />
    </>
  );
}
