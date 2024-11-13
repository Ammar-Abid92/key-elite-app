import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import NavigationRoutes from './NavigationRoutes';

const Stack = createNativeStackNavigator();
const {Navigator, Screen} = Stack;

type AppStackProps = {
  initialRouteName: string;
};

export default function AppStack(props: AppStackProps) {
  const {initialRouteName} = props;

  return (
    <Navigator initialRouteName={initialRouteName}>
      <Screen
        name={NavigationRoutes.APP_STACK.APP_DRAWER}
        getComponent={() => require('./Drawer/DrawerStack').default}
        options={{headerShown: false}}
      />
      <Screen
        name={NavigationRoutes.APP_STACK.CHOOSE_LANGUAGE}
        getComponent={() => require('@Screens/App/ChooseLanguage/ChooseLanguage').default}
        options={{headerShown: false}}
      />
    </Navigator>
  );
}
