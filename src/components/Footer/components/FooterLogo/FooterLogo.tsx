import React from 'react';
import classNames from 'classnames';

import logo from '../../../../assets/footerLogo.svg';

import styles from './FooterLogo.module.scss';

interface IFooterLogoProps {
  className?: string;
}

const FooterLogo: React.FC<IFooterLogoProps> = ({ className }) => (
  <div className={classNames(styles.logoContainer, className)}>
    <img src={logo} className={styles.logoImg} alt="logo" />
    <div className={styles.companyName}>
      <span>©</span>
      <span>2020 Ivy Solutions</span>
    </div>
  </div>
);

export default FooterLogo;
