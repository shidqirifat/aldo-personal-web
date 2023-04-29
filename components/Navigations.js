import { NAVIGATIONS } from 'data/NAVIGATION';
import Anchor from './Anchor';
import { TextLogo } from './Text';
import useNavigation from 'hooks/useNavigation';

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
  const [activeNavigation] = useNavigation();

  return (
    <div className="bg-black-primary rounded-[54px] py-8 px-[60px] max-w-7xl w-[87vw] fixed z-20 center-horizontal top-8 flex-center-both gap-20 shadow-lg">
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
