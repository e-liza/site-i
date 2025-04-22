// import React from 'react';
// import classNames from 'classnames';

// import styles from './CheckBox.module.scss';

// interface ICheckBoxProps {
//   name: string;
//   value?: boolean;
//   onChange?(value: boolean): void;
// }

// class CheckBox extends React.Component<ICheckBoxProps> {
//   handleChange = () => {
//     if (this.props.onChange) this.props.onChange(!this.props.value);
//   };
//   render() {
//     return (
//       <button
//         className={classNames(
//           styles.checkBox,
//           this.props.value ? styles.activeCheckBox : styles.notActiveCheckBox,
//         )}
//         onClick={this.handleChange}
//       >
//         {this.props.name}
//       </button>
//     );
//   }
// }

// export default CheckBox;
import React from 'react';
import classNames from 'classnames';

import styles from './CheckBox.module.scss';

interface ICheckBoxProps {
  name: string;
  value?: boolean;
  onChange?(value: boolean): void;
  children?: React.ReactNode;
  className?: string; // Add className prop here
}

class CheckBox extends React.Component<ICheckBoxProps> {
  handleChange = () => {
    if (this.props.onChange) this.props.onChange(!this.props.value);
  };

  render() {
    const { className, children, value, onChange } = this.props;

    // Combine the passed className with the class for styling
    const checkboxClass = classNames(
      styles.checkBox,
      className, // Add the passed className here
      value ? styles.activeCheckBox : styles.notActiveCheckBox,
    );

    return (
      <button className={checkboxClass} onClick={this.handleChange}>
        {children}
      </button>
    );
  }
}

export default CheckBox;
