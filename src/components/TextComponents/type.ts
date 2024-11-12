import {FontTypes} from '@Theme/Fonts';
import {ImageSourcePropType, TextStyle, ViewStyle} from 'react-native';

export type HeadingProps = {
  type?: FontTypes;
  text?: string | number;
  size?: number;
  color?: string;
  alignment?: TextStyle['textAlign'];
  style?: TextStyle;
  marginBottom?: number;
  marginTop?: number;
  onPress?: () => void;
  numberOfLines?: number;
  fontFamily?: string;
};

export type TitleProps = {
  text: string;
  onPress?: () => void;
  imageSource?: ImageSourcePropType;
  fontSize?: number;
  fontColor?: string;
  fontType?: FontTypes;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  underlined?: boolean;
  rightAligned?: boolean;
  hitSlop?: {
    top: number;
    left: number;
    bottom: number;
    right: number;
  };
};

export type TextIconProps = {
  icon: ImageSourcePropType;
  text: string;
  textSecondary?: string;
  onPress?: () => void;
  style?: ViewStyle;
};
