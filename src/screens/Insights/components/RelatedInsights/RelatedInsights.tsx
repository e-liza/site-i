import React from 'react';
import { useTranslation } from 'react-i18next';

import { IInsight } from '../../../../api/insights';
import Insight from '../Insight/Insight';

import styles from './RelatedInsights.module.scss';

interface IRelatedInsightsProps {
  insights: IInsight[];
  seeAllAction: () => void;
}

const RelatedInsights: React.FC<IRelatedInsightsProps> = ({ insights, seeAllAction }) => {
  const [t] = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>RELATED ARTICLES</div>
        <div onClick={seeAllAction} className={styles.link}>
          {t('layout.insights.recentInsights.link')}
        </div>
      </div>
      <div className={styles.content}>
        {insights.map((insight) => (
          <Insight key={insight.id} {...insight} />
        ))}
      </div>
    </div>
  );
};
export default RelatedInsights;
