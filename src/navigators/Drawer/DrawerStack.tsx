import {Colors} from '@Theme/Colors';
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import NavigationRoutes from '../NavigationRoutes';
import DrawerContent from './DrawerContent';
import {defaultHeader} from '@Navigator/headers';

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
        name={NavigationRoutes.APP_STACK.HOME}
        getComponent={() => require('@Screens/App/Home/Home').default}
        {...defaultHeader(true)}
      />
      <Screen
        name={NavigationRoutes.APP_STACK.MY_PROFILE}
        getComponent={() => require('@Screens/App/MyProfile/MyProfile').default}
        {...defaultHeader(true)}
      />
      <Screen
        name={NavigationRoutes.APP_STACK.LANGUAGE_SETTINGS}
        getComponent={() =>
          require('@Screens/App/ChooseLanguage/ChooseLanguage').default
        }
        {...defaultHeader(true)}
      />
    </Navigator>
  );
}
