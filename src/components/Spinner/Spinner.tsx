import React, { useMemo } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'; // ✅ Import the correct icon
import { SpinProps } from 'antd/lib/spin';

import styles from './Spinner.module.scss';

const Spinner: React.FC<SpinProps> = ({ ...restProps }) => {
  const loadingIcon = useMemo(() => <LoadingOutlined className={styles.loadIcon} spin />, []);
  return <Spin indicator={loadingIcon} {...restProps} />;
};

export default Spinner;
