import React from 'react';

interface IPlusProps {
  className?: string;
}

const Plus: React.FC<IPlusProps> = ({ className }) => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      className={className}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.1667 0H10.8334V10.8328H0V19.1661H10.8334V30H19.1667V19.1661H30V10.8328H19.1667V0Z"
      fill="#FFFFF"
    />
  </svg>
);

export default Plus;
