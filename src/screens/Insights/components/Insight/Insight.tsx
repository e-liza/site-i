import React from 'react';
import { Link } from 'react-router-dom';

import { formatDate } from '../../../../utils/format';
import i18n from '../../../../i18n';
import { IInsight } from '../../../../api/insights';
import { CATEGORIES, CATEGORIES_COLOR_MAP } from '../../../../constants/insights';
import Tag from '../Tag/Tag';
import { Routes } from '../../../../constants/routes';

import styles from './Insight.module.scss';

const Insight: React.FC<IInsight> = ({ url, creationDate, categories, readingTime, title }) => (
  <Link to={Routes.Article.replace(':title', url)}>
    <div className={styles.container}>
      <div className={styles.tags}>
        {categories.map((category) => (
          <Tag
            key={CATEGORIES[category]}
            name={CATEGORIES[category]}
            textColor={CATEGORIES_COLOR_MAP[category]}
          />
        ))}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.info}>
        {formatDate(creationDate, i18n.language)}
        <div className={styles.slash} />
        {`${readingTime} min read`}
      </div>
    </div>
  </Link>
);

export default Insight;
