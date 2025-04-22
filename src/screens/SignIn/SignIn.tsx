import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import LoginImg from '../../assets/loginPageImg.jpg';

import SignInForm from './components/SignInForm/SignInForm';
import styles from './SignIn.module.scss';

const SignIn: React.FC = () => {
  return (
    <section className={styles.root}>
      <div className={styles.loginFormContainer}>
        <h1 className={styles.signInTitle}>Connecting people and businesses worldwide</h1>
        <div className={styles.form}>
          <SignInForm />
        </div>
      </div>
      <div className={styles.loginImgContainer}>
        {/* Replace the <a> with Link to use react-router */}
        <Link to="/" className={styles.solutionsLink}>
          Learn more about our solutions
        </Link>
        <img src={LoginImg} alt="Login" />
        <div className={styles.contactUs}>
          <span>Don’t have an account yet?</span>
          {/* Replace the <a> with Link to use react-router */}
          <Link to="/" className={styles.contactUsLink}>
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
