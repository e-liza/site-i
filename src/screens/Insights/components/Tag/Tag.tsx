import React from 'react';

import styles from './Tag.module.scss';

interface ITagProps {
  name: string;
  textColor?: string;
}

const Tag: React.FC<ITagProps> = ({ name, textColor }) => (
  <div style={{ color: textColor }} className={styles.container}>
    {name}
  </div>
);

export default Tag;
