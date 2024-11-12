import {getItem, setItem} from '@Service/storageService';
import {create} from 'zustand';
import {IAuthStore} from './type';
import STORAGE_CONST from '@Constants/storage';
import {TokenResponse} from '@Api/ResponseTypes';

export const useAuthStore = create<IAuthStore>(set => ({
  isAuth: Boolean(getItem(STORAGE_CONST.TOKEN)),
  setUserAuthentication: (isAuth: boolean, data: TokenResponse | null) => {
    if (data) {
      setItem(STORAGE_CONST.TOKEN, data);
    }
    set({isAuth});
  },
}));
