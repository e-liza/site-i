import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Plus from '../../components/Plus/Plus';
import customApproach from '../../assets/about-us/custom-approach.jpg';
import businessAbroadImage from '../../assets/about-us/business-abroad.jpg';
import { Routes } from '../../constants/routes';
import ObjectFitImage from '../../components/ObjectFitImage/ObjectFitImage';
import UpFooter from '../../components/UpFooter/UpFooter';

import styles from './AboutUs.module.scss';

const AboutUs = () => {
  const [t] = useTranslation();

  return (
    <div className={styles.root}>
      <section className={styles.headSection}>
        <div className={styles.textGroup}>
          <div className={styles.mainTitle}>
            <h1>{t('layout.aboutUs.headSection.title')}</h1>
          </div>
          <p>{t('layout.aboutUs.headSection.text')}</p>
        </div>
        <div className={styles.location}>
          <div className={styles.headImgContainer}>
            <ObjectFitImage
              fit="cover"
              position="left"
              src={businessAbroadImage}
              alt={t('layout.aboutUs.headSection.title')}
              className={styles.headImg}
            />
          </div>
          <div className={styles.locationContainer}>
            <h2>
              {t('layout.aboutUs.expandingSection.location')}
              <Plus className={styles.locationPlus} />
            </h2>
          </div>
        </div>
      </section>
      <section className={styles.expandingSection}>
        <div className={styles.expandingContent}>
          <h3>{t('layout.aboutUs.expandingSection.title')}</h3>
          <p>{t('layout.aboutUs.expandingSection.text')}</p>
        </div>
      </section>
      <section className={styles.navigateSection}>
        <UpFooter
          title={t('layout.solutions.footer.title')}
          description={t('layout.solutions.footer.description')}
          link={{
            title: t('layout.insights.footer.link'),
            path: Routes.Solutions.Overview,
          }}
        />
      </section>
      <section className={styles.approachSection}>
        <div className={styles.approachBlock}>
          <div className={styles.approachText}>
            <p>{t('layout.aboutUs.approachSection.text1')}</p>
            <p>{t('layout.aboutUs.approachSection.text2')}</p>
          </div>
          <div className={styles.approachImgContainer}>
            <ObjectFitImage
              fit="cover"
              src={customApproach}
              alt={t('layout.aboutUs.approachSection.title')}
              className={styles.approachImg}
            />
          </div>
          <div className={styles.approachCard}>
            <div className={styles.approachTitle}>
              <Plus className={styles.approachTitlePlus} />
              <h2>{t('layout.aboutUs.approachSection.title')}</h2>
            </div>
            <p>{t('layout.aboutUs.approachSection.titleAdditional')}</p>
          </div>
        </div>
      </section>
      <section className={styles.principlesSection}>
        <div className={styles.principlesBlock}>
          <p className={styles.principlesIntro}>{t('layout.aboutUs.principlesSection.intro')}</p>
          <div className={styles.principlesItemsContainer}>
            <div className={styles.principlesRow}>
              <div>
                <span>{t('layout.aboutUs.principlesSection.principles.integrity.title')}</span>
                <p>{t('layout.aboutUs.principlesSection.principles.integrity.text')}</p>
              </div>
              <div>
                <span>{t('layout.aboutUs.principlesSection.principles.performance.title')}</span>
                <p>{t('layout.aboutUs.principlesSection.principles.performance.text')}</p>
              </div>
            </div>
            <div className={styles.principlesRow}>
              <div>
                <span>{t('layout.aboutUs.principlesSection.principles.commitment.title')}</span>
                <p>{t('layout.aboutUs.principlesSection.principles.commitment.text')}</p>
              </div>
              <div>
                <span>{t('layout.aboutUs.principlesSection.principles.innovation.title')}</span>
                <p>{t('layout.aboutUs.principlesSection.principles.innovation.text')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.joinUsSection}>
        <div className={styles.joinUsBlock}>
          <h1 className={styles.joinUsTitle}>{t('layout.aboutUs.joinUsSection.title')}</h1>
          <p className={styles.joinUsText}>{t('layout.aboutUs.joinUsSection.text')}</p>
          <Link className={styles.link} to={Routes.Careers}>
            {t('layout.aboutUs.joinUsSection.link')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
