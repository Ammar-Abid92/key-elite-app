import {getUserInfo} from '@Api/Personal';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {setLoggedInUserData} from '@ReusableFunctions/index';
import {useAuthStore} from '@Store/authStore';
import {hideSplash} from '@Utility/Utils';
import * as React from 'react';

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

  const getInitialRouteName = React.useMemo(() => {
    return isAuth
      ? NavigationRoutes.APP_STACK.APP_DRAWER
      : NavigationRoutes.AUTH_STACK.LOGIN;
  }, [isAuth]);

  return {
    isAuth,
    initialRouteName: getInitialRouteName,
  };
}
