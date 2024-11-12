import {queryClient} from '@Api/Client';
import {TokenResponse} from '@Api/ResponseTypes';
import {BASE_URLS, CONTENT_TYPE, HTTP_STATUS} from '@Constants/api';
import {SERVICE_CONFIG_URLS} from '@Constants/api_urls';
import {
  getDeviceInfo,
  getUserToken,
  logoutSuccess,
  setUserToken,
} from '@ReusableFunctions/index';
import {onlineManager} from '@tanstack/query-core';
import {ApiResponse, ApisauceConfig, create} from 'apisauce';
import {clearAllData} from './storageService';

export const apiSauceInstance = create({
  baseURL: BASE_URLS.TEST,
  headers: {
    Accept: CONTENT_TYPE.JSON,
    'Accept-Language': 'en-US',
  },
});

async function get(url: string, queryParams?: {}, config?: {}) {
  const response = await apiSauceInstance.get(url, queryParams, config);
  return handleResponse(response);
}

async function post(url: string, data?: object, config?: ApisauceConfig) {
  const response = await apiSauceInstance.post(url, data, config);
  return handleResponse(response);
}

async function put(url: string, data?: object, config?: ApisauceConfig) {
  const response = await apiSauceInstance.put(url, data, config);
  return handleResponse(response);
}

async function patch(url: string, data?: object, config?: ApisauceConfig) {
  const response = await apiSauceInstance.patch(url, data, config);
  return handleResponse(response);
}

async function deleteReq(
  url: string,
  queryParams?: object,
  config?: ApisauceConfig,
) {
  const response = await apiSauceInstance.delete(url, queryParams, config);
  return handleResponse(response);
}

export function handleResponse(response: ApiResponse<any>) {
  // console.log('API RESPONSE----->', response);
  // if (response?.status === HTTP_STATUS.UNAUTHORIZED) {
  //   useAppModal
  //     .getState()
  //     .toggle(true, APP_MODAL_EVENTS.UNAUTHORIZED, logoutSuccess);
  // }
  const mutatedResponse = {
    ok: response?.ok,
    data: response?.data,
    status: response?.status ?? 0,
    problem: response?.problem,
  };
  return mutatedResponse;
}

apiSauceInstance.addRequestTransform(({headers}) => {
  headers!['Authorization'] = `Bearer ${getUserToken()?.token}`;
});

let isRefreshing = false;

function refreshToken(response: ApiResponse<any, any>) {
  if (
    response?.status == HTTP_STATUS.UNAUTHORIZED &&
    !response?.config?.url?.includes(SERVICE_CONFIG_URLS.TOKEN.REFRESH_TOKEN) &&
    !response?.config?.url?.includes(SERVICE_CONFIG_URLS.TOKEN.LOGIN_TOKEN)
  ) {
    onlineManager.setOnline(false);
    const userTokens = getUserToken();
    const deviceInfo = getDeviceInfo();

    if (!isRefreshing && userTokens) {
      isRefreshing = true;

      if (userTokens) {
        apiSauceInstance
          .post<TokenResponse>(SERVICE_CONFIG_URLS.TOKEN.REFRESH_TOKEN, {
            token: userTokens?.token,
            refreshToken: userTokens?.refreshToken,
            ...deviceInfo,
          })
          .then(res => {
            if (!res.ok) {
              // EventBusSingleton.publish('openSessionExpiredModal');
              logoutSuccess();
            } else {
              setUserToken(res.data);
            }
          })
          .catch(() => {})
          .finally(() => (isRefreshing = false));
      } else {
        queryClient.clear();
        clearAllData();
      }
    }
    onlineManager.setOnline(true);
  }
}

apiSauceInstance.addResponseTransform(response => {
  refreshToken(response);
});

export default {
  get,
  post,
  patch,
  put,
  delete: deleteReq,
};
