import { tokenKey, userKey } from "@/helper/config/envConfig";
import {
  getStoredData,
  removeStorageData,
  setStoredData,
} from "./localStorage";

interface UserInfo {
  [key: string]: any;
}

export const storeUserInfo = (data: UserInfo): void => {
  setStoredData(userKey(), data);
};
export const setAccessToken = (data: string): void => {
  setStoredData(tokenKey(), data);
};

export const getUserInfo = (): UserInfo | null => {
  return getStoredData(userKey());
};

export const getAccessToken = (): string | null => {
  return getStoredData(tokenKey());
};

export const removeUserInfo = (): void => {
  removeStorageData(userKey());
};

export const removeAccessToken = (): void => {
  removeStorageData(tokenKey());
};

export const isLoggedIn = (): boolean => {
  if (getUserInfo() && getAccessToken()) {
    return true;
  } else {
    return false;
  }
};
