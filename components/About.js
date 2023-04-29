import React from 'react';
import { Paragraph } from './Text';
import Image from 'next/image';
import RoundedBottom from './RoundedBottom';

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
              <TextAbout>Hi, nice to meet you👋</TextAbout>
              <h1 className="text-black-primary text-[100px] leading-[120px] font-semibold my-6">
                Have 1 year experience in UI/UX Designer
              </h1>
              <TextAbout className="w-[65%]">
                My name is Raffialdo Bayu Anggara, I graduated as a computer
                science graduate from Bhayangkara University, Jakarta Raya.
                Currently I am a UI/UX Design Junior who has been in this
                technology industry for one year and will soon become a mid
                level Product Designer.
              </TextAbout>
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
            <TextAbout>
              With one year experience in UI/UX Design, I have worked on various
              projects for companies from within the country or abroad to
              develop their products and provide high-quality solutions in
              startup and agency environments. Armed with this experience, I
              have the ability to design a product from various aspects. I have
              gained expertise in user research, concept development,
              prototyping and testing to ensure the products I design meet the
              needs of the target audience.
            </TextAbout>
            <TextAbout>
              I am skilled in using a variety of design tools and software, and
              have a solid understanding of design principles and methodologies.
              I am currently looking for new challenges and opportunities in a
              UI/UX Design position for my professional growth and development.
              I am open to remote work or be part of your company full time. If
              you want to know more about my background and skills, please click
              &quot;Download Resume&quot; below to find out more about me.
            </TextAbout>
          </div>
        </div>
      </div>
      <RoundedBottom isRoundedWhite />
    </>
  );
}
