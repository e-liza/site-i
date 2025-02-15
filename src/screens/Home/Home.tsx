import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import clientDashboard from '../../assets/home/client-dashboard.jpg';
import clientDashboard2x from '../../assets/home/client-dashboard@2x.jpg';
import notification from '../../assets/home/notification.jpg';
import notification2x from '../../assets/home/notification@2x.jpg';
import validationPage from '../../assets/home/validation-page.jpg';
import validationPage2x from '../../assets/home/validation-page@2x.jpg';
import requestPage from '../../assets/home/requests-page.jpg';
import requestPage2x from '../../assets/home/requests-page@2x.jpg';
import requestMobile from '../../assets/home/requests-mobile.jpg';
import requestMobile2x from '../../assets/home/requests-mobile@2x.jpg';
import Plus from '../../components/Plus/Plus';
import { Routes } from '../../constants/routes';
import RecentInsights from '../../components/RecentInsights/RecentInsights';
import ObjectFitImage from '../../components/ObjectFitImage/ObjectFitImage';

import styles from './Home.module.scss';

export interface IInsightItem {
  id: string;
  img: string;
  info: string;
  title: string;
}

const Home: React.FC = () => {
  const [t] = useTranslation();

  return (
    <React.Fragment>
      <Helmet>
        <title>
          Global Payroll, PEO/EoR and Compliance for International Teams | IVY Solutions
        </title>
        <meta
          name="description"
          content={
            'IVY platform secure and automatize payroll operations for global organization and enhance communication amongst employees'
          }
        />
      </Helmet>
      <section className={styles.homeHeadSection}>
        <div className={styles.firstIntroBlock}>
          <div className={styles.introImgContainer} />
          <div className={styles.introCard}>
            <h1>{t('layout.mainpage.introBlock.introCard.header')}</h1>
            <p>{t('layout.mainpage.introBlock.introCard.text')}</p>
            <Link className={styles.link} to={Routes.Solutions.Overview}>
              {t('layout.mainpage.introBlock.introCard.link')}
            </Link>
          </div>
        </div>
        <div className={styles.secondIntroBlock}>
          <div className={styles.tagline}>
            <p>{t('layout.mainpage.introBlock.introText.tagline')}</p>
          </div>
          <div className={styles.textBlock}>
            <p>{t('layout.mainpage.introBlock.introText.text')}</p>
          </div>
        </div>
      </section>
      <section className={styles.appSection}>
        <div className={styles.appBlock}>
          <div className={styles.appBlockHeader}>
            <div className={styles.appSectionTitle}>
              <Plus className={styles.whatWeDoPlus} />
              <h2>{t('layout.mainpage.appBlock.header')}</h2>
            </div>
            <div className={styles.appHeaderText}>
              <p className={styles.appBlockItalicText}>{t('layout.mainpage.appBlock.text')}</p>
              <Link className={styles.link} to={Routes.DemoRequest}>
                {t('layout.mainpage.appBlock.link')}
              </Link>
            </div>
          </div>
          <div className={styles.appSolutions}>
            <div className={styles.solutionItem1}>
              <div className={styles.solutionImgContainer}>
                <ObjectFitImage
                  fit="cover"
                  src={clientDashboard}
                  srcset={clientDashboard2x}
                  alt={t('layout.mainpage.appBlock.appSolutions.first.header')}
                  className={styles.bigImg}
                />
                <ObjectFitImage
                  fit="cover"
                  src={notification}
                  srcset={notification2x}
                  alt={t('layout.mainpage.appBlock.appSolutions.first.header')}
                  className={styles.smallImg}
                />
              </div>
              <div className={styles.solutionTextContainer}>
                <span className={styles.solutionItemTitle}>
                  {t('layout.mainpage.appBlock.appSolutions.first.header')}
                </span>
                <p className={styles.appText}>
                  {t('layout.mainpage.appBlock.appSolutions.first.text')}
                </p>
              </div>
            </div>
            <div className={styles.solutionItem2}>
              <div className={styles.solutionImgContainer}>
                <ObjectFitImage
                  fit="cover"
                  src={validationPage}
                  srcset={validationPage2x}
                  alt={t('layout.mainpage.appBlock.appSolutions.second.header')}
                  className={styles.bigImg}
                />
              </div>
              <div className={styles.solutionTextContainer}>
                <span className={styles.solutionItemTitle}>
                  {t('layout.mainpage.appBlock.appSolutions.second.header')}
                </span>
                <p className={styles.appText}>
                  {t('layout.mainpage.appBlock.appSolutions.second.text')}
                </p>
              </div>
            </div>
            <div className={styles.solutionItem3}>
              <div className={styles.solutionImgContainer}>
                <ObjectFitImage
                  fit="cover"
                  src={requestPage}
                  srcset={requestPage2x}
                  alt={t('layout.mainpage.appBlock.appSolutions.third.header')}
                  className={styles.bigImg}
                />
                <ObjectFitImage
                  fit="cover"
                  src={requestMobile}
                  srcset={requestMobile2x}
                  alt={t('layout.mainpage.appBlock.appSolutions.third.header')}
                  className={styles.smallImg}
                />
              </div>
              <div className={styles.solutionTextContainer}>
                <span className={styles.solutionItemTitle}>
                  {t('layout.mainpage.appBlock.appSolutions.third.header')}
                </span>
                <p className={styles.appText}>
                  {t('layout.mainpage.appBlock.appSolutions.third.text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.expertiseSection}>
        <div className={styles.expertiseBlock}>
          <div className={styles.expertiseContent}>
            <div className={styles.expertiseHeader}>
              <span>{t('layout.mainpage.expertiseBlock.headerBlock.header')}</span>
              <Link className={styles.link} to={Routes.AboutUs}>
                {t('layout.mainpage.expertiseBlock.headerBlock.link')}
              </Link>
            </div>
            <div className={styles.line} />
            <div className={styles.expertiseText}>
              <p>{t('layout.mainpage.expertiseBlock.headerBlock.content.text1')}</p>
              <p>{t('layout.mainpage.expertiseBlock.headerBlock.content.text2')}</p>
            </div>
          </div>
          <div className={styles.approachBlock}>
            <div className={styles.approachHeader}>
              <Plus />
              <h2>{t('layout.mainpage.expertiseBlock.approachBlock.header')}</h2>
            </div>
            <div className={styles.approachText}>
              <p>{t('layout.mainpage.expertiseBlock.approachBlock.text')}</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.dataSecuritySection}>
        <div className={styles.dataSecurity}>
          <h2>{t('layout.mainpage.security.header.first')}</h2>
          <p>{t('layout.mainpage.security.header.text')}</p>
          <Link className={styles.link} to={Routes.Security}>
            {t('layout.mainpage.security.header.link')}
          </Link>
        </div>
      </section>
      <section className={styles.containerInsights}>
        <RecentInsights />
      </section>
    </React.Fragment>
  );
};
export default Home;
