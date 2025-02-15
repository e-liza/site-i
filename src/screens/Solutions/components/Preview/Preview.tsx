import React from 'react';

import ObjectFitImage from '../../../../components/ObjectFitImage/ObjectFitImage';

import styles from './Preview.module.scss';

interface IPreviewProps {
  bigImageUrl: string;
  bigImageUrl2x?: string;
  smallImageUrl: string;
  smallImageUrl2x?: string;
}

const Preview: React.FC<IPreviewProps> = ({
  bigImageUrl,
  bigImageUrl2x,
  smallImageUrl,
  smallImageUrl2x,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.group}>
        <ObjectFitImage
          fit="cover"
          className={styles.big}
          src={bigImageUrl}
          srcset={bigImageUrl2x}
          alt=""
        />
        <ObjectFitImage
          fit="cover"
          className={styles.small}
          src={smallImageUrl}
          srcset={smallImageUrl2x}
          alt=""
        />
      </div>
    </div>
  );
};

export default Preview;
