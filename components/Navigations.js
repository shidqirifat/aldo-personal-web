import { NAVIGATIONS } from 'data/NAVIGATION';
import Anchor from './Anchor';
import { TextLogo } from './Text';
import useNavigation from 'hooks/useNavigation';
import useMediaQueries from 'hooks/useMediaQueries';
import { useSelector } from 'react-redux';
import Menu from 'public/assets/icons/menu.svg';
import Image from 'next/image';

const Navigation = ({ children, link, isActive }) => {
  return (
    <div>
      <Anchor
        href={link}
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

export default function Navigations() {
  useMediaQueries();
  const [activeNavigation] = useNavigation();
  const displaySize = useSelector((state) => state.displaySize);

  if (!displaySize.extraLarge) {
    return (
      <div className="bg-black-primary p-6 fixed z-20 w-full flex justify-between shadow-md">
        <TextLogo>Raffialdo Bayu</TextLogo>
        <div className="relative w-6 h-6">
          <Image src={Menu} alt="Hamburger Button" fill />
        </div>
      </div>
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
          >
            {navigation.label}
          </Navigation>
        ),
      )}
    </div>
  );
}
