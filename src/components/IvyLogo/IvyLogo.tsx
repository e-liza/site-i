import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import { Routes } from '../../constants/routes';

interface IIvyLogoProps {
  path?: string;
  className?: string;
  width?: number;
  height?: number;
}

const IvyLogo: React.FC<IIvyLogoProps> = ({ path, className, width, height }) => {
  return (
    <NavLink to={path || Routes.Home} className={className}>
      <LogoIcon width={width} height={height} />
    </NavLink>
  );
};

export default IvyLogo;
