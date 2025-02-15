import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import Menu from '../../components/Menu/Menu';
import styles from '../BusinessLayout.module.scss';
import Header from '../../components/Header/Header';
import requestScreenshot from '../../../../assets/solutions/mobile-request-screenshot.png';
import requestScreenshot2x from '../../../../assets/solutions/mobile-request-screenshot@2x.png';
import iphoneImage from '../../../../assets/solutions/mobile-iphone.png';
import iphoneImage2x from '../../../../assets/solutions/mobile-iphone@2x.png';
import chatScreenshot from '../../../../assets/solutions/mobile-chat-screenshot.png';
import chatScreenshot2x from '../../../../assets/solutions/mobile-chat-screenshot@2x.png';
import TextBlock from '../../components/TextBlock/TextBlock';
import Advantages from '../../components/Advantages/Advantages';
import ObjectFitImage from '../../../../components/ObjectFitImage/ObjectFitImage';

const Mobile = () => {
  const [t] = useTranslation();
  return (
    <div className={classNames(styles.root, styles.mobileRoot)}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.header}>
        <Header
          title={t('layout.solutions.mobilePage.title')}
          description={t('layout.solutions.mobilePage.description')}
        />
      </div>
      <div className={classNames(styles.preview, styles.mobilePreview)}>
        <div className={styles.imageGroup}>
          <ObjectFitImage
            fit="cover"
            src={requestScreenshot}
            srcset={requestScreenshot2x}
            alt={t('layout.solutions.mobilePage.title')}
            className={styles.image1}
          />
          <ObjectFitImage
            fit="cover"
            src={iphoneImage}
            srcset={iphoneImage2x}
            alt={t('layout.solutions.mobilePage.title')}
            className={styles.image2}
          />
          <ObjectFitImage
            fit="cover"
            src={chatScreenshot}
            srcset={chatScreenshot2x}
            alt={t('layout.solutions.mobilePage.title')}
            className={styles.image3}
          />
        </div>
      </div>
      <div className={classNames(styles.textBlock, styles.textBlock1)}>
        <TextBlock
          title={t('layout.solutions.mobilePage.textBlock1.title')}
          description={t('layout.solutions.mobilePage.textBlock1.description')}
        />
      </div>
      <div className={classNames(styles.textBlock, styles.textBlock2)}>
        <TextBlock
          title={t('layout.solutions.mobilePage.textBlock2.title')}
          description={t('layout.solutions.mobilePage.textBlock2.description')}
        />
      </div>
      <div className={styles.advantages}>
        <Advantages
          items={[
            t('layout.solutions.mobilePage.advantages.first'),
            t('layout.solutions.mobilePage.advantages.second'),
            t('layout.solutions.mobilePage.advantages.third'),
          ]}
        />
      </div>
      <div className={classNames(styles.textBlock, styles.textBlock3)}>
        <TextBlock
          title={t('layout.solutions.mobilePage.textBlock3.title')}
          description={t('layout.solutions.mobilePage.textBlock3.description')}
        />
      </div>
      <div className={classNames(styles.textBlock, styles.textBlock4)}>
        <TextBlock
          title={t('layout.solutions.mobilePage.textBlock4.title')}
          description={t('layout.solutions.mobilePage.textBlock4.description')}
        />
      </div>
    </div>
  );
};

export default Mobile;
