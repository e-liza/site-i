import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from '../../components/Button/Button';
import vector from '../../assets/vector.svg';

import styles from './InsightsGrid.module.scss';

interface IInsightItem {
  info: string;
  title: string;
  imageUrl: string | undefined;
  text: string;
}

interface IInsightsGridProps {
  insightItems: IInsightItem[];
  loadMore(): void;
}

const InsightsGrid: React.FC<IInsightsGridProps> = ({ insightItems, loadMore }) => {
  const [t] = useTranslation();
  return (
    <div className={classNames(styles.containerWithPddings, styles.insightsContainer)}>
      <div className={styles.mainInsight}>
        <div className={styles.insightImgContainer}>
          <img className={styles.insightItemImage} src={insightItems[0].imageUrl} alt="main" />
        </div>
        <div className={styles.mainInsightContent}>
          <p className={styles.insightInfo}>{insightItems[0].info}</p>
          <h1 className={styles.insightTitle}>{insightItems[0].title}</h1>
          <p className={styles.insightText}>{insightItems[0].text}</p>
          <Link className={styles.link} to="">
            {t('layout.insights.mainInsight.link')}
            <img src={vector} alt="" />
            <img src={vector} alt="" />
          </Link>
        </div>
      </div>
      <div className={styles.insightsGrid}>
        <div className={styles.insightItems}>
          {insightItems.map((item, index) =>
            index !== 0 ? (
              <div key={item.imageUrl} className={styles.insightItem}>
                <img src={item.imageUrl} alt="news" className={styles.insightItemImage} />
                <p className={styles.insightItemInfo}>{item.info}</p>
                <span className={styles.insightItemTitle}>{item.title}</span>
              </div>
            ) : null,
          )}
        </div>
        <div className={styles.loadButtonContainer}>
          <Button
            name={t('layout.insights.insightGrid.loadButton')}
            className={styles.loadButton}
            onClick={loadMore}
          />
        </div>
      </div>
    </div>
  );
};

export default InsightsGrid;
