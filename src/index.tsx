import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './i18n';

import 'antd/dist/antd.css';

import './styles/global.scss';
import routes from './routes';

window.recaptchaOptions = {
  useRecaptchaNet: process.env.REACT_APP_USE_RECAPTCHA_NET === 'true',
};

ReactDOM.render(
  <Suspense fallback={null}>
    <BrowserRouter>{routes}</BrowserRouter>
  </Suspense>,
  document.getElementById('root'),
);
