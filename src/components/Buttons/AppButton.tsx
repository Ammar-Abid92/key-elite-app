import Heading from '@Components/TextComponents/Heading';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {IAppButton} from './ButtonTypes';
import {FontTypes} from '@Theme/Fonts';

export default function AppButton({
  title = 'Click',
  style = {},
  fontSize = 16,
  fontColor = Colors.WHITE,
  fontType = FontTypes.Bold,
  imageStyle = {},
  imageSource,
  iconAfterText = false,
  disabled = false,
  isLoading = false,
  textStyle = {},
  ...rest
}: IAppButton & TouchableOpacityProps) {
  const isLoadingOrDisabled = disabled || isLoading;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={isLoadingOrDisabled}
      style={[
        styles.button,
        style,
        iconAfterText && styles.rowReverse,
        isLoadingOrDisabled && styles.disabled,
      ]}
      {...rest}>
      {imageSource && (
        <Image style={[styles.image, imageStyle]} source={imageSource} />
      )}
      <Heading
        type={fontType}
        text={title}
        color={fontColor}
        size={fontSize}
        style={textStyle}
      />
      {isLoading && (
        <ActivityIndicator style={styles.ml5} color={Colors.WHITE} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: Metrics.scale(48),
    paddingHorizontal: Metrics.baseMargin,
    borderRadius: Metrics.verticalScale(8),
    marginVertical: Metrics.verticalScale(5),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    backgroundColor: Colors.BLUE,
  },
  icon: {
    marginRight: Metrics.scale(10),
  },
  image: {
    width: Metrics.scale(24),
    height: Metrics.scale(24),
    marginHorizontal: Metrics.scale(20),
    resizeMode: 'contain',
  },
  ml5: {marginLeft: Metrics.scale(5)},
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  disabled: {
    opacity: 0.7,
    backgroundColor: Colors.GREY,
  },
});
