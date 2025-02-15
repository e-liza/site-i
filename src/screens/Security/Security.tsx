import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Security.module.scss';

const Security: React.FC = () => {
  const [t] = useTranslation();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t('layout.security.title')}</h1>
      <section className={styles.section}>
        <h2>{t('layout.security.section1.title')}</h2>
        <p>{t('layout.security.section1.block1.text1')}</p>
        <p>{t('layout.security.section1.block1.text2')}</p>
        <p>{t('layout.security.section1.block1.text3')}</p>
      </section>
      <section className={styles.section}>
        <h2>{t('layout.security.section2.title')}</h2>
        <p>{t('layout.security.section2.block1.text1')}</p>
        <p>{t('layout.security.section2.block1.text2')}</p>
      </section>
      <section className={styles.section}>
        <h2>{t('layout.security.section3.title')}</h2>
        <p>{t('layout.security.section3.block1.text1')}</p>
      </section>
      <section className={styles.section}>
        <h2>{t('layout.security.section4.title')}</h2>
        <p>{t('layout.security.section4.block1.text1')}</p>
        <ul>
          <li>{t('layout.security.section4.block1.list1.item1')}</li>
          <li>{t('layout.security.section4.block1.list1.item2')}</li>
          <li>{t('layout.security.section4.block1.list1.item3')}</li>
          <li>{t('layout.security.section4.block1.list1.item4')}</li>
          <li>{t('layout.security.section4.block1.list1.item5')}</li>
          <li>{t('layout.security.section4.block1.list1.item6')}</li>
        </ul>
        <p>{t('layout.security.section4.block1.text2')}</p>
        <h3>{t('layout.security.section4.block2.title')}</h3>
        <p>{t('layout.security.section4.block2.text1')}</p>
        <ul>
          <li>{t('layout.security.section4.block2.list1.item1')}</li>
          <li>{t('layout.security.section4.block2.list1.item2')}</li>
          <li>{t('layout.security.section4.block2.list1.item3')}</li>
          <li>{t('layout.security.section4.block2.list1.item4')}</li>
          <li>{t('layout.security.section4.block2.list1.item5')}</li>
        </ul>
        <h3>{t('layout.security.section4.block3.title')}</h3>
        <p>{t('layout.security.section4.block3.text1')}</p>
        <ul>
          <li>{t('layout.security.section4.block3.list1.item1')}</li>
          <li>{t('layout.security.section4.block3.list1.item2')}</li>
          <li>{t('layout.security.section4.block3.list1.item3')}</li>
          <li>{t('layout.security.section4.block3.list1.item4')}</li>
          <li>{t('layout.security.section4.block3.list1.item5')}</li>
        </ul>
        <p>{t('layout.security.section4.block3.text2')}</p>
        <h3>{t('layout.security.section4.block4.title')}</h3>
        <p>{t('layout.security.section4.block4.text1')}</p>
        <ul>
          <li>
            <strong>{t('layout.security.section4.block4.list1.item1.title')} </strong>
            {t('layout.security.section4.block4.list1.item1.text')}
          </li>
          <li>
            <strong>{t('layout.security.section4.block4.list1.item2.title')} </strong>
            {t('layout.security.section4.block4.list1.item2.text')}
          </li>
          <li>
            <strong>{t('layout.security.section4.block4.list1.item3.title')} </strong>
            {t('layout.security.section4.block4.list1.item3.text')}
          </li>
        </ul>
        <h3>{t('layout.security.section4.block5.title')}</h3>
        <p>{t('layout.security.section4.block5.text1')}</p>
        <h3>{t('layout.security.section4.block6.title')}</h3>
        <p>{t('layout.security.section4.block6.text1')}</p>
        <h3>{t('layout.security.section4.block7.title')}</h3>
        <p>{t('layout.security.section4.block7.text1')}</p>
        <ul>
          <li>{t('layout.security.section4.block7.list1.item1')}</li>
          <li>{t('layout.security.section4.block7.list1.item2')}</li>
          <li>{t('layout.security.section4.block7.list1.item3')}</li>
          <li>{t('layout.security.section4.block7.list1.item4')}</li>
          <li>{t('layout.security.section4.block7.list1.item5')}</li>
          <li>
            {t('layout.security.section4.block7.list1.item6')}{' '}
            <a href="mailto:contact@ivys.io"> contact@ivys.io</a>
          </li>
        </ul>
        <h3>{t('layout.security.section4.block8.title')}</h3>
        <p>{t('layout.security.section4.block8.text1')}</p>
      </section>
      <section className={styles.section}>
        <h2>{t('layout.security.section5.title')}</h2>
        <p>{t('layout.security.section5.block1.text1')}</p>
        <h3>{t('layout.security.section5.block2.title')}</h3>
        <p>{t('layout.security.section5.block2.text1')}</p>
        <p>{t('layout.security.section5.block2.text2')}</p>
        <h3>{t('layout.security.section5.block3.title')}</h3>
        <p>{t('layout.security.section5.block3.text1')}</p>
        <h3>{t('layout.security.section5.block4.title')}</h3>
        <p>{t('layout.security.section5.block4.text1')}</p>
        <h3>{t('layout.security.section5.block5.title')}</h3>
        <p>{t('layout.security.section5.block5.text1')}</p>
        <h3>{t('layout.security.section5.block6.title')}</h3>
        <p>{t('layout.security.section5.block6.text1')}</p>
        <h3>{t('layout.security.section5.block7.title')}</h3>
        <p>{t('layout.security.section5.block7.text1')}</p>
        <ul>
          <li>{t('layout.security.section5.block7.list1.item1')}</li>
          <li>{t('layout.security.section5.block7.list1.item2')}</li>
          <li>{t('layout.security.section5.block7.list1.item3')}</li>
          <li>{t('layout.security.section5.block7.list1.item4')}</li>
          <li>{t('layout.security.section5.block7.list1.item5')}</li>
        </ul>
        <p>{t('layout.security.section5.block7.text2')}</p>
        <h3>{t('layout.security.section5.block8.title')}</h3>
        <p>{t('layout.security.section5.block8.text1')}</p>
        <h3>{t('layout.security.section5.block9.title')}</h3>
        <p>{t('layout.security.section5.block9.text1')}</p>
      </section>
    </div>
  );
};

export default Security;
