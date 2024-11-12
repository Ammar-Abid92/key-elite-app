import {FontTypes} from '@Theme/Fonts';
import {
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type IIconButton = {
  style?: ViewStyle;
  source: ImageSourcePropType;
  notifications?: number;
  imageStyle?: ImageStyle | ImageStyle[];
  disabled?: boolean;
  hitSlop?: any;
  activeOpacity?: number;
};

export type IAppButton = {
  title: string;
  onPress?: (...a: any) => void;
  onLongPress?: Function;
  textStyle?: TextStyle | ViewStyle[];
  imageStyle?: ImageStyle;
  imageSource?: ImageSourcePropType;
  iconAfterText?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  fontSize?: number;
  fontColor?: string;
  fontType?: FontTypes;
};
