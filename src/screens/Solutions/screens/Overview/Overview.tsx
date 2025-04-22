import React from 'react';
import { useTranslation } from 'react-i18next';

import employeeImage from '../../../../assets/solutions/employee.jpg';
import managersImage from '../../../../assets/solutions/managers.jpg';
import hrImage from '../../../../assets/solutions/hr.jpg';
import executivesImage from '../../../../assets/solutions/executives.jpg';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';

import styles from './Overview.module.scss';

const Overview = () => {
  const [t] = useTranslation();
  return (
    <div className={styles.root}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header
            title={t('layout.solutions.overviewPage.title')}
            description={t('layout.solutions.overviewPage.description')}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.section}>
            <Section
              imageUrl={employeeImage}
              title={t('layout.solutions.overviewPage.section1.title')}
              content={t('layout.solutions.overviewPage.section1.content')}
              reverse
            />
          </div>
          <div className={styles.section}>
            <Section
              imageUrl={managersImage}
              title={t('layout.solutions.overviewPage.section2.title')}
              content={t('layout.solutions.overviewPage.section2.content')}
            />
          </div>
          <div className={styles.section}>
            <Section
              imageUrl={hrImage}
              title={t('layout.solutions.overviewPage.section3.title')}
              content={t('layout.solutions.overviewPage.section3.content')}
              reverse
            />
          </div>
          <div className={styles.section}>
            <Section
              imageUrl={executivesImage}
              title={t('layout.solutions.overviewPage.section4.title')}
              content={t('layout.solutions.overviewPage.section4.content')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
console.log('overview loaded');
export default Overview;
