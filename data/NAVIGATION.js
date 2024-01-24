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
    link: process.env.NEXT_PUBLIC_RESUME,
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
