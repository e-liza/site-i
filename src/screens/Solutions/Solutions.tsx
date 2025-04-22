import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Routes as AppRoutes } from '../../constants/routes'; // ✅ Avoids naming conflict
import UpFooter from '../../components/UpFooter/UpFooter';

import styles from './Solutions.module.scss';

const Solutions = () => {
  const [t] = useTranslation();
  const { pathname } = useLocation();
  const isOverviewPage = pathname.startsWith(AppRoutes.Solutions.Overview);

  return (
    <div className={styles.root}>
      <Outlet /> {/* ✅ This will render nested routes */}
      <div className={styles.footer}>
        <UpFooter
          title={t('layout.solutions.footer.title')}
          description={t('layout.solutions.footer.description')}
          link={{
            title: t('layout.solutions.footer.link'),
            path: isOverviewPage
              ? `${AppRoutes.Solutions.Root}/ivy-support`
              : `${AppRoutes.Solutions.Root}/overview`,
          }}
        />
      </div>
    </div>
  );
};

export default Solutions;
