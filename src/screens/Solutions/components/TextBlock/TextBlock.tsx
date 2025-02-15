import React from 'react';
import classNames from 'classnames';

import styles from './TextBlock.module.scss';

interface ITextBlockProps {
  title: string;
  description: string;
  className?: string;
}

const TextBlock: React.FC<ITextBlockProps> = ({ title, description, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default TextBlock;
