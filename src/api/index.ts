import axios, { AxiosRequestConfig } from 'axios';
import onRequestInterceptor from './interceptors/on-request-interceptor';
import onResponseInterceptor from './interceptors/on-response-interceptor';
import onResponseErrorInterceptor from './interceptors/on-response-error-interceptor';
import apiFactory from './resources';

// hack for socks5 when in development
const axiosOptions: AxiosRequestConfig = {};
// if (process.env.NODE_ENV === 'development' && typeof window === 'undefined') {
//   const SocksProxyAgent = require('socks-proxy-agent').SocksProxyAgent;
//   const httpsAgent = new SocksProxyAgent('socks5://0.0.0.0:1086');
//   axiosOptions.httpAgent = httpsAgent;
//   axiosOptions.httpsAgent = httpsAgent;
// }

const api = axios.create(axiosOptions);

api.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

api.interceptors.request.use(onRequestInterceptor);
api.interceptors.response.use(
  onResponseInterceptor,
  onResponseErrorInterceptor,
);

export default apiFactory(api);
