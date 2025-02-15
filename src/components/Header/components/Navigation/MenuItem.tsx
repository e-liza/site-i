import React, { useCallback } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ISubMenuItem } from '../../../../constants/menus';
import isTouchDevice from '../../../../utils/is-touch-device';

import styles from './Navigation.module.scss';

interface IMenuItemProps {
  name: string;
  path: string;
  subMenuItems?: ISubMenuItem[];
}

const isTouchable = isTouchDevice();

const MenuItem: React.FC<IMenuItemProps> = ({ name, path, subMenuItems }) => {
  const [t] = useTranslation();
  const dropDownMenu = useCallback(
    (subMenuItems: ISubMenuItem[]) =>
      subMenuItems.map((subMenuItem: ISubMenuItem) => (
        <div key={subMenuItem.name} className={styles.subMenuItem}>
          <Link
            onClick={(event) => {
              event.stopPropagation();
            }}
            to={subMenuItem.path}
          >
            <div>
              <span>{t(subMenuItem.name)}</span>
              <p>{t(subMenuItem.description)}</p>
            </div>
          </Link>
        </div>
      )),
    [t],
  );
  return (
    <li key={name} className={classNames(styles.subMenuTitle, !isTouchable && styles.subMenuOpen)}>
      <Link to={path}>{t(name)}</Link>
      {subMenuItems && (
        <div className={styles.subMenuContainer}>
          <div
            className={classNames(styles.dropdownMenu, {
              [styles.companySubMenu]: name === 'layout.menu.dropdown.company.name',
            })}
          >
            {dropDownMenu(subMenuItems)}
          </div>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
