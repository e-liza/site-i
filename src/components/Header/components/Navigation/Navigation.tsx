import React, { useMemo, useRef, useEffect } from 'react';
import { useLocation } from 'react-router';

import { getPercentage } from '../../../../helpers/misc';
import { IMenuItem, mainMenu } from '../../../../constants/menus';

import styles from './Navigation.module.scss';
import MenuItem from './MenuItem';

interface INavigationProps {
  items: IMenuItem[];
}

const Navigation: React.FC<INavigationProps> = () => {
  const location = useLocation();
  const currentElement: number = useMemo(
    () =>
      mainMenu.findIndex(
        (menuItem) =>
          menuItem.path === location.pathname ||
          menuItem.subMenuItems?.some((menuItem) => menuItem.path === location.pathname),
      ),
    [location.pathname],
  );

  const ulMenu = useRef<HTMLUListElement>(null);
  const menuSlider = useRef<HTMLHRElement>(null);

  useEffect(() => {
    if (!ulMenu || !ulMenu.current) {
      return;
    }
    let totalMarginLeft = 0;

    const menuWidth: number = ulMenu.current.offsetWidth;
    const menuHtmlItems: HTMLCollectionOf<HTMLElement> = ulMenu.current.getElementsByTagName('li');

    if (!menuHtmlItems.length) {
      return;
    }

    if (currentElement === -1 && menuSlider && menuSlider.current) {
      menuSlider.current.style.display = 'none';
      return;
    }

    for (const [index, menuElement] of Array.from(menuHtmlItems).entries()) {
      const elementWidth = getPercentage(menuElement.offsetWidth, menuWidth);
      const marginRight = parseInt(window.getComputedStyle(menuElement).marginRight);
      const elementWithMargin = getPercentage(menuElement.offsetWidth + marginRight, menuWidth);
      if (index === currentElement && menuSlider && menuSlider.current) {
        menuSlider.current.style.display = 'block';
        menuSlider.current.style.width = elementWidth + '%';
        menuSlider.current.style.marginLeft = totalMarginLeft + '%';
      }

      totalMarginLeft += elementWithMargin;
    }
  }, [currentElement]);

  return (
    <nav className={styles.navPanel}>
      <ul ref={ulMenu}>
        {useMemo(
          () =>
            mainMenu.map(({ name, subMenuItems, path }) => (
              <MenuItem key={name} name={name} path={path} subMenuItems={subMenuItems} />
            )),
          [],
        )}
      </ul>
      <hr ref={menuSlider} />
    </nav>
  );
};

export default Navigation;
