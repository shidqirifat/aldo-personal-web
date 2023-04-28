import React from 'react';

export const Paragraph = ({ children, className }) => {
  return (
    <h3
      className={`text-2xl leading-7 text-black-secondary font-inter ${className}`}
    >
      {children}
    </h3>
  );
};
