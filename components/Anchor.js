import Link from 'next/link';
import React from 'react';

export default function Anchor({ href, className, isExternal, children }) {
  return (
    <Link href={href} passHref legacyBehavior>
      <a
        href={href}
        target={isExternal ? '_blank' : '_self'}
        className={className}
      >
        {children}
      </a>
    </Link>
  );
}
