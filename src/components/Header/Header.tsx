// import React, { useState, useCallback } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

// import Button from '../Button/Button';
// import Logo from '../../assets/logo.svg';
// import Cancel from '../../assets/cancel.svg';
// import Burger from '../../assets/burger.svg';
// import { Routes } from '../../constants/routes';
// import MobileMenu from '../MobileMenu/MobileMenu';
// import { mainMenu } from '../../constants/menus';

// import styles from './Header.module.scss';
// import Navigation from './components/Navigation/Navigation';

// const Header = () => {
//   const { t } = useTranslation(); // ✅ Correct destructuring
//   const navigate = useNavigate(); // ✅ Use navigate instead of history
//   const [isMobile, setIsMobile] = useState(false);

//   return (
//     <header className={styles.headerContainer}>
//       <div className={styles.header}>
//         <Link className={styles.logo} to={Routes.Home}>
//           <img src={Logo} alt="Logo" />
//         </Link>
//         <div className={styles.navBar}>
//           <Navigation items={mainMenu} />
//         </div>
//         <div className={styles.headerControls}>
//           <a className={styles.signInButton} href={process.env.REACT_APP_URL}>
//             {t('layout.headerButton.signIn')}
//           </a>
//           {!isMobile && (
//             <Button
//               className={styles.mobileRequestButton}
//               type="primary"
//               name={t('layout.headerButton.getADemo')}
//               onClick={() => navigate(Routes.DemoRequest)} // ✅ Fixed navigation
//             />
//           )}
//           <Button
//             className={styles.requestButton}
//             type="primary"
//             name={t('layout.headerButton.requestDemo')}
//             onClick={() => navigate(Routes.DemoRequest)} // ✅ Fixed navigation
//           />
//         </div>
//         <div className={styles.mobileControls}>
//           {isMobile ? (
//             <img src={Cancel} alt="cancel" onClick={() => setIsMobile(false)} />
//           ) : (
//             <img
//               src={Burger}
//               alt="menu"
//               className={styles.burgerIcon}
//               onClick={() => setIsMobile(true)}
//             />
//           )}
//         </div>
//         <MobileMenu active={isMobile} onItemClick={useCallback(() => setIsMobile(false), [])} />
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // <-- Ensure Link is imported
import { useTranslation } from 'react-i18next';

import Button from '../Button/Button';
import Logo from '../../assets/logo.svg';
import Cancel from '../../assets/cancel.svg';
import Burger from '../../assets/burger.svg';
import { Routes } from '../../constants/routes';
import MobileMenu from '../MobileMenu/MobileMenu';
import { mainMenu } from '../../constants/menus';

import styles from './Header.module.scss';
import Navigation from './components/Navigation/Navigation';

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        <Link className={styles.logo} to={Routes.Home}>
          <img src={Logo} alt="Logo" />
        </Link>
        <div className={styles.navBar}>
          <Navigation items={mainMenu} />
        </div>
        <div className={styles.headerControls}>
          {/* Replace <a> with <Link> for Sign In button */}
          <Link to={Routes.SignIn} className={styles.signInButton}>
            {t('layout.headerButton.signIn')}
          </Link>
          {!isMobile && (
            <Button
              className={styles.mobileRequestButton}
              type="primary"
              name={t('layout.headerButton.getADemo')}
              onClick={() => navigate(Routes.DemoRequest)}
            />
          )}
          <Button
            className={styles.requestButton}
            type="primary"
            name={t('layout.headerButton.requestDemo')}
            onClick={() => navigate(Routes.DemoRequest)}
          />
        </div>
        <div className={styles.mobileControls}>
          {isMobile ? (
            <img src={Cancel} alt="cancel" onClick={() => setIsMobile(false)} />
          ) : (
            <img
              src={Burger}
              alt="menu"
              className={styles.burgerIcon}
              onClick={() => setIsMobile(true)}
            />
          )}
        </div>
        <MobileMenu active={isMobile} onItemClick={useCallback(() => setIsMobile(false), [])} />
      </div>
    </header>
  );
};

export default Header;
