import React from 'react';
import classNames from 'classnames';
import { Input as AntdInput, InputRef } from 'antd'; // Import InputRef from antd
import { InputProps } from 'antd/lib/input';

import styles from './Input.module.scss';

interface IInputProps extends InputProps {
  inputRef?:
    | ((instance: InputRef | null) => void) // Use InputRef here
    | React.MutableRefObject<InputRef | null> // Use InputRef here
    | null;
}

const Input: React.FC<IInputProps> = ({ className, inputRef, ...restProps }) => {
  return <AntdInput ref={inputRef} className={classNames(styles.root, className)} {...restProps} />;
};

export default Input;
