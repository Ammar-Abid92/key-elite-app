import {API_MODES} from '@Constants/api';
import {SERVICE_CONFIG_URLS} from '@Constants/api_urls';
import {request} from '@Service/requestService';
import {UseMutationOptions, useMutation} from '@tanstack/react-query';
import {
  ForgotPasswordRequest,
  ResetPasswordRequest,
  SignupRequest,
  VerifyOtpRequest,
  VerifyResetPasswordOtpRequest,
} from './RequestTypes';
import {TokenResponse} from './ResponseTypes';

export function forgotPassword(
  options?: UseMutationOptions<string, any, ForgotPasswordRequest>,
) {
  return useMutation({
    mutationFn: async payload => {
      const {data} = await request({
        url: SERVICE_CONFIG_URLS.USER.FORGOT_PASSWORD,
        method: API_MODES.POST,
        params: payload,
      });
      return data;
    },
    ...options,
  });
}

export function resetPassword(
  options?: UseMutationOptions<unknown, any, ResetPasswordRequest>,
) {
  return useMutation({
    mutationFn: async params => {
      const {data} = await request({
        url: SERVICE_CONFIG_URLS.USER.RESET_PASSWORD,
        method: API_MODES.POST,
        params,
      });
      return data;
    },
    ...options,
  });
}

export function signup(
  options?: UseMutationOptions<string, any, SignupRequest>,
) {
  return useMutation({
    mutationFn: async payload => {
      const {data} = await request({
        url: SERVICE_CONFIG_URLS.USER.REGISTER,
        method: API_MODES.POST,
        params: payload,
      });

      return data?.Data;
    },
    ...options,
  });
}

export function requestOtp(options?: UseMutationOptions<string, any, string>) {
  return useMutation({
    mutationFn: async payload => {
      const {data} = await request({
        url: SERVICE_CONFIG_URLS.USER.REQUEST_OTP,
        method: API_MODES.GET,
        params: {email: payload},
      });
      return data;
    },
    ...options,
  });
}

export function verifyOtp(
  options?: UseMutationOptions<TokenResponse, any, VerifyOtpRequest>,
) {
  return useMutation({
    mutationFn: async payload => {
      const {data} = await request({
        url: SERVICE_CONFIG_URLS.USER.VERIFY_OTP,
        method: API_MODES.POST,
        params: payload,
      });
      return data;
    },
    ...options,
  });
}

export function verifyResetPasswordOtp(
  options?: UseMutationOptions<string, any, VerifyResetPasswordOtpRequest>,
) {
  return useMutation({
    mutationFn: async payload => {
      const {data} = await request({
        url: SERVICE_CONFIG_URLS.USER.VERIFY_RESET_PASSWORD_OTP,
        method: API_MODES.POST,
        params: payload,
      });
      return data;
    },
    ...options,
  });
}

export function logout(options?: UseMutationOptions<string, any>) {
  return useMutation({
    mutationFn: async () => {
      const {data} = await request({
        url: SERVICE_CONFIG_URLS.USER.LOGOUT,
        method: API_MODES.POST,
      });
      return data;
    },
    ...options,
  });
}

export function toggleBiometrics(
  options?: UseMutationOptions<string, any, string>,
) {
  return useMutation({
    mutationFn: async payload => {
      const {data} = await request({
        url: SERVICE_CONFIG_URLS.USER.TOGGLE_BIOMETRICS,
        method: API_MODES.PATCH,
        params: {
          publicKey: payload,
        },
        showLoader: true,
      });
      return data;
    },
    ...options,
  });
}
