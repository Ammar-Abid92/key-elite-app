import Heading from '@Components/TextComponents/Heading';
import {rowSpaceBetween} from '@Theme/AppStyles';
import {APP_PRIMARY_COLOR, Colors} from '@Theme/Colors';
import {FontTypes} from '@Theme/Fonts';
import React from 'react';
import {StyleSheet, Switch, View} from 'react-native';
import useSettings from './SettingsContainer';
import AppButton from '@Components/Buttons/AppButton';
import Metrics from '@Utility/Metrics';

export default function Settings() {
  const {isEnabled, toggleSwitch} = useSettings();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.itemContainer}>
        <Heading text="Biometric Login" type={FontTypes.Bold} size={15} />
        <Switch
          trackColor={{false: Colors.STEEL, true: Colors.LIGHT_GREY}}
          thumbColor={isEnabled ? APP_PRIMARY_COLOR : Colors.WHITE}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <AppButton title="Delete Account" style={styles.bgRed} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: Metrics.verticalScale(20),
    paddingHorizontal: Metrics.scale(10),
    flex: 1,
    justifyContent: 'space-between',
  },
  itemContainer: {
    ...rowSpaceBetween,
    backgroundColor: Colors.WHITE,
    paddingVertical: Metrics.verticalScale(10),
    paddingHorizontal: Metrics.scale(10),
    borderRadius: Metrics.scale(10),
  },
  bgRed: {
    backgroundColor: Colors.RED,
  },
});
