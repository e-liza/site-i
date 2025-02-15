import React, { useMemo } from 'react';
import { Spin, Icon } from 'antd';
import { SpinProps } from 'antd/lib/spin';

import styles from './Spinner.module.scss';

const Spinner: React.FC<SpinProps> = ({ ...restProps }) => {
  const loadingIcon = useMemo(() => <Icon type="loading" className={styles.loadIcon} spin />, []);
  return <Spin indicator={loadingIcon} {...restProps} />;
};

export default Spinner;
