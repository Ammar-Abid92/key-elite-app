import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import NavigationRoutes from './NavigationRoutes';
import {defaultHeader} from './headers';

const Stack = createNativeStackNavigator();
const {Navigator, Screen} = Stack;

export default function AuthStack() {
  return (
    <Navigator initialRouteName={NavigationRoutes.AUTH_STACK.LOGIN}>
      {/* <Screen
        name={NavigationRoutes.AUTH_STACK.ONBOARDING}
        getComponent={() =>
          require('@Screens/Auth/Onboarding/Onboarding').default
        }
        options={{headerShown: false}}
      /> */}
      {/* <Screen
        name={NavigationRoutes.AUTH_STACK.WELCOME}
        getComponent={() => require('@Screens/Auth/Welcome/Welcome').default}
        options={{headerShown: false}}
      /> */}
      <Screen
        name={NavigationRoutes.AUTH_STACK.LOGIN}
        getComponent={() => require('@Screens/Auth/Login/Login').default}
        options={{headerShown: false}}
      />
      <Screen
        name={NavigationRoutes.AUTH_STACK.SIGN_UP}
        getComponent={() => require('@Screens/Auth/SignUp/SignUp').default}
        options={{headerShown: false}}
      />
      <Screen
        name={NavigationRoutes.AUTH_STACK.FORGOT_PASSWORD}
        getComponent={() =>
          require('@Screens/Auth/ForgotPassword/ForgotPassword').default
        }
        options={{headerShown: false}}
      />

      <Screen
        name={NavigationRoutes.AUTH_STACK.OTP}
        getComponent={() => require('@Screens/Auth/Otp/Otp').default}
        options={{headerShown: false}}
      />
      <Screen
        name={NavigationRoutes.AUTH_STACK.RESET_PASSWORD}
        getComponent={() =>
          require('@Screens/Auth/ResetPassword/ResetPassword').default
        }
        options={{headerShown: false}}
      />
    </Navigator>
  );
}
