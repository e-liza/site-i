import axios from 'axios';

import IServerError from '../interfaces/IServerError';
import IAxiosInstance from '../interfaces/IAxiosInstance';
import i18n from '../i18n';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api/v1',
  withCredentials: false,
});

// Error handling
const DEFAULT_ERROR: IServerError = {
  code: 'SERVER__ERROR',
  message: 'SERVER__ERROR',
  data: {},
};

axiosInstance.interceptors.response.use(
  (successResponse) => {
    if (!successResponse.data) {
      throw DEFAULT_ERROR;
    }

    return successResponse.data;
  },
  (failedResponse) => {
    if (
      !failedResponse.response ||
      !failedResponse.response.data ||
      !failedResponse.response.data.code
    ) {
      throw DEFAULT_ERROR;
    }

    throw failedResponse.response.data;
  },
);

axiosInstance.interceptors.response.use(undefined, (error: IServerError) => {
  if (!i18n.isInitialized) {
    console.warn('i18n in not initialized during axios response processing');
    throw error;
  }

  if (!i18n.exists(`common.error.${error.code}`)) {
    console.warn(`Missing ${error.code} code i18n dictionary key`);
    throw error;
  }

  const localizedError = {
    ...error,
    message: i18n.t(`common.error.${error.code}`),
  };

  console.info(
    `Server error ${localizedError.code} message translated - ${localizedError.message}`,
  );

  throw localizedError;
});

export default axiosInstance as IAxiosInstance;
