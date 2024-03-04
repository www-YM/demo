import { AuthResponseData } from 'api/resources/AuthResource';

function setItem(key: string, value: any) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, value);
  }
}

function getItem(key: string) {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key);
  }
}

function removeItem(key: string) {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(key);
  }
}

export function saveToken(token: string) {
  setItem('INKPOD_TOKEN', token);
}

export function getToken(): string {
  return getItem('INKPOD_TOKEN');
}

export function clearToken() {
  removeItem('INKPOD_TOKEN');
}

export function setShopMeta(data: AuthResponseData) {
  setItem('INKPOD_SHOP_META', JSON.stringify(data));
}

export function getShopMeta(): AuthResponseData {
  return getItem('INKPOD_SHOP_META')
    ? JSON.parse(getItem('INKPOD_SHOP_META'))
    : null;
}

export function clearShopMeta() {
  removeItem('INKPOD_SHOP_META');
}

export function saveRegistrationCode(code: string) {
  setItem('REGISTRATION_CODE', code);
}

export function getRegistrationCode() {
  return getItem('REGISTRATION_CODE');
}

export function clearRegistrationCode() {
  removeItem('REGISTRATION_CODE');
}

// 未保存设计
const DESIGN_UNSAVED = 'DESIGN_UNSAVED';
export type DesignUnsaved = {
  id: string;
  productId: string | number;
  designData: DesignData;
  designModel: DesignModel;
};
export function setDesignUnsaved(design: DesignUnsaved[]) {
  setItem(DESIGN_UNSAVED, JSON.stringify(design));
}
export function getDesignUnsaved(): DesignUnsaved[] {
  return JSON.parse(getItem(DESIGN_UNSAVED) || '[]');
}
export function clearDesignUnsaved() {
  setItem(DESIGN_UNSAVED, '[]');
}
