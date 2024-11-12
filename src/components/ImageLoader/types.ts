import {ReactNode} from 'react';
import {
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  ViewStyle,
} from 'react-native';

export type ImageLoaderProps = {
  style?: ImageStyle | ImageStyle[];
  source: ImageSourcePropType;
  containerStyle?: ViewStyle | ViewStyle[];
  children?: ReactNode;
  resizeMode?: ImageResizeMode;
};
