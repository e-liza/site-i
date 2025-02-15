import React from 'react';

import { ReactComponent as BookIcon } from '../../../../assets/book.svg';

import styles from './Alert.module.scss';

interface IAlert {
  message: string;
}

const Alert: React.FC<IAlert> = ({ message }) => (
  <div className={styles.container}>
    <BookIcon className={styles.icon} />
    <div className={styles.message}>{message}</div>
  </div>
);

export default Alert;
