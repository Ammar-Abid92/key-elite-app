import React from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import Heading from '@Components/TextComponents/Heading';
import {Colors} from '@Theme/Colors';
import Fonts, {FontTypes} from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import {ImageSourcePropType} from 'react-native';
import Input from '../Input/Input';
import useMaterialTextInput from './MaterialTextInputContainer';
import {IInputControl} from './type';
import Icon from '@Components/Icon/Icon';

const icon: {
  [key: string]: ImageSourcePropType;
} = {
  false: require('@Asset/icons/PasswordHide/PasswordHide.png'),
  true: require('@Asset/icons/PasswordShow/PasswordShow.png'),
};

export default function MaterialTextInput(props: IInputControl) {
  const {
    as: Component = Input,
    label,
    LeftIcon,
    RightIcon,
    error,
    containerStyle,
    wrapperStyle,
    value,
    onBlur,
    onFocus,
    onPress,
    isPassword,
    labelStyle,
    labelLines,
    numberOfLines = 1,
    showValue = true,
    ...rest
  } = props;

  const {
    animatedStyles,
    handleFocus,
    handleBlur,
    handleIconPress,
    showPassword,
  } = useMaterialTextInput(props);

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      {Boolean(label) && (
        <Heading
          style={labelStyle}
          numberOfLines={numberOfLines}
          text={label}
          size={14}
          color={Colors.NAVY_BLUE}
          type={FontTypes.Bold}
        />
      )}
      <Animated.View
        style={[
          styles.container,
          containerStyle,
          animatedStyles.containerStyle,
        ]}>
        {!!LeftIcon && (
          <View style={styles.iconWrapper}>
            <Icon source={LeftIcon} fill="transparent" />
          </View>
        )}
        <Component
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          {...(isPassword && {secureTextEntry: !showPassword})}
          showValue={showValue}
          {...rest}
        />
        {(isPassword || !!RightIcon) && (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={handleIconPress}
            disabled={!isPassword || !!onPress}
            style={styles.iconWrapper}
            hitSlop={{top: 10, bottom: 10, left: 5, right: 5}}>
            <Image
              source={isPassword ? icon[String(showPassword)] : RightIcon}
              resizeMode="contain"
              style={styles.icon}
            />
          </TouchableOpacity>
        )}
      </Animated.View>
      {!!error && (
        <Heading size={12} color={Colors.RED} marginTop={3} text={error} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Metrics.verticalScale(5),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: Metrics.verticalScale(10),
    backgroundColor: Colors.WHITE,
    borderRadius: Metrics.verticalScale(8),
    paddingHorizontal: Metrics.scale(10),
  },
  iconWrapper: {
    paddingHorizontal: Metrics.smallMargin,
  },
  icon: {width: Metrics.scale(20), height: Metrics.scale(20)},
  errorMessage: {
    ...Fonts.Medium(12, Colors.RED),
    marginTop: Metrics.scale(3),
  },
});
