import { useState } from 'react';

export default function useToggle(initStatus = false) {
  const [isOpen, setIsOpen] = useState(initStatus);

  const toggleOpen = () => {
    setIsOpen((prevStatus) => !prevStatus);
  };

  return [isOpen, toggleOpen];
}
