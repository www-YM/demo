import { AxiosRequestConfig } from 'axios';

export function wowConfig() {
  return {
    axiosConfig: (): AxiosRequestConfig => {
      return {
        baseURL: process.env.NEXT_PUBLIC_WOW_NEXT_PUBLIC_API_BASE_URL,
        isSnakeCaseKeys: true,
      };
    },
  };
}
