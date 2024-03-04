import { getToken } from './local-storage-manager';

export function apiErrorMsg(err) {
  let result = err.response?.data.message || err.message;

  result = Array.isArray(result) ? result.join(', ') : result;

  return result;
}

export function isClient() {
  return typeof window !== 'undefined';
}

export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function isLogined() {
  if (!isClient()) {
    return false;
  }

  return !!getToken();
}

export const randomStr = (len = 20): string => {
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  const maxPos = chars.length;
  let pwd = '';
  for (let i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd + Date.now();
};

export function removeEmoji(chars: string) {
  return chars.replace(
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
    '',
  );
}

export const getDatetime = () => {
  const date = new Date();
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');
};

export const getSuffix = (fileType: string): string =>
  '.' + fileType.replace('image/', '');

export const generateRandomName = (fileType: string, len: number): string => {
  return randomStr(len) + getSuffix(fileType);
};

/**
 * 首字母大写
 */
export const capitalizeFirstLetter = (string: string) =>
  string.replace(/^\S/, (s) => s.toUpperCase());

export function firstWhere<T>(items: T[], key: string, value: any): T {
  return items.find((item) => item[key] === value);
}

export function pluckId<T>(items: any[], key = 'id'): T[] {
  return items.map((item) => item[key]);
}

export function uniqueHandler(value, index, self) {
  return self.indexOf(value) === index;
}
