import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './ThanksMessage.module.scss';

interface IThansMessageProps {
  msgTitle: string;
}

const ThanksMessage: React.FC<IThansMessageProps> = ({ msgTitle }) => {
  const [t] = useTranslation();
  return (
    <div className={styles.thanksMessageContainer}>
      <div className={styles.info}>
        <h1 className={styles.title}>{msgTitle}</h1>
        <p className={styles.text}>{t('layout.thanksMessage.text')}</p>
      </div>
      <div className={styles.status}>{t('layout.thanksMessage.messageStatus')}</div>
    </div>
  );
};

export default ThanksMessage;
