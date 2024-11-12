import { ReactElement } from 'react';
import { ImageRequireSource, ViewStyle } from 'react-native';

export interface IInputControl {
  as?: (a: any) => ReactElement;
  label?: string;
  LeftIcon?: ImageRequireSource;
  RightIcon?: ImageRequireSource;
  error?: string;
  containerStyle?: ViewStyle;
  wrapperStyle?: ViewStyle;
  labelStyle?: ViewStyle;
  value?: string;
  onBlur?: Function;
  onFocus?: Function;
  onPress?: Function;
  isPassword?: boolean;
  labelLines?: number;
  numberOfLines?: number;
  showValue?: boolean;
}
