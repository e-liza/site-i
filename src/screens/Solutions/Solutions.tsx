import React from 'react';
import { Switch, Redirect, Route, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

import { Routes } from '../../constants/routes';
import UpFooter from '../../components/UpFooter/UpFooter';

import styles from './Solutions.module.scss';
import Overview from './screens/Overview/Overview';
import Employee from './screens/Employee/Employee';
import Payroll from './screens/Payroll/Payroll';
import Company from './screens/Company/Company';
import Business from './screens/Business/Business';
import Mobile from './screens/Mobile/Mobile';
import IvySupport from './screens/IvySupport/IvySupport';

const Solutions = () => {
  const [t] = useTranslation();
  const { pathname } = useLocation();
  const isOverviewPage = pathname === Routes.Solutions.Overview;

  return (
    <div className={styles.root}>
      <Switch>
        <Route path={Routes.Solutions.Overview} exact component={Overview} />
        <Route path={Routes.Solutions.Employee} exact component={Employee} />
        <Route path={Routes.Solutions.Payroll} exact component={Payroll} />
        <Route path={Routes.Solutions.Company} exact component={Company} />
        <Route path={Routes.Solutions.Business} exact component={Business} />
        <Route path={Routes.Solutions.Mobile} exact component={Mobile} />
        <Route path={Routes.Solutions.IvySupport} exact component={IvySupport} />
        <Redirect to={Routes.Solutions.Overview} />
      </Switch>
      <div className={styles.footer}>
        <UpFooter
          title={t('layout.solutions.footer.title')}
          description={t('layout.solutions.footer.description')}
          link={{
            title: t('layout.solutions.footer.link'),
            path: isOverviewPage ? Routes.Solutions.IvySupport : Routes.Solutions.Overview,
          }}
        />
      </div>
    </div>
  );
};

export default Solutions;
