import React, { useState, useEffect, useMemo } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ReactComponent as DotsIcon } from '../../../../assets/dots-icon.svg';
import { ReactComponent as CloseIcon } from '../../../../assets/close-menu-icon.svg';
import { Routes } from '../../../../constants/routes';
import OutsideClicker from '../../../../components/OutsideClicker/OutsideClicker';

import styles from './Menu.module.scss';

const menu: IMenuItem[] = [
  { route: Routes.Solutions.Overview, title: 'layout.solutions.overview' },
  { route: Routes.Solutions.Employee, title: 'layout.solutions.employee' },
  { route: Routes.Solutions.Payroll, title: 'layout.solutions.payroll' },
  { route: Routes.Solutions.Company, title: 'layout.solutions.company' },
  { route: Routes.Solutions.Business, title: 'layout.solutions.business' },
  { route: Routes.Solutions.Mobile, title: 'layout.solutions.mobile' },
  { route: Routes.Solutions.IvySupport, title: 'layout.solutions.ivySupport' },
];

interface IMenuItem {
  route: string;
  title: string;
}

const Menu = () => {
  const [t] = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<IMenuItem>({
    title: '',
    route: '',
  });
  const [otherItems, setOtherItems] = useState<IMenuItem[]>([]);
  const match = useRouteMatch('/solutions/:solution');

  const matchUrl = match?.url;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let active: IMenuItem = menu[0];
    const others: IMenuItem[] = [];

    menu.forEach((item) => {
      if (item.route === matchUrl) {
        active = item;
      } else {
        others.push(item);
      }
    });

    setActiveItem(active);
    setOtherItems(others);
  }, [matchUrl]);

  return (
    <div className={styles.root}>
      <div className={styles.panel}>
        <div className={styles.title}>{t('layout.solutions.solutions')}</div>
        <button className={styles.button} onClick={toggleMenu}>
          {isOpen ? <CloseIcon /> : <DotsIcon />}
        </button>
      </div>
      {isOpen && (
        <div className={styles.dropdownContainer}>
          <OutsideClicker onClick={toggleMenu}>
            <div className={styles.dropdown}>
              <div className={styles.activeItem}>{t(activeItem.title)}</div>
              <div className={styles.otherItems}>
                {otherItems.map(({ title, route }) => (
                  <div className={styles.linkContainer}>
                    <NavLink key={route} to={route} className={styles.link} onClick={toggleMenu}>
                      {t(title)}
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          </OutsideClicker>
        </div>
      )}
      {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
      <div className={styles.tabs}>
        {useMemo(
          () =>
            menu.map(({ title, route }) => (
              <div key={route} className={styles.tab}>
                <NavLink
                  to={route}
                  activeClassName={styles.activeTabLink}
                  className={styles.tabLink}
                >
                  {t(title)}
                </NavLink>
              </div>
            )),
          [t],
        )}
      </div>
    </div>
  );
};

export default Menu;
