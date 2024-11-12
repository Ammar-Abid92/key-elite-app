import {TIcon} from '@Components/Icon/types';
import {FontTypes} from '@Theme/Fonts';
import {
  ImageRequireSource,
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type IIconButton = {
  style?: StyleProp<ViewStyle>;
  source: ImageRequireSource;
  notifications?: number;
  imageStyle?: ImageStyle;
  disabled?: boolean;
  activeOpacity?: number;
  imageHeight?: number;
  imageWidth?: number;
  iconFill?: string;
};

export type IAppButton = {
  title: string;
  textStyle?: TextStyle | ViewStyle[];
  imageStyle?: ImageStyle;
  imageSource?: ImageRequireSource;
  iconAfterText?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  fontSize?: number;
  fontColor?: string;
  fontType?: FontTypes;
  iconProps?: Omit<TIcon, 'source' | 'style'>;
  captilize?: boolean;
};
