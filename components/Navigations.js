import { NAVIGATIONS } from 'data/NAVIGATION';
import Anchor from './Anchor';
import { TextLogo } from './Text';
import useNavigation from 'hooks/useNavigation';
import useMediaQueries from 'hooks/useMediaQueries';
import { useSelector } from 'react-redux';
import Menu from 'public/assets/icons/menu.svg';
import Image from 'next/image';
import useToggle from 'hooks/useToggle';

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

const NavigationMobile = ({ link, children, onClick, isActive }) => {
  return (
    <Anchor href={link}>
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
            <NavigationMobile
              key={navigation.label}
              link={navigation.link}
              isActive={activeNavigation === navigation.anchor}
              onClick={toggleOpenDrawer}
            >
              {navigation.label}
            </NavigationMobile>
          ),
      )}
    </div>
  );
};

export default function Navigations() {
  useMediaQueries();
  const [activeNavigation] = useNavigation();
  const displaySize = useSelector((state) => state.displaySize);
  const [isOpenDrawer, toggleOpenDrawer] = useToggle(false);

  if (!displaySize.extraLarge) {
    return (
      <>
        <div className="fixed z-20 w-full">
          <div className="bg-black-primary shadow-md flex justify-between p-6">
            <TextLogo>Raffialdo Bayu</TextLogo>
            <div onClick={toggleOpenDrawer} className="relative w-6 h-6">
              <Image src={Menu} alt="Hamburger Button" fill />
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
