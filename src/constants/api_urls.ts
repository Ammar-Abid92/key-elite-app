const userController = 'users';
const tokens = 'tokens';
const personal = 'personal';

export const SERVICE_CONFIG_URLS = {
  TOKEN: {
    LOGIN_TOKEN: `${tokens}`,
    REFRESH_TOKEN: `${tokens}/refresh`,
    LOGIN_VIA_BIOMETRICS: `${tokens}/verify-biometrics`,
  },
  USER: {
    FORGOT_PASSWORD: `${userController}/forgot-password`,
    RESET_PASSWORD: `${userController}/reset-password`,
    REGISTER: `${userController}/self-register`,
    REQUEST_OTP: `${userController}/request-otp`,
    VERIFY_OTP: `${userController}/verify-otp`,
    VERIFY_RESET_PASSWORD_OTP: `${userController}/verify-password-otp`,
    LOGOUT: `${userController}/logout`,
    TOGGLE_BIOMETRICS: `${userController}/toggle-biometrics`,
  },
  PERSONAL: {
    PROFILE: `${personal}/profile`,
    CHANGE_PASSWORD: `${personal}/change-password`,
  },
};
