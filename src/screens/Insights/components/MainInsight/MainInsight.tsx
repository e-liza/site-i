import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Tag from '../Tag/Tag';
import { CATEGORIES, CATEGORIES_COLOR_MAP } from '../../../../constants/insights';
import { IInsight } from '../../../../api/insights';
import { Routes } from '../../../../constants/routes';
import { formatDate } from '../../../../utils/format';
import i18n from '../../../../i18n';

import styles from './MainInsight.module.scss';

const MainInsight: React.FC<IInsight> = ({
  url,
  mainImage,
  creationDate,
  categories,
  readingTime,
  title,
  description,
}) => {
  const [t] = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.image} style={{ backgroundImage: `url(${mainImage?.url})` }} />
      <div className={styles.info}>
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
        <div className={styles.description}>{description}</div>
        <div className={styles.controls}>
          <span className={styles.time}>{`${formatDate(
            creationDate,
            i18n.language,
          )} / ${readingTime} min read`}</span>
          <Link className={styles.link} to={Routes.Article.replace(':title', url)}>
            {t('layout.insights.mainInsight.link')}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MainInsight;
