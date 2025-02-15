import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Spinner from '../../../../components/Spinner/Spinner';
import { IPositions, getPositions } from '../../../../api/positions';
import { PAGE_SIZE } from '../../../../constants/positions';
import { Routes } from '../../../../constants/routes';
import Pagination from '../../../../components/Pagination/Pagination';

import styles from './Positions.module.scss';

const Positions = () => {
  const [t] = useTranslation();
  const [positionsData, setPositionsData] = useState<IPositions>({
    positions: [],
    totalPages: 1,
    page: 1,
    pageSize: PAGE_SIZE,
    totalPositions: 0,
  });
  const [isPositionsLoading, setIsPositionsLoading] = useState(false);
  const [positionError, setPositionError] = useState<Error | null>(null);

  useEffect(() => {
    setPositionError(null);
    setIsPositionsLoading(true);
    getPositions(positionsData.page, positionsData.pageSize)
      .then(setPositionsData)
      .catch((error) => {
        setPositionError(error);
      })
      .finally(() => {
        setIsPositionsLoading(false);
      });
  }, [positionsData.page, positionsData.pageSize]);

  const jobsList = useMemo(() => {
    const handlePageChange = (page: number) => {
      setPositionsData({ ...positionsData, page });
    };
    return (
      <div className={styles.jobsList}>
        {positionsData.positions.length > 0 ? (
          <>
            {positionsData.positions.map(({ id, city, country, title }) => (
              <div key={id} className={styles.jobsListItem}>
                <div className={styles.jobsHead}>
                  <span className={styles.jobPositionTitle}>{title}</span>
                  <span className={styles.jobPositionLocation}>{`${city}, ${country}`}</span>
                </div>
                <Link
                  to={Routes.JobDescription.replace(':id', id.toString())}
                  className={styles.link}
                >
                  {t('layout.careers.jobPositionSection.link')}
                </Link>
              </div>
            ))}
            <Pagination
              className={styles.pagination}
              defaultCurrent={1}
              current={positionsData.page}
              defaultPageSize={PAGE_SIZE}
              total={positionsData.totalPositions}
              onChange={handlePageChange}
              showLessItems={true}
              hideOnSinglePage={true}
            />
          </>
        ) : (
          <div className={styles.errorMessage}>{t('layout.careers.nothingToShow')}</div>
        )}
      </div>
    );
  }, [positionsData, t]);
  return (
    <div className={styles.root}>
      {isPositionsLoading && <Spinner className={styles.spinner} />}
      <h2 className={styles.title}>{t('layout.careers.jobPositionSection.title')}</h2>
      {positionError ? (
        <div className={styles.errorMessage}>{positionError.message}</div>
      ) : (
        jobsList
      )}
    </div>
  );
};

export default Positions;
