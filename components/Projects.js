import React, { useState } from 'react';
import Button from './Button';
import { EXPLORATIONS, CASE_STUDIES, typesProject } from 'data/PROJECT';
import Image from 'next/image';
import { Paragraph } from './Text';
import SeeMore from 'public/assets/icons/see-more.svg';
import Anchor from './Anchor';
import RoundedBottom from './RoundedBottom';
import { useSelector } from 'react-redux';
import { GLOBAL_DATA } from 'data/CONFIG';

const ToggleCategory = ({ children, isActive, onClick }) => {
  return (
    <Button
      onClick={onClick}
      isPrimary={isActive}
      className={`${isActive ? '' : '!border-none'} !px-4`}
    >
      <TextToggleButton isActive={isActive}>{children}</TextToggleButton>
    </Button>
  );
};

const TextToggleButton = ({ children, isActive }) => {
  return (
    <h2
      className={`font-semibold text-sm md:text-[28px] leading-5 md:leading-10 ${
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
      <div className="relative h-[250px] md:min-h-[500px] w-full">
        <div className="absolute z-10 top-4 md:top-6 left-4 md:left-6 flex gap-2 md:gap-4">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-xl border border-white-primary bg-[#FFFFFF3D] backdrop-blur-md p-2 md:p-3"
            >
              <h3 className="text-xs md:text-sm font-semibold leading-5 text-white-primary">
                {category}
              </h3>
            </div>
          ))}
        </div>
        <Image src={`/assets/images/${image}.png`} alt={title} fill />
        <div className="icon-arrow h-16 md:h-[120px] w-16 md:w-[120px] group-hover:bg-orange-primary transition absolute bottom-6 right-6 rounded-full border border-orange-primary"></div>
      </div>
      <h2 className="font-bold text-[22px] md:text-4xl leading-8 md:leading-[54px] text-black-primary mt-4 md:mt-8 mb-2 md:mb-4">
        {title}
      </h2>
      <Paragraph>{description}</Paragraph>
    </Anchor>
  );
};

const MoreButton = ({ isExploration, isSmallDisplay }) => {
  const link = isExploration ? GLOBAL_DATA.dribble : GLOBAL_DATA.medium;
  const size = isSmallDisplay ? 10 : 20;

  return (
    <Anchor href={link} isExternal>
      <Button isPrimary className="mx-auto block mt-6 md:mt-[60px]">
        <div className="flex items-center gap-3">
          <h4 className="text-sm md:text-[22px] leading-5 md:leading-8 text-white-primary font-medium">
            <span className="font-bold">See</span> more
          </h4>
          <Image src={SeeMore} alt="See more icon" width={size} height={size} />
        </div>
      </Button>
    </Anchor>
  );
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState(typesProject[0]);
  const [projects, setProjects] = useState(EXPLORATIONS);
  const displaySize = useSelector((state) => state.displaySize);

  const handleToggleCategory = (category) => {
    const isExploration = category === typesProject[0];

    setActiveCategory(category);
    setProjects(isExploration ? EXPLORATIONS : CASE_STUDIES);
  };

  return (
    <>
      <div
        id="projects"
        className="bg-white-primary -mt-4 md:mt-0 pt-20 md:pt-[120px]"
      >
        <div className="max-w-7xl mx-6 xl:mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6 md:mb-[60px]">
            <h1 className="text-black-primary font-semibold text-[32px] md:text-[80px] leading-[48px] md:leading-[120px]">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 md:gap-y-[60px]">
            {projects.map((project) => (
              <Project key={project.title} {...project} />
            ))}
          </div>
          <MoreButton
            isExploration={activeCategory === typesProject[0]}
            isSmallDisplay={displaySize.small}
          />
        </div>
      </div>
      <RoundedBottom isRoundedWhite />
    </>
  );
}
