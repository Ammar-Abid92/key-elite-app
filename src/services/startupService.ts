import {getUserInfo} from '@Api/Personal';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {setLoggedInUserData} from '@ReusableFunctions/index';
import {useAuthStore} from '@Store/authStore';
import {hideSplash} from '@Utility/Utils';
import * as React from 'react';
import {getItem} from './storageService';

export default function useStartupService() {
  const {isAuth} = useAuthStore();

  // const {data, isSuccess} = getUserInfo();

  // React.useEffect(() => {
  //   if (isSuccess) {
  //     console.log('data', data);
  //     setLoggedInUserData(data);
  //   }
  // }, [isSuccess, data]);

  React.useEffect(() => {
    // if ((isSuccess || isError) && isAuth) hideSplash();
    hideSplash();
  }, []);

  const localLang = getItem('language');
  const getInitialRouteName = React.useMemo(() => {
    if (isAuth) {
      return Boolean(localLang)
        ? NavigationRoutes.APP_STACK.APP_DRAWER
        : NavigationRoutes.APP_STACK.CHOOSE_LANGUAGE;
    } else {
      return NavigationRoutes.AUTH_STACK.LOGIN;
    }
  }, [isAuth, localLang]);

  return {
    isAuth,
    initialRouteName: getInitialRouteName,
  };
}
