import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // ✅ Import useLocation
import smoothscroll from 'smoothscroll-polyfill';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { footerMenu } from '../../constants/menus';

import styles from './Layout.module.scss';

smoothscroll.polyfill();

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const navigate = useNavigate(); // ✅ Renamed 'history' to 'navigate'
  const location = useLocation(); // ✅ Correct way to access pathname

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]); // ✅ Fixed dependency

  return (
    <div>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer menuItems={footerMenu} />
    </div>
  );
};

export default Layout;
