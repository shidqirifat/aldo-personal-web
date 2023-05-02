import Image from 'next/image';
import React from 'react';
import { Paragraph } from './Text';
import { SERVICES } from 'data/SERVICE';
import RoundedBottom from './RoundedBottom';
import { useSelector } from 'react-redux';

const CardService = ({ title, icon, description, isSmallDisplay }) => {
  const size = isSmallDisplay ? 48 : 60;

  return (
    <div
      key={title}
      className="text-center w-[100%] sm:w-[40%] lg:w-[30%] bg-white-primary rounded-[32px] py-6 md:py-10 px-5 md:px-4"
    >
      <div className="bg-grey-primary h-20 md:h-[120px] w-20 md:w-[120px] rounded-full grid place-content-center mx-auto">
        <Image src={icon} alt={title} width={size} height={size} />
      </div>
      <h2 className="text-black-primary font-semibold text-[32px] md:text-4xl leading-8 md:leading-[54px] mt-4 md:mt-8 mb-2 md:mb-4">
        {title}
      </h2>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};

export default function Services() {
  const displaySize = useSelector((state) => state.displaySize);

  return (
    <>
      <div
        id="services"
        className="background-pattern -mt-10 md:mt-0 pt-16 md:pt-32"
      >
        <h1 className="font-semibold text-[32px] md:text-[80px] leading-[48px] md:leading-[120px] w-44 md:w-auto mx-auto md:mx-0 text-white-primary text-center">
          What can I do for you
        </h1>
        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-6 xl:mx-auto mt-6 md:mt-16 pb-5">
          {SERVICES.map((service) => (
            <CardService
              key={service.title}
              {...service}
              isSmallDisplay={displaySize.small}
            />
          ))}
        </div>
      </div>
      <RoundedBottom />
    </>
  );
}
