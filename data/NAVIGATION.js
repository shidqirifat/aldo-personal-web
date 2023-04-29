import { GLOBAL_DATA } from './CONFIG';

export const NAVIGATIONS = [
  {
    label: 'Home',
    anchor: '#home',
    link: '/#home',
  },
  {
    label: 'About',
    anchor: '#about',
    link: '/about#about',
  },
  {
    label: 'Service',
    anchor: '#services',
    link: '/#services',
  },
  {
    isTitle: true,
    label: 'Raffialdo Bayu',
  },
  {
    label: 'Resume',
    link: GLOBAL_DATA.resume,
    isExternal: true,
  },
  {
    label: 'Project',
    anchor: '#projects',
    link: '/#projects',
  },
  {
    label: 'Contact',
    anchor: '#contacts',
    link: '#contacts',
  },
];
