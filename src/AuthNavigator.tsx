import {Colors} from '@Theme/Colors';
import {
  NavigationContainer,
  Theme,
  DefaultTheme,
} from '@react-navigation/native';
import * as React from 'react';
import AppStack from './navigators/AppStack';
import AuthStack from './navigators/AuthStack';
import {navigationRef} from './services/navigationService';
import useStartupService from '@Service/startupService';

export default function AuthNavigator() {
  const {initialRouteName, isAuth} = useStartupService();

  const config: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.BACKGROUND,
      background: Colors.APP_BACKGROUND,
      
    },
  };

  return (
    <>
      <NavigationContainer ref={navigationRef} theme={config}>
        {isAuth ? (
          <AppStack initialRouteName={initialRouteName} />
        ) : (
          <AuthStack />
        )}
      </NavigationContainer>
    </>
  );
}
