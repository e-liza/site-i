import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Import from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './i18n';

import 'antd/dist/reset.css';

import './styles/global.scss';
import routes from './routes';

window.recaptchaOptions = {
  useRecaptchaNet: process.env.REACT_APP_USE_RECAPTCHA_NET === 'true',
};

const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container); // ✅ Use createRoot
  root.render(
    <Suspense fallback={null}>
      <BrowserRouter>{routes}</BrowserRouter>
    </Suspense>,
  );
}
