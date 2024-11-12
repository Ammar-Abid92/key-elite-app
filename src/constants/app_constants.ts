import NavigationRoutes from '@Navigator/NavigationRoutes';

// TODO : Change the value of GOOGLE_API_KEY with your own key
export const GOOGLE_API_KEY = 'add your own api key';

export const DRAWER_LIST = [
  {
    title: 'Home Feed',
    route: NavigationRoutes.APP_STACK.BOTTOM_TAB,
    icon: '',
    // FOR BOTTOM TAB
    subRoutes: [NavigationRoutes.APP_STACK.HOME],
  },
  {
    title: 'My Profile',
    route: NavigationRoutes.APP_STACK.MY_PROFILE,
    icon: '',
  },
  {
    title: 'Settings',
    route: NavigationRoutes.APP_STACK.SETTINGS,
    icon: '',
  },
  {
    title: 'Change Password',
    route: NavigationRoutes.APP_STACK.CHANGE_PASSWORD,
    icon: '',
  },
  {
    title: 'Logout',
    route: NavigationRoutes.AUTH_STACK.LOGIN,
    icon: '',
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

export const ONBOARDING_DATA = [
  {
    id: 1,
    image: require('@Asset/images/OnboardingOne.png'),
    icon: require('@Asset/icons/ProgressOne.svg'),
    title: 'Heading',
    body: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
  },
  {
    id: 2,
    image: require('@Asset/images/OnboardingTwo.png'),
    icon: require('@Asset/icons/ProgressTwo.svg'),
    title: 'Heading',
    body: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
  },
  {
    id: 3,
    image: require('@Asset/images/OnboardingThree.png'),
    icon: require('@Asset/icons/ProgressThree.svg'),
    title: 'Heading',
    body: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
  },
];
