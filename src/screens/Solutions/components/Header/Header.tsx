import React from 'react';

import styles from './Header.module.scss';

interface IHeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<IHeaderProps> = ({ title, description }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Header;
