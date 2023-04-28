import React from 'react';

export default function Button({
  children,
  isPrimary,
  className = '',
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`${
        isPrimary
          ? 'bg-orange-primary hover:bg-orange-primary/90'
          : 'bg-white-primary hover:bg-orange-primary/10 border border-orange-primary'
      } transition rounded-[100px] py-6 px-8 ${className}`}
    >
      {children}
    </button>
  );
}
