import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import { ReactComponent as DotsIcon } from '../../../../assets/dots-icon.svg';
import { ReactComponent as CloseIcon } from '../../../../assets/close-menu-icon.svg';
import { Category } from '../../../../api/insights';
import OutsideClicker from '../../../../components/OutsideClicker/OutsideClicker';
import { CATEGORIES } from '../../../../constants/insights';

import styles from './Menu.module.scss';

interface IMenuProps {
  onFilterToggle: (category: Category) => void;
  setActiveFilterItems: (categorys: Category[]) => void;
  activeFilterItems: Category[];
}

const Menu: React.FC<IMenuProps> = ({
  onFilterToggle,
  setActiveFilterItems,
  activeFilterItems,
}) => {
  const [t] = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const categories = useMemo(
    () =>
      Object.keys(CATEGORIES).map((category) => (
        <div
          onClick={() => onFilterToggle(category as Category)}
          className={classNames(styles.filterItem, {
            [styles.activeFilterItem]: activeFilterItems.includes(category as Category),
          })}
          key={category}
        >
          {CATEGORIES[category as Category]}
        </div>
      )),
    [activeFilterItems, onFilterToggle],
  );

  return (
    <div className={styles.root}>
      <div className={styles.panel}>
        <div className={styles.title}>{t('layout.insights.mobileMenu.name')}</div>
        <button className={styles.button} onClick={toggleMenu}>
          {isOpen ? <CloseIcon /> : <DotsIcon />}
        </button>
      </div>
      {isOpen && (
        <div className={styles.dropdownContainer}>
          <OutsideClicker onClick={toggleMenu}>
            <div className={styles.dropdown}>
              <div
                onClick={() => setActiveFilterItems([])}
                className={classNames(styles.filterItem, {
                  [styles.activeFilterItem]: activeFilterItems.length === 0,
                })}
              >
                {t('layout.insights.all')}
              </div>
              {categories}
            </div>
          </OutsideClicker>
        </div>
      )}
      {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </div>
  );
};

export default Menu;
