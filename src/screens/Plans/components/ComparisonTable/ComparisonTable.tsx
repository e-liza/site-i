import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Table from '../Table/Table';
import { tables } from '../../../../constants/plans';
import { Routes } from '../../../../constants/routes';

import styles from './ComparisonTable.module.scss';

const ComparisonTable = () => {
  const [t] = useTranslation();
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.title}>{t('layout.comparisonTable.title')}</div>
        <div className={styles.description}>
          <span className={styles.text}>{t('layout.comparisonTable.description')}</span>
          <Link to={Routes.DemoRequest} className={styles.link}>
            {t('layout.comparisonTable.link')}
          </Link>
        </div>
      </div>
      <div className={styles.tables}>
        {useMemo(() => {
          return tables.map((table) => (
            <div className={styles.table} key={table.id}>
              <Table {...table} />
            </div>
          ));
        }, [])}
      </div>
    </div>
  );
};

export default ComparisonTable;
