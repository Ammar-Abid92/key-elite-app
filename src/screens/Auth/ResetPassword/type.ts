export type NewPasswordForm = {
  password: string;
  confirmPassword: string;
};

export type NewPasswordPayload = {
  email: string;
  password: string;
  token: string;
};

export type NewPasswordParam = {
  token: string;
  email: string;
};
