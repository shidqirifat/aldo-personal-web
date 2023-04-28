import Link from 'next/link';
import React from 'react';

export default function Anchor({ href, className, children }) {
  return (
    <Link href={href} passHref legacyBehavior>
      <a href={href} className={className}>
        {children}
      </a>
    </Link>
  );
}
