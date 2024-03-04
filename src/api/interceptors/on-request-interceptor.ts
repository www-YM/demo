import { cloneDeep } from 'lodash';
import snakecaseKeys from 'snakecase-keys';
import camelcaseKeys from 'camelcase-keys';
import { AxiosRequestConfig } from 'axios';
import { getToken } from 'utils/local-storage-manager';

const onRequestInterceptor = (config: AxiosRequestConfig) => {
  const { headers, isSnakeCaseKeys, isCamelCaseKeys, isClearEmpties } = config;

  // inkpod api jwt token
  const token = getToken();
  if (token && !headers.Authorization) {
    headers.Authorization = `Bearer ${token}`;
  }

  if (isSnakeCaseKeys) {
    for (const type of ['params', 'data']) {
      if (config[type]) {
        config[type] = snakecaseKeys(config[type]);
      }
    }
  }

  if (isCamelCaseKeys) {
    for (const type of ['params', 'data']) {
      if (config[type]) {
        config[type] = camelcaseKeys(config[type]);
      }
    }
  }

  // 是否移除请求参数里的空字符串,空对象 默认为true
  if (isClearEmpties) {
    // 移除请求参数里的空字符串,空对象
    for (const type of ['params', 'data']) {
      if (headers['Content-Type'] === 'multipart/form-data') {
        break;
      }
      config[type] = _clearEmpties(cloneDeep(config[type]));
    }
  }

  return config;
};

/**
 * 移除空字符、空数组、空对象
 * @param {object} object 对象
 * @return {object} 移除空字符、空数组、空对象后的对象
 */
const _clearEmpties = (object: any) => {
  for (const key in object) {
    const value = object[key];
    if (value === '' || value === null || value === undefined) {
      delete object[key];
    } else if (typeof value === 'object') {
      if (Array.isArray(value) && !value.length) {
        delete object[key];
        continue;
      }

      _clearEmpties(value);
      if (!Object.keys(value).length) {
        delete object[key];
      }
    }
  }

  return object;
};

export default onRequestInterceptor;
