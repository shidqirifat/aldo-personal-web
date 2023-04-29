import React from 'react';

export default function RoundedBottom({ isRoundedWhite }) {
  return (
    <div
      className={`h-6 md:h-[60px] ${
        isRoundedWhite ? 'bg-black-primary' : 'bg-white-primary'
      }`}
    >
      <div
        className={`h-full rounded-b-[60px] ${
          isRoundedWhite
            ? 'bg-white-primary'
            : 'bg-black-primary background-pattern'
        }`}
      />
    </div>
  );
}
