import IconButton from '@Components/Buttons/IconButton';
import Heading from '@Components/TextComponents/Heading';
import {pop, toggleDrawer} from '@Service/navigationService';
import {APP_PRIMARY_TEXT, Colors} from '@Theme/Colors';
import Fonts, {FontTypes} from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import {isPlatformIOS} from '@Utility/Utils';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const defaultHeader = (drawer = false): any => {
  return {
    options: ({route}: {route: any}) => {
      const {rightComponent} = route.params || {};
      return {
        headerTitleStyle: {
          ...Fonts.SemiBold(18, APP_PRIMARY_TEXT),
        },
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: Colors.APP_BACKGROUND,
          height: Metrics.scale(isPlatformIOS ? 110 : 90),
        },
        headerShadowVisible: false,
        ...(drawer
          ? {
              headerLeft: () => <DrawerIcon />,
            }
          : {
              header: ({route, navigation}: NativeStackHeaderProps) => (
                <View
                  style={[
                    styles.customDrawerStyle,
                    {
                      paddingTop: useSafeAreaInsets().top,
                    },
                  ]}>
                  <View style={styles.leftContainer}>
                    {navigation.canGoBack() && (
                      <IconButton
                        source={require('@Asset/icons/ArrowBack.svg')}
                        onPress={() => pop()}
                      />
                    )}
                  </View>
                  {/* <Heading
                    type={FontTypes.SemiBold}
                    size={18}
                    text={route.name}
                  /> */}
                  {rightComponent ?? <View style={styles.leftContainer} />}
                </View>
              ),
            }),
      };
    },
  };
};

export const DrawerIcon = () => {
  return (
    <IconButton
      source={require('@Asset/icons/Menu.svg')}
      onPress={toggleDrawer}
      imageStyle={styles.ml10}
      imageHeight={20}
      imageWidth={20}
    />
  );
};

const styles = StyleSheet.create({
  ml10: {
    marginLeft: Metrics.scale(20),
  },
  customDrawerStyle: {
    backgroundColor: Colors.APP_BACKGROUND,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: Metrics.scale(10),
    height: Metrics.scale(isPlatformIOS ? 100 : 90),
  },
  leftContainer: {
    height: Metrics.scale(40),
    width: Metrics.scale(40),
    backgroundColor: Colors.TRANSPARENT,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
