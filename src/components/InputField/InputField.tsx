import React from 'react';
import { Input } from 'antd';
import classNames from 'classnames';

import styles from './InputField.module.scss';

interface IInputFieldProps {
  name: string;
  value?: string;
  maxLength?: number;
  className?: string;
  onChange?(value: string): void;
}

class InputField extends React.Component<IInputFieldProps> {
  constructor(props: IInputFieldProps) {
    super(props);
    this.state = { active: false };
  }
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    if (onChange) onChange(event.target.value);
  };

  render() {
    const { maxLength, value, name, className } = this.props;
    return (
      <div className={styles.inputContainer}>
        <Input
          id={name}
          className={classNames(styles.inputField, { [styles.filled]: value })}
          onChange={this.handleChange}
          maxLength={maxLength}
          value={value}
        />
        <label
          htmlFor={name}
          className={classNames(styles.inputLabel, { [styles.active]: value }, className)}
        >
          {name}
        </label>
      </div>
    );
  }
}

export default InputField;
