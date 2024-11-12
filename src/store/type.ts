import {TokenResponse} from '@Api/ResponseTypes';

export type IAuthStore = {
  isAuth: boolean;
  setUserAuthentication: (isAuth: boolean, data: TokenResponse | null) => void;
};

export type IAppModalEvent = {
  modalVisible: boolean;
  type: string;
  onAccept?: Function | null;
  onReject?: Function | null;
  toggle: (
    modalVisible: boolean,
    type?: string,
    onAccept?: Function,
    onReject?: Function,
    closeOnPress?: boolean,
  ) => void;
  setLoading?: (isLoading: boolean) => void;
  isLoading?: boolean;
  closeOnPress?: boolean;
};
