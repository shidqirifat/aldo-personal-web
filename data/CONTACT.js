import { GLOBAL_DATA } from './CONFIG';

export const SOCIALS = [
  {
    text: 'Instagram',
    link: GLOBAL_DATA.instagram,
  },
  {
    text: 'Linkedln',
    link: GLOBAL_DATA.linkedin,
  },
  {
    text: 'Dribbble',
    link: GLOBAL_DATA.dribble,
  },
  {
    text: 'Medium',
    link: GLOBAL_DATA.medium,
  },
];

export const CONTACTS = [
  {
    text: GLOBAL_DATA.email,
    link: `mailto:${GLOBAL_DATA.email}`,
  },
  {
    text: GLOBAL_DATA.phone_number_with_space,
    link: `https://api.whatsapp.com/send?phone=${GLOBAL_DATA.phone_number}`,
  },
];

export const CONTENT = {
  start: 'Let’s start',
  together: 'project together?',
  collaborate: `Contact me for questions, collaboration, conversation, or just
  saying hello. Thank you for stopping by here.`,
};
