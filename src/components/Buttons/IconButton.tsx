import {rowAlign, rowCenter} from '@Theme/AppStyles';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {IIconButton} from './types';
import Heading from '@Components/TextComponents/Heading';
import Icon from '@Components/Icon/Icon';

export default function IconButton({
  onPress,
  style = {},
  source,
  notifications,
  imageStyle,
  disabled,
  hitSlop = {top: 5, bottom: 5, left: 5, right: 5},
  activeOpacity = 0.6,
  imageHeight = Metrics.scale(20),
  imageWidth = Metrics.scale(20),
  iconFill = 'transparent',
}: IIconButton & TouchableOpacityProps) {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={[rowAlign, style]}
      onPress={onPress}
      hitSlop={hitSlop}
      disabled={disabled}>
      {Boolean(notifications) && (
        <View style={styles.notificationBadge}>
          <Heading size={11} color={Colors.WHITE} text={notifications} />
        </View>
      )}
      <Icon
        source={source}
        style={imageStyle}
        width={imageWidth}
        height={imageHeight}
        fill={iconFill}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  notificationBadge: {
    position: 'absolute',
    backgroundColor: Colors.RED,
    borderRadius: Metrics.scale(12),
    paddingHorizontal: Metrics.scale(4),
    justifyContent: 'center',
    alignItems: 'center',
    top: Metrics.scale(-2),
    right: Metrics.scale(-2),
    zIndex: 1,
  },
});
