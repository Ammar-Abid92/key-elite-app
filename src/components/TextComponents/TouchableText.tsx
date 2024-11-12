import Metrics from '@Utility/Metrics';
import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Heading from './Heading';
import {TitleProps} from './type';
import {Colors} from '@Theme/Colors';
import {row} from '@Theme/AppStyles';
import {FontTypes} from '@Theme/Fonts';

function TouchableText(props: TitleProps & TouchableOpacityProps) {
  const {
    text = '',
    onPress = () => {},
    imageSource = null,
    fontSize = 16,
    fontColor = Colors.SKY_BLUE,
    fontType = FontTypes.SemiBold,
    containerStyle = {},
    disabled = false,
    textStyle = {},
    underlined = false,
    rightAligned = false,
    hitSlop = {top: 10, bottom: 10, left: 10, right: 10},
    onLongPress = () => {},
  } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      hitSlop={hitSlop}
      style={[containerStyle, rightAligned ? styles.rowReverse : row]}
      onLongPress={onLongPress}
      delayLongPress={300}
      disabled={disabled || !onPress}>
      {imageSource && <Image source={imageSource} style={styles.mr4} />}
      <Heading
        type={fontType}
        text={text}
        color={fontColor}
        size={fontSize}
        style={[textStyle, underlined && styles.underlined]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  underlined: {
    textDecorationLine: 'underline',
  },
  mr4: {
    marginRight: Metrics.scale(4),
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
});

export default TouchableText;
