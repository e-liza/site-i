import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { IInsights, insightsApi, Category, IInsight } from '../../api/insights';
import { PAGE_SIZE } from '../../constants/insights';
import Spinner from '../../components/Spinner/Spinner';
import Pagination from '../../components/Pagination/Pagination';
import UpFooter from '../../components/UpFooter/UpFooter';
import { Routes } from '../../constants/routes';

import Alert from './components/Alert/Alert';
import styles from './Insights.module.scss';
import Menu from './components/Menu/Menu';
import MainInsight from './components/MainInsight/MainInsight';
import Insight from './components/Insight/Insight';
import DesktopFilter from './components/DesktopFilter/DesktopFilter';
import RelatedInsights from './components/RelatedInsights/RelatedInsights';

const Insights: React.FC = () => {
  const [t] = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [recentData, setRecentData] = useState<IInsight[]>([]);
  const [data, setData] = useState<IInsights>({
    insights: [],
    totalPages: 1,
    page: 1,
    pageSize: PAGE_SIZE,
    totalInsights: 0,
  });
  const [activeCategories, setActiveCategories] = useState<Category[]>([]);
  const handleCategoryToggle = useCallback(
    (category: Category) => {
      if (activeCategories.includes(category)) {
        setActiveCategories(
          activeCategories.filter((activeCategory) => activeCategory !== category),
        );
      } else {
        setActiveCategories([...activeCategories, category]);
      }
      setData({ ...data, page: 1 });
    },
    [activeCategories, data],
  );

  const handlePageChange = (page: number) => setData({ ...data, page });

  const handleSeeAllAction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveCategories([]);
  };

  useEffect(() => {
    setIsLoading(true);
    setIsFailed(false);
    insightsApi
      .getInsights(data.page, PAGE_SIZE, activeCategories)
      .then((data) => {
        if (!activeCategories.length) {
          setRecentData(data.insights.slice(0, 3));
        }
        setData(data);
      })
      .catch(() => {
        setIsFailed(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [data.page, activeCategories]);

  return (
    <div className={styles.root}>
      <div className={styles.mobileFilter}>
        <Menu
          onFilterToggle={handleCategoryToggle}
          setActiveFilterItems={setActiveCategories}
          activeFilterItems={activeCategories}
        />
      </div>
      <div className={styles.desktopFilter}>
        <DesktopFilter
          onFilterToggle={handleCategoryToggle}
          setActiveFilterItems={setActiveCategories}
          activeFilterItems={activeCategories}
        />
      </div>
      <div className={styles.insights}>
        {isFailed && <Alert message="Something's gone wrong" />}
        {isLoading && <Spinner className={styles.spinner} />}
        {data.insights[0] ? (
          <div className={styles.mainInsight}>
            <MainInsight {...data.insights[0]} />
          </div>
        ) : (
          !isFailed && <Alert message={'There are no articles for this category yet'} />
        )}
        <div className={styles.insightsGrid}>
          {data.insights.length > 1
            ? data.insights.slice(1).map((insight) => <Insight key={insight.id} {...insight} />)
            : null}
        </div>
        {data.insights.length > 0 ? (
          <div className={styles.pagination}>
            <Pagination
              defaultCurrent={1}
              current={data.page}
              defaultPageSize={PAGE_SIZE}
              total={data.totalInsights}
              onChange={handlePageChange}
              showLessItems={true}
            />
          </div>
        ) : null}
      </div>
      {!data.insights.length ? (
        <div className={styles.recent}>
          <RelatedInsights seeAllAction={handleSeeAllAction} insights={recentData} />
        </div>
      ) : null}
      <div className={styles.footer}>
        <UpFooter
          title={t('layout.solutions.footer.title')}
          description={t('layout.solutions.footer.description')}
          link={{
            title: t('layout.insights.footer.link'),
            path: Routes.Solutions.Overview,
          }}
        />
      </div>
    </div>
  );
};
export default Insights;
// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';

// import { insightsApi, IInsight } from '../../api/insights';

// const Insights: React.FC = () => {
//   const { title } = useParams<{ title?: string }>();
//   const [insights, setInsights] = useState<IInsight[]>([]);
//   const [selectedArticle, setSelectedArticle] = useState<IInsight | null>(null);

//   useEffect(() => {
//     if (title) {
//       insightsApi
//         .getInsightByTitle(title)
//         .then(setSelectedArticle)
//         .catch(() => setSelectedArticle(null));
//     } else {
//       insightsApi
//         .getInsights(1)
//         .then((response) => setInsights(response.insights))
//         .catch(() => setInsights([]));
//     }
//   }, [title]);

//   if (title && selectedArticle) {
//     return (
//       <div>
//         <h1>{selectedArticle.title}</h1>
//         {selectedArticle.mainImage?.url && (
//           <img src={selectedArticle.mainImage.url} alt={selectedArticle.title} />
//         )}
//         <p>{selectedArticle.content}</p>

//         {selectedArticle.relatedInsights?.length ? (
//           <>
//             <h3>Related Insights</h3>
//             <ul>
//               {selectedArticle.relatedInsights.map((related) => (
//                 <li key={related.id}>
//                   <Link to={`/insight/${related.url}`}>{related.title}</Link>
//                 </li>
//               ))}
//             </ul>
//           </>
//         ) : null}

//         <Link to="/insights">⬅ Back to all insights</Link>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>Insights</h1>
//       <ul>
//         {insights.map((insight) => (
//           <li key={insight.id}>
//             <Link to={`/insight/${insight.url}`}>
//               {insight.previewImage?.url && (
//                 <img src={insight.previewImage.url} alt={insight.title} width="100" />
//               )}
//               <h2>{insight.title}</h2>
//               <p>{insight.description}</p>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Insights;
