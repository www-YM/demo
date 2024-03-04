import { clearToken } from '../../utils/local-storage-manager';

const onResponseErrorInterceptor = async (err: any) => {
  if (err.response && err.response.status) {
    err.code = parseInt(err.response.status, 10);

    if (err.code === 401 && !err.request.responseURL.match('images|settings')) {
      clearToken();
      window.location.href = '/login';
    }
  }

  return Promise.reject(err);
};

export default onResponseErrorInterceptor;
