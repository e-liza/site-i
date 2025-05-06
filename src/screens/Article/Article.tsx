// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate, useParams } from 'react-router-dom'; // ✅ Removed RouteChildrenProps, added useParams
// import { useTranslation } from 'react-i18next';
// import { Alert } from 'antd';
// import { Helmet } from 'react-helmet';

// import { Routes } from '../../constants/routes';
// import { IInsightDetailed, insightsApi } from '../../api/insights';
// import { CATEGORIES_COLOR_MAP, CATEGORIES } from '../../constants/insights';
// import { formatDate } from '../../utils/format';
// import Spinner from '../../components/Spinner/Spinner';
// import UpFooter from '../../components/UpFooter/UpFooter';

// import styles from './Article.module.scss';

// const Article: React.FC = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<Error | null>(null);
//   const [articleData, setArticleData] = useState<IInsightDetailed | null>(null);
//   const [t] = useTranslation();
//   const navigate = useNavigate(); // ✅ useNavigate instead of history
//   const { title } = useParams<{ title: string }>(); // ✅ Get URL params using useParams

//   useEffect(() => {
//     if (title) {
//       setIsLoading(true);
//       setError(null);
//       insightsApi
//         .getInsightByTitle(title)
//         .then(setArticleData)
//         .catch((err) => {
//           setError(err);
//           navigate(Routes.Insights); // ✅ Replaced history.push
//         })
//         .finally(() => {
//           setIsLoading(false);
//         });
//     } else {
//       navigate(Routes.Insights); // ✅ Replaced history.push
//     }
//   }, [navigate, title]); // ✅ Updated dependencies

//   return (
//     <div className={styles.root}>
//       <Helmet defaultTitle="IVY">
//         <title>{articleData?.title}</title>
//         {articleData && (
//           <meta
//             property="article:published_time"
//             content={new Date(articleData.creationDate).toISOString()}
//           />
//         )}
//         {articleData && <meta name="description" content={articleData.description} />}
//         {articleData && <meta name="keywords" content={articleData.categories.join(', ')} />}
//       </Helmet>
//       {isLoading && <Spinner className={styles.spinner} />}
//       {error && <Alert message={error.message} type="error" showIcon />}
//       {articleData && (
//         <>
//           <section className={styles.articleHeadSection}>
//             <div className={styles.articleHeadBlock}>
//               {articleData.mainImage && (
//                 <div
//                   className={styles.articleImgContainer}
//                   style={{ backgroundImage: `url(${articleData.mainImage.url})` }}
//                 />
//               )}
//               <div className={styles.tagsContainer}>
//                 {articleData.categories.map((category) => (
//                   <div
//                     key={category}
//                     style={{ color: CATEGORIES_COLOR_MAP[category] }}
//                     className={styles.tag}
//                   >
//                     {CATEGORIES[category]}
//                   </div>
//                 ))}
//               </div>
//               <div className={styles.titleContainer}>
//                 <h1>{articleData.title}</h1>
//                 <span>{`${formatDate(articleData.creationDate)} / ${
//                   articleData.readingTime
//                 } min read`}</span>
//               </div>
//               <div className={styles.articleIntro}>
//                 <p>{articleData.description}</p>
//               </div>
//             </div>
//           </section>
//           <section className={styles.articleContentSection}>
//             <div className={styles.articleContentBlock}>
//               <div
//                 className={styles.articleContent}
//                 dangerouslySetInnerHTML={{ __html: articleData.content }}
//               />
//             </div>
//           </section>
//           <section className={styles.navigateSection}>
//             <UpFooter
//               title={t('layout.solutions.footer.title')}
//               description={t('layout.solutions.footer.description')}
//               link={{
//                 title: t('layout.insights.footer.link'),
//                 path: '/',
//               }}
//             />
//           </section>
//           {articleData.relatedInsights && (
//             <section className={styles.relArticlesSectionContainer}>
//               <div className={styles.relArticlesSection}>
//                 <div className={styles.relArticlesHead}>
//                   <h2>{t('layout.article.relArticles')}</h2>
//                   <Link to="/insights" className={styles.link}>
//                     {t('layout.article.link')}
//                   </Link>
//                 </div>
//                 <div className={styles.relArticlesContent}>
//                   {articleData.relatedInsights.map((articleItem, index) => (
//                     <div key={articleItem.title + index} className={styles.insightCardContainer}>
//                       <Link to={`/article/${articleItem.id}`} className={styles.insightCard}>
//                         <div className={styles.insightTagsBlock}>
//                           {articleItem.categories.map((category) => (
//                             <div
//                               key={category}
//                               style={{ color: CATEGORIES_COLOR_MAP[category] }}
//                               className={styles.insightTag}
//                             >
//                               {CATEGORIES[category]}
//                             </div>
//                           ))}
//                         </div>
//                         <h3 className={styles.insightTitle}>{articleItem.title}</h3>
//                         <div className={styles.info}>
//                           {formatDate(articleItem.creationDate)}
//                           <div className={styles.slash} />
//                           {`${articleItem.readingTime} min read`}
//                         </div>
//                       </Link>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Article;
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Alert } from 'antd';
import { Helmet } from 'react-helmet';

import { formatDate } from '../../utils/format';
import Spinner from '../../components/Spinner/Spinner';
import UpFooter from '../../components/UpFooter/UpFooter';
import { IInsight } from '../../api/insights';
import { CATEGORIES_COLOR_MAP, CATEGORIES } from '../../constants/insights';
import { BASE_PATH } from '../../config';

import styles from './Article.module.scss';

interface IInsightDetailed extends IInsight {
  mainImage?: { url: string };
  relatedInsights?: IInsight[];
  contentFile?: string;
}

const Article: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [articleData, setArticleData] = useState<IInsightDetailed | null>(null);
  const [markdownContent, setMarkdownContent] = useState<string | null>(null);

  const navigate = useNavigate();
  const { title } = useParams<{ title: string }>();

  useEffect(() => {
    if (title) {
      setIsLoading(true);
      setError(null);

      fetch(`${BASE_PATH}/mock_data/insights/${title}/article.json`)
        .then((response) => {
          if (!response.ok) throw new Error('Insight not found');
          return response.json();
        })
        .then((data) => {
          setArticleData(data);
          if (data.contentFile) {
            const contentUrl = `${BASE_PATH}${data.contentFile}`;
            return fetch(contentUrl)
              .then((res) => res.text())
              .then((mdContent) => setMarkdownContent(mdContent));
          }
        })
        .catch((err) => {
          setError(err);
          navigate('/insights');
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      navigate('/insights');
    }
  }, [navigate, title]);

  return (
    <div className={styles.root}>
      <Helmet defaultTitle="IVY">
        <title>{articleData?.title ?? 'IVY Article'}</title>

        <meta
          property="article:published_time"
          content={
            articleData?.creationDate ? new Date(articleData.creationDate).toISOString() : ''
          }
        />

        <meta name="description" content={articleData?.description ?? 'No description available'} />

        <meta
          name="keywords"
          content={
            articleData?.categories && Array.isArray(articleData.categories)
              ? articleData.categories.join(', ')
              : ''
          }
        />
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
                  style={{ backgroundImage: `url(${BASE_PATH}${articleData.mainImage.url})` }}
                />
              )}

              <div className={styles.tagsContainer}>
                {articleData.categories.map((category) => (
                  <div
                    key={category}
                    style={{
                      color: CATEGORIES_COLOR_MAP[category as keyof typeof CATEGORIES_COLOR_MAP],
                    }}
                    className={styles.tag}
                  >
                    {CATEGORIES[category as keyof typeof CATEGORIES]}
                  </div>
                ))}
              </div>

              <div className={styles.titleContainer}>
                <h1>{articleData.title}</h1>
                <span>{`${formatDate(articleData.creationDate)} / ${articleData.readingTime} min read`}</span>
              </div>

              <div className={styles.articleIntro}>
                <p>{articleData.description}</p>
              </div>
            </div>
          </section>

          <section className={styles.articleContentSection}>
            <div className={styles.articleContentBlock}>
              <div className={styles.articleContent}>
                {markdownContent ? (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
                ) : (
                  <p>Loading content...</p>
                )}
              </div>
            </div>
          </section>

          {articleData.relatedInsights && (
            <section className={styles.relArticlesSectionContainer}>
              <div className={styles.relArticlesSection}>{/* Render related insights */}</div>
            </section>
          )}
        </>
      )}
    </div>
  );
};

export default Article;
