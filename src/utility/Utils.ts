import STORAGE_CONST from '@Constants/storage';
import { clearAllData, getItem, setItem } from '@Service/storageService';
import { useAuthStore } from '@Store/authStore';
import { InfiniteData } from '@tanstack/query-core';
import { queryClient } from '@Api/Client';
import { ProfileResponse, TokenResponse } from '@Api/ResponseTypes';
import dayjs, { Dayjs } from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import { Alert, Linking, Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
// import SplashScreen from 'react-native-splash-screen';
// import NotificationService from '@Service/notificationService';

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(advancedFormat);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

const isPlatformAndroid = Platform.OS === 'android';
const isPlatformIOS = Platform.OS === 'ios';

async function openURL(url: string): Promise<void> {
  try {
    const supported = await Linking.canOpenURL(url);
    if (!supported) {
      console.warn("Can't handle url: " + url);
    } else {
      await Linking.openURL(url);
    }
  } catch (error) {
    console.error('An error occurred', error);
  }
}

function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let inDebounce = false;
  let timeoutId: NodeJS.Timeout;
  return (...args) => {
    if (!inDebounce) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      func(...args);
      inDebounce = true;
      timeoutId = setTimeout(() => {
        inDebounce = false;
        clearTimeout(timeoutId);
      }, delay);
    }
  };
}

function isEmpty(
  value: string | number | boolean | Array<any> | object | undefined | null,
): boolean {
  return (
    value === undefined ||
    value === null ||
    value === false ||
    value === 0 ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
}

function createDynamicUrl(dynamicUrl: string, object: any): string {
  for (const key in object) {
    dynamicUrl = dynamicUrl.replace(`{${key}}`, object[key]);
  }
  return dynamicUrl;
}

const getUserToken = (): any => {
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

const setLoggedInUserData = (_data: ProfileResponse) => {
  setItem(STORAGE_CONST.USER_INFO, _data);
  queryClient.setQueryData([STORAGE_CONST.USER_INFO], _data);
};

function normalizeInfiniteQuery<T>(
  queryData: InfiniteData<{data: Array<T>}, number>,
) {
  return queryData?.pages.flatMap(({data}) => data);
}

const convertDateTime = (
  date: string | number | Dayjs | Date = new Date(),
  format = 'MMM DD, YYYY',
  fromCurrentTime = false,
) => {
  if (fromCurrentTime) {
    return dayjs(date).fromNow();
  }
  return dayjs(date).format(format);
};

const logoutSuccess = async () => {
  useAuthStore.getState().setUserAuthentication(false, null);
  queryClient.clear();
  clearAllData();
  // await NotificationService.deleteToken();
};

const makeArray = (length: number) => {
  return Array.from({length}, (_, i) => i + 1);
};

const getDeviceInfo = async () => {
  // const fcmToken = await NotificationService.getFCMToken();
  // return {
  //   fcmToken: fcmToken,
  //   deviceType: isPlatformAndroid ? DeviceType.Android : DeviceType.iOS,
  //   appVersion: getVersion(),
  // };
};

const getCountryData = (countryCode?: string) => {
  // const data = queryClient.getQueryData([
  //   STORAGE_CONST.COUNTRIES,
  //   '',
  //   null,
  // ]) as Country[];

  // if (!countryCode || !data)
  //   return {
  //     callingCode: '+1',
  //     countryCode: 'US',
  //     countryName: 'United States',
  //     flag: 'https://flagcdn.com/w320/us.png',
  //   };

  // return data?.find(({countryCode: code}) => code === countryCode);
};

function valueNormalizer(
  val: number | string,
  character: string = '$',
  withDecimal: boolean = false,
): string {
  let formattedValue: string | number;

  if (typeof val === 'number' && withDecimal) {
    formattedValue = val.toFixed(2);
  } else {
    formattedValue = val;
  }

  return `${character}${formattedValue}`;
}

const decodePolyline = (encodedPolyline: any) => {
  const polyLineArray = [];
  let index = 0;
  const len = encodedPolyline.length;
  let lat = 0;
  let lng = 0;

  while (index < len) {
    let shift = 0;
    let result = 0;
    let byte;

    do {
      byte = encodedPolyline.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);

    const dlat = result & 1 ? ~(result >> 1) : result >> 1;
    lat += dlat;

    shift = 0;
    result = 0;

    do {
      byte = encodedPolyline.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);

    const dlng = result & 1 ? ~(result >> 1) : result >> 1;
    lng += dlng;

    const point = {latitude: lat / 1e5, longitude: lng / 1e5};
    polyLineArray.push(point);
  }

  return polyLineArray;
};

// const fetchDirections = async (params: GetBookingRouteRequest) => {
//   const {currentPickup, destination, waypoints} = params;
//   const {latitude: initialLat, longitude: initialLng} = currentPickup;
//   const {latitude: destLat, longitude: destLng} = destination;

//   let url = '';
//   const waypointsParams =
//     waypoints
//       ?.map(waypoint => `${waypoint?.latitude},${waypoint?.longitude}`)
//       .join('|') || '';

//   url = `https://maps.googleapis.com/maps/api/directions/json?origin=${initialLat},${initialLng}&destination=${destLat},${destLng}&waypoints=${waypointsParams}&key=${GOOGLE_API_KEY}`;

//   try {
//     const response = await fetch(url);
//     if (response.status === 200) {
//       const data = await response.json();

//       const {routes} = data;
//       if (routes.length > 0) {
//         // polyline
//         const {overview_polyline} = routes[0];
//         const points = overview_polyline.points;
//         const polyLineArray = decodePolyline(points);

//         return polyLineArray;
//       }
//     } else {
//       console.log('Error in fetching directions');
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

function showAlert(
  title = 'Title',
  desc = 'Description',
  cbOnAccept = () => {},
  acceptText = 'Accept',
) {
  Alert.alert(title, desc, [
    {
      text: 'Cancel',
      onPress: () => {},
      style: 'cancel',
    },
    {text: acceptText, onPress: cbOnAccept},
  ]);
}

function getDates(n: number = 7, isTodayIncluded = false) {
  return Array.from({length: n}, (_, i) => {
    return {
      date: dayjs().add(i + (isTodayIncluded ? 0 : 1), 'day'),
      isSelected: false,
      isDisabled: false,
    };
  });
}

function convertMinToHours(min: number) {
  const hours = Math.floor(min / 60);
  const minutes = min % 60;
  const seconds = Math.floor((min % 1) * 60);
  return {
    hours: hours.toString().padStart(2, '0'),
    minutes: minutes.toString().padStart(2, '0'),
    seconds: seconds.toString().padStart(2, '0'),
  };
}

function hideSplash() {
  setTimeout(SplashScreen.hide, 2000);
}

export {
  convertDateTime,
  convertMinToHours,
  createDynamicUrl,
  debounce,
  decodePolyline,
  // fetchDirections,
  getCountryData, getDates, getDeviceInfo,
  getLoggedInUserData, getUserToken,
  hideSplash,
  isEmpty,
  isPlatformAndroid,
  isPlatformIOS,
  logoutSuccess,
  makeArray,
  normalizeInfiniteQuery,
  openURL,
  setLoggedInUserData,
  setUserToken,
  showAlert,
  valueNormalizer
};

