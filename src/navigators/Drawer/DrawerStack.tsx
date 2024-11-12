import {Colors} from '@Theme/Colors';
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import NavigationRoutes from '../NavigationRoutes';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();
const {Navigator, Screen} = Drawer;

const DrawerConfig: DrawerNavigationOptions = {
  swipeEdgeWidth: 0,
  drawerType: 'slide',
  drawerStyle: {
    width: '65%',
    backgroundColor: Colors.WHITE,
  },
};

export default function DrawerStack() {
  return (
    <Navigator screenOptions={DrawerConfig} drawerContent={DrawerContent}>
      <Screen
        name={NavigationRoutes.APP_STACK.MY_PROFILE}
        getComponent={() => require('@Screens/App/MyProfile/MyProfile').default}
      />
      <Screen
        name={NavigationRoutes.APP_STACK.CHANGE_PASSWORD}
        getComponent={() =>
          require('@Screens/App/ChangePassword/ChangePassword').default
        }
      />
      <Screen
        name={NavigationRoutes.APP_STACK.SETTINGS}
        getComponent={() => require('@Screens/App/Settings/Settings').default}
      />
    </Navigator>
  );
}
