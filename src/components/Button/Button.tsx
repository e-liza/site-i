// import React from 'react';
// import classNames from 'classnames';
// import { Button as ButtonAntd } from 'antd';

// import styles from './Button.module.scss';

// interface IButtonProps {
//   name: string;
//   onClick(event?: React.MouseEvent<HTMLElement, MouseEvent>): void;
//   className?: string;
//   type?: 'default' | 'primary';
// }

// const Button: React.FC<IButtonProps> = ({ name, onClick, className, type }) => (
//   <ButtonAntd className={classNames(className, styles.button)} type={type} onClick={onClick}>
//     {name}
//   </ButtonAntd>
// );

// export default Button;
import React from 'react';
import classNames from 'classnames';
import { Button as ButtonAntd, ButtonProps as AntdButtonProps } from 'antd'; // Import ButtonProps from Ant Design

import styles from './Button.module.scss';

// Extend the ButtonProps interface from Ant Design
interface IButtonProps extends AntdButtonProps {
  children?: React.ReactNode; // Optional children prop for button label
  name?: string; // Optional name prop for backward compatibility
}

const Button: React.FC<IButtonProps> = ({
  className,
  onClick,
  children,
  name,
  type,
  ...restProps
}) => (
  <ButtonAntd
    className={classNames(className, styles.button)}
    type={type} // 'default', 'primary', etc.
    onClick={onClick} // onClick handler
    {...restProps} // Spread other props like 'htmlType', 'loading', etc.
  >
    {name || children} {/* Use `name` if provided, otherwise fall back to `children` */}
  </ButtonAntd>
);

export default Button;

// import React from 'react';
// import classNames from 'classnames';
// import { ButtonProps as AntdButtonProps } from 'antd/lib/button';
// import { Button as AntdButton } from 'antd';

// import styles from './Button.module.scss';

// interface IButtonProps extends AntdButtonProps {
//   className?: string;
//   extraWidth?: boolean;
// }

// const Button: React.FC<IButtonProps> = ({ className, extraWidth, ...restProps }) => {
//   return (
//     <AntdButton
//       className={classNames(styles.root, { [styles.rootExtraWidth]: extraWidth }, className)}
//       {...restProps}
//     />
//   );
// };

// export default Button;
