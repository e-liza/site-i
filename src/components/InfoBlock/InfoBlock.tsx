import React from 'react';

import styles from './InfoBlock.module.scss';

interface IInfoBlockProps {
  images: string[];
}

const InfoBlock: React.FC<IInfoBlockProps> = ({ children, images }) => (
  <div className={styles.infoBlockContainer}>
    <div className={styles.infoBlockText}>
      <p>{children}</p>
    </div>
    <div className={styles.infoBlockImageContainer}>
      {images.map((item, index) => (
        <div key={index} className={styles.imageCell}>
          <img src={item} alt="Info" />
        </div>
      ))}
    </div>
  </div>
);

export default InfoBlock;
