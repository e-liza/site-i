/// <reference types="react-scripts" />

// tslint:disable-next-line:no-namespace
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    REACT_APP_RECAPTCHA_KEY: string;
    REACT_APP_USE_RECAPTCHA_NET: string;
    REACT_APP_URL: string;
    REACT_APP_COOKIE_BOT_KEY: string;
  }
}
