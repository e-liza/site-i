import React, { useMemo } from 'react';
import classNames from 'classnames';

import styles from './Benefits.module.scss';

export interface IBenefit {
  title: string;
  description: string;
}

interface IBenefitsProps {
  formStatus: boolean;
  items: IBenefit[];
}

const Benefits: React.FC<IBenefitsProps> = ({ items, formStatus }) => {
  return (
    <div className={classNames(styles.root, { [styles.rootFormSubmited]: formStatus })}>
      {useMemo(
        () =>
          items.map(({ title, description }) => (
            <div key={title} className={styles.item}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
            </div>
          )),
        [items],
      )}
    </div>
  );
};

export default Benefits;
