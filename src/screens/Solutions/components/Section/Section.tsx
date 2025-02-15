import React from 'react';
import classNames from 'classnames';

import ObjectFitImage from '../../../../components/ObjectFitImage/ObjectFitImage';

import styles from './Section.module.scss';

interface ISectionProps {
  imageUrl: string;
  title: string;
  content: string;
  reverse?: boolean;
}

const Section: React.FC<ISectionProps> = ({ imageUrl, title, content, reverse }) => {
  return (
    <div className={classNames(styles.root, reverse && styles.rootReverse)}>
      <div className={styles.imageContainer}>
        <ObjectFitImage fit="cover" className={styles.image} src={imageUrl} alt={title} />
      </div>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
};

export default Section;
