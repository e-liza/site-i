import React, { useCallback } from 'react';
import classNames from 'classnames';
import objectFitImages from 'object-fit-images';

import isRetina from '../../utils/is-retina';

import styles from './ObjectFitImage.module.scss';

interface IObjectFitImageProps {
  src: string;
  srcset?: string;
  alt: string;
  fit: 'cover' | 'contain';
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  className?: string;
}

const ObjectFitImage: React.FC<IObjectFitImageProps> = ({
  src,
  srcset,
  alt,
  className,
  fit,
  position = 'center',
}) => {
  const callbackRef = useCallback((node) => {
    if (node !== null) {
      objectFitImages(node);
    }
  }, []);

  return (
    <img
      ref={callbackRef}
      className={classNames(styles[fit], styles[position], className)}
      src={srcset && isRetina() ? srcset : src}
      alt={alt}
    />
  );
};

export default ObjectFitImage;
