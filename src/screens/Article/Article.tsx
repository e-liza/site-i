import React, { useEffect, useState } from 'react';
import { Link, useHistory, RouteChildrenProps } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Alert } from 'antd';
import { Helmet } from 'react-helmet';

import { Routes } from '../../constants/routes';
import { IInsightDetailed, insightsApi } from '../../api/insights';
import { CATEGORIES_COLOR_MAP, CATEGORIES } from '../../constants/insights';
import { formatDate } from '../../utils/format';
import Spinner from '../../components/Spinner/Spinner';
import UpFooter from '../../components/UpFooter/UpFooter';

import styles from './Article.module.scss';

const Article: React.FC<RouteChildrenProps<{ title: string }>> = ({ match }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [articleData, setArticleData] = useState<IInsightDetailed | null>(null);
  const [t] = useTranslation();
  const history = useHistory();
  const title = match?.params.title;

  useEffect(() => {
    if (title) {
      setIsLoading(true);
      setError(null);
      insightsApi
        .getInsightByTitle(title)
        .then(setArticleData)
        .catch((err) => {
          setError(err);
          history.push(Routes.Insights);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      history.push(Routes.Insights);
    }
  }, [history, title]);

  return (
    <div className={styles.root}>
      <Helmet defaultTitle="IVY">
        <title>{articleData?.title}</title>
        {articleData && (
          <meta
            property="article:published_time"
            content={new Date(articleData.creationDate).toISOString()}
          />
        )}
        {articleData && <meta name="description" content={articleData.description} />}
        {articleData && <meta name="keywords" content={articleData.categories.join(', ')} />}
      </Helmet>
      {isLoading && <Spinner className={styles.spinner} />}
      {error && <Alert message={error.message} type="error" showIcon />}
      {articleData && (
        <>
          <section className={styles.articleHeadSection}>
            <div className={styles.articleHeadBlock}>
              {articleData.mainImage && (
                <div
                  className={styles.articleImgContainer}
                  style={
                    articleData.mainImage && {
                      backgroundImage: `url(${articleData.mainImage.url})`,
                    }
                  }
                />
              )}
              <div className={styles.tagsContainer}>
                {articleData.categories.map((category) => (
                  <div
                    key={category}
                    style={{ color: CATEGORIES_COLOR_MAP[category] }}
                    className={styles.tag}
                  >
                    {CATEGORIES[category]}
                  </div>
                ))}
              </div>
              <div className={styles.titleContainer}>
                <h1>{articleData.title}</h1>
                <span>{`${formatDate(articleData.creationDate)} / ${
                  articleData.readingTime
                } min read`}</span>
              </div>
              <div className={styles.articleIntro}>
                <p>{articleData.description}</p>
              </div>
            </div>
          </section>
          <section className={styles.articleContentSection}>
            <div className={styles.articleContentBlock}>
              <div
                className={styles.articleContent}
                dangerouslySetInnerHTML={{ __html: articleData.content }}
              />
            </div>
          </section>
          <section className={styles.navigateSection}>
            <UpFooter
              title={t('layout.solutions.footer.title')}
              description={t('layout.solutions.footer.description')}
              link={{
                title: t('layout.insights.footer.link'),
                path: '/',
              }}
            />
          </section>
          {articleData.relatedInsights ? (
            <section className={styles.relArticlesSectionContainer}>
              <div className={styles.relArticlesSection}>
                <div className={styles.relArticlesHead}>
                  <h2>{t('layout.article.relArticles')}</h2>
                  <Link to="/insights" className={styles.link}>
                    {t('layout.article.link')}
                  </Link>
                </div>
                <div className={styles.relArticlesContent}>
                  {articleData.relatedInsights.map((articleItem, index) => (
                    <div key={articleItem.title + index} className={styles.insightCardContainer}>
                      <Link to={`/article/${articleItem.id}`} className={styles.insightCard}>
                        <div className={styles.insightTagsBlock}>
                          {articleItem.categories.map((category) => (
                            <div
                              key={category}
                              style={{ color: CATEGORIES_COLOR_MAP[category] }}
                              className={styles.insightTag}
                            >
                              {CATEGORIES[category]}
                            </div>
                          ))}
                        </div>
                        <h3 className={styles.insightTitle}>{articleItem.title}</h3>
                        <div className={styles.info}>
                          {formatDate(articleItem.creationDate)}
                          <div className={styles.slash} />
                          {`${articleItem.readingTime} min read`}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Article;
