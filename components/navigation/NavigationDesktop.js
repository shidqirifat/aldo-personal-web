import Anchor from 'components/Anchor';
import { TextLogo } from 'components/Text';
import { NAVIGATIONS } from 'data/NAVIGATION';
import React from 'react';

const Navigation = ({ children, link, isExternal, isActive }) => {
  return (
    <div>
      <Anchor
        href={link}
        isExternal={isExternal}
        className={`${
          isActive
            ? 'font-semibold underline underline-offset-4 text-orange-primary hover:text-orange-primary/90'
            : 'text-white-secondary hover:text-white-primary'
        } transition text-xl leading-6 font-inter`}
      >
        {children}
      </Anchor>
    </div>
  );
};

export default function NavigationDesktop({ activeNavigation }) {
  return (
    <div
      className="bg-black-primary rounded-[54px] py-8 px-[60px] max-w-7xl mx-auto w-[87vw] fixed z-20 
      center-horizontal top-8 flex-center-both gap-20 shadow-lg"
    >
      {NAVIGATIONS.map((navigation) =>
        navigation.isTitle ? (
          <TextLogo key={navigation.label}>{navigation.label}</TextLogo>
        ) : (
          <Navigation
            key={navigation.label}
            link={navigation.link}
            isActive={activeNavigation === navigation.anchor}
            isExternal={navigation.isExternal}
          >
            {navigation.label}
          </Navigation>
        ),
      )}
    </div>
  );
}
