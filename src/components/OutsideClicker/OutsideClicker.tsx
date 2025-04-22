import React, { useRef, useEffect, ReactNode } from 'react';

interface IOutsideClickerProps {
  onClick: (event: MouseEvent) => void;
  children: ReactNode; // ✅ Added missing 'children' prop type
}

const OutsideClicker: React.FC<IOutsideClickerProps> = ({ children, onClick }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClick(event);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClick]);

  return <div ref={ref}>{children}</div>;
};

export default OutsideClicker;
