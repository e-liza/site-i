import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import Menu from '../../components/Menu/Menu';
import styles from '../BusinessLayout.module.scss';
import Header from '../../components/Header/Header';
import Preview from '../../components/Preview/Preview';
import bigImage from '../../../../assets/solutions/company-big-screenshot.png';
import bigImage2x from '../../../../assets/solutions/company-big-screenshot@2x.png';
import smallImage from '../../../../assets/solutions/company-small-screenshot.png';
import smallImage2x from '../../../../assets/solutions/company-small-screenshot@2x.png';
import TextBlock from '../../components/TextBlock/TextBlock';
import Advantages from '../../components/Advantages/Advantages';

const Company = () => {
  const [t] = useTranslation();
  return (
    <div className={styles.root}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.header}>
        <Header
          title={t('layout.solutions.companyPage.title')}
          description={t('layout.solutions.companyPage.description')}
        />
      </div>
      <div className={styles.preview}>
        <Preview
          bigImageUrl={bigImage}
          bigImageUrl2x={bigImage2x}
          smallImageUrl={smallImage}
          smallImageUrl2x={smallImage2x}
        />
      </div>
      <div className={classNames(styles.textBlock, styles.textBlock1)}>
        <TextBlock
          title={t('layout.solutions.companyPage.textBlock1.title')}
          description={t('layout.solutions.companyPage.textBlock1.description')}
        />
      </div>
      <div className={classNames(styles.textBlock, styles.textBlock2)}>
        <TextBlock
          title={t('layout.solutions.companyPage.textBlock2.title')}
          description={t('layout.solutions.companyPage.textBlock2.description')}
        />
      </div>
      <div className={styles.advantages}>
        <Advantages
          items={[
            t('layout.solutions.companyPage.advantages.first'),
            t('layout.solutions.companyPage.advantages.second'),
            t('layout.solutions.companyPage.advantages.third'),
          ]}
        />
      </div>
      <div className={classNames(styles.textBlock, styles.textBlock3)}>
        <TextBlock
          title={t('layout.solutions.companyPage.textBlock3.title')}
          description={t('layout.solutions.companyPage.textBlock3.description')}
        />
      </div>
      <div className={classNames(styles.textBlock, styles.textBlock4)}>
        <TextBlock
          title={t('layout.solutions.companyPage.textBlock4.title')}
          description={t('layout.solutions.companyPage.textBlock4.description')}
        />
      </div>
    </div>
  );
};

export default Company;
