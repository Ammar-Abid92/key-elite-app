export type TokenRequest = {
  email: string;
  password: string;
  deviceId: string;
  appVersion: string;
  fcmToken: string;
  deviceName: string;
};

export type LoginViaBiometricsRequest = {
  userId: string;
  signature: string;
  deviceId: string;
  appVersion: string;
  fcmToken: string;
  deviceName: string;
};

export type ForgotPasswordRequest = {
  email: string;
};

export type ResetPasswordRequest = {
  email: string;
  password: string;
  token: string;
};

export type SignupRequest = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
};

export type VerifyOtpRequest = {
  otp: string;
  deviceId: string;
  appVersion: string;
  fcmToken: string;
  deviceName: string;
  email: string;
};

export type VerifyResetPasswordOtpRequest = {
  otp: string;
  email: string;
};

export type UpdateProfileRequest = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export type ChangePasswordRequest = {
  oldPassword: string;
  newPassword: string;
  logOutOfAllAccounts: boolean;
};
