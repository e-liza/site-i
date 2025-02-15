import React from 'react';
import { useTranslation } from 'react-i18next';

import facebook from '../../../../assets/facebook.svg';
import twitter from '../../../../assets/twitter.svg';
import linkedIn from '../../../../assets/linkedIn.svg';

import styles from './SocialPanel.module.scss';

interface ISocialPanel {
  className?: string;
}

const SocialPanel: React.FC<ISocialPanel> = () => {
  const [t] = useTranslation();

  return (
    <div className={styles.root}>
      <span className={styles.title}>{t('layout.footerMenus.socials')}</span>
      <div className={styles.list}>
        <a href="/" className={styles.item}>
          <img src={facebook} alt="facebook" />
        </a>
        <a href="/" className={styles.item}>
          <img src={linkedIn} alt="linkedIn" />
        </a>
        <a href="/" className={styles.item}>
          <img src={twitter} alt="twitter" />
        </a>
      </div>
    </div>
  );
};

export default SocialPanel;
