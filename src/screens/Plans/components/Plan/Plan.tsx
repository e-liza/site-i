import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

import Button from '../../../../components/Button/Button';
import { IPlan as IPlanProps } from '../../../../constants/plans';
import { Routes } from '../../../../constants/routes';

import styles from './Plan.module.scss';

const Plan: React.FC<IPlanProps> = ({ name, currency, description, pricePerMonth, type }) => {
  const [t] = useTranslation();
  const history = useHistory();
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.name}>{t(name)}</div>
        <div className={styles.type}>{t(type)}</div>
      </div>
      <div className={styles.pricing}>
        <div className={styles.pricingLabel}>{t('layout.plans.startingAt')}</div>
        <div className={styles.pricingDescription}>
          <div className={styles.price}>
            <span className={styles.currency}>{t(currency)}</span>
            <span>{pricePerMonth}</span>
          </div>
          <div className={styles.perTime}>
            <span className={styles.prefix}>{t('layout.plans.per')}</span>
            <span>{t('layout.plans.month')}</span>
          </div>
          <div className={styles.perUser}>
            <span className={styles.prefix}>{t('layout.plans.per')}</span>
            <span>{t('layout.plans.user')}</span>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <span>{t(description)}</span>
        <div className={styles.buttonContainer}>
          <Button
            className={styles.button}
            type="primary"
            name={t('layout.plans.getInTouch')}
            onClick={() => history.push(Routes.GetInTouch)}
          />
        </div>
      </div>
    </div>
  );
};

export default Plan;
