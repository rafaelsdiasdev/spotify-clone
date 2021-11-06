import { useEffect, useState } from 'react';

export const useClickOutside = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = (event) => {
      if (el.current !== null && !el.current.contains(event.target)) {
        setIsActive(!initialState);
      }

      if (isActive) {
        window.addEventListener('click', onClick);
      }
    };

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [el, isActive]);

  return [isActive, setIsActive];
};
