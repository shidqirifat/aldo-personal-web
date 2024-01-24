export const SOCIALS = [
  {
    text: 'Instagram',
    link: process.env.NEXT_PUBLIC_INSTAGRAM,
  },
  {
    text: 'Linkedln',
    link: process.env.NEXT_PUBLIC_LINKEDIN,
  },
  {
    text: 'Dribbble',
    link: process.env.NEXT_PUBLIC_DRIBBLE,
  },
  {
    text: 'Medium',
    link: process.env.NEXT_PUBLIC_MEDIUM,
  },
];

export const CONTACTS = [
  {
    text: process.env.NEXT_PUBLIC_EMAIL,
    link: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
  },
  {
    text: process.env.NEXT_PUBLIC_PHONE_NUMBER_WITH_SPACE,
    link: `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_PHONE_NUMBER}`,
  },
];

export const CONTENT = {
  start: 'Let’s start',
  together: 'project together?',
  collaborate: `Contact me for questions, collaboration, conversation, or just
  saying hello. Thank you for stopping by here.`,
};
