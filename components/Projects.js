import React, { useState } from 'react';
import Button from './Button';
import { EXPLORATIONS, CASE_STUDIES, typesProject } from 'data/PROJECT';
import Image from 'next/image';
import { Paragraph } from './Text';
import SeeMore from 'public/assets/icons/see-more.svg';
import Anchor from './Anchor';

const ToggleCategory = ({ children, isActive, onClick }) => {
  return (
    <Button
      onClick={onClick}
      isPrimary={isActive}
      className={isActive ? '' : '!border-none'}
    >
      <TextToggleButton isActive={isActive}>{children}</TextToggleButton>
    </Button>
  );
};

const TextToggleButton = ({ children, isActive }) => {
  return (
    <h2
      className={`font-semibold text-[28px] leading-10 ${
        isActive ? 'text-white-primary' : 'text-black-primary'
      }`}
    >
      {children}
    </h2>
  );
};

const Project = ({ title, description, categories, image, link }) => {
  return (
    <Anchor href={link} isExternal className="group project-item">
      <div className="relative min-h-[500px] w-full">
        <div className="absolute z-10 top-6 left-6 flex gap-4">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-xl border border-white-primary bg-[#FFFFFF3D] backdrop-blur-md p-3"
            >
              <h3 className="text-sm font-semibold leading-5 text-white-primary">
                {category}
              </h3>
            </div>
          ))}
        </div>
        <Image src={`/assets/images/${image}.png`} alt={title} fill />
        <div className="icon-arrow h-[120px] w-[120px] group-hover:bg-orange-primary transition absolute bottom-6 right-6 rounded-full border border-orange-primary"></div>
      </div>
      <h2 className="font-bold text-4xl leading-[54px] text-black-primary mt-8 mb-4">
        {title}
      </h2>
      <Paragraph>{description}</Paragraph>
    </Anchor>
  );
};

const MoreButton = () => {
  return (
    <Anchor href="https://dribbble.com/raffialdo" isExternal>
      <Button isPrimary className="mx-auto block mt-[60px]">
        <div className="flex items-center gap-3">
          <h4 className="text-[22px] leading-8 text-white-primary font-medium">
            <span className="font-bold">See</span> more
          </h4>
          <Image src={SeeMore} alt="See more icon" width={20} height={20} />
        </div>
      </Button>
    </Anchor>
  );
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState(typesProject[0]);
  const [projects, setProjects] = useState(EXPLORATIONS);

  const handleToggleCategory = (category) => {
    const isExploration = category === typesProject[0];

    setActiveCategory(category);
    setProjects(isExploration ? EXPLORATIONS : CASE_STUDIES);
  };

  return (
    <>
      <div className="-mt-[60px] h-[90px] bg-white-primary relative -z-10" />
      <div
        id="projects"
        className="bg-white-primary rounded-b-[60px] pb-[60px] -mt-6 pt-[160px]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-[60px]">
            <h1 className="text-black-primary font-semibold text-[80px] leading-[120px]">
              Featured Project
            </h1>
            <div className="flex gap-2 border-2 border-orange-primary rounded-[53px] p-2">
              {typesProject.map((type) => (
                <ToggleCategory
                  key={type}
                  onClick={() => handleToggleCategory(type)}
                  isActive={activeCategory === type}
                >
                  {type}
                </ToggleCategory>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-[60px]">
            {projects.map((project) => (
              <Project key={project.title} {...project} />
            ))}
          </div>
          <MoreButton />
        </div>
      </div>
    </>
  );
}
