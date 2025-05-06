import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { IInsight, insightsApi } from '../../api/insights';
import Spinner from '../Spinner/Spinner';
import { Routes } from '../../constants/routes';
import { formatDate } from '../../utils/format';
import i18n from '../../i18n';
import { BASE_PATH } from '../../config';

import styles from './RecentInsights.module.scss';

const RecentInsights = () => {
  const [t] = useTranslation();
  const [isInsightsLoading, setIsInsightsLoading] = useState(false);
  const [insightsError, setInsightsError] = useState<Error | null>(null);
  const [insightItems, setInsightItems] = useState<IInsight[]>([]);

  useEffect(() => {
    setIsInsightsLoading(true);
    setInsightsError(null);
    insightsApi
      .getInsights(1, 3)
      .then((data) => {
        setInsightItems(data.insights);
      })
      .catch((error) => {
        setInsightsError(error);
      })
      .finally(() => {
        setIsInsightsLoading(false);
      });
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.insightsHeader}>
        <h2>{t('layout.mainpage.insights.header')}</h2>
        <Link className={styles.link} to={Routes.Insights}>
          {t('layout.mainpage.insights.link')}
        </Link>
      </div>
      <div className={styles.insightsContent}>
        {isInsightsLoading && <Spinner className={styles.spinner} />}
        {insightsError && <span className={styles.errorMessage}>{insightsError.message}</span>}
        {useMemo(
          () =>
            insightItems.map(({ id, url, previewImage, title, creationDate, readingTime }) => (
              <Link
                key={id}
                className={styles.insightItem}
                to={Routes.Article.replace(':title', url)}
              >
                <div
                  style={
                    previewImage && {
                      backgroundImage: `url(${BASE_PATH}${previewImage.url})`,
                    }
                  }
                  className={styles.insightItemImage}
                />
                <p className={styles.insightItemInfo}>
                  {`${formatDate(creationDate, i18n.language)} / ${readingTime} min read`}
                </p>
                <span className={styles.insightItemTitle}>{title}</span>
              </Link>
            )),
          [insightItems],
        )}
      </div>
    </div>
  );
};

export default RecentInsights;
