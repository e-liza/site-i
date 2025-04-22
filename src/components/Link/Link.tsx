import React from 'react';
import classNames from 'classnames';
import { NavLink, NavLinkProps } from 'react-router-dom';

import styles from './Link.module.scss';

export interface ILinkProps extends NavLinkProps {
  disabled?: boolean;
}

const Link: React.FC<ILinkProps> = ({ disabled, children, className, ...restProps }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(
          styles.root,
          disabled && styles.rootDisabled,
          isActive && styles.rootActive, // Dynamically add 'rootActive' when the link is active
          className,
        )
      }
      {...restProps}
    >
      {children}
    </NavLink>
  );
};

export default Link;
