import {API_MODES} from '@Constants/api';
import {SERVICE_CONFIG_URLS} from '@Constants/api_urls';
import {request} from '@Service/requestService';
import {UseMutationOptions, useMutation} from '@tanstack/react-query';
import {LoginViaBiometricsRequest, TokenRequest} from './RequestTypes';
import {TokenResponse} from './ResponseTypes';

export function getTokens(
  options: UseMutationOptions<TokenResponse, any, TokenRequest>,
) {
  return useMutation({
    mutationFn: async payload => {
      const {data} = await request({
        url: SERVICE_CONFIG_URLS.TOKEN.LOGIN_TOKEN,
        method: API_MODES.POST,
        params: payload,
      });
      return data;
    },
    ...options,
  });
}

export function loginViaBiometrics(
  options: UseMutationOptions<TokenResponse, any, LoginViaBiometricsRequest>,
) {
  return useMutation({
    mutationFn: async payload => {
      const {data} = await request({
        url: SERVICE_CONFIG_URLS.TOKEN.LOGIN_VIA_BIOMETRICS,
        method: API_MODES.POST,
        params: payload,
      });
      return data;
    },
    ...options,
  });
}
