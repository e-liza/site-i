import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import bigImage from '../../../../assets/solutions/ivy-support-screenshot.png';
import bigImage2x from '../../../../assets/solutions/ivy-support-screenshot@2x.png';
import Menu from '../../components/Menu/Menu';
import { Routes } from '../../../../constants/routes';
import ObjectFitImage from '../../../../components/ObjectFitImage/ObjectFitImage';

import styles from './IvySupport.module.scss';

interface IAdvantage {
  title: string;
  description: string;
}

const advantages: IAdvantage[] = [
  {
    title: 'layout.solutions.ivySupportPage.section1.title',
    description: 'layout.solutions.ivySupportPage.section1.description',
  },
  {
    title: 'layout.solutions.ivySupportPage.section2.title',
    description: 'layout.solutions.ivySupportPage.section2.description',
  },
  {
    title: 'layout.solutions.ivySupportPage.section3.title',
    description: 'layout.solutions.ivySupportPage.section3.description',
  },
  {
    title: 'layout.solutions.ivySupportPage.section4.title',
    description: 'layout.solutions.ivySupportPage.section4.description',
  },
  {
    title: 'layout.solutions.ivySupportPage.section5.title',
    description: 'layout.solutions.ivySupportPage.section5.description',
  },
  {
    title: 'layout.solutions.ivySupportPage.section6.title',
    description: 'layout.solutions.ivySupportPage.section6.description',
  },
];

const IvySupport = () => {
  const [t] = useTranslation();
  return (
    <div className={styles.root}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={classNames(styles.header, styles.container)}>
        <div className={styles.headerGroup}>
          <h2>{t('layout.solutions.ivySupportPage.title')}</h2>
          <p>{t('layout.solutions.ivySupportPage.description')}</p>
        </div>
        <div className={styles.imageContainer}>
          <ObjectFitImage
            fit="cover"
            className={styles.image}
            src={bigImage}
            srcset={bigImage2x}
            alt={t('layout.solutions.ivySupportPage.title')}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.heroSectionContainer}>
            <div className={styles.heroSection}>
              <div className={styles.text}>
                <h3 className={styles.sectionTitle}>
                  {t('layout.solutions.ivySupportPage.paragraph1.title')}
                </h3>
                <p className={styles.sectionDescription}>
                  {t('layout.solutions.ivySupportPage.paragraph1.description')}
                </p>
              </div>
              <div className={classNames(styles.text, styles.textService)}>
                <h3 className={styles.sectionTitle}>
                  {t('layout.solutions.ivySupportPage.paragraph2.title')}
                  <NavLink to={Routes.ServiceRequest} className={styles.serviceRequest}>
                    {t('layout.solutions.ivySupportPage.serviceRequest')}
                  </NavLink>
                </h3>
                <p className={styles.sectionDescription}>
                  {t('layout.solutions.ivySupportPage.paragraph2.description')}
                </p>
              </div>
            </div>
            <div className={styles.sectionImageContainer}>
              <ObjectFitImage
                fit="cover"
                className={styles.sectionImage}
                src={bigImage}
                srcset={bigImage2x}
                alt={t('layout.solutions.ivySupportPage.paragraph2.title')}
              />
            </div>
          </div>
          <div className={styles.advantages}>
            {advantages.map(({ title, description }) => (
              <div key={title} className={styles.advantage}>
                <h3 className={styles.advantageTitle}>{t(title)}</h3>
                <p className={styles.advantageDescription}>{t(description)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IvySupport;
