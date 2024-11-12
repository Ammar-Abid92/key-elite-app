import {APP_PRIMARY_TEXT} from '@Theme/Colors';
import Fonts, {FontFamily, FontTypes} from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {Text, TextProps} from 'react-native';
import {HeadingProps} from './type';

export const Heading = (props: HeadingProps & TextProps) => {
  const {
    type = FontTypes.Regular,
    text = '',
    size = 20,
    color = APP_PRIMARY_TEXT,
    style = {},
    marginBottom = 0,
    marginTop = 0,
    onPress = null,
    alignment = 'left',
    fontFamily = FontFamily.default,
    ...rest
  } = props;

  return (
    <Text
      style={[
        {
          ...Fonts[type](size, color, fontFamily),
          marginBottom: Metrics.verticalScale(marginBottom),
          marginTop: Metrics.verticalScale(marginTop),
          textAlign: alignment,
        },
        style,
      ]}
      {...(onPress && {onPress})}
      {...rest}>
      {text}
    </Text>
  );
};

export default Heading;
