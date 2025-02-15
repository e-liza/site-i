import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import arrow from '../../assets/menuArrow.svg';
import { ISubMenuItem } from '../../constants/menus';

import styles from './SubMenu.module.scss';

interface ISubMenu {
  title: string;
  menuItems: ISubMenuItem[];
  description: string;
  onItemClick?: () => void;
}

const SubMenu: React.FC<ISubMenu> = ({ title, menuItems, description, onItemClick }) => {
  const [t] = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItemClick = () => {
    setIsOpen(false);
    onItemClick && onItemClick();
  };

  const locationMatcher = (location: string, subMenuItems: ISubMenuItem[]): boolean => {
    const matchedResults = subMenuItems.filter(
      (menuItem: ISubMenuItem) => menuItem.path === location,
    );

    return matchedResults.length > 0;
  };

  return isOpen ? (
    <div className={styles.subMenu}>
      <div className={styles.subMenuContent}>
        <div className={styles.title} onClick={() => setIsOpen(false)}>
          <img src={arrow} className={styles.backArrow} alt="arrow" />
          <span className={styles.titleUndeline}>{t(title)}</span>
        </div>
        <div className={styles.description}>{t(description)}</div>
        <div className={styles.subMenuItemsBlock}>
          {menuItems.map((menuItem) => (
            <div className={styles.menuItem} key={menuItem.name} onClick={menuItemClick}>
              <Link
                className={classNames({
                  [styles.activeMenuItem]: location.pathname === menuItem.path,
                })}
                to={menuItem.path}
              >
                {t(menuItem.name)}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div
      className={classNames(styles.title, {
        [styles.activeTitle]: locationMatcher(location.pathname, menuItems),
      })}
      onClick={() => setIsOpen(true)}
    >
      {t(title)}
      <img className={styles.openArrow} src={arrow} alt="arrow" />
    </div>
  );
};

export default SubMenu;
