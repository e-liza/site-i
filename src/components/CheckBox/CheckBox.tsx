import React from 'react';
import classNames from 'classnames';

import styles from './CheckBox.module.scss';

interface ICheckBoxProps {
  name: string;
  value?: boolean;
  onChange?(value: boolean): void;
}

class CheckBox extends React.Component<ICheckBoxProps> {
  handleChange = () => {
    if (this.props.onChange) this.props.onChange(!this.props.value);
  };
  render() {
    return (
      <button
        className={classNames(
          styles.checkBox,
          this.props.value ? styles.activeCheckBox : styles.notActiveCheckBox,
        )}
        onClick={this.handleChange}
      >
        {this.props.name}
      </button>
    );
  }
}

export default CheckBox;
