import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import smoothscroll from 'smoothscroll-polyfill';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { footerMenu } from '../../constants/menus';

import styles from './Layout.module.scss';

smoothscroll.polyfill();

const Layout: React.FC = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [history.location.pathname]);

  return (
    <div>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer menuItems={footerMenu} />
    </div>
  );
};
export default Layout;
