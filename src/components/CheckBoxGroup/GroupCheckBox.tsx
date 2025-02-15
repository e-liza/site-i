import React from 'react';

import CheckBox from '../CheckBox/CheckBox';

import styles from './GroupCheckBox.module.scss';

interface IGroupCheckBoxProps {
  value?: ICheckBoxValue[];
  title: string;
  onChange?(value: ICheckBoxValue[]): void;
}

export interface ICheckBoxValue {
  key: string;
  name: string;
  value: boolean;
}

class GroupCheckBox extends React.Component<IGroupCheckBoxProps> {
  updateValue = (serviceIndex: number, value: boolean) => {
    const { onChange, value: services } = this.props;

    if (!onChange || !services) {
      return;
    }

    onChange(
      services.map((service, index) =>
        index === serviceIndex ? { ...service, value: value } : service,
      ),
    );
  };

  render() {
    const { value: services } = this.props;

    const checkboxes = services
      ? services.map((service, index) => (
          <CheckBox
            value={service.value}
            key={service.key}
            name={service.name}
            onChange={(value) => this.updateValue(index, value)}
          />
        ))
      : null;

    return (
      <div>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.group}>{checkboxes}</div>
      </div>
    );
  }
}

export default GroupCheckBox;
