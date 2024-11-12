import {
  forgotPassword,
  requestOtp,
  verifyOtp,
  verifyResetPasswordOtp,
} from '@Api/User';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {navigate, resetToRoutes} from '@Service/navigationService';
import {useRoute} from '@react-navigation/native';
import React from 'react';
import BackgroundTimer from 'react-native-background-timer';
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {OtpScreenParams} from './type';
import {useAuthStore} from '@Store/authStore';
import {
  getDeviceId,
  getUniqueIdSync,
  getVersion,
} from 'react-native-device-info';
import {useLanguageContext} from '@Context/languageContext';
import {OtpRoutes} from '@Constants/enums';

const TIMER_COUNT_DOWN = 60;
const CELL_COUNT = 5;

export default function useOtp() {
  const {navigatedFrom, email} = useRoute().params as OtpScreenParams;
  const {setUserAuthentication} = useAuthStore();
  const {I18n} = useLanguageContext();

  function handleSubmit() {
    navigate(NavigationRoutes.AUTH_STACK.RESET_PASSWORD, {
      email: email,
      token: value,
    });
  }

  const [value, setValue] = React.useState('');
  const [timer, setTimer] = React.useState(0);
  const interval = React.useRef(0);

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  React.useEffect(() => {
    if (timer) {
      interval.current = BackgroundTimer.setInterval(timerHandler, 1000);
    }
    return () => BackgroundTimer.clearInterval(interval.current);
  }, [timer]);

  function timerHandler() {
    if (timer > 0) {
      setTimer(prev => prev - 1);
    } else {
      BackgroundTimer.clearInterval(interval.current);
    }
  }

  const {mutate: ResendEmail} = requestOtp({
    onSuccess: () => {
      setTimer(TIMER_COUNT_DOWN);
    },
  });

  function handleResend() {
    console.log('----->', navigatedFrom);
    if (navigatedFrom == OtpRoutes.SIGNUP) {
      // ResendEmail(email);
      setTimer(TIMER_COUNT_DOWN);
    } else if (navigatedFrom == OtpRoutes.FORGOT_PASSWORD) {
      console.log('forgotPwResend');
      // ResendEmail(email);
      setTimer(TIMER_COUNT_DOWN);
    }
  }

  function handleBack() {
    resetToRoutes([{name: NavigationRoutes.AUTH_STACK.LOGIN}]);
  }

  return {
    handleSubmit,
    value,
    setValue,
    timer,
    ref,
    props,
    getCellOnLayoutHandler,
    CELL_COUNT,
    navigatedFrom,
    handleResend,
    isLoading: false,
    I18n,
    handleBack,
  };
}
