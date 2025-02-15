import React from 'react';
import { useTranslation } from 'react-i18next';

import heroImage from '../../../../assets/careers/ivy-office.jpg';
import ObjectFitImage from '../../../../components/ObjectFitImage/ObjectFitImage';

import styles from './Header.module.scss';

const Header = () => {
  const [t] = useTranslation();
  return (
    <div className={styles.root}>
      <ObjectFitImage
        fit="cover"
        className={styles.image}
        src={heroImage}
        alt={t('layout.careers.headSection.titleBlock.title')}
      />
      <div className={styles.main}>
        <div className={styles.head}>
          <h1 className={styles.title}>{t('layout.careers.headSection.titleBlock.title')}</h1>
          <p className={styles.description}>{t('layout.careers.headSection.titleBlock.text')}</p>
        </div>
        <div className={styles.content}>
          <p>{t('layout.careers.headSection.textBlock.firstText')}</p>
          <p>{t('layout.careers.headSection.textBlock.secondText')}</p>
          <p>{t('layout.careers.headSection.textBlock.thirdText')}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
