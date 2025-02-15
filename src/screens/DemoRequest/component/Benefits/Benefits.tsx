import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Benefits.module.scss';

const Benefits = () => {
  const [t] = useTranslation();

  return (
    <div className={styles.root}>
      <div className={styles.benefit}>{t('layout.demoRequest.benefits.first.text')}</div>
      <div className={styles.benefit}>{t('layout.demoRequest.benefits.second.text')}</div>
      <div className={styles.benefit}>{t('layout.demoRequest.benefits.third.text')}</div>
      <div className={styles.benefit}>{t('layout.demoRequest.benefits.fourth.text')}</div>
    </div>
  );
};

export default Benefits;
