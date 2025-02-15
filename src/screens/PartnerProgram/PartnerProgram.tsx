import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import { Routes } from '../../constants/routes';
import { ReactComponent as PlusIcon } from '../../assets/solutions/plus-icon.svg';
import UpFooter from '../../components/UpFooter/UpFooter';

import styles from './PartnerProgram.module.scss';
import Plan from './components/Plan/Plan';

const PartnerProgram = () => {
  const [t] = useTranslation();
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>{t('layout.partnerProgram.title')}</h2>
          </div>
          <div className={styles.description}>{t('layout.partnerProgram.description')}</div>
        </div>
        <div className={classNames(styles.advantage, styles.advantage1)}>
          <div>
            <PlusIcon />
            <span>{t('layout.partnerProgram.advantage1')}</span>
          </div>
        </div>
        <div className={classNames(styles.advantage, styles.advantage2)}>
          <div>
            <PlusIcon />
            <span>{t('layout.partnerProgram.advantage2')}</span>
          </div>
        </div>
        <div className={classNames(styles.advantage, styles.advantage3)}>
          <div>
            <PlusIcon />
            <span>{t('layout.partnerProgram.advantage3')}</span>
          </div>
        </div>
        <div className={classNames(styles.advantage, styles.advantage4)}>
          <div>
            <PlusIcon />
            <span>{t('layout.partnerProgram.advantage4')}</span>
          </div>
        </div>
        <div className={styles.plan}>
          <Plan
            id={1}
            pricePerMonth={0}
            name="layout.partnerProgram.card.title"
            type="layout.partnerProgram.card.type"
            currency="€"
            description="layout.partnerProgram.card.description"
          />
        </div>
        <div className={styles.qAndA}>
          <div className={styles.question}>{t('layout.partnerProgram.question')}</div>
          <div className={styles.answer}>{t('layout.partnerProgram.answer')}</div>
        </div>
        <div className={styles.benefits}>
          <div className={classNames(styles.benefit, styles.benefit1)}>
            <div className={styles.benefitTitle}>
              {t('layout.partnerProgram.benefits.first.title')}
            </div>
            <div className={styles.benefitDescription}>
              {t('layout.partnerProgram.benefits.first.description')}
            </div>
          </div>
          <div className={classNames(styles.benefit, styles.benefit2)}>
            <div className={styles.benefitTitle}>
              {t('layout.partnerProgram.benefits.second.title')}
            </div>
            <div className={styles.benefitDescription}>
              {t('layout.partnerProgram.benefits.second.description')}
            </div>
          </div>
          <div className={classNames(styles.benefit, styles.benefit3)}>
            <div className={styles.benefitTitle}>
              {t('layout.partnerProgram.benefits.third.title')}
            </div>
            <div className={styles.benefitDescription}>
              {t('layout.partnerProgram.benefits.third.description')}
            </div>
          </div>
          <div className={classNames(styles.benefit, styles.benefit4)}>
            <div className={styles.benefitTitle}>
              {t('layout.partnerProgram.benefits.fourth.title')}
            </div>
            <div className={styles.benefitDescription}>
              {t('layout.partnerProgram.benefits.fourth.description')}
            </div>
          </div>
        </div>
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

export default PartnerProgram;
