import axios, { AxiosInstance, AxiosRequestConfig, HttpStatusCode } from 'axios';
import { LocalStorageService } from '..';
import { paths } from '~/routes/paths';

declare module 'axios' {
  export interface AxiosRequestConfig {
    throwAccessDenied?: boolean; // is true if you want to self handle access denied exception
  }
}

export const createService = (
  baseURL = process.env.REACT_APP_API_URL,
  contentType = 'application/json',
): AxiosInstance => {
  return interceptAuth(baseConfig(baseURL, contentType));
};
export const createServiceFormData = (
  baseURL = process.env.REACT_APP_API_URL,
  contentType = 'multipart/form-data',
): AxiosInstance => {
  return interceptAuth(baseConfig(baseURL, contentType));
};

export const downloadFileService = (
  baseURL = process.env.REACT_APP_API_URL,
  contentType = 'application/json',
): AxiosInstance => {
  const config: AxiosRequestConfig = baseConfig(baseURL, contentType);
  config.responseType = 'blob';
  return interceptAuth(config);
};

const baseConfig = (baseURL = process.env.REACT_APP_API_URL, contentType = 'application/json') => {
  return {
    baseURL,
    headers: {
      'Accept-Language': 'en-US',
      'Content-Type': contentType,
    },
  };
};

const interceptAuth = (config: AxiosRequestConfig) => {
  const instance = axios.create(config);

  instance.interceptors.request.use(cf => {
    const token = LocalStorageService.get(LocalStorageService.OAUTH_TOKEN);
    const currentLocale = LocalStorageService.get(LocalStorageService.LANGUAGE) || 'ja';
    if (token && cf?.headers && currentLocale) {
      cf.headers['Authorization'] = `Bearer ${token}`;
      cf.headers['Accept-Language'] = currentLocale;
    }
    return cf;
  });
  instance.interceptors.response.use(
    response => {
      // Do something with response data
      return response.data;
    },
    error => {
      if (error.isAxiosError && error.message === 'Network Error') {
        return Promise.reject({
          type: 'error',
          code: 'exception',
          message: 'Network Error',
        });
      }
      if (error?.response) {
        if (
          error.response.status === HttpStatusCode.Forbidden ||
          error.response.status === HttpStatusCode.Unauthorized
        ) {
          try {
            // logout();
            LocalStorageService.removeAllItem();
          } catch (e) {
            console.error('clear logout err', e);
          } finally {
            window.location.href = `${paths.login}`;
          }
        }
        if (error.response.status === HttpStatusCode.NotFound) {
          //handle not found
        }
        if (error.response.status >= HttpStatusCode.InternalServerError) {
          //handle server error
        }
      }
      return { ...error.response.data, code: 'error' };
    },
  );
  return instance;
};

export const createServiceNoToken = (baseURL = process.env.REACT_APP_API_URL): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    headers: {
      'Accept-Language': 'en-US',
      'Content-Type': 'application/json',
    },
  });
  instance.interceptors.response.use(
    response => {
      return response.data;
    },
    error => {
      if (error.isAxiosError && error.message === 'Network Error') {
        return Promise.reject({
          type: 'error',
          code: 'exception',
          message: 'Network Error',
        });
      }
      return Promise.reject(error);
    },
  );
  return instance;
};
