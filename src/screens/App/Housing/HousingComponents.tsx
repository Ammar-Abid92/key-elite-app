import Heading from '@Components/TextComponents/Heading';
import {FontTypes} from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const TitleValue = ({title, value}: {title: string; value: string}) => {
  return (
    <View style={styles.infoRow}>
      <Heading text={title} size={14} style={styles.w120} />
      <Heading
        text={value}
        size={14}
        type={FontTypes.Bold}
        alignment="right"
        numberOfLines={2}
        style={styles.w180}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: Metrics.scale(10),
  },
  w180: {
    width: Metrics.scale(180),
  },
  w120: {
    width: Metrics.scale(120),
  },
});
