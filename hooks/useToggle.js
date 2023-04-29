import { useState } from 'react';

export default function useToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prevStatus) => !prevStatus);
  };

  return [isOpen, toggleOpen];
}
