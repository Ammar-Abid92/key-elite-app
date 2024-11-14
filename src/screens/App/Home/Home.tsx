import Metrics from '@Utility/Metrics';
import {logoutSuccess} from '@Utility/Utils';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Dashboard, Item} from './HomeComponent';
import {useHome} from './HomeContainer';
import NavigationRoutes from '@Navigator/NavigationRoutes';

export default function Home({navigation}: {navigation: any}) {
  const {I18n, handleNavigation} = useHome();

  // logoutSuccess();

  return (
    <View style={styles.homeContainer}>
      <Dashboard
        title="Astros"
        sport={{
          name: 'MLA',
          image: require('@Asset/images/sport.png'),
        }}
        organization={{
          name: 'The Astros Company',
          image: require('@Asset/images/organization.png'),
        }}
        I18n={I18n}
      />
      <Item
        icon={require('@Asset/icons/Housing.svg')}
        title={I18n.housing}
        handlePress={() => {
          handleNavigation(NavigationRoutes.APP_STACK.HOUSING);
        }}
      />
      <Item
        icon={require('@Asset/icons/Maintenance.svg')}
        title={I18n.maintenance_request}
        handlePress={() => {
          handleNavigation(NavigationRoutes.APP_STACK.MAINTENANCE_REQUEST);
        }}
      />
      <Item
        icon={require('@Asset/icons/Arrival.svg')}
        title={I18n.arrival_instructions}
        handlePress={() => {
          handleNavigation(NavigationRoutes.APP_STACK.ARRIVAL_INSTRUCTIONS);
        }}
      />
      <Item
        icon={require('@Asset/icons/Upload.svg')}
        title={I18n.upload}
        handlePress={() => {
          handleNavigation(NavigationRoutes.APP_STACK.UPLOAD_DL_CC);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    paddingVertical: Metrics.verticalScale(20),
    paddingHorizontal: Metrics.scale(20),
  },
  avatarStyle: {
    borderRadius: Metrics.scale(40),
    height: Metrics.scale(40),
    width: Metrics.scale(40),
  },
  mr15: {
    marginRight: Metrics.scale(15),
  },
});
