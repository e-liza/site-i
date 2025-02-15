import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import Menu from '../../components/Menu/Menu';
import styles from '../BusinessLayout.module.scss';
import Header from '../../components/Header/Header';
import Preview from '../../components/Preview/Preview';
import bigImage from '../../../../assets/solutions/employee-big-screenshot.png';
import smallImage from '../../../../assets/solutions/employee-small-screenshot.png';
import bigImage2x from '../../../../assets/solutions/employee-big-screenshot@2x.png';
import smallImage2x from '../../../../assets/solutions/employee-small-screenshot@2x.png';
import TextBlock from '../../components/TextBlock/TextBlock';
import Advantages from '../../components/Advantages/Advantages';

const Employee = () => {
  const [t] = useTranslation();
  return (
    <div className={classNames(styles.root, styles.employeeRoot)}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.header}>
        <Header
          title={t('layout.solutions.employeePage.title')}
          description={t('layout.solutions.employeePage.description')}
        />
      </div>
      <div className={styles.preview}>
        <Preview
          bigImageUrl={bigImage}
          bigImageUrl2x={bigImage2x}
          smallImageUrl={smallImage}
          smallImageUrl2x={smallImage2x}
        />
      </div>
      <div className={classNames(styles.textBlock, styles.textBlock1)}>
        <TextBlock
          title={t('layout.solutions.employeePage.textBlock1.title')}
          description={t('layout.solutions.employeePage.textBlock1.description')}
        />
      </div>
      <div className={classNames(styles.textBlock, styles.textBlock2)}>
        <TextBlock
          title={t('layout.solutions.employeePage.textBlock2.title')}
          description={t('layout.solutions.employeePage.textBlock2.description')}
        />
      </div>
      <div className={styles.advantages}>
        <Advantages
          items={[
            t('layout.solutions.employeePage.advantages.first'),
            t('layout.solutions.employeePage.advantages.second'),
            t('layout.solutions.employeePage.advantages.third'),
          ]}
        />
      </div>
      <div className={classNames(styles.textBlock, styles.textBlock3)}>
        <TextBlock
          title={t('layout.solutions.employeePage.textBlock3.title')}
          description={t('layout.solutions.employeePage.textBlock3.description')}
        />
      </div>
      <div className={classNames(styles.textBlock, styles.textBlock4)}>
        <TextBlock
          title={t('layout.solutions.employeePage.textBlock4.title')}
          description={t('layout.solutions.employeePage.textBlock4.description')}
        />
      </div>
    </div>
  );
};

export default Employee;
