import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import NavigationRoutes from './NavigationRoutes';
import {defaultHeader} from './headers';

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
        getComponent={() =>
          require('@Screens/App/ChooseLanguage/ChooseLanguage').default
        }
        options={{headerShown: false}}
      />
      <Screen
        name={NavigationRoutes.APP_STACK.HOUSING}
        getComponent={() => require('@Screens/App/Housing/Housing').default}
        {...defaultHeader(false)}
      />
      <Screen
        name={NavigationRoutes.APP_STACK.MAINTENANCE_REQUEST}
        getComponent={() =>
          require('@Screens/App/Maintenance/Maintenance').default
        }
        {...defaultHeader(false)}
      />
      <Screen
        name={NavigationRoutes.APP_STACK.ARRIVAL_INSTRUCTIONS}
        getComponent={() =>
          require('@Screens/App/ArrivalInstruction/ArrivalInstruction').default
        }
        {...defaultHeader(false)}
      />
      <Screen
        name={NavigationRoutes.APP_STACK.UPLOAD_DL_CC}
        getComponent={() =>
          require('@Screens/App/UploadDocument/UploadDocument').default
        }
        {...defaultHeader(false)}
      />
    </Navigator>
  );
}
