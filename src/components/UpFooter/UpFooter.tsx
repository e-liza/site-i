import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './UpFooter.module.scss';

interface IUpFooterProps {
  title: string;
  description: string;
  link: {
    title: string;
    path: string;
  };
}

const UpFooter: React.FC<IUpFooterProps> = ({ link, title, description }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{title}</div>
      <div className={styles.group}>
        <div className={styles.description}>{description}</div>
        <NavLink to={link.path} className={styles.link}>
          {link.title}
        </NavLink>
      </div>
    </div>
  );
};

export default UpFooter;
