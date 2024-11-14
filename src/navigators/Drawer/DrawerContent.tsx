import Icon from '@Components/Icon/Icon';
import ImageLoader from '@Components/ImageLoader/ImageLoader';
import Heading from '@Components/TextComponents/Heading';
import {DRAWER_LIST} from '@Constants/app_constants';
import {useLanguageContext} from '@Context/languageContext';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {getCurrentRouteName, navigate} from '@Service/navigationService';
import {Colors} from '@Theme/Colors';
import {FontTypes} from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import {getLoggedInUserData, logoutSuccess} from '@Utility/Utils';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function DrawerContent() {
  const loggedInUser = getLoggedInUserData();
  const {I18n} = useLanguageContext();
  // const {profile} = loggedInUser;

  const profile = {
    name: 'John Doe',
    firstName: 'John',
    lastName: 'Doe',
    picture: null,
  };

  // const {data} = getUserInfo();

  const handlePress = (route: string) => () => {
    navigate(route, {fromDrawer: true});
  };

  const initials =
    `${profile?.firstName?.charAt(0)}${profile?.lastName?.charAt(0)}` ||
    profile?.name;

  return (
    <View
      style={[
        styles.mainDrawerContainer,
        {marginTop: Metrics.verticalScale(useSafeAreaInsets().top + 40)},
      ]}>
      <View style={styles.containerStyle}>
        <ImageLoader
          source={
            profile?.picture
              ? {uri: profile.picture}
              : require('@Asset/images/DummyUser.png')
          }
          style={[styles.avatarStyle, styles.ml10]}
          containerStyle={styles.avatarStyle}
          initials={initials}
        />
        <View style={{width: '70%'}}>
          <Heading
            style={styles.ml20}
            text={profile?.name || 'Name'}
            size={20}
            numberOfLines={2}
            type={FontTypes.Bold}
            color={Colors.BLACK_TWO}
          />
        </View>
      </View>
      <View style={styles.line} />
      <DrawerContentScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mt30}
        contentContainerStyle={styles.pt0}>
        {DRAWER_LIST.map(item => {
          const focused = getCurrentRouteName() === item.route;
          return (
            <DrawerItem
              icon={drawerIcon(item.icon)}
              key={item.title}
              label={drawerTitle(I18n[item.title as keyof typeof I18n])}
              onPress={handlePress(item.route)}
              focused={focused}
              style={[styles.drawerItemStyle, focused && styles.bgRed]}
            />
          );
        })}
      </DrawerContentScrollView>
      <Heading
        text={`KeyElite V1.0.0`} //${getVersion()}
        size={14}
        color={Colors.STEEL}
        alignment="center"
      />
    </View>
  );
}

const drawerTitle =
  (label: string) =>
  ({focused}: {focused: boolean}) => {
    return (
      <Heading
        type={focused ? FontTypes.Bold : FontTypes.Regular}
        text={label}
        size={12}
        color={focused ? Colors.WHITE : Colors.BLACK_TWO}
      />
    );
  };

const drawerIcon =
  (icon: any) =>
  ({focused}: {focused: boolean}) => {
    return <Icon height={24} width={24} source={icon} fill="transparent" />;
  };

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarStyle: {
    borderRadius: Metrics.scale(40),
    height: Metrics.scale(40),
    width: Metrics.scale(40),
  },
  mainDrawerContainer: {
    marginBottom: Metrics.verticalScale(20),
    marginLeft: Metrics.scale(10),
    marginRight: Metrics.scale(15),
    flex: 1,
  },
  drawerItemStyle: {
    width: '100%',
    borderRadius: Metrics.scale(10),
    marginLeft: 0,
  },
  bgRed: {
    backgroundColor: Colors.NAVY_BLUE,
  },
  selfCenter: {alignSelf: 'center'},
  ml20: {marginLeft: Metrics.scale(20), maxWidth: '70%'},
  ml10: {marginLeft: Metrics.scale(10)},
  mt30: {marginTop: Metrics.verticalScale(30)},
  pt0: {paddingTop: 0},
  line: {
    height: 1,
    backgroundColor: Colors.BLACK_TWO,
    opacity: 0.5,
    width: '80%',
    alignSelf: 'center',
    marginTop: Metrics.verticalScale(20),
  },
});
