import {API_MODES} from '@Constants/api';
import {SERVICE_CONFIG_URLS} from '@Constants/api_urls';
import STORAGE_CONST from '@Constants/storage';
import {request} from '@Service/requestService';
import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import {ProfileResponse} from './ResponseTypes';
import {ChangePasswordRequest, UpdateProfileRequest} from './RequestTypes';
import {useAuthStore} from '@Store/authStore';

export function getUserInfo(
  options?: Omit<
    UseQueryOptions<ProfileResponse, any, ProfileResponse>,
    'queryKey'
  >,
) {
  return useQuery({
    queryKey: [STORAGE_CONST.USER_INFO],
    queryFn: async () => {
      const {data} = await request({
        url: SERVICE_CONFIG_URLS.PERSONAL.PROFILE,
        method: API_MODES.GET,
      });
      return data;
    },
    ...options,
  });
}

export function updateUserProfile(
  options?: UseMutationOptions<unknown, any, UpdateProfileRequest>,
) {
  return useMutation({
    mutationFn: async params => {
      const {data} = await request({
        url: SERVICE_CONFIG_URLS.PERSONAL.PROFILE,
        method: API_MODES.PUT,
        params,
      });
      return data;
    },
    ...options,
  });
}

export function changePassword(
  options?: UseMutationOptions<unknown, any, ChangePasswordRequest>,
) {
  return useMutation({
    mutationFn: async params => {
      const {data} = await request({
        url: SERVICE_CONFIG_URLS.PERSONAL.CHANGE_PASSWORD,
        method: API_MODES.PUT,
        params,
      });
      return data;
    },
    ...options,
  });
}
