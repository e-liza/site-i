import React from 'react';
import classNames from 'classnames';
import { Button as ButtonAntd } from 'antd';

import styles from './Button.module.scss';

interface IButtonProps {
  name: string;
  onClick(event?: React.MouseEvent<HTMLElement, MouseEvent>): void;
  className?: string;
  type?: 'default' | 'primary';
}

const Button: React.FC<IButtonProps> = ({ name, onClick, className, type }) => (
  <ButtonAntd className={classNames(className, styles.button)} type={type} onClick={onClick}>
    {name}
  </ButtonAntd>
);

export default Button;
