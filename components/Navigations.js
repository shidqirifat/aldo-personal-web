import { NAVIGATIONS } from 'data/NAVIGATION';
import Anchor from './Anchor';

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

const Title = ({ children }) => {
  return (
    <div className="flex-center-both gap-2">
      <div className="bg-white-primary h-2 w-2 rounded-full" />
      <h1 className="text-white-primary font-semibold text-3xl leading-10 text-center">
        {children}
      </h1>
      <div className="bg-white-primary h-2 w-2 rounded-full" />
    </div>
  );
};

export default function Navigations() {
  return (
    <div className="bg-black-primary rounded-[54px] py-8 px-[60px] max-w-7xl w-[87vw] fixed z-10 center-horizontal top-8 flex-center-both gap-20">
      {NAVIGATIONS.map((navigation) =>
        navigation.isTitle ? (
          <Title key={navigation.label}>{navigation.label}</Title>
        ) : (
          <Navigation
            key={navigation.label}
            link={navigation.link}
            isActive={navigation.isActive}
          >
            {navigation.label}
          </Navigation>
        ),
      )}
    </div>
  );
}
