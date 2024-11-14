import NavigationRoutes from '@Navigator/NavigationRoutes';

// TODO : Change the value of GOOGLE_API_KEY with your own key
export const GOOGLE_API_KEY = 'add your own api key';

export const DRAWER_LIST = [
  {
    title: 'home',
    route: NavigationRoutes.APP_STACK.HOME,
    icon: require('@Asset/icons/Home.svg'),
  },
  {
    title: 'profile',
    route: NavigationRoutes.APP_STACK.MY_PROFILE,
    icon: require('@Asset/icons/Person.svg'),
  },
  {
    title: 'languageSettings',
    route: NavigationRoutes.APP_STACK.LANGUAGE_SETTINGS,
    icon: require('@Asset/icons/World.svg'),
  },
];

export enum APP_MODAL_EVENTS {
  LOGOUT = 'LOGOUT',
  UNAUTHORIZED = 'UNAUTHORIZED',
  DEACTIVATE_ACCOUNT = 'DEACTIVATE_ACCOUNT',
}

export const ModalContent: {
  [key: string]: {
    title: string;
    description: string;
    acceptTitle: string;
    rejectTitle?: string;
  };
} = {
  LOGOUT: {
    title: 'Log Out',
    description: 'Are you sure you want to logout?',
    acceptTitle: 'Logout',
    rejectTitle: 'Cancel',
  },
  UNAUTHORIZED: {
    title: 'Session Expired',
    description: 'Your session has expired. Please login again.',
    acceptTitle: 'OK',
  },
  DEACTIVATE_ACCOUNT: {
    title: 'Deactivate Account',
    description:
      'When confirmed, your account will be automatically deleted within 30 days if there is no activity from your side (including login).\n\nAre you sure you wish to deactivate?',
    acceptTitle: 'Yes',
    rejectTitle: 'No',
  },
};
