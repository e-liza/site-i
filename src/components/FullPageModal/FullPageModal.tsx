import React from 'react';

import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import IvyLogo from '../IvyLogo/IvyLogo';
import Portal from '../Portal/Portal';

import styles from './FullPageModal.module.scss';

export interface IFullPageModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode; // ✅ Ensure children is optional and properly typed
}

const FullPageModal: React.FC<IFullPageModalProps> = ({ children, isOpen, onClose }) => {
  return isOpen ? (
    <Portal>
      <div className={styles.root}>
        <IvyLogo className={styles.logo} width={68} height={50} />
        <div className={styles.content}>{children}</div>
        <button onClick={onClose} className={styles.closeButton}>
          <CloseIcon width={24} height={24} />
        </button>
      </div>
    </Portal>
  ) : null;
};

export default FullPageModal;
