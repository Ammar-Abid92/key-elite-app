import {ImageRequireSource, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

export type TIcon = SvgProps & {
  source: ImageRequireSource;
  fill?: string;
  height?: number;
  width?: number;
  style?: ViewStyle;
};
