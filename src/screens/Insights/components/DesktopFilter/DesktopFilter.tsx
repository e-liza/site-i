import React, { useMemo } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { Category } from '../../../../api/insights';
import { CATEGORIES } from '../../../../constants/insights';

import styles from './DesktopFilter.module.scss';

interface IDesktopFilterProps {
  onFilterToggle: (category: Category) => void;
  setActiveFilterItems: (categorys: Category[]) => void;
  activeFilterItems: Category[];
}

const DesktopFilter: React.FC<IDesktopFilterProps> = ({
  activeFilterItems,
  onFilterToggle,
  setActiveFilterItems,
}) => {
  const [t] = useTranslation();
  const filterItems = useMemo(
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
    <div className={styles.container}>
      <div
        className={classNames(styles.filterItem, {
          [styles.activeFilterItem]: activeFilterItems.length === 0,
        })}
        onClick={() => setActiveFilterItems([])}
      >
        {t('layout.insights.all')}
      </div>
      {filterItems}
    </div>
  );
};

export default DesktopFilter;
