import React, {useEffect, useState} from 'react';
import {Animated} from 'react-native';

import {Colors} from '@Theme/Colors';
import {IInputControl} from './type';
import {isEmpty} from '@Utility/Utils';

export default function useMaterialTextInput(props: IInputControl) {
  const {onFocus, onBlur, onPress, isPassword, value, showValue = true} = props;

  const animationInstance = React.useRef(
    new Animated.Value(!isEmpty(value) ? 1 : 0),
  ).current;

  function animate(toValue: number) {
    Animated.timing(animationInstance, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }

  useEffect(() => {
    animate(!isEmpty(value) && showValue ? 1 : 0);
  }, [value]);

  const [showPassword, setShowPassword] = useState(false);

  function handleFocus() {
    animate(1);
    onFocus?.();
  }

  function handleBlur() {
    animate(!isEmpty(value) && showValue ? 1 : 0);
    onBlur?.();
  }

  function handleIconPress() {
    isPassword ? setShowPassword(!showPassword) : onPress?.();
  }

  const animatedStyles = {
    containerStyle: {
      borderColor: animationInstance.interpolate({
        inputRange: [0, 1],
        outputRange: [Colors.GREY, Colors.NAVY_BLUE],
      }),
    },
  };

  return {
    animatedStyles,
    handleFocus,
    handleBlur,
    handleIconPress,
    showPassword,
  };
}
