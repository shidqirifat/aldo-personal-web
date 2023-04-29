import { TextLogo } from 'components/Text';
import useToggle from 'hooks/useToggle';
import Image from 'next/image';
import React from 'react';
import Menu from 'public/assets/icons/menu.svg';
import Close from 'public/assets/icons/close.svg';
import Anchor from 'components/Anchor';
import { NAVIGATIONS } from 'data/NAVIGATION';

const Navigation = ({ link, children, onClick, isExternal, isActive }) => {
  return (
    <Anchor href={link} isExternal={isExternal}>
      <div
        onClick={onClick}
        className={`${
          isActive ? 'bg-orange-primary' : ''
        } hover:bg-orange-primary/30 p-4 text-center`}
      >
        <h2 className="text-white-primary font-semibold text-base leading-6">
          {children}
        </h2>
      </div>
    </Anchor>
  );
};

const NavigationDrawer = ({
  isOpenDrawer,
  toggleOpenDrawer,
  activeNavigation,
}) => {
  return (
    <div
      className={`bg-black-primary shadow-md absolute left-0 right-0 z-20 rounded-b-[30px] pb-2 ${
        isOpenDrawer
          ? 'opacity-100 top-[72px] visible'
          : 'opacity-0 top-14 invisible'
      } transition-all`}
    >
      <div className="border-t border-white-primary mb-6" />
      {NAVIGATIONS.map(
        (navigation) =>
          !navigation.isTitle && (
            <Navigation
              key={navigation.label}
              link={navigation.link}
              isExternal={navigation.isExternal}
              isActive={activeNavigation === navigation.anchor}
              onClick={toggleOpenDrawer}
            >
              {navigation.label}
            </Navigation>
          ),
      )}
    </div>
  );
};

export default function NavigationMobile({ activeNavigation }) {
  const [isOpenDrawer, toggleOpenDrawer] = useToggle(false);
  return (
    <>
      <div className="fixed z-20 w-full">
        <div className="bg-black-primary shadow-md flex justify-between p-6">
          <TextLogo>Raffialdo Bayu</TextLogo>
          <div onClick={toggleOpenDrawer} className="relative w-6 h-6">
            <Image
              src={isOpenDrawer ? Close : Menu}
              alt={`${isOpenDrawer ? 'Close' : 'Hamburger'} Button`}
              fill
            />
          </div>
        </div>
        <NavigationDrawer
          isOpenDrawer={isOpenDrawer}
          toggleOpenDrawer={toggleOpenDrawer}
          activeNavigation={activeNavigation}
        />
      </div>
    </>
  );
}
