import React, { useMemo } from 'react';
import classNames from 'classnames';

import { ReactComponent as PlusIcon } from '../../../../assets/solutions/plus-icon.svg';

import styles from './Advantages.module.scss';

interface IAdvantagesProps {
  shouldReverse?: boolean;
  items: string[];
}

const Advantages: React.FC<IAdvantagesProps> = ({ shouldReverse, items }) => {
  return (
    <div className={classNames(styles.root, shouldReverse && styles.rootReverse)}>
      {useMemo(
        () =>
          items.map((text) => (
            <div key={text} className={styles.item}>
              <PlusIcon className={styles.icon} />
              <div className={styles.text}>{text}</div>
            </div>
          )),
        [items],
      )}
    </div>
  );
};

export default Advantages;
