import useNavigation from 'hooks/useNavigation';
import useMediaQueries from 'hooks/useMediaQueries';
import { useSelector } from 'react-redux';
import NavigationMobile from './NavigationMobile';
import NavigationDesktop from './NavigationDesktop';

export default function Navigations() {
  useMediaQueries();
  const [activeNavigation] = useNavigation();
  const displaySize = useSelector((state) => state.displaySize);

  const NavigationsElement = !displaySize.extraLarge
    ? NavigationMobile
    : NavigationDesktop;

  return <NavigationsElement activeNavigation={activeNavigation} />;
}
