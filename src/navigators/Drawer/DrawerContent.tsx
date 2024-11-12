import {logout} from '@Api/User';
import Heading from '@Components/TextComponents/Heading';
import {APP_MODAL_EVENTS, DRAWER_LIST} from '@Constants/app_constants';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {logoutSuccess} from '@ReusableFunctions/index';
import {getCurrentRouteName, navigate} from '@Service/navigationService';
import {useAppModal} from '@Store/appModal';
import {Colors} from '@Theme/Colors';
import {FontTypes} from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function DrawerContent() {
  const drawerTitle =
    (label: string) =>
    ({focused}: {focused: boolean}) => {
      return (
        <Heading
          type={focused ? FontTypes.Medium : FontTypes.Light}
          text={label}
          size={14}
          color={focused ? Colors.WHITE : Colors.CHARCOAL_GREY}
        />
      );
    };

  const logoutUser = () => {
    toggle(false);
    setLoading?.(false);
    logoutSuccess();
  };

  const {mutate: LogoutUser} = logout({
    onSettled: logoutUser,
  });

  const {toggle, setLoading} = useAppModal();

  const handlePress = (route: string) => () => {
    if (route == NavigationRoutes.AUTH_STACK.LOGIN) {
      toggle(
        true,
        APP_MODAL_EVENTS.LOGOUT,
        () => {
          setLoading?.(true);
          LogoutUser();
        },
        () => toggle(false),
        false,
      );
    } else {
      navigate(route);
    }
  };

  return (
    <View
      style={[
        styles.mainDrawerContainer,
        {
          marginTop: Metrics.verticalScale(useSafeAreaInsets().top),
        },
      ]}>
      <DrawerContentScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        {DRAWER_LIST.map(item => {
          const focused = item?.subRoutes
            ? item.subRoutes.includes(getCurrentRouteName() as string)
            : getCurrentRouteName() === item.route;
          return (
            <DrawerItem
              key={item.title}
              label={drawerTitle(item.title)}
              onPress={handlePress(item.route)}
              focused={focused}
              style={[
                styles.drawerItemStyle,
                focused && styles.focusedDrawerItemStyle,
              ]}
              // icon={() => (
              //   <Image
              //     source={item.icon}
              //     resizeMode="contain"
              //     style={styles.iconStyle}
              //   />
              // )}
            />
          );
        })}
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: 0,
    flexGrow: 1,
  },
  iconStyle: {
    width: Metrics.scale(18),
    height: Metrics.scale(18),
    alignSelf: 'center',
  },
  mainDrawerContainer: {
    marginBottom: Metrics.verticalScale(20),
    flex: 1,
  },
  drawerItemStyle: {
    marginHorizontal: Metrics.scale(10),
  },
  focusedDrawerItemStyle: {
    backgroundColor: Colors.CERULEAN,
    borderRadius: Metrics.scale(10),
    borderLeftWidth: Metrics.scale(10),
    borderLeftColor: Colors.CERULEAN,
  },
});
