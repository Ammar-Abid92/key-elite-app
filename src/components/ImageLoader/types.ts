import {ReactNode} from 'react';
import {
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';

export type ImageLoaderProps = {
  style?: StyleProp<ImageStyle>;
  source: ImageSourcePropType;
  containerStyle?: StyleProp<ViewStyle>;
  children?: ReactNode;
  resizeMode?: ImageResizeMode;
  initials?: string;
  initialsSize?: number;
};