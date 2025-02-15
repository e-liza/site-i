import React from 'react';

import RecentInsights from '../../components/RecentInsights/RecentInsights';

import Positions from './components/Positions/Positions';
import Advantages from './components/Advantages/Advantages';
import styles from './Careers.module.scss';
import Header from './components/Header/Header';

const Careers: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <Advantages />
      </div>
      <div className={styles.positions}>
        <Positions />
      </div>
      <section className={styles.insightsContainer}>
        <div className={styles.insights}>
          <RecentInsights />
        </div>
      </section>
    </div>
  );
};

export default Careers;
