import React from 'react';
import { Input } from 'antd';
import classNames from 'classnames';

import styles from './TextArea.module.scss';

interface IInputFieldProps {
  name: string;
  value?: string;
  maxLength?: number;
  onChange?(value: string): void;
}

class TextArea extends React.Component<IInputFieldProps> {
  constructor(props: IInputFieldProps) {
    super(props);
    this.state = { active: false };
  }
  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (this.props.onChange) this.props.onChange(event.target.value);
  };

  render() {
    const { TextArea } = Input;
    return (
      <div className={styles.textAreaContainer}>
        <TextArea
          id={this.props.name}
          className={classNames(styles.textArea, { [styles.filled]: this.props.value })}
          onChange={this.handleChange}
          maxLength={this.props.maxLength}
          value={this.props.value}
          autoSize
        />
        <label
          htmlFor={this.props.name}
          className={classNames(styles.textAreaLabel, { [styles.active]: this.props.value })}
        >
          {this.props.name}
        </label>
      </div>
    );
  }
}

export default TextArea;
