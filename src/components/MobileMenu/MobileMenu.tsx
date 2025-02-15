import React, { useMemo } from 'react';
import classNames from 'classnames';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from '../Button/Button';
import { Routes } from '../../constants/routes';
import SubMenu from '../SubMenu/SubMenu';
import { mainMenu, IMenuItem } from '../../constants/menus';

import styles from './MobileMenu.module.scss';

interface IMobileMenu {
  active: boolean;
  onItemClick?: () => void;
}

const MobileMenu: React.FC<IMobileMenu> = ({ active, onItemClick }) => {
  const [t] = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const menu = useMemo(
    () =>
      mainMenu.map((menuItem: IMenuItem) => (
        <li className={styles.menuItem} key={menuItem.name}>
          {menuItem.subMenuItems ? (
            <SubMenu
              onItemClick={onItemClick}
              title={menuItem.name}
              menuItems={menuItem.subMenuItems}
              description={menuItem.description || ''}
            />
          ) : (
            <Link
              className={classNames(styles.menuItem, {
                [styles.activeLink]: location.pathname === menuItem.path,
              })}
              onClick={onItemClick}
              key={menuItem.name}
              to={menuItem.path}
            >
              {t(menuItem.name)}
            </Link>
          )}
        </li>
      )),
    [location.pathname, onItemClick, t],
  );

  return (
    <div className={classNames(styles.mobileMenuContainer, { [styles.active]: active })}>
      <div className={styles.menuContainer}>
        <ul className={styles.menu}>{menu}</ul>
      </div>
      <div className={styles.controls}>
        <Button
          className={styles.requestDemoButton}
          type="primary"
          name={t('layout.headerButton.requestDemo')}
          onClick={() => {
            onItemClick && onItemClick();
            history.push(Routes.DemoRequest);
          }}
        />
      </div>
    </div>
  );
};

export default MobileMenu;
