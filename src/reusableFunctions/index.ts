import {queryClient} from '@Api/Client';
import {ProfileResponse, TokenResponse} from '@Api/ResponseTypes';
import STORAGE_CONST from '@Constants/storage';
import {
  clearAllData,
  getItem,
  removeAllKeysExceptUserId,
  setItem,
} from '@Service/storageService';
import {useAuthStore} from '@Store/authStore';
import {InfiniteData} from '@tanstack/query-core';
import dayjs from 'dayjs';
import {
  getDeviceId,
  getUniqueIdSync,
  getVersion,
} from 'react-native-device-info';

var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);
var advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(advancedFormat);

const getUserToken = (): TokenResponse => {
  return (
    queryClient.getQueryData([STORAGE_CONST.TOKEN]) ??
    getItem(STORAGE_CONST.TOKEN) ??
    ''
  );
};

const setUserToken = (token?: TokenResponse) => {
  setItem(STORAGE_CONST.TOKEN, token);
  queryClient.setQueryData([STORAGE_CONST.TOKEN], token);
};

const getLoggedInUserData = (): ProfileResponse => {
  return (
    queryClient.getQueryData([STORAGE_CONST.USER_INFO]) ??
    getItem(STORAGE_CONST.USER_INFO) ??
    {}
  );
};

const normalizeInfiniteQuery = (
  data: InfiniteData<{Data: Array<any>}>,
): Array<any> => {
  return data?.pages.flatMap(({Data}) => Data);
};

const convertDateTime = (
  date: string | number | Date = new Date(),
  format = 'MMM DD, YYYY',
  fromCurrentTime = false,
) => {
  if (fromCurrentTime) {
    // @ts-ignore
    return dayjs(date).fromNow();
  }
  return dayjs(date).format(format);
};

const convertFromUnixIntoDate = (
  date: number | null = convertIntoUnix(new Date()),
) => dayjs.unix(date ?? 0).toDate();

const convertIntoUnix = (date: Date | string = new Date()) => {
  if (!date) return null;
  return dayjs(date).unix();
};

const convertFromUnix = (
  date: number,
  format: string = 'MMM DD, YYYY',
  fromCurrentTime: boolean = false,
) => {
  if (fromCurrentTime) {
    // @ts-ignore
    return dayjs.unix(date).fromNow();
  }
  return dayjs.unix(date).format(format);
};

const setLoggedInUserData = (_data: any) => {
  setItem(STORAGE_CONST.USER_INFO, _data);
  queryClient.setQueryData([STORAGE_CONST.USER_INFO], _data);
};

const logoutSuccess = async () => {
  // const {AlreadyAppleUser, AlreadyGoogleUser} = getLoggedInUserData();
  useAuthStore.getState().setUserAuthentication(false, null);
  queryClient.clear();
  removeAllKeysExceptUserId();
  // await NotificationService.deleteToken();
  // if (AlreadyGoogleUser) {
  //   await useSSOService().logoutFromGoogle();
  // } else if (AlreadyAppleUser) {
  //   await useSSOService().logoutFromApple();
  // }
};

const makeArray = (length: number) => {
  return Array.from({length}, (_, i) => i + 1);
};

const getDeviceInfo = () => {
  return {
    fcmToken: 'string',
    deviceId: getUniqueIdSync(),
    deviceName: getDeviceId(),
    appVersion: getVersion(),
  };
};

export {
  convertDateTime,
  convertFromUnix,
  convertFromUnixIntoDate,
  convertIntoUnix,
  getLoggedInUserData,
  getUserToken,
  logoutSuccess,
  makeArray,
  normalizeInfiniteQuery,
  setLoggedInUserData,
  setUserToken,
  getDeviceInfo,
};
