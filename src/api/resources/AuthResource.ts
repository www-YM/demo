import { BaseResource } from './BaseResource';

export interface AuthResponseData {
  id: string;
  token: string;
  email: string;
}

export default class AuthResource extends BaseResource {
  get getProfileFromWowUrl() {
    return this.baseURL + '/shops/auth/wow';
  }

  get loginUrl() {
    return this.baseURL + '/accounts/auth/login';
  }

  get registerUrl() {
    return this.baseURL + '/accounts/register';
  }

  get sendResetEmailUrl() {
    return this.baseURL + '/accounts/password-reset-email';
  }

  get resetPasswordUrl() {
    return this.baseURL + '/accounts/password-reset';
  }

  get confirmRegistrationUrl() {
    return this.baseURL + '/accounts/email-confirmation';
  }

  get getGuestStsTokenUrl() {
    return this.baseURL + '/accounts/sts-token/artworks/guests';
  }

  get getLoginedUserStsTokenUrl() {
    return this.baseURL + '/accounts/sts-token/artworks';
  }

  getProfileFromWow(params: { wowToken: string }): Promise<AuthResponseData> {
    return this.axios.get(this.getProfileFromWowUrl, { params });
  }

  register(params: {
    email: string;
    password: string;
  }): Promise<AuthResponseData> {
    return this.axios.post(this.registerUrl, params);
  }

  login(params: {
    email: string;
    password: string;
  }): Promise<AuthResponseData> {
    return this.axios.post(this.loginUrl, params);
  }

  sendResetEmail(params: { email: string }) {
    return this.axios.post(this.sendResetEmailUrl, params);
  }

  resetPassword(params: { email: string; code: string; password: string }) {
    return this.axios.post(this.resetPasswordUrl, params);
  }

  confirmRegistration(params: { code: string }): Promise<AuthResponseData> {
    return this.axios.post(this.confirmRegistrationUrl, params);
  }

  getGuestStsToken() {
    return this.axios.get(this.getGuestStsTokenUrl);
  }

  getLoginedUserStsToken() {
    return this.axios.get(this.getLoginedUserStsTokenUrl);
  }
}
