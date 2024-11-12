import {APP_PRIMARY_TEXT} from './Colors';
import Metrics from '@Utility/Metrics';

export const FontFamily = {
  default: 'PlusJakartaSans',
  Poppins: 'Poppins',
};

export enum FontTypes {
  Bold = 'Bold',
  ExtraBold = 'ExtraBold',
  Light = 'Light',
  ExtraLight = 'ExtraLight',
  Medium = 'Medium',
  Regular = 'Regular',
  SemiBold = 'SemiBold',
  Thin = 'Thin',
}

const Size = {
  xxxSmall: 11,
  xxSmall: 13,
  xSmall: 14,
  small: 15,
  normal: 16,
  medium: 19,
  large: 21,
  xLarge: 23,
  xxLarge: 28,
  xxxLarge: 31,
  huge: 34,
  xhuge: 37,
  xxhuge: 40,
  xxxhuge: 43,
};

const font = (
  type = FontTypes.Bold,
  size = Size.normal,
  color = APP_PRIMARY_TEXT,
  fontFamily = FontFamily.default,
) => {
  return {
    fontFamily: fontFamily + '-' + type,
    fontSize: Metrics.generatedFontSize(size),
    color,
  };
};

const Regular = (
  size = Size.normal,
  color = APP_PRIMARY_TEXT,
  fontFamily = FontFamily.default,
) => {
  return font(FontTypes.Regular, size, color, fontFamily);
};

const Bold = (
  size = Size.normal,
  color = APP_PRIMARY_TEXT,
  fontFamily = FontFamily.default,
) => {
  return font(FontTypes.Bold, size, color, fontFamily);
};

const ExtraBold = (
  size = Size.normal,
  color = APP_PRIMARY_TEXT,
  fontFamily = FontFamily.default,
) => {
  return font(FontTypes.ExtraBold, size, color, fontFamily);
};

const SemiBold = (
  size = Size.normal,
  color = APP_PRIMARY_TEXT,
  fontFamily = FontFamily.default,
) => {
  return font(FontTypes.SemiBold, size, color, fontFamily);
};

const Light = (
  size = Size.normal,
  color = APP_PRIMARY_TEXT,
  fontFamily = FontFamily.default,
) => {
  return font(FontTypes.Light, size, color, fontFamily);
};

const ExtraLight = (
  size = Size.normal,
  color = APP_PRIMARY_TEXT,
  fontFamily = FontFamily.default,
) => {
  return font(FontTypes.ExtraLight, size, color, fontFamily);
};

const Medium = (
  size = Size.normal,
  color = APP_PRIMARY_TEXT,
  fontFamily = FontFamily.default,
) => {
  return font(FontTypes.Medium, size, color, fontFamily);
};

const Thin = (
  size = Size.normal,
  color = APP_PRIMARY_TEXT,
  fontFamily = FontFamily.default,
) => {
  return font(FontTypes.Thin, size, color, fontFamily);
};

const Fonts = {
  FontFamily,
  Size,
  font,
  Regular,
  Bold,
  SemiBold,
  Light,
  ExtraLight,
  Medium,
  Thin,
  ExtraBold,
};

export default Fonts;
