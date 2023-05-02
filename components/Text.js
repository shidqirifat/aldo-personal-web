import React from 'react';

export const Paragraph = ({ children, className = '' }) => {
  return (
    <h3
      className={`text-xs md:text-2xl leading-[18px] md:leading-[34px] text-black-secondary font-inter ${className}`}
    >
      {children}
    </h3>
  );
};

export const TextLogo = ({ children }) => {
  return (
    <div className="flex-center-both gap-2">
      <div className="bg-white-primary h-2 w-2 rounded-full" />
      <h1 className="text-white-primary font-semibold text-base md:text-xl lg:text-[28px] leading-6 lg:leading-10 text-center">
        {children}
      </h1>
      <div className="bg-white-primary h-2 w-2 rounded-full" />
    </div>
  );
};

export const TextButton = ({ isPrimary, children }) => {
  return (
    <h3
      className={`font-medium text-sm sm:text-[22px] leading-5 md:leading-8 ${
        isPrimary ? 'text-white-primary' : 'text-orange-primary'
      }`}
    >
      {children}
    </h3>
  );
};

export const Bold = ({ children }) => (
  <span className="font-bold">{children}</span>
);
