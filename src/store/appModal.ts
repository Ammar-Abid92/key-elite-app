import {create} from 'zustand';
import {IAppModalEvent} from './type';
import {APP_MODAL_EVENTS} from '@Constants/app_constants';

export const useAppModal = create<IAppModalEvent>(set => ({
  modalVisible: false,
  isLoading: false,
  onReject: null,
  type: APP_MODAL_EVENTS.LOGOUT,
  onAccept: null,
  toggle: (
    modalVisible: boolean = false,
    type?: string,
    onAccept?: Function,
    onReject?: Function,
    closeOnPress: boolean = true,
  ) => {
    set({modalVisible, type, onAccept, onReject, closeOnPress});
  },
  setLoading: (isLoading: boolean) => set({isLoading}),
  closeOnPress: true,
}));
