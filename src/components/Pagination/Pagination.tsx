import React from 'react';
import classNames from 'classnames';
import { Pagination as AntdPagination } from 'antd';
import { PaginationProps } from 'antd/lib/pagination';

import { ReactComponent as Arrow } from '../../assets/arrow.svg';

import styles from './Pagination.module.scss';

const itemRender = (
  current: number,
  type: string,
  originalElement: React.ReactElement<HTMLElement>,
) => {
  if (type === 'prev') {
    return <Arrow className={classNames(styles.arrow, styles.arrowPrev)} />;
  }
  if (type === 'next') {
    return <Arrow className={classNames(styles.arrow, styles.arrowNext)} />;
  }
  if (type === 'jump-prev' || type === 'jump-next') {
    return <span>...</span>;
  }
  return originalElement;
};

const Pagination: React.FC<PaginationProps> = ({ className, ...restProps }) => {
  return (
    <AntdPagination
      className={classNames(className, styles.root)}
      itemRender={itemRender}
      {...restProps}
    />
  );
};

export default Pagination;
