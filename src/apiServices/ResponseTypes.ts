export enum UserStatus {
  Unconfirmed = 100,
  Blocked = 200,
  Active = 300,
}

export type TokenResponse = {
  token: string;
  refreshToken: string;
  refreshTokenExpiryTime: string;
  isOnboarded?: boolean;
};

export type ProfileResponse = {
  email: string;
  emailConfirmed: boolean;
  firstName: string;
  id: string;
  imageUrl: string | null;
  isActive: boolean;
  lastName: string;
  phoneNumber: null;
  status: UserStatus;
  userName: string;
  isBiometricEnabled: boolean;
};
