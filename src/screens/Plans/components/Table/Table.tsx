import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as ActiveCheckIcon } from '../../../../assets/active-check.svg';
import { ReactComponent as InactiveCheckIcon } from '../../../../assets/inactive-check.svg';
import { ITable, ActiveValue } from '../../../../constants/plans';

import styles from './Table.module.scss';

const Cell: React.FC<{ type: ActiveValue }> = ({ type }) => {
  switch (type) {
    case ActiveValue.Active:
      return <ActiveCheckIcon />;
    case ActiveValue.Inactive:
      return <InactiveCheckIcon />;
    case ActiveValue.AddOn:
      return <div className={styles.tag}>Add–On</div>;
    default:
      return null;
  }
};

const Table: React.FC<ITable> = ({ title, rows }) => {
  const [t] = useTranslation();
  return (
    <div className={styles.table}>
      <div className={styles.head}>
        <div className={styles.headCell}>{t(title)}</div>
        <div className={styles.cell}>{t('layout.comparisonTable.platformOnly')}</div>
        <div className={styles.cell}>{t('layout.comparisonTable.platformAndServices')}</div>
      </div>
      {useMemo(() => {
        return rows.map(({ id, title, description, cells }) => {
          return (
            <div key={id} className={styles.row}>
              <div className={styles.headCell}>
                <div className={styles.cellTitle}>{t(title)}</div>
                <div className={styles.cellDescription}>{t(description)}</div>
              </div>
              <div className={styles.cell}>
                <span>{t('layout.comparisonTable.platformOnly')}</span>
                <Cell type={cells[0]} />
              </div>
              <div className={styles.cell}>
                <span>{t('layout.comparisonTable.platformAndServices')}</span>
                <Cell type={cells[1]} />
              </div>
            </div>
          );
        });
      }, [rows, t])}
    </div>
  );
};

export default Table;
