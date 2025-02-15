import React from 'react';

import { IFooterMenu } from '../../constants/menus';

import FooterLogo from './components/FooterLogo/FooterLogo';
import FooterMenu from './components/FooterMenu/FooterMenu';
import styles from './Footer.module.scss';

interface IFooterProps {
  menuItems: IFooterMenu[];
}

const Footer: React.FC<IFooterProps> = ({ menuItems }) => (
  <footer className={styles.footer}>
    <div className={styles.footerMenusContainer}>
      {menuItems.map((menuItem) => (
        <FooterMenu
          key={menuItem.name}
          name={menuItem.name}
          menuItems={menuItem.menuItems}
          className={styles.footerMenu}
        />
      ))}
    </div>
    <div className={styles.socialContainer}>
      <div className={styles.socialBlock}>
        <div className={styles.footerLogo}>
          <FooterLogo />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
