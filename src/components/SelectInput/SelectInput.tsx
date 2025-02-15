import React from 'react';
import { Select } from 'antd';
import classNames from 'classnames';

import { ReactComponent as ArrowIcon } from '../../assets/selectArrow.svg';

import styles from './SelectInput.module.scss';

interface ISelectItem {
  name: string;
  value: string;
}

interface IInputFieldProps {
  showSearch: boolean;
  name: string;
  mode?: 'multiple' | 'tags';
  maxTagTextLength?: number;
  maxTagCount?: number;
  value?: string | string[];
  selectItems: ISelectItem[];
  onChange?(value: string): void;
}

interface IInputFieldState {
  active: boolean;
  isFocused: boolean;
}

class SelectInput extends React.Component<IInputFieldProps, IInputFieldState> {
  private selectRef: Select<string> | null;

  constructor(props: IInputFieldProps) {
    super(props);
    this.state = { active: false, isFocused: false };
    this.selectRef = null;
  }

  handleChange = (value: string) => {
    const { onChange } = this.props;
    if (onChange) onChange(value);
  };

  toggleFocus = () => {
    this.setState({
      isFocused: !this.state.isFocused,
    });
  };

  render() {
    const {
      mode,
      maxTagTextLength,
      maxTagCount,
      selectItems,
      value,
      name,
      showSearch,
    } = this.props;
    const hasInput = mode;
    return (
      <div className={styles.inputContainer}>
        {!this.state.isFocused && !hasInput && (
          <input
            type="text"
            onFocus={() => {
              this.toggleFocus();
              this.selectRef?.focus();
            }}
            className={styles.hidden}
          />
        )}
        <Select
          ref={(ref) => (this.selectRef = ref)}
          showSearch={showSearch}
          onChange={this.handleChange}
          className={classNames(styles.formSelect, {
            [styles.filled]: value,
          })}
          onFocus={() => {
            if (!this.state.isFocused && !hasInput) {
              this.toggleFocus();
            }
          }}
          onBlur={() => {
            if (this.state.isFocused && !hasInput) {
              this.toggleFocus();
            }
          }}
          dropdownClassName={styles.dropDown}
          mode={mode}
          maxTagTextLength={maxTagTextLength}
          maxTagCount={maxTagCount}
          suffixIcon={<ArrowIcon />}
        >
          {selectItems.map((item) => (
            <Select.Option key={item.name} value={item.value}>
              <span>{item.name}</span>
            </Select.Option>
          ))}
        </Select>
        <label
          htmlFor={name}
          className={classNames(styles.inputLabel, { [styles.active]: value?.length })}
        >
          {name}
        </label>
      </div>
    );
  }
}

export default SelectInput;
