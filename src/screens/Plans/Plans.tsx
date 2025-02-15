import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import UpFooter from '../../components/UpFooter/UpFooter';
import { Routes } from '../../constants/routes';
import { ReactComponent as PlusIcon } from '../../assets/solutions/plus-icon.svg';
import { plans } from '../../constants/plans';

import styles from './Plans.module.scss';
import Plan from './components/Plan/Plan';
import ComparisonTable from './components/ComparisonTable/ComparisonTable';

const Plans = () => {
  const [t] = useTranslation();
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>{t('layout.plans.title')}</h2>
        <div className={styles.headerDescription}>
          <PlusIcon className={styles.headerIcon} />
          <span>{t('layout.plans.description')}</span>
        </div>
      </div>
      <div className={styles.plans}>
        {useMemo(() => {
          return plans.map((plan) => (
            <div className={styles.plan}>
              <Plan {...plan} />
            </div>
          ));
        }, [])}
      </div>
      <div className={styles.tables}>
        <ComparisonTable />
      </div>
      <div className={styles.footer}>
        <UpFooter
          title={t('layout.solutions.footer.title')}
          description={t('layout.solutions.footer.description')}
          link={{
            title: t('layout.solutions.footer.link'),
            path: Routes.Solutions.Overview,
          }}
        />
      </div>
    </div>
  );
};

export default Plans;
