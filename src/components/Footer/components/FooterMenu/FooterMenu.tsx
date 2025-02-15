import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { IFooterMenu } from '../../../../constants/menus';

import styles from './FooterMenu.module.scss';

interface IFooterMenuProps extends IFooterMenu {
  className?: string;
}

const FooterMenu: React.FC<IFooterMenuProps> = ({ name, menuItems, className }) => {
  const [t] = useTranslation();

  return (
    <div className={className}>
      <div className={styles.menuTitle}>{t(name)}</div>
      <ul className={styles.menu}>
        {menuItems.map((menuItem) => (
          <li key={menuItem.name} className={styles.menuItem}>
            {menuItem.type === 'mail' ? (
              <a className={styles.mail} href={`mailto:${menuItem.path}`}>
                {t(menuItem.name)}
              </a>
            ) : (
              <Link to={menuItem.path}>{t(menuItem.name)}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;
